# Portfólio — Matheus Eger

Site estático (HTML + CSS + JS puro, sem frameworks) pronto para publicar no GitHub Pages.

## Estrutura

```
├── index.html   → estrutura da página
├── style.css    → todo o visual (tema dark, terminal, etc.)
├── data.js      → TODOS os textos, skills, projetos, links de contato e a topologia do homelab
├── script.js    → lógica que lê o data.js e monta a página (efeito de digitação, cards, SVG da topologia)
└── README.md    → este arquivo
```

**Para editar o conteúdo (nome, sobre, skills, projetos, links), mexa só no `data.js`.**
Não é necessário tocar no `script.js` nem no `index.html` para atualizar textos.

## Personalizando

Os links de contato, textos, skills e projetos já estão preenchidos com seus dados reais no `data.js`. Se algo mudar (novo cargo, novo projeto, novo link), edite só esse arquivo — o `script.js` já sabe renderizar qualquer alteração.

## Como testar localmente

Não precisa de build nem instalar nada. Duas opções:

1. Abrir o `index.html` direto no navegador, ou
2. Rodar um servidor local simples (recomendado, evita bloqueios de CORS em alguns navegadores):

```bash
python3 -m http.server 8080
# depois acesse http://localhost:8080
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser `seu-usuario.github.io` para virar seu domínio raiz, ou qualquer outro nome).
2. Suba estes arquivos para a branch `main`:

```bash
git init
git add .
git commit -m "Primeiro commit do portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```

3. No GitHub: **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
6. Em alguns minutos o site fica disponível em:
   - `https://SEU-USUARIO.github.io/NOME-DO-REPO/` (repositório normal), ou
   - `https://SEU-USUARIO.github.io/` (se o repositório se chamar `SEU-USUARIO.github.io`)

Não é necessário GitHub Actions nem build — é tudo estático.

## Acessibilidade / detalhes já cobertos

- Respeita `prefers-reduced-motion` (desliga a animação de digitação e efeitos).
- Foco visível no teclado em links e botões.
- Layout responsivo (o hero e os grids quebram para mobile).
