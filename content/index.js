import React from 'react';
import ReactDOM from 'react-dom/client';

const div = document.createElement("div")
div.id = "chrome-extension-div"
document.body.appendChild(div)

const root = ReactDOM.createRoot(div);
root.render(
    <React.StrictMode>
        <div style={{
            position: "fixed",
            bottom: 100,
            right: 100,
            background: "#ccc",
            width: 200,
            height: 100,
            textAlign: 'center',
            color:"#111"
        }}>
            chrome extensions content js  with react
        </div>
    </React.StrictMode>
);