import { useSelector } from "react-redux"

export default function User(){

    const state = useSelector((state) => state.signup)

    return(
        <h1>Welcome {state.firstName ? state.firstName : 'Guest'}</h1>
    )
}