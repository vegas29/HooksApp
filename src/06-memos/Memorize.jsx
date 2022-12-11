import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './components/Small';

export const Memorize = () => {

    const { counter, increment } = useCounter();
    const [show, setShow] = useState(true);

    return (
        <>
            <h1>Counter: <Small counter={counter}/></h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                onClick={() => setShow(!show)}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </>
    )
}
