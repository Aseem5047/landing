import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		contentStyle={{
			background: "#f9f9f9",
			color: "black",
			boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
		}}
		date={experience.date}
		iconStyle={{ background: experience.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={experience.icon}
					alt={experience.company_name}
					className="w-[60%] h-[60%] object-contain"
				/>
			</div>
		}
	>
		<div>
			<h3 className="text-black text-[24px] font-bold">{experience.title}</h3>
			<p className="text-secondary text-[16px] font-semibold m-0">
				{experience.company_name}
			</p>
		</div>
		<ul className="mt-5 list-disc ml-5 space-y-2">
			{experience.points.map((point, index) => (
				<li
					key={`experience-point-${index}`}
					className="text-black-100 text-[14px] pl-1 tracking-wider"
				>
					{point}
				</li>
			))}
		</ul>
	</VerticalTimelineElement>
);

const Experience = () => {
	return (
		<div className="pt-[55px] pb-[20px]">
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What we have done so far</p>
				<h2 className={styles.sectionHeadText}>Carrer Options.</h2>
			</motion.div>
			<div className="mt-10 xl:mt-20">
				<VerticalTimeline lineColor="#222">
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</div>
	);
};

export default SectionWrapper(Experience, "work");
