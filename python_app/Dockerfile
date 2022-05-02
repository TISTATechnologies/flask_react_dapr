FROM python:3.8-alpine
RUN apk --update add curl
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5000

# python3 -m flask run --host=0.0.0.0 --port=5000
CMD [ "python3", "-m" , "flask", "run", "-h", "localhost", "-p", "5000"]

# run local code using dapr
# dapr run --app-port 5000 --app-id flask-backend --app-protocol http --dapr-http-port 3501 -- python3 -m flask run --host=0.0.0.0 --port=5000
# windows run this
# dapr run --app-port 5000 --app-id flask-backend --app-protocol http --dapr-http-port 3501 -- cmd /c "python3 -m flask run --host=0.0.0.0 --port=5000"


# build and run docker images
# docker build --tag python-docker .
# docker run --publish 5000:5000 --name py_docker_cont python-docker
