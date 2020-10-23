#Pseudo code

- [x] Establecer `yarn scripts` para inicialización del servidor
- [x] Instalar las siguientes dependencias:

  - Express
  - Body parser
  - Nodemon
  - Winston
  - Dotenv
  - Node fetch

- [x] Crear un archivo `index`
- [x] Crear un servidor usando express en el archivo `index`
- [x] Crear una carpeta llamada `lib`
- [x] Dentro de `lib crear un logger
- [x] Crear una carpeta llamada `middleware` que contenga los middlewares para:
  - Logger
  - Que las respuestas salgan en formato **JSON**
- [x] Decirle al servidor que serialice las peticiones a JSON usando `body-parser`
- [x] Decirle al servidor que use los middleware anteriormente descritos
- [x] Setear `host` y `port`
- [x] Crear un directorio llamado **routes** y dentro crear un archivo con el nombre del recurso `forecast` y adentro del archivo crear la ruta
- [x] Crear un directorio llamado **controllers** y dentro crear un archivo con el nombre del recurso `forecast` y adentro del archivo crear el controlador
- [x] Crear un directorio llamado **models** y dentro crear un archivo con el nombre del recurso `forecast` y adentro del archivo el modelo que manejara las peticiones a loss API
- [x] Registrarme como usuario en las siguientes APIs y reclamar las llaves de accesso ( _API Keys_)
  - [Opencagedata](https://opencagedata.com/api)
  - [Open weather](https://openweathermap.org/api/one-call-api)
- [x] Crear un archivo de configuracion oculto (`.env`) a git que contenga las llaves
- [x] Decirle a git que no registre el archivo `.env`
- [x] Usando la libreria `dotenv` solicitar las llaves
- [x] Solicitar la latitud y longitud (`lat` & `long`) en _opencagedata_
- [x] Solicitar la prediccion en _Open Weather_ el tiempo usando `lat` & `long` de _opencagedata_
- [x] Devolver la data al cliente
