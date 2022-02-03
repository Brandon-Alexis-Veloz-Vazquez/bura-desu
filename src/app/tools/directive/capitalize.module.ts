import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[Capitalize]'
})
export class CapitalizeDirective {
    @Input() allUpperCase: boolean = false;

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event']) onInputChange($event: any) {
        if(this.allUpperCase){
            this.el.nativeElement.value = this.upperCaseTxt(this.el.nativeElement.value);
        } else {
            this.el.nativeElement.value = this.txtFilter(this.el.nativeElement.value);
        }
    }

    txtFilter(txt: string): string {
        txt = txt.toLowerCase().trim();
        let txtArray: string[] = txt.split(' ');
        let newArray: string[] = [];

        let newTxt: string = "";
        txtArray.forEach((element: any) => {
            if (element != "de" && element != "del" && element != "la" && element != "las" && element != "los") {
                newTxt = element.charAt(0).toUpperCase() + element.substr(1);
            } else {
                newTxt = element;
            }
            newArray.push(newTxt);
        });

        let finalTxt = newArray.join(' ');

        return finalTxt;
    }

    upperCaseTxt(txt: string): string {
        return txt.toUpperCase().trim();
    }
}

