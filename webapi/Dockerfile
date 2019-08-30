# Compile dist files
FROM node:alpine as dist
WORKDIR /tmp/
COPY package.json package-lock.json tsconfig.json ./
COPY ./ ./
RUN npm install
RUN npm run test
RUN npm run build

# install production packages
FROM node:alpine as node_modules
WORKDIR /tmp/
COPY package.json package-lock.json ./
RUN npm install --production

# copy dis files and production packages
FROM node:alpine
ENV NODE_ENV production
WORKDIR /usr/local/nub-api
COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
EXPOSE  3000
CMD ["node", "dist/main.js"]