# MVC Mode  ##

## Descrição (Description) ##

**Português**: Neste projeto o intuíto foi aplicar os conceitos da arquitetura MVC (Model, View and Controller), dividindo cada arquivo nas suas respectivas pastas de acordo com suas funcionalidades.

**English**: In this project, the aim was to apply the concepts of the MVC (Model, View and Controller) architecture, dividing each file into their respective folders according to their functionalities.

## Tecnologias (Technologies) ##

- **Node.js**
- **Express**
- **Express-Handlebars**
- **Nodemon**
- **Sequelize**

## Instalação (Installation) ##

Certifique-se de ter o Node.js e o MySQL instalados em sua máquina. Clone o repositório e instale as dependências com o comando abaixo:

Make sure you have Node.js and MySQL installed on your machine. Clone the repository and install the dependencies with the command below:

```bash
cd seu_repositorio
git clone https://github.com/CaduConrado/MVC-Model
npm install
```

## Como Usar (How to Use) ##

Para iniciar o sistema, execute o seguinte comando no terminal: 

To start the system, run the following command in the terminal:

```bash
npm start
```

**Português**: Com isso você receberá uma mensagem no terminal informando que o servidor está rodando. Podendo acessar a aplicação via navegador através da porta setado no código.

**English**: With this you will receive a message on the terminal informing you that the server is running. You can access the application via browser through the port set in the code.

## Projeto Exemplo (Project of Example)

## ToDo List
**Descrição**: Neste projeto o foco principal é apresentar as divisões corretas das pastas utilizando a arquitetura MVC. Para isso foi desenvolvido um sistema de ToDo List, onde o usuário pode criar suas atividades do dia, por exemplo, e após isso poderá marcá-la como realizada, editá-la se necessário, e excluí-la.

**Description**: In this project the main focus is to present the correct divisions of folders using the MVC architecture. For this purpose, a ToDo List system was developed, where the user can create their activities for the day, for example, and after that they can mark it as completed, edit it if necessary, and delete it.

## Estrutura: 
```
   index.js
   structure.txt
   
+---controller
    TaskController.js
       
+---db
    conn.js
       
+---models
    Task.js
       
+---public
    +---css
        styles.css
+---routes
    tasksRoutes.js
       
+---views
    +---layouts
        main.handlebars       
    +---tasks
        all.handlebars
        create.handlebars
        editPage.handlebars
```
## Exemplo (Example): ##
Tendo em vista o melhor entendimento do fluxo de funcionamento do projeto desenvolvi um pequeno frontend para demonstrar a funcionalidade das rotas presentes em **routes/**. 

![Página Inicial](https://github.com/CaduConrado/MVC-Model/blob/main/assets/todo_list_01.jpeg)

![Criar Task](https://github.com/CaduConrado/MVC-Model/blob/main/assets/todo_list_02.jpeg)

![Editando Task](https://github.com/CaduConrado/MVC-Model/blob/main/assets/todo_list_03.jpeg)

![Finalizando Task](https://github.com/CaduConrado/MVC-Model/blob/main/assets/todo_list_04.jpeg)

## Estrutura do Projeto (Project Structure) ##

- **index.js**: Contém o código principal do sistema.
- **assets/**: Contém as imagens do projeto.
- **controller/**: Na pasta Controller, última parte do acrônimo MVC, é onde ocorre geralmente a integração do Model com a View, onde temos a nossa lógica do projeto sendo trabalhada.
- **models/**: Aqui está a primeira parte do acrônimo MVC, temos a pasta Models que será responsável por tudo relacionado a integração com o Banco de Dados.
- **public/**: Onde nós temos os nosso static files (arquivos estáticos), como por exemplo o nosso arquivo CSS para o frontend.
- **routes/**: A pasta routes é onde teremos os nossos arquivos responsáveis pelas rotas do nosso projeto, aode iremos criar as nossas urls responsáveis por cada ação de CRUD. 
- **views/**: Em Views, a segunda parte do acrônimo MVC, é onde nós teremos tudo relacionado ao frontend, tudo que será apresentado visualmente para o usuário do sistema.

## Dependências (Dependencies)

- **Express**: Utilizado para criação das rotas.
- **Express-Handlebars**: Utilizado para a criação de layouts reutilizáveis no frontend.
- **Nodemon**: Utilizado para otimizar o desenvolvimento.
- **Mysql2**: Utilizado para utilizar o Sequelize.
- **Sequelize**: ORM utilizado para realizarmos as nossas operações com banco de dados de forma mais eficiente.

## Contribuição (Contribution) ##

**Português**: Sinta-se à vontade para contribuir com o projeto, sugerindo melhorias ou relatando problemas.

**English**: Feel free to contribute to the project by suggesting improvements or reporting issues.