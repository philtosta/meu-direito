# PROMPT DE CORREÇÃO FINAL — MEU DIREITO.IA V1.0.1 → V1.0.2
## Objetivo: candidata real ao congelamento experimental

Você está corrigindo o Meu Direito.IA após uma auditoria independente de pré-congelamento. Preserve integralmente V0.1.0, V1.0.0 e V1.0.1. Crie um arquivo novo V1.0.2.

Não redesenhe a aplicação. Não acrescente novas áreas jurídicas. Corrija somente os achados abaixo e tudo que for estritamente necessário para manter coerência lógica.

## REGRA CIENTÍFICA

Não declare a V1.0.2 “validada”, “congelada”, “100% correta” ou “sem erros”. Ao final, classifique apenas como **CANDIDATA AO CONGELAMENTO, AGUARDANDO AUDITORIA INDEPENDENTE**.

Não fabrique testes, métricas, status HTTP, latência, modelo ou endpoint.

---

## FG-01 — CRÍTICO — REFÚGIO FORA DO BRASIL

A lógica atual mantém o fluxo de refúgio como `direct` quando `in_brazil = Não` e ainda adiciona um ponto consular genérico.

Corrigir para:

- se a pessoa estiver fora do Brasil, NÃO apresentar “Solicitação de refúgio” como rota disponível naquele momento
- informar claramente: **“Para solicitar refúgio ao Brasil, é preciso já estar no território brasileiro. Não é possível protocolar o pedido de refúgio brasileiro estando em outro país.”**
- vincular essa informação à fonte oficial do Ministério da Justiça
- não apresentar consulado como local de protocolo do pedido de refúgio
- oferecer leitura da fonte oficial e atendimento humano
- não inventar rota alternativa
- não negar que a pessoa possa buscar outras formas de proteção, apenas delimitar o procedimento brasileiro coberto pelo sistema

Criar estado próprio, por exemplo `refugio_location_blocked`.

---

## FG-02 — MAIOR — REMOVER A REGRA GLOBAL “OUTSIDE → CONSULAR”

A função global de localização não pode inserir `consular` automaticamente em todos os fluxos.

Hoje existe comportamento conceitualmente equivalente a:

```js
if (loc === 'outside') {
  remove delemig/pfLocator
  add consular
}
```

Remover a parte que adiciona consulado universalmente.

Cada fluxo deve declarar explicitamente os seus pontos válidos no exterior.

### Refúgio
Bloqueio territorial do FG-01. Consulado não é local de protocolo de refúgio.

### Apatridia
O serviço oficial brasileiro exige residir no Brasil e o pedido é apresentado via SisApatridia. Se o requisito não estiver atendido, não inventar “etapa consular”. Mostrar fonte + atendimento humano.

Remover do `APATRIDIA_BLOCK` qualquer frase equivalente a:
- “a etapa consular é o canal oficial para quem está fora do Brasil”
- “procure o consulado para solicitar apatridia”

O portal consular só pode ser oferecido como contato geral se houver razão concreta e sem apresentá-lo como órgão do pedido de apatridia.

### CRNM
Não tratar consulado como rota automática para segunda via/substituição/renovação. O serviço de CRNM pertence à Polícia Federal e possui etapas presenciais no Brasil.

Se futuramente houver hipótese específica de Autorização de Retorno ao Brasil, ela só poderá ser apresentada após pergunta própria e fonte específica. Não inferir ARB apenas porque a pessoa está fora do Brasil.

### Reunião familiar
A etapa consular pode existir, mas deve decorrer da localização da pessoa que precisa do visto, e não de uma regra global.

---

## FG-03 — MAIOR — CRNM 2ª VIA EXIGE AUTORIZAÇÃO DE RESIDÊNCIA VÁLIDA

A fonte oficial da segunda via informa que o serviço é destinado a estrangeiros que possuem CRNM/CIE **com autorização de residência válida**.

Na variante `via2`, adicionar verificação específica:

**“Sua autorização de residência está válida?”**

Opções:
- Sim
- Não
- Não sei / preciso confirmar

Comportamento:

### Sim
A rota de segunda via pode continuar, sem afirmar elegibilidade além do que foi informado.

### Não
Não apresentar a segunda via como rota direta. Explicar que a fonte oficial exige autorização de residência válida e direcionar para verificação da situação migratória/autorização de residência.

### Não sei
`needs_info`, sem suposição. Fonte oficial + atendimento humano.

Não confundir validade da CRNM física com validade da autorização de residência.

---

## FG-04 — MAIOR — REUNIÃO FAMILIAR: DEFINIR O ATOR JURIDICAMENTE RELEVANTE

A aplicação precisa parar de misturar:
- localização de quem está preenchendo
- localização da pessoa que precisa do visto/autorização
- localização do familiar chamante

Reformular a etapa de reunião familiar para identificar explicitamente:

**“Quem precisa do visto ou da autorização de residência?”**
- Eu
- Meu familiar
- Não sei

