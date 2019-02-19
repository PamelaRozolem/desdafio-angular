import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  constructor() { }

  @Input() titleBnts;
  @Output() filtrarUser = new EventEmitter();

  filtro(){
    event.preventDefault();
    this.filtrarUser.emit(this.filtro);
  }

  ngOnInit() {

  }

}
