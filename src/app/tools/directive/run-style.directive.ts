import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({ selector: '[runStyle]' })
export class RunStyleDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }
    ngOnInit(): void {
        setTimeout(() => { // wait for DOM rendering
            this.reinsertStyle();
        });
    }
    reinsertStyle(): void {
        const scripts = <HTMLStyleElement[]>this.elementRef.nativeElement.getElementsByTagName('style');
        const scriptsInitialLength = scripts.length;
        for (let i = 0; i < scriptsInitialLength; i++) {
            const script = scripts[i];
            const scriptCopy = <HTMLStyleElement>document.createElement('style');
            if (script.innerHTML) {
                scriptCopy.innerHTML = script.innerHTML;
            } 
            script.parentNode?.replaceChild(scriptCopy, script);
        }
    }
}