Depois perguntar:

**“Essa pessoa está atualmente no Brasil ou no exterior?”**
- No Brasil
- No exterior
- Não sei

A escolha da variante deve depender desta segunda resposta:

- exterior → etapa consular de visto, quando juridicamente aplicável
- Brasil → autorização de residência, quando juridicamente aplicável
- não sei → sem rota definida + atendimento humano

A pergunta global `in_brazil` pode continuar servindo para localizar atendimento da própria pessoa, mas NÃO deve sobrescrever a variante de reunião familiar.

Critério de regressão obrigatório:
- nunca permitir título “autorização de residência no Brasil” com ponto consular adicionado apenas porque o respondente está fora do Brasil
- nunca permitir título “etapa consular” com DELEMIG adicionada apenas porque o respondente está no Brasil

---

## FG-05 — MAIOR — REFÚGIO: FATOS INSUFICIENTES NÃO PODEM GERAR CERTEZA DIRETA

A V1.0.1 permanece `direct` mesmo quando:
- `fear = Não`
- e nenhuma informação fornecida sustenta a rota apresentada

Não cabe ao aplicativo decidir reconhecimento de refúgio. Também não cabe afirmar que o pedido é “o caminho mais adequado” quando os próprios dados informados são insuficientes ou contraditórios.

Criar regra conservadora.

Exemplo mínimo:

- medo de retorno = Sim → pode manter orientação procedimental, sem afirmar elegibilidade
- grave e generalizada violação/conflito = marcado → pode apresentar procedimento, sem afirmar elegibilidade
- medo = Não e nenhum fundamento material compatível foi informado → `needs_info`
- “prefiro não responder” + ausência de informação suficiente → `needs_info`
- fatos contraditórios → `needs_info`

Quando `needs_info`, usar texto como:

**“As informações fornecidas ainda não são suficientes para indicar o pedido de refúgio como o caminho principal. Você pode conhecer o procedimento oficial, responder novamente ou buscar atendimento humano.”**

Não impedir acesso à fonte oficial.

---

## FG-06 — MENOR — LOCALIZAÇÃO DESCONHECIDA

Hoje o código remove corretamente os órgãos territoriais quando `loc = unknown`, mas o resumo visual ainda diz “Encaminhamento consular”.

Corrigir `whereSummary`.

Para `unknown`, usar:

**“Precisamos confirmar sua localização antes de indicar o órgão.”**

Para `outside`, o resumo deve ser definido por cada fluxo, e não por uma string global “consular”.

---

## FG-07 — TÉCNICO — IDENTIDADE DA VERSÃO

O arquivo V1.0.1 exibe 1.0.1, porém contém:

```js
const APPV = '1.0.0';
```

Na V1.0.2:

```js
const APPV = '1.0.2';
```

Atualizar de forma consistente:
- interface
- APPV
- README
- manifestos
- changelog
- registros salvos
- nomes dos novos arquivos

Preservar hashes/artefatos anteriores sem alteração.

---

## FG-08 — TÉCNICO/EXPERIMENTAL — RUNTIME GENERATIVO

Não inventar provedor ou modelo.

Se houver credenciais e endpoint realmente disponíveis neste ambiente, configurar a rota server-side e documentar:
- provider
- model
- prompt_version
- temperature
- top_p
- max_tokens
- KB version
- endpoint

Se não houver, manter os campos como não configurados e declarar explicitamente que a camada generativa ainda NÃO está pronta para validação experimental final.

Não usar o runtime de prototipagem como se fosse endpoint reprodutível.

---

# TESTES INTERNOS DA V1.0.2

Executar e registrar, se o ambiente permitir:

1. regressão de todos os quatro fluxos
2. caminhos `in_brazil = Não`
3. caminhos `in_brazil = unknown`
4. refúgio fora do Brasil
5. refúgio com `fear=Não` e sem fundamento suficiente
6. CRNM via2 com residência válida / inválida / desconhecida
7. apatridia com residência sim / não / desconhecida
8. reunião familiar com respondente em localização diferente da pessoa beneficiária
9. parser pós-modelo
10. persistência local

Se uma suíte não puder ser executada, escrever **NÃO EXECUTADO**.

---

# ENTREGÁVEIS

Criar:

- `Meu Direito IA V1.0.2.dc.html`
- `CHANGELOG_V1.0.1_to_V1.0.2.md`
- `regression_results_v1.0.2.json`
- `regression_results_v1.0.2.csv`
- `source_manifest_v1.0.2.json`
- `source_audit_v1.0.2.csv`
- `AI_RUNTIME_MANIFEST_V1.0.2.json`
- `README_V1.0.2.md`

Preservar todos os arquivos anteriores.

Ao final, responder com:
1. correções implementadas por FG-ID
2. testes realmente executados
3. testes não executados
4. limitações residuais
5. estado recomendado: **CANDIDATA AO CONGELAMENTO, AGUARDANDO AUDITORIA INDEPENDENTE**
