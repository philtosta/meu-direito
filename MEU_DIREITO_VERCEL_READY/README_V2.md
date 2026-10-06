# Meu Direito V2 — Demonstração institucional

Protótipo independente de pesquisa. Não é sistema oficial da Polícia Federal. V1.0.2 preservada sem alteração.

## Arquivos
- `Meu Direito V2.dc.html` — aplicação responsiva (sem moldura de telefone)
- `v2/legal-base.js` — base jurídica da V1.0.2 extraída sem alteração (kb-2026-08-14)
- `v2/legal-engine.js` — motor determinístico (funções puras), catálogo de serviços, mapeamento triagem → serviço, 25 casos de autoteste
- `v2/source-scope.js` — escopo das fontes, gerado de source_manifest_v1.0.2.json
- `v2/demo-repo.js` — LocalDemoRepository (applications, appointments, processes, storage); DEMO_MODE=true
- `v2/i18n/{pt-BR,es,en,fr}.js` — mensagens estruturadas, paridade de chaves verificada

## Rotas (hash)
#/ · #/orientacao · /assuntos · /relato · /entendimento · /perguntas · /resultado · #/servicos · #/servicos/:id · #/solicitacao · #/solicitacao/protocolo · #/acompanhar · #/agendar · #/agendamentos · #/fontes · #/ajuda · #/ajuda/urgente · #/privacidade · #/como-funciona · #/demo

## Testes executados
- Motor + validador pós-modelo: 25/25 (também executável em #/demo)
- Paridade i18n: 0 chaves faltando em es/en/fr
- Repositório: criação de protocolo, busca, bloqueio de horário duplicado, reagendamento, cancelamento
- Fluxo ponta a ponta conduzido no navegador: cenário CRNM → resultado → preparar solicitação; cenário residência → wizard → protocolo DEMO → agendamento → calendário → horário → comprovante → meus agendamentos → modal de cancelamento

## Não executado neste ambiente
Next.js/TypeScript/Tailwind, npm build, lint, typecheck, suíte automatizada de UI, testes de breakpoints automatizados, auditoria WCAG com leitor de tela real.

## Mantido como DEMO
Protocolos MD-DEMO, agendamentos, vagas sintéticas (dentro do horário publicado da DELEMIG), processos semente, consulta de CEP local, anexos (só na sessão). Camada generativa não configurada (prop allowPrototypeAI=false).

## Limitações
Conteúdo jurídico só em português; unidade validada apenas para Salvador/Lauro de Freitas; serviços sem fonte (endereço, prorrogação, fronteiriço, trabalho, saúde, educação, naturalização) marcados como não validados; estilos inline por exigência do ambiente — tokens centralizados ficam para o port Next.js.
