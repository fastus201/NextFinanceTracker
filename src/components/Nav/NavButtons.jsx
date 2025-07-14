import Link from "next/link";


export default function NavButtons(){
    return (
        <>
            <Link href="/login" className="block text-center px-4 py-2 rounded-xl bg-slate-800 text-cyan-400 hover:bg-slate-700 border border-slate-600 transition font-bold">
                Log In
            </Link>
            <Link href="/register" className="block text-center px-4 py-2 rounded-xl bg-cyan-400 text-slate-900 hover:bg-cyan-300 transition font-bold">
                Sign Up
            </Link>
        </>
    )
}