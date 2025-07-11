import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function ViewDetails(){
    
    const {id}=useParams(); 
    const [studentData,setStudentData]=useState({})
    useEffect(()=>{
        fetch("https://crud-ops-ten.vercel.app/view/"+id)
        .then((res)=>res.json())
        .then((data)=>setStudentData(data))
        .catch((err)=>console.log(err.message))
    },[])
    console.log(id);
    return(
         <div className="container">
            <h1>View Student Details</h1>
            {studentData &&<div className="details">
                <p><strong>       ID:</strong>{studentData._id}</p>
                <p><strong>       NAME:</strong>{studentData.name}</p>
                <p><strong>       PLACE:</strong>{studentData.place}</p>
                <p><strong>       PHONE:</strong>{studentData.phone}</p>

            
            </div>}
            <Link to="/" className="btn btn-back">Back</Link>
        
        </div>
    )
}