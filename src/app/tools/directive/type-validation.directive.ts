import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input, Output, EventEmitter } from "@angular/core";
@Directive({
    selector: '[TypeValidation]'
})
export class TypeValidation implements OnInit {
    @Input() TypeValidation: String = "";
    @Input() maxlength: any;
    @Input() negative: boolean = true;
    @Input() textAlign: boolean = true;
    debug: boolean = false;
    @Output() pressEnter = new EventEmitter();
    private InputText: string = "";
    public findValue: any;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
    }


    @HostListener('focus', ['$event']) onfocus(event: any) {
        if (this.TypeValidation) {
            if (this.textAlign && (this.TypeValidation.toLowerCase() == 'number' || this.TypeValidation.toLowerCase() == 'decimal')) {
                this.el.nativeElement.style.textAlign = "left";
                event.target.select();
            }
        }
    }

    @HostListener('keydown', ['$event']) onKeyDown(event: any) {
        if (this.TypeValidation) {
            let e = <KeyboardEvent>event;
            switch (this.TypeValidation.toLowerCase()) {
                case 'number':                    
                    //this.log("TypeValidation.number.keydown()", event);
                    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                        // Allow: Ctrl+A
                        (e.keyCode == 65 && e.ctrlKey === true) ||
                        // Allow: Ctrl+C
                        (e.keyCode == 67 && e.ctrlKey === true) ||
                        // Allow: Ctrl+X
                        (e.keyCode == 88 && e.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (e.keyCode >= 35 && e.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    //Guion Medio(-)
                    var valor = event.target.value;
                    if (this.negative && valor.length == 0 && (e.keyCode == 189 || e.keyCode == 109)) {
                        return;
                    }
                    //No permite el (.)
                    if (e.keyCode == 110 || e.keyCode == 190) {
                        e.preventDefault();
                    }
                    //No permite el (_)
                    if (e.keyCode == 189) {
                        e.preventDefault();
                    }
                    // Ensure that it is a number and stop the keypress
                    if (this.maxlength) {
                        if ((event.target.value.length + 1) > this.maxlength) {
                            e.preventDefault();
                        }
                    }
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        e.preventDefault();
                    }
                    break;
                case 'decimal':
                    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                        // Allow: Ctrl+A
                        (e.keyCode == 65 && e.ctrlKey === true) ||
                        // Allow: Ctrl+C
                        (e.keyCode == 67 && e.ctrlKey === true) ||
                        // Allow: Ctrl+X
                        (e.keyCode == 88 && e.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (e.keyCode >= 35 && e.keyCode <= 39)) {
                        // let it happen, don't do anything
                        return;
                    }
                    //Guion Medio(-)
                    var valor = event.target.value;
                    if (valor.length == 0 && (e.keyCode == 189 || e.keyCode == 109)) {
                        return;
                    }
                    //No permite el (.)
                    var valor = event.target.value.indexOf(".");
                    if (valor == -1 && (e.keyCode == 110 || e.keyCode == 190)) {
                        return;
                    }
                    //No permite el (_)
                    if (e.keyCode == 189) {
                        e.preventDefault();
                    }
                    // Ensure that it is a number and stop the keypress
                    if (this.maxlength) {
                        if ((event.target.value.length + 1) > this.maxlength) {
                            e.preventDefault();
                        }
                    }
                    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                        e.preventDefault();
                    }
                    break;

                case 'text':
                    //this.log("TypeValidation.number.keydown()", event);
                    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                        // Allow: Ctrl+A
                        (e.keyCode == 65 && e.ctrlKey === true) ||
                        // Allow: Ctrl+C
                        (e.keyCode == 67 && e.ctrlKey === true) ||
                        // Allow: Ctrl+X
                        (e.keyCode == 88 && e.ctrlKey === true) ||
                        // Allow: home, end, left, right
                        (e.keyCode >= 35 && e.keyCode <= 39)) {
                            
                        // let it happen, don't do anything
                        return;
                    }
                    //Guion Medio(-)
                    var valor = event.target.value;
                    if (valor.length == 0 && (e.keyCode == 189 || e.keyCode == 109)) {
                        return;
                    }
                    //No permite el (.)
                    if (e.keyCode == 110 || e.keyCode == 190) {
                        e.preventDefault();
                    }
                    //No permite el (_)
                    if (e.keyCode == 189) {
                        e.preventDefault();
                    }
 
                    if ( (e.keyCode < 65 || e.keyCode > 90)&&( e.keyCode > 46 || e.keyCode < 32)&&( e.keyCode > 192 || e.keyCode < 192)) {
                        e.preventDefault();
                    }

                    break;
            }
        }
    }

    @HostListener('paste', ['$event']) onPaste(event: any) {
        if (this.TypeValidation) {
            this.log("TypeValidation.number.paste", event.clipboardData.getData('text'));
            var textCopy = event.clipboardData.getData('text');
            switch (this.TypeValidation.toLowerCase()) {
                case 'number':
                    if (isNaN(parseFloat(textCopy))) {
                        event.preventDefault();
                    } else {
                        if (this.maxlength) {
                            if ((textCopy.length) > this.maxlength) {
                                event.preventDefault();
                            }
                        }
                    }
                    break;
                case 'decimal':
                    if (isNaN(parseFloat(textCopy))) {
                        event.preventDefault();
                    } else {
                        if (this.maxlength) {
                            if ((textCopy.length) > this.maxlength) {
                                event.preventDefault();
                            }
                        }
                    }
                    break;
                case 'rfc':
                    var valid = new RegExp(this.validator(textCopy.length));
                    var matchArray = textCopy.match(valid);
                    if (matchArray == null) {
                        event.preventDefault();
                    }
                    break;
                case 'rfc-moral':
                    var valid = new RegExp(this.validator(textCopy.length));
                    var matchArray = textCopy.match(valid);
                    if (matchArray == null) {
                        event.preventDefault();
                    }
                    break;
                case 'curp':
                    var valid = new RegExp(this.validator(textCopy.length));
                    var matchArray = textCopy.match(valid);
                    if (matchArray == null) {
                        event.preventDefault();
                    }
                    break;
                case 'text':
                    var valid = new RegExp(this.validator(textCopy.length));
                    var matchArray = textCopy.match(valid);
                    if (matchArray == null) {
                        event.preventDefault();
                    }
                    break;
            }
        }
    }

    @HostListener('keypress', ['$event']) onkeypress(event: any) {
        if (this.TypeValidation) {
            switch (this.TypeValidation.toLowerCase()) {
                case 'rfc':
                    var input = event.target.value;
                    var position: number = this.el.nativeElement.selectionStart;
                    this.log("TypeValidation.rfc.keypress.position", position);
                    this.log("TypeValidation.rfc.keypress.key", event.key);
                    this.log("TypeValidation.rfc.keypress.input.slice", [input.slice(0, position), event.key, input.slice(position)].join(''));
                    input = [input.slice(0, position), event.key, input.slice(position)].join('');
                    var Str = input;
                    var valid = new RegExp(this.validator(Str.length));
                    var matchArray = Str.match(valid);
                    if (matchArray == null) {
                        return false;
                    }
                    break;
                case 'rfc-moral':
                    var input = event.target.value;
                    var position: number = this.el.nativeElement.selectionStart;
                    this.log("TypeValidation.rfc.keypress.position", position);
                    this.log("TypeValidation.rfc.keypress.key", event.key);
                    this.log("TypeValidation.rfc.keypress.input.slice", [input.slice(0, position), event.key, input.slice(position)].join(''));
                    input = [input.slice(0, position), event.key, input.slice(position)].join('');
                    var Str = input;
                    var valid = new RegExp(this.validator(Str.length));
                    var matchArray = Str.match(valid);
                    if (matchArray == null) {
                        return false;
                    }
                    break;
                case 'curp':
                    var input = event.target.value;
                    var position: number = this.el.nativeElement.selectionStart;
                    this.log("TypeValidation.curp.keypress.position", position);
                    this.log("TypeValidation.curp.keypress.key", event.key);
                    this.log("TypeValidation.curp.keypress.input.slice", [input.slice(0, position), event.key, input.slice(position)].join(''));
                    input = [input.slice(0, position), event.key, input.slice(position)].join('');
                    var Str = input;
                    var valid = new RegExp(this.validator(Str.length));
                    var matchArray = Str.match(valid);
                    if (matchArray == null) {
                        return false;
                    }
                    break;
                case 'email':
                    var input = event.target.value;
                    var position: number = this.el.nativeElement.selectionStart;
                    this.log("TypeValidation.curp.keypress.position", position);
                    this.log("TypeValidation.curp.keypress.key", event.key);
                    this.log("TypeValidation.curp.keypress.input.slice", [input.slice(0, position), event.key, input.slice(position)].join(''));
                    input = [input.slice(0, position), event.key, input.slice(position)].join('');
                    var Str = input;
                    var valid = new RegExp(this.validator(Str.length, Str));
                    var matchArray = Str.match(valid);
                    if (matchArray == null) {
                        return false;
                    }
                    break;
            }
        }
        return
    }

    private validator(length: number, dato?: string) {
        var valid: any;
        if (this.TypeValidation) {
            switch (this.TypeValidation.toLowerCase()) {
                case 'rfc':
                    switch (length) {
                        case 1:
                            valid = '^([a-zA-ZÑ\x26])';
                            break;
                        case 2:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux])';
                            break;
                        case 3:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26])';
                            break;
                        case 4:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})';
                            break;
                        case 5:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{1})';
                            break;
                        case 6:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})';
                            break;
                        case 7:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})([0-1]{1})';
                            break;
                        case 8:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])';
                            break;
                        case 9:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])([0-3]{1})';
                            break;
                        case 10:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])';
                            break;
                        case 11:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{1})';
                            break;
                        case 12:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{2})';
                            break;
                        case 13:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{3})';
                            break;
                        default:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{3})';
                            break;
                    }
                    break;
                case 'rfc-moral':
                    switch (length) {
                        case 1:
                            valid = '^([a-zA-ZÑ\x26])';
                            break;
                        case 2:
                            valid = '^([a-zA-ZÑ\x26]{2})';
                            break;
                        case 3:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26])';
                            break;
                        case 4:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})';
                            break;
                        case 5:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{1})';
                            break;
                        case 6:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})';
                            break;
                        case 7:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})([0-1]{1})';
                            break;
                        case 8:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])';
                            break;
                        case 9:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])([0-3]{1})';
                            break;
                        case 10:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])';
                            break;
                        case 11:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{1})';
                            break;
                        case 12:
                            valid = '^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{2})';
                            break;
                        case 13:
                            valid = '^^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{3})';
                            break;
                        default:
                            valid = '^^([a-zA-ZÑ\x26]{2}[a-zA-ZÑ\x26]{1,2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([a-zA-Z0-9\d]{3})';
                            break;
                    }
                    break;
                case 'curp':
                    switch (length) {
                        case 1:
                            valid = '^([a-zA-ZÑ\x26])';
                            break;
                        case 2:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux])';
                            break;
                        case 3:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26])';
                            break;
                        case 4:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})';
                            break;
                        case 5:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{1})';
                            break;
                        case 6:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})';
                            break;
                        case 7:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})([0-1]{1})';
                            break;
                        case 8:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])';
                            break;
                        case 9:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])([0-3]{1})';
                            break;
                        case 10:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])';
                            break;
                        case 11:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})';
                            break;
                        case 12:
                            valid = '^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{1})';
                            break;
                        case 13:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{2})';
                            break;
                        case 14:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{2})([a-zA-Z0-9\d]{1})';
                            break;
                        case 15:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{2})([a-zA-Z0-9\d]{2})';
                            break;
                        case 16:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{2})([a-zA-Z0-9\d]{3})';
                            break;
                        case 17:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{2})([a-zA-Z0-9\d]{3})([0-9]{1})';
                            break;
                        case 18:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{2})([a-zA-Z0-9\d]{3})([0-9]{2})';
                            break;
                        default:
                            valid = '^^([a-zA-ZÑ\x26][AEIOUXaeioux][a-zA-ZÑ\x26]{2})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([hmHM]{1})([a-zA-Z0-9\d]{2})([a-zA-Z0-9\d]{3})([0-9]{2})';
                            break;
                    }
                    break;
                case 'email':
                    if (dato?.indexOf("@") == -1) {
                        valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*$/;
                    } else {
                        this.log("dato.indexOf", dato?.indexOf("@"));
                        this.log("longitud", length);
                        if (dato?.indexOf("@"))
                            valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    }
                    break;
                case 'text':
                    valid = '[a-zA-Z ]';
                    break;
            }
        }
        this.log(this.TypeValidation + ".validator.(" + length + ')', valid);
        return valid;
    }

    private log(evento: string, message?: any) {
        if (this.debug == true) {
            if (message) {
                console.log(evento, message);
            } else {
                console.log(evento);
            }
        }
    }
}