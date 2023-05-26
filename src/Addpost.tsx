import { useState } from "react"
import { postType } from "./App"

type proptype ={
    setPosts : React.Dispatch<React.SetStateAction<postType[]>>
}
const Addpost = ({setPosts}: proptype ) => {

    const [title, setTitle] = useState<string>('');
    const [post, setPost] = useState<string>('');

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void=>{
        e.preventDefault();
        setTitle('');
        setPost('');
        setPosts((prevState)=>[...prevState,{id: new Date().getSeconds(),title:title,body:post,userId:1}]) 
    }

    return (
        <div className="container">
            <form className="form-container" onSubmit = {handleSubmit}>
                <input 
                type="text" 
                placeholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea 
                className="postContent" 
                rows={5} cols={40} 
                placeholder="type post here"
                value={post}
                onChange={(e)=>setPost(e.target.value)}/>

                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default Addpost