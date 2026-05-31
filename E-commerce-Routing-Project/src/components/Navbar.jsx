import { NavLink, useNavigate } from "react-router";
import ig from "/logo.png"

const Navbar = () => {
	const navigation = useNavigate();
	return (
		<div className="flex gap-8 w-full h-max items-center">
			<img
				src={ig}
				alt="logo"
				className="aspect-square object-contain size-12 cursor-pointer"
				onClick={() => navigation('/')} />
			<NavLink to={"/"} className={({isActive}) => isActive ? "text-[tomato]" : ""}>Home</NavLink>
			<NavLink to={"/products"} className={({isActive}) => isActive ? "text-[tomato]" : ""}>Products</NavLink>
		</div>
	);
};

export default Navbar;
