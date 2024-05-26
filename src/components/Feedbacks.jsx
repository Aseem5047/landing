import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
}) => (
	<motion.div
		whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
		transition={{ duration: 0.5 }}
		viewport={{ once: true }}
		className="bg-gray-100 p-7 rounded-3xl  w-full"
	>
		<p className="text-black font-black text-[48px]">"</p>

		<div className="mt-1">
			<p className="text-black tracking-wider text-[18px]">{testimonial}</p>

			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-black font-medium text-[16px]">
						<span className="blue-text-gradient">@</span> {name}
					</p>
					<p className="mt-1 text-secondary text-[12px]">
						{designation} of {company}
					</p>
				</div>

				<img
					src={image}
					alt={`feedback_by-${name}`}
					className="w-10 h-10 rounded-full object-cover"
				/>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className={`rounded-[20px] w-full pt-[75px]`}>
			<div className={` rounded-2xl pb-10 min-h-fit`}>
				<motion.div
					whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
					transition={{ duration: 0.5 }}
				>
					<p className={styles.sectionSubText}>What others say</p>
					<h2 className={styles.sectionHeadText}>Testimonials.</h2>
				</motion.div>
			</div>
			<div
				className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-7`}
			>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.name} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default Feedbacks;
