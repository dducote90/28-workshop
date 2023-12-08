import { useParams, Link } from "react-router-dom";

const SinglePost = ({posts}) => {
    const params = useParams()
    const id = params.id*1


    const singPost = posts.find((user) => {
        return user.id === id
    })

            if (!singPost) {
                return null
            }

                return (
                    <div className="conatiner">
                        <h1>{singPost.title}</h1>
                        <p>{singPost.body}</p>
                        <Link to="/posts">Back to all posts</Link>
                    </div>
                )


}
   

export default SinglePost