import './styles.css';
import { inimessage } from './pagemessage.js';
import { addTask } from './addtask.js';
import { makeProject } from './makingobject.js';
import { addProjecttoList } from './makingobject.js';
import { allInsideList } from './makingobject.js';
  //import { testing } from './moredetails.js';



console.log(inimessage);



const taskdiv = document.querySelector('#subIntro');

taskdiv.addEventListener('click', () => {
       
       taskdiv.replaceChildren();     

       addTask();
});


makeProject();
addProjecttoList();
allInsideList();