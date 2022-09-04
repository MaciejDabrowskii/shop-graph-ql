/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from "react";

function RenderAttributes(
  {
    attributes,
  },
)
{
  console.log(attributes);
  return (
    <div className="product-details-info-attributes-container">
      {
            attributes.map((attribute) =>
            {
              if (attribute.name === "Color")
              {
                return (
                  <div
                    className="product-details-info-attribute-container"
                    key={attribute}
                  >
                    <h3 className="product-details-info-attribute-name">
                      {attribute.name.toUpperCase()}
                    </h3>
                    <div
                      className="
                      product-details-info-attribute-values-container
                      "
                    >
                      {
                        attribute.items.map((item) => (
                          <div
                            lassName="product-details-info-attribute-value"
                            key={item}
                            style={{ backgroundColor: item.value }}
                          >
                            {item.displayValue}
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
                  key={attribute}
                >
                  <h3 className="product-details-info-attribute-name">
                    {attribute.name.toUpperCase()}
                  </h3>
                  <div
                    className="
                      product-details-info-attribute-values-container
                      "
                  >
                    {
                        attribute.items.map((item) => (
                          <div
                            lassName="product-details-info-attribute-value"
                            key={item}
                          >
                            {item.displayValue}
                          </div>
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
