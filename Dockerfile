FROM node:18-alpine
ENV PORT 3000
ENV APP_ROOT /usr/reactapp
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT
ADD package.json .
RUN npm install
ADD . .
EXPOSE $PORT
CMD ["npm", "run", "start"] 