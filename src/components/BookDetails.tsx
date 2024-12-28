import { useParams } from "react-router-dom"
import { getBookById } from "@helpers/utils"
import { useEffect, useState } from "react"
import { IBook } from "@helpers/types"

export const BookDetails = () => {
    const { id } = useParams<{ id: string }>()
    const [book, setBook] = useState<IBook | undefined>(undefined)

    useEffect(() => {
        getBookById(id as string)
            .then((data) => setBook(data))
    }, [id])

    return (
        book ? (
            <div className="min-h-screen bg-gray-100 p-6">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-blue-500 mb-4">{book.title}</h1>
                    <p className="text-gray-700 text-lg mb-2">
                        <strong>Author:</strong> {book.author}
                    </p>
                    <p className="text-gray-700 text-lg mb-2">
                        <strong>Pages:</strong> {book.pages}
                    </p>
                    <p className="text-gray-700 text-lg mb-2">
                        <strong>Price:</strong> ${book.price.toFixed(2)}
                    </p>
                </div>
            </div>
        ) : (
            <p className="text-center mt-64 text-gray-500 text-3xl">Book not found</p>
        )
    )
}
