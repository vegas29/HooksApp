import { useState, useCallback } from 'react';
import { ShowIncrement } from './components/ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
        (value) => {
            setCounter( (counter) => counter + value);
        }, 
        []
    );

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    return (
        <>
            <h1>useCallBack Hook Counter: {counter} </h1>
            <hr />

            <ShowIncrement increment={increment}/>
        </>
    )
}
