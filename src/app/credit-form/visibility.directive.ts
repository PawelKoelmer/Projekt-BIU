import { Directive, Input, ElementRef} from '@angular/core';
import { PersonFormComponent } from '../person-form/person-form.component';


@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {

  @Input() visibility : string;
  
  constructor(private el: ElementRef) {
 
   }
  
  ngOnInit() {
  this.el.nativeElement.style.display = 'none';
  }
  
    setVisibility(){
    
    this.el.nativeElement.style.display = 'grid';
    
  }
  
}
