import { deleteBook } from "@helpers/utils"
import { BookProps } from "@helpers/types"
import { Link } from "react-router-dom"
import { useState } from "react"
import ReactModal from "./Modal"

export const Book: React.FC<BookProps> = ({ book }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const handleDelete = async () => {
        try {
            await deleteBook(book.id as string)
            setIsModalOpen(false)
            location.reload()
        } catch (error) {
            console.error(`Error deleting book: ${error}`);
        }
    }

    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 shadow-md rounded-xl cursor-pointer p-6 transition-transform transform hover:scale-[1.03] hover:shadow-2xl hover:from-gray-200 hover:to-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {book.title}
            </h2>
            <p className="text-md text-gray-600 mb-2">
                <span className="font-semibold text-gray-700">Author: </span>{book.author}
            </p>
            <p className="text-md text-gray-600 mb-2">
                <span className="font-semibold text-gray-700">Pages: </span>{book.pages}
            </p>
            <p className="text-md text-gray-600 mb-4">
                <span className="font-semibold text-gray-700">Price: </span>${book.price.toFixed(2)}
            </p>
            <div className="flex items-center justify-between">
                <Link
                    to={`/books/details/${book.id}`}
                    className="text-blue-500 hover:underline hover:text-blue-600 font-medium"
                >
                    View Details
                </Link>
                <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="text-red-500 hover:text-red-600 hover:underline font-medium transition"
                >
                    Delete
                </button>
            </div>
            <ReactModal
                book={book}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onDelete={handleDelete}
            />
        </div>

    )
}
