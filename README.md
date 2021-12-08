# Reto-Backend-API-Movies 🚀

Elaboracion de una API, que simula los principios de NETFLIX donde un usuario tiene un conjunto de peliculas y puede alquilarlas por un tiempo determinado, la API tiene arquitectura RestFULL y está desarrollada con las siguientes tecngologías:

  * Node.js: Entorno de ejecución multiplataforma  
  * NPM: Sistema de gestión de paquetes por defecto de Node.js
  * Express: Frameworks
  * MongoDB: Base de datos NoSql 
  * Moongose: ODM 
  * Postaman: Testear Api
  
  ***
## Pre-requisitos de uso 📋

* Backend : Descarga e instale Node.js, luego para la base de datos he descargado e instalado mongoDB, para visualizar
su estructura y manipularlo, he utilizado un O.D.M (Robo3t-1.4)  la ruta de la base de datos es:

 `'mongodb://localhost:27017/backend_netflix'`

* Puerto: El puerto por defecto es 3000, sin embargo he utilizado variables de entorno para ajustar el puerto para cada ambiente de trabajo. 

* Jwt secret: Para definir la clave secrete para generar el Token, debemos ajustarla en las variables de entorno en el campo TOKEN.

***

## EndPoints

            ├───Api_servidor
            ├───Usuario 
                ├──Rutas
                ├──Controladores
                ├──Funciones
                └──Modelo
            ├───Peliculas
                ├──Rutas
                ├──Controladores
                ├──Funciones
                └──Modelo
            ├───Middleware
            └───Variables de entornos

***
## Autenticación

 Para la Autenticación del usuario, he utilizado dos librerias: 
    
* Bcrypt: Es una librería que permite aumentar la privacidad y la seguridad ya que puedes convetir la contraseña de texto plano
    a un hash, y así el usuario queda más protegido de cara a un ataque a la base de datos. 
    
* Jwt TOKEN: La siguiente librería fue util para generar un token, que es generado cuando el usuario se logea , el mismo 
    funciona como una "llave" para acceder a las distintas rutas de las APP. 

***
### Estructura proyecto

         ├───app_servidor
            |    |
            |    ├───Usuario 
            |    ├──Rutas
            |    |    ├──router.post('/alta', controlador.crearUsuario)
            |    |    ├──router.post('/login', controlador.login)
            |    |    ├──router.get'/:id', controlador.buscarUsuarios)
            |    |    ├──router.put('/modificar/:id', controlador.cambiarNombre)
            |    |    └──router.delete ('/eliminar', controlador.eliminarUsuario)
            |    ├──Controladores 
            |    ├──Funciones
            |    └──Modelo
            |
            ├───Peliculas
                ├──Rutas
                |    ├──router.post('/', validacionJwt.verificarToken, controlador.añadir )
                |    ├──router.get('/:id', validacionJwt.verificarToken, controlador.buscarPelicula)
                |    ├──router.get('/',  controlador.buscarPeliculas)
                |    └──router.delete('/eliminar/:id', controlador.eliminarPelicula)
                ├──Controladores
                ├──Funciones
                └──Modelo

               

  ***
  ####  Esquema Usuario:
 ```
{
    nombre:{ type: String, required: true, trim: true, },
    apellidos:{ type: String, required: true },
    edad:{ type: Number, required: true },
    rol:{ type: String, required: true, lowercase: true, },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    contrasenia: {
        required: true,
        type: String,
        set:hash.crearHash
    }

}

```
  ####  Esquema Pelicula:
```
{
    titulo:{type:String, require},
    director:[{type:String}],
    genero:[{type:String}],
    duracion:{type:Number},
    actores:[{type:String},{type:String},{type:String}],
}
```
 ***
 ## Creacion
 
 [Brajin Miguel Hanna Azrak](https://github.com/BMHA1)
