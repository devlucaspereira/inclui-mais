
/* =========================================
   INCLUI+ | COMPONENTES COMPARTILHADOS
   ========================================= */

// Identifica a página atual
const paginaAtual = document.body.dataset.page;

// Identificação visual da marca
const identificacaoMarca = `
    <a href="index.html" class="brand-logo"
       aria-label="Inclui+ - Página inicial">

        <img
            src="assets/logos/logo-inclui-mais.png"
            alt=""
            aria-hidden="true"
        >

        <span>Inclui<span class="brand-plus">+</span></span>

    </a>
`;

// Cabeçalho institucional
const headerInstitucional = `
    <header class="site-header">
        <div class="container header-content">

            ${identificacaoMarca}

            <nav class="main-nav" aria-label="Navegação principal">
                <a href="quem-somos.html">Quem somos</a>
                <a href="acessibilidade.html">Acessibilidade</a>
            </nav>

        </div>
    </header>
`;

// Cabeçalho da área do candidato
const headerCandidato = `
    <header class="site-header">
        <div class="container header-content">

            ${identificacaoMarca}

            <nav class="main-nav" aria-label="Navegação principal">
                <a href="vagas.html">Vagas</a>
                <a href="perfil.html">Meu perfil</a>
                <a href="acessibilidade.html">Acessibilidade</a>
            </nav>

        </div>
    </header>
`;

// Cabeçalho da área de empresas
const headerEmpresa = `
    <header class="site-header">
        <div class="container header-content">

            ${identificacaoMarca}

            <nav class="main-nav" aria-label="Navegação principal">
                <a href="acessibilidade.html">Acessibilidade</a>
            </nav>

        </div>
    </header>
`;

// Rodapé compartilhado

// Identificação visual específica para o rodapé
const identificacaoMarcaRodape = `
    <a href="index.html" class="brand-logo"
       aria-label="Inclui+ - Página inicial">

        <img
            src="assets/logos/logo-inclui-mais-rodape.png"
            alt=""
            aria-hidden="true"
        >

        <span>Inclui<span class="brand-plus">+</span></span>

    </a>
`;

// Rodapé compartilhado
const footerCompartilhado = `
    <footer class="site-footer">
        <div class="container">

            <div class="footer-content">

                <div class="footer-brand">

                    ${identificacaoMarcaRodape}

                    <p>Talentos não têm barreiras.</p>

                </div>

                <nav class="footer-links"
                     aria-label="Navegação do rodapé">

                    <a href="quem-somos.html">Quem somos</a>
                    <a href="acessibilidade.html">Acessibilidade</a>

                </nav>

                <div class="footer-description">
                    <p>
                        Conectando talentos a oportunidades
                        mais inclusivas.
                    </p>
                </div>

            </div>

            <div class="footer-bottom">
                <p>Projeto extensionista Inclui+ · 2026</p>
            </div>

        </div>
    </footer>
`;


// Seleciona o cabeçalho conforme a página
let headerSelecionado = headerInstitucional;

if (
    paginaAtual === "vagas" ||
    paginaAtual === "detalhes-vaga" ||
    paginaAtual === "perfil"
) {

    headerSelecionado = headerCandidato;

} else if (paginaAtual === "empresa") {

    headerSelecionado = headerEmpresa;
}

// Insere os componentes na página
document.body.insertAdjacentHTML(
    "afterbegin",
    headerSelecionado
);

document.body.insertAdjacentHTML(
    "beforeend",
    footerCompartilhado
);
