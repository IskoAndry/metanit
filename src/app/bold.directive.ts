import {Directive, ElementRef, Renderer2, Input, HostListener, HostBinding} from "@angular/core";
 
@Directive({
    selector: "[bold]",
    standalone: true,
    host: {
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
    }
})
export class BoldDirective{


//========================================      @Input
    @Input() selectedSize = "18px";
    @Input() defaultSize = "16px";
     
    private fontSize : string;
    private fontWeight = "normal";
    constructor(){
        this.fontSize = this.defaultSize;
    }
	
	@HostBinding("style.fontSize") get getFontSize(){
		
		return this.fontSize;
	}
	
	@HostBinding("style.fontWeight") get getFontWeight(){
		
		return this.fontWeight;
	}
	
	@HostBinding("style.cursor") get getCursor(){
		return "pointer";
	}
	
	@HostListener("mouseenter") onMouseEnter() {
		this.fontWeight ="bold";
		this.fontSize = this.selectedSize;
	}

	@HostListener("mouseleave") onMouseLeave() {
		this.fontWeight = "normal";
		this.fontSize = this.defaultSize;
	}

    //=====================================       host
    // constructor(private element: ElementRef, private renderer: Renderer2){
          
    //     this.renderer.setStyle(this.element.nativeElement, "cursor", "pointer");
    // }
     
    // onMouseEnter(){
    //     this.setFontWeight("bold");
    // }
    // onMouseLeave(){
    //     this.setFontWeight("normal");
    // }
    // private setFontWeight(val: string) {
    //     this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    // }
     
    // constructor(private element: ElementRef, private renderer: Renderer2){
         
    //     this.renderer.setStyle(this.element.nativeElement, "font-weight", "bold");
    // }
//============================  @HostBinding
    // private fontWeight = "normal";
     
    // @HostBinding("style.fontWeight") get getFontWeight(){
         
    //     return this.fontWeight;
    // }
     
    // @HostBinding("style.cursor") get getCursor(){
    //     return "pointer";
    // }
     
    // @HostListener("mouseenter") onMouseEnter() {
    //     this.fontWeight ="bold";
    // }
 
    // @HostListener("mouseleave") onMouseLeave() {
    //     this.fontWeight = "normal";
    // }

    // ==============================@HostListener
    // @HostListener("mouseenter") onMouseEnter() {
    //     this.setFontWeight("bold");
    // }
 
    // @HostListener("mouseleave") onMouseLeave() {
    //     this.setFontWeight("normal");
    // }
 
    // private setFontWeight(val: string) {
    //     this.renderer.setStyle(this.element.nativeElement, "font-weight", val);
    // }
}