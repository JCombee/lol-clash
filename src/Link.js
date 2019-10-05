import React from 'react';

function Link({href, active, color, children}) {
    if (!active) {
        return (
            <div
                className="w-full block bg-gray-500 hover:bg-gray-300"
            >
                {children}
            </div>
        );
    }
    return (
        <a
            className={"w-full block bg-" + color + "-500 hover:bg-" + color + "-300"}
            target="_blank"
            href={href}
        >
            {children}
        </a>
    );
}

export default Link;
