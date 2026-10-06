# PROMPT-MESTRE — CORREÇÃO DA VERSÃO V0.1.0 PARA V1.0.0 DO MEU DIREITO.IA

## 0. PAPEL E OBJETIVO

Atue simultaneamente como engenheiro de software sênior, especialista em UX para serviços públicos digitais, pesquisador de IA responsável, revisor de rastreabilidade jurídica e engenheiro de QA.

Você receberá o HTML funcional do **Meu Direito.IA v0.1.0**, além do relatório de auditoria da versão inicial. Sua tarefa é transformar essa linha de base em uma **V1.0.0 corrigida, rastreável e tecnicamente testável**, preservando a identidade visual e a arquitetura científica do projeto.

O objetivo NÃO é redesenhar o produto do zero. O objetivo é corrigir defeitos identificados em auditoria, tornar reais as funcionalidades que a interface afirma oferecer, remover ou sinalizar o que não estiver implementado, reforçar navegabilidade, acessibilidade e rastreabilidade, e preparar a versão para a rodada final de validação jurídica e stress test.

## 1. REGRA DE INTEGRIDADE CIENTÍFICA

Não invente funcionalidades, fontes, taxas, endereços, resultados, precisão, desempenho, citações ou datas.

Não represente como implementado aquilo que for apenas roadmap.

Não altere a versão V0.1.0 original. Preserve-a como baseline auditável.

A versão V1.0.0 deve ter uma nova identificação. Use a data real da alteração e uma data separada para a última verificação da base jurídica.

**Não retrodate artificialmente a versão.** Se o snapshot V0.1.0 continha a informação `base verificada em 11/08/2026`, mantenha esse dado como data de verificação daquela base, e não como prova automática de que o build foi criado nessa data.

Na V1.0.0, exibir algo equivalente a:

- `Meu Direito.IA — protótipo funcional`
- `Versão 1.0.0`
- `Base jurídica verificada em 14/08/2026`

Se a data real de conclusão for posterior, usar a data real.

## 2. O QUE NÃO DEVE SER MODIFICADO SEM NECESSIDADE

Preserve:

- identidade visual atual
- Manrope e Public Sans
- paleta principal `#0B1F33`, `#14666B`, `#F7F6F3`, `#EAE7E1`, `#B02A2A`, `#C08A2E`
- estrutura mobile-first aproximada de 390 x 844 px
- fundo neutro e caráter institucional
- fluxo de privacidade por padrão
- Matriz BFSI refletida na arquitetura
- triagem determinística como camada principal de classificação
- camada generativa restrita a organização do relato e identificação de lacunas
- fontes oficiais vinculadas às orientações
- escalonamento humano como salvaguarda

Não transformar o aplicativo em chatbot genérico.

## 3. ORDEM DE PRIORIDADE DAS CORREÇÕES

Implemente na ordem abaixo. Não pule os itens críticos.

### NÍVEL P0 — CRÍTICO

#### P0.1 — Separar 2ª via de CRNM de renovação e alteração de dados

Problema atual:

O fluxo `crnm` oferece as opções:

- Perdi
- Foi roubado ou furtado
- Venceu
- Preciso corrigir um dado

Todas conduzem à 2ª via.

Correção obrigatória:

1. Manter **2ª via de CRNM** apenas para hipóteses compatíveis com emissão de via de igual teor, como perda, extravio, furto, roubo ou dano.
2. Criar rota separada de **Substituição de CRNM** para correção ou alteração de dados cadastrais.
3. Para renovação, não assumir que todo caso usa a mesma rota. A página oficial informa que CRNM temporária pode exigir renovação da própria autorização de residência. Portanto, quando o usuário selecionar `Venceu`, perguntar o tipo/situação da residência antes de concluir.
4. Não apresentar boletim de ocorrência como exigência universal se a fonte oficial não o exigir para todos os subcasos.

Fontes oficiais a verificar antes de codificar:

