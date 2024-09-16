const Navbar = (props)=> 
{
    return(
        <>
        <div className="h-8 w-screen" >
          <h1 className="bg-slate-100 flex justify-start items-start">
           {props.appname}
          </h1>
        </div>
        </>
    )
}
export default Navbar