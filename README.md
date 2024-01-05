# Agenta_Asp.NET_5-fornt-end

[![Angular](https://img.shields.io/badge/angular-16.0.0-red)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-5.0.0-blueviolet)](https://getbootstrap.com/)

Este é o frontend do projeto de um Gerenciador de Eventos desenvolvido em Angular, utilizando o Bootstrap 5 para estilização. O sistema permite a criação de eventos, definição de lotes, seleção de palestrantes, cadastro de redes sociais, e possui autenticação. O [backend](https://github.com/RenatoPereirals/Agenta_Asp.NET_5-back-end.git), desenvolvido em ASP.NET, complementa a funcionalidade do sistema.

## Pré-requisitos

- [Node.js](https://nodejs.org/) - versão 18.x
- [Angular CLI](https://cli.angular.io/) - instalado globalmente
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - versão 5.0.0

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/RenatoPereirals/Agenta_Asp.NET_5-fornt-end.git
```

2. Instale as dependências:

```bash
cd ProEventos-App
npm install
```

## Configuração

Certifique-se de configurar corretamente as variáveis de ambiente no arquivo `src/environments/environment.ts` para apontar para o backend ASP.NET.

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};
```

## Execução

Execute o servidor de desenvolvimento:

```bash
ng serve
```
ou
```bash
npm start
```

Acesse o aplicativo em [http://localhost:4200/](http://localhost:4200/).

## Recursos

- **Arquitetura Angular**: O projeto segue a arquitetura padrão do Angular para garantir uma estrutura organizada e escalável.

- **Componentes Reutilizáveis**: Componentes Angular foram desenvolvidos de forma modular e reutilizável para promover a manutenção fácil e a extensibilidade do sistema.

- **Bootstrap 5**: Utilizamos o Bootstrap 5 para uma experiência de usuário moderna e responsiva.

- **Paginação, Spinners e Toastrs**: O sistema incorpora recursos como paginação para navegação eficiente, spinners para indicar carregamento e toastrs para notificações amigáveis.

- **Autenticação**: O sistema é protegido por autenticação, garantindo acesso seguro às funcionalidades.

## Contribuindo

Sinta-se à vontade para contribuir para o desenvolvimento deste projeto. Abra uma issue para relatar bugs ou sugerir melhorias. Pull requests são bem-vindos!

