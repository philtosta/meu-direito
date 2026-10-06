# README — Meu Direito.IA V1.0.1 (candidata ao congelamento experimental)

## Como executar

Abra `Meu Direito IA V1.0.1.dc.html` no navegador. Não há build nem servidor obrigatório.

## Como configurar a camada generativa

Ordem de resolução do runtime:

1. **Endpoint server-side** — definido pela prop `aiEndpoint` ou por `window.MDIA_AI_ENDPOINT`. O app faz `POST` com `{ narrative, prompt_version, kb_version }` e espera JSON de resposta. Em produção, use `AI_ENDPOINT` (ver `.env.example`) e mantenha provedor, modelo e chave no servidor.
2. **Runtime de prototipagem** — usado apenas quando não há endpoint. Aceitável para demonstração; insuficiente para a validação experimental final, porque não permite registrar provedor, modelo e versão do prompt.
3. **Indisponível ou desligado** — o app informa e segue pela triagem determinística.

O runtime em uso é declarado na tela "Como funciona". Provedor, modelo, versão do prompt e congelamento ficam em `AI_RUNTIME_MANIFEST_V1.0.1.json`, com campos não configurados explícitos e `freeze_timestamp: null`.

## Como funciona o fallback

Sem runtime, com erro de rede, ou quando a resposta é rejeitada pelo validador, o app **não** apresenta compreensão simulada: exibe o aviso correspondente e oferece a triagem por perguntas e o atendimento humano.

## Escopo jurídico coberto

- Solicitação de refúgio.
- Reconhecimento da condição de apátrida, com verificação do requisito de residência no Brasil.
- CRNM em três rotas separadas: segunda via, substituição por alteração de dados e documento vencido.
- Reunião familiar em duas rotas separadas: etapa consular e autorização de residência.

## Não coberto

Trabalho, saúde, educação, assistência social e naturalização não têm triagem determinística: essas categorias levam ao relato livre e ao atendimento humano. Mapeamento presencial apenas em Salvador e Lauro de Freitas. Idiomas além do português não estão validados e não iniciam a jornada.

## Limitações conhecidas

- Sem backend: não há persistência server-side nem exclusão server-side.
- Nenhum endpoint generativo foi implantado ou testado.
- Sem suíte automatizada de regressão; sem verificação programática de HTTP status das fontes.
- Fonte do 190 é federal (Anatel), não estadual, porque não foi localizada página de serviço da SSP-BA/PMBA que enunciasse o número.
- Fontes marcadas como dinâmicas (taxas, endereços, unidades) mudam sem aviso e precisam de revalidação periódica.

## Como reproduzir os testes internos

Os testes do validador usam a própria função entregue no arquivo:

1. Localize no `Meu Direito IA V1.0.1.dc.html` o bloco entre `/* MDIA_AI_VALIDATOR_START */` e `/* MDIA_AI_VALIDATOR_END */`.
2. Carregue esse bloco em qualquer runtime JavaScript e chame `aiValidate(payload)`.
3. Use os 12 payloads sintéticos de `ai_parser_regression_v1.0.1.json` (campo `cases[].input`) e compare com `comportamento_esperado`.

Nenhum dado real de pessoa migrante é usado em teste.

## Teste interno x validação científica independente

Teste interno é verificação feita por quem desenvolveu, no mesmo ambiente, com entradas próprias: serve para detectar defeito, não para atestar correção jurídica. Validação científica independente é feita por revisor externo a esta etapa, sobre a versão congelada, com critérios e amostras que não são definidos pelo desenvolvedor. Esta versão só passou pela primeira.
