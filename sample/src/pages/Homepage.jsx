import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { CircleUser } from 'lucide-react';
import Dev from "../assets/img/DEV.jpg";
import github from "../assets/img/gituhub.svg"
import email from "../assets/img/envelope-solid.svg"
import linkedin from "../assets/img/linkedin-brands-solid.svg"

const Homepage = () => {
    return (

        <>
            <div className="h-[93vh] w-[100vw] flex justify-around items-center bg-gradient-to-l from-fuchsia-50 to-cyan-50 bg-opacity-70">
                <div className="h-[70vh] w-[80%] flex flex-row  justify-around place-items-center  bg-white shadow-2xl rounded-2xl ">

                    <div className=" w-[90vh] flex flex-col">
                        <h1 className="text-5xl text-yellow-800 animate-pulse font-extrabold font-sans">Hello I am Deva Harsar </h1>
                        <h3 className=" flex text-3xl text-black font-medium mt-10">JUNIOR SOFTWARE DEVELOPER</h3>
                        <br />
                        <p className=" font-semibold leading-9 text-justify"><span className="ml-5">A skilled</span> software developer specializing in Java, PHP, MySQL, and mobile app development using Flutter. I focus on creating efficient, dynamic web and mobile applications while staying updated with the latest tech trends.</p>
                        <div className="mt-5 flex flex-row  justify-evenly items-center">
                            <a href="https://github.com/DevaHarsar" className="hover:bg-blue-300 bg-opacity-55 rounded-full hover:animate-pulse "><img className="size-14" src={github} alt="github.svg" /></a>
                            <a href="mailto:devaharsar2004@gmail.com" className="hover:bg-blue-300 bg-opacity-55 rounded-md hover:animate-pulse"><img className="size-14" src={email} alt="email.svg" /></a>
                            <a href="https://www.linkedin.com/in/deva-harsar-m-m-4a60bb1b6/" className="hover:bg-blue-300 bg-opacity-55 rounded-lg hover:animate-pulse cursor-pointer"><img className="size-14" src={linkedin} alt="email.svg" /></a>
                            
                        </div>
                        
                    </div>
                    <div >
                        <img className="rounded-full" src={Dev} alt="Profile img" />
                    </div>
                </div>
            </div>

            {/* <Footer/> */}


        </>
    )

}
export default Homepage