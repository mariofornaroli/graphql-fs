import { BookModel } from "./book";

export class BookListModel {
  // Result Data
  public books: BookModel[] = [];
  public loading: boolean = false;

  constructor(input?: any) {
    if (input) {
      this.books = ((input && input['books']) || []).map((object: any) => new BookModel(object));
      this.loading = !!(input && input.loading);
    }
  }
}