import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {

        render(<MultipleCustomHooks/>);
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Pokemon Names') );

        const nextButton = screen.getByRole('button', {name: 'Next Pokemon'});
        expect( nextButton.disabled ).toBeTruthy();
        // screen.debug();

    });

    test('Debe de mostrar un pokemon', () => {

        useFetch.mockReturnValue({
            data: [{name: 'Pikachu'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks/> );

        expect( screen.getByText('Pikachu')).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next Pokemon'});
        expect(nextButton.disabled).toBeFalsy();

        // screen.debug();
    });

    test('Debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{name: 'Pikachu'}],
            isLoading: false,
            hasError: null
        });

        

        render( <MultipleCustomHooks/> );

        const nextButton = screen.getByRole('button', {name: 'Next Pokemon'});
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();

    });

});