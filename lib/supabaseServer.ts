
import { createClient } from '@supabase/supabase-js';

export function supabaseServer() {
  // Service role is server-only (NEVER expose this to client)
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
