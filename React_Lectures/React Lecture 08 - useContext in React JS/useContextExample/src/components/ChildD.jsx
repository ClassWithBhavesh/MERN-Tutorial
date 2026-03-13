import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function ChildD() {
  const {user, setUser} = useContext(UserContext);
  return (
        <>
            Hello From {user}
        </>
  )
}

export default ChildD