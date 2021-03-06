import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-900 h-16 flex flex-row z-10 fixed w-screen">
      <div className="flex items-center pl-3">
        <h3 className="text-yellow-400 font-logo text-4xl hover:text-gray-50">
          <Link href="/">
            <a>SeeTheWorld</a>
          </Link>
        </h3>
      </div>
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};

export default Header;
