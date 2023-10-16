FROM golang:1.21

WORKDIR /app

COPY ./faviobeckerhttp /app
COPY ./static /app/static

RUN go build -o bin .

EXPOSE 8080

ENTRYPOINT [ "/app/bin" ]