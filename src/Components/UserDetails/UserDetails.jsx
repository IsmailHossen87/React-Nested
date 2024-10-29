import { useLoaderData } from "react-router-dom"

export default function UserDetails() {
    const userDetails= useLoaderData()
    const{name}= userDetails
  return (
    <div>
      <h3>User Details All sectio </h3>
      <p>Name : {name}</p>
    </div>
  )
}
