import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas de <FirstApp />', () => { 
    // Toma fotografía del componente y si algo cambia, la prueba falla.
    // Este tipo de pruebas nos ayuda a aseguramos que la estructura del componente no cambie y se mantenga así durante el tiempo requerido.
    test('Debe de hacer match con el snapshot', () => { 
        // 1. Arreglar: Inicializar o configurar entorno de pruebas.
        const title = 'Hello world';
        const subTitle = "I'm a awesome subtitle";
        const paragram = "I'm awesome paragram.";
        
        // 2. Actuar: Estímulo que se aplicará al sujeto a probar.
        const { container } = render ( <FirstApp title={ title } subTitle={ subTitle } paragram={ paragram } /> );
        // console.log( container );
    
        // 3. Observar: Confirmar que el comportamiendo sea el esperado.
        // Es decir, que la estructura actual del componente sea igual a la imagen guardada.
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el título en un h1', () => {
        // 1. Arreglar: Inicializar o configurar entorno de pruebas.
        const title = 'Hello world';
        const subTitle = "I'm a awesome subtitle";
        const paragram = "I'm awesome paragram.";

        // 2. Actuar: Aplicar estímulo al sujeto de prueba.
        const { container, getByText } = render ( <FirstApp title={ title } subTitle={ subTitle } paragram={ paragram } /> );
        // console.log( container );
        // Obtener etiqueta h1
        const h1 = container.querySelector('h1');

        // 3. Observar: Confirmar que el comportamiendo sea el esperado.
        // Valida que el título enviado al componente se está renderizando en el DOM.
        expect( getByText(title) ).toBeTruthy();

        // Validar si el título existe dentro de dicha etiqueta
        expect( h1.innerHTML ).toBe( title );           // Valida que exista el valor exacto.
        // expect( h1.innerHTML ).toContain( title );      // Valida que contenga el valor.
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        // 1. Arreglar: Inicializar o configurar entorno de pruebas.
        const title = 'Hello world';
        const subTitle = "I'm a awesome subtitle";
        const paragram = "I'm awesome paragram.";

        // 2. Actuar: Aplicar estímulo al sujeto de prueba.
        const { getByText } = render ( <FirstApp title={ title } subTitle={ subTitle } paragram={ paragram } /> );

        // 3. Observar: Confirmar que el comportamiendo sea el esperado.
        // Valida que el subtitulo enviado al componente exista.
        expect( getByText(subTitle) ).toBeTruthy();
    });
});
