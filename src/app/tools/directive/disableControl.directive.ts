import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[disableControl]'
})
export class DisableControlDirective {

    @Input() set disableControl(condition: boolean) {
        if (condition) {
            this.ngControl?.control?.disable();
        } else {
            this.ngControl?.control?.enable();
        }
    }

    constructor(private ngControl: NgControl) {
    }
}