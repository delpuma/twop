
# Warrior Outreach Project — Next.js + Supabase (v3)

## Features included
- Victory Pointe landing page with signatures + live counters (supporters, letters, sponsor leads, pledged pipeline)
- Sponsor, Volunteer, Contact forms (stored in Supabase)
- Veteran intake pre-screen (stored in Supabase)
- Letters of support templates + upload portal (Supabase Storage bucket: `letters`)
- Public impact dashboard
- AI Q&A widget (lightweight keyword retrieval from local knowledge base)
- Admin CSV export endpoint (protected by ADMIN_KEY)

## Supabase setup
1) Create a new Supabase project.
2) Run `supabase/schema.sql` in Supabase SQL Editor.
3) Storage: Create a bucket named `letters`.
   - Option A (simple): Make bucket public (so links work).
   - Option B (recommended): Keep private and change `/api/letters` to return signed URLs.

## Environment variables (Vercel)
Set these in Vercel Project Settings:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY  (server-only)
- ADMIN_KEY  (server-only, long random string)

## Admin exports
GET /api/admin/export?type=signatures&key=ADMIN_KEY
Types: signatures, sponsors, volunteers, contacts, intake, letters

## Run locally
npm install
npm run dev
