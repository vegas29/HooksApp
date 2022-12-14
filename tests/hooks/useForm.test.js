import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {

    const initialForm = {
        
    }
    test('Debe de regresar los valores por defecto', () => {

        const {} = renderHook( () => useForm());

    });

});