export class BookModel {
    id: string = '';
    name: string = '';
    genre: string = '';
    authorId: string = '';

    constructor(_obl?: BookModel) {
        if (_obl) {
            this.id = _obl.id;
            this.name = _obl.name;
            this.genre = _obl.genre;
            this.authorId = _obl.authorId;
        }
    }
}