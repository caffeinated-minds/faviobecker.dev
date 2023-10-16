FROM golang:1.21

WORKDIR /app

# I think I need to amend where these files are going. /app/[folderName] ?
COPY ./faviobeckerhttp /app
COPY ./static /app/static

RUN go build -o bin .

EXPOSE 8080

ENTRYPOINT [ "/app/bin" ]
