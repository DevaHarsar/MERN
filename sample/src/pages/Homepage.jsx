import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { CircleUser } from 'lucide-react';
import Dev from "../assets/img/DEV.jpg";
const Homepage = ()=>
{
    return(
    
        <>
       
           <div className="h-60 mt-5 ml-5 flex flex-row justify-between bg-#f5f5f5">
            <div className="bg-slate-50 ">
               <h1 className="text-7xl text-purple-500">Hello I am Deva Harsar</h1>
               <br />
               <h3 className="text-5xl">From Coimbarore</h3>
               </div>
               <div className="flex justify-center items-center border-radius-2 h-80 w-60 bg-slate-400 mr-8">
               <CircleUser size={10} strokeWidth={1} className="h-[80%] w-[70%] flex " />
               <img src={Dev} alt="Profile img" srcset="" />
               </div>
           </div>
               <div className="w-[60%] ml-5 flex flex-col justify-start items-start">
                  <h1 className="text-5xl flex text-purple-500"> About Me</h1>
                  <p className="  text-2xl text-justify flex">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam inventore suscipit est ut iusto doloribus? Adipisci commodi, ipsa, nostrum voluptates accusamus ab vitae in neque excepturi, quia perferendis consequatur optio.</p>
               </div>
           
          <Footer/>


        </>
    )
    
}
export default Homepage