- 2ª via de CRNM: `https://www.gov.br/pt-br/servicos/solicitar-2a-via-de-carteira-de-registro-nacional-migratorio-crnm`
- Substituição de CRNM: `https://www.gov.br/pt-br/servicos/obter-carteira-de-registro-nacional-migratorio`
- FAQ PF: `https://www.gov.br/pf/pt-br/assuntos/imigracao/pt/duvidas`

Critério de aceite:

- `Perdi / roubada / furtada / extraviada / danificada` → 2ª via
- `Corrigir dado` → Substituição
- `Venceu` → pergunta de esclarecimento e rota compatível com a situação, sem afirmar uma solução universal

#### P0.2 — Fazer `Você está no Brasil agora?` alterar efetivamente a rota

Problema atual:

A pergunta afirma que muda o órgão, mas a resposta `Não` ainda permite apresentar DELEMIG/Salvador.

Correção obrigatória:

Criar um contexto `locationContext` ou equivalente, usado por todos os fluxos.

Se `in_brazil = Não`:

- NÃO exibir DELEMIG/Salvador como órgão de atendimento local
- NÃO apresentar endereço presencial brasileiro como se fosse a próxima ação imediata
- mostrar orientação específica conforme o fluxo
- exibir fontes oficiais nacionais ou consulares pertinentes
- quando não houver rota segura e universal, explicitar incerteza e escalonar para atendimento humano

Se `in_brazil = Sim`, usar a cidade para selecionar atendimento local.

Se `city = Outra cidade`, não mostrar automaticamente contatos de Salvador ou Lauro de Freitas. Oferecer localizador/contato oficial da PF, DPU ou órgão pertinente.

Critério de aceite:

Nenhum cenário `fora do Brasil` termina com DELEMIG/Salvador como encaminhamento padrão.

#### P0.3 — Bloquear conclusão de apatridia quando o requisito territorial não estiver presente

Problema atual:

O fluxo de apatridia continua orientando pedido mesmo quando o usuário informa estar fora do Brasil.

Correção obrigatória:

A fonte oficial estabelece como requisito para utilizar o serviço **residir no Brasil**.

Se `in_brazil = Não`:

- não apresentar `Você pode solicitar reconhecimento de apatridia no Brasil` como conclusão
- apresentar aviso: `O serviço brasileiro de reconhecimento da condição de apátrida exige residência no Brasil.`
- fornecer fonte oficial
- oferecer atendimento humano/consular para esclarecer opções sem inventar uma rota alternativa

Fonte:

`https://www.gov.br/pt-br/servicos/obter-reconhecimento-como-apatrida`

Critério de aceite:

Nenhum caso fora do Brasil recebe o mesmo encaminhamento de apatridia que um residente no Brasil.

### NÍVEL P1 — MAIOR

#### P1.1 — Tornar o relato livre realmente dinâmico

Problema atual:

Entradas semanticamente diferentes produzem o mesmo conjunto demonstrativo de fatos e o botão de continuidade encaminha sempre para CRNM.

Correção obrigatória:

A camada generativa deve ser implementada de forma segura e **não deve produzir a orientação jurídica final**.

Arquitetura desejada:

`relato livre -> API server-side -> saída JSON estruturada -> confirmação do usuário -> triagem determinística -> resultado jurídico da base controlada`

A camada generativa pode apenas:

- resumir os fatos informados
- organizar cronologia
- identificar informações faltantes
- sugerir qual fluxo determinístico deve ser investigado
- sinalizar vulnerabilidade/urgência para escalonamento

A camada generativa NÃO pode:

- inventar fatos
- criar leis ou fontes
- emitir decisão jurídica final
- afirmar elegibilidade definitiva
- substituir a árvore determinística

Implementar endpoint server-side seguro. Preferir Vercel API Route ou Supabase Edge Function. Nunca expor chave de API no HTML ou JavaScript cliente.

Usar variáveis de ambiente, por exemplo:

- `AI_PROVIDER`
- `AI_API_KEY`
- `AI_MODEL`

Definir schema JSON estrito, por exemplo:

