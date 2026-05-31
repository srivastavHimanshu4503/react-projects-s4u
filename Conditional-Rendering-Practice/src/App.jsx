import { useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import PopupWindow from "./components/PopupWindow.jsx";
import SideBar from "./components/SideBar.jsx";
import Header from "./components/Header.jsx";

function App() {
	const [togglePopup, setTogglePopup] = useState(false);
	const [actionName, setActionName] = useState("");
	const [activeSidebar, setActiveSidebar] = useState(false);

	return (
		<>
			<SideBar
				className={`transform transition-transform duration-500 ${
					activeSidebar ? "translate-x-0" : "-translate-x-full"
				}`}
				setActiveSidebar={setActiveSidebar}
				activeSidebar={activeSidebar}
			/>

			<div className={`${
				activeSidebar ? "opacity-25" : "opacity-100"
			}`}>
				<Header setActiveSidebar={setActiveSidebar} />

				{/* Pop-up window */}
				{togglePopup ? (
					<div className="overflow-hidden">
						<PopupWindow
							actionName={actionName}
							setTogglePopup={setTogglePopup}
						/>
					</div>
				) : (
					<div className="w-full h-screen flex justify-center items-center">
						<div className="flex justify-center gap-10 p-2">
							<Button
								text={"delete"}
								setPopupDisplay={setTogglePopup}
								setActionName={setActionName}
							/>
							<Button
								text={"edit"}
								setPopupDisplay={setTogglePopup}
								setActionName={setActionName}
							/>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
