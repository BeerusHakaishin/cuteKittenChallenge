export class Kitten {
    name: string;
    surname: string;
    race: string;
    birthdate: Date;
    image: string;

    constructor(name: string, surname: string, race: string, birthdate: Date, image: string) {
        (this.name = name),
        (this.surname = surname),
        (this.race = race),
        (this.birthdate = birthdate),
        (this.image = image);
    }

  }