import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mhtmfukjnrmqcyuiands.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1odG1mdWtqbnJtcWN5dWlhbmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5Nzc0ODgsImV4cCI6MTk5MjU1MzQ4OH0.rYg8H4JSxzepxhKZtm3ulbER8n2QuhadKnn0k718rt4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
