export function addTask() {
    
    
    const Intro = document.querySelector('#topIntro');
          //const divInto = document.querySelector('#subIntro');
          //divInto.remove();

        const progressBarDiv = document.createElement('div');
              progressBarDiv.id = "progressBarDiv";
              
        
                     const progressBar = document.createElement('div');
                     progressBar.id = "progressBar";
        progressBarDiv.appendChild(progressBar);

                     
    Intro.appendChild(progressBarDiv);
   
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

        const taskInput = document.querySelector('#taskInput');
        const titleInput = document.querySelector('#titleInput');

        
        const editDelDiv = document.createElement('div');
        editDelDiv.id = 'editDelDiv';
        editDelDiv.className = 'editDeleteClass';
        editDelDiv.style.display = 'none';
                       
                         const checkBoxAll = document.createElement('input');
                                checkBoxAll.type = "checkbox";
                                checkBoxAll.id = "checkedOrNot";
                                checkBoxAll.name = "checkedbtn";

                        const detailTitles = document.createElement('textarea');
                                // input.type = "text";
                                        inputDetails.id = "detailsCollected";
                                        inputDetails.name = "details";
                        
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

                    editDelDiv.appendChild(checkBoxAll);
                    editDelDiv.appendChild(detailTitles);
                    editDelDiv.appendChild(editButton);
                    editDelDiv.appendChild(deleteButton);
       
                checkBoxAll.addEventListener('change', function() {

                    const checkedboxid = document.querySelectorAll('#checkedOrNot');
                    const total = checkedboxid.length;
                           //console.log(total);
                    const isChecked = document.querySelectorAll('#checkedOrNot:checked');
                           //console.log(isChecked);
                    const allChecked = isChecked.length;
                            //console.log(allChecked);
                    let progressPercent = 0;
                            //console.log(progressPercent);
                    
                    
                    
                    if (checkBoxAll.checked && taskInput.value !== '' && titleInput.value !== '') {
                                //console.log('Checkbox is checked'); 
                                 //console.log(checkBoxAll.id);

                        progressPercent = Math.round((allChecked / total) * 100);
                              //console.log(progressPercent);
                        progressBar.style.width = progressPercent + '%';
                    
                    } 
                    
                    else { 
                                  //console.log('Checkbox is unchecked');
                        progressBar.style.width = Math.round((allChecked / total) * 100);
                                 //console.log(progressPercent);
                        progressBar.style.width = progressPercent + '%';
                    }
                    
                });
                  

    
         Intro.appendChild(editDelDiv);

         topDiv.addEventListener('click', function handleClick() {

                /** add logic that if title and details is not empty later */
            if (editDelDiv.style.display === 'none') {
                editDelDiv.style.display = 'flex';
            } else {
                editDelDiv.style.display = 'none';
            }
         });


         /** add event listeners for checkbox clicked for progress bar later */
        

}