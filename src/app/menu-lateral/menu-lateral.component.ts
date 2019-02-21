import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Input() data;

  @Output() filter = new EventEmitter();
  @Output() ordenate = new EventEmitter();
  @Output() disable = new EventEmitter();


  constructor() { }

  ngOnInit() {}


  public onFilter(event, obj){
    event.preventDefault();
    switch(obj.type){
      case 'order':
        this.ordenate.emit(obj);
      break;
      case 'filter':
        this.filter.emit(obj);
      break;
      default:
       this.disable.emit(obj);
    }
  }

}

