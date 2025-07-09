import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function StudentTable() {
    const [read,setRead]=useState([]);
    useEffect(() => {
        fetch('https://68676ec4e3fefb261edea2f1.mockapi.io/createstudent')
        .then((res) => res.json())
        .then((data) => setRead(data))
        .catch((err) => console.log(err.message))

    },[])
    console.log(read);
    const navigate=useNavigate();
    const DisplayDetails=(id)=>{
        navigate("/student/view/"+id);
    }
    const EditDetails=(id)=>{
        navigate("/student/edit/"+id);

    }
    const RemoveDetails=(id)=>{
        fetch("https://68676ec4e3fefb261edea2f1.mockapi.io/createstudent/"+id,{
            method:'DELETE',
           
         })
        .then((res)=>{
            alert("Student data removed successfully");
            navigate("/")

        })
        .catch((err)=>console.log(err.message))
    }
    return (
        <div className="container">
            <h2>Student Records</h2>
            <div className="table-conatiner">
                <Link to="/student/create" className="btn btn-add">Add New Student</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            read.map((view,index)=>{
                                return(
                                <tr key={index}>
                            <td>{view.id}</td>
                            <td>{view.name}</td>
                            <td>{view.place}</td>
                            <td>{view.phone}</td>
                            <td>
                                <button onClick={()=>DisplayDetails(view.id)} className="btn btn-info">View</button>
                                <button onClick={()=>EditDetails(view.id)} className="btn btn-primary">Edit</button>
                                <button onClick={()=>{RemoveDetails(view.id)}} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}