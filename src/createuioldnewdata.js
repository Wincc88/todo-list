import { allInsideList, allProjects, totalProjectsNum, putinlocalstorage } from "./makingobject";

// task ui creation with existing data(object) from getfromlocalstorage -- helper function
// moved all here from addTask for better clarity
export function createTaskUI(titlewritten, taskwritten, Intro, totalTasksDiv, progressBar, progressNum, complete = false) {
    // Generate unique ID for this task's elements
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    
    const editDelDiv = document.createElement('div');
    editDelDiv.id = 'editDelDiv';
    editDelDiv.className = 'editDeleteClass';
    
    const madeDateDiv = document.createElement('div');
    madeDateDiv.id = "madeDateId";
    madeDateDiv.className = "madeDateClass";
    const madepara = document.createElement('p');
    const paradate = document.createElement('p');
    
    madepara.textContent = "Created on: ";
    madeDateDiv.appendChild(madepara);
    // try to find the matching project to get its saved madedate; prefer a preformatted string
    const projectForDate = allProjects.find(p => p.title === titlewritten && p.details === taskwritten);
    let dateText = '';
    if (projectForDate) {
        if (projectForDate.madedateFormatted) {
            dateText = projectForDate.madedateFormatted;
        } else if (projectForDate.madedate) {
            const dateObj = projectForDate.madedate instanceof Date ? projectForDate.madedate : new Date(projectForDate.madedate);
            if (!isNaN(dateObj)) {
                dateText = dateObj.toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
            }
        }
    }
    paradate.textContent = dateText;
    madeDateDiv.appendChild(paradate);

    const checkBoxDiv = document.createElement('div');
    checkBoxDiv.id = `checkedOrNotId-${uniqueId}`;
    checkBoxDiv.className = "checkedbtnClass";

    const checkBtn = document.createElement('input');
    checkBtn.type = "checkbox";
    checkBtn.id = `checkedOrNot-${uniqueId}`;
    checkBtn.className = "checkedbtn";
    // set checkbox state from project data when provided
    checkBtn.checked = !!complete;
    checkBoxDiv.appendChild(checkBtn);

    const snippetDetails = document.createElement('div');
    snippetDetails.id = "snippetId";
    snippetDetails.className = "snippetClass"; 
    
    const hdivInSnippet = document.createElement('div');
    hdivInSnippet.id = "hdivInSnippetId";

    const titleInfoEntered = document.createElement('textarea');
    titleInfoEntered.id = `titleInfo-${uniqueId}`;
    titleInfoEntered.className = "titleInfoClass";
    titleInfoEntered.textContent = "Title: " + "\n" + titlewritten;
    hdivInSnippet.appendChild(titleInfoEntered);

    const paraInSnippet = document.createElement('div');
    paraInSnippet.id = "paraInSnippetId";

    const detailsInfoEntered = document.createElement('textarea');
    detailsInfoEntered.id = `detailsInfo-${uniqueId}`;
    detailsInfoEntered.className = "detailsInfoClass";
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

    // Edit Button Event Listener
    editButton.addEventListener('click', function() { 
        const parentDiv = document.createElement("div");
        parentDiv.id = "parentDivId";
        parentDiv.className = "parentDivClass"; 
        
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

        // OK button listener
        okbtn.addEventListener('click', function() {  
            let newTitleValue = editedTitle.value.trim();
            let newDetailsValue = editedDetails.value.trim();    
            
            if(newTitleValue === '' || newDetailsValue === undefined || newDetailsValue === '' || newTitleValue === undefined) {
                alert('Both Title and Details must be filled out to edit the task.');
                return;
            }
            
            titleInfoEntered.textContent = "Title: " + "\n" + newTitleValue;
            detailsInfoEntered.textContent = "Details: " + "\n" + newDetailsValue;

            const projectToEdit = allProjects.find(project => project.title === titlewritten && project.details === taskwritten);   
            if (projectToEdit) {
                projectToEdit.title = newTitleValue;
                projectToEdit.details = newDetailsValue;
            } 
            titlewritten = newTitleValue;
            taskwritten = newDetailsValue;   

            console.log('Project edited:', projectToEdit);
            parentDiv.remove();
            allInsideList();
            console.log(allProjects.length + " tasks in total now.");
        });

        // Cancel button listener
        cancelbtn.addEventListener('click', function() {
            parentDiv.remove();                                               
        });    
    });

    // Delete Button Event Listener
    deleteButton.addEventListener('click', function() { 
        const indexToDelete = allProjects.findIndex(project => project.title === titlewritten && project.details === taskwritten);
        if (indexToDelete !== -1) {
            allProjects.splice(indexToDelete, 1);              
        }     

        console.log('Project deleted:', titlewritten, taskwritten);

        const indexToDeleteUpdated = allProjects.findIndex(project => project.title === titleInfoEntered.textContent && project.details === detailsInfoEntered.textContent); 
        if (indexToDeleteUpdated !== -1) {
            allProjects.splice(indexToDeleteUpdated, 1);
        } 

        editDelDiv.remove();
        allInsideList();
        putinlocalstorage();   // updates when deleted
        totalTasksDiv.textContent = totalProjectsNum();
    });      
     
    // Checkbox Change Event Listener
    checkBtn.addEventListener('change', function() {
        const checkedCheckboxes = document.querySelectorAll('.checkedbtn:checked');
        const total = allProjects.length;  // can use totalProjectsNum() too
        const checked = checkedCheckboxes.length;

        if(checkBtn.checked) {
            complete = true;
            //console.log('Task marked as complete:', complete, titlewritten, taskwritten);
        }
        else {
            complete = false;
           // console.log('Task marked as incomplete:', complete, titlewritten, taskwritten);
        }
        // update corresponding project object so saved state persists
        const projectToEdit = allProjects.find(project => project.title === titlewritten && project.details === taskwritten);
        if (projectToEdit) projectToEdit.complete = checkBtn.checked;

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
        putinlocalstorage();   // updates when checked
    });

    totalTasksDiv.textContent = totalProjectsNum();
}
