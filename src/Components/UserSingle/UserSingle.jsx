import { Link } from "react-router-dom"

export default function UserSingle({user}) {
    const {name,id,email,username} = user
  return (
    <div style={{backgroundColor:'yellow' ,padding:'5px' ,borderRadius:'20px'}}>
      <p>Name : {name}</p>
      <p>UserName : {username}</p>
      <p>Email Address  : {email}</p>
      <Link to={`/userDetails/${id}`}>Show details</Link>
    </div>
  )
}
