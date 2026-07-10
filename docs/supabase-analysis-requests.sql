-- DeepTicker analysis request board setup
--
-- 1. Create a Supabase project.
-- 2. Open SQL Editor and run this file.
-- 3. Replace YOUR_ADMIN_EMAIL@example.com with the email address that should be
--    allowed to delete or update requests from the website.
-- 4. Copy Project URL and anon public key into data/request-board-config.js.
--
-- The anon public key is intentionally public. Do not put a service-role key in
-- this static site.

create extension if not exists pgcrypto;

create table if not exists public.analysis_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  anon_name text not null check (char_length(anon_name) between 4 and 40),
  asset_type text not null check (asset_type in ('ETF', '주식', '기타')),
  asset_name text not null check (char_length(asset_name) between 1 and 80),
  message text not null check (char_length(message) between 1 and 700),
  status text not null default 'new' check (status in ('new', 'reviewing', 'done', 'skipped')),
  hidden boolean not null default false,
  expires_at timestamptz not null default (now() + interval '7 days')
);

alter table public.analysis_requests
add column if not exists expires_at timestamptz not null default (now() + interval '7 days');

alter table public.analysis_requests enable row level security;

drop policy if exists "Public can read visible requests" on public.analysis_requests;
create policy "Public can read visible requests"
on public.analysis_requests
for select
using (hidden = false and expires_at > now());

drop policy if exists "Public can insert requests" on public.analysis_requests;
create policy "Public can insert requests"
on public.analysis_requests
for insert
with check (
  hidden = false
  and status = 'new'
  and asset_type in ('ETF', '주식', '기타')
  and char_length(asset_name) between 1 and 80
  and char_length(message) between 1 and 700
  and expires_at <= now() + interval '8 days'
);

drop policy if exists "Admin can update requests" on public.analysis_requests;
create policy "Admin can update requests"
on public.analysis_requests
for update
using ((auth.jwt() ->> 'email') = 'YOUR_ADMIN_EMAIL@example.com')
with check ((auth.jwt() ->> 'email') = 'YOUR_ADMIN_EMAIL@example.com');

drop policy if exists "Admin can delete requests" on public.analysis_requests;
create policy "Admin can delete requests"
on public.analysis_requests
for delete
using ((auth.jwt() ->> 'email') = 'YOUR_ADMIN_EMAIL@example.com');
