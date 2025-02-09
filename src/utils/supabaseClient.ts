import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mxadgucxhmstlzsbgmoz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14YWRndWN4aG1zdGx6c2JnbW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMDgwNjIsImV4cCI6MjA1NDU4NDA2Mn0.MmFqEm7OfwzOlSegLYl9YWLCmIp8YajzK3Aozubn66Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);