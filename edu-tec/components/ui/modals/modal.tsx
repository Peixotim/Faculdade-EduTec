"use client";

import type React from "react";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { IMaskInput } from "react-imask";
import { useRouter } from "next/navigation";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedContent?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedContent = "Matrícula",
}) => {
  const router = useRouter();

  const options: string[] = [
    "Saúde",
    "Administração e Gestão",
    "Tecnologia e Infornática",
    "Engenharia e Manutenção",
    "Construção e Infraestrutura",
    "Meio Ambiente e Agropecuária",
    "Serviços"
  ];

  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    área_de_interesse: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.whatsapp || !formData.área_de_interesse) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Inicia o loading
    setIsLoading(true);

    // Fecha o modal após breve delay
    setTimeout(() => {
      onClose();
    }, 0);

    // Redireciona após 5 segundos
    setTimeout(() => {
      setIsLoading(false);
      router.push("/agradecimento");
    }, 500);
  };

  if (!isOpen && !isLoading) return null;

  return (
    <>
      {/* Loading tela inteira */}

      {/* Modal */}
      {!isLoading && isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            {/* Botão Fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Entre em contato
              </h2>
              <p className="text-gray-600 text-sm">
                Preencha seus dados para continuar
              </p>
            </div>

            {/* Tag de Conteúdo Selecionado */}
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                Conteúdo Selecionado:
                <span className="font-bold ml-1">{selectedContent}</span>
              </div>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <IMaskInput
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onAccept={(value) =>
                    setFormData({ ...formData, whatsapp: value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                  mask="(00) 00000-0000"
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              {/* Área de interesse */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Área de Interesse <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black bg-white"
                  name="área_de_interesse"
                  id="interesse"
                  value={formData.área_de_interesse}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione uma área</option>
                  {options.map((option, index) => (
                    <option value={option} key={index}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botões */}
              <div className="flex space-x-3 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancelar
                </button>

                {isLoading ? (
                  <button
                    disabled
                    className="flex-1 px-4 py-3 bg-gray-300 text-gray-500 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="animate-spin h-5 w-5 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    <span>Enviando...</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-[#00b153] hover:bg-green-600 text-[#05365F] rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
