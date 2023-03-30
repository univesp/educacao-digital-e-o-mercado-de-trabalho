const mainContent = ` 
    <div class="container" id="conteudo1">

        <div class="conteudo-content">
            <p>Nos dias atuais, a todo momento somos obrigados a aprender a lidar com recursos tecnológicos como softwares, aplicativos, plataformas etc., desafiando vivência de toda uma visa, experiência e aprendizados assimilados anteriormente.</p>

            <p>Os jovens estão caindo quase em queda livre nesse universo dinâmico, sem muitas vezes saber o que fazer ou mesmo que atitude tomar. O fato é que não somente eles, mas também muitos adultos não sabem lidar bem com essas mudanças tecnológicas que estão atreladas a uma nova experiência.​ Pensando nisso, vamos iniciar aqui uma jornada pela Educação Digital, um percurso que começa conceituando a expressão “Educação Digital” e que vai até o mundo do mercado de trabalho, com suas infindáveis particularidades.  Vamos lá?</p>
        </div>

        <button class="next-button" onclick="replace('conteudo1', 'conteudo2')">Avançar</button>
        
    </div>


    <!-- CONTEUDO 2 -->
    <div class="container" id="conteudo2" style="display: none">
        <div class="conteudo-content">
            <h3>A Internet</h3>

            <p>Quando nos referimos às novas formas de comunicação, logo nos vem à mente a Internet. Trata-se de uma rede mundial de computadores, de um espaço de comunicação com o auxílio do qual as pessoas se encontram por redes sociais, interagem, discutem, produzem, compram produtos, vendem e colaboram. No entanto, a Internet é também um ambiente no qual pode-se facilmente encontrar ameaça, calúnia, injúria, difamação e violação de direitos humanos e autorais seja de livros, músicas, filmes, entre outros.​ O fato é que a Internet se tornou um meio essencial para a comunicação contemporânea, muito embora a cada dia seja inventada uma nova tecnologia impactando nas nossas formas de se comunicar. Em decorrência desses processos dinâmicos, a área da educação muitas vezes se beneficia dessas mudanças.</p>

            <div class="button-container">
             <button class="next-button2" onclick="replace('conteudo2', 'conteudo3')">Avançar</button>
            </div>
        </div>

        <div class="imagem-conteudo-container">
            <img src="/assets/internet.jpeg" alt=""> 
        </div>
    </div>


    <!-- CONTEUDO 3 -->
    <div class="container" id="conteudo3" style="display: none">
        <div class="conteudo-content">
            <h3>O que é educação digital?</h3>

            <p>Mas o que é, de fato, <strong>Educação Digital</strong>?</p>

            <p>É uma forma de atuação educacional para conscientizar e direcionar a utilização responsável dos meios digitais.</p>

            <p>A educação Digital deve atingir não só os jovens estudantes, mas todos os usuários em geral e em todos os aspectos educacionais, proporcionando a aquisição de novos conceitos e conteúdos sobre diversos aspectos que envolvem sua área de estudo.</p>

            <div class="button-container">
             <button class="next-button2" onclick="replace('conteudo3', 'conteudo4')">Avançar</button>
            </div>
        </div>

        <div class="imagem-conteudo-container">
            <img src="/assets/ed_digital.jpeg" alt=""> 
        </div>
    </div>


    <!-- CONTEUDO 4 -->
    <div class="container" id="conteudo4" style="display: none">
        <div class="conteudo-content">
            <h3>Tecnologia na Educação</h3>

            <p>Agora que você já entendeu um pouco sobre a Educação Digital, vamos assistir a este vídeo.</p>

            <p>Você pode acessar a transcrição clicando <a target="_blank" href="https://apps.univesp.br/educacao-digital-e-o-mercado-de-trabalho/transcricoes/1%C2%BA%20Vi%CC%81deo%20-%20Transcric%CC%A7a%CC%83o%20-%20Como%20a%20tecnologia%20esta%CC%81%20mudando%20a%20forma%20de%20dar%20aulas.pdf">aqui</a>.</p>

            <div class="button-container">
             <button class="next-button2" onclick="replace('conteudo4', 'conteudo5')">Avançar</button>
            </div>
        </div>

        <div class="imagem-conteudo-container">
            <iframe width="100%" height="260px" src="https://www.youtube.com/embed/KcEBAnDh-u4"></iframe>
        </div>
    </div>


    <!-- CONTEUDO 5 -->
    <div class="container" id="conteudo5" style="display: none">
        <div class="conteudo-content">
            <h3>EAD</h3>

            <p>A modalidade em EaD oferece um leque de oportunidades a quem quer ampliar os conhecimentos e ascender profissionalmente às oportunidades de emprego que exigem profissionais capazes de se reinventarem constantemente. Essa forma de ensino, muito atenta às habilidades e competências exigidas da atuação profissional contemporânea, busca formar profissionais que não se contentam com uma única forma de atuação, profissionais que aprender a lidar com as dificuldades da vida, mas não deixando de lado os estudos. Nesse sentido, nunca foi tão necessário adquirir conhecimento nas diversas áreas e aprofundar-se nos conteúdos aprendidos.</p>

            <p>Tendo isso em conta, é importante destacar ainda que queremos formar não apenas cidadãos capazes de interagir no mundo digital, ou seja, on-line e off-line, mas que tenham conhecimento do potencial que possuem, que aprendam a utilizar suas qualidades, capacidades e assim construir novas perspectivas profissionais.</p>

            <div class="button-container">
             <button class="next-button2" onclick="replace('conteudo5', 'conteudo6')">Avançar</button>
            </div>
        </div>

        <div class="imagem-conteudo-container">
            <img src="/assets/ead.jpeg" alt="">
        </div>
    </div>


    <!-- CONTEUDO 6 -->
    <div class="container" id="conteudo6" style="display: none">
        <div class="conteudo-content">
            <h3>Evolução da Educação</h3>

            <p>E você?</p>

            <p>Já se sente como um aluno Digital? Acompanhe a evolução da Educação com o passar dos anos.</p>
        </div>

        <img class="grafico-img" src="/assets/grafico.svg" alt="">

        <div class="button-container" style="margin-top: -100px">
            <button class="next-button3" onclick="replace('conteudo6', 'conteudo7')">Avançar</button>
        </div>
    </div>


    <!-- CONTEUDO 7 -->
    <div class="container" id="conteudo7" style="display: none">
        <div class="conteudo-content">
            <h3>Novas Realidades na Escola</h3>

            <p>Como você já sabe, o mundo está cada vez mais dependente da tecnologia, e essa mudança está trazendo alterações também no ambiente pedagógico. Observe como as escolas estão lidando com esta nova realidade. Um exemplo disso pode ser encontrado assistindo a este vídeo.</p>

            <p>Você pode acessar a transcrição clicando <a target="_blank" href="https://apps.univesp.br/educacao-digital-e-o-mercado-de-trabalho/transcricoes/2%C2%BA%20Vi%CC%81deo%20-%20Transcric%CC%A7a%CC%83o%20-%20A%20educac%CC%A7a%CC%83o%20na%20era%20digital.pdf">aqui</a>.</p>

            <div class="button-container">
             <button class="next-button2" onclick="replace('conteudo7', 'conteudo8')">Avançar</button>
            </div>
        </div>

        <div class="imagem-conteudo-container">
            <iframe width="100%" height="260px" src="https://www.youtube.com/embed/Eu5S8MBLKWE"></iframe>
        </div>
    </div>


    <!-- CONTEUDO 8 -->
    <div class="container" id="conteudo8" style="display: none">

        <div class="conteudo8-container">
            <div class="conteudo-content">
                <h3>Mercado de Trabalho</h3>

                <p>Mercado de trabalho é uma expressão utilizada pra se referir às formas de trabalho que possam existir, sendo remunerados de alguma forma, seja trabalho manual ou intelectual. As pessoas vendem sua força de trabalho por um salário, que pode ser em dinheiro, moradia, bonificação ou outra forma de recompensa pelo trabalho exercido.​​</p>

                <p>Podemos dizer que o mercado de trabalho é dividido em 3 setores:</p>            
            </div>

            <div class="imagem-conteudo-container">
                <img src="/assets/mercado_trabalho.jpeg" alt="">
            </div>
        </div>

        <div class="conteudo8-container">
            <div class="imagem-conteudo-container" id="imgConteudo8-2">
                <img src="/assets/primario.jpeg" alt="">
            </div>

            <div class="conteudo-content">
                <p class="content-conteudo8"><strong>Primário </strong>- Lida diretamente com a matéria-prima, como a agricultura, a pecuária e a extração mineral e vegetal;</p>            
            </div>
        </div>

        <div class="conteudo8-container">
            <div class="conteudo-content">
                <p class="content-conteudo8"><strong>Secundário </strong>- Lida com a modificação da matéria-prima, construindo objetos utilizáveis, como as indústrias e a construção civil;</p>            
            </div>

            <div class="imagem-conteudo-container" id="imgConteudo8-3">
                <img src="/assets/secundario.jpeg" alt="">
            </div>
        </div>

        <div class="conteudo8-container">
            <div class="imagem-conteudo-container" id="imgConteudo8-4">
                <img src="/assets/terciario.jpeg" alt="">
            </div>

            <div class="conteudo-content">
                <p class="content-conteudo8"><strong>Terciário </strong>- Relacionadas a prestação de serviços, como: bancos, hospitais, escolas, mercados, ou seja, quando a forma de trabalho lida com pessoas e não com os objetos como principal foco de atuação.</p>  
                    
                <div class="button-container">
                    <button class="next-button2" onclick="replace('conteudo8', 'conteudo9')">Avançar</button>
                </div>
            </div>
        </div>
        
    </div>


    <!-- CONTEUDO 9 -->
    <div class="container" id="conteudo9" style="display: none">
        <div class="conteudo-content9">
            <h3>Era Digital</h3>

            <p>A era digital chegou e chegou para ficar em todos os sentidos e em todos os setores.</p>

            <p>Quando nos referimos à carreira no mercado de trabalho, paramos e pensamos o que fazer: será que conseguirei vencer nesse mercado tão competitivo?</p>

            <p>Se unirmos a era digital e a carreira de trabalho, logo abrimos o leque de opções e de carreiras que antes era executadas de maneira manual e hoje são realizadas por meios digitais. Logo, cabe a nós aprender e nos adequar às novas funções que o mercado de trabalho exige. Dessa forma entrarmos de vez na era digital.</p>
        </div>

        <div class="button-container" >
            <button class="next-button3" onclick="replace('conteudo6', 'conteudo7')">Avançar</button>
        </div>
    </div>
`;




