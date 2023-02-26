import React, { useState } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
function EyePass({ value, onChange, placeholder }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <input
        type={isShow ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isShow ? (
        <div className="eye-pass" onClick={() => setIsShow(false)}>
          <EyeInvisibleOutlined />
        </div>
      ) : (
        <div className="eye-pass" onClick={() => setIsShow(true)}>
          <EyeOutlined />
        </div>
      )}
    </div>
  );
}

export default EyePass