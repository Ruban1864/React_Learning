import { use, useState } from "react";
import { useParams } from "react-router-dom";

function Post(){

    const {id} = useParams();
    const [post,setPost] = useState(null);

     fetch('http://localhost:3002/posts/'+id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => console.log(err));
    


    return(
        <>
           
            {post && <div className="container m-5">
                 <h1>Posts Page:{id}</h1>
                <h2>{post.title}</h2>
                <p>{post.content}</p> 
            </div>
         }
        </>
    );
}

export default Post;