# npm run build
# https://blog.logrocket.com/deploy-react-app-kubernetes-using-docker/


# Create the React app build folder
FROM node:latest AS ui-build

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install 

COPY . ./
RUN npm run build



# Express
FROM node:latest AS server-build

WORKDIR /root/

COPY --from=ui-build /usr/src/app/build ./build

COPY package.json ./

RUN npm install

COPY express.js ./

EXPOSE 8080


CMD [ "node", "express.js" ]

# docker build --tag react-express-docker .
# docker run -p 8080:8080 --name react-docker_cont react-express-docker
# dapr run --app-port 8080 --app-id react-express --app-protocol http --dapr-http-port 3500 -- node express.js


# kubectl apply -f node.yaml
# kubectl delete -f node.yaml



# minikube ip
# minikube service --url nodeapp