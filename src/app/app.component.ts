import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected title = 'desafio';
  protected filterData;

  protected users = [
    {nome:"pamela",dtNasc:"02/03/1993", sexo: 'F'},
    {nome:"joao",dtNasc:"22/03/1943",  sexo: 'M'},
    {nome:"pedro",dtNasc:"02/04/1994",  sexo: 'M'}
  ];

  protected data=[
    {titleBnts:"ORDERNAR NOME"},
    {titleBnts:"ORDERNAR NASCIMENTO"},
    {titleBnts:"FILTRO HOMENS"},
    {titleBnts:"FILTRO FEMININO"}
  ];

  public adicionar(user){
    debugger;
    this.users.push(user);
  }

  public filterText(text){
    this.filterData = text;
  }


  
}

