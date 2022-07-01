import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  @Input() flexDirection: 'row'|'column' = 'row';
  @Output() linkClicked = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  linkClick() {
    this.linkClicked.emit(true);
  }

}
