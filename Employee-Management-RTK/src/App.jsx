import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "./features/employee/employeeThunk";
import Navbar from "./components/utils/Navbar";
import Footer from "./components/utils/Footer";
import EmployeePopup from "./components/popup/EmployeePopup";
import DeletePopup from "./components/popup/DeletePopup";
import Loader from "./components/utils/Loader";
import Employee from "./components/employees/Employee";
import Error from "./components/utils/Error";

function App() {
	const dispatch = useDispatch();
	const employeePopup = useSelector((state) => state.popup.employeePopup);
	const deletePopup = useSelector((state) => state.popup.deletePopup);
	const loading = useSelector((state) => state.employee.loading);
	const error = useSelector((state) => state.employee.error);

	return (
		<div className="flex flex-col min-h-screen">
			{employeePopup && <EmployeePopup />}
			{deletePopup && <DeletePopup />}
			{loading && (
				<div className="bg-black/80 w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center">
					<Loader />
				</div>
			)}
			{error && (
				<div className="bg-black/80 w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center">
					<Error />
				</div>
			)}

			<Navbar />

			<div className="flex-1 p-4">
				<Employee />
			</div>

			<Footer />
		</div>
	);
}

export default App;
