import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {

    console.log("----------- App ------------")

    return (
        <div style={{
            bottom: 100,
            right: 30,
            background: "#ccc",
            width: 40,
            height: 40,
            textAlign: 'center',
            borderRadius: 40,
            position: "fixed"
        }}>
            <div style={{ fontSize: 11, marginTop: "10px" }}>
                antd
            </div>
        </div>

    )
}



const div = document.createElement("div")
div.id = "chrome-extension-div"
document.body.appendChild(div)
const root = ReactDOM.createRoot(div);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);