import "./index.css";
import React from "react";

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
}

function Logo() {
  return <h1>🏖️ Far Away</h1>;
}

function Form() {
  return <div className="add-form">FORM</div>;
}

function PackingList() {
  return <div className="list">LIST</div>;
}

function Status() {
  return <div className="stats">STATUS</div>;
}
