import React from "react";
import { PEOPLE_URL } from "../constants"; // Adjust the import path as necessary

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
	return (
		<div
			className={`h-full w-full min-w-full xl:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-xl lg:rounded-r-3xl 2xl:rounded-3xl overflow-x-scroll no-scrollbar`}
		>
			<div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
				<div className="flexCenter gap-4">
					<div className="rounded-full bg-primary p-4">
						<img
							src="src/assets/folded-map.svg"
							alt="map"
							width={28}
							height={28}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<h4 className="bold-18 text-white">{title}</h4>
						<p className="regular-14 text-white">{subtitle}</p>
					</div>
				</div>

				<div className="flexCenter gap-6">
					<span className="flex -space-x-4 overflow-hidden">
						{PEOPLE_URL.map((url) => (
							<img
								className="inline-block h-10 w-10 rounded-full"
								src={url}
								key={url}
								alt="person"
								width={52}
								height={52}
							/>
						))}
					</span>
					<p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
				</div>
			</div>
		</div>
	);
};

const Camp = () => {
	return (
		<section className="2xl:max-container relative flex flex-col pt-10 ">
			<div className="flex h-[340px] max-w-full items-start justify-start gap-8 overflow-x-auto no-scrollbar lg:h-[400px] xl:h-[640px]">
				<CampSite
					backgroundImage="bg-bg-img-1"
					title="Putuk Truno Camp"
					subtitle="Prigen, Pasuruan"
					peopleJoined="50+ Joined"
				/>
				<CampSite
					backgroundImage="bg-bg-img-2"
					title="Mountain View Camp"
					subtitle="Somewhere in the Wilderness"
					peopleJoined="50+ Joined"
				/>
			</div>

			<div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
				<div className="bg-primary p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 relative w-full overflow-hidden rounded-3xl">
					<h2 className="regular-24 md:regular-28 2xl:regular-64 capitalize text-white">
						<strong>Feeling Lost</strong> And Not Knowing The Way?
					</h2>
					<p className="regular-14 xl:regular-16 mt-5 text-white">
						Starting from the anxiety of the climbers when visiting a new
						climbing location, the possibility of getting lost is very large.
						That's why we are here for those of you who want to start an
						adventure
					</p>
					<img
						src="src/assets/quote.svg"
						alt="camp-2"
						width={186}
						height={219}
						className="camp-quote"
					/>
				</div>
			</div>
		</section>
	);
};

export default Camp;
