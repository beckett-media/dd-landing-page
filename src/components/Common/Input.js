import React, {  useState } from "react";
import MaskedInput from "input-masked-react";
import Link from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Input = ({ otp, error, inputAllowed, label, options, ...rest }) => {
  const [isVisibleOptions, showOptions] = useState(false);
  let optionsIsArray = Array.isArray(options);

  const onBlur = () => {
    setTimeout(() => {
      showOptions(false);
    }, 200);
  };

  const onFocus = () => {
    showOptions(true);
  };

  const renderOptions = () => {
    let items = optionsIsArray ? options : (options.split(" ") || []).map((option) => ({ value: option }));

    const chooseOption = (value) => {
      showOptions(false);
      if (optionsIsArray) {
        rest.onChange(value);
      } else {
        rest.onChange((rest.value || "") + " " + value);
      }
    };

    return (
      <div>
        {!optionsIsArray ? <p className="text-secondary m-0 p-2">You can type or choose from the keywords below to fill the field</p> : ""}
        <div className={optionsIsArray ? "flex-column" : "flex-row"}>
          {items.map(({ value, label }) => (
            <Link style={{ display: optionsIsArray ? "block" : "inline-block" }} onClick={() => chooseOption(value)}>
              <div className={"p-2"}>{label || value}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {otp && (
        <div className="input-custom">
          <div className="d-flex justify-content-center align-items-center otp">
            <MaskedInput numInputs={6} onChange={rest.onChange} separator={<span>&nbsp;&nbsp;</span>} />
          </div>
        </div>
      )}

      {!otp && (
        <div className={`input-custom ${label ? "has-label" : ""}`}>
          {label && <label>{label}</label>}
          <input readOnly={optionsIsArray && !inputAllowed ? true : false} onFocus={onFocus} onBlur={onBlur} {...rest} />
          {optionsIsArray && (
            <span className="dropdown-icon">
              <FontAwesomeIcon icon={isVisibleOptions ? faChevronUp : faChevronDown} />
            </span>
          )}
          {(error && <p className={"text-danger"}>{error.message}</p>) || null}
          {options && isVisibleOptions && <div className="options">{renderOptions(rest.onChange)}</div>}
        </div>
      )}
    </React.Fragment>
  );
};

export default Input;
