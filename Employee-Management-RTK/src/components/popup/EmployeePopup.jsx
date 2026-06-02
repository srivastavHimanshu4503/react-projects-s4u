import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEmployeePopup } from '../../features/popups/popupSlice';
import { postEmployee, putEmployee } from '../../features/employee/employeeThunk';

const EmployeePopup = () => {
	const dispatch = useDispatch();
	const [formDetails, setFormDetails] = useState({
		profileUrl: '',
		username: '',
		email: '',
		bio: '',
		isHighlight: false
	})
	const popup = useSelector((state) => state.popup.employeePopup);

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormDetails({
			...formDetails,
			[name]: value
		})
	}

	const handleSubmit = async () => {
		dispatch(closeEmployeePopup())
		if (popup.id) {
			await dispatch(putEmployee({
				id: popup.id,
				details: { ...formDetails }
			}))
		} else {
			await dispatch(postEmployee(formDetails))
		}
	}

	useEffect(()=> {
		if (popup.id) {
			setFormDetails({
				profileUrl: popup.profileUrl,
				username: popup.username,
				email: popup.email,
				bio: popup.bio,
				isHighlight: popup.isHighlight,
			});
		} else {
			setFormDetails({
				profileUrl: "",
				username: "",
				email: "",
				bio: "",
				isHighlight: false,
			});
		}
	}, [popup])


	return (
		<div
			onClick={() => dispatch(closeEmployeePopup())}
			className="bg-black/80 w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center"
		>
			<fieldset
				onClick={(e) => e.stopPropagation()}
				className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
			>
				<legend className="fieldset-legend text-lg">
					Employee Details
				</legend>

				<label className="label">Profile URL</label>
				<input
					type="text"
					name='profileUrl'
					value={formDetails.profileUrl}
					onChange={handleInputChange}
					className="input"
					placeholder="Profile URL"
				/>

				<label className="label">Username</label>
				<input
					type="text"
					name='username'
					value={formDetails.username}
					onChange={handleInputChange}
					className="input"
					placeholder="Username"
				/>

				<label className="label">Email</label>
				<input
					type="email"
					name='email'
					value={formDetails.email}
					onChange={handleInputChange}
					className="input"
					placeholder="Email"
				/>

				<label className="label">Bio</label>
				<textarea
					name='bio'
					value={formDetails.bio}
					onChange={handleInputChange}
					className="textarea h-24"
					placeholder="Bio"
				></textarea>

				<button
					onClick={handleSubmit}
					className="btn btn-neutral mt-4"
				>
					{popup.id ? "Update" : "Submit"}
				</button>
			</fieldset>
		</div>
	);
}

export default EmployeePopup