```json
{
  "facts": ["..."],
  "missing_questions": ["..."],
  "suggested_flow": "refugio|apatridia|crnm|reuniao|null",
  "needs_human": true,
  "risk_reason": "...",
  "confidence": "low|medium|high"
}
```

Nunca permitir que o modelo forneça `sourceUrl` livre. Fontes devem vir somente da base `SRC` allowlisted.

Após a análise, mostrar `Confira o que entendemos` e exigir confirmação humana antes de iniciar o fluxo.

Se a API estiver indisponível:

- não simular compreensão
- mostrar `A análise automática está indisponível. Você pode escolher o assunto e continuar pela triagem por perguntas.`

Critério de aceite:

- relatos diferentes produzem fatos diferentes quando semanticamente diferentes
- nenhuma resposta de IA gera fonte arbitrária
- o usuário confirma fatos antes da triagem
- sem API, existe fallback determinístico honesto

#### P1.2 — Corrigir o bug `startRefugioQuiz -> crnm`

Problema atual:

A função associada ao relato livre/encaminhamento usa `this.startFlow('crnm')` mesmo quando o nome indica fluxo de refúgio.

Correção:

Eliminar nomes inconsistentes e qualquer hard-code que force CRNM.

O fluxo iniciado após relato livre deve ser o `suggested_flow` confirmado pelo usuário ou uma tela de escolha quando a confiança for baixa.

Critério de aceite:

Nenhum relato é encaminhado para CRNM apenas por hard-code.

#### P1.3 — Corrigir reunião familiar com duas rotas distintas

Problema atual:

O sistema mistura:

1. familiar no exterior, que pode depender de VITEM XI/repartição consular
2. autorização de residência/registro após ingresso ou para quem já está no Brasil

Correção obrigatória:

Adicionar pergunta clara:

`O familiar que pretende se reunir está atualmente no Brasil ou no exterior?`

Se `exterior`:

- encaminhar para Visto Temporário XI / MRE / repartição consular
- não exibir automaticamente taxas brasileiras de autorização de residência e CRNM como custo atual do pedido consular
- mostrar `taxas consulares podem variar conforme a repartição. Consulte a repartição responsável.`

Se `Brasil`:

- avaliar rota de autorização de residência por reunião familiar
- mostrar taxas de autorização de residência/CRNM somente quando aplicáveis

Após ingresso com visto:

- informar registro na PF dentro do prazo oficial aplicável

Fontes:

- `https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/servicos/visto-para-reuniao-familiar`
- `https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio`
- `https://www.gov.br/pf/pt-br/assuntos/imigracao/pt/nacionalidade/objetivo/servico/documentos`

Critério de aceite:

A tela de custos nunca mistura a etapa consular com taxas da etapa residencial sem explicar a diferença.

#### P1.4 — Corrigir a fonte oficial do telefone 190

Problema atual:

O card `190 — Polícia Militar` aponta para a fonte do Disque 100.

Correção:

Criar fonte própria para emergência policial. Para Salvador/Bahia, usar fonte pública oficial que identifique Polícia Militar 190. Não reutilizar a fonte do Disque 100.

Manter:

- 190 = emergência policial
- 192 = SAMU
- 100 = Disque Direitos Humanos

Cada cartão deve ter sua própria fonte.

Critério de aceite:

Os três cartões apontam para fontes compatíveis com o serviço descrito.

#### P1.5 — Implementar transcrição de voz ou retirar a promessa

Problema atual:

O botão alterna estado visual, mas não transcreve fala.

Correção preferencial:

Implementar Web Speech API quando disponível:

- `SpeechRecognition` ou `webkitSpeechRecognition`
- idioma conforme seleção, apenas se suportado
- transcrição inserida no textarea
- indicador de escuta
- botão de parar
- tratamento de erro
- fallback para texto

Se não for possível implementar de forma confiável, remover o CTA de voz da versão V1.0.0. Não manter função fictícia.

Critério de aceite:

O botão de voz deve produzir texto real ou não existir.

#### P1.6 — Corrigir o seletor de idiomas

Problema atual:

A seleção muda apenas a variável `lang`, enquanto o conteúdo permanece em português.

