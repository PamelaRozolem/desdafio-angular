import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrls: ['./form-adicionar.component.css']
})
export class FormAdicionarComponent implements OnInit {

  @Output() adicionarUser = new EventEmitter();

  public formUser = new FormGroup(
    {
      nome: new FormControl('', [Validators.required]),
      dtNasc: new FormControl('', [Validators.required]),
      sexo: new FormControl('',[Validators.required])
    }
  );

  constructor() { }

  ngOnInit() {
  }

  protected btnSalvar (event){
    event.preventDefault();
    this.adicionarUser.emit(this.formUser.value);
    this.resetForm();
  }

  protected resetForm (){
    this.formUser.reset();
  }
}
