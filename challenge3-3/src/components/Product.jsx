import { createContext } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function Product() {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const goBackwards = () => {
    navigate(`/products/${parseInt(id) - 1}`);
  };

  const goAfterwards = () => {
    navigate(`/products/${parseInt(id) + 1}`);
  };

  
  return (
    <div className="product">
      <h1>
        Products page for the <i>{id}</i>
      </h1>
      <div id="big">
        <span id="big">
          {id}
          {params.get("easter-egg") ? id : ""}
        </span>
      </div>
      {/* To redirect to any page you can do */}
      <div className="redirect-btns">
        <button onClick={goBackwards}>Last Product</button>
        <button onClick={goAfterwards}>Next Product</button>
      </div>
    </div>
  );
}