Estratégia para V1.0.0:

Não ampliar artificialmente o escopo experimental.

Preferência científica:

- `Português` = funcional e validado nesta versão
- `Español`, `English`, `Français` = somente habilitar se toda a jornada essencial estiver traduzida de forma consistente
- se não houver tradução integral, exibir como `Em desenvolvimento / não validado nesta versão` e desabilitar o início do fluxo nesses idiomas

Não utilizar `suporte multilíngue` como alegação de resultado enquanto os idiomas não forem testados.

Critério de aceite:

Nenhum idioma selecionável conduz a uma interface majoritariamente em português sem aviso explícito.

### NÍVEL P2 — MENOR, MAS OBRIGATÓRIO ANTES DA VERSÃO FINAL

#### P2.1 — Corrigir custo de solicitação de refúgio

A Coordenação-Geral do Conare informa que seus serviços são gratuitos.

Alterar o custo de `Precisa confirmar` para uma formulação verificável, como:

- `Gratuito`
- `R$ 0,00`
- `Os serviços da Coordenação-Geral do Conare são gratuitos.`

Vincular fonte oficial.

Fonte:

`https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/servicos`

#### P2.2 — Corrigir custo do DPRNM

Alterar `Ver página oficial` para:

- `Sem custo`
- `R$ 0,00`

Fonte:

`https://www.gov.br/pt-br/servicos/obter-documento-provisorio-de-registro-nacional-migratorio`

#### P2.3 — Implementar ou remover controles ligados a `noop`

Controles identificados:

- Excluir meus dados
- Aumentar texto
- Alto contraste
- Reduzir animações

Não manter botões sem ação.

Implementar:

**Aumentar texto**
- alternar classe global de fonte ampliada
- preservar layout
- estado persistente apenas localmente, se necessário

**Alto contraste**
- aplicar classe de contraste reforçado
- respeitar contraste WCAG

**Reduzir animações**
- aplicar `prefers-reduced-motion` e classe específica
- remover transições não essenciais

**Excluir meus dados**
- se ainda não existe persistência no backend, explicar `Nenhum dado pessoal foi salvo neste dispositivo/conta por esta versão`, conforme a realidade
- se persistência for implementada, criar exclusão real e confirmação de sucesso

Critério de aceite:

Zero controles visíveis apontando para `noop`.

## 4. CORREÇÕES DE NAVEGABILIDADE E UX

Além dos bugs acima, faça uma revisão de navegação sem transformar a interface.

### 4.1 Manter orientação constante

Em cada tela, o usuário deve compreender:

- onde está
- por que a pergunta está sendo feita
- qual é o próximo passo
- como voltar
- como pedir ajuda humana

### 4.2 Atendimento humano sempre disponível

Manter um CTA discreto, mas visível, de atendimento humano em todas as etapas relevantes.

Não apresentar atendimento humano apenas como saída de emergência. Também deve ser alternativa para:

- dúvida
- informação insuficiente
- cidade não mapeada
- caso fora do escopo
- baixa confiança

### 4.3 Cidade fora do recorte

Se `Outra cidade`:

- não inventar endereço local
- oferecer links oficiais para localizar unidade da PF e DPU
- explicar que esta versão possui mapeamento presencial específico apenas para Salvador e Lauro de Freitas

### 4.4 Linguagem

Manter frases curtas e claras.

Evitar juridiquês.

Não infantilizar o usuário.

Quando houver termo necessário, usar explicação curta em linguagem comum.

Exemplo:

`CRNM — documento de identificação da pessoa migrante registrada no Brasil.`

## 5. CAMADA DE FONTES E RASTREABILIDADE

Antes de finalizar a V1.0.0, auditar TODAS as entradas do objeto `SRC`.

Para cada fonte, verificar:

- URL responde
- órgão correto
- título condiz com o conteúdo
- alegação no app é realmente sustentada pela página
- data da última verificação
- se a informação é estática ou dinâmica

Criar arquivo `source_manifest_v1.json` com estrutura:

