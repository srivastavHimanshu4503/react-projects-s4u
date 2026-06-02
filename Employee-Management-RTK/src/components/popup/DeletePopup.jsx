import React from "react";
import { closeDeletePopup } from "../../features/popups/popupSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../../features/employee/employeeThunk";

const DeletePopup = () => {
	const dispatch = useDispatch();
	const id = useSelector((state) => state.popup.deletePopup);

	const handleDeleteEvent = async () => {
		dispatch(closeDeletePopup());
		await dispatch(deleteEmployee(id));
	};

	return (
		<div
			onClick={() => dispatch(closeDeletePopup())}
			className="bg-black/80 w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center text-xl"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="card bg-base-100 text-neutral-content w-96"
			>
				<div className="card-body items-center text-center">
					<h2 className="card-title">Delete</h2>
					<p>Are you sure want to delete this?</p>
					<div className="card-actions justify-around w-[70%] mt-1 p-2">
						<button
							onClick={() => dispatch(closeDeletePopup())}
							className="btn btn-primary"
						>
							No
						</button>
						<button
							onClick={handleDeleteEvent}
							className="btn btn-primary"
						>
							Yes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeletePopup;
