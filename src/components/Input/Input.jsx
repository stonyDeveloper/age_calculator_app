import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    type,
    width,
    height,
    label,
    borderColor,
    borderSize,
    borderType,
    borderRadius,
    labelFontSize,
    labelFontStyle,
    labelColor,
    fontStyle,
    fontSize,
    padding,
    name,
    field,
    onChange,
    id,
    errorMessage
  } = props;
  return (
    <div className="flex flex-col">
      <span
        className={`${labelColor} ${errorMessage && 'text-light-red'} ${labelFontSize} ${labelFontStyle} mb-2 text-xs tracking-widest`}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        onChange={(field && field.onChange) || onChange}
        id={(field && field.name) || id}
        className={`${padding} ${fontStyle} ${fontSize} ${borderColor} ${errorMessage && 'border-light-red'} ${borderSize} ${borderRadius} ${borderType} ${width} md:w-[] h-[60px] md:${height} focus:border-purple focus:outline-none`}
      />
      <p className="mt-[5px] text-[13px] text-light-red">{errorMessage}</p>
    </div>
  );
};

Input.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.string,
  title: PropTypes.string,
  secondTitle: PropTypes.string,
  secondTitleColor: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  height: "h-[48px]",
  type: "text",
  placeholder: "",
  borderRadius: "rounded-lg",
  fontSize: "text-[14px]",
  title: "",
  secondTitle: "",
  secondTitleColor: "",
  errorMessage: "",
};
export default Input;
