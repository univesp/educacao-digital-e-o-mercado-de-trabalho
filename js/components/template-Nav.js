const templateNav = `
    <div class="container">
    <!-- Logo -->
    <div class="logo">
    <a class="pularNavegacao" href="#conteudoPrincipal">Pular para Conteúdo Principal</a>
    <a href="https://univesp.br/" target="_blank">
        <img src="https://apps.univesp.br/common/colorida-negativa.svg" alt="Link para site institucional. Logotipo da universidade formado pela palavra Univesp, sendo a letra V estilizada.">
        <!-- outras opções de img src: colorida-positiva.svg, traco-positiva.svg, traco-negativa.svg -->
    </a>
    </div>
    <!-- Compartilhamento -->
    <ul class="nav justify-content-end">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        <i class="material-icons" aria-label="Opções de Compartilhamento">share</i>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
        <div class="sharing"></div>
        </div>
    </li>
    </ul>
    </div>
`;