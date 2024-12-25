import { IAuthor, IBook } from "@helpers/types"
import { API } from "@helpers/api"

export const getAllBooks = async (): Promise<IBook[]> => {
  const response = await API.get("/books")
  return response.data
}

export const getBookById = async (id: string): Promise<IBook> => {
  const response = await API.get(`/books/${id}`)
  return response.data
}

export const getAllAuthors = async (): Promise<IAuthor[]> => {
  const response = await API.get("/authors")
  return response.data
}

export const addAuthor = async (author: IAuthor): Promise<IAuthor> => {
  const response = await API.post("/authors", author)
  return response.data
}

export const addBook = async (book: IBook): Promise<IBook> => {
  const response = await API.post("/books", book)
  return response.data
}
