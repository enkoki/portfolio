import logo from "@/app/assets/icons/Logo.svg";
import Image from "next/image";
export default function Footer() {
	return (
		<footer className="bg-background p-8 mt-[145px]">
			<div className="flex flex-col gap-24 justify-center items-center">
				<div className="w-full flex justify-between items-center">
					<div>
						<div className="flex gap-2">
							<Image src={logo} alt="logo" />
							<p className="font-bold text-white">Reason Dahal</p>
							<span className="text-gray">dahreasons@gmail.com</span>
						</div>
						<p className="font-medium text-gray mb-2">
							Aspiring Full Stack Developer
						</p>
						<p className="text-gray">Website Design from Figma Community</p>
						<p className="text-gray">Credits : @elias_dev</p>
					</div>
					<div>
						<p className="text-white text-2xl">Media</p>
					</div>
				</div>
				<div>
					<p className="text-gray ">© Copyright 2026. Made by Reason</p>
				</div>
			</div>
		</footer>
	);
}
