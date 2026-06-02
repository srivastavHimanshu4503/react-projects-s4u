import React from 'react'

const Wrapper = ({ children, className }) => {
    return (
        <div className={`max-w-[80vw] m-auto ${className}`}>
            {children}
        </div>
    )
}

export default Wrapper
