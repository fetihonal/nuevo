import React from 'react';
import cn from 'classnames';
import styles from './layout.scss';

const LayoutSection = ({children,className , ...props }) => {
    
    
    return <div className={className}>{children}</div>;
};

const LayoutContainer = ({  children, className, ...props }) => {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};

export { LayoutContainer, LayoutSection };
