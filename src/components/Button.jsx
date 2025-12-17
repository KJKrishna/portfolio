import React from 'react';
import '../styles/Button.css';

const Button = React.forwardRef(
  ({ className = '', variant = 'default', size = 'default', asChild = false, children, ...props }, ref) => {
    const Component = asChild ? 'span' : 'button';

    return (
      <Component
        ref={ref}
        className={[
          'btn',
          `btn-variant-${variant}`,
          `btn-size-${size}`,
          className
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export default Button;
