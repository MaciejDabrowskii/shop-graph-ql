import React from "react";

function SelectedValues(
  {
    attributes,
    selectedAttributes,
    providedClass,
  },
)
{
  return (
    <div className={
      `${providedClass} product-details-info-attributes-container`
      }
    >
      {attributes.map(({ name, items }) =>
      {
        if (name === "Color")
        {
          return (
            <div
              className={
              `${providedClass} product-details-info-attribute-container`
              }
              key={name}
            >
              <p
                className={
                  `${providedClass} product-details-info-attribute-name`
                }
              >
                {`${name.toUpperCase()}:`}
              </p>
              <div
                className={
                  `${providedClass}
                   product-details-info-attribute-values-container`
                }
              >
                {items.map(({ id, value }) => (
                  <div
                    className={
                      `${providedClass} product-details-info-attribute-wrapper${
                        selectedAttributes[name] === id
                          ? " selected" : ""}`
                    }
                    key={value}
                  >
                    <div
                      style={{
                        backgroundColor: value,
                        border: id === "White"
                          ? "1px solid rgba(0, 0, 0, 0.400)" : "",
                      }}
                      className={
                        `${providedClass} product-details-info-attribute-color`
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        }

        return (
          <div
            className={
              `${providedClass} product-details-info-attribute-container`
            }
            key={name}
          >
            <p
              className={
                `${providedClass} product-details-info-attribute-name`
              }
            >
              {`${name.toUpperCase()}:`}
            </p>
            <div
              className={
                `${providedClass}
                 product-details-info-attribute-values-container`
              }
            >
              {items.map(({ id, displayValue }) => (
                <div
                  key={id}
                  className={
                    selectedAttributes[name] === id
                      ? `${providedClass}
                       product-details-info-attribute-value active`
                      : `${providedClass}
                       product-details-info-attribute-value`
                  }
                >
                  {displayValue}
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
