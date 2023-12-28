import supabase from './supabase';

export async function getEntries() {
  let { data, error } = await supabase
    .from('entries')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error(error);
    throw new Error('Entries could not be loaded');
  }

  return data;
}

export async function deleteEntry(id) {
  const { data, error } = await supabase.from('entries').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Entry could not be deleted');
  }
}

export async function createEntry(newEntry) {
  const { data, error } = await supabase
    .from('entries')
    .insert([newEntry])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Entry could not be created');
  }

  return data;
}
