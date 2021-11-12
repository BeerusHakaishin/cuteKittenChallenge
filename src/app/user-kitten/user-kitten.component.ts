import { Component, Input, OnInit } from '@angular/core';
import { Kitten } from '../common/models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css'],
})
export class UserKittenComponent implements OnInit {

  @Input() public cat: Kitten | undefined;
  
  constructor() {}

  ngOnInit(): void {}
}