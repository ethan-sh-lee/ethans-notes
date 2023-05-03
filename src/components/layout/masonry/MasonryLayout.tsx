import { ReactNode, Children } from "react";
import { Reorder } from "./Reorder";

type size = {
    xs: number,
    sm: number,
    md: number,
    lg: number
}

export const MasonryLayout = ({
    children,
    size: { xs, sm, md, lg },
}: {
    children: ReactNode,
    size: size;
}) => {
    const xsChildren = Reorder(children, xs);
    const smChildren = Reorder(children, sm);
    const mdChildren = Reorder(children, md);
    const lgChildren = Reorder(children, lg);

    return (
        <>
            <div
                className={`block columns-${xs} sm:hidden md:hidden lg:hidden max-w-4xl mx-auto gap-2 space-y-2`}
            >
                {Children.map(xsChildren, (child) => (
                    <div className="break-inside-avoid">{child}</div>
                ))}
            </div>
            <div
                className={`hidden sm:block sm:columns-${sm} md:hidden lg:hidden max-w-4xl mx-auto gap-2 space-y-2`}
            >
                {Children.map(smChildren, (child) => (
                    <div className="break-inside-avoid">{child}</div>
                ))}
            </div>
            <div
                className={`hidden sm:hidden md:block md:columns-${md} lg:hidden max-w-4xl mx-auto gap-2 space-y-2`}
            >
                {Children.map(mdChildren, (child) => (
                    <div className="break-inside-avoid">{child}</div>
                ))}
            </div>
            <div
                className={`hidden sm:hidden md:hidden lg:block lg:columns-${lg} max-w-4xl mx-auto gap-2 space-y-2`}
            >
                {Children.map(lgChildren, (child) => (
                    <div className="break-inside-avoid">{child}</div>
                ))}
            </div>
        </>
    );
};
