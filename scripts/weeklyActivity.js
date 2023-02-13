const project = document.querySelector("#learningActivity");


let projectUrl = "scripts/dynamicLinks.json";

async function apiFetch(){
    try {
      const response = await fetch(projectUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayWeek(data.weeks);
      } else {
          throw Error(await response.text());
      }
      } catch (error) {
        currentTemp.textContent = " API did not load. ";
      } 
  }
  apiFetch();

 const displayWeek = (weeks, assignmentNumber)=>{
    
    weeks.forEach((week)=>{
        const weekDisplay = document.createElement("div");
        const titleDisplay = document.createElement("p");
        const assignmentLink0 = document.createElement("a");

        for (let i= 0; i <= week.links.length ; i++){
          let linkNode0 = document.createTextNode(`${week.links[0].title}, `)
          assignmentLink0.appendChild(linkNode0);
          assignmentLink0.title= `${week.links[0].title}`;
          assignmentLink0.href= `${week.links[0].url}`;
          weekDisplay.innerHTML = `${week.week}: `;
          weekDisplay.appendChild(assignmentLink0);
          project.appendChild(weekDisplay);
        }
       
        
       
    })
    
 }
 


 
