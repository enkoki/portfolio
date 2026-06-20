import Image from "next/image";
import heroimg from "@/app/assets/images/heroimage.png";
import LogoOutline from "@/app/assets/icons/LogoOutline";
import Dots from "@/app/assets/icons/Dots";
import styles from "./style.module.css";

export default function HeroSection() {
	return (
		<section className="mt-15">
			<div className="flex justify-between items-center pl-8">
				<div className="max-w-[33.563rem]">
					<p className="font-semibold text-[32px] text-white">
						Reason is an aspiring{" "}
						<span className="text-primary">full stack developer.</span>
					</p>
					<p className="text-gray text-[16px]">
						who likes making random and cool stuff online.
					</p>
					<button className={styles.button}>
						<span className={styles.borderTop} />
						<span className={styles.borderRight} />
						<span className={styles.borderBottom} />
						<span className={styles.borderLeft} />
						<span className={styles.fill} />
						<label className={styles.label}>Contact Me</label>
					</button>
				</div>
				<div className="pr-8 relative">
					<div className="relative z-20">
						<Image src={heroimg} width={457} height={386} alt="hero image" />
					</div>
					<LogoOutline width={155} height={155} className="absolute top-28" />
					<div className="flex justify-start gap-2 items-center w-full border p-2 border-gray relative">
						<Dots className="absolute right-0 bottom-24 z-30" />
						<div className="bg-primary h-4 w-4"></div>
						<p className="text-gray font-medium">
							Currently working on{" "}
							<span className="text-white">Portfolio</span>{" "}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
