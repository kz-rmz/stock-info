import { Link } from "react-router-dom";

export default function Main(){
    return (
        <div className="container mx-auto my-32">
            <div className="flex flex-col justify-center align-middle h-[400px] py-7 px-9 text-white bg-slate-700 rounded-sm shadow-md space-y-3">
                <h1  className="self-center">Обзор цен на акции</h1>
                <Link to={`stock`} className="rounded-md bg-indigo-500 self-center px-2 py-1">Посмотреть</Link>
            </div>
        </div>
    )
}