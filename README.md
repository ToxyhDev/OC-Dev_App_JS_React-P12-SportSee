![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Recharts](https://img.shields.io/badge/recharts-%2324C8DB.svg?style=for-the-badge&&logoColor=%23FFFFFF)

# Projet 12 - Develop an analytics dashboard with React

Here you will find **project 12** of the **“JavaScript/React application developer”** training. The objective of this project is to create a web application which allows you to display its performances which are received from a REST API.

## Table of Contents

- [🛠️ Project](#%EF%B8%8F-project)
  - [Prerequisites](#1-prerequisites)
  - [Starting the project](#2-starting-the-project)
  - [Build the project](#3-build-the-project)
- [🔩 List of Dependencies](#-list-of-dependencies)
- [🚧 Setting up ESlint for this project](#-setting-up-eslint-for-this-project)
- [🔗 List of endpoints](#-list-of-endpoints)

## 🛠️ Project

### 1. Prerequisites

You can fork the Back-End part with the REST API on this [github repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

> [!TIP]
> For installation, don't use Docker

> [!NOTE]  
> It is not mandatory to use the API to run this project. A mock of the data is available.
>
> ```js
> // src/api/GetUserAllData.tsx
> export const apiDisconnected = true //mock used
> export const apiDisconnected = false //mock not used
> ```

### 2. Starting the project

1. Fork this repo

2. Use this command to start the project:

```shell
# With NPM:
npm run dev
```

### 3. Build the project

> [!IMPORTANT]  
> Before building the project, remember to modify **base in vite.config.js** and **basename in main.tsx**.

Use this command to build the project:

```shell
# With NPM:
npm run build
```

### 🔩 List of Dependencies

- Use of **vite-plugin-svgr** for managing SVGs. [Link npm](https://www.npmjs.com/package/vite-plugin-svgr)
  In tsconfig.json I added the "types" line:

```json
"compilerOptions":
{
    "types": ["vite-plugin-svgr/client"]
},
```

- Using **Recharts** for charts. [Link npm](https://www.npmjs.com/package/recharts)

## 🚧 Setting up ESlint for this project

> [!IMPORTANT]  
> The information in this part is for information purposes only, the configuration is already applied.

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## 🔗 List of endpoints

This project includes four endpoints that you will be able to use:

- 🆕 `http://localhost:3000/users` - retrieves all users
- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).
