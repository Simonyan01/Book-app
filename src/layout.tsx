import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return (
        <section className="min-h-screen bg-gray-100">
            <nav className="bg-gray-800 tracking-wide text-white p-4">
                <ul className="flex space-x-5">
                    <li>
                        <Link to="/books" className="hover:underline">
                            Books
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-author" className="hover:underline">
                            Add Author
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-book" className="hover:underline">
                            Add Book
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="container mx-auto p-6">
                <Outlet />
            </main>
        </section>
    )
}

export default Layout
