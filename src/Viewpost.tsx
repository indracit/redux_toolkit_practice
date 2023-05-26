import './index.css'
import { postType } from './App'

type props = { 
    index: number,
    post: {
        id: number,
        title: string,
        body: string,
        userId: number
    },
    setPosts : React.Dispatch<React.SetStateAction<postType[]>>
    
}

const Viewpost = ({index,post,setPosts} : props) => {
    const handleDelete = (index: number) =>{
        setPosts((prevState)=>[...prevState.slice(0,index),...prevState.slice(index+1,prevState.length)]);
        console.log(index);
        
    }
    return (
        <div className='post'>
            <p className='title'>{post.title}</p>
            <p className='body'>{post.body}</p>
            <button onClick={()=>handleDelete(index)}>Delete</button>
        </div>
    )
}

export default Viewpost