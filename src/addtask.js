export function addTask() {
    
    
    const Intro = document.querySelector('#topIntro');
          //const divInto = document.querySelector('#subIntro');
          //divInto.remove();
   
    const beforeTopDiv = document.createElement('div'); 
    beforeTopDiv.id = 'beforeTopdiv';
    beforeTopDiv.ariaPlaceholder = 'befdiv';
    Intro.appendChild(beforeTopDiv);
    
    const topDiv = document.createElement('div');
    topDiv.id = 'topDiv';
    topDiv.textContent = "Add New Task";
    Intro.appendChild(topDiv);

}