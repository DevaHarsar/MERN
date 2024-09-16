const Navbar = ({appname})=> 
{   const val=appname.map((data)=>{console.log(data)})
    return(
        <>
        <div className="h-8 w-screen" >
          <h1 className="bg-slate-100 flex justify-start items-start">
           {val}
          </h1>
        </div>
        </>
    )
}
export default Navbar