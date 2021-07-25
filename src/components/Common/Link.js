import React from "react";
import { Link as BrowserLink} from "gatsby"


const Link = ({ onClick, to, children, ...rest }) => {
  const _onClick = (e) => {
    e.preventDefault();
    onClick();
  };
  return (
    <React.Fragment>
      {to ? (
        <BrowserLink to={to} {...rest}>
          {children}
        </BrowserLink>
      ) : (
        <a href="#" {...rest} onClick={_onClick}>
          {children}
        </a>
      )}
    </React.Fragment>
  );
};

export default Link;
