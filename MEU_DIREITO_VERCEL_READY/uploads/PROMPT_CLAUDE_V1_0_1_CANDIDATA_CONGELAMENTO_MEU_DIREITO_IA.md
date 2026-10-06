# PROMPT — CORREÇÃO FINAL DA V1 DO MEU DIREITO.IA
## Transição controlada: V1.0.0 → V1.0.1 (candidata ao congelamento experimental)

Você está atuando como engenheiro de software sênior, arquiteto de sistemas, auditor de qualidade e implementador técnico do **Meu Direito.IA**, um protótipo científico de acolhimento migratório e triagem jurídica inicial.

Este trabalho integra uma pesquisa submetida ao **32º Prêmio Jovem Cientista**. Portanto, a prioridade máxima não é velocidade, estética ou quantidade de funcionalidades. A prioridade é:

1. rigor técnico;
2. rigor jurídico;
3. rastreabilidade;
4. reprodutibilidade;
5. segurança;
6. coerência entre o que o sistema realmente faz e o que poderá ser afirmado no artigo científico.

## 1. Regra de preservação da linha experimental

A versão atual **V1.0.0 deve permanecer intacta como baseline auditável**.

Não sobrescreva, não renomeie e não altere silenciosamente a V1.0.0.

Crie uma nova versão:

**Meu Direito.IA V1.0.1 — candidata ao congelamento experimental**

O objetivo desta rodada é corrigir **exclusivamente os oito achados residuais identificados na auditoria independente da V1.0.0**, além dos ajustes estritamente necessários para que essas correções funcionem de forma coerente.

Não redesenhe o produto inteiro.
Não acrescente novas áreas jurídicas.
Não amplie o escopo sem necessidade.
Não altere fluxos já aprovados se a alteração não for necessária para corrigir um dos oito achados.

## 2. Princípio científico obrigatório

A V1.0.1 ainda **não deve ser descrita como “validada”, “aprovada”, “cientificamente validada”, “100% correta”, “segura”, “sem alucinações” ou equivalente**.

Você poderá executar testes de desenvolvimento e regressão, mas esses testes devem ser identificados como:

**“verificação interna de desenvolvimento”**

A validação científica independente será realizada posteriormente, sobre a versão congelada.

Nunca fabrique:
- métricas;
- porcentagens;
- resultados;
- logs;
- status HTTP;
- latências;
- acertos jurídicos;
- taxas de erro;
- conclusões de segurança.

Se algo não puder ser executado no ambiente, registre:

**“não verificado neste ambiente”**

e não substitua ausência de evidência por afirmação positiva.

---

# 3. OITO ACHADOS OBRIGATÓRIOS A CORRIGIR

## ACHADO 1 — CRÍTICO
### J007 — Apatridia: presença física não equivale a residência

### Problema atual

A V1.0.0 utiliza a pergunta:

**“Você está no Brasil agora?”**

como proxy para o requisito jurídico relacionado à apatridia.

Isso é metodologicamente e juridicamente inadequado.

“Estar fisicamente no Brasil agora” e “residir atualmente no Brasil” são condições diferentes.

A localização física serve para **encaminhamento territorial**.
A residência no Brasil serve para **verificação do requisito específico do fluxo de apatridia**.

### Correção obrigatória

No fluxo de apatridia, criar uma pergunta própria e independente:

**“Você reside atualmente no Brasil?”**

Opções mínimas:
- Sim
- Não
- Não sei / preciso de ajuda para confirmar

A pergunta geral de localização:

**“Você está no Brasil agora?”**

deve continuar existindo somente quando necessária para definir:
- atendimento no Brasil;
- rota consular;
- localização de órgão;
- atendimento humano.

### Comportamento esperado

#### Se “reside no Brasil = sim”
O fluxo pode continuar, desde que os demais requisitos estejam presentes.

#### Se “reside no Brasil = não”
Não concluir que o usuário pode solicitar o reconhecimento pela rota brasileira descrita no protótipo.

Apresentar:
- explicação objetiva;
- fonte oficial;
- indicação de que o requisito territorial não foi atendido conforme as informações fornecidas;
- atendimento humano quando pertinente.

