
import React from 'react';
import 'spinkit/css/spinners/2-double-bounce.css';
export const Loading: React.SFC = () => {
    return (
        <div className="sk-double-bounce">
            <div className="sk-child sk-double-bounce1" />
            <div className="sk-child sk-double-bounce2" />
        </div>
    );
};