import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wecztqpltemmedjzqaho.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlY3p0cXBsdGVtbWVkanpxYWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5NzEyNzgsImV4cCI6MjAzMjU0NzI3OH0.ZzE7fZIvt2tgvFvy0ER-0xSSS7L-V27BZ59CWipXL8s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
