import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <h2>Error 404 page not found</h2>
    <a className="btn btn-primary" href ="/">Go To Home</a>
    <Link className="btn btn-danger"to="/">Home</Link>
    </>
  );

}

export default NotFound