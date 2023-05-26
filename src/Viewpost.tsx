import './index.css'

type props = { 
    post: {
        id: number,
        title: string,
        body: string,
        userId: number
    }
}

const Viewpost = ({post} : props) => {
    return (
        <div className='post'>
            <p className='title'>{post.title}</p>
            <p className='body'>{post.body}</p>
        </div>
    )
}

export default Viewpost