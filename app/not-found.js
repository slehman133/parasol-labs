import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center gap-12 items-center h-[100vh]'>
            <h1>404 - Page Not Found</h1>
            <Link href="/" className='border-1 p-4 shadow-lg'>Go back to Home</Link>
        </div>
    )
}