# Projet 12 - Développer un tableau de bord d'analytics avec React

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

## 💻 [Repo Github](https://github.com/ToxyhDev/OC-Dev_App_JS_React-P12-SportSee)

## 🚀 Démarer le projet

Utilisation de @svgr/rollup pour la gestion des SVG. [Link npm](https://www.npmjs.com/package/@svgr/rollup)

Utilisation de Recharts pour les graphiques. [Link npm](https://www.npmjs.com/package/recharts)

## ⏳ Timing

**Date début :** 06/11/23

**Date de fin :** 17/11/23

### **Date de fin réel : **

## 📑 Etapes :

- [] **Étape n° 1 :** Initialisez le projet
- [] **Étape n° 2 :** Apprendre
- [] **Étape n° 3 :** Créez le mock des données
- [] **Étape n° 4 :** Créez la page tableau de bord **sans graphiques**
- [] **Étape n° 5 :** Créez la page tableau de bord **avec graphiques**
- [] **Étape n° 6 :** Connecter l'API au tableau de bord
- [] **Étape n° 7 :** Ecrire la documentation
- [] **Étape n° 8 :** Finalisez le projet

---

## Configuration d'ESlint pour ce projet

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
