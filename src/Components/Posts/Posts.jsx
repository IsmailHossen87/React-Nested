
import { useLoaderData } from 'react-router-dom'

export default function Posts() {
    const posts =useLoaderData()
    console.log(posts)
  return (
    <div>
      <h3>Posts Data {posts?.length}</h3>
    </div>
  )
}
