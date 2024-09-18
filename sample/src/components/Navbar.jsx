import { CircleUser } from 'lucide-react';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const val=appname.map((data)=>{console.log(data)})
    return (
        <>
            <div className=" h-12 ml-5 mr-5 flex justify-between  gap-5 bg-slate-100 text-black text-2xl opacity-70 shadow-2xl font-semibold ">
                <div className="flex">
                    <a href="#" className="font-serif justify-items-center">DEVA HARSAR</a>
                </div>
                <div className=" h-8  flex   gap-5">
                    <ul className='flex flex-row gap-5'>
                      
                        <Link to={'/'}>
                            <li href="#" id="About" className="hover:bg-green-700">About</li>
                        </Link>

                        <Link to={'/projects'}>
                            <li href="#" className="hover:bg-green-700">Project</li>
                        </Link>
                        <Link to={'/contact'}>
                            <li href="#" className="hover:bg-green-700">Contact</li>
                        </Link>
                        <Link>
                            <li href="#" className="hover:bg-green-700 border-solid border-2 border-cyan-900"><CircleUser size={32} /></li>
                        </Link>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Navbar