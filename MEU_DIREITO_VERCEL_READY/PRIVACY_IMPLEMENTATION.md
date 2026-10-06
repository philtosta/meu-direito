# PRIVACY_IMPLEMENTATION — Meu Direito.IA (atualizado para a V1.0.1)

Descreve **apenas o que existe**. Roadmap está marcado como roadmap.

## Implementado

- Nenhuma conta, e-mail, telefone, CPF, número de documento ou endereço é solicitado para chegar ao resultado.
- A triagem pergunta apenas o que muda a rota: localização física em nível de município, residência no Brasil (no fluxo de apatridia), faixa de idade e circunstâncias da demanda.
- O protótipo não possui backend próprio: sem banco de dados, sem tabela de atendimento, sem telemetria.
- O relato livre é enviado apenas para a organização de fatos e não é gravado pelo aplicativo.
- A saída da camada generativa passa por validação pós-modelo antes de ser exibida. Conteúdo com URL, HTML, comando ou tentativa de alterar a política do sistema é rejeitado e não chega à tela.
- Nenhuma chave de API no cliente. Quando um endpoint server-side está configurado, a chamada vai para ele; quando não está, o app usa o runtime de prototipagem ou informa a indisponibilidade.
- Armazenamento local somente por ação do usuário: `mdia_plan` (plano salvo, com consentimento específico) e `mdia_a11y` (preferências de acessibilidade). O salvamento confirma a gravação antes de declarar sucesso.
- "Apagar dados deste dispositivo" remove essas chaves, limpa as classes de acessibilidade e zera as respostas da sessão, com confirmação visível.

## Não implementado (roadmap declarado)

- Persistência em Supabase, RLS, política de retenção e exclusão server-side.
- Endpoint server-side em operação: a interface de chamada existe e está documentada, mas nenhum endpoint foi implantado ou testado nesta rodada.
- Métricas agregadas de pesquisa.

## Regra permanente

Nenhum segredo no cliente. A camada generativa organiza relato e nunca produz a orientação jurídica final; as fontes exibidas vêm sempre da base controlada, nunca da resposta do modelo.