#### Se “não sei”
Não inventar residência.
Não presumir elegibilidade.
Solicitar esclarecimento ou escalar para atendimento humano.

### Critério de aceite

A V1.0.1 deve possuir **duas variáveis semanticamente distintas**:
- localização física atual;
- residência atual.

Nenhuma delas pode sobrescrever a outra.

---

## ACHADO 2 — MAIOR
### J008 — CRNM: boletim de ocorrência em extravio, furto ou roubo

### Problema atual

O fluxo de segunda via da CRNM não trata adequadamente a hipótese de **extravio** em relação ao boletim de ocorrência.

A interface atual agrupa situações de forma que a pergunta sobre BO pode não ser acionada quando deveria.

### Correção obrigatória

Reestruturar a opção de motivo da segunda via para distinguir de maneira inequívoca:

- Perdi / extraviei
- Fui vítima de furto
- Fui vítima de roubo
- Documento foi danificado
- Outro motivo compatível com a segunda via, se houver suporte oficial

Alternativamente, se a interface mantiver agrupamento, a lógica deve garantir que **extravio, furto e roubo** acionem a mesma verificação documental pertinente.

### Comportamento esperado

Quando aplicável, o sistema deve:
- informar a necessidade documental conforme a fonte oficial cadastrada;
- não inventar exigências adicionais;
- não confundir segunda via com substituição por alteração de dados;
- manter separada a rota de documento vencido.

### Critério de aceite

Todos os caminhos de:
- extravio;
- furto;
- roubo

devem produzir o comportamento documental correto e rastreável.

---

## ACHADO 3 — MAIOR
### F009 — Localização desconhecida não pode gerar rota consular presumida

### Problema atual

Quando o usuário responde que **não sabe informar se está no Brasil**, a V1.0.0 reconhece verbalmente a incerteza, mas ainda pode adicionar uma repartição consular.

Isso contradiz a própria lógica de incerteza.

### Correção obrigatória

Criar estado explícito:

`location_status = unknown`

Quando esse estado estiver ativo:

- não selecionar DELEMIG;
- não selecionar automaticamente Embaixada;
- não selecionar automaticamente Consulado;
- não gerar endereço específico;
- não inventar jurisdição territorial.

### Interface esperada

Mostrar mensagem simples:

**“Ainda não conseguimos identificar qual órgão é adequado porque precisamos confirmar onde você está. Você pode corrigir essa informação ou buscar atendimento humano.”**

Oferecer:
- botão para refazer a pergunta;
- botão de atendimento humano;
- fonte institucional genérica somente se realmente útil e juridicamente segura.

### Critério de aceite

`unknown` deve produzir **zero órgão territorial presumido**.

---

## ACHADO 4 — MAIOR
### AI001 — Validação pós-modelo da saída generativa

### Problema atual

O parser da camada generativa valida estrutura JSON, allowlist de fluxo e alguns limites, mas ainda aceita conteúdo textual arbitrário dentro de campos formalmente válidos.

Uma resposta pode ser JSON válido e ainda conter:
- URL não autorizada;
- instrução ao usuário que não deveria estar no campo;
- comando;
- conteúdo incompatível com o contrato da camada generativa.

### Objetivo

Transformar o parser em uma barreira real entre:
- geração probabilística;
- camada determinística e jurídica.

A IA generativa deve permanecer limitada a:
- compreender relato;
- organizar fatos;
- identificar informações faltantes;
- simplificar linguagem.

Ela **não pode criar a base jurídica, decidir o direito, inventar órgão, inventar fonte ou alterar regras determinísticas**.

### Correção obrigatória

Implementar validação pós-modelo com schema estrito.

Campos permitidos devem ser definidos explicitamente.

Exemplo conceitual:

```json
{
  "facts": ["string"],
  "missing_questions": ["string"],
  "suggested_flow": "refugio|apatridia|crnm|familia|null",
  "confidence": "low|medium|high"
}
```

Ajuste os nomes ao código real se necessário, mantendo a mesma lógica.

### Validações mínimas

#### `facts`
- somente array de strings;
- número máximo definido;
- tamanho máximo por string;
- remover ou rejeitar URLs;
- rejeitar conteúdo com protocolos `http://`, `https://`, `javascript:`, `data:`;
- rejeitar HTML executável;
- rejeitar scripts;
- rejeitar comandos;
- nunca interpretar string como código.

