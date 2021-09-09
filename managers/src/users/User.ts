import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly uid: string,
    private readonly fname: string,
    private readonly lname: string,
    private readonly email: string,
    private readonly phone: string,
  ) {
    super();
  }

  getId(): string {
    return this._id;
  }
  
  getUID(): string {
    return this.uid;
  }

  getFname(): string {
    return this.fname;
  }
  getLname(): string {
    return this.lname;
  }

  getEmail(): string{
      return this.email;
  }
  getPhone(): string {
      return this,this.phone
  }

  

//   updateAllergies(allergies: string[]): void {
//     const allergiesLower = allergies.map(allergy =>
//       allergy.toLocaleLowerCase(),
//     );
//     if (allergiesLower.includes('chocolate')) {
//       throw new BadRequestException('Allergy may not be chocolate.');
//     }
//     this.allergies = allergies;
//   }

 
}