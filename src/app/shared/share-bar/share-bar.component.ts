import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-share-bar',
  templateUrl: './share-bar.component.html',
  styleUrls: ['./share-bar.component.scss']
})
export class ShareBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: any): void {
    this.newItemEvent.emit(value);
    console.log('da share -> ' + value);
  }
}
