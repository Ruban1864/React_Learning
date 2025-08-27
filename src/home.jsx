import { useEffect, useState,createContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import Login from "./login.jsx";

export const dataContext = createContext();

function Home() {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const data = "Data from the home";

  useEffect(() => {

   const controller = new AbortController();
  const signal = controller.signal;

    setTimeout(() => {

    fetch("http://localhost:3002/posts",{signal})
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => console.log(err));
    },0);

    //Clean up function
    return () => {
      console.log("UnMounted");
      controller.abort();
    }

  }, []);

  return (
    <div className="container">
      <Link to="/login" className="btn btn-dark">
        Login
      </Link>

      <dataContext.Provider value={data}>
        {/* <Login /> */}
        </dataContext.Provider>
      

      <div className="row justify-content-center m-3">
        {posts &&
          posts.map((post) => (
            <div key={post.id} className="card m-3" style={{ width: "18rem" }} onClick={() => {navigate('/posts/'+ post.id)}}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                {/* <p className="card-text">{post.content}</p> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
