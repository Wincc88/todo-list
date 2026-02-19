

export function makeProject(projectTitle, projectDetails, id, complete = false, madedate) {

  return {
    title: projectTitle,
    details: projectDetails,
    id: id || crypto.randomUUID() + "#",
    complete: !!complete,
    madedate: madedate ? new Date(madedate) : new Date(),
  };

}


export let allProjects = [];
  //console.log(allProjects);


export function addProjecttoList(projectTitle, projectDetails, id, complete = false, madedate) {
    
   
    let newProject;

    if (!newProject) {
      newProject = makeProject(projectTitle, projectDetails, id, complete, madedate);
    }

    

     if (!newProject) {
        console.warn('addProjecttoList: no project to add (inputs missing or empty). //not needed, taken care of with inpuit validation');
        return null;
    }  
    

    allProjects.push(newProject);
     
   // console.log(allProjects);

   //   console.log('Project added:', newProject);

      allInsideList();
        
     return  newProject;

}



export function allInsideList() { 
   
  // console.log(allProjects);
   
    return allProjects;

}

export function totalProjectsNum() {
    return allProjects.length + " tasks in total now.";
   // return allProjects.length;
} 

export function putinlocalstorage() { 
    return localStorage.setItem('project_List', JSON.stringify(allProjects));     // use return later
   // console.log('Projects saved to local storage:', allProjects);
    
}


export function getfromlocalstorage() {
    
    const storedProjects = localStorage.getItem('project_List'); 
    if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);

        parsedProjects.map((proj) => {
            // Reconstruct project preserving id, complete and madedate
            let justAname = addProjecttoList(proj.title, proj.details, proj.id, proj.complete, proj.madedate);
           // console.log('Project reconstructed from local storage and added to list:', justAname);
            return justAname;
        });

               // this will work too but map is effective here :  
               // allProjects.forEach((project) => {
               //   addProjecttoList(project.title, project.details, project.id);
               //  }); 

               // console.log('Reconstructed project objects:', allProjects);
         
    }
        
    
}

