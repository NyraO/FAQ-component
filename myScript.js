
class Accordion{
    toggle=false;
        arrow_down(containerId, arrowId){
        this.toggle=!this.toggle;
        this.toggle?this.show_answer(containerId, arrowId):this.hide_answer(arrowId);
        }
        show_answer(containerId, arrowId){
            const element=document.getElementById(containerId); 
            const downArrow=document.getElementById(arrowId);
            const para = document.createElement("p");
            para.id='new-paragraph';
            para.style.display="block";
            const node = document.createTextNode("There are no limitations on the number of people to invite.");
            para.appendChild(node);
            element.appendChild(para);
            downArrow.style.transform="rotate(180deg)";
        }
        hide_answer(arrowId){
            const newElement = document.getElementById('new-paragraph');
            newElement.remove();
            const downArrow=document.getElementById(arrowId);
            downArrow.style.transform="rotate(360deg)";
        }
}
 accordion= new Accordion();