```json
{
  "verified_at": "2026-08-14",
  "sources": [
    {
      "key": "refugio",
      "org": "GOV.BR / MJSP",
      "title": "Solicitar Refúgio pela primeira vez no Brasil",
      "url": "...",
      "status": "verified",
      "supports": ["procedimento", "órgão", "etapas"],
      "dynamic": false
    }
  ]
}
```

Também gerar `source_audit_v1.csv` com as colunas:

- key
- org
- url
- http_status
- verified_at
- claim_supported
- action_taken

### Fontes oficiais prioritárias que devem ser revisadas na V1

- Refúgio: `https://www.gov.br/pt-br/servicos/solicitar-refugio`
- Serviços do Conare: `https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/servicos`
- Sisconare: `https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/sisconare`
- DPRNM: `https://www.gov.br/pt-br/servicos/obter-documento-provisorio-de-registro-nacional-migratorio`
- Apatridia: `https://www.gov.br/pt-br/servicos/obter-reconhecimento-como-apatrida`
- Informações institucionais sobre apatridia: `https://www.gov.br/mj/pt-br/assuntos/seus-direitos/migracoes/apatridia`
- 2ª via CRNM: `https://www.gov.br/pt-br/servicos/solicitar-2a-via-de-carteira-de-registro-nacional-migratorio-crnm`
- Substituição CRNM: `https://www.gov.br/pt-br/servicos/obter-carteira-de-registro-nacional-migratorio`
- Autorização de residência: `https://www.gov.br/pt-br/servicos/obter-autorizacao-de-residencia-e-carteira-de-registro-migratorio`
- Documentação PF: `https://www.gov.br/pf/pt-br/assuntos/imigracao/pt/nacionalidade/objetivo/servico/documentos`
- Taxas PF: `https://www.gov.br/pf/pt-br/assuntos/imigracao/card/taxas`
- Reunião familiar: `https://www.gov.br/mj/pt-br/assuntos/seus-direitos/refugio/servicos/visto-para-reuniao-familiar`
- SAMU 192: `https://www.gov.br/saude/pt-br/composicao/saes/samu-192`
- Disque 100: `https://www.gov.br/pt-br/servicos/denunciar-violacao-de-direitos-humanos`

Para 190 em Salvador/Bahia, localizar e utilizar uma fonte oficial compatível com o serviço, preferencialmente órgão público baiano ou municipal que identifique expressamente `Polícia Militar — 190`.

## 6. REFERENCIAL JURÍDICO E LIMITES DE AUTORIDADE

Não transforme o aplicativo em parecer jurídico.

Separar visualmente, quando útil:

- **Fonte oficial do procedimento**
- **Base normativa**

Base normativa pode incluir somente normas realmente pertinentes ao fluxo, sem sobrecarregar a interface.

Exemplos de diplomas que podem aparecer na camada de referência, se vinculados ao fluxo correspondente:

- Lei nº 13.445/2017 — Lei de Migração
- Decreto nº 9.199/2017
- Lei nº 9.474/1997 — Refúgio
- Portaria Interministerial nº 5/2018 — apatridia, quando pertinente
- Portaria Interministerial nº 12/2018 — reunião familiar, quando pertinente

Nunca usar projeto de lei ou proposta autoral como se fosse direito vigente.

Se futuramente o autor fornecer seu próprio projeto de lei, ele deverá ser tratado no artigo como **antecedente propositivo ou conexão de política pública**, e não como fundamento jurídico para orientar o usuário no aplicativo.

## 7. PRIVACIDADE E DADOS

Preservar a regra já existente de que o usuário não precisa informar nome, CPF, número de documento ou endereço para a orientação inicial.

Não adicionar coleta de dados apenas para melhorar métricas.

Se Supabase for utilizado:

- não armazenar relato completo por padrão
- adotar minimização
- usar consentimento explícito para salvar plano
- permitir exclusão real quando houver persistência
- separar dados de atendimento da base normativa
- não colocar segredos no cliente
- documentar tabelas, políticas de retenção e RLS

