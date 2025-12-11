import Link from "next/link"

export default function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            {/* Hero Section for not logged in users */}
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4">
                Stay Focused, Get Things Done
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mb-8">
                Pinboard helps you manage your tasks with a built-in timer. 
                Create tasks, set your focus time, and accomplish more every day. 
                Simple, effective, and designed for productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                    href="/login"
                    className="px-6 py-3 bg-neutral-800 text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors"
                >
                    Login
                </Link>
                <Link 
                    href="/signup"
                    className="px-6 py-3 bg-[#E9F2A2] text-neutral-800 rounded-lg font-medium hover:bg-[#dce88f] transition-colors"
                >
                    Get Started
                </Link>
            </div>
        </div>
    )
}