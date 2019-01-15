export class User {
    constructor(
        public email: string,
        public name: string,
        public surname: string,
        public password: string,
        public token: string,
        public city: string
    ) { }
}

export interface UserInterface {
    email: string,
    name: string,
    surname: string,
    password: string,
    token: string,
    city: string
}