# NEXT.JS Open Jira App
### para Correr localmente, se NECESITA la base de datos
```
    docker-compose up -d
```
* El -d, significa que se ejecuta en segundo plano __detached__

* Para correr el proyecto, se necesita tener instalado NodeJS y MongoDB

## Configurar las variables de Entorno
### Renombrar el archivo .env_template a .env y configurar las variables de entorno
```
mongoDB URL LOCAL: mongodb://localhost:27017
```

* Reconstruir Modulos de Node y levantar NEXT.JS
```
    yarn install 
    yarn dev
```


## Llenar la base de datos con informacion de prueba

Llamar a:

```
    http://localhost:3000/api/seed
```