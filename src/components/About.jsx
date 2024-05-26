import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Feedbacks from "./Feedbacks";
import Camp from "./Camp";

const About = () => {
	return (
		<div className="flex flex-col items-start justify-center pt-[50px] pb-[20px] overflow-hidden">
			<motion.div variants={slideIn("left", "tween", 0.2, 1)}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={slideIn("right", "tween", 0.2, 1)}
				className="my-4 text-seconday text-[17px] leading-[30px]"
			>
				I Know That Good Design Means Good Business. I am a React Developer with
				a passion for building beautiful and functional Applications. I'm a
				quick learner and collaborate closely with others to create efficient,
				scalable and user-friendly solutions. Let's work together to bring your
				ideas to life !
			</motion.p>

			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="w-full"
			>
				<img src="src/assets/camp.svg" alt="camp" />
				<p className="uppercase regular-18 -mt-1 mb-3 text-primary">
					We are here for you
				</p>
				<div className="flex flex-wrap justify-between gap-5 lg:gap-10">
					<h2 className="bold-40 lg:bold-64 xl:max-w-[450px]">
						Guide You to Easy Path
					</h2>
					<p className="regular-16 text-gray-30 xl:max-w-[520px]">
						Only with the hilink application you will no longer get lost and get
						lost again, because we already support offline maps when there is no
						internet connection in the field. Invite your friends, relatives and
						friends to have fun in the wilderness through the valley and reach
						the top of the mountain
					</p>
				</div>
			</motion.div>

			<Camp />

			<Feedbacks />
		</div>
	);
};

export default SectionWrapper(About, "about");
