
import { useLoaderData } from 'react-router-dom'
import UserSingle from '../UserSingle/UserSingle';
import './user.css'

export default function User() {
    const users = useLoaderData();
    console.log(users)

  return (
    <div>
      <h3>My user section</h3>
   <div className='usersSty'>
   {
        users.map((user,index) => <UserSingle key={index} user={user}></UserSingle>)
      }
   </div>
    </div>
  )
}
