import React from 'react';
import './placeholder.css';

const Placeholder = ({
  height,
  width,
  br,
  margin
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "placeholder",
    style: {
      height: height,
      width: width,
      borderRadius: br,
      margin: margin
    }
  }));
};

const Placeholders = ({
  height,
  width,
  br,
  n,
  margin
}) => {
  const loading = (pHeight, pWidth, pBorderRadius, pNumber) => {
    let placeholders = [];

    for (let i = 0; i < Number(pNumber); i++) {
      placeholders.push( /*#__PURE__*/React.createElement(Placeholder, {
        height: `${pHeight}`,
        width: `${pWidth}`,
        br: `${pBorderRadius}`,
        margin: `${margin}`,
        key: i
      }));
    }

    return placeholders;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "placeholders"
  }, loading(height, width, br, n));
};

export default Placeholders;