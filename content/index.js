import React from 'react';
import ReactDOM from 'react-dom/client';

const div = document.createElement("div")
div.id = "chrome-extension-div"
document.body.appendChild(div)

const root = ReactDOM.createRoot(div);
root.render(
    <React.StrictMode>
        <div>
            chrome extensions content js  with react
        </div>
    </React.StrictMode>
);