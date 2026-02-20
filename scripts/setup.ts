import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';

config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function setup() {
  console.log('📋 Running schema...');
  
  const schema = readFileSync(join(process.cwd(), 'supabase/schema.sql'), 'utf-8');
  const { error: schemaError } = await supabase.rpc('exec_sql', { sql: schema }).catch(() => ({ error: 'RPC not available - run schema manually in Supabase SQL Editor' }));
  
  if (schemaError) {
    console.log('⚠️  Could not run schema automatically.');
    console.log('Please run supabase/schema.sql in Supabase SQL Editor manually, then run: npm run seed');
    return;
  }

  console.log('✓ Schema created');
  console.log('\n🌱 Seeding database...');

  await supabase.from('signatures').insert([
    { full_name: 'John Smith', email: 'john@example.com', zip: '34711', is_resident: true, comment: 'Proud to support our veterans!' },
    { full_name: 'Mary Johnson', email: 'mary@example.com', zip: '34711', is_resident: true, comment: 'This is exactly what Clermont needs.' },
    { full_name: 'Robert Davis', email: 'robert@example.com', zip: '34714', is_resident: false, comment: 'Supporting from nearby!' },
    { full_name: 'Sarah Wilson', email: 'sarah@example.com', zip: '34711', is_resident: true, comment: '' },
    { full_name: 'Michael Brown', email: 'michael@example.com', zip: '34711', is_resident: true, comment: 'Thank you for honoring our heroes.' }
  ]);
  console.log('✓ Added 5 signatures');

  await supabase.from('sponsor_leads').insert([
    { org_name: 'Clermont Construction Co', contact_name: 'Tom Anderson', email: 'tom@clermontconstruction.com', phone: '352-555-0100', interest: 'Station Sponsor', pledged_amount: 25000, message: 'Would like to sponsor Army station' },
    { org_name: 'Lake County Builders', contact_name: 'Lisa Martinez', email: 'lisa@lakebuilders.com', phone: '352-555-0200', interest: 'Program Sponsor', pledged_amount: 50000, message: 'Interested in workforce program sponsorship' },
    { org_name: 'Victory Auto Group', contact_name: 'James Taylor', email: 'james@victoryauto.com', phone: '352-555-0300', interest: 'Honor Plaza', pledged_amount: 100000, message: 'Want to sponsor the main plaza area' }
  ]);
  console.log('✓ Added 3 sponsor leads');

  await supabase.from('volunteers').insert([
    { full_name: 'Jennifer White', email: 'jennifer@example.com', phone: '352-555-1001', interests: 'Event planning, fundraising', availability: 'Weekends' },
    { full_name: 'David Garcia', email: 'david@example.com', phone: '352-555-1002', interests: 'Construction, mentorship', availability: 'Flexible' },
    { full_name: 'Emily Rodriguez', email: 'emily@example.com', phone: '352-555-1003', interests: 'Healthcare navigation, case management', availability: 'Weekday evenings' }
  ]);
  console.log('✓ Added 3 volunteers');

  await supabase.from('contact_messages').insert([
    { full_name: 'Patricia Lee', email: 'patricia@example.com', topic: 'Partnership', message: 'Our church would like to partner with meal preparation.' },
    { full_name: 'William Clark', email: 'william@example.com', topic: 'General', message: 'How can I donate furniture for the housing program?' }
  ]);
  console.log('✓ Added 2 contact messages');

  await supabase.from('intake_requests').insert([
    { full_name: 'James Thompson', email: 'james.t@example.com', phone: '352-555-2001', branch: 'Army', needs: ['Housing', 'Healthcare navigation', 'Job / training'], is_homeless: 'yes', urgent_medical: 'no', location: 'Clermont', notes: 'Recently discharged, need stable housing' },
    { full_name: 'Carlos Martinez', email: '', phone: '352-555-2002', branch: 'Marines', needs: ['Housing', 'Food / clothing', 'Benefits / paperwork'], is_homeless: 'at-risk', urgent_medical: 'no', location: 'Groveland', notes: 'Behind on rent, need help with VA claim' }
  ]);
  console.log('✓ Added 2 intake requests');

  console.log('\n✅ Setup complete!');
}

setup().catch(console.error);
