import { createContext } from "react"

function App({ children }) {

  export const AuthContext = createContext(null)
  const name = 'abdullah al noman'

  const authInfo = {
    name,
  }

  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default App
