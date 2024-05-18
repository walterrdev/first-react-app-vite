// Importar componentes
import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

// Cargar estilos CSS a nivel global
import './styles.css';

// Renderizar componente en la vista (DOM)
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="!Hello world! I'm a awesome title" subTitle="I'm a awesome subtitle" paragram="I'm awesome paragram." />
    </React.StrictMode>
);
