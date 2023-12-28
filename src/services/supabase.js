import { createClient } from '@supabase/supabase-js';
import { useCurrentUser } from '../contexts/UserContext';

const supabaseUrl = 'https://euonjwwdtbyhkwleqcek.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
