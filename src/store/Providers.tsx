'use client'
import { store } from './index';
import { Provider } from 'react-redux';
// CREAMOS UN Higher Order Component 
// NO es perfecto pero FUNCIONA para lo que realizaremos 
// COMO REDUX SE TIENE QUE EJECUTAR EN EL LADO DEL CLIENTE CREAMOS UN COMPONENTE QUE REALIZE ESO PARA ENCAPSULARLO A NUESTRA RAIZ DEL PROYECTO


interface Props{
    // Acepta cualquier NODO de REACT
    children: React.ReactNode;
}

export const Providers = ( {children}:Props ) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
