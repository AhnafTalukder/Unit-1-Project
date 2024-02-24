import React from 'react';
import "./Button.css"

const Button = ({ onClick, children, as: Component = 'button', ...rest }) => {
    return (
      <Component onClick={onClick} id="action" {...rest}>
        {children}
      </Component>
    );
  };
  
  export default Button;