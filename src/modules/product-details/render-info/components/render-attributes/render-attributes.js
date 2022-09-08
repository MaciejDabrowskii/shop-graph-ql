/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React, { } from "react";
// import RenderColors from "./components/render-colors";

function RenderAttributes(
  {
    attributes,
    selectedAttributes,
    setSelectedAttributes,
  },
)
{
  const updateAttributes = (e, attribute) =>
  {
    setSelectedAttributes(
      { ...selectedAttributes, [attribute.name]: e.target.value },
    );
    console.log(e.target.value);
  };
  console.log(selectedAttributes, attributes);
  return (
    <div className="product-details-info-attributes-container">
      {
          attributes.map((attribute) =>
          {
            if (attribute.name === "Color")
            {
              // <RenderColors
              //   attribute={attribute}
              //   updateAttributes={updateAttributes}
              //   selectedAttributes={selectedAttributes}
              // />;
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
                              ? { border: "4px solid rgb(94, 206, 123)", padding: "4px" } : {}
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
            return (
              <div
                className="product-details-info-attribute-container"
                key={attribute.name}
              >
                <h3 className="product-details-info-attribute-name">
                  {`${attribute.name.toUpperCase()}:`}
                </h3>
                <div
                  className="
                    product-details-info-attribute-values-container
                    "
                >
                  {
                      attribute.items.map((item) => (
                        <label
                          className="product-details-info-attribute-value"
                          style={selectedAttributes[attribute.name] === item.id ? {
                            backgroundColor: "black",
                            color: "white",
                          } : {}}
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
                      ))
                  }
                </div>
              </div>
            );
          })
        }
    </div>
  );
}
export default RenderAttributes;
