export function makeProject(title) {

        const details = "details";
        return { title, details };

}

const allProjects = [];

export function addProject(title) {

    const project = makeProject(title);
    allProjects.push(project);
    return project;
}