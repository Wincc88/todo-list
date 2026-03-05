import { addProjecttoList, allProjects, totalProjectsNum, putinlocalstorage } from "./makingobject";
import { createTaskUI } from "./createuioldnewdata";




export function addTask() {
    
    
    const Intro = document.querySelector('#topIntro');

           //const subIntro = document.querySelector('#subIntro');
          //divInto.remove();
        
        const totalTasksDiv = document.createElement('div');
                totalTasksDiv.id = "totalTasksDivId";
                totalTasksDiv.className = "totalTasksDivClass";
                totalTasksDiv.textContent = totalProjectsNum();
        Intro.appendChild(totalTasksDiv);
                
        

        const progressBarDiv = document.createElement('div');
              progressBarDiv.id = "progressBarDiv";
              
        
                     const progressBar = document.createElement('div');
                     progressBar.id = "progressBar";

        progressBarDiv.appendChild(progressBar);

    Intro.appendChild(progressBarDiv);


    const progressNum = document.createElement('div');
                     progressNum.id = "progressNum";

    Intro.appendChild(progressNum);

   
        const beforeTopDiv = document.createElement('div'); 
        beforeTopDiv.id = 'beforeTopdiv';

                        const inputDetailsDiv = document.createElement('div');
                        inputDetailsDiv.id = 'inputDetailsDiv';
                        

                                const inputDetails = document.createElement('textarea');
                                // input.type = "text";\
                                        inputDetails.className = "detailsClass";
                                        inputDetails.id = "taskInput";
                                        inputDetails.required = true;
                                        inputDetails.placeholder = "Add a new task. \nDrag cursor to expand box."; 
                                

                        inputDetailsDiv.appendChild(inputDetails);
                        
                        
                        const inputTitleDiv = document.createElement('div');
                                inputTitleDiv.id = 'inputTitleDiv';
                        

                                const inputTitle = document.createElement('input');
                                        inputTitle.id = "titleInput";
                                        inputTitle.className = "title";
                                        inputTitle.required = true;
                                        inputTitle.placeholder = "Add a Title"; 
                                    
                        
                        inputTitleDiv.appendChild(inputTitle);

                beforeTopDiv.appendChild(inputDetailsDiv);  
                beforeTopDiv.appendChild(inputTitleDiv);  

                Intro.appendChild(beforeTopDiv);
    
        const topDiv = document.createElement('div');
        topDiv.id = 'topDiv';
        topDiv.textContent = "Add New Task";
        topDiv.type = "submit";
        topDiv.name = "addTaskButton";
        topDiv.value = "Add Task";
        Intro.appendChild(topDiv);
        
        
                        
         topDiv.addEventListener('click', function() { 
                let taskwritten = taskInput.value;
                let titlewritten = titleInput.value;

                if (taskwritten && titlewritten) {
                    addProjecttoList(titlewritten, taskwritten);
                    createTaskUI(titlewritten, taskwritten, Intro, totalTasksDiv, progressBar, progressNum);
                    taskInput.value = '';
                    titleInput.value = '';
                }
                putinlocalstorage();
        });    
       // getfromlocalstorage();    // used in index already, no need to call again here 
         
       //localStorage.clear();

        // Render UI for all existing projects (from localStorage or already in allProjects)
        allProjects.forEach((project) => {
            createTaskUI(project.title, project.details, Intro, totalTasksDiv, progressBar, progressNum, project.complete);
        });
    
        // Update progress display on load based on saved `complete` flags
        const totalOnLoad = allProjects.length;
        const checkedOnLoad = allProjects.filter(p => p.complete).length;

        if (totalOnLoad === 0) {
            progressBar.style.width = '0%';
            progressNum.textContent = '';
        } else if (totalOnLoad === 1) {
            const percent = Math.round((checkedOnLoad / totalOnLoad) * 100);
            progressBar.style.width = percent + '%';
            progressNum.textContent = `Progress: ${checkedOnLoad} out of ${totalOnLoad} task done.`;
        } else {
            const percent = Math.round((checkedOnLoad / totalOnLoad) * 100);
            progressBar.style.width = percent + '%';
            progressNum.textContent = `Progress: ${checkedOnLoad} out of ${totalOnLoad} tasks done.`;
        }  
      


}