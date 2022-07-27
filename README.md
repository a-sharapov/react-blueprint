<span align="center">

# React Blueprint 2022

![TypeScript](https://img.shields.io/badge/TypeScript-222?style=for-the-badge&logo=typescript&logoColor=f7df1e) ![REACT](https://img.shields.io/badge/React-222?style=for-the-badge&logo=react&logoColor=61dafb) ![Recoil](https://img.shields.io/badge/Recoil-222?style=for-the-badge&logo=bookstack&logoColor=3578e5) 
![ESLINT](https://img.shields.io/badge/ESLint-555?style=flat-square&logo=eslint&logoColor=fff) ![Prettier](https://img.shields.io/badge/Prettier-555?style=flat-square&logo=prettier&logoColor=fff)

</span>

## Особенности

##### Включает в себя:
- TypeScript;
- Топологию приложения;
- Менеджер состояний **Recoil**;
- Routing;
- ESLint и Prettier;

### ESLint
````
$ npm run lint
````

### Docker

````
$ docker build -t react_blueprint ./ --no-cache
$ docker run -p 3000:3000 -t -v "$(pwd)/src:/usr/src/app/src" -e CHOKIDAR_USEPOLLING=true react_blueprint
````
