import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas de <FirstApp />', () => { 
    const title = 'Hello world';
    const subTitle = "I'm a awesome subtitle";
    const paragram = "I'm awesome paragram.";

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render ( <FirstApp title={ title } subTitle={ subTitle } paragram={ paragram } /> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar título', () => {
        render ( <FirstApp title={ title } subTitle={ subTitle } paragram={ paragram } /> );
        // screen.debug();
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar título en un h1', () => {
        render ( <FirstApp title={ title } subTitle={ subTitle } paragram={ paragram } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        render ( <FirstApp title={ title } subTitle={ subTitle } paragram={ paragram } /> );
        expect( screen.getByText(subTitle) ).toBeTruthy();
    });
});
