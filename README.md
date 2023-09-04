# Lista de Tareas con React

## Descripción
El repositorio contiene un TODO Machine, una herramienta práctica que facilita la creación de tareas de manera sencilla.

Este proyecto se desarrolló siguiendo el curso "React.js" de Platzi. Durante el curso, adquirimos las habilidades y conocimientos fundamentales que nos permitieron personalizar la aplicación, añadiendo nuestros propios estilos y funcionalidades.

## Implementación
Para poner la aplicación en línea y obtener una URL pública, utilizamos el paquete npm llamado gh-pages. Una vez que lo hemos añadido como una dependencia de desarrollo, creamos un script en el archivo package.json para ejecutar el comando necesario. En el caso de este proyecto, el script se llama "deploy" y el comando correspondiente es "gh-pages -d src". Luego, en una terminal dentro de la carpeta del proyecto, ejecutamos "npm run deploy". Esto hace que el comando busque un archivo index.html dentro de la carpeta src y cree una rama de despliegue en el repositorio del proyecto que ya habíamos creado en GitHub. Al acceder a la página GitHub del repositorio del proyecto, encontraremos la URL pública.

En el caso específico de este proyecto, la URL es: https://carolinamoralese.github.io/Lista-de-tareas/

Para actualizar el sitio después de realizar cambios, simplemente volvemos a ejecutar el comando "npm run deploy".

## Vista del proyecto
- Al momento de ingresar si no hay tareas pendientes nos aparecerá de la siguiente manera:
![Captura de pantalla 2023-09-04 a la(s) 2.15.01 p.m..png](https://github.com/carolinamoralese/Lista-de-tareas/blob/d1cc0ea68777f5ee86994999e345f7d06618d3d0/src/Captura%20de%20pantalla%202023-09-04%20a%20la(s)%202.15.01%20p.m..png)

- Si por lo contrario ya hay tareas ingresadas se vera de la siguiente manera:
![Captura de pantalla 2023-09-04 a la(s) 2.16.21 p.m..png
](https://github.com/carolinamoralese/Lista-de-tareas/blob/d1cc0ea68777f5ee86994999e345f7d06618d3d0/src/Captura%20de%20pantalla%202023-09-04%20a%20la(s)%202.16.21%20p.m..png)

- Al ingresar una nueva tarea se vera de la siguiete manera:
![Captura de pantalla 2023-09-04 a la(s) 2.15.32 p.m..png
](https://github.com/carolinamoralese/Lista-de-tareas/blob/d1cc0ea68777f5ee86994999e345f7d06618d3d0/src/Captura%20de%20pantalla%202023-09-04%20a%20la(s)%202.15.32%20p.m..png)

## Instrucciones de Uso desde local

1. Clona este repositorio en tu computadora local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en modo desarrollo.
5. Abre tu navegador y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.
