import { createContext } from "react";

export const ContentPass = createContext(null)
const AuthContext = ({children}) => {
    const data = {
        name : 'samio',
        id: 1
    }
  return (
    <ContentPass.Provider value={data}>
      {children}
    </ContentPass.Provider>
  );
};

export default AuthContext;