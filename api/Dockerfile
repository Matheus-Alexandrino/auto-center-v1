FROM golang:1.22-alpine
WORKDIR /src
COPY go.mod ./
RUN go mod download
COPY . .
EXPOSE 8787
CMD ["go","run","."]
