
class Accordion{
    toggle=false;
        arrow_down(){
        this.toggle=!this.toggle;
        this.toggle?this.show_answer():this.hide_answer();
        }
        show_answer(){
            const element=document.getElementById("que-container"); 
            const downArrow=document.getElementById("arrow");
            const para = document.createElement("p");
            para.id='new-paragraph';
            para.style.display="block";
            const node = document.createTextNode("There are no limitations on the number of people to invite.");
            para.appendChild(node);
            element.appendChild(para);
            downArrow.style.transform="rotate(180deg)";
        }
        hide_answer(){
            const newElement = document.getElementById('new-paragraph');
            newElement.remove();
            const downArrow=document.getElementById("arrow");
            downArrow.style.transform="rotate(360deg)";
        }
}
 accordion= new Accordion();