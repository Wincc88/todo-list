 

export function makeProject() {

   let details = document.querySelector('#taskInput');
   let title = document.querySelector('#titleInput');

     // title = title.value;
     // details = details.value;
     
     if (title) {
        if (title.value) {
            title = title.value.trim();
        }
    }

    if (details) {
        if (details.value) {
            details = details.value.trim();
        }
    }

    // if both empty, return null to avoid creating invalid objects
    if (!title && !details) {
        return null;
    }
     
     
     // console.log({ title, details })

    return { title, details };

}

const allProjects = [];
console.log(allProjects);

 //allProjects = allProjects.push(makeProject());
// console.log(allProjects);




export function addProjecttoList() {
    
    let newProject;

    if (!newProject) {
        newProject = makeProject();
    }

    // const newProject = makeProject();

     if (!newProject) {
        console.warn('addProjecttoList: no project to add (inputs missing or empty).');
        return null;
    }
    

    allProjects.push(newProject);
    // console.log(newProject);    // it makes new and put in list
    console.log(allProjects);

    // return allProject;
}

export function remFromlist () {
        allProjects.pop();
        console.log(allProjects);
    }
    

export function allInsideList () {
    console.log(allProjects.slice());
    return allProjects.slice();   
}

