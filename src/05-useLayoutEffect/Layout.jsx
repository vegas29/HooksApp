import { PokemonName } from '../03-examples/components/PokemonName';
import { Loading } from '../components/Loading';
import { useCounter, useFetch } from '../hooks/';

export const Layout = () => {

    const { increment, counter } = useCounter();
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Pokemon Names</h1>
            <hr/>

            {
                isLoading
                    ? <Loading/>
                    : <PokemonName pokemonName={data?.name}/>
            }

            <button 
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next Pokemon
            </button>
        </>
    )
}
