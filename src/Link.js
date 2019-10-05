import React from 'react';

function Link({href, active, color, children}) {
    if (!active) {
        return (
            <div
                className="my-1 w-full border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal p-2 bg-gray-500 hover:bg-gray-300"
            >
                {children}
            </div>
        );
    }
    return (
        <a
            className={"my-1 w-full border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal p-2 bg-" + color + "-500 hover:bg-" + color + "-300"}
            target="_blank"
            href={href}
        >
            {children}
        </a>
    );
}

export default Link;
