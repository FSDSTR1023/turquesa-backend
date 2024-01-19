# INVITO

INVITO es una aplicación web donde los usuarios pueden crear y enviar invitaciones electrónicas personalizadas para bodas. Los usuarios pueden elegir entre una variedad de tarjetas prediseñadas y personalizarlas con detalles como nombres de los novios, fechas y lugares de la boda y la celebración.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos

Qué necesitas para instalar el software y cómo instalarlo:

- Node.js
- MongoDB

### Instalación

Pasos para poner en marcha el entorno de desarrollo:

```bash
git clone https://github.com/FSDSTR1023/turquesa-backend.git
cd turquesa-backend
npm install
```

### Configuración

'Placeholder'

## Uso

Descripción de cómo usar la aplicación, incluyendo ejemplos de comandos.

## API Endpoints

Descripción de los endpoints de la API con ejemplos de cómo usarlos.

### Usuarios

- **GET /usuarios**: Obtiene una lista de todos los usuarios.
- **POST /usuarios**: Crea un nuevo usuario.
- **GET /usuarios/{id}**: Obtiene un usuario específico por su ID.
- **PUT /usuarios/{id}**: Actualiza un usuario específico por su ID.
- **DELETE /usuarios/{id}**: Elimina un usuario específico por su ID.

### Tarjetas

- **GET /tarjetas**: Obtiene una lista de todas las tarjetas disponibles.
- **POST /tarjetas**: Crea una nueva tarjeta personalizada.
- **GET /tarjetas/{id}**: Obtiene una tarjeta específica por su ID.
- **PUT /tarjetas/{id}**: Actualiza una tarjeta específica por su ID.
- **DELETE /tarjetas/{id}**: Elimina una tarjeta específica por su ID.

### Asistentes

- **GET /asistentes**: Obtiene una lista de todos los asistentes.
- **POST /asistentes**: Añade un nuevo asistente a una tarjeta.
- **GET /asistentes/{id}**: Obtiene un asistente específico por su ID.
- **PUT /asistentes/{id}**: Actualiza la confirmación de asistencia de un asistente.
- **DELETE /asistentes/{id}**: Elimina un asistente de una tarjeta.

## Modelos de Datos

Descripción de los modelos de datos utilizados, incluyendo relaciones entre ellos.

### Usuario

- **Email**
- **Contraseña**
- **Tarjetas**: Relación uno a muchos con Tarjeta.

### Tarjeta

- **Nombre de los Novios**
- **Fecha de la Boda**
- **Hora de la Boda**
- **Lugar y Dirección de la Boda**
- **Fecha de la Celebración**
- **Hora de la Celebración**
- **Lugar y Dirección de la Celebración**
- **Usuario**: Relación muchos a uno con Usuario.
- **Asistentes**: Relación uno a muchos con Asistente.

### Asistente

- **Nombre y Apellidos**
- **Confirmación (Sí/No)**
- **Tarjeta**: Relación muchos a uno con Tarjeta.

## Tests

Cómo ejecutar las pruebas automatizadas para este sistema.

```bash
npm test
```

## Despliegue

Notas adicionales sobre cómo desplegar esto en un sistema en vivo.

## Construido con

- [MongoDB](https://www.mongodb.com/) - Base de datos
- [Express](https://expressjs.com/) - Framework de servidor
- [Mongoose](https://mongoosejs.com/) - ORM para MongoDB

## Contribuyendo

Por favor lee [CONTRIBUTING.md](URL) para detalles sobre nuestro código de conducta, y el proceso para enviarnos pull requests.

## Autores

- Carmen Plaza Romero- [https://github.com/carmenplazaromero](https://github.com/carmenplazaromero)
- Juan Mencía - [https://github.com/juanmm99] (https://github.com/juanmm99)
- Massimiliano Marinucci - [https://github.com/m-marinucci] (https://github.com/m-marinucci)

## Licencia

Este proyecto está licenciado bajo la Licencia  - ver el archivo [LICENSE.md](https://github.com/FSDSTR1023/turquesa-backend/blob/main/LICENSE.MD) para detalles.

## Agradecimientos

- Jordi Galobart
- Ruben Sahugen
- Cristina Picatoste
