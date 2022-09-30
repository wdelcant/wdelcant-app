import { DotWave } from '@uiball/loaders';
import './useLoader.scss';

//  UseLoader es una función que devuelve un div con una clase de cargador y un componente DotWave con un tamaño de 80 y un color de #018aff.
const useLoader = () => {
  return (
    <div className="loader">
      <DotWave size={80} color="#018aff" />
    </div>
  );
};

export default useLoader;
