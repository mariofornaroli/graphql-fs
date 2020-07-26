export class AuthorModel {
    id: string = '';
    name: string = '';
    age?: number;

    constructor(_obl?: AuthorModel) {
        if (_obl) {
            this.id = _obl.id;
            this.name = _obl.name;
            this.age = _obl.age;
        }
    }
}