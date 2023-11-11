import { createClient } from '@supabase/supabase-js';
export const supabaseConfig = {
    SUPABASE_URL: 'https://pczqphbahfwaxztlafcg.supabase.co',
    SUPABASE_API_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjenFwaGJhaGZ3YXh6dGxhZmNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxMTI2MjAsImV4cCI6MjAxNDY4ODYyMH0.0hk5lqDP7x-oWDVMsSnq_Lbn1KYIwuWAp62rzpumt3A',
  };
   export const supabase = createClient(
    supabaseConfig.SUPABASE_URL,
    supabaseConfig.SUPABASE_API_KEY
  );
