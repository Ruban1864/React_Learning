import { useEffect, useState,useContext,useRef } from "react";   
import { dataContext } from "./home";
function Counter(){
    const [count, setCount] = useState(0);
    const data = useContext(dataContext);

    let refCount = useRef(0);

    function inc(){
        //setCount(count+1);
        refCount.current = refCount.current + 1;        
    }

    useEffect(() => {   
        console.log(count);
        console.log(refCount);
    },[count]);

    return( 
        <>
        <h2>
            {data}
        </h2>
        <h2 className="m-5">{refCount.current}</h2>
        <button className="btn btn-primary m-2" onClick={inc}>Increment</button>
        <button className="btn btn-primary m-2" onClick={()=>setCount((preCount=> preCount-3))}>Decrement</button>
        <button className="btn btn-danger" onClick={()=> setCount(refCount.current)}>Update</button>
        </>
    );
}

export default Counter