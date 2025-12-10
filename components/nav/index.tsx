"use client"

import Link from "next/link";
import { useState } from "react";

export default function Nav () {
    const [user, setUser] = useState();

    return (
        <nav className="h-16 border-b border-zinc-200 p-4">
            <div className="flex items-center justify-between">
                <h1>Pinboard</h1>
                <div className="flex gap-x-4 text-sm">
                    <Link href="/tips" className="">Tips</Link>
                    {/* <Link href="/data" className="">Export data</Link> */}

                    {user ? 
                    <>user</>
                :
                    <Link href={"/login"}>Login</Link>
                    }
                </div>
            </div>
        </nav>
    )
}