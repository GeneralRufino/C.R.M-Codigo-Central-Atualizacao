# DOCUMENTAÇÃO DO PROJETO: SISTEMA BATMOTOR
### Status: Desenvolvimento Ativo (Front-end Integrado)
# Liderança de Projeto: Cauã Rufino (Representante Oficial C.R.M.)

1. ## Contexto Institucional (C.R.M. Project)
- Descrição: A C.R.M. (Centro de Resolução de Sistemas) é uma empresa de tecnologia especializada em engenharia de software e otimização de processos industriais. Nosso foco é transformar gargalos operacionais em fluxos digitais de alta performance. Composta por uma equipe multidisciplinar de 11 especialistas, a C.R.M. utiliza metodologias ágeis e arquiteturas limpas para garantir que sistemas complexos, como o da Batmotor, sejam escaláveis, seguros e de fácil manutenção.

2. ### Escopo e Propósito do Sistema:
- Descrição do Ambiente: O sistema visa erradicar falhas operacionais no almoxarifado da Batmotor. A solução centraliza o controle de matérias-primas críticas (Lítio, Cobre, etc.), automatiza a reposição de estoque e garante a rastreabilidade total através de logs e perfis de acesso de funcionários que operam o setor do Almoxarifado e dos Gerentes que gerem funcionalidades mais vitais e importantes de todo o processo de Registro e Administração.
O Sistema -Totalidade- surge para substituir o controle manual e descentralizado da Batmotor por uma plataforma web centralizada.

- #### Caso de Solução: Painel de Controle Batmotor
A solução consiste em uma aplicação Web Full-Stack (atualmente com Front-end em React) que permite:

- Controle de Acesso: Login diferenciado para Administradores e Funcionários.

- Gestão de Estoque (CRUD): Visualização e edição em tempo real dos insumos da fábrica.

- Alertas Críticos: Sistema visual para identificar baixos níveis de materiais essenciais.

- Log de Auditoria: Registro de quem acessou e alterou os dados para segurança corporativa.

3. ## Regras de Negócio
#### Para garantir a integridade do sistema, foram estabelecidas as seguintes regras:

- Hierarquia de Acesso: Apenas perfis "Administrador" podem excluir registros ou alterar níveis críticos de segurança.

- Validação de Identidade: Uso de CPF como chave primária de identificação do colaborador.

- Alertas Automáticos: O sistema deve destacar em amarelo qualquer material cuja quantidade esteja abaixo do limite mínimo de segurança (ex: Lítio < 500kg).

- Fluxo de Navegação: Usuários não autenticados devem ser redirecionados obrigatoriamente para a LoginPage.

4. ### Planejamento de Codificação e Arquitetura
##### Stack Tecnológica
- Front-end: React.js (Vite)

- Linguagem: JavaScript (JSX)

- Roteamento: React Router DOM (v6)

- Metodologia Ágil: Kanban (organização por sprints de UI, Integração e Backend).

'frontend/
├── src/
│   ├── assets/       # Imagens e ícones (Logos Batmotor)
│   ├── pages/        # Componentes de página (Login, Dashboard)
│   ├── components/   # Componentes reutilizáveis (Botões, Inputs)
│   ├── styles/       # CSS Global e temas (Dark/Corporate)
│   ├── main.jsx      # Ponto de entrada e Configuração do Router
│   └── App.css       # Estilização base do layout
├── public/           # Arquivos estáticos
└── package.json      # Dependências e Scripts'



5. # Divisão e Funções da C.R.M
## Aspecto 0-1. #### Direção Geral de Operações e Tarefas
- Gestor Geral: Cauã Rufino/Antonio Monteiro
Subalternos de Divisão:Layla Iaponã/João Lucas/Gabriel/Jorge/João Augusto/João Arthur/José/Paulo/Daniel .
Função:Coordenação de contratos, prazos e aprovação final de relatórios e demandas da divisão C.R.M.
## Aspecto 0-2. Supervisão de Infraestrutura e Estilização de Aplicação
- Gestora: Layla Iaponã .Co-Host.
Subalternos de Divisão: João Lucas/Gabriel/Jorge/João Augusto/João Arthur.
Função: Planejamento da Estilização da aplicação e criação das prototipagens e funções das telas -> Pós isso, os Subalternos de Divisão aplicaram as estilizações por dentro do Projeto Central.

## Aspecto 0-3. Supervisão de Suporte da Informação e Pesquisa
- Gestor: Paulo .Supervisor de Pesquisa. 
Subalternos de Divisão: João Lucas/José/Daniel.
Função: Relatórios de Pesquisas e Documentações de informações para futuras aplicações dentro do Projeto Central e Eficiência sobre as Regras de Negócio.

6. ## TIPOS DE MANUTENÇÃO APLICADAS
- Manutenção Corretiva: A manutenção corretiva se faz presente e definida pelo aspecto onde a nossa equipe recebe toda a documentação e escopo do cliente, compreendendo o cerne do problema e gerando uma solução posterior. A Divisão C.R.M configura tal ato como manutenção corretiva pois cataloga um problema atual que acabou de alcançar o seu pico de danos sistemáticos e corporativos para a Empresa Cliente, assim sendo necessário um árduo trabalho para uma construção eficiente e que atenda aos anseios do cliente para que uma solução durável seja estabelecida junto a nova Aplicação Web construída por nós e os integrantes de nossa equipe.
- Manutenção Adaptativa: Tal manutenção de nossa Divisão se configura como adaptativa pois a manutenção que será feita trará a vital necessária atualização do sistema central do cliente, junto a melhorias gerais em todos ativos sistemáticos que serão construídos e aplicados pela nossa Divisão durante o Projeto Central. Em suma, sanando o e concluindo com o escopo central da problemática trazida pela Empresa Cliente.



## Nota de Segurança: Este sistema é propriedade da C.R.M. e destinado ao monitoramento da Estação de Produção Batmotor. O uso indevido dos dados de estoque está sujeito a auditoria interna.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
