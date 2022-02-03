import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safePipeUrl' })
export class SafePipeUrl implements PipeTransform {

	constructor(private sanitizer: DomSanitizer) { }

	transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
		try {
			switch (type) {
				case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
				case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
				case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
				case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
				case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
				default: throw new Error(`Invalid safe type specified: ${type}`);
			}
		} catch (error) {
			console.error(error);
			throw new Error(`Invalid safe type specified: ${type}`);
		}
	}
}