import { useNavigate } from "react-router-dom"
import { IAuthorForm } from "@helpers/types"
import { addAuthor } from "@helpers/utils"
import { useForm } from "react-hook-form"

export const AddAuthor = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IAuthorForm>()

    const onSubmit = async (data: IAuthorForm) => {
        const { firstName, lastName } = data

        await addAuthor({
            name: firstName,
            surname: lastName
        })
        reset()
        navigate("/add-book")
    }

    return (
        <section className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-500 mb-4">
                    Add New Author
                </h1>
                <div className="mb-4">
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                    <label className="block text-gray-700 font-medium mb-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        {...register("firstName", {
                            required: "First name is required",
                            minLength: {
                                value: 2,
                                message: "First name must be at least 2 characters",
                            },
                        })}
                        className={`w-full border-2 rounded-md p-2 ${errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                            }`}
                    />

                </div>
                <div className="mb-4">
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                    <label className="block text-gray-700 font-medium mb-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        {...register("lastName", {
                            required: "Last name is required",
                            minLength: {
                                value: 2,
                                message: "Last name must be at least 2 characters",
                            },
                        })}
                        className={`w-full border-2 rounded-md p-2 ${errors.lastName
                            ? "border-red-500"
                            : "border-gray-300"
                            }`}
                    />

                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Author
                </button>
            </form>
        </section>
    )
}