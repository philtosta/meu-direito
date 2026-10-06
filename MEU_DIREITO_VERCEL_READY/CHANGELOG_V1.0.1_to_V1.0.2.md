# CHANGELOG — Meu Direito.IA V1.0.1 → V1.0.2

Data: 14/08/2026
Estado: **CANDIDATA AO CONGELAMENTO, AGUARDANDO AUDITORIA INDEPENDENTE**

V0.1.0, V1.0.0 e V1.0.1 permanecem intactas, com seus artefatos e manifestos. Nada foi redesenhado e nenhuma área jurídica nova foi acrescentada.

## FG-01 — CRÍTICO — Refúgio fora do Brasil

- Novo estado `refugio_location_blocked` (`REFUGIO_LOCATION_BLOCK`), aplicado quando `in_brazil = Não`.
- A solicitação de refúgio deixa de ser apresentada como rota disponível nesse caso, e a certeza deixa de ser `direct`.
- Texto exibido: “Para solicitar refúgio ao Brasil, é preciso já estar no território brasileiro. Não é possível protocolar o pedido de refúgio brasileiro estando em outro país.”
- Vinculado à fonte oficial do serviço (MJSP/GOV.BR) e aos serviços do Conare.
- Consulado não é apresentado como local de protocolo. Nenhuma rota alternativa é inventada; a delimitação é explícita quanto ao procedimento brasileiro coberto pelo sistema.
- Pontos de atendimento reduzidos à DPU (atendimento humano) e leitura da fonte oficial.

## FG-02 — MAIOR — Fim da regra global “outside → consular”

- Removida a inserção automática de `consular` para qualquer fluxo quando a localização é externa.
- Cada fluxo e cada variante agora declaram `outsidePoints`, `outsideSummary` e `outsideBody`.
- Refúgio: bloqueio territorial (FG-01).
- Apatridia: `APATRIDIA_BLOCK` perdeu o passo consular, o ponto `consular` e a fonte `mre`; o texto “a etapa consular é o canal oficial para quem está fora do Brasil” foi removido. O pedido continua descrito como SisApatridia, com fonte e atendimento humano.
- CRNM: consulado não é rota de segunda via, substituição ou renovação; o texto registra que as etapas presenciais ocorrem no Brasil e que Autorização de Retorno ao Brasil não é inferida sem pergunta própria e fonte específica.
- Reunião familiar: a etapa consular decorre da localização da pessoa que precisa do visto (FG-04), e as variantes marcam `pointsFromFlow: true`, impedindo sobrescrita pela localização do respondente.

## FG-03 — MAIOR — CRNM 2ª via exige autorização de residência válida

- Nova pergunta na variante `via2`: “Sua autorização de residência está válida?” (Sim / Não / Não sei — preciso confirmar).
- Sim: a rota segue, sem afirmar elegibilidade além do informado.
- Não: `CRNM_VIA2_RES_BLOCK` — a segunda via não é apresentada como rota direta; o encaminhamento é a verificação da autorização de residência, com fonte oficial.
- Não sei: `CRNM_VIA2_RES_UNKNOWN` — `needs_info`, sem suposição, com fonte oficial e atendimento humano.
- O texto distingue explicitamente validade da autorização de residência e validade do cartão da CRNM.

## FG-04 — MAIOR — Reunião familiar: ator juridicamente relevante

- Pergunta `where_fam` substituída por duas perguntas: “Quem precisa do visto ou da autorização de residência?” (Eu / Meu familiar / Não sei) e “Essa pessoa está atualmente no Brasil ou no exterior?” (No Brasil / No exterior / Não sei).
- A variante passa a depender da segunda resposta: exterior → etapa consular de visto; Brasil → autorização de residência; não sei → sem rota definida e atendimento humano.
- `in_brazil` continua localizando o atendimento do próprio respondente, sem sobrescrever a variante.
- Critério de regressão atendido por construção: as variantes de reunião familiar declaram os próprios pontos, de modo que “autorização de residência no Brasil” não recebe ponto consular e “etapa consular” não recebe DELEMIG.

## FG-05 — MAIOR — Refúgio: fatos insuficientes não geram certeza direta

- `REFUGIO_INSUFFICIENT` (`needs_info`) aplicado quando `fear = Não` (inclusive quando há motivos marcados, hipótese de contradição) e quando a pergunta é pulada ou respondida com “prefiro não responder” sem fundamento material informado.
- `fear = Sim` mantém orientação procedimental sem afirmação de elegibilidade; motivos materiais marcados também mantêm o procedimento, sem afirmar elegibilidade.
- Texto exibido: “As informações fornecidas ainda não são suficientes para indicar o pedido de refúgio como o caminho principal. Você pode conhecer o procedimento oficial, responder novamente ou buscar atendimento humano.”
- Acesso à fonte oficial preservado, com ações de responder novamente e atendimento humano.

## FG-06 — MENOR — Localização desconhecida

- `whereSummary` para `unknown`/não respondido: “Precisamos confirmar sua localização antes de indicar o órgão.”
- Para `outside`, o resumo passa a vir do `outsideSummary` do fluxo, sem string global de encaminhamento consular.

## FG-07 — TÉCNICO — Identidade da versão

- `APPV = '1.0.2'`; interface, tela “Como funciona”, cabeçalho, plano impresso e registro salvo passam a 1.0.2.
- Novos artefatos com sufixo v1.0.2. Artefatos anteriores preservados sem alteração.

## FG-08 — TÉCNICO — Runtime generativo

- Não há credenciais nem endpoint server-side disponíveis neste ambiente; nenhum provedor, modelo ou parâmetro foi configurado ou inferido.
- `AI_RUNTIME_MANIFEST_V1.0.2.json` declara todos os campos como NÃO CONFIGURADO/null e registra explicitamente: camada generativa **não pronta** para validação experimental final.
- O runtime de prototipagem do ambiente permanece rotulado como demonstração, não como endpoint reprodutível.

## Base jurídica

Nenhuma fonte foi adicionada, removida ou alterada. Mudou o escopo de uso de três fontes (`mre`, `crnm2via`, `refugio`), registrado em `source_manifest_v1.0.2.json` e `source_audit_v1.0.2.csv`.
