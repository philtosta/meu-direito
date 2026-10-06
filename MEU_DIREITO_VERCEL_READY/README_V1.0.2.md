# Meu Direito.IA — V1.0.2

Estado: **CANDIDATA AO CONGELAMENTO, AGUARDANDO AUDITORIA INDEPENDENTE**
Data: 14/08/2026 · app v1.0.2 · base jurídica kb-2026-08-14

Protótipo de pesquisa em orientação migratória. Separa camada generativa (compreensão de relato livre, organização de fatos, lacunas, simplificação de linguagem) de base jurídica verificável (requisitos, documentos, taxas, órgãos), com fonte vinculada e data de verificação em cada informação operacional.

Esta versão **não** é declarada validada, congelada, correta ou livre de erros.

## Arquivos desta versão

- `Meu Direito IA V1.0.2.dc.html` — aplicação
- `CHANGELOG_V1.0.1_to_V1.0.2.md` — correções por FG-ID
- `regression_results_v1.0.2.json` / `.csv` — o que foi e o que não foi executado
- `source_manifest_v1.0.2.json` / `source_audit_v1.0.2.csv` — base jurídica e escopo de uso
- `AI_RUNTIME_MANIFEST_V1.0.2.json` — runtime generativo (todos os campos não configurados)

Versões anteriores (V0.1.0, V1.0.0, V1.0.1) e seus artefatos permanecem no projeto sem alteração.

## O que mudou na V1.0.2

Correções de auditoria de pré-congelamento FG-01 a FG-08: bloqueio territorial do pedido de refúgio para quem está fora do Brasil; remoção da regra global que inseria consulado em qualquer fluxo fora do Brasil; verificação de autorização de residência válida na segunda via de CRNM; identificação do ator juridicamente relevante em reunião familiar; regra conservadora de refúgio quando os fatos informados são insuficientes ou contraditórios; correção do resumo de órgão quando a localização é desconhecida; identidade de versão consistente; runtime generativo declarado como não pronto para validação experimental final. Detalhes no changelog.

## Fluxos modelados

Refúgio (com bloqueio territorial e regra de insuficiência), apatridia (requisito de residência, sem etapa consular inventada), CRNM (segunda via com requisito de autorização de residência válida, substituição por alteração de dados, documento vencido) e reunião familiar (etapa consular de visto ou autorização de residência, definidas pela localização de quem precisa do visto).

Categorias sem base oficial verificada (trabalho, saúde, educação, assistência, naturalização) não entram na triagem determinística e são encaminhadas ao relato livre com análise humana.

## Testes

`regression_results_v1.0.2.json` registra, por item, o que foi executado e o que consta como **NÃO EXECUTADO**. Neste ambiente não houve execução de suíte automatizada de fluxo, do parser pós-modelo nem da persistência local; a revisão foi estática (trace manual das ramificações). Nenhum status HTTP, latência, modelo, endpoint ou métrica foi medido.

## Limitações residuais

1. Sem backend: não há endpoint server-side, telemetria de pesquisa nem persistência além do navegador.
2. Camada generativa não configurada: provedor, modelo, prompt e parâmetros permanecem não configurados; a camada não está pronta para validação experimental final.
3. Suítes de regressão dos fluxos e do parser não automatizadas nesta versão.
4. Fontes dinâmicas (taxas, unidades, contatos, portal consular) exigem revalidação contínua; a data exibida é da revisão da base, não da publicação das normas.
5. Contatos presenciais mapeados apenas em Salvador e Lauro de Freitas; fora desse recorte a aplicação usa localizadores oficiais em vez de endereço presumido.
6. Apenas o português foi validado de ponta a ponta.

## Próximos passos

Auditoria independente da V1.0.2 antes de qualquer congelamento; implementação em Next.js/Supabase com painel de pesquisa (10 dimensões de validação) e dashboard administrativo; automação da suíte de regressão dos fluxos completos.
