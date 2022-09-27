import { DotWave } from "@uiball/loaders";
import "./useLoader.scss";

const useLoader = () => {
  return (
    <div className="loader">
      <DotWave size={80} color="#018aff" />
    </div>
  );
};

export default useLoader;
