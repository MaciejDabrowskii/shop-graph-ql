/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";

function RenderColors(
  attribute,
  updateAttributes,
  selectedAttributes,
)
{
  const borderStyle = {
    border: "4px solid rgb(94, 206, 123)",
    padding: "4px",
  };

  return (
    <div
      className="product-details-info-attribute-container"
      key={attribute.name}
    >
      <h3 className="product-details-info-attribute-name">
        {`${attribute.name.toUpperCase()}:`}
      </h3>
      <div className="product-details-info-attribute-values-container">
        {
          attribute.items.map((item) => (
            <div
              className="product-details-info-attribute-wrapper"
              key={item.value}
              style={
                selectedAttributes[attribute.name] === item.id
                  ? {
                    borderStyle,
                  } : {}
              }
            >
              <label
                className="product-details-info-attribute-color"
                style={{ backgroundColor: item.value }}
                htmlFor={item.id}
              >
                <input
                  type="radio"
                  value={item.id}
                  name="color"
                  id={item.id}
                  onChange={(e) => updateAttributes(e, attribute)}
                />
              </label>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default RenderColors;
