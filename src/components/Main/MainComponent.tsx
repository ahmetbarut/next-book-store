export default function MainComponent({children}: {children: React.ReactNode}) {
    return (
        <main className="container mx-auto border p-3">
            {children}
        </main>
    );
}