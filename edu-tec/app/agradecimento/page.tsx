import Image from 'next/image';

export default async function AgradecimentoPage() {
  async function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await delay(5000)
  
  return (
    <>

        <Image
            src="/images/banners/1024x600.webp"
            fill
            alt="Banner Pagina"
        />
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* Overlay translúcido para destacar o modal */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fadeIn" />




            {/* Conteúdo do modal */}
            <div className="relative bg-[#f7f5ec] shadow-2xl rounded-2xl p-10 max-w-md w-full text-center transform animate-scaleIn">
                <div className="mb-6 flex justify-center">
                    <svg
                        className="w-20 h-20 text-green-500 animate-drawCheck"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                <h1 className="text-3xl font-bold text-[#05365F] hover:text-green-400 transition">Inscrição concluída!</h1>
                <p className="text-gray-600 mt-4 leading-relaxed">
                    Obrigado por se inscrever.
                    Em breve, você receberá mais informações no seu e-mail.
                </p>
                <p className="mt-6 text-sm text-gray-500 italic">
                    Estamos ansiosos para ter você conosco!
                </p>
            </div>
        </div>


    </>
  );
}
