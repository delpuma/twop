#!/bin/bash

# Apply database schema to Supabase
# Run this with: bash apply-schema.sh

SUPABASE_URL="https://flzwpiyepxdlagaegxop.supabase.co"
SERVICE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsendwaXllcHhkbGFnYWVneG9wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTU5ODY2MCwiZXhwIjoyMDg3MTc0NjYwfQ.xjSpVdtcRzqc2ogCklSYmnAx0KivJ0XU1HBK7DoqTMw"

echo "Applying schema to Supabase..."
echo ""
echo "Go to: https://supabase.com/dashboard/project/flzwpiyepxdlagaegxop/editor"
echo "Click: SQL Editor → New Query"
echo "Paste the contents of: supabase/schema.sql"
echo "Click: Run"
echo ""
echo "This will create all tables: signatures, sponsor_leads, volunteers, contact_messages, intake_requests, letters, partners"
