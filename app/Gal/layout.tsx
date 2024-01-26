

export default function GalLayout(
    { children } : {
        children: React.ReactNode
    }
) {
    return (
        <main className="min-h-screen w-screen " >
            {children} 
        </main>
     
    )
}