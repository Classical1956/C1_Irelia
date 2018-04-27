import React from 'react';
import classnames from 'classnames';

interface C1IconProps {
    className?: string;
    iconName?: string;
    resetProps?: object;
}
export const C1Icon: React.SFC<C1IconProps> = ({
    className,
    iconName,
    resetProps,
}) => {
    const mergeClassName = classnames('icon', className);
    return (
        <svg
            className={mergeClassName}
            {...resetProps}
        >
            <use xlinkHref={`#${iconName}`}/>
        </svg>
    );
}; 