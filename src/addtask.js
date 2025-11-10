export function addTask() {
    
    
    const Intro = document.querySelector('#topIntro');
          //const divInto = document.querySelector('#subIntro');
          //divInto.remove();
   
        const beforeTopDiv = document.createElement('div'); 
        beforeTopDiv.id = 'beforeTopdiv';

                const inputDetails = document.createElement('input');
                    // input.type = "text";
                        inputDetails.id = "taskInput";
                        inputDetails.name = "details";
                        inputDetails.required = true;
                        inputDetails.placeholder = "Add a new task"; 
                
                const inputTitle = document.createElement('input');
                        inputTitle.id = "titleInput";
                        inputTitle.name = "title";
                        inputTitle.required = true;
                        inputTitle.placeholder = "Add a Title"; 

                beforeTopDiv.appendChild(inputDetails);  
                beforeTopDiv.appendChild(inputTitle);                                 
                Intro.appendChild(beforeTopDiv);
    
        const topDiv = document.createElement('div');
        topDiv.id = 'topDiv';
        topDiv.textContent = "Add New Task";
        topDiv.type = "submit";
        topDiv.name = "addTaskButton";
        topDiv.value = "Add Task";
        Intro.appendChild(topDiv);

}