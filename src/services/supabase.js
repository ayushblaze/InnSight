import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rmvedyzgnigffiutasmc.supabase.co";
// sharing he key isn't a securitty risk because we have RLS enabled ;)
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtdmVkeXpnbmlnZmZpdXRhc21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzODY2MDksImV4cCI6MjA4OTk2MjYwOX0.l7GtvYaMVVgNgU-l4rC3OqJVjfhRfUfZiYBoqsACSNA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
