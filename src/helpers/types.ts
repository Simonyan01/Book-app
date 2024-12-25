export interface IBook {
  id?: number
  title: string
  pages: number
  price: number
  author: string
}

export interface IBookForm {
  title: string
  pages: number
  imageUrl: string
  authorId: number
}

export interface IAuthor {
  id?: number
  name: string
  surname: string
}

export interface IAuthorForm {
  firstName: string
  lastName: string
}

export type BookProps = {
  book?: IBook
}
