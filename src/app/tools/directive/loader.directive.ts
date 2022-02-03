import { Directive, ElementRef, HostListener, SimpleChange } from "@angular/core";

@Directive({
    selector: "[loader]",
    inputs: ["switch", "hasBackDrop", "backDropColor", "spinnerColors", "hasZIndex", "classLoader"]
})
export class LoaderDirective {
    public host: HTMLElement;
    public switch: boolean = false;
    public hasBackDrop: boolean = true;
    public backDropColor: string = "";
    public classLoader: string = "";
    public hasZIndex: boolean = true;
    public spinnerColors: spinnerColor = { colorA: "#3498db", colorB: "#dbf5ff" };

    constructor(private element: ElementRef) {
        this.host = element.nativeElement;
    }

    ngOnChanges(changes: SimpleChange): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (this.switch) {
            this.makeLoader();
        } else {
            this.destroyLoader();
        }
    }

    private makeLoader() {        

        let alto = this.element.nativeElement.scrollHeight;  
        
        let backdrop = "<div class=\"cdk-overlay-backdrop";
        if (this.hasBackDrop) {            
            backdrop += " cdk-overlay-dark-backdrop "
        }
        backdrop += "cdk-overlay-backdrop-showing ";
        backdrop += this.classLoader + "\"";

        if (this.backDropColor != "" && this.hasBackDrop) {
            backdrop += " Style=\"background-color:" + this.backDropColor + "; opacity:0.288;";
        }

        
        if (!this.hasZIndex) {
            backdrop += backdrop.includes("Style") ? "z-index: 0;" : " Style=\"z-index: 0;";
        }else {
            backdrop += backdrop.includes("Style") ? "min-height: "+(alto+260)+"px;" : " Style=\"min-height: "+(alto+260)+"px;"; 
        }
        backdrop += backdrop.includes("Style") 
                    ? "backdrop-filter: blur(0.05rem); -webkit-backdrop-filter: blur(0.05rem); -moz-backdrop-filter: blur(4px); -o-backdrop-filter: blur(0.05rem); -ms-backdrop-filter: blur(0.05rem);\"" 
                    : " Style=\"backdrop-filter: blur(0.05rem); -webkit-backdrop-filter: blur(0.05rem); -moz-backdrop-filter: blur(4px); -o-backdrop-filter: blur(0.05rem); -ms-backdrop-filter: blur(0.05rem);\"";
        backdrop += "</div>";
        //backdrop += "\"></div>";
        let wrapperloader ="";
        if(!this.hasZIndex){
           wrapperloader = "<div class=\"cdk-global-overlay-wrapper\" dir=\"ltr\" style=\"justify-content: center; align-items: center; " + (!this.hasZIndex ? "z-index: 0;" : "") + " \"><div id=\"cdk-overlay-0\" class=\"cdk-overlay-pane\" style=\"max-width: 80vw; pointer-events: auto; width: 250px; position: static;\"><div tabindex=\"0\" class=\"cdk-visually-hidden cdk-focus-trap-anchor\"></div><div style=\"position:absolute; width:50px; height:40px; top:calc(50% - 25px); left:calc(50% - 25px);\"><div id=\"loader\" style=\"border:8px solid " + this.spinnerColors.colorB + "; border-radius:50%; border-top:8px solid " + this.spinnerColors.colorA + "; width:50px; height:50px; -webkit-animation:spin 1s linear infinite; animation: spin 1s linear infinite; \"></div></div></div></div>";
        }else{
            wrapperloader = "<div class=\"cdk-global-overlay-wrapper\" dir=\"ltr\" style=\"justify-content: center; align-items: center; " + (!this.hasZIndex ? "z-index: 0;" : "") + " \"><div id=\"cdk-overlay-0\" class=\"cdk-overlay-pane\" style=\"max-width: 80vw; pointer-events: auto; width: 250px; position: static;\"><div tabindex=\"0\" class=\"cdk-visually-hidden cdk-focus-trap-anchor\"></div><div style=\"position:absolute; width:50px; height:40px; top:calc(50% - 25px); left:calc(50% - 25px);\"><div id=\"loader\" style=\"border:8px solid " + this.spinnerColors.colorB + "; border-radius:50%; border-top:8px solid " + this.spinnerColors.colorA + "; width:50px; height:50px; -webkit-animation:spin 1s linear infinite; animation: spin 1s linear infinite; position: fixed; \"></div></div></div></div>";
        }
        this.host.insertAdjacentHTML('beforeend', backdrop);
        this.host.insertAdjacentHTML('beforeend', wrapperloader);
    }

    private destroyLoader() {
        if (this.host.querySelector('#loader') != null) {
            if (this.host.lastChild) {
                this.host.removeChild(this.host.lastChild);
            }
            if (this.host.lastChild) {
                this.host.removeChild(this.host.lastChild);
            }

        }
    }
}

interface spinnerColor {
    colorA: string,
    colorB: string
}