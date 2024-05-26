import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-40 navbar`}
		>
			<div className="flex w-full justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2 hover:opacity-80 "
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-9 h-9 object-contain " />
					<p className="text-black text-[18px] font-bold cursor-pointer flex justify-center align-center gap-1 ">
						Enriched <span className="text-[#03a9f4f0]">Care</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link, i) => (
						<li
							className={`hover:text-black text-[18px] font-medium cursor-pointer ${
								active === link.title ? "text-[#03a9f4f0]" : "text-black"
							}`}
							key={link.id}
							onClick={() => setActive(link.title)}
						>
							<Link to={link.id}>{link.title}</Link>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={!toggle ? menu : close}
						alt="menu"
						className={`${
							!toggle ? "w-[28px] h-[28px]" : "w-[20px] h-[20px]"
						}  object-contain cursor-pointer hover:opacity-80 invert(1) brightness-0`}
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6  absolute black-gradient top-16 right-2 mx-4 my-2 min-w-[200px] z-10 rounded-xl `}
					>
						<ul className="list-none flex flex-col items-start justify-end gap-6">
							{navLinks.map((link, i) => (
								<li
									className={`hover:text-primary text-[16px] font-poppins font-medium cursor-pointer ${
										active === link.title ? "text-primary" : "text-white"
									}`}
									key={link.id}
									onClick={() => {
										setActive(link.title);
										setToggle(!toggle);
									}}
								>
									<Link to={link.id}>{link.title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
