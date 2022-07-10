import React, {useState} from 'react';
import CertCard from '../mini-components/CertCard';

function Certification() {
  
  const[certificates,setCert] = useState([
    {
      name : "The 2022 Complete Web Development Bootcamp",
      org : "This course helped in learning most of the web development technologies.",
      org_img : "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png"
    },
    {
      name : "ReactJS",
      org : "In this course I learned about the basics of React.",
      org_img : "https://d3gmywgj71m21w.cloudfront.net/afbe5cca6cc698f5e677a961ce7ae47f"
    },
    {
      name : "PHP with Laravel",
      org : "This course helped me in learning php and laravel working at backend.",
      org_img : "https://www.allsoftsolutions.in/IBM/assets/logo/icon.png"
    }
  ])

  return (
    <div className="certs">
      <h1 align="center">My Certifications</h1>
          <div class="container">
      {
        certificates.map((cert,index)=>(
          <CertCard key={index} data={cert}/>
        ))
      }
      </div>
    </div>
  )
}

export default Certification