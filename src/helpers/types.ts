export interface IBook {
  id?: string
  title: string
  pages: number
  price: number
  author: string
  imageUrl?: string
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
  book: IBook
}

export type ModalProps = BookProps & {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}
