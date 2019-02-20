import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  
  @Output() search = new EventEmitter();
  
  protected searchText = "";

  constructor() { }

  ngOnInit() {
  }

  public onFilter(event){
    this.search.emit(event);
  }
 
}
