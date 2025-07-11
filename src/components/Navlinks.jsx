import Link from "next/link";

 
/**
 * It returns the list of the links in the navbar
 */
export default function Navlinks(){
    return (
        <>
            <li><Link href="/" className="block hover:text-cyan-400 transition">Dashboard</Link></li>
            <li><Link href="/reports" className="block hover:text-cyan-400 transition">Reports</Link></li>
            <li><Link href="/settings" className="block hover:text-cyan-400 transition">Settings</Link></li>
        </>
    )
}