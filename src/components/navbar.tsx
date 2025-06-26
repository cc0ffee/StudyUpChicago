"use client"
export default function Navbar() {
    return (
        <aside className="w-[20%] h-screen bg-gray-800 text-white">
            <h1 className="text-2xl font-bold mb-4 break-words pt-6 pl-6">StudyUpChicago</h1>
            <nav>
                <ul className="space-y-2 text-sm">
                    <li className="text-xl truncate mb-2 hover:bg-gray-900 cursor-pointer pl-6">
                        Login
                    </li>
                    <li className="text-xl truncate mb-2 hover:bg-gray-900 cursor-pointer pl-6">
                        About
                    </li>
                </ul>
            </nav>
        </aside>
    )
}