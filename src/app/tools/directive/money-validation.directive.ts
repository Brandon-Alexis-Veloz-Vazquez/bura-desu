import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[inputMoney]',
    inputs:["decimales", "negative"]
})

export class ValidationMoney{
    decimales!:number;
    negative:boolean = false;
    private limpiar:boolean = false;
    
    constructor(private el: ElementRef){ }

    @HostListener('keydown', ['$event']) onKeyDown(event:any){
        let e = <KeyboardEvent> event;
        switch (e.key.trim()) {
            case "1":case "2": case"3": case"4":case"5":case"6":case"7":case"8":case"9":case"0": case "Backspace":case ".":
                break;
            default:
                e.preventDefault();            
                break
        }
        //No permite mas de 1 punto (.)
        var valor = event.target.value.indexOf(".");
        if (valor>0 && e.key.trim() == ".") {                
            e.preventDefault();  
        }
    }
    @HostListener('focus', ['$event']) onfocus(event:any){
        event.target.select();
        this.limpiar = true;
    }

    @HostListener('keyup', ['$event']) onkeyup(event:any){
        var cadenaTexto = new String(event.target.value);
        cadenaTexto = cadenaTexto.replace(/\,/g, "");
        let newString = (cadenaTexto + "").replace(/\b(\d+)((\.\d+)*)\b/g, (a,b,c)=>{
            return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
        });
        event.target.value =  newString; 
    }

    @HostListener('blur', ['$event']) onblur(event:any){
        try {
            if(this.decimales){//si tiene decimales
                let decimalesString = "";
                //se crea el string de esos decimales
                for (let i = 0; i < this.decimales; i++) {
                    decimalesString += "0";
                }
    
                //se verifica si el valor esta vacio
                if(event.target.value == ""){
                    //de ser vacio se retorna un 0 con la cantidad de decimales
                    event.target.value = '0.' + decimalesString;
                }else{
                    //se verifica si el usuario no agrego decimales al valor
                    if(event.target.value.lastIndexOf(".")==-1){
                        //de ser asi se agregan los decimales de acuerdo a la configuración
                        event.target.value += '.' + decimalesString;
                    }else{
                        //si tiene decimales partimos el string por el '.' y se verifica el resultado derecho para agregar cuantos decimales hagan falta 
                        let decimalesString:String = event.target.value.substr(event.target.value.lastIndexOf(".") + 1, event.target.value.length);
                        let valueString:String =  event.target.value.substr(0, event.target.value.lastIndexOf(".") + 1);
                        event.target.value = valueString + "" + this.verificaDecimales(decimalesString, this.decimales);
                    }
                }
            }else{
                //si no tiene decimales verificamos una vez mas si el valor es vacio
                if(event.target.value == ""){
                    //retornamos el valor en cero con solo dos decimales ya que es el valor default
                    event.target.value = '0.00';
                }else{
                    //se verifica si el usuario agrego decimales al valor
                    if(event.target.value.lastIndexOf(".")==-1){
                        //si no agregó se colocan los dos decimales por default
                        event.target.value += '.00';
                    }else{
                        //si agregó se verifica si el numero de decimales es de 2
                        let decimalesString:String = event.target.value.substr(event.target.value.lastIndexOf(".") + 1, event.target.value.length);
                        let valueString:String =  event.target.value.substr(0, event.target.value.lastIndexOf(".") + 1);
                        event.target.value = valueString + "" + this.verificaDecimales(decimalesString);
                    }
                }
            }
        } catch (error) {
            console.error("money.error", error);
        }
    }

    private verificaDecimales(decimalesString:String, decimales?:any):String{
        if(decimales){
            if(decimalesString.length < decimales){
                decimalesString += "0";
                return this.verificaDecimales(decimalesString, decimales);
            }else{
                return decimalesString;
            }
        }else{
            if(decimalesString.length < 2){
                decimalesString += "0";
                return this.verificaDecimales(decimalesString);
            }else{
                return decimalesString;
            }
        }        
    }
    
}