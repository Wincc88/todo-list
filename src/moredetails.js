/*import { makeProject, addProjecttoList } from "./makingobject";


export function testing() {
    

    
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
           
       
        
        
        topDiv.addEventListener('click', function(){ 

             const taskInput = document.querySelector('#taskInput');
             
             const titleInput = document.querySelector('#titleInput');
            

                // safe to read .value now
                console.log(taskInput.value);
                console.log(titleInput.value);
                

                    // read DOM values first (no ternary)
                        let title = '';
                        let details = '';

                         if (titleInput) {
                            if (titleInput.value) {
                                title = titleInput.value.trim();
                            }
                         }

                         if (taskInput) {
                            if (taskInput.value) {
                                details = taskInput.value.trim();
                            }
                         }

                        // only proceed when both values exist
                        if (title === '' || details === '') {
                            console.warn('Title or details empty — not adding.');
                            return;
                        }
                        
                        // build project object from the read values and pass to makingobject
                        
                        const project = makeProject();
                         addProjecttoList(project);    // use is to know and count how many projects currently in list
                    

                    const editDelDiv = document.createElement('div');
                    editDelDiv.id = 'editDelDiv';
                    editDelDiv.className = 'editDeleteClass';
                    editDelDiv.style.display = 'flex'; 
                               // editDelDiv.style.display = 'none'; 



                
                               const checkBoxDiv = document.createElement('div');
                                checkBoxDiv.id = "checkedOrNotId";
                                checkBoxDiv.className = "checkedbtnClass";

                                               const checkBtn = document.createElement('input');
                                                checkBtn.type = "checkbox";
                                                checkBtn.id = "checkedOrNot";
                                                checkBtn.className = "checkedbtn";

                               checkBoxDiv.appendChild(checkBtn);

                              const snippetDetails = document.createElement('div');
                                      // input.type = "text";
                               snippetDetails.id = "snippetId";
                               snippetDetails.className = "snippetClass"; 
                                         
                                      const hdivInSnippet = document.createElement('div');
                                      hdivInSnippet.id = "hdivInSnippetId";

                                                const titleInfoEntered = document.createElement('textarea');
                                                titleInfoEntered.id = "titleInfo";
                                                titleInfoEntered.textContent = "Title: " + "\n" + project.title;
                                      hdivInSnippet.appendChild(titleInfoEntered);
                                                        
                                                //alert(taskInput.value + "goooot it");
                                      const paraInSnippet = document.createElement('div');
                                      paraInSnippet.id = "paraInSnippetId";

                                              const detailsInfoEntered = document.createElement('textarea');
                                              detailsInfoEntered.id = "detailsInfo";
                                              detailsInfoEntered.textContent = "Details: " + "\n" + project.details;
                                      paraInSnippet.appendChild(detailsInfoEntered);
                                                        
                                                
                                snippetDetails.appendChild(hdivInSnippet);
                                snippetDetails.appendChild(paraInSnippet);

                                                    

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

                                editDelDiv.appendChild(checkBoxDiv);
                                editDelDiv.appendChild(snippetDetails);
                                editDelDiv.appendChild(editbtnDIv); 

                                
                 Intro.appendChild(editDelDiv);

                 taskInput.value = '';
                 titleInput.value = '';

                
                
                

               
                
               });

} */