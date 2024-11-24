# Prova de Programação Avançada para Web

**Professor:** Otávio Lube  
**Aluna:** Anna Maria Lima da Silva  
**Matrícula:** 202202977

---

Esse projeto contém os códigos da prova de Programação Avançada para Web, disciplina obrigatória do curso de Ciências da Computação na Universidade de Vila Velha.

> Frameworks e bibliotecas:  
>  [![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script)
> ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
> ![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) > [![PrismaORM](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/docs/getting-started/quickstart)
> [![TS-NODE-DEV](https://img.shields.io/badge/TS--NODE--DEV-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/ts-node-dev)](https://www.npmjs.com/package/ts-node-dev)
> [![GroqCloud](https://img.shields.io/badge/GroqCloud-f55036?style=for-the-badge&logo=groq&logoColor=white&link=https://console.groq.com/playground)](https://console.groq.com/playground)
> [![bcrypt](https://img.shields.io/badge/bcrypt-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/bcrypt?activeTab=readme)](https://www.npmjs.com/package/bcrypt?activeTab=readme)
> [![jsonwebtoken](https://img.shields.io/badge/jsonwebtoken-red?style=for-the-badge&logo=npm&logoColor=white&link=https://www.npmjs.com/package/jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken)

## Configurando o .env

```
  DATABASE_URL=file:./dev.db
  GROQ_API_KEY=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
```

## Configurando o Prettier

Aperte o botão "F1" no teclado e digite "Prettier" e crie o arquivo de configuração e confirme que ele esteja da seguinte forma:

```
  {
  "tabWidth": 2,
  "useTabs": false,
  "semi": true
}
```

## Adicionando a configuração para formatar ao salvar

1. Aperte o botão "F1" no teclado;
2. Digite "Settings";
3. Selecione "Preferences: Open Settings (UI)";
4. Selecione no menu o divisor "Text Editor";
5. Selecione no menu o subdivisor "Formatting";
6. Marque o checkbox que se refere à função "Format on save".

## Como usar:

Primeiro, abra o terminal e digite:

```
npm install
```

Você pode executar o projeto através do código:

```
npm run build
```

Se você estiver desevolvendo, o ideal é que, ao invés do `npm run build`, o código usado seja:

```
npm run dev
```

### Em caso de erros durante a execução:

Os erros podem estar relacionado ao prisma, por esse motivo, uma forma de resolvê-los é criando novamente o banco de dados:

```
 npx prisma migrate dev --name init
```

### Extensões do VSCode recomendadas para o desenvolvimento:

```
{
    "recommendations": [
        "vscode-icons-team.vscode-icons",
        "esbenp.prettier-vscode",
        "prisma.prisma",
        "Prisma.prisma-insider"
        "rangav.vscode-thunder-client"
        "mikestead.dotenv"
        "qwtel.sqlite-viewer"
    ]
}
```
