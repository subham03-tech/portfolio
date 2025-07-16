import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="bg-sky-500 place-items-end">
                <ul>
                    <Link href="/home" className="px-6">HOME</Link>
                    <Link href="/about" className="px-6">ABOUT</Link>
                    <Link href="/project" className="px-6">PROJECT</Link>
                    <Link href="/contact" className="px-6">CONTACT</Link>
                </ul>
                
            </nav>
            <div className="bg-sky-700 h-40">
                    <h2>my self subham </h2>
                   
                </div>
        </>

    )
}
