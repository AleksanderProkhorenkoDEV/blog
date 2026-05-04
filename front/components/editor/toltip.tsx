
interface Props {
    message: string;
    command: string;
    customStyle?: string;
}

export const TolTip = ({ message, command, customStyle }: Props) => {
    return (
        <div className='group relative w-fit cursor-pointer'>
            <button className={`cursor-pointer px-0.5 ${customStyle}`}>{command}</button>
            <article className="
                            absolute bottom-full left-1/2 -translate-x-1/2 mb-1
                            bg-popover text-popever-foreground text-xs px-2 py-1 rounded whitespace-nowrap
                            opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
                            z-10
                 ">
                {message}
            </article>
        </div>
    )
}