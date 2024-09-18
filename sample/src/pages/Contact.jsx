import Navbar from "../components/Navbar"

const Contact = () => {
    return (
        <>
           
            <div className="h-screen  w-screen bg-yellow-300 flex flex-col justify-center items-center">
                <div className="h-[80%] w-[38%] bg-white flex flex-col justify-center items-center rounded-md border-solid border-2 border-slate-900">
                    <h1 className="flex justify-center items-center font-serif font-black h-[7rem] text-2xl">  LOGIN</h1>
                    <form action="" className="flex flex-col justify-center items-center gap-4 text-gray-50">
                        <input type="text" name="" id="" placeholder="Enter name" className=" bg-zinc-500 outline-none  border-solid border-2 border-slate-900 bottom-2 h-[4rem] w-96  rounded-md font-bold  " />
                        <input type="number" name="" id="" placeholder="Enter Phone" className="bg-zinc-500 h-[4rem] w-96  border-solid border-2 border-slate-900 rounded-md font-bold" />
                        <input type="email" name="" id="" placeholder="Enter Email" className=" bg-zinc-500 outline-none h-[4rem] w-96 border-solid border-2 border-slate-900  rounded-md  font-bold" />
                        <input type="password" name="" id="" placeholder="Enter Password" className=" bg-zinc-500 outline-none h-[4rem] w-96  border-solid border-2 border-slate-900 rounded-md  font-bold" />

                        <button className="bg-green-800 h-14 w-36 rounded-full">Register</button>
                    </form>

                </div>

            </div>
        </>
    )
}
export default Contact