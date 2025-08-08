import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validação dos dados
    const { nome, email, telefone, interesse, experiencia, mensagem } = body

    if (!nome || !email || !interesse) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Aqui você pode:
    // 1. Salvar no banco de dados
    // 2. Enviar email de confirmação
    // 3. Integrar com CRM
    // 4. Enviar para webhook

    console.log("Nova inscrição recebida:", {
      nome,
      email,
      telefone,
      interesse,
      experiencia,
      mensagem,
      timestamp: new Date().toISOString(),
    })

    // Simular processamento
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Inscrição realizada com sucesso!",
      data: {
        id: Math.random().toString(36).substr(2, 9),
        nome,
        email,
        interesse,
      },
    })
  } catch (error) {
    console.error("Erro ao processar inscrição:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
