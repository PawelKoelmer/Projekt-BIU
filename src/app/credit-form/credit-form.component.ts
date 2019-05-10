import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.scss']
})
export class CreditFormComponent implements OnInit {
  
  
  creditLabel = 'Dane kredytu:';
  
  public creditAmount: number;
  public installment: number;
  public interest: number;
  
  public creditForm = new FormGroup({
    amount : new FormControl(''),
    numberOfInstallments : new FormControl(''),
    staticInstallment : new FormControl(''),
    changingInstallment: new FormControl('')})
  
  constructor() { }

  ngOnInit() {
  }



}
