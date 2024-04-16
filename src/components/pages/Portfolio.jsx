import React from "react";
import Project from "../Project";

export default function Portfolio() {
  const data = [
    {
      name: "Password Generator",
      deployed: 'https://gpayabyab.github.io/Password-Generator/',
      repo: 'https://github.com/gpayabyab/Password-Generator'
  }, 
  {
      name: "Work Scheduler",
      deployed: 'https://gpayabyab.github.io/Work-Scheduler/',
      repo: 'https://github.com/gpayabyab/Work-Scheduler'
  }, 
  {
      name: "Brewery Search",
      deployed: 'https://gpayabyab.github.io/Project-1/',
      repo:'https://github.com/gpayabyab/Project-1'
  },
  {
    name: "Plant Shelf",
    deployed: 'https://plant-data-a769bbeb4892.herokuapp.com/',
    repo:'https://github.com/BaharMahmud/PlantData'
  },
  {
    name: "Text Editor",
    deployed: 'https://text-editor-rwiy.onrender.com',
    repo:'https://github.com/gpayabyab/Text-Editor-'
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
