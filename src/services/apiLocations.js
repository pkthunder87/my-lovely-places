import supabase from './supabase';

export async function getLocations() {
  let { data, error } = await supabase
    .from('locations')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error(error);
    throw new Error('Locations could not be loaded');
  }

  return data;
}
