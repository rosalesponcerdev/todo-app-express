# Proyecto Node.js con Express y MongoDB usando Docker Compose

Este es un proyecto de ejemplo que utiliza Node.js y Express para construir un servidor web, y MongoDB como base de datos. Además, se utiliza Docker Compose para facilitar la configuración y ejecución de MongoDB en un contenedor, y se crea una imagen Docker del proyecto de Node.js.

## Requisitos previos

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)
-   Node.js y npm

Repositorio: https://github.com/rosalesponcerdev/todo-app-express

## Instrucciones de configuración

1. **Instalar Dependencias:**

    ```bash
    npm install
    ```

## Ejecución con Docker Compose

Este proyecto incluye un archivo docker-compose.yml para facilitar la configuración de MongoDB en un contenedor.

1.  **Iniciar los Contenedores:**
    Este proyecto incluye un archivo docker-compose.yml para facilitar la configuración de MongoDB en un contenedor.

    ```bash
    docker-compose up -d --build
    ```
    Esto iniciará el servidor Node.js en http://localhost:3000 y MongoDB en el  contenedor.

2.  **Detener los Contenedores:**
    ```bash
    docker-compose down --rmi all --volumes
    ```