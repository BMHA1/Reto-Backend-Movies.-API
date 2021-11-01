# Reto-Backend-Movies.-API


# API simple de backend netflix :
***
    Elaboracion de una API, con practicas Rest FULL y usando base datos local, Node.js, Express,Mongo y Postaman para el testeo
de la misma. 
***
## Introducción

* Backend : Descarga e intalación de Node.js, luego para hacer la base de datos he descargado e instalado mongoDB y para visualizar
su estructura y manipularlo, he utilizado un O.D.M (Robo3t-1.4)  la URL de la base de datos es:  `'mongodb://localhost:27017/backend_netflix'`

* Puerto: se ha utilizado el puerto 3000, simplemente se debe ajustar en las variables de entorno ese valor. 

* Jwt secret: al igual que el puerto, hay que definir la clave en las variables de entorno en el campo TOKEN.

***
Estrutura de carpetas
***
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
***
 ### La autenticación ha sido posible a dos librerias: 
    
* Bcrypt: Es una librería que permite aumentar la privacidad y la seguridad ya que puedes convetir la contraseña de texto plano
    a un hash, y así el usuario queda más protegido de cara a un ataque a la base de datos. 
    
* Jwt TOKEN: La siguiente librería fue util para generar un token, que es generado cuando el usuario se logea , el mismo 
    funciona como una "llave" para acceder a las distintas rutas de las APP. 

***
### Endpoints
***
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
    Schemas 
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