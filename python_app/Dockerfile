FROM python:3.8-alpine
RUN apk --update add curl
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .
CMD [ "python3", "-m" , "flask", "run", "-h", "localhost", "-p", "5000"]


# docker build --tag python-docker .
# docker run --publish 5000:5000  --name py_docker_cont python-docker

# kubectl apply -f python_node.yaml
# kubectl delete -f python_node.yaml