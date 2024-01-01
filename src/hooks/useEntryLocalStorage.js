import { useEffect, useState } from 'react';

export function useEntryLocalStorage(initialState, key) {
  const [entryDraft, setEntryDraft] = useState(function () {
    const storedEntry = localStorage.getItem(key);
    return storedEntry ? JSON.parse(storedEntry) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(entryDraft));
    },
    [entryDraft, key],
  );

  return [entryDraft, setEntryDraft];
}
