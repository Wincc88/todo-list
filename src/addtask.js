export function addTask() {
    
    
    const Intro = document.querySelector('#topIntro');
          //const divInto = document.querySelector('#subIntro');
          //divInto.remove();
   
        const beforeTopDiv = document.createElement('div'); 
        beforeTopDiv.id = 'beforeTopdiv';

                        const inputDetailsDiv = document.createElement('div');
                        inputDetailsDiv.id = 'inputDetailsDiv';

                                const inputDetails = document.createElement('textarea');
                                // input.type = "text";
                                        inputDetails.id = "taskInput";
                                        inputDetails.name = "details";
                                        inputDetails.required = true;
                                        inputDetails.placeholder = "Add a new task. \nDrag cursor to expand box."; 

                        inputDetailsDiv.appendChild(inputDetails);
                        
                        const inputTitleDiv = document.createElement('div');
                                inputTitleDiv.id = 'inputTitleDiv';

                                const inputTitle = document.createElement('input');
                                        inputTitle.id = "titleInput";
                                        inputTitle.name = "title";
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

        
        const editDelDiv = document.createElement('div');
        editDelDiv.id = 'editDelDiv';
        editDelDiv.style.display = 'none';
            
                        
                         const editButton = document.createElement('button');
                                editButton.id = "editButton";
                                editButton.name = "edit";
                                editButton.type = "button";
                                editButton.textContent = "Edit";

                        const deleteButton = document.createElement('button');
                                deleteButton.id = "deleteButton";
                                deleteButton.name = "delete";
                                deleteButton.type = "button";
                                deleteButton.textContent = "Delete";

                    editDelDiv.appendChild(editButton);
                    editDelDiv.appendChild(deleteButton);
                        
    
         Intro.appendChild(editDelDiv);

         topDiv.addEventListener('click', function handleClick() {

                /** add logic that if title and details is not empty later */
            if (editDelDiv.style.display === 'none') {
                editDelDiv.style.display = 'flex';
            } else {
                editDelDiv.style.display = 'none';
            }
  });
        

}