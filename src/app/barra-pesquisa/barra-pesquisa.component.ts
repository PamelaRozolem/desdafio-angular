import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {

  constructor() { }

@Output() public filter = new EventEmitter;

 public searchFilter(e){
  this.filter.emit(e.target.value);
}

  ngOnInit() {
  }

}
