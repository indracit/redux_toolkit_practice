import { useState } from "react"
import Addpost from "./Addpost"
import './index.css'
import Viewpost from "./Viewpost"

export type postType = {
  id: number,
  title: string,
  body: string,
  userId: number
}

const App = () => {

  const [posts,setPosts] = useState<postType[]>([]);

  return (
    <div className="app">
      <Addpost   setPosts={setPosts}/>
      {posts.map((post,index) : React.ReactNode => {
        return <Viewpost post={post} key={index} />
      })}
    </div>
  )
}

export default App