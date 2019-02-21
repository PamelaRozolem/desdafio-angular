import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected title = 'desafio';
  protected filterData;

  protected data = [
    {title:"ORDERNAR NOME", type:"order", field: "nome"},
    {title:"ORDERNAR NASCIMENTO", type: "order", field: "dtNasc"},
    {title:"FILTRO HOMENS", type: "filter", field: "sexo", conditional: "M"},
    {title:"FILTRO FEMININO", type:"filter", field: "sexo", conditional: "F"}
  ];
  protected usersOriginal = [
    {nome:"pamela",dtNasc:new Date(1993,3,2) , sexo: 'F'},
    {nome:"joao",dtNasc:new Date(1987,2,23),  sexo: 'M'},
    {nome:"pedro",dtNasc:new Date(1958,3,6),  sexo: 'M'}
  ];
  
  protected users = this.usersOriginal;

  public adicionar(user){
    this.usersOriginal.push(user);
    this.users = this.usersOriginal;
  }

  public filterText(text){
    this.filterData = text;
  }


  public ordenateUser(conditional){
   
  }

  public filterUser(args){
    const userFiltered = this.usersOriginal.filter( item => {
      return (item[args.field].indexOf(args.conditional) != -1);
    });
    this.users = userFiltered;
  }


}

