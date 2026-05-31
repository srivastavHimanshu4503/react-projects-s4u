const Button = ({ setSelectedColor, children }) => {
    function setColor() {
        setSelectedColor(children);
    }
    return (
        <button className="px-4 py-2 text-2xl border-2 rounded-2xl cursor-pointer" onClick={setColor} style={{backgroundColor: children}}> { children } </button>
    )
}

export default Button
