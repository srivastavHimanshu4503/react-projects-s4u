import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Wrapper from "../utils/Wrapper";
import EmployeeCard from "./EmployeeCard";
import { getEmployee } from "../../features/employee/employeeThunk";

const Employee = () => {
	const employees = useSelector((state) => state.employee.employees);
	const favorites = useSelector((state) => state.employee.favorites);
	const favEmployees = useSelector((state) => state.employee.favEmployees);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEmployee());
	}, []);

	const renderedEmployees = favorites ? favEmployees : employees;

	return (
		<div>
			<Wrapper>
				<ul className="list bg-base-100 rounded-box shadow-md">
					{renderedEmployees.map((employee) => {
						return (
							<EmployeeCard
								key={employee.id}
								details={employee}
							/>
						);
					})}
				</ul>
			</Wrapper>
		</div>
	);
};

export default Employee;
