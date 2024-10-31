# Projeto - Desafio

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponíveis

Iniciando:

Para instalar as bibliotecas necessárias do projeto:
#### `npm install`

Para inicializar o projeto, no diretório do projeto, você pode executar:
#### `HTTPS=true npm start`

Executa o aplicativo em modo de desenvolvimento.
Abra [https://localhost:3000](https://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações. \
Você também pode ver erros de lint no console.

### `npm test`

Inicia o executor de testes no modo interativo de observação.
Veja a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.


### `npm run build`

Compila o aplicativo para produção na pasta `build`.
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.

A compilação é minimizada e os nomes de arquivos incluem hashes.
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

## Resumo do projeto

### `- Estrutura de Frontend com Tailwind CSS`

Tailwind CSS foi utilizado para estilizar as interfaces. É um framework de utilitários CSS, permitindo que você construa layouts rapidamente usando classes prontas, o que facilita a criação de um design responsivo e moderno.

### `- CRUD de Livros`

Essa funcionalidade permite adicionar, visualizar, editar e excluir registros de livros. \
Cada livro provavelmente possui campos como título, autor, ano de publicação, entre outros. 

### `- Integração com a API HG Brasil para Consulta de Clima`

A consulta à API da HG Brasil traz dados climáticos em tempo real ou próximos disso. \
Esta integração incluí chamadas para buscar dados específicos (como temperatura, umidade, condição do tempo) que são exibidos no frontend, em um dashboard.

### `- Funcionamento Geral`

Com uma API como backend, o projeto é projetado para gerenciar dados de livros e exibir informações meteorológicas.