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
              <p className="product-details-info-attribute-name">
                {`${attribute.name.toUpperCase()}:`}
              </p>
              <div className="product-details-info-attribute-values-container">
                {attribute.items.map((item) => (
                  <div
                    className={`product-details-info-attribute-wrapper${
                      selectedAttributes[attribute.name] === item.id
                        ? " selected" : ""}`}
                    key={item.value}
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
            <p className="product-details-info-attribute-name">
              {`${attribute.name.toUpperCase()}:`}
            </p>
            <div
              className="
                  product-details-info-attribute-values-container
                  "
            >
              {attribute.items.map((item) => (
                <div
                  key={item.id}
                  className="product-details-info-attribute-value"
                  style={
                    selectedAttributes[attribute.name] === item.id
                      ? {
                        backgroundColor: "rgba(29, 31, 34, 1)",
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
