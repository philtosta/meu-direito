# Meu Direito V3 — autoatendimento + gestão de demandas (demonstração)

V2 e V1.0.2 preservadas sem alteração. Base jurídica, motor determinístico e validador pós-modelo reutilizados de `v2/` sem mudança de conteúdo.

## Arquivos novos
- `Meu Direito V3.dc.html` — app responsivo: experiência pública + área de atendimento/gestão
- `v3/case-repo.js` — CaseRepository local (Case, CaseEvent, Message, Note, Attachment, Referral, Institution, Team), RBAC, métricas, 7 autotestes
- `v3/i18n/{pt-BR,en,es,ar,zh-CN,uk}.js` — 312 chaves por idioma, paridade 0 faltando / 0 extras; ar com dir=rtl

## Rotas
Público: #/ · #/comecar · #/tema/:id · #/triagem · #/triagem/relato · #/triagem/entendimento · #/triagem/resultado · #/demanda/nova · #/demanda/enviada · #/acompanhar · #/minha-demanda/:id · #/agendar/:id · #/servicos · #/ajuda · #/ajuda/urgente · #/fontes · #/privacidade · #/demo
Atendimento: #/atendimento · /fila · /buscar · /minhas · /demandas/:id · /encaminhamentos · /mensagens · /agenda · /instituicoes · /fontes
Gestão: #/gestao · /relatorios · /equipe · /configuracoes

## Testes executados
- Motor jurídico + validador: 25/25 · CaseRepository/RBAC: 7/7 · paridade i18n: 5 idiomas × 0 divergências (também em #/demo)
- Fluxo no navegador: triagem CRNM → resultado → preparar solicitação → demanda (6 passos, erro de consentimento com resumo) → protocolo + código → minha demanda → agendamento → confirmação; área do voluntário (visão geral, demanda, notas internas); árabe RTL na home

## DEMO / precisa de backend real
Autenticação e perfis, persistência de demandas, envio de mensagens e anexos, notificações, agenda real da unidade, integração com órgãos, diretório de instituições (itens sem fonte marcados "Não validada · DEMO"), camada generativa (desativada).

## Limitações
- Perguntas da triagem, requisitos, documentos e custos seguem no texto jurídico validado em português (aviso exibido); tradução de apoio desses textos não foi feita.
- Área de atendimento em português.
- Francês não incluído na V3 (continua na V2).
- Breakpoints testados só na largura do painel de preview (~900px, layout mobile/tablet); 320–1440 e zoom 400% não foram verificados automaticamente.
- Estilos inline por exigência do ambiente; tokens do design ficam documentados no código (paleta cobalto) para o port Next.js.
