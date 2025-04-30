import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to My React App</h1>
      <nav className="mb-8">
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-500 hover:text-blue-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-blue-500 hover:text-blue-700">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="prose">
        <p>This is the home page of our React application.</p>
      </div>
    </main>
  )
}
