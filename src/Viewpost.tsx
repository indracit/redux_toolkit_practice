import './index.css'
import { deletepost } from './postSlice'
import { usePostDispatch } from './hooks'
import { postType } from './App'

type props = { 
    index: number,
    post: postType
}

const Viewpost = ({index,post} : props) => {
    const dispatch = usePostDispatch()

    return (
        <div className='post'>
            <p className='title'>{post.title}</p>
            <p className='body'>{post.body}</p>
            <button onClick={()=>dispatch(deletepost({index:index}))}>Delete</button>
        </div>
    )
}

export default Viewpost