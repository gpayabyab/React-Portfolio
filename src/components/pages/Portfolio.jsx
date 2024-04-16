import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const data = [
    {
      name: "Password Generator",
      deployed: '',
      repo: ''
  }, 
  {
      name: "Work Scheduler",
      deployed: '',
      repo: ''
  }, 
  {
      name: "Brewery Search",
      deployed: '',
      repo:''
  },
  {
    name: "Plant Shelf",
    deployed: '',
    repo:''
  },
  {
    name: "Text Editor",
    deployed: '',
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
