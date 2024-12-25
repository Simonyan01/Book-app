import { BookProps, IBook } from "@helpers/types"
import { Link, } from "react-router-dom"

export const Book: React.FC<BookProps> = ({ book }) => {
    const safeBook = book as IBook

    return (
        <div className="bg-white shadow-lg rounded-xl p-5 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {safeBook.title}
            </h2>
            <p className="text-lg text-gray-600">
                <span className="font-medium text-gray-700">Author: {safeBook.author}</span>

            </p>
            <p className="text-lg text-gray-600">
                <span className="font-medium text-gray-700">Pages: {safeBook.pages}</span>

            </p>
            <p className="text-lg text-gray-600">
                <span className="font-medium text-gray-700">Price: {safeBook.price.toFixed(2)}</span> $
            </p>
            <Link
                to={`/books/details/${safeBook.id}`}
                className="text-blue-400 hover:underline"
            >
                View Book
            </Link>
        </div>
    )
}
