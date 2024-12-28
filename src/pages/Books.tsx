import { getAllBooks } from "@helpers/utils"
import { useEffect, useState } from "react"
import { Book } from "@components/Book"
import { IBook } from "@helpers/types"

export const Books = () => {
    const [books, setBooks] = useState<IBook[]>([])

    useEffect(() => {
        getAllBooks()
            .then((books) => setBooks(books))
    }, [])

    return (
        <section className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-gray-100 p-6">
            <h1 className="text-4xl font-extrabold text-center tracking-wider mb-8 text-blue-500 drop-shadow-md">
                Book Collection
            </h1>
            {books.length === 0 ? (
                <p className="text-center mt-64 text-gray-500 text-3xl">No books available</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
            )}
        </section>
    )
}
