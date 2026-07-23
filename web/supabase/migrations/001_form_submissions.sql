-- Run this in the Supabase SQL editor.
-- Contact, Ownership Network, and Newsletter form submissions.

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  reason text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_submissions_email_idx
  on contact_submissions (email);

create table if not exists ownership_network_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  channel text not null,
  created_at timestamptz not null default now()
);

create index if not exists ownership_network_applications_email_idx
  on ownership_network_applications (email);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);
