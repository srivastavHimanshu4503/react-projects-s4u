function Button({ text, updater }) {
    return (
        <>
        <button onClick={updater}> { text }</button></>
    )
}

export default Button;