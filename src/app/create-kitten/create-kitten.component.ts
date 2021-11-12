import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Kitten } from '../common/models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css'],
})
export class CreateKittenComponent implements OnInit {

  kitten: Kitten | undefined;

  AdoptKittenForm = this.fb.group({

    name: ['', Validators.required],
    race: ['', Validators.required],
    surname: ['', Validators.required],
    birthdate: ['', Validators.required],
    image: ['', Validators.required],

  });

  @Output() public sendNewKitten: EventEmitter<Kitten> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addNewKitten() {
    this.kitten = this.AdoptKittenForm.value;
    this.sendNewKitten.emit(this.kitten);
    this.AdoptKittenForm.reset();
  }
}
