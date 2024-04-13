import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const data = [
    {
        name: "project one",
        deployed: 'https://www.yahoo.com',
        repo: ''
    }, 
    {
        name: "project two",
        deployed: 'https://www.google.com',
        repo: ''
    }, 
    {
        name: "project three",
        deployed: 'https://www.x.com',
        repo:''
    },
];
  return (
    <div>
      {data.map((item) => (
        <>
          <Project data={item}/>
        </>
      ))}
    </div>
  );
}
