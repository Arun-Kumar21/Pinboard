import Nav from "@/components/nav"
import { ReactNode } from "react"

export default function PageLayout ({children} : {children : ReactNode}) {
    return (
        <div className="max-w-3xl mx-auto">
            <Nav />

            <div className="py-4">
                {children}
            </div>
        </div>
    )
}