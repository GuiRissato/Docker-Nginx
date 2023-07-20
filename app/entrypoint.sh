#!/bin/bash

# Instale o Dockerize
DOCKERIZE_VERSION=v0.7.0
wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin

# Espere até que o serviço de banco de dados (MySQL) esteja disponível por até 5 minutos
dockerize -wait tcp://db-node:3306 -timeout 2m
