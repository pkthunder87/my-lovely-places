import supabase from './supabase';

export async function getEntries() {
  let { data, error } = await supabase.from('entries').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}
