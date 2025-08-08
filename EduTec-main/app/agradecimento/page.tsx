import { CheckCircle, MessageCircle, Home } from "lucide-react";
import Link from "next/link";
import BackgroundWrapper from "@/components/ui/banners/backgroundwrapper";

export default async function AgradecimentoPage() {
  async function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  await delay(5000)
  
  return (
    <>
      <div className="relative">
        <BackgroundWrapper children={undefined} />
        <div className="absolute inset-0 bg-black/50 " />
        <div
          className={`transition-opacity duration-500 ${
             "opacity-100"
          }`}
        >
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 ">
            {/* Conteúdo do modal */}
            <div className="bg-[#f7f5ec] shadow-lg rounded-lg p-8 max-w-md w-full text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-[#05365F]">Obrigado</h1>
                <p className="text-gray-600 mt-2">
                  Obrigado por se inscrever.
                  <br /> Em breve, você receberá mais informações.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#05365F] text-white rounded-lg hover:bg-[#042a3c] transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Voltar para a Página Inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
