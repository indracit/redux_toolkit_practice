import { useState } from "react"
import { usePostDispatch } from "./hooks"
import { addpost } from "./postSlice"


const Addpost = () => {

    const dispatch = usePostDispatch();
    const [title, setTitle] = useState<string>('');
    const [post, setPost] = useState<string>('');

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void=>{
        e.preventDefault();
        setTitle('');
        setPost('');
        dispatch(addpost({title,post}))
    }

    return (
        <div className="container">
            <form className="form-container" onSubmit = {handleSubmit}>
                <input 
                type="text" 
                placeholder="title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
                />
                <textarea 
                className="postContent" 
                rows={5} cols={40} 
                placeholder="type post here"
                value={post}
                onChange={(e)=>setPost(e.target.value)}
                required/>

                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default Addpost