#### `missing_questions`
- somente perguntas de esclarecimento;
- número máximo definido;
- tamanho máximo;
- rejeitar URLs;
- rejeitar instruções externas;
- rejeitar tentativas de alterar política do sistema.

#### `suggested_flow`
Allowlist estrita:
- `refugio`
- `apatridia`
- `crnm`
- `familia`
- `null`

Qualquer outro valor:
- converter para `null`;
- registrar erro de validação.

#### `confidence`
Allowlist:
- `low`
- `medium`
- `high`

Qualquer valor desconhecido:
- usar comportamento conservador.

### Fail-safe obrigatório

Se a resposta violar o schema ou a política:

1. não exibir o conteúdo rejeitado;
2. não prosseguir como se a interpretação fosse confiável;
3. informar ao usuário que a análise automática não pôde ser concluída com segurança;
4. permitir utilizar a triagem determinística;
5. oferecer atendimento humano quando necessário.

### Critério de aceite

Criar testes internos com pelo menos:
- JSON inválido;
- campo ausente;
- URL em `facts`;
- `<script>` em `facts`;
- comando em `missing_questions`;
- fluxo fora da allowlist;
- confidence inválida;
- lista acima do limite;
- string acima do limite.

Registrar resultado sem chamar esses testes de validação científica.

---

## ACHADO 5 — MAIOR
### AI002 — Reprodutibilidade da camada generativa e endpoint server-side

### Problema atual

A V1.0.0 depende de `window.claude.complete` no runtime de prototipagem.

Isso é aceitável para demonstração, mas **não é suficiente para a versão que será submetida à validação experimental final**.

O artigo precisa conseguir registrar com precisão:
- qual modelo foi utilizado;
- qual prompt foi utilizado;
- qual versão;
- qual endpoint;
- quais parâmetros;
- qual base jurídica;
- quando a configuração foi congelada.

### Correção obrigatória

Preparar a V1.0.1 para uso com endpoint server-side real.

Se o projeto já estiver em Next.js:

Criar rota equivalente a:

`/api/ai/understand`

ou nomenclatura tecnicamente adequada.

Se ainda estiver apenas em HTML:

Criar a interface/adaptador de chamada de forma que:
- nenhuma chave fique no cliente;
- a configuração do endpoint venha de variável de ambiente;
- o protótipo possa falhar de forma segura quando o endpoint não estiver configurado.

### Entregáveis técnicos obrigatórios

Criar ou atualizar:

`.env.example`

Sem qualquer segredo real.

Exemplo conceitual:

```env
AI_PROVIDER=
AI_MODEL=
AI_API_KEY=
AI_ENDPOINT=
AI_PROMPT_VERSION=
KB_VERSION=
```

Criar:

`AI_RUNTIME_MANIFEST_V1.0.1.json`

Com estrutura semelhante a:

```json
{
  "app_version": "1.0.1",
  "provider": "TO_BE_CONFIGURED",
  "model": "TO_BE_CONFIGURED",
  "prompt_version": "TO_BE_CONFIGURED",
  "knowledge_base_version": "TO_BE_CONFIGURED",
  "temperature": null,
  "top_p": null,
  "max_tokens": null,
  "endpoint": "/api/ai/understand",
  "freeze_timestamp": null
}
```

Não preencher informação desconhecida.

### Regra de congelamento

**Não colocar data de congelamento agora.**

O campo deve permanecer `null` ou equivalente até a auditoria independente final.

### Critério de aceite

A aplicação deve conseguir funcionar em dois estados:

#### IA configurada
Usa endpoint server-side.

#### IA indisponível
Mostra fallback honesto e oferece triagem determinística.

Nunca simular que houve compreensão generativa quando não houve chamada válida.

---

## ACHADO 6 — MENOR
### F010 — Fonte oficial do telefone 190

### Problema atual

A V1.0.0 usa uma página institucional genérica da PMBA como fonte do 190 e marca a informação para revalidação.

### Correção obrigatória

Substituir por uma **fonte oficial da segurança pública da Bahia que explicite o atendimento pelo 190**, preferencialmente página institucional da SSP-BA/STELECOM ou outra fonte oficial equivalente.

### Regras

- usar domínio governamental oficial;
- registrar `source_id`;
- registrar título da fonte;
- registrar URL;
- registrar data de verificação real;
- não copiar texto além do necessário;
- não usar fonte jornalística se houver fonte administrativa primária.

### Critério de aceite

Ao clicar em “Fonte oficial” no card relacionado ao 190, o usuário deve chegar a uma página oficial que sustente claramente a informação apresentada.

---

## ACHADO 7 — MENOR
### F011 — Falso sucesso ao salvar plano no localStorage

### Problema atual

Se `localStorage` falhar, o `catch` pode marcar o estado como salvo.

Isso produz falso feedback positivo.

### Correção obrigatória

No fluxo de salvamento:

#### sucesso real
- `saved = true`;
- confirmação visual.

#### falha de armazenamento
- `saved = false`;
- mensagem clara;
- não afirmar que o plano foi salvo.

Mensagem sugerida:

**“Não foi possível salvar o plano neste dispositivo. Você ainda pode consultar as informações nesta sessão.”**

Não armazenar dados adicionais para compensar a falha.

### Critério de aceite

Forçar uma exceção de armazenamento durante teste interno e confirmar que:
- não aparece mensagem de sucesso;
- estado permanece não salvo;
- aplicação continua utilizável.

---

## ACHADO 8 — BÁSICO / DOCUMENTAL
### R001 — CSVs com `\n` literal

### Problema atual

Alguns arquivos CSV de auditoria foram exportados contendo `\n` literal em vez de quebra de linha real.

Isso prejudica:
- leitura humana;
- importação em planilha;
- parsing;
- futura auditoria.

### Correção obrigatória

Reexportar todos os CSVs da V1.0.1 em:

- UTF-8;
- uma linha real por registro;
- cabeçalho único;
- delimitador consistente;
- campos devidamente escapados;
- sem `\n` textual representando quebra de registro.

Validar abrindo com parser CSV padrão.

### Critério de aceite

Os arquivos precisam:
- abrir corretamente em Excel/Google Sheets;
- ser parseáveis;
- possuir o mesmo número de registros documentado no relatório.

---

# 4. AUDITORIA GLOBAL DE REGRESSÃO APÓS AS CORREÇÕES

Depois de corrigir os oito pontos, execute **somente verificações internas de desenvolvimento**.

Não produza números científicos finais.

## Verificações mínimas obrigatórias

### 4.1 Fluxos jurídicos

Testar:
- refúgio;
- apatridia;
- CRNM;
- reunião familiar.

Verificar:
- nenhuma saída `undefined`;
- nenhuma exceção;
- nenhuma rota territorial quando localização for desconhecida;
- requisito de residência separado de localização física;
- segunda via, substituição e vencimento da CRNM sem mistura;
- reunião familiar no exterior separada da rota interna;
- escalonamento humano preservado.

### 4.2 Fontes

Auditar todos os `source_id`.

Para cada fonte registrar:
- `source_id`;
- instituição;
- título;
- URL;
- tema;
- data de verificação;
- status da verificação;
- observação.

Não afirmar status HTTP se o ambiente não permitir conexão.

### 4.3 Camada generativa

Executar testes internos adversariais do parser e registrar:
- input;
- output bruto sintético;
- comportamento esperado;
- comportamento observado;
- PASS / FAIL.

Não chamar isso de benchmark científico.

### 4.4 Acessibilidade e UX

Confirmar que as correções não quebraram:
- navegação;
- retorno;
- progressão do quiz;
- aumento de texto;
- alto contraste;
- redução de animações;
- exclusão de dados;
- transcrição de voz, se suportada;
- fallback quando recurso não estiver disponível.

### 4.5 Persistência

Testar:
- salvar com sucesso;
- falha proposital de localStorage;
- excluir dados;
- ausência de falso sucesso.

---

# 5. ENTREGÁVEIS OBRIGATÓRIOS

Entregar todos os arquivos sem apagar versões anteriores.

## Aplicação

`Meu Direito IA V1.0.1.dc.html`

ou equivalente caso o projeto tenha migrado para estrutura Next.js.

## Changelog

