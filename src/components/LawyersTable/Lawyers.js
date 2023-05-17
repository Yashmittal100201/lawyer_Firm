import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Lawyers.css'
import Lawyer from './Lawyer';

const Lawyers = (props)=>{

    const [jsonData, setJsonData] = useState([]);
    const [name,setName] = useState("");
    const [speciality,setSpeciality] = useState("");

    useEffect(()=>{
        setJsonData(props.lawyersList);
    },[])

    const tableFilterHandeler = ()=>{
        let allLawyers =[]
        if(name!="" && speciality=="")
        {
            allLawyers = jsonData.filter((lawyer)=>{
                    return (
                    lawyer.name==name
                );
            })
        }
        else if(name=="" && speciality!="")
        {
            allLawyers = jsonData.filter((lawyer)=>{
                return (
                    lawyer.speciality==speciality
                );
            })
        }
        else if(name!="" && speciality!="")
        {
            allLawyers = jsonData.filter((lawyer)=>{
                return (
                    lawyer.speciality==speciality && lawyer.name == name
                );
            })
        }
        setJsonData(allLawyers);
        setName("");
        setSpeciality("");
    }
    return (
            <div className='lawyersListContainer'>
                <div className='filterContainer'>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='input' placeholder='Name'/>
                        <input type='text' value={speciality} onChange={(e)=>setSpeciality(e.target.value)} className='input' placeholder='Speciality'/>
                        <button className='bttn' onClick={tableFilterHandeler}>Filter</button>
                    </form>
                </div>
                <div>
                    <h2 className='heading'>Registered Lawyers</h2>
                </div>
                <div className='lawyersTable'>

                    <table >
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Speciality</th>
                                <th>Phone No</th>
                            </tr>
                            {
                                jsonData.map((lawyer,i)=>{
                                    return <Lawyer key={i} details={lawyer}/>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
    );
}

export default Lawyers;