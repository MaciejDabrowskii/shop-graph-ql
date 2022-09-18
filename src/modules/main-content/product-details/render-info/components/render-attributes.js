/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { Component } from "react";

class RenderAttributes extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    const {
      attributes,
      selectedAttributes,
      updateAttributes,
      providedClass,
    } = this.props;

    return (
      <div className={`${providedClass}-attributes-container`}>
        {attributes.map(({ name, items, id }) =>
        {
          if (name === "Color")
          {
            return (
              <div
                className={`${providedClass}-attribute-container`}
                key={name}
              >
                <p className={`${providedClass}-attribute-name`}>
                  {`${name.toUpperCase()}:`}
                </p>
                <div className={`${providedClass}-attribute-values-container`}>
                  {items.map((item) => (
                    <div
                      className={selectedAttributes[name] === item.id
                        ? `${providedClass}-attribute-wrapper active`
                        : `${providedClass}-attribute-wrapper`}
                      key={item.value}
                    >
                      <label
                        className={`${providedClass}-attribute-color`}
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
                          onChange={(e) => updateAttributes(e, name)}
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
              className={`${providedClass}-attribute-container`}
              key={name}
            >
              <p className={`${providedClass}-attribute-name`}>
                {`${name.toUpperCase()}:`}
              </p>
              <div
                className={`${providedClass}-attribute-values-container`}
              >
                {items.map((item) => (
                  <label
                    className={selectedAttributes[name] === item.id
                      ? `${providedClass}-attribute-value active`
                      : `${providedClass}-attribute-value`}
                    htmlFor={item.name}
                    key={item.id + item.name}
                  >
                    <input
                      type="radio"
                      value={item.id}
                      name={id}
                      onChange={(e) => updateAttributes(e, name)}
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
}

export default RenderAttributes;
