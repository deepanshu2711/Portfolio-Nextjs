import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 px-10">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="text-2xl sm:text-3xl md:text-5xl text-white font-semibold">
                <Link href={"/"}>
                <h1>Logo</h1>
                </Link>
            </div>
            <div className="menu hidden md:block md:w-auto" id="nabbar" >
            <ul className=" flex gap-x-4">
                <li>
                    <Link href={"#about"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    About
                    </Link>
                </li>
                <li>
                    <Link href={"#projects"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    Projects
                    </Link>
                </li>
                <li>
                    <Link href={"#contact"} className="block px-2 pl-3 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    Contact
                    </Link>
                </li>
            </ul>
            </div>
            </div>
        </nav>
     );
}
 
export default Navbar;