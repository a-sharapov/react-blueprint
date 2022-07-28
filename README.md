<span align="center">

# React Blueprint 2022

![TypeScript](https://img.shields.io/badge/TypeScript-222?style=for-the-badge&logo=typescript&logoColor=f7df1e) ![REACT](https://img.shields.io/badge/React-222?style=for-the-badge&logo=react&logoColor=61dafb) ![Recoil](https://img.shields.io/badge/Recoil-222?style=for-the-badge&logo=bookstack&logoColor=3578e5) ![Vite](https://img.shields.io/badge/Vite-222?style=for-the-badge&logo=vite&logoColor=3578e5) 

</span>
<span align="center">

![ESLINT](https://img.shields.io/badge/ESLint-555?style=flat-square&logo=eslint&logoColor=fff) ![Prettier](https://img.shields.io/badge/Prettier-555?style=flat-square&logo=prettier&logoColor=fff)

</span>

## Особенности

##### Включает в себя:
- TypeScript;
- Топологию приложения;
- Менеджер состояний **Recoil**;
- Routing;
- React Helmet;
- ESLint и Prettier;
- Vite;

### Переменные окружения (.env)
````
VITE_APP_NAME="Vite React Blueprint"
VITE_APP_NAME_SHORT="Blueprint"
VITE_APP_DESCRIPTION="Dummy description"
VITE_APP_THEME_COLOR="#00bcd4"
VITE_APP_BACKGROUND_COLOR="#efefef"
VITE_BUILD_VERSION=0.0.1
VITE_APP_PORT=3000
VITE_ROOT_PATH=./
VITE_PUBLIC_PATH=./public
VITE_OUTPUT_PATH=./dist
VITE_PWA_DEV_OPTIONS_ENABLED=true
````

### ESLint
````
npm run lint
````

### Docker

````
docker build -t react_blueprint ./ --no-cache
````

````
docker run -p 3000:3000 -t -v "$(pwd)/src:/usr/src/app/src" -e CHOKIDAR_USEPOLLING=true react_blueprint
````
