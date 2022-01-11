import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <nav className="flex flex-grow items-center pl-56 hidden md:block">
      <ul className="flex flex-row text-gray-50 flex-grow justify-around items-center h-full">
        <li className="hover:underline hover:text-yellow-400">
          <Link href="/About">
            <a>About</a>
          </Link>
        </li>
        <li className="hover:underline hover:text-yellow-400">
          <Link href="/SearchCountries">
            <a>Countries</a>
          </Link>
        </li>
        <li className="hover:underline hover:text-yellow-400">
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
