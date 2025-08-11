"use client"

import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../dialog"
import Button from "../buttons/button"
import { CheckCircle, Mail, Phone, Calendar, BookOpen } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  userData: {
    nome: string
    email: string
    interesse: string
  }
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, userData }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-[#00b153]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-[#00b153]" />
            </div>
            <DialogTitle className="text-2xl font-bold text-[#05365F]">Inscrição Realizada! 🎉</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="text-center">
            <p className="text-gray-600">
              Olá <span className="font-semibold text-[#05365F]">{userData.nome}</span>! Sua inscrição foi realizada com
              sucesso.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#00b153]/5 to-[#05365F]/5 p-6 rounded-lg border border-[#00b153]/20">
            <h4 className="font-semibold text-[#05365F] text-lg mb-4 text-center">Próximos Passos:</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-[#00b153] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">
                  <strong>E-mail de confirmação</strong> enviado para {userData.email}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-[#05365F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">
                  <strong>Contato da equipe</strong> em até 24 horas
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-[#00b153] rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">
                  <strong>Acesso aos cursos</strong> de {userData.interesse}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 bg-[#05365F] rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">
                  <strong>Cronograma personalizado</strong> será enviado
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={onClose} className="flex-1 bg-[#00b153] hover:bg-[#00b153]/90 text-white">
              Continuar Navegando
            </Button>
            <Button
              className="flex-1 border-[#05365F] text-[#05365F] hover:bg-[#05365F] hover:text-white bg-transparent"
              onClick={() => window.open("mailto:contato@edutec.com", "_blank")}
            >
              Falar com Suporte
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SuccessModal
