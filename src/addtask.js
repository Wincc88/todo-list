import { makeProject, addProjecttoList,  allInsideList, allProjects, totalProjectsNum, putinlocalstorage, getfromlocalstorage } from "./makingobject";

export function addTask() {
    
    
    
    const Intro = document.querySelector('#topIntro');

           //const subIntro = document.querySelector('#subIntro');
          //divInto.remove();
        
        const totalTasksDiv = document.createElement('div');
                totalTasksDiv.id = "totalTasksDivId";
                totalTasksDiv.className = "totalTasksDivClass";
                totalTasksDiv.textContent = allProjects.length + " Total Task"
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
                                

                         addProjecttoList(titlewritten, taskwritten );

                           //project is made and in list with value given
                        
                        
                            
                const editDelDiv = document.createElement('div');
                editDelDiv.id = 'editDelDiv';
                editDelDiv.className = 'editDeleteClass';
                
                             //editDelDiv.style.display = 'none';

                         // create div besiide checkBoxDiv that displays time and date(madedate)
                         const madeDateDiv = document.createElement('div');
                         madeDateDiv.id = "madeDateId";
                         madeDateDiv.className = "madeDateClass";
                                const madepara = document.createElement('p');
                                const paradate = document.createElement('p');
                                

                                madepara.textContent = "Created on: ";
                                madeDateDiv.appendChild(madepara);
                                                                       
                                // .madedate.tolocalString() if seconds needed or toDateString() if no time needed;
                                paradate.textContent = allProjects[allProjects.length -1].madedate;
                                madeDateDiv.appendChild(paradate);
                         

                         
 
                        

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
                                                titleInfoEntered.textContent = "Title: " + "\n" + titlewritten;
                                      hdivInSnippet.appendChild(titleInfoEntered);
                                                        
                                                //alert(taskInput.value + "goooot it");
                                               const paraInSnippet = document.createElement('div');
                                               paraInSnippet.id = "paraInSnippetId";

                                              const detailsInfoEntered = document.createElement('textarea');
                                              detailsInfoEntered.id = "detailsInfo";
                                              detailsInfoEntered.textContent = "Details: " + "\n" + taskwritten;
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

                    editDelDiv.appendChild(madeDateDiv);
                    editDelDiv.appendChild(checkBoxDiv);
                    editDelDiv.appendChild(snippetDetails);
                    editDelDiv.appendChild(editbtnDIv); 

   
                                
                Intro.appendChild(editDelDiv);
                


                 taskInput.value = '';
                 titleInput.value = ''; 

                 

                          // now do for edit button
                        editButton.addEventListener('click', function() { 
                              

                                // put in parent div editedTitle and editedDetails 
                                const parentDiv = document.createElement("div");
                                parentDiv.id = "parentDivId";
                                parentDiv.className = "parentDivClass"; 
                                                
                                                // bring up div to edit title and details  
                                                const headingandInput = document.createElement("div");
                                                headingandInput.id = "headingandInputId";
                                                headingandInput.className = "headingandInputClass"; 

                                                                const titleHeading = document.createElement("h3");
                                                                titleHeading.id = "titleHeadingId";
                                                                titleHeading.className = "titleHeadingClass";
                                                                titleHeading.textContent = "Edit Task Title:";
                                                                headingandInput.appendChild(titleHeading);

                                                                const editedTitle = document.createElement("input");
                                                                editedTitle.id = "editedTitleId";
                                                                editedTitle.className = "editedTitleClass"; 
                                                                headingandInput.appendChild(editedTitle);
                                                        
                                                const detailsheadingandTextarea = document.createElement("div");
                                                detailsheadingandTextarea.id = "detailsheadingandTextareaId";
                                                detailsheadingandTextarea.className = "detailsheadingandTextareaClass";                
                                                
                                                                const detailsHeading = document.createElement("h3");
                                                                detailsHeading.id = "detailsHeadingId";
                                                                detailsHeading.className = "detailsHeadingClass";
                                                                detailsHeading.textContent = "Edit Task Details:";
                                                                detailsheadingandTextarea.appendChild(detailsHeading);

                                                                const editedDetails = document.createElement("textarea");
                                                                editedDetails.id = "editedDetailsId";
                                                                editedDetails.className = "editedDetailsClass";
                                                                detailsheadingandTextarea.appendChild(editedDetails);
                                                        
                                         
                                                
                                           
                                         const okcancelDiv = document.createElement("div");
                                         okcancelDiv.id = "okcancelDivId";
                                         okcancelDiv.className = "okcancelDivClass";

                                                const okbtn = document.createElement("button");
                                                okbtn.id = "okbtnId";
                                                okbtn.className = "okbtnClass";
                                                okbtn.textContent = "OK";
                                                okcancelDiv.appendChild(okbtn);

                                                const cancelbtn = document.createElement("button");
                                                cancelbtn.id = "cancelbtnId";
                                                cancelbtn.className = "cancelbtnClass";
                                                cancelbtn.textContent = "Cancel";
                                                okcancelDiv.appendChild(cancelbtn);

                                parentDiv.appendChild(headingandInput);
                                parentDiv.appendChild(detailsheadingandTextarea);
                                parentDiv.appendChild(okcancelDiv);

                        Intro.appendChild(parentDiv);

                               editedDetails.value = taskwritten;
                               editedTitle.value = titlewritten;   


                                   
                                 // edit values and update on ok button click
                                 okbtn.addEventListener('click', function() {  

                                      
                                       let newTitleValue = editedTitle.value.trim();
                                       let newDetailsValue = editedDetails.value.trim();    
                                      

                                      // i validated the edited values here so as not to have an empty title or details      
                                       if(newTitleValue === '' || newDetailsValue === undefined || newDetailsValue === '' || newTitleValue === undefined) {
                                        alert('Both Title and Details must be filled out to edit the task.');
                                        return; // exit the function if validation fails
                                       }
                                         
                                        titleInfoEntered.textContent = "Title: " + "\n" + newTitleValue;
                                        detailsInfoEntered.textContent = "Details: " + "\n" + newDetailsValue;

                                        // now update in allProjects array too
                                        const projectToEdit = allProjects.find(project => project.title === titlewritten && project.details === taskwritten);   
                                        if (projectToEdit) {
                                            projectToEdit.title = newTitleValue;
                                            projectToEdit.details = newDetailsValue;

                                        } 
                                         // i needed to update titlewritten and taskwritten to the latest edited values
                                        titlewritten = newTitleValue;
                                        taskwritten = newDetailsValue;   
                                
                                        
                                        console.log('Project edited:', projectToEdit);
                                        // remove the edit div after ok clicked 
                                        
                                        parentDiv.remove();
                                        // call updated list
                                         allInsideList();
                                         console.log(allProjects.length + " tasks in total now.");
                                          

                                        
                              
                                   
                                 });

                                 // cancel button to just remove edit div
                                 cancelbtn.addEventListener('click', function() {
                                      parentDiv.remove();                                               
                                       // allInsideList();
                                 });    
                                  
   
                                
                        });


                                // now do for delete button
                        deleteButton.addEventListener('click', function() { 
                     

                         // i use finfdIndex to find and delete both updated and edited from allProjects array 
                        
                        const indexToDelete = allProjects.findIndex(project => project.title === titlewritten && project.details === taskwritten);
                        if (indexToDelete !== -1) {
                                allProjects.splice(indexToDelete, 1);              
                        }     

                        // now I check the project deleted
                        console.log('Project deleted:', titlewritten, taskwritten);

                      
                        
                        const indexToDeleteUpdated = allProjects.findIndex(project => project.title === titleInfoEntered.textContent && project.details === detailsInfoEntered.textContent); 
                        if (indexToDeleteUpdated !== -1) {
                                   allProjects.splice(indexToDeleteUpdated, 1);
                        } 
                         
                        // now I check the project deleted after every edit
                        console.log('Project deleted after edit:', titleInfoEntered.textContent, detailsInfoEntered.textContent);

                         // remove div from DOM    
                        editDelDiv.remove();
                         
                         // my updated list is called constantly with allInsideList() with add, edit, delete;
                       allInsideList();
                       
                       totalTasksDiv.textContent = totalProjectsNum();
                     

                        });      


                        checkBtn.addEventListener('change', function() {

                               // const allCheckboxes = document.querySelectorAll('.checkedbtn');         
                                const checkedCheckboxes = document.querySelectorAll('.checkedbtn:checked');
                                const total = allProjects.length;
                                // console.log(total);
                                const checked = checkedCheckboxes.length;
                                //console.log(checked); 

                                                if (total === 0) {
                                                        progressBar.style.width = '0%';
                                                        progressNum.textContent = '';
                                                        
                                                } 
                                                else if (total === 1) {
                                                        const percent = Math.round((checked / total) * 100);
                                                        progressBar.style.width = percent + '%';
                                                        progressNum.textContent = `Progress: ${checked} out of ${total} task done.`;
                                                }
                                                
                                                else {
                                                const percent = Math.round((checked / total) * 100);
                                                progressBar.style.width = percent + '%';
                                                progressNum.textContent = `Progress: ${checked} out of ${total} tasks done.`;
                                                }

                        });
                 
                  totalTasksDiv.textContent = totalProjectsNum(); 
                 
                                
                } 
                putinlocalstorage();
                

                
        });    
       // getfromlocalstorage();    // used in index already, no need to call again here 
         
       //localStorage.clear();

       const makediv = document.createElement('div');
       makediv.id = "makedivId";
       makediv.className = "makedivClass";
       makediv.style.marginTop = "2px";
       makediv.style.marginBottom = "10px";
       makediv.style.fontSize = "14px";
       makediv.style.color = "gray";
       makediv.style.border = "2px solid blue";
       makediv.style.height = "60px";

       makediv.textContent = JSON.stringify(allProjects);
        Intro.appendChild(makediv); 

        
           
        
        
                

                

         
         
        


}