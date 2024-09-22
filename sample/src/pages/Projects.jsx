import React, { useEffect, useState } from 'react'
import java from "../assets/img/java-brands-solid.svg"
import cart from "../assets/img/cart-shopping-solid.svg"
import QR from "../assets/img/qrcode-solid.svg"
import Android from "../assets/img/android-brands-solid.svg"
import { getProjects } from '../Services/api'

const Projects = () => {
  // const data =
  //    [
    //   {
    //     title: "ECOMMERCE WEBSITE",
    //     description: "Created an E commerce website using PHP and MYSQL Database",
    //     link: "https://github.com/DevaHarsar/E-COMMERCE-",
    //     images: cart
    //   },
    //   {
    //     title: "God Songs App",
    //     description: "Created a God Songs app on Android Studio using java and XML",
    //     link: "https://play.google.com/store/apps/details?id=com.dev.deva&pcampaignid=web_share&pli=1",
    //     images: Android
    //   },
    //   {
    //     title: "QR Scan Code",
    //     description: "Created a Qr Scan Code and Barcode Scanning app and generating qr code scanner using flutter framework and dart",
    //     link: "https://github.com/DevaHarsar/Qr-Scan-Code-Using-flutter",
    //     images:QR
    //   },
    //   {
    //     title: "Java House Rental Mangement System",
    //     description: "Java house rental management system created using OOPS conceptCreated a God Songs app on Android Studio using java and XML",
    //     link: "https://github.com/DevaHarsar/Java-House-rental-Mangement",
    //     images: java
        //  },

    //  ]  

    const [projectdata,setprojectdata] = useState(null)
    const fetch = async ()=> {
      try {
        const {data }= await getProjects()
           setprojectdata(data)
      } catch (error) {
         console.warn(error);
      }
    }
    console.log(projectdata)
    useEffect(()=>{
          fetch()
    },[])
    if(!projectdata)
    {
      return "No data";
    }
  return (
    <>
    
      <div className=" h-10 mt-5 flex flex-row flex-wrap justify-center items-center gap-4">
        {projectdata.map((project, index) => (
          <div key={index}>
            <div className="flex w-[24rem] h-full flex-col justify-center items-center bg-slate-400 bg-opacity-25 rounded-xl ">

              <div className='flex justify-center items-center font-extrabold mt-2'>
                <h1>{project.title}</h1>
              </div>
              <div className='h-20 w-20 flex mt-2'>
                <img  src={project.coverimg} alt="Java " />
              </div>
              <div className='flex items-center justify-center font-medium mt-2'>
                <h4>{project.desc}</h4>

              </div>
              <div className='flex justify-center mt-3 size-32'>
                <a href={project.link}>
                  <button className="bg-blue-400 bg-opacity-20 rounded-md hover:animate-pulse font-medium" type="button">Click Here</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      

    </>

  )
}

export default Projects

