const Wrapper = ({ className, children }) => {
	return <div className={`w-[90vw] px-2 ${className}`}>{children}</div>;
};

export default Wrapper;
