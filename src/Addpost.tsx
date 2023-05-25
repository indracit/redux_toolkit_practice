import { postType } from "./App"

type proptype ={
    setPosts : React.Dispatch<React.SetStateAction<postType>>
}
const Addpost = ({setPosts}: proptype ) => {

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) : void=>{
        e.preventDefault();
        setPosts({
            id: 1,
            title: 'string',
            body: 'string',
            userId: 1
        })

    }

    return (
        <div className="container">
            <form className="form-container" onSubmit = {handleSubmit}>
                <input 
                type="text" 
                placeholder="title"
                />
                <textarea className="postContent" rows={5} cols={40} placeholder="type post here" />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default Addpost