document.addEventListener("DOMContentLoaded", function () {
    // 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
    const formulario = document.querySelector(".form-group");
    const descricaoInput = document.getElementById("description");
    const codigoHtml = document.getElementById("html-code");
    const codigoCss = document.getElementById("css-code");
    const secaoPreview = document.getElementById("preview-section");

    formulario.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // 2. Obter o valor digitado pelo usuário no campo de texto.
        const descricao = descricaoInput.value.trim();

        if (!descricao) {
            return; // Não faz nada se o campo estiver vazio
        }

        // 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
        mostrarCarregando(true);

        // 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
        try {
            const resposta = await fetch("http://localhost:5678/webhook-test/fundo-magico", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ descricao })
            });


            const dados = await resposta.json();

            codigoHtml.textContent = dados.html || "";
            codigoCss.textContent = dados.css || "";

            secaoPreview.style.display = "block";
            secaoPreview.innerHTML = dados.html || "";

            let tagEstilo = document.getElementById("estilo-dinamico");
            // se essa tag já existir, remove ela antes de criar uma nova
            if (tagEstilo) {
                tagEstilo.remove();
            }

            if (dados.css) {
                tagEstilo = document.createElement("style");
                tagEstilo.id = "estilo-dinamico";
                tagEstilo.textContent = dados.css;
                document.head.appendChild(tagEstilo);
            }

        } catch (error) {
            console.error("Erro ao enviar a requisição:", error);
            codigoHtml.textContent = "Não consegui gerar o HTML, tente novamente.";
            codigoCss.textContent = "Não consegui gerar o CSS, tente novamente.";
            secaoPreview.innerHTML = "";

        } finally {
            mostrarCarregando(false);
        }

    });

    function mostrarCarregando(estaCarregando) {
        const botaoEnviar = document.getElementById("generate-btn");
        if (estaCarregando) {
            botaoEnviar.textContent = "Carregando Background...";
        } else {
            botaoEnviar.textContent = "Gerar Background Mágico";
        }
    }

});







// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS do background).
// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
//    - Mostrar o HTML e CSS gerado em uma área de preview.
//    - Inserir o CSS retornado dinamicamente na página para aplicar o background.
// 7. Remover o indicador de carregamento após o recebimento da resposta.
