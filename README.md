# Mercado de Trabalho – App Inatel 

**Nome:** Frederico Wlassow  
**Matrícula:** 153  
**Disciplina:** Interface Homem Máquina 

## Link do projeto online (GitHub Pages)
[https://fredwlassow13.github.io/Projeto-S05/]
## Objetivo do projeto
Criar uma nova funcionalidade completa para o App do Inatel: **seção “Mercado de Trabalho”** onde o aluno pode visualizar vagas de estágio e emprego júnior, ver detalhes completos e enviar sua candidatura com currículo em PDF — tudo com a identidade visual oficial do aplicativo.

## Funcionalidades implementadas
- Interface 100% fiel ao App oficial do Inatel (cores, tipografia, logo SVG, ícones Material)
- Tema claro e escuro com alternância perfeita (botão no menu lateral)
- Listagem de vagas reais (Estágio em TI e Desenvolvedor Júnior)
- Detalhes dinâmicos da vaga (título, empresa, descrição e requisitos mudam conforme a vaga escolhida)
- Candidatura com upload de currículo (aceita somente PDF)
- Feedback visual ao enviar candidatura
- Navegação completa com botão “Voltar” que mantém a vaga correta (fluxo bidirecional sem perder contexto)
- Totalmente responsivo (testado em desktop e mobile)

## Tecnologias utilizadas
- HTML5 semântico
- CSS3 puro (sem frameworks)
- JavaScript vanilla (ES6+)
- URLSearchParams para passagem de parâmetros entre páginas
- GitHub Pages como hospedagem

## Estrutura de arquivos

```plaintext
├── index.html          → Tela inicial (simulação do App)
├── vagas.html          → Listagem de vagas
├── detalhes.html       → Detalhes da vaga (dinâmico)
├── candidatura.html    → Formulário de candidatura (dinâmico)
├── style.css           → Estilos completos + tema escuro
├── script.js           → Menu, tema, envio de candidatura
└── README.md           → Este arquivo

```

## Como testar
1. Acesse o link acima
2. Clique em “Mercado de Trabalho”
3. Teste as duas vagas (Estágio em TI → Empresa X | Desenvolvedor Júnior → Empresa Y)
4. Vá até a candidatura e volte → a vaga continua correta
5. Alterne o tema no menu lateral

## Justificativa da funcionalidade
A seção “Mercado de Trabalho” é uma funcionalidade muito pedida pelos alunos do Inatel. Hoje o app não possui um espaço centralizado para vagas de estágio e emprego júnior. Este projeto entrega uma solução completa, intuitiva e totalmente integrada à identidade visual existente, facilitando a conexão entre alunos e oportunidades reais de carreira.

