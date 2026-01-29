import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">News Article Not Found</h2>
                <p className="text-gray-600 mb-8">
                    The news article you&rsquo;re looking for doesn&rsquo;t exist or has been removed.
                </p>
                <Link
                    href="/news"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                    Back to News
                </Link>
            </div>
        </div>
    )
}