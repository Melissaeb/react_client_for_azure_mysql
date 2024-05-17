import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function Population() {
  const { continent } = useParams();
  return (
    <div>
      <h2>Population of {parcontinent}</h2>
    </div>
  );
}
