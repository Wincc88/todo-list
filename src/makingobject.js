

export function makeProject(projectTitle, projectDetails, id) {

  // console.log({ title, details })

    return { 

        title: projectTitle, 
        details: projectDetails,
        id: id || crypto.randomUUID() + "#",  
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

export function totalProjectsNum() {
    return allProjects.length + " tasks in total now.";
   // return allProjects.length;
} 

export function putinlocalstorage() { 
    localStorage.setItem('project_List', JSON.stringify(allProjects));     // use return later
    console.log('Projects saved to local storage:', allProjects);
    console.log('Projects saved to local storage: cheeeeeeeeeeeeck');
}


export function getfromlocalstorage() {
    // make empty list 
    
    const storedProjects = localStorage.getItem('project_List'); 
    if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects); 
           // my projects are now parsed and allproject list is updated with them
           // i need to use the parsed project values in my list to build, strore and show them on the page
         allProjects = parsedProjects;
        console.log('Projects loaded from local storage:', allProjects);
        console.log('Projects loaded from local storage:', allProjects.length);
        console.log('Retrieved projects from local storage:', storedProjects);
          
          

        //now use parsed projects that have been parsed and now strings to rebuild project objects
        allProjects = parsedProjects.map((proj) => {
            return makeProject(proj.title, proj.details, proj.id);
        });

        console.log('Reconstructed project objects:', allProjects);
         // this works well up to here 
         // then display them on the page ---- continue here 
        /*
        for (let i = 0; i < localStorage.length; i++) { 
            const key = localStorage.key(i);
            console.log('Local storage key:', key);

            const value = localStorage.getItem(key);
            console.log('Local storage value:', value);
            
        } */

        

        /*
        allProjects.forEach((project) => {
            addProjecttoList(project.title, project.details, project.id);
        }); */
    }
        
    
}
  /*  continue here 
export class RerenderProjects {
    constructor() {
        this.projects = allProjects;
    } 
    rerender() {
         
        // Logic to rerender projects
    }
}
*/