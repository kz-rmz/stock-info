import { Link } from "react-router-dom";

const links = [
  { path: "/", title: "Главная" },
  { path: "stock", title: "Список акций" },
];

export default function Header() {
  return (
    <header className='w-100 flex justify-between bg-slate-700 px-4 py-7 text-white drop-shadow-lg'>
      <h1 className='text-center'>Stock Information Desk</h1>
      <nav className='hidden space-x-3 lg:block'>
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.path}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
