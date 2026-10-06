# README_V1 — Meu Direito.IA V1.0.0 (protótipo funcional)

## Arquivos

- `Meu Direito IA.dc.html` — baseline V0.1.0, preservada para auditoria. Não editar.
- `Meu Direito IA V1.dc.html` — V1.0.0 corrigida. Abre direto no navegador.
- `CHANGELOG_V0.1_to_V1.md` — correções, fontes e método de verificação de cada item.
- `source_manifest_v1.json` / `source_audit_v1.csv` — base de fontes e auditoria.
- `regression_results_v1.json` / `regression_results_v1.csv` — resultados dos casos de regressão, com o que ficou pendente.
- `PRIVACY_IMPLEMENTATION.md` — o que está implementado em privacidade.
- `.env.example` — variáveis para a implantação, sem segredos.

## Rodar o protótipo

Abra `Meu Direito IA V1.dc.html`. A camada generativa do relato livre usa o runtime de prototipagem do ambiente; quando indisponível, o app exibe o fallback determinístico e a triagem por perguntas continua funcionando.

## Implantação Next.js / Supabase

1. Portar a base controlada (`SRC`, `FLOWS`, pontos de atendimento) para módulos de dados versionados, com `kb_version` e `verified_at`.
2. Criar rota server-side (`app/api/analyze/route.ts` na Vercel ou Edge Function no Supabase) que receba o relato, chame o provedor com o schema JSON estrito e devolva apenas `facts`, `missing_questions`, `suggested_flow`, `needs_human`, `risk_reason`, `confidence`. Nenhuma URL vinda do modelo.
3. Manter a allowlist de fontes no servidor: qualquer fonte exibida vem da base, nunca da resposta do modelo.
4. Configurar variáveis conforme `.env.example`. Nenhuma chave no cliente.
5. Só então habilitar persistência, com consentimento específico, retenção declarada, RLS e exclusão real.

## Limites declarados

Orientação inicial, não parecer jurídico. Mapeamento presencial apenas em Salvador e Lauro de Freitas. Idiomas além do português não estão validados. A camada generativa organiza o relato e nunca produz a orientação jurídica final.
