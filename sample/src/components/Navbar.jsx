import { CircleUser } from 'lucide-react';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { Link, NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';

const Navbar = () => {
    const nameref = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(userdata)
        // console.log("hello")
        console.log(nameref.current.value)
    }
    const [visible, setVisible] = useState(false);
    return (
        <>

            <div className=" h-[50%] w-[100%] px-4 py-2 flex justify-between  gap-5 bg-slate-400 bg-opacity-40 text-black text-2xl  shadow-2xl  font-semibold ">
                <div  className="flex">
                    <NavLink to='/'>
                    <h1 className="font-serif justify-items-center  text-black">DEVA HARSAR</h1>
                    </NavLink>  
                </div>
                <div className=" h-8  flex   gap-5">
                    <ul className='flex flex-row gap-5'>

                        <NavLink to={'/about'}>
                            <li href="#" id="About" className="hover:bg-gray-600 hover:text-slate-50 ">About</li>
                        </NavLink>

                        <NavLink to={'/projects'}>
                            <li href="#" className="hover:bg-gray-600 hover:text-slate-50">Project</li>
                        </NavLink>
                        <NavLink to={'/contact'}>
                            <li className="hover:bg-gray-600 hover:text-slate-50">Contact</li>
                        </NavLink>
                        <button onClick={() => setVisible(!visible)} href="#" className="hover:hover:bg-gray-900 hover:text-slate-50 border-solid border-2 border-cyan-900"><CircleUser size={32} /></button>

                    </ul>
                </div>
            </div>

            {
                visible && (
                    <>
                        <div className='h-[100%] w-[100%] flex justify-center items-center absolute'>
                            <div className="h-[100%]  w-[100%] bg-yellow-200 opacity-100 flex  justify-center items-center bg-opacity-55">
                                <div className="h-[80%] w-[38%] bg-white flex flex-col justify-center items-center rounded-md border-solid border-2 border-slate-900">
                                    <h1 className="flex justify-center items-center font-serif font-black h-[7rem] text-2xl">  LOGIN</h1>
                                    <form action="" className="flex flex-col justify-center items-center gap-4 text-gray-50">
                                        <input type="text" name="" ref={nameref} id="name" placeholder="Enter name" className=" bg-zinc-500 outline-none  border-solid border-2 border-slate-900 bottom-2 h-[4rem] w-96  rounded-md font-bold  " />
                                        <input type="number" name="" id="" placeholder="Enter Phone" className="bg-zinc-500 h-[4rem] w-96  border-solid border-2 border-slate-900 rounded-md font-bold" />
                                        <input type="email" name="" id="" placeholder="Enter Email" className=" bg-zinc-500 outline-none h-[4rem] w-96 border-solid border-2 border-slate-900  rounded-md  font-bold" />
                                        <input type="password" name="" id="" placeholder="Enter Password" className=" bg-zinc-500 outline-none h-[4rem] w-96  border-solid border-2 border-slate-900 rounded-md  font-bold" />

                                        <button onClick={() => setVisible(!visible) && handleLogin(e)} className="bg-green-800 h-14 w-36 rounded-full ">Register</button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </>
                )
            }


        </>
    )
}
export default Navbar