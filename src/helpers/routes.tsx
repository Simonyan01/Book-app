import { BookDetails } from "@components/BookDetails.tsx"
import { createBrowserRouter } from "react-router-dom"
import { AddAuthor } from "@pages/AddAuthor"
import { AddBook } from "@pages/AddBook"
import { Books } from "@pages/Books"
import Layout from "../layout.tsx"

export const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            { path: "books", element: <Books /> },
            { path: "books/details/:id", element: <BookDetails /> },
            { path: "add-author", element: <AddAuthor /> },
            { path: "add-book", element: <AddBook /> }
        ]
    }
])