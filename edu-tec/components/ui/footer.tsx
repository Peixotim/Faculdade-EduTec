import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Music2 } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Clock } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      <footer id="contato" className="bg-gray-900 text-white p-8 w-full">
        {/* Container que ocupa toda a largura */}
        <div className="w-full px-8">
          {/* Grid principal - 4 colunas lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 w-full">
            {/* Seção EDU TEC - 1ª coluna */}
            <div className="text-center lg:text-left">
              {/* Logo e título */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <GraduationCap
                  width={24}
                  height={24}
                  className="text-green-400"
                />
                <h1 className="text-xl font-bold text-white">Edu Tec</h1>
              </div>

              {/* Descrição */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Transformando carreiras através da educação de qualidade. Mais
                de 30 cursos de pós-graduação reconhecidos pelo MEC.
              </p>

              {/* Ícones das redes sociais */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  href="https://www.facebook.com/?locale=pt_BR"
                  className="text-gray-300 hover:text-green-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <Facebook width={20} height={20} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@edutec_brasil"
                  className="text-gray-300 hover:text-green-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <Music2 width={20} height={20} />
                </Link>
                <Link
                  href="https://www.instagram.com/edutec_brasil/"
                  className="text-gray-300 hover:text-green-400 transition-colors p-2 bg-gray-800 rounded-full hover:bg-gray-700"
                >
                  <Instagram width={20} height={20} />
                </Link>
              </div>
            </div>

            {/* Cursos Populares - 2ª coluna */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold mb-4 text-green-400 text-lg">
                Cursos Populares
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  <Link href="/cursos/saude">Área da Saúde</Link>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                    <Link href="/cursos/financas">Área de Administração e Gestão</Link>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                 <Link href="/cursos/tecnologia"> Área de Tecnologia e Informática</Link>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  <Link href="/cursos/infraestrutura">Área de Engenharia e Manutenção</Link>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                    <Link href="/cursos/infraestrutura">Área de Construção e Infraestrutura</Link>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                    <Link href="/cursos/meio-ambiente">Área do Meio Ambiente e Agropecuária</Link>
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                    <Link href="/cursos/servicos-gerais">Área de Serviços</Link>
                </li>
              </ul>
            </div>

            {/* Empresa - 3ª coluna */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold mb-4 text-green-400 text-lg">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Sobre nós
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Nossa Metodologia
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Corpo Docente
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Depoimentos
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Blog
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Trabalhe Conosco
                </li>
              </ul>
            </div>

            {/* Contato e Suporte - 4ª coluna */}
            <div className="text-center lg:text-left">
              <h3 className="font-bold mb-4 text-green-400 text-lg">
                Contato e Suporte
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Perguntas Frequentes
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Central de Ajuda
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Política de Privacidade
                </li>
                <li className="hover:text-green-400 transition-colors cursor-pointer">
                  {" "}
                  Termos de Uso
                </li>

                {/* Informações de contato com ícones */}
                <li className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-gray-300 hover:text-white transition-colors">
                  <Clock width={16} height={16} className="text-green-400" />
                  <span className="text-xs">Seg-Sex: 8h às 18h</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 hover:text-white transition-colors">
                  <Phone width={16} height={16} className="text-green-400" />
                  <Link
                    href="tel:+5531982628327"
                    className="text-xs hover:underline"
                  >
                    (31) 98262-8327
                  </Link>
                </li>

                <li className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 hover:text-white transition-colors">
                  <Mail width={16} height={16} className="text-green-400" />
                  <Link
                    href="mailto:contato@edutec.com.br"
                    className="text-xs hover:underline"
                  >
                    contato@edutec.com.br
                  </Link>
                </li>
                {/* WhatsApp link com icone */}
                <li className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 hover:text-white transition-colors">
                  <Link
                    href="https://wa.me/553182628327?text=Olá! Acessei o site da Edu Tec Brasil e tenho interesse em saber mais sobre o processo para obter meu diploma."
                    target="blank"
                    className="inline-flex items-center gap-2 text-xs hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
                  >

                    <MessageCircle
                      width={24}
                      height={24}
                      className="text-white"
                    />
                    Falar no WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Edu Tec. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              CNPJ: 61.594.318/0001-32 | Credenciada pelo MEC
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer