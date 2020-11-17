import React from "react";
import ReactInputSelect from "react-input-select";

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>{children}</components.SingleValue>
);

const colourOptions = [2, "lola", "hoho"]; //our array of colours

class Sel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <ReactInputSelect data={["lolo"]} value="" />;
  }
}
export default Sel;
