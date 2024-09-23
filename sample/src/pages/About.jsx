import java from "../assets/img/background.jpeg"
const About = () => {
    return (
        <>

            <div className="h-screen w-full flex justify-center items-center">

            <div className=" w-fit h-fit pl-5 pr-5 flex   items-center justify-center shadow-2xl bg-slate-100  rounded-lg bg-opacity-20">
                <div className="h-fit w-1/2 flex flex-col justify-center items-center ">
                    <h1 className="text-5xl font-extrabold text-pink-400">ABOUT ME</h1>
                    <h1 className="text-2xl font-serif text-pretty text-justify  ml-3 mr-3 leading-loose">Hello! I'm DEVA HARSAR, a dedicated software developer with expertise in <span className="bg-red-200 italic">Java, MySQL, PHP, MongoDB, Flutter, and C </span> I excel
                        in building dynamic web applications, developing mobile apps, and creating robust backend systems. My passion for technology drives me to stay current with industry trends and continuously enhance my skills.
                        Whether designing user interfaces or crafting complex database schemas, I aim for excellence and efficiency in all my projects.</h1>
                </div>

                <div className="h-fit w-1/2 flex justify-center items-center">
                    <img className="  bg-transparent" src={java} alt="Java img" />
                </div>
            </div>
            </div>


        </>
    )

}
export default About