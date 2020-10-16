import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

 @Input() item: BudgetItem = new BudgetItem('',null);
  constructor() { }
  ngOnInit() {
    
     
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