`CHANGELOG_V1.0.0_to_V1.0.1.md`

Estrutura:

| ID | Severidade | Problema V1.0.0 | Correção V1.0.1 | Arquivo/função alterada | Verificação interna |
|---|---|---|---|---|---|

Não escrever “validado cientificamente”.

## Manifesto de fontes

`source_manifest_v1.0.1.json`

## Auditoria de fontes

`source_audit_v1.0.1.csv`

## Regressão interna

`regression_results_v1.0.1.csv`

`regression_results_v1.0.1.json`

## Testes internos da camada generativa

`ai_parser_regression_v1.0.1.csv`

`ai_parser_regression_v1.0.1.json`

## Manifesto do runtime da IA

`AI_RUNTIME_MANIFEST_V1.0.1.json`

## Privacidade

Atualizar:

`PRIVACY_IMPLEMENTATION.md`

Somente com funcionalidades realmente existentes.

## Configuração

`.env.example`

Sem segredos.

## README

`README_V1.0.1.md`

Incluir:
- como executar;
- como configurar IA;
- como funciona fallback;
- escopo jurídico coberto;
- funções não cobertas;
- limitações conhecidas;
- como reproduzir os testes internos;
- diferença entre teste interno e validação científica independente.

---

# 6. REGRAS JURÍDICAS E CIENTÍFICAS INEGOCIÁVEIS

1. Não inventar norma.
2. Não inventar fonte.
3. Não inventar URL.
4. Não inventar órgão.
5. Não inventar taxa.
6. Não transformar hipótese em resultado.
7. Não transformar proposta futura em funcionalidade presente.
8. Não transformar interface visual em prova de implementação.
9. Não declarar “corrigido” se apenas o texto foi alterado e a lógica não foi verificada.
10. Não declarar “testado” se o teste não foi executado.
11. Não criar data retroativa.
12. Não alterar a V1.0.0 baseline.
13. Não expor chave de API.
14. Não inserir dados reais de migrantes.
15. Utilizar somente dados sintéticos nos testes.
16. Preservar o atendimento humano como salvaguarda.
17. Preservar rastreabilidade das fontes.
18. Preservar explicitação de incerteza.
19. Preservar minimização de dados.
20. Preservar a separação entre inteligência generativa e decisão jurídica determinística.

---

# 7. LINGUAGEM E EXPERIÊNCIA DO USUÁRIO

A interface deve continuar:

- simples;
- acolhedora;
- juridicamente precisa;
- não paternalista;
- não excessivamente técnica;
- adequada a usuários com baixo letramento digital;
- sem textos longos quando uma frase clara resolve;
- sempre indicando o próximo passo.

Não usar juridiquês desnecessário.

Exemplo ruim:

“Em que pese a impossibilidade de aferição da competência territorial...”

Exemplo adequado:

**“Ainda precisamos confirmar onde você está para indicar o órgão correto.”**

O Meu Direito.IA deve orientar sem produzir falsa autoridade.

---

# 8. DEFINIÇÃO DE PRONTO

A V1.0.1 somente pode ser considerada **candidata ao congelamento experimental** quando:

- os oito achados estiverem corrigidos;
- os critérios de aceite estiverem documentados;
- a regressão interna não apresentar falha conhecida nesses oito itens;
- os arquivos de auditoria forem parseáveis;
- o runtime de IA estiver documentado;
- nenhuma funcionalidade inexistente for apresentada como pronta;
- todas as limitações residuais forem explicitadas.

Ao concluir, não escreva apenas “feito”.

Produza um resumo técnico final contendo:

### 1. Correções implementadas
Uma linha por ID.

### 2. Testes internos efetivamente executados
Somente o que realmente rodou.

### 3. Testes não executados
Explícitos.

### 4. Limitações residuais
Sem omissão.

### 5. Arquivos gerados
Lista completa.

### 6. Estado recomendado
Escolher apenas uma opção:

- **NÃO PRONTA PARA CONGELAMENTO**
- **CANDIDATA AO CONGELAMENTO, AGUARDANDO AUDITORIA INDEPENDENTE**

Nunca declarar a versão “congelada” por conta própria.

O congelamento será feito somente após auditoria independente externa a esta etapa de desenvolvimento.
