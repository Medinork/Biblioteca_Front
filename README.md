Frontend - Sistema de Biblioteca
Requisitos
Node.js 14 ou superior
npm 6 ou superior
Passos para Instalação
Clone o Repositório bash git clone <URL_DO_REPOSITORIO_FRONTEND> cd frontend

Instale as Dependências Use o npm para instalar as dependências necessárias: bash npm install

Configuração da API No arquivo src/config.js, configure a URL base para acessar o backend: javascript export const API_BASE_URL = 'http://localhost:8080/api';

Executar o Frontend Após instalar as dependências e configurar a API, execute o frontend: bash npm start

Acessar a Aplicação A aplicação estará disponível em: http://localhost:3000

Livros: Acesse http://localhost:3000/livros para ver a lista de livros.
Usuários: Acesse http://localhost:3000/usuarios para ver a lista de usuários.
Estrutura do Projeto
src/components: Contém os componentes React.
src/App.js: Componente principal que gerencia as rotas da aplicação.
Observações
Certifique-se de que o backend esteja rodando para que o frontend funcione corretamente.
