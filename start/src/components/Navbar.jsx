export default function Navbar() {
    return (
        <>
            {/* navbar */}
            <nav className="sticky top-0 z-10 p-3 bg-purple-400 border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <div>
                    <a className="text-2xl font-bold px-6 cursor-pointer">
                        <span>Home</span>
                    </a>
                    <a className="text-2xl font-bold px-6 cursor-pointer text-white">
                        <span>Logout</span>
                    </a>
                </div>
            </nav>
        </>
    )
}


// module.exports = { Navbar } // export
// module.exports = Navbar // export default
