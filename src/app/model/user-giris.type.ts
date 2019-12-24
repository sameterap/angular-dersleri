export interface User {
  id: number;
  name: string;
  age?: number;
}

export class UserType {
  name: string;

  constructor(givenName: string) {
    this.name = givenName;
  }
}
