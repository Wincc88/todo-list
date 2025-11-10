import './styles.css';
import { inimessage } from './pagemessage.js';
import { addTask } from './addtask.js';

console.log(inimessage);



const taskdiv = document.querySelector('#subIntro');

taskdiv.addEventListener('click', () => {
       
       taskdiv.replaceChildren();     

       addTask();
});
