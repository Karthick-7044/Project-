import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent(){
    
    const { studentid }=useParams();
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [place,setPlace]=useState("");
    const [phone,setPhone]=useState("");
    const navigate=useNavigate();
    const [validation,setValidation]=useState(false);
    console.log(studentid, "ID")
    //const [studentData,setStudentData]=useState({})
    useEffect(()=>{
        fetch(`https://68676ec4e3fefb261edea2f1.mockapi.io/createstudent/${studentid}`)
        .then((res)=>res.json())
        
        .then((data)=>{
            setId(data.id)
            setName(data.name)
            setPlace(data.place)
            setPhone(data.phone)
        }
    )
        .catch((err)=>console.log(err.message))
    },[]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData={name,place,phone};
        
        fetch("https://68676ec4e3fefb261edea2f1.mockapi.io/createstudent/"+studentid,{
            method:'PUT',
            headers:{
                "content-type":"application/json"
        },
            body:JSON.stringify(studentData)
         })
        .then((res)=>{
            alert("Student data updated successfully");
            navigate("/")

        })
        .catch((err)=>console.log(err.message))
   
    }
    
    
    
    return(
            <div className="conatiner">
            <h1>Edit Student Details</h1>
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
                <input type='text' id='phone' name='phone' required value={phone} onChange={e=>setPhone(e.target.value)} onMouseDown={()=>setValidation(true)}/>
                                {phone.length==0 && validation && <span className="errorMsg"> Please enter your phone no</span>}<br></br>
<br></br>
                <div>
                    <button className="btn btn-save">Update</button>
                    <Link to='/' className="btn btn-back">Back</Link>
                </div>
            </form>
        </div>
   
    )
}