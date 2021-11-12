import { Component, OnInit } from '@angular/core';
import { Kitten } from '../common/models/kitten.model';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.css'],
})
export class KittenComponent implements OnInit {

  public kittens: Kitten[] = [];
  public catsAdopted: Kitten[] = [];

  anyCatsAdopted: boolean = false;
  CatPresentInDaHouse: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onReceiveNewKitten(kitten: Kitten){
    this.kittens.push(kitten);

    if (this.CatPresentInDaHouse === true) {
      return;

    } else if (this.kittens.length > 0) {
      this.CatPresentInDaHouse = true;
    }
  }

  adoptCuteKitten(index: number){
    for (let i = 0; i < this.kittens.length; i++){

      if(index === i){
        this.catsAdopted.push(this.kittens[i]);
        this.kittens.splice(index, 1);
      }
    }

    if(this.kittens.length === 0){
      this.CatPresentInDaHouse = false;
    }

    if(this.anyCatsAdopted === true){
      return;

    }
    
    else if(this.catsAdopted.length > 0){
      this.anyCatsAdopted = true;
    }
  }
}