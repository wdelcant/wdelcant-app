import { DotWave } from "@uiball/loaders";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <DotWave size={80} color="#018aff" />
    </div>
  );
};

export default Loader;
