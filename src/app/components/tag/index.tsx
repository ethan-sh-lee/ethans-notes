
export const Tag = ({ name }: { name: string }) => {
    return (
        <span className="text-xs uppercase font-bold tracking-wider bg-gray-300 text-gray-600 dark:text-gray-300 dark:bg-gray-600  inline-block px-2 py-1 rounded">{name}</span>
    )
}