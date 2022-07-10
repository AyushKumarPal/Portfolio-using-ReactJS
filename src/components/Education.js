import React from 'react'
import {useState} from 'react';

function Education() {
  const[eduinfo,setInfo] = useState([
    {
      institution : "Lovely Professional University",
      degree: "B.Tech",
      cgpa: "7.49"
    },
    {
      institution : "Saint Vivekanad Sr. Sec. Public School",
      degree :"Intermediate",
      cgpa : "8"
    },
    {
      institution : "Saint Vivekanad Sr. Sec. Public School",
      degree :"High School",
      cgpa : "10"
    }
  ]);
  return (
   <div className="edu-container">
      <h1 align="center">Education Details</h1>
      {
        eduinfo.map((info, index)=>(
          <div key={index} className='edu-div'>
            <h2>{info.institution}, {info.degree}</h2>
            <h4><em>CGPA : {info.cgpa}</em></h4>
          </div>
        ))
      }
   </div>
  )
}

export default Education