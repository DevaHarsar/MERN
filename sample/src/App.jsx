import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="h-[100vh] w-[100%] flex justify-center items-center bg-#f5f5f5">
        <div className="h-5/6 w-[50%] flex flex-col justify-center items-center bg-slate-300 rounded-md shadow-2xl">
        <h1 className='flex  justify-center items-center font-bold'>FORMS</h1>
          <form className="w-[80%] h-[60%] flex flex-col justify-center items-center gap-4">
            <input type="text" name="" id="" placeholder="Name" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <input type="text" name="" id="" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <input type="number" name="" id="" placeholder="phone" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <input type="password" name="" id="" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" />
            <button type="submit" className="w-full bg-purple-600 text-white p-3">  Register</button>
          </form>
        </div>
      </div> 
        {/* <div className='h-[100vh] w-[100%] flex items-center justify-center bg-#f5f5f5'>
          <div className=' flex justify-center items-center bg-purple-400 h-[70%] w-[70%] gap-3'> 
            <form action="" className='flex flex-col justify-center items-center h-[50%] w-[50%] gap-3'>
              <input type="text" id='' name='' placeholder='Enter name' className='outline-none bg-white flex justify-center items-center' />
              <input type="text" id='' name='' placeholder='Enter age' className='outline-none bg-white flex justify-center items-center' />
              <input type="text" id='' name='' placeholder='Enter name' className='outline-none bg-white flex justify-center items-center' />
              <input type="text" id='' name='' placeholder='Enter name' className='outline-none bg-white flex justify-center items-center' />
            </form>
          </div>
                 
        </div> */}
    
    </>
  )
}

export default App