Criar `PRIVACY_IMPLEMENTATION.md` explicando apenas o que foi realmente implementado.

## 8. CRITÉRIOS DE ACEITE DA V1.0.0

A versão só pode ser considerada pronta para revalidação quando todos os itens abaixo forem verdadeiros:

1. Renovação/correção de CRNM não cai mais automaticamente em 2ª via.
2. `Fora do Brasil` altera efetivamente a jornada.
3. Apatridia fora do Brasil não recebe encaminhamento incompatível com o requisito de residência.
4. Relato livre não contém fatos demonstrativos fixos.
5. Nenhum relato é hard-coded para CRNM.
6. Reunião familiar separa rota consular e rota de residência.
7. 190, 192 e 100 possuem fontes próprias e corretas.
8. Voz transcreve ou o botão foi removido.
9. Idiomas não implementados não se apresentam como plenamente disponíveis.
10. Refúgio e DPRNM exibem custo conforme fonte oficial.
11. Zero botões visíveis ligados a `noop`.
12. Nenhuma cidade fora do recorte recebe endereço local inventado.
13. Todas as fontes do `SRC` possuem auditoria documentada.
14. O app funciona sem IA por fallback determinístico honesto.
15. A camada generativa nunca cria fonte jurídica livre.
16. O usuário confirma os fatos organizados antes da triagem.
17. Nenhuma chave ou segredo está exposto no cliente.
18. A versão e a data de verificação da base estão visíveis.

## 9. TESTES QUE DEVEM SER EXECUTADOS PELO PRÓPRIO CLAUDE APÓS AS CORREÇÕES

Não apenas edite. Teste.

### 9.1 Regressão dos achados V0.1.0

Criar teste automatizado para cada ID:

- J001
- J004
- J005
- F001
- F002
- F003
- F004
- F005
- J006
- F006
- J002
- J003

Cada teste deve ter:

- entrada
- resultado esperado
- resultado observado
- status PASS/FAIL

### 9.2 Teste combinatório

Reexecutar a enumeração das combinações determinísticas após a correção.

Registrar:

- número de combinações
- exceções
- caminhos incompletos
- saídas undefined
- falhas de escalonamento

### 9.3 Testes de navegação

Cobrir, no mínimo:

- voltar
- reiniciar
- idioma
- relato livre
- fluxo por categoria
- documentos
- custos
- onde fazer
- fontes
- plano final
- atendimento humano

### 9.4 Teste de links

Validar todos os links externos cadastrados e registrar HTTP status.

Não considerar o teste aprovado apenas porque a URL responde. Conferir se o conteúdo suporta a alegação.

## 10. ENTREGÁVEIS OBRIGATÓRIOS

Ao final, entregar:

1. `Meu_Direito_IA_V1.html` ou estrutura equivalente de projeto
2. `CHANGELOG_V0.1_to_V1.md`
3. `source_manifest_v1.json`
4. `source_audit_v1.csv`
5. `regression_results_v1.json`
6. `regression_results_v1.csv`
7. `PRIVACY_IMPLEMENTATION.md`
8. `.env.example` sem segredos, caso exista backend generativo
9. arquivos de backend/API necessários para relato livre
10. `README_V1.md` com instruções mínimas para rodar localmente e publicar no Vercel/Supabase

## 11. FORMATO DO CHANGELOG

Para cada correção, registrar:

| ID | Severidade | Problema V0.1.0 | Correção V1.0.0 | Fonte/justificativa | Teste de regressão | Status |
|---|---|---|---|---|---|---|

Nunca escrever `corrigido` sem teste correspondente.

## 12. PRINCÍPIO FINAL

A V1.0.0 deve ser mais segura e mais correta, não apenas mais bonita.

A prioridade é:

**correção jurídica → segurança → rastreabilidade → navegabilidade → acessibilidade → estética**.

Toda mudança deve preservar o princípio científico central do Meu Direito.IA:

**a tecnologia organiza e orienta a primeira etapa da demanda, mas não substitui a autoridade pública, a análise jurídica profissional nem a decisão humana.**
