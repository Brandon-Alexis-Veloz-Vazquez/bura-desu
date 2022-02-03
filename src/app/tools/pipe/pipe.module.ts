import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeysPipe } from './keys-pipe/keys-pipe.pipe';
import { SafePipeUrl } from './safe-pipe-url.pipe';
// components

export const ROOT_TOOLS: any[] = [
    SafePipeUrl,
    KeysPipe
];

@NgModule({
    declarations: [ROOT_TOOLS],
    imports: [        
        CommonModule
    ],
    exports: [ROOT_TOOLS],
    providers: []
})
export class PipeModule {}