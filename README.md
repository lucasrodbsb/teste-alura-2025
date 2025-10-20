<div align="center">

# Teste Alura 2025 - Lucas Rodrigues

Aplicação Next.js com listagem de posts, detalhes, filtros por categoria e busca com debounce. Layout responsivo, tema claro/escuro e integração com API mock via React Query.

</div>

## Features

- Lista de posts com paginação e grid responsiva
- Detalhe do post com tags e “relacionados” por categoria
- Filtros por categoria e busca no front com debounce (300ms)
- Tema claro/escuro utilizando CSS variables + `next-themes`
- Skeletons e spinner para estados de carregamento
- Imagens otimizadas com `next/image` (`sizes`, `quality`, `priority`)
- SEO básico (`metadata`, `viewport`) e acessibilidade (atalho “Ir para conteúdo”, `aria-label` em ícones)

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS 4 + CSS Variables
- @tanstack/react-query

## Executando localmente

```bash
npm install
npm run dev
```
