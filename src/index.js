import './styles.css';
import { inimessage } from './pagemessage.js';
import { addTask } from './addtask.js';
import { makeProject } from './makingobject.js';
import { addProject } from './makingobject.js';



console.log(inimessage);



const taskdiv = document.querySelector('#subIntro');

taskdiv.addEventListener('click', () => {
       
       taskdiv.replaceChildren();     

       addTask();
});


makeProject('Default Project');
addProject('Default Project');