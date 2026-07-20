import { useContext } from "react"
import { UserContext } from "./about"

export default function Home(){
    const user = useContext(UserContext)
    return(
        <>
            <h1>user:{user}</h1>
        </>
    )
}