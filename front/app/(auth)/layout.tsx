
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="min-h-screen h-screen grid grid-cols-2 gap-1 ">
                <section className="border">
                    <p>Right content</p>
                </section>
                <section className="border p-4 box-border">
                    {children}
                </section>
            </main>

        </>
    )
}