import { ReactNode, Children } from "react"

export const MasonryLaout = ({ children }: { children: ReactNode }) => {

    return (
        <div className="masonry-1-col sm:masonry-2-col">
            {Children.map(children, child =>
                <div className="pt-2 break-inside-avoid">
                    {child}
                </div>
            )}
        </div>

    )
}