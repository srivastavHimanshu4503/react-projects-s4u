import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
	openDeletePopup,
	openEmployeePopup,
} from "../../features/popups/popupSlice";
import { putEmployee } from "../../features/employee/employeeThunk";

const EmployeeCard = ({ details }) => {
	const dispatch = useDispatch();

	const handleHighlight = async () => {
		await dispatch(putEmployee({
			id: details.id,
			details: {
				...details,
				isHighlight: !details.isHighlight
			}
		}))
	}

	return (
		<li className="list-row">
			<div>
				<img
					className="size-10 rounded-box"
					src={details.profileUrl}
				/>
			</div>
			<div>
				<div>{details.username}</div>
				<div className="text-sm font-semibold opacity-60">
					{details.email}
				</div>
			</div>
			<p className="list-col-wrap text-xs">{details.bio}</p>
			<button
				onClick={() => dispatch(openEmployeePopup(details))}
				className="btn btn-square btn-ghost"
			>
				<CiEdit className="text-xl" />
			</button>
			<button
				onClick={() => dispatch(openDeletePopup(details.id))}
				className="btn btn-square btn-ghost"
			>
				<MdDeleteOutline className="text-xl" />
			</button>
			<button
				onClick={handleHighlight}
				className="btn btn-square btn-ghost"
			>
				<svg
					className="size-[1.2em]"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g
						strokeLinejoin="round"
						strokeLinecap="round"
						strokeWidth="2"
						fill={details.isHighlight ? "currentColor" : "none"}
						stroke="currentColor"
					>
						<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
					</g>
				</svg>
			</button>
		</li>
	);
};

export default EmployeeCard;
