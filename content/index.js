import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () => {

    console.log("----------- App ------------")

    const sendMsg = async () => {
        console.log("-----------------------------------")
        // 演示 content 页面和扩展程序 通过消息通讯
        if (window.chrome && window.chrome.runtime) {
            chrome.runtime.sendMessage({
                a: 1, b: 2, c: 3
            }).then(data => {
                console.log("msg resp = ", data)
            })
        }
    }

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
            <div style={{ fontSize: 11, marginTop: "10px" }} onClick={() => sendMsg()}>
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