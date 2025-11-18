import './styles.css';
import { inimessage } from './pagemessage.js';
import { addTask } from './addtask.js';
import { addProject } from '.makeobject.js';
import { makeProject } from '.makeobject.js';

console.log(inimessage);



const taskdiv = document.querySelector('#subIntro');

taskdiv.addEventListener('click', () => {
       
       taskdiv.replaceChildren();     

       addTask();
});

addProject("New Project");
makeProject("Sample Project"); 
