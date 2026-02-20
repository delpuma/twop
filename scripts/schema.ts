import { config } from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';
import pg from 'pg';

config({ path: '.env.local' });

const { Client } = pg;

async function runSchema() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('📋 Running schema...');
    
    const schema = readFileSync(join(process.cwd(), 'supabase/schema.sql'), 'utf-8');
    await client.query(schema);
    
    console.log('✅ Schema created successfully!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.end();
  }
}

runSchema();
