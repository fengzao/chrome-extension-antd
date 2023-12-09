import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'antd';

const div = document.createElement("div")
div.id = "chrome-extension-div"
document.body.appendChild(div)
const root = ReactDOM.createRoot(div);
root.render(
  <React.StrictMode>
    <div style={{ width: 300, height: 100, margin: "0 0 ", padding: "10px 10px ", borderRadius: "10px", background: "#ccc" }}>
      <div style={{ margin: "auto auto", textAlign: "center" }}>
        <div style={{ padding: "10px 5px", fontSize: "18px" }}>  Chrome Extend with  Antd componet  </div>
        <Button type='primary'>  Antd Button </Button>
      </div>
    </div>
  </React.StrictMode>
);