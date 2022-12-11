import { Loading } from '../components/Loading';
import { useCounter, useFetch } from '../hooks/';
import { PokemonName } from './components/PokemonName';

export const MultipleCustomHooks = () => {

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
