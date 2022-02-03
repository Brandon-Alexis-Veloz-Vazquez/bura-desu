import { Output, EventEmitter, HostBinding, HostListener, Directive } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { FileHandle } from "src/app/models/file-handle.model";


@Directive({ selector: '[dragNDropFile]', inputs: ['applyDashed', 'borderpx']})
export class DragnDropFileDirective {
    public borderpx: number = 3;
    public applyDashed: boolean = false;
    @Output('fileEmit') fileEmit: EventEmitter<FileHandle> = new EventEmitter();
    @HostBinding('style.border') 
    border: string = this.borderpx + 'px #CCC dashed';
    constructor(private sanitizer: DomSanitizer) { 
        setTimeout(() => {
            this.border = this.borderpx + 'px #CCC dashed';
        }, 10);
    }

    @HostListener('dragover',['$event']) public onDragOver(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.border = this.borderpx + 'px #999 ' + this.applyDashed ? 'dashed' : 'solid' ;
    }

    @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.border = this.borderpx + 'px #CCC dashed';
    }

    @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
        if (this.applyDashed) {
            this.border = this.borderpx + 'px #CCC dashed';
        }
        evt.preventDefault();
        evt.stopPropagation();
        let file: FileHandle | null;
        const dropedFile = evt.dataTransfer?.files[0];
        const dropedFileURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(dropedFile));
        file = { file: dropedFile!, url: dropedFileURL };
        
        this.fileEmit.emit(file);
    }

}