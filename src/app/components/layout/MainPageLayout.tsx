import { ReactNode } from "react"

export const MainPageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="pt-4 mx-auto max-w-4xl">
            {children}
        </div>
    )
}