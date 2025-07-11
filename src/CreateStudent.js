import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function CreateStudent(){

    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [place,setPlace]=useState("");
    const [phone,setPhone]=useState("");
    const navigate=useNavigate();
    const [validation,setValidation]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData={name,place,phone};
        console.log(studentData, "all");
        fetch("https://crud-ops-ten.vercel.app/create",{
            method:'POST',
            headers:{
                "content-type":"application/json"
        },
            body:JSON.stringify(studentData)
         })
         .then((a)=>a.json())
        .then((res)=>{
            // console.log(res);
            alert(`${res.message}`);
        navigate("/")
        })
        
       
        .catch((err)=>console.log(err.message))
   
    }

    return(
        <div className="conatiner">
            <h1>Create Student</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID</label><br></br>
                <input type='text' id='id' name='id' required value={id} onChange={(e)=>setId(e.target.value)}
                onMouseDown={()=>setValidation(true)}/>
                                {id.length==0 && validation && <span className="errorMsg"> Please enter your ID </span>}<br></br>
<br></br>
                <label htmlFor="name">Name</label><br></br>
                <input type='text' id='name' name='name' required value={name} onChange={e=>setName(e.target.value)}
                onMouseDown={()=>setValidation(true)}/>
                {name.length==0 &&  validation && <span className="errorMsg"> Please enter your name </span>}<br></br>
                <label htmlFor="place">Place</label><br></br>
                <input type='text' id='place' name='place' required value={place} onChange={e=>setPlace(e.target.value)} onMouseDown={()=>setValidation(true)}/>
                                {place.length==0 && validation && <span className="errorMsg"> Please enter your Place</span>}<br></br>
<br></br>
                <label htmlFor="phone">Phone</label><br></br>
                <input type='number' id='phone' name='phone' required value={phone} onChange={e=>setPhone(e.target.value)} onMouseDown={()=>setValidation(true)}/>
                                {phone.length==0 && validation && <span className="errorMsg"> Please enter your phone no</span>}<br></br>
<br></br>
                <div>
                    <button className="btn btn-save">Save</button>
                    <Link to='/' className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
    
    )
}