# 🪄 Projeto Fundo Mágico

Este projeto combina uma interface visual encantadora com automação via n8n. O objetivo é criar uma experiência imersiva utilizando fundos animados dinâmicos e integração de dados.

---
### ⚠️ Nota sobre as Funcionalidades (Backend)

Este projeto utiliza o **n8n** para automação de processos. Como o workflow está configurado para rodar em um ambiente local (localhost), as funcionalidades que dependem de integração (webhooks) **não responderão** nesta demonstração online do GitHub Pages.
---

## 🚀 Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3 (Efeitos de Glassmorphism), JavaScript (ES6+).
* **Automação:** [n8n](https://n8n.io/) (Executado localmente).
* **IA:** Geração de assets visuais (vídeo de fundo) via Gemini.

## 📸 Demonstração do Projeto

Aqui você pode ver o projeto funcionando e a integração com o n8n:

<b>Projeto em Ação</b>
<video src="./assets/fundo-magico-funcionando.mp4" width="100%" controls muted></video>
<b>Fluxo n8n</b><
<video src="assets/n8n-fundo-magico.mp4" width="100%" controls muted></video>

## 🛠️ Como Funciona
O projeto consome uma API gerada pelo n8n para processar e exibir informações dinâmicas na tela.


## 📂 Estrutura do Projeto

```text
├── assets/          # Vídeos e prints de demonstração
├── src/
│   ├── css/         # Estilização (reset, responsive, styles)
│   ├── images/      # Imagem de fundo estática (bg-ia.png)
│   └── js/          # Lógica de integração (index.js)
└── index.html       # Página principal
```

## 👩‍💻 Autora

**Larissa** - [LinkedIn](https://www.linkedin.com/in/laripelissari/) | [GitHub](https://github.com/LariPelissari)
