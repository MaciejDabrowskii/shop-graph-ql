/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from "react";

function RenderAttributes({
  attributes,
  selectedAttributes,
  setSelectedAttributes,
})
{
  const updateAttributes = (e, attribute) =>
  {
    setSelectedAttributes({
      ...selectedAttributes,
      [attribute.name]: e.target.value,
    });
  };
  return (
    <div className="product-details-info-attributes-container">
      {attributes.map((attribute) =>
      {
        if (attribute.name === "Color")
        {
          return (
            <div
              className="product-details-info-attribute-container"
              key={attribute.name}
            >
              <p className="product-details-info-attribute-name">
                {`${attribute.name.toUpperCase()}:`}
              </p>
              <div className="product-details-info-attribute-values-container">
                {attribute.items.map((item) => (
                  <div
                    className={selectedAttributes[attribute.name] === item.id
                      ? "product-details-info-attribute-wrapper active"
                      : "product-details-info-attribute-wrapper"}
                    key={item.value}
                  >
                    <label
                      className="product-details-info-attribute-color"
                      style={
                        {
                          backgroundColor: item.value,
                          border: item.id === "White"
                            ? "1px solid rgba(0, 0, 0, 0.400)" : "",
                        }
                      }
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
                ))}
              </div>
            </div>
          );
        }
        return (
          <div
            className="product-details-info-attribute-container"
            key={attribute.name}
          >
            <p className="product-details-info-attribute-name">
              {`${attribute.name.toUpperCase()}:`}
            </p>
            <div
              className="product-details-info-attribute-values-container"
            >
              {attribute.items.map((item) => (
                <label
                  className={selectedAttributes[attribute.name] === item.id
                    ? "product-details-info-attribute-value active"
                    : "product-details-info-attribute-value"}
                  htmlFor={item.name}
                  key={item.id + item.name}
                >
                  <input
                    type="radio"
                    value={item.id}
                    name={attribute.id}
                    onChange={(e) => updateAttributes(e, attribute)}
                    id={item.name}
                  />
                  {item.displayValue}
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default RenderAttributes;
