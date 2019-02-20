import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  constructor() { }

  @Input() titleBnts;
  @Output() filterButton = new EventEmitter;

  filtro(event){
    event.preventDefault();
     this.filterButton.emit(this.filtro);
  }

  ngOnInit() {

  }

}
