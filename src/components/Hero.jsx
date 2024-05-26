import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";
import Features from "./Features";

const Hero = ({}) => {
	return (
		<>
			<section className="relative w-full h-screen mx-auto overflow-hidden flex flex-col items-center justify-start">
				<div
					className={`relative ${styles.paddingX} py-[120px] mx-auto flex flex-row items-start gap-5 w-full z-20`}
				>
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#03a9f4f0]" />
						<div className="w-1 sm:h-80 h-40 blue-gradient" />
					</div>
					<div className="flex flex-col items-start justify-center gap-4 ">
						<h1 className={`${styles.heroHeadText}`}>
							Hi, I am <span className="text-[#03a9f4f0]">Enriched Care</span>
						</h1>
						<p className={`${styles.heroSubText}`}>
							I like Lorem ipsum dolor sit amet.{" "}
							<br className="sm:block hidden" /> Lorem ipsum dolor sit amet.
						</p>
						<motion.p
							variants={fadeIn("", "", 0.1, 1)}
							className="mt-4 text-seconday text-[17px] max-w-3xl leading-[30px]"
						>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptates, necessitatibus aperiam veniam delectus facere vel
							neque. Porro ipsa quos illum fugiat dignissimos asperiores
							corporis numquam deserunt. Temporibus voluptate quos amet odio,
							similique quae sed, distinctio dolorem assumenda saepe ratione
							delectus.
						</motion.p>

						<div className="flex flex-wrap items-center w-full justify-start absolute bottom-4 gap-5">
							<Link
								to="/carrers"
								className="flex items-center bg-primary text-white px-7 py-5 rounded-full"
							>
								Carrers
							</Link>
							<Link
								to="/about"
								className="flex items-center justify-center gap-2 hover:text-primary"
							>
								<img src="/assets/play.svg" alt="About" />
								How We Work ?
							</Link>
						</div>
					</div>
				</div>

				<div className="hidden absolute xs:bottom-4  w-full lg:flex justify-center items-center ">
					<a href="#features">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center itmes-start p-2 hover:border-[#03a9f4f0]">
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-3 h-3 rounded-full bg-secondary mb-1"
							/>
						</div>
					</a>
				</div>

				<div className="hero-map" />
			</section>

			<Features />
		</>
	);
};

export default Hero;
