import { useState } from "react"
import Addpost from "./Addpost"
import './index.css'

export type postType = {
  id: number,
  title: string,
  body: string,
  userId: number
}

const App = () => {

  const [posts,setPosts] = useState<postType>({
    id: 1,
    title: 'Lorem Ipsum',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto ',
    userId: 1
  });

  return (
    <div className="app">
      <Addpost setPosts={setPosts}/>
    </div>
  )
}

export default App