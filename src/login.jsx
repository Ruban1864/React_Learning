
import { use, useState,useContext } from "react";
import Counter from "./Counter.jsx"
import { dataContext } from "./home.jsx";

function Login(){

     const[pwd1,setPwd1]=useState("");
     const[pwd2,setPwd2]=useState("");
    const sampledata = useContext(dataContext);
     const [same,setSame] = useState(true);

     function handlePwd1Change(e){
        setPwd1(e.target.value);
     }
     
     function handlePwd2Change(e){
        setPwd2(e.target.value);
         if(pwd1 == e.target.value){
            console.log("Password Match");  
            setSame(true);
        }else{
            console.log("Password Not Match");
            setSame(false);
        }
     }
     
     
    return(
        <>
        <h2>{sampledata}</h2>
        <Counter />
        <h1 className="text-center my-5">Login</h1>
        <form className="my-5" style={{width:"50%", margin:"auto"}}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input value={pwd1} onChange={handlePwd1Change} type="password" className="form-control"  />
            </div>
            <div className="mb-3">
                <label  className="form-label">Confirm Password</label>
                <input value={pwd2} onChange={handlePwd2Change} type="password" className="form-control" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox"  className="form-check-input" />
                <label className="form-check-label" >I Agree</label>
            </div>
            {!same && <p>Password don't Matched</p>}
                <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        </>
    );
}
export default Login