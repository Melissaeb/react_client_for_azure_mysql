import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function Country() {
  const { countryname } = useParams();
  console.log(countryname);
  return (
    <div>
      <h2>Country</h2>
    </div>
  );
}
