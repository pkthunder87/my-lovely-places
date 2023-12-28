import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('TEST_USER');

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useCurrentUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error('UserContext was used outside the User Provider');

  return context;
}

export { UserProvider, useCurrentUser };
