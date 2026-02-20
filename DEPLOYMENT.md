# Vercel Deployment Setup

## Critical: Environment Variables

Your forms are failing because Vercel doesn't have the environment variables. 

### Go to Vercel Dashboard:
1. Open your project: https://vercel.com/delpumas-projects/twop
2. Go to Settings → Environment Variables
3. Add these THREE variables (for Production, Preview, and Development):

```
NEXT_PUBLIC_SUPABASE_URL=https://flzwpiyepxdlagaegxop.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsendwaXllcHhkbGFnYWVneG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1OTg2NjAsImV4cCI6MjA4NzE3NDY2MH0.PAgrRDamKVejmMGzHhVMLNKI8sli_cIEGYbtNukQe-I

SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsendwaXllcHhkbGFnYWVneG9wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTU5ODY2MCwiZXhwIjoyMDg3MTc0NjYwfQ.xjSpVdtcRzqc2ogCklSYmnAx0KivJ0XU1HBK7DoqTMw
```

4. Click "Save"
5. Redeploy your site (Deployments → click "..." → Redeploy)

## Database Setup

### Go to Supabase Dashboard:
1. Open: https://supabase.com/dashboard/project/flzwpiyepxdlagaegxop
2. Go to SQL Editor
3. Click "New Query"
4. Paste the contents of `supabase/schema.sql`
5. Click "Run"

This will create all necessary tables including the `partners` table.

## After Setup

Once both steps are complete:
- Forms will work ✅
- Partners section will load ✅
- Admin dashboard will function ✅
