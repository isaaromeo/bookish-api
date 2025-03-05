# Bookish-api 📚

Bookish-api es una API RESTful desarrollada con Node.js, Express y MongoDB para gestionar libros, reseñas y usuarios. Esta API permite a los usuarios registrarse, iniciar sesión, gestionar libros, dejar reseñas y más.

## Características principales 🌟

- **Gestión de libros**: Crear, actualizar y eliminar libros. Los libros sólo podran ser publicados/actualizado/borrados por usuarios con rol `admin`.
- **Reviews**: Los usuarios pueden dejar reviews sobre los libros sólo si estan registrados. Una vez publicada la review se actualizara la librería del usuario(añadiendo el libro reseñado), la lista de reviews del usuario y la lista de reviews del libro. Si esta review se borra desaparederá de dichas listas. Las reviews sólo pueden ser actualizadas por el usuario que la crea y borrada por el mismo o por un admin.
- **Usuarios**: Los usuarios pueden dejar reviews sobre los libros sólo si estan registrados. La única forma que tiene un usuario de añadir un libro a su librería es dejando una reseña del mismo. Los usuarios podrán visualizar la información de otros usuarios sólo si estan registrados.
- **Autenticación**: Registro e inicio de sesión de usuarios con JWT (JSON Web Tokens).
- **Roles de usuario**: Los usuarios pueden tener roles de `user` o `admin`. El rol `user` permite a un usuario crear/actualizar/borrar reviews y visualizar los datos de libros y otros usuarios. Mientras que el con el rol `admin` puedes hacer lo mismo además de crear/actualizar/borrar libros.
- **Subida de imágenes**: Uso de Cloudinary para almacenar imágenes de portadas de libros y fotos de perfil de usuarios.
- **Búsqueda y filtrado**: Obtener libros por categoría o ID. 

## Tecnologías utilizadas 🛠️

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL para almacenar datos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB.
- **Cloudinary**: Servicio para almacenar y gestionar imágenes.
- **JWT**: Autenticación basada en tokens.
- **Bcrypt**: Encriptación de contraseñas.
- **Multer**: Middleware para la subida de archivos.

## Requisitos previos 📋

- Node.js (v18 o superior)
- MongoDB (local o en la nube)
- Cuenta en [Cloudinary](https://cloudinary.com/) para la gestión de imágenes.
- Variables de entorno configuradas en un archivo `.env`.

## Configuración ⚙️

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/bookish-api.git
   cd bookish-api
2. **Instala las dependencias**:
   ```bash
   npm install
3. **Configura variables de entorno**:
   ```bash
    DB_URL=mongodb+srv://<usuario>:<contraseña>@cluster0.r4cwo.mongodb.net/<nombre-bbdd>?retryWrites=true&w=majority
    CLOUDINARY_CLOUD_NAME=<tu-cloud-name>
    CLOUDINARY_API_KEY=<tu-api-key>
    CLOUDINARY_API_SECRET=<tu-api-secret>
    JWT_SECRET=<tu-jwt-secret>
    
4. **Inicia el servidor**:
   ```bash
    npm run start
5. **Carga datos iniciales**:
   ```bash
   npm run bookSeed
## Endpoints de la API 📡
- ### Autenticación 🔐
    - **Registro de usuario**: `POST /api/user/register`
    - **Inicio de sesión**: `POST /api/user/login`
- ### Libros 📖
    - **Obtener todos los libros**: `GET /api/books`
    - **Obtener libros por categoría**: `GET /api/books/category/:categories`
    - **Crear un libro**: `POST /api/books (Requiere autenticación de admin)`
    - **Actualizar un libro**: `PUT /api/books/:id` (Requiere autenticación de admin
    - **Eliminar un libro**: `DELETE /api/books/delete/:id` (Requiere autenticación de admin)
- ### Reviews ✍️
    - **Obtener todas las reseñas**: `GET /api/reviews`
    - **Obtener reseñas de un libro**: `GET /api/reviews/:bookId`
    - **Crear una reseña**: `POST /api/review`s (Requiere autenticación)
    - **Actualizar una reseña**: `PUT /api/reviews/:id/:userId` (Requiere autenticación)
    - **Eliminar una reseña**: `DELETE /api/reviews/:id/:userId` (Requiere autenticación)
- ### Usuarios 👤
    - **Obtener información de un usuario**: `GET /api/user/:id` (Requiere autenticación)
    - **Actualizar usuario**: `PUT /api/user/:id` (Requiere autenticación)
    - **Eliminar usuario**: `DELETE /api/user/:id` (Requiere autenticación)
    - **Actualizar rol de usuario**: `PUT /api/user/update_rol/:id` (Requiere autenticación de admin)

## Estructura del proyecto 🗂️
```
bookish-api/
├── src/
│   ├── api/
│   │   ├── controllers/        # Controladores para libros, reseñas y usuarios
│   │   ├── models/             # Modelos de Mongoose (Book, Review, User)
│   │   ├── routes/             # Rutas de la API
│   ├── config/                 # Configuración de la base de datos y Cloudinary
│   ├── middlewares/            # Middlewares de autenticación y subida de archivos
│   ├── utils/                  # Utilidades (token, roles, etc.)
│   ├── data/                   # Datos de ejemplo (libros)
├── index.js                    # Punto de entrada de la aplicación
├── .env                        # Variables de entorno
├── README.md                   # Documentación del proyecto
```

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
