const ColorContainer = ( { color }) => {
    return (
        <div style={{backgroundColor: color}} className="m-auto border-3 size-64 flex justify-center items-center"> { color.toUpperCase() } </div>
    )
}

export default ColorContainer
