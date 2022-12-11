import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select()
    }

    return (
        <>
            <h1>FocusScreen</h1>

            <hr/>

            <input
                type="text"
                placeholder="Ingrese su nombre"
                name="name"
                className='form-control'
                ref={inputRef}
            />

            <button 
                className='btn btn-primary mt-2'
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    )
}
