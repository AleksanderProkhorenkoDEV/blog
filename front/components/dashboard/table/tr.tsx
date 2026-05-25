export const Tr = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <tr className={`${className}`}>
            {children}
        </tr>
    )
}