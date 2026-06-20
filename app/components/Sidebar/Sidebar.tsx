import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
	return (
		<aside className="flex flex-col justify-center items-center gap-4 fixed top-12 left-8">
			<div className="bg-gray h-62 w-1"></div>
			<div className="flex flex-col gap-2 ">
				<Link href="https://github.com/enkoki" target="_blank" rel="noreferrer">
					<FaGithub className="text-gray w-8 h-8" />
				</Link>
				<Link href="">
					<FaLinkedin className="text-gray w-8 h-8" />
				</Link>
			</div>
		</aside>
	);
}
