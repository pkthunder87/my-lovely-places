import supabase from './supabase';

export async function getEntries() {
  // const localData = JSON.parse(
  //   localStorage.getItem('sb-euonjwwdtbyhkwleqcek-auth-token'),
  // );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data, error } = await supabase
    .from('entries')
    .select('*')
    .eq('userId', user.id);

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
