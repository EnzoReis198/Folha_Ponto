# Sistema de Controle de Ponto Digital

Este é um sistema de controle de ponto digital para **Funcionários** e **Administradores**. Ele permite registrar e gerenciar os pontos de entrada e saída dos funcionários, gerar relatórios, controlar horas extras, férias, e muito mais. O sistema utiliza **React**, **Node.js** com **Express**, e **MySQL** para garantir alta performance e escalabilidade.

## Funcionalidades

### Funcionalidades Básicas
1. **Tela de Login para Funcionários e Administradores**
   - Autenticação com **JWT** para garantir acesso seguro ao sistema.
   - Login separado para **Funcionários** e **Administradores**.

2. **Cadastro de Funcionários**
   - **Administrador** pode adicionar, editar e remover funcionários.
   - Campos como nome, cargo, data de admissão, entre outros.

3. **Batimento de Ponto**
   - Funcionários podem registrar sua entrada e saída.
   - Registro de ponto armazenado no banco de dados **MySQL**.

4. **Dashboard de Funcionário**
   - Tela para visualização das horas trabalhadas e histórico de pontos.
   - **Funcionários** só têm acesso ao próprio ponto.

5. **Relatórios Diários e Mensais**
   - **Administrador** pode visualizar relatórios de ponto de funcionários.
   - Filtros para pesquisa por data e funcionário.

6. **Geração de Relatórios em PDF**
   - **Administrador** pode gerar relatórios de ponto em formato PDF usando **jsPDF**.

7. **Controle de Acesso**
   - **Funcionários** têm acesso restrito ao próprio ponto.
   - **Administradores** têm acesso completo, incluindo gerenciamento de funcionários e relatórios.

8. **Cadastro de Cargo e Função**
   - O **Administrador** pode definir cargos e funções para os funcionários.

9. **Controle de Férias e Licenças**
   - O **Administrador** pode registrar e controlar férias e licenças de funcionários.

10. **Controle de Banco de Horas**
    - O **Administrador** pode gerenciar o banco de horas dos funcionários, incluindo horas extras e compensação.

### Funcionalidades Avançadas
11. **Integração com Biometria**
    - Registro de ponto usando **biometria** (digital ou facial).
    - Integração com **FingerprintJS** ou **FaceAPI**.

12. **Autenticação Multifatorial**
    - Implementação de autenticação multifatorial para maior segurança (código via SMS ou e-mail).

13. **Gestão de Salários**
    - O **Administrador** pode definir e gerenciar os salários dos funcionários.
    - Cálculo de salários com base nas horas trabalhadas.

14. **Controle de Jornada de Trabalho**
    - O **Administrador** pode configurar e monitorar a jornada de trabalho dos funcionários, incluindo turnos e horários flexíveis.

15. **Alertas e Notificações**
    - Notificações sobre pontos não registrados, horas extras, faltas, etc.

16. **Histórico de Alterações**
    - O **Administrador** pode visualizar o histórico de alterações no sistema (alterações de ponto, dados de funcionários, etc.).

17. **Gestão de Atrasos**
    - O sistema pode registrar e gerar relatórios sobre atrasos de funcionários.

18. **Filtros e Pesquisa de Dados**
    - Filtros para pesquisar por data, funcionário, tipo de evento (entrada/saída), etc.

19. **Configuração de Horário de Almoço**
    - Definição de horário de almoço e tempo de descanso para cada funcionário.

20. **Gestão de Admissão e Demissão**
    - O **Administrador** pode gerenciar as datas de admissão e demissão dos funcionários.

21. **Integração com API de Clima**
    - Exibição de dados climáticos no dashboard (opcional) para os funcionários.

22. **Controle de Ponto por Geolocalização**
    - Registro de ponto usando **geolocalização** para garantir que o funcionário está no local correto.

23. **Análises e Relatórios de Desempenho**
    - O **Administrador** pode gerar análises sobre o desempenho dos funcionários com base no histórico de ponto.

24. **Suporte a Diferentes Tipos de Contrato**
    - Suporte a diferentes tipos de contrato (integral, parcial, temporário).

25. **Gestão de Eventos Especiais (Feriados, Eventos Corporativos)**
    - O **Administrador** pode registrar feriados e eventos corporativos que afetam o ponto dos funcionários.

## Tecnologias Utilizadas

- **Frontend**: React
- **Backend**: Node.js com Express
- **Banco de Dados**: MySQL
- **Autenticação**: JWT (JSON Web Token)
- **Geração de Relatórios em PDF**: jsPDF
- **Biometria**: Integração com FingerprintJS ou FaceAPI
- **Segurança**: Autenticação multifatorial, criptografia de senhas com bcryptjs

## Estrutura do Projeto

### Backend
1. **Node.js com Express**: Servirá para criar as rotas da API, gerenciar autenticação e interagir com o banco de dados MySQL.
2. **Banco de Dados MySQL**: Armazenamento de dados de funcionários, pontos registrados, relatórios, etc.
3. **Autenticação JWT**: Protege rotas e permite a autenticação de funcionários e administradores.

### Frontend
1. **React**: Framework para construir a interface de usuário, incluindo páginas de login, dashboard, formulários e visualizações de relatórios.
2. **React Router**: Gerencia a navegação entre as diferentes telas do sistema.
3. **Axios**: Realiza as requisições para a API backend.

## Como Rodar o Projeto

### Pré-requisitos
- **Node.js** instalado (você pode baixar [aqui](https://nodejs.org/)).
- **MySQL** configurado (instale o MySQL [aqui](https://dev.mysql.com/downloads/)).

### Passos para Instalar as Dependências

#### 1. Backend

1. Clone o repositório do **backend**:
   ```bash
   git clone <url-do-repositorio-backend>
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua-senha
   DB_NAME=controle_ponto
   JWT_SECRET=sua-chave-secreta
   ```
4. Crie o banco de dados **controle_ponto** no MySQL.
   ```sql
   CREATE DATABASE controle_ponto;
   ```
5. Execute os scripts de criação das tabelas (se fornecido no repositório).
6. Rode o servidor backend:
   ```bash
   npm start
   ```

#### 2. Frontend

1. Clone o repositório do **frontend**:
   ```bash
   git clone <url-do-repositorio-frontend>
   cd frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o servidor frontend:
   ```bash
   npm start
   ```

### Banco de Dados
1. Crie o banco de dados **controle_ponto** no MySQL.
2. Execute os scripts de criação das tabelas fornecidos no repositório.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Faça as alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
