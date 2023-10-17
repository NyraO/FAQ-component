
class Accordion{
    toggle=false;
        arrow_down(containerId, paraId, arrowId){
        this.toggle=!this.toggle;
        this.toggle?this.show_answer(containerId, paraId ,arrowId):this.hide_answer(arrowId, paraId);
        }
        show_answer(containerId, paraId,arrowId){
            const element=document.getElementById(containerId); 
            const downArrow=document.getElementById(arrowId);
            const para = document.createElement("p");
            para.id='new-paragraph';
            para.style.display="block";
            const node = document.createTextNode("There are no limitations on the number of people to invite.");
            para.appendChild(node);
            element.appendChild(para);
            downArrow.style.transform="rotate(180deg)";

            const activePara=document.getElementById(paraId);
            activePara.style.fontWeight="bold";
            activePara.style.color="hsl(238, 29%, 16%)";
            
        }
        hide_answer(arrowId, paraId){
            const newElement = document.getElementById('new-paragraph');
            newElement.remove();
            const downArrow=document.getElementById(arrowId);
            downArrow.style.transform="rotate(360deg)";

            const activePara=document.getElementById(paraId);
            activePara.style.fontWeight="normal";
            activePara.style.color="hsl(237, 12%, 33%)";

        }
}
 accordion= new Accordion();