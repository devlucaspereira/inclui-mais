
/* =========================================
   INCLUI+ | COMPONENTES COMPARTILHADOS
   ========================================= */

// Identifica a página atual
const paginaAtual = document.body.dataset.page;

// Cabeçalho da página inicial
const headerInstitucional = `
    <header class="site-header">
        <div class="container header-content">
            <a href="index.html" class="logo" aria-label="Inclui+ - Página inicial">
                Inclui<span>+</span>
            </a>

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
            <a href="index.html" class="logo" aria-label="Inclui+ - Página inicial">
                Inclui<span>+</span>
            </a>

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
            <a href="index.html" class="logo" aria-label="Inclui+ - Página inicial">
                Inclui<span>+</span>
            </a>

            <nav class="main-nav" aria-label="Navegação principal">
                <a href="acessibilidade.html">Acessibilidade</a>
            </nav>
        </div>
    </header>
`;

// Rodapé compartilhado
const footerCompartilhado = `
    <footer class="site-footer">
        <div class="container">

            <div class="footer-content">

                <div>
                    <a href="index.html" class="logo">
                        Inclui<span>+</span>
                    </a>

                    <p>Talentos não têm barreiras.</p>
                </div>

                <nav class="footer-links" aria-label="Navegação do rodapé">
                    <a href="quem-somos.html">Quem somos</a>
                    <a href="acessibilidade.html">Acessibilidade</a>
                </nav>

                <div>
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

if (paginaAtual === "vagas" ||
    paginaAtual === "detalhes-vaga" ||
    paginaAtual === "perfil") {

    headerSelecionado = headerCandidato;

} else if (paginaAtual === "empresa") {

    headerSelecionado = headerEmpresa;
}

// Insere cabeçalho e rodapé na página
document.body.insertAdjacentHTML("afterbegin", headerSelecionado);
document.body.insertAdjacentHTML("beforeend", footerCompartilhado);
