import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xxjutdbqvhpmnvdbwjzb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4anV0ZGJxdmhwbW52ZGJ3anpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxNzE4OTYsImV4cCI6MjA2NTc0Nzg5Nn0.jbkkfHoSWAeN0ZDjFmiDOjzMBDict8TPVRaznavfyIU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
