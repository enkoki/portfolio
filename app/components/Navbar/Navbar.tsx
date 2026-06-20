"use client"
import Image from "next/image";
import logo from '@/app/assets/icons/Logo.svg'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar(){

    const [pathName, setPathName] = usePathname()

    return(
        <header className="flex justify-between items-end h-15 pt-8 pb-2">
            <div className="flex gap-2">
                <Image src={logo} height={16} width={16} alt="logo"/>
                <p className="text-white font-bold text-[16px]">Reason Dahal</p>
            </div>
            <nav>
                <ul className="flex gap-8">
                    <Link href="/"><li className={`${pathName == "/" ? "text-white" : "text-gray"} font-medium`}><span className="text-primary">#</span>home</li></Link>
                    <li className={`${pathName == "/projects" ? "text-white" : "text-gray"} font-medium`}><span className="text-primary">#</span>projects</li>
                    <li className={`${pathName == "/about" ? "text-white" : "text-gray"} font-medium`}><span className="text-primary">#</span>about-me</li>
                    <li className={`${pathName == "/contact" ? "text-white" : "text-gray"} font-medium`}><span className="text-primary">#</span>contacts</li>
                </ul>
            </nav>
        </header>
    );
}