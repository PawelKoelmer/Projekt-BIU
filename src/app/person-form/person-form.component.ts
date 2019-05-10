import { Component, OnInit, Input, ElementRef } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { VisibilityDirective } from '../credit-form/visibility.directive';
import { element } from '@angular/core/src/render3';



@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

  @Input() visibility:VisibilityDirective;
  public personName: string;
  public personLastName: string;
  public personPeselNumber: number;
  private state: boolean;

  personLabel = 'Dane personalne: ';
  public personForm = new FormGroup({
  name : new FormControl(''),
  lastName : new FormControl(''),
  peselNumber : new FormControl('')
  }
  )
  constructor()
  
  { 
    
  }

  ngOnInit() {
  }

  onSubmit(){
    this.personPeselNumber = this.personForm.get('peselNumber').value;
    this.personName = this.personForm.get('name').value;
    this.personLastName = this.personForm.get('lastName').value;
    this.validateData();
  }
  resetForm():void {
     this.personForm.get('peselNumber').setValue("");
     this.personForm.get('name').setValue("");
     this.personForm.get('lastName').setValue("");
  }

  validateData(){
      if(this.personName.length <=0 || this.personLastName.length <=0 || this.personPeselNumber.toString.length <= 0){
        alert("Niepoprawne dane, wprowadź jeszcze raz lub uzupełnij");
        this.resetForm();
        return;
      }
      else{
        let x = this.personPeselNumber.toString();
        if(parseInt(x.slice(2,4)) > 30){
          alert("Jesteś za młody na pożyczkę w naszym banku");
          this.resetForm();
          return;
        }
      }

  }
  setState(value){
    this.state=value;
  }
  getState(){
    return this.state;
  }
  
 

}
