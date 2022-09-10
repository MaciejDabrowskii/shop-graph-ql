import React from "react";

function SelectedValues({ attributes, selectedAttributes })
{
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
              <h3 className="product-details-info-attribute-name">
                {`${attribute.name.toUpperCase()}:`}
              </h3>
              <div className="product-details-info-attribute-values-container">
                {attribute.items.map((item) => (
                  <div
                    className="product-details-info-attribute-wrapper"
                    key={item.value}
                    style={
                      selectedAttributes[attribute.name] === item.id
                        ? {
                          border: "4px solid rgb(94, 206, 123)",
                          padding: "4px",
                        }
                        : {}
                    }
                  >
                    <div
                      style={{ backgroundColor: item.value }}
                      className="product-details-info-attribute-color"
                    />
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
            <h3 className="product-details-info-attribute-name">
              {`${attribute.name.toUpperCase()}:`}
            </h3>
            <div
              className="
                  product-details-info-attribute-values-container
                  "
            >
              {attribute.items.map((item) => (
                <div
                  className="product-details-info-attribute-value"
                  style={
                    selectedAttributes[attribute.name] === item.id
                      ? {
                        backgroundColor: "black",
                        color: "white",
                      }
                      : {}
                  }
                >
                  {item.displayValue}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelectedValues;
