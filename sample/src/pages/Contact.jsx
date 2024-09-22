import React from "react";

const Contact = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <form className="bg-white p-10 rounded-3xl shadow-lg w-[40rem] broder-solid border-2 border-gray-900">
                <div className="text-3xl font-bold text-royalblue mb-4 text-center">
                    Contact us
                </div>
                <input
                    type="text"
                    placeholder="Your email"
                    className="w-full border-solid border-2  p-4 pl-10 text-xl font-serif  text-gray-700 border-slate-800"
                />
                <textarea
                    placeholder="Your message"
                    className="mt-3 w-full p-4 pl-10 text-xl font-serif border-solid border-2 text-gray-700 h-40 border-slate-800"
                />
                <a href="mailto:devaharsar2004@gmail.com">
                    <button
                        className="bg-blue-300 mt-3 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full w-full border-solid border-2 border-slate-800"
                    >
                        Submit
                    </button>
                </a>
            </form>
        </div>
    );
};

export default Contact;