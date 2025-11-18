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

        const taskInput = document.querySelector('#taskInput');
        const titleInput = document.querySelector('#titleInput');

        
        const editDelDiv = document.createElement('div');
        editDelDiv.id = 'editDelDiv';
        editDelDiv.className = 'editDeleteClass';
        editDelDiv.style.display = 'none';
                       

                         const checkBoxAll = document.createElement('div');
                                checkBoxAll.id = "checkedOrNotId";
                                checkBoxAll.className = "checkedbtnClass";

                                               const checkBoxinDiv = document.createElement('input');
                                                checkBoxinDiv.type = "checkbox";
                                                checkBoxinDiv.id = "checkedOrNot";
                                                checkBoxinDiv.className = "checkedbtn";

                        checkBoxAll.appendChild(checkBoxinDiv);

                        const snippetDetails = document.createElement('div');
                                // input.type = "text";
                                        snippetDetails.id = "snippetId";
                                        snippetDetails.className = "snippetClass";
                        
                        const editbtnDIv = document.createElement('div');
                                editbtnDIv.id = "editDelIdToAdd";
                                editbtnDIv.className = "editDelDivtoAdd";

                                               const editButton = document.createElement('button');
                                                editButton.id = "editButton";
                                                editButton.className = "editbtn";
                                                editButton.type = "button";
                                                editButton.textContent = "Edit";

                        editbtnDIv.appendChild(editButton);

                                                const deleteButton = document.createElement('button');
                                                deleteButton.id = "deleteButton";
                                                deleteButton.className = "deletebtn";
                                                deleteButton.type = "button";
                                                deleteButton.textContent = "Delete";

                        editbtnDIv.appendChild(deleteButton);

                    editDelDiv.appendChild(checkBoxAll);
                    editDelDiv.appendChild(snippetDetails);
                    editDelDiv.appendChild(editbtnDIv);
                   
                         // editDelDiv.appendChild(editButton);
                          // editDelDiv.appendChild(deleteButton);
       
                checkBoxinDiv.addEventListener('change', function() {

                    const checkedboxid = document.querySelectorAll('#checkedOrNot');
                    const total = checkedboxid.length;
                           //console.log(total);
                    const isChecked = document.querySelectorAll('#checkedOrNot:checked');
                           //console.log(isChecked);
                    const allChecked = isChecked.length;
                            //console.log(allChecked);
                    let progressPercent = 0;
                            //console.log(progressPercent); 
                    const progressText = document.querySelector('#progressNum');
                    
                    
                    
                              // if (checkBoxinDiv.checked && taskInput.value !== '' && titleInput.value !== '') {
                              // use to update progress bar 

                    if (checkBoxinDiv.checked && taskInput.value !== '' && titleInput.value !== '') {
                                  // console.log('Checkbox is checked'); 
                                 //console.log(checkBoxAll.id);
                                   // alert(titleInput.value + " : Task Added!");

                                    const hdivInSnippet = document.createElement('div');
                                          hdivInSnippet.id = "hdivInSnippetId";

                                                const titleInfoEntered = document.createElement('textarea');
                                                titleInfoEntered.id = "titleInfo";
                                                        titleInfoEntered.textContent = "Title: " + "\n" + titleInput.value;
                                                hdivInSnippet.appendChild(titleInfoEntered);
                                                        
                                                //alert(taskInput.value + "goooot it");
                                     const paraInSnippet = document.createElement('div');
                                             paraInSnippet.id = "paraInSnippetId";

                                                const detailsInfoEntered = document.createElement('textarea');
                                                detailsInfoEntered.id = "detailsInfo";
                                                        detailsInfoEntered.textContent = "Details: " + "\n" + taskInput.value;
                                                paraInSnippet.appendChild(detailsInfoEntered);
                                                        
                                                
                                                snippetDetails.appendChild(hdivInSnippet);
                                                snippetDetails.appendChild(paraInSnippet);
                                 

                        progressPercent = Math.round((allChecked / total) * 100);
                        console.log(progressPercent);
                        progressBar.style.width = progressPercent + '%';

                        progressText.textContent = "Progress: " +  allChecked + " out of " + total + " tasks done."      ;

                        taskInput.value = '';
                        titleInput.value = '';

                
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