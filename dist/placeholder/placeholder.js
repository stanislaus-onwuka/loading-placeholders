import React from 'react';
import './placeholder.css';

const Placeholder = ({
  height,
  width
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "placeholder",
    style: {
      height: height,
      width: width
    }
  }));
};

export default Placeholder;