import React from "react";
import { Link } from "react-router-dom";

export default function Project({ data }) {
  return (
    <div style={{border: 'black 2px solid'}}>
      <h3>{data.name}</h3>
      <Link to={data.deployed}>Deployed URL</Link>
      <br></br>
      <Link to={data.repo}>Repo URL</Link>
    </div>
  );
}
