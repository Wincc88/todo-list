

export function makeProject(projectTitle, projectDetails) {

  // console.log({ title, details })

    return { 

        title: projectTitle, 
        details: projectDetails,
        id: crypto.randomUUID() + "#",  
        madedate: new Date(),

        };

}


export let allProjects = [];
  //console.log(allProjects);


export function addProjecttoList(projectTitle, projectDetails, id) {
    
    let newProject;

    if (!newProject) {
        newProject = makeProject(projectTitle, projectDetails, id);
    }

    

     if (!newProject) {
        console.warn('addProjecttoList: no project to add (inputs missing or empty). //not needed, taken care of with inpuit validation');
        return null;
    }  
    

    allProjects.push(newProject);
     
   // console.log(allProjects);

      console.log('Project added:', newProject);

      allInsideList();
        
    // return newProject;

}



export function allInsideList() { 
   
   console.log(allProjects);
   
  //console.log(allProjects.slice()); 

}



