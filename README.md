# 🚀 EduTec - Plataforma de Cursos Técnicos

> Uma plataforma moderna e performática para a faculdade EduTec, especializada na venda de cursos técnicos. O projeto foi desenvolvido com **Next.js 14+**, com forte ênfase em **SEO (Search Engine Optimization)** para garantir máxima visibilidade orgânica e uma experiência de usuário impecável.

-----

## 💡 Sobre o Projeto

A EduTec é uma instituição de ensino que necessitava de uma presença digital robusta para atrair e converter novos alunos para seus cursos técnicos. O objetivo deste projeto foi criar um site que não fosse apenas um catálogo de cursos, mas uma poderosa ferramenta de marketing e vendas.

A escolha do **Next.js** foi estratégica para unir o melhor de dois mundos:

1.  **Performance Extrema:** Páginas que carregam instantaneamente, graças à Geração de Sites Estáticos (SSG) e Renderização no Servidor (SSR).
2.  **SEO de Ponta:** Uma estrutura que permite otimização total para motores de busca, garantindo que os cursos da EduTec sejam encontrados facilmente no Google.

O site se conecta a um banco de dados para gerenciar dinamicamente todos os cursos, matrículas e conteúdos, garantindo que a informação esteja sempre atualizada.

-----

## ✨ Principais Funcionalidades

### Para o Aluno/Visitante:

  * **Catálogo de Cursos Dinâmico:** Cursos carregados diretamente do banco de dados, com filtros e sistema de busca.
  * **Páginas de Cursos Otimizadas:** Cada curso possui uma página dedicada com descrição completa, grade curricular, corpo docente e informações para matrícula.
  * **Design Totalmente Responsivo:** Experiência perfeita em desktops, tablets e smartphones.
  * **Blog/Área de Notícias:** Para publicação de conteúdo relevante e estratégias de Inbound Marketing.
  * **Formulário de Inscrição/Contato:** Conectado diretamente à equipe de matrículas.

### Funcionalidades Técnicas:

  * **SEO Avançado:** Implementação completa de práticas de SEO (veja detalhes abaixo).
  * **Integração com Banco de Dados:** Gestão de conteúdo de forma dinâmica e escalável.
  * **Geração Estática (SSG):** As páginas dos cursos e do blog são pré-renderizadas no momento da build, resultando em um carregamento quase instantâneo e melhorando o ranking no Google.
  * **Renderização no Servidor (SSR):** Para páginas que precisam de dados em tempo real, como um possível painel do aluno.
  * **API Routes:** Endpoints de API próprios para lidar com formulários e outras lógicas de backend.

-----

## 🎯 Foco em SEO (O Grande Diferencial)

Este projeto não apenas "tem" SEO, ele foi *construído* em torno do SEO.

  - ✅ **Metadata API do Next.js:** Geração dinâmica de tags `<title>` e `<meta name="description">` para cada página, extraindo informações do banco de dados.
  - ✅ **Sitemap Dinâmico (`sitemap.xml`):** O sitemap é gerado automaticamente com todas as rotas públicas, informando ao Google exatamente quais páginas indexar.
  - ✅ **Rich Snippets (JSON-LD):** Implementação de Schema Markup para cursos (`Course`) e artigos (`Article`), fazendo com que eles se destaquem nos resultados de busca.
  - ✅ **Semântica HTML5:** Uso correto de tags como `<main>`, `<article>`, `<section>`, `<nav>` para melhor interpretação pelos crawlers.
  - ✅ **Performance é Rei:** Scores altíssimos no Google PageSpeed Insights graças às otimizações de imagem (`next/image`), fontes (`next/font`) e estratégias de renderização do Next.js.
  - ✅ **Arquivo `robots.txt`:** Para instruir os robôs de busca sobre como rastrear o site.

-----

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **Next.js** | Framework React para produção, com foco em performance e SEO. |
| **React** | Biblioteca para construção das interfaces de usuário. |
| **TypeScript** | Superset do JavaScript que adiciona tipagem estática ao código. |
| **Tailwind CSS** | Framework de CSS utility-first para estilização rápida e moderna. |
| **[Seu Banco de Dados]** | Ex: **PostgreSQL**, **MongoDB**, **MySQL**. |
| **[Seu ORM/Client]** | Ex: **Prisma**, **Drizzle ORM**, **Mongoose**. |
| **Vercel** | Plataforma de deploy otimizada para projetos Next.js. |

-----

## 🏁 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/DesenvolvedoresRJ/EduTec.git
    cd EduTec
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Configure as Variáveis de Ambiente:**

      - Renomeie o arquivo `.env.example` para `.env.local`.
      - Preencha as variáveis com as suas credenciais.

    <!-- end list -->

    ```env
    # Exemplo de .env.local
    DATABASE_URL="sua_string_de_conexao_com_o_banco"
    NEXT_PUBLIC_SITE_URL="http://localhost:3000"
    ```

4.  **Execute as migrações do banco de dados (se aplicável):**

    ```bash
    npx prisma migrate dev
    ```

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) em seu navegador para ver o resultado.

-----

## 🤝 Como Contribuir

Contribuições são bem-vindas\! Se você tem alguma ideia para melhorar o projeto, sinta-se à vontade para seguir estes passos:

1.  Faça um **Fork** do projeto.
2.  Crie uma nova Branch (`git checkout -b feature/SuaMelhoria`).
3.  Faça o **Commit** de suas alterações (`git commit -m 'feat: Adiciona nova funcionalidade X'`).
4.  Faça o **Push** para a sua Branch (`git push origin feature/SuaMelhoria`).
5.  Abra um **Pull Request**.

-----

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=/LICENSE) para mais detalhes.

-----

**Feito com dedicação e muito café por [Pedro Peixoto/EduTEC].**
