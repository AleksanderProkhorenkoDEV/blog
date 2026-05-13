export const Th = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <th className={`text-center align-middle font-medium p-4 ${className}`}>{children}</th>
    )
}