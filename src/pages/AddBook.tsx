import { addBook, getAllAuthors, getBookByTitle } from "@helpers/utils"
import { IAuthor, IBook, IBookForm } from "@helpers/types"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const AddBook = () => {
    const [authors, setAuthors] = useState<IAuthor[]>([])
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IBookForm>()

    useEffect(() => {
        getAllAuthors()
            .then((response) => setAuthors(response))
    }, [])

    const onSubmit: SubmitHandler<IBookForm> = async (data) => {
        const { authorId, title, pages, imageUrl } = data
        const selectedAuthor = authors.find((author) => author.id === authorId)

        if (selectedAuthor) {
            await getBookByTitle(title)

            if (title) {
                setError("A book with this title already exists.")
                console.log("A book with this title already exists.")
            } else {
                const newBook: IBook = {
                    title: title,
                    pages: Number(pages),
                    price: 19.99,
                    author: `${selectedAuthor.name} ${selectedAuthor.surname}`,
                    imageUrl: imageUrl
                }

                await addBook(newBook)
                reset()
                navigate("/books")
            }
        }
    }

    return (
        <section className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">
                    Add New Book
                </h1>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                <div className="mb-4">
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                    <label className="block text-gray-700 font-medium mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        {...register("title", {
                            required: "Title is required",
                            minLength: {
                                value: 3,
                                message: "Title must be at least 3 characters",
                            },
                        })}
                        className={`w-full border-2 rounded-md p-2 ${errors.title ? "border-red-500" : "border-gray-300"}`}
                    />
                </div>
                <div className="mb-4">
                    {errors.pages && <p className="text-red-500 text-sm mt-1">{errors.pages.message}</p>}
                    <label className="block text-gray-700 font-medium mb-1">
                        Pages
                    </label>
                    <input
                        type="number"
                        {...register("pages", {
                            required: "Pages are required",
                        })}
                        className={`w-full border-2 rounded-md p-2 ${errors.pages
                            ? "border-red-500"
                            : "border-gray-300"
                            }`}
                    />
                </div>
                <div className="mb-4">
                    {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl.message}</p>}
                    <label className="block text-gray-700 font-medium mb-1">
                        Image URL
                    </label>
                    <input
                        type="url"
                        {...register("imageUrl", {
                            required: "Image URL is required",
                            pattern: {
                                value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i,
                                message: "Invalid image URL",
                            },
                        })}
                        className={`w-full border-2 rounded-md p-2 ${errors.imageUrl
                            ? "border-red-500"
                            : "border-gray-300"
                            }`}
                    />
                </div>
                <div className="mb-4">
                    {errors.authorId && <p className="text-red-500 text-sm mt-1">{errors.authorId.message}</p>}
                    <label className="block text-gray-700 font-medium mb-1">
                        Author
                    </label>
                    <select
                        {...register("authorId", {
                            required: "Author is required",
                        })}
                        className={`w-full border-2 rounded-md p-2 ${errors.authorId
                            ? "border-red-500"
                            : "border-gray-300"
                            }`}
                    >
                        <option value="">Select an author</option>
                        {authors.length === 0 ? (
                            <option disabled>No authors available</option>
                        ) : (
                            authors.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.name} {author.surname}
                                </option>
                            ))
                        )}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Book
                </button>
            </form>
        </section>
    )
}