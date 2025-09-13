//import "./index.css"
function BlogPost (Post){
    return(
        <div>
            <p>author:{Post.author}</p>
            <p>title:{Post.title}</p>
            <p>description:{Post.description}</p>
        </div>
    )
}
export default BlogPost