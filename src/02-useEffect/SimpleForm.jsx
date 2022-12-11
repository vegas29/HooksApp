import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'alejandro',
        email: 'ale@gmail.com'
    });

    const { username, email } = formState; 

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect( () => {
        // console.log('useEffect called!')
    }, []);

    useEffect( () => {
        // console.log('useEffect called when formState changed!')
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!')
    }, [email]);

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }

    // }, [third])
    

    return (
        <>

            <h1>Formulario Simple</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                ( username === 'alejandro2') && <Message/>
            }

        </>
    )
}
