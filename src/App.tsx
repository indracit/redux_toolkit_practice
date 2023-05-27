import Addpost from "./Addpost"
import './index.css'
import Viewpost from "./Viewpost"
import { usePostSelector } from "./hooks"

export type postType = {
  id: number,
  title: string,
  body: string,
  userId: number
}

const App = () => {

  const posts = usePostSelector((state)=> state.posts)


  return (
    <div className="app">
      <Addpost/>
      {posts.map((post,index) : React.ReactNode => {
        return <Viewpost 
        post={post} 
        index={index} 
        key={index} />
      })}
    </div>
  )
}

export default App