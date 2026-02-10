import './styles.css';
import { inimessage } from './pagemessage.js';
import { addTask } from './addtask.js';
import { getfromlocalstorage, makeProject } from './makingobject.js';
//import { addProjecttoList } from './makingobject.js';  no need to start it as it's in effect only when addTask starts
// import { allInsideList } from './makingobject.js';   no need to call an empty list at start
  //import { testing } from './moredetails.js';



console.log(inimessage);



const taskdiv = document.querySelector('#subIntro');

taskdiv.addEventListener('click', () => {
       
       taskdiv.replaceChildren();   
       
       getfromlocalstorage();   // load any saved projects from local storage

       addTask();
});


makeProject();
//addProjecttoList();
// allInsideList();