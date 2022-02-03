import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalizeDirective } from './capitalize.module';
import { CopyClipboardDirective } from './copy-clipboard.directive';
import { DisableControlDirective } from './disableControl.directive';
import { DragnDropFileDirective } from './dragon-drop.directive';
import { LoaderDirective } from './loader.directive';
import { ValidationMoney } from './money-validation.directive';
import { RunScriptsDirective } from './run-script.directive';
import { RunStyleDirective } from './run-style.directive';
import { TypeValidation } from './type-validation.directive';
// components

export const ROOT_TOOLS: any[] = [
    RunStyleDirective,
    RunScriptsDirective,
    LoaderDirective,
    TypeValidation,
    CapitalizeDirective,
    DragnDropFileDirective,
    DisableControlDirective,
    CopyClipboardDirective,
    ValidationMoney
];

@NgModule({
    declarations: [ROOT_TOOLS],
    imports: [        
        CommonModule
    ],
    exports: [ROOT_TOOLS],
    providers: []
})
export class DirectiveModule {}