import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import toast from "react-hot-toast";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	// Template ID = template_0qz1lfd
	// Service ID = service_8ltp87m
	// Public Key = cY4emk1Gx-FyYczfr

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send("service_xnkr11d", "template_07aljds", form, "cY4emk1Gx-FyYczfr")
			.then(
				() => {
					setLoading(false);
					toast.success("Thanks I will get back to you.");

					setForm({
						name: "",
						email: "",
						message: "",
					});	
				},
				(error) => {
					setLoading(false);
					console.error(error);

					toast.error("Ahh, something went wrong. Please try again.");
				}
			);
	};

	return (
		<div
			className={`xl:py-10 flex xl:flex-row flex-col-reverse overflow-hidden xl:gap-8`}
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75]  px-7 py-4 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label className="flex flex-col">
						<span className="text-black font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your good name?"
							className="bg-gray-100 py-4 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-black font-medium mb-4">Your email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your web address?"
							className="bg-gray-100 py-4 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-black font-medium mb-4">Your Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What you want to say?"
							className="bg-gray-100 py-4 px-4 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium max-h-[200px] overflow-y-scroll no-scrollbar"
						/>
					</label>

					<button
						type="submit"
						className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white transition-all duration-500 hover:scale-105 font-bold shadow-md"
					>
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
