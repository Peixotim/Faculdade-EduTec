export default function Seta() {
    return (
        <div className="scrollUp fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors">
            <a href="#top" className="flex items-center justify-center" title="Voltar ao topo" aria-label="Voltar ao topo"/>
                <span className="sr-only">Voltar ao topo</span>
            <a href="#top" className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </a>
        </div>
    );
}