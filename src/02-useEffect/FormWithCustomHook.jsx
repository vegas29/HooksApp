import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { email, password, onInputChange, onResetForm } = useForm({
        email: '',
        password: '',
    });
    
    return (
        <>

            <h1>Formulario With Custom Hook</h1>
            <hr/>

            <input
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button
                className="btn btn-primary mt-2"
                onClick={onResetForm}
            >
                Borrar
            </button>

        </>
    )
}
