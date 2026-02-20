
-- SIGNATURES
create table if not exists signatures (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  full_name text not null,
  email text not null,
  zip text not null,
  is_resident boolean default false,
  comment text default '',
  source text default 'victory-pointe'
);

-- SPONSOR LEADS
create table if not exists sponsor_leads (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  org_name text not null,
  contact_name text not null,
  email text not null,
  phone text default '',
  interest text not null,
  pledged_amount numeric default 0,
  message text default ''
);

-- VOLUNTEERS
create table if not exists volunteers (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  full_name text not null,
  email text not null,
  phone text default '',
  interests text default '',
  availability text default ''
);

-- CONTACT
create table if not exists contact_messages (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  full_name text not null,
  email text not null,
  topic text not null,
  message text not null
);

-- INTAKE REQUESTS
create table if not exists intake_requests (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  full_name text not null,
  email text default '',
  phone text not null,
  branch text default '',
  needs text[] default '{}'::text[],
  is_homeless text not null,
  urgent_medical text not null,
  location text default '',
  notes text default ''
);

-- LETTERS OF SUPPORT (uploaded to Supabase Storage bucket: letters)
create table if not exists letters (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  org_name text not null,
  contact_name text not null,
  email text not null,
  file_path text not null,
  file_url text not null
);

-- STORAGE NOTE:
-- Create a storage bucket named: letters
-- If you want public URLs to work, set bucket visibility to public, or replace getPublicUrl usage with signed URLs.

-- PARTNERS / SPONSORS
create table if not exists partners (
  id bigint generated always as identity primary key,
  created_at timestamp with time zone default now(),
  name text not null,
  logo_url text not null,
  website text default '',
  description text default '',
  display_order int default 0,
  is_active boolean default true
);
