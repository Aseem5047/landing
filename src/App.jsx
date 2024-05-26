import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	StarsCanvas,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0">
				<Navbar />
				<Routes>
					<Route index element={<Hero />} />
					<Route path="about" element={<About />} />
					<Route path="carrers" element={<Experience />} />
					<Route
						path="contact"
						element={
							<div className="relative z-0">
								<Contact />
								<StarsCanvas />
							</div>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
