import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [votos, setVotos] = useState({
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
  })
  /*   const [ dataUser, setDataUser ] = useState({
      name: "",
      lastname: "",
      token: ""
    }) */

/*   const handleLogin = (name) => {
    setIsAuthenticated(true);
    setUser(name)
  } */

  const handleVotos = (cand) => {
    cand.preventDefault()
    console.log(cand)
    /* setVotos({...votos, [cand]: ) */
  }

/*   const handleVotos = (e) => {
    const { c1, c2, c3, c4 } = e.target
    setMessage("")

    setData({
      ...data,
      [c1]: type === "checkbox" ? checked : value
    })
  } */

  return (
    <AuthContext.Provider
      value={{
        votos,
/*         user,*/
        handleVotos
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}