import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { CircleUser } from 'lucide-react';
import Dev from "../assets/img/DEV.jpg";
const Homepage = () => {
    return (

        <>
            <div className="h-[100vh]  flex justify-center items-center ml-5 mr-5 rounded-full">
                <div className="h-[40vh] w-[100%] flex flex-row justify-center items-center bg-slate-100">

                    <div className=" w-[100vh] flex flex-col">
                        <h1 className="text-5xl text-purple-500">Hello I am Deva Harsar </h1>
                        <h3 className=" flex text-3xl text-black mt-10">From Coimbatore</h3>
                    </div>
                    <div >
                        <img className="rounded-full size-48 " src={Dev} alt="Profile img" />
                    </div>
                </div>
            </div>

            {/* <Footer/> */}


        </>
    )

}
export default Homepage