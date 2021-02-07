import React from "react";
import loading from "../assets/logo-thumb.svg";
import "./Loading.css";

const Loading = () => (
  <div className="Loading">
    <header className="Loading-header">
      <img src={loading} className="Loading-logo" alt="loading" />
    </header>
  </div>
);

export default Loading;
