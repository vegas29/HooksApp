import { useRef, useLayoutEffect, useState } from "react";

export const PokemonName = ({pokemonName = "Pikachu"}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

    useLayoutEffect(()=> {
        const { width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({width, height});
    }, [pokemonName]);

    return (
        <>        
            <p className='mt-1' ref={pRef}>
                {pokemonName}
            </p>

            <code>
                {JSON.stringify(boxSize)}
            </code>
        </>
    )
}
