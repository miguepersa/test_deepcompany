## Conocimientos Teoricos

### Lenguajes de Programacion Backend

Los lenguajes de programación backend son aquellos que se utilizan para gestionar la lógica del servidor, el manejo de bases de datos, la autenticación de usuarios, y la lógica de negocio de una aplicación web o móvil. Algunos ejemplos son:

* Python: Popular por su sintaxis clara y sencilla, ampliamente utilizado en ciencia de datos, desarrollo web (Django, Flask) y automatización.
* Java: Conocido por su portabilidad entre plataformas gracias a la máquina virtual Java (JVM), es común en grandes sistemas empresariales.
* JavaScript: Aunque originalmente fue un lenguaje frontend, con Node.js se ha convertido en una opción viable para el backend, permitiendo el uso de un solo lenguaje en toda la aplicación.
* PHP: Amplio uso en el desarrollo web, especialmente en sistemas de gestión de contenidos como WordPress.

### Base de Datos
Las bases de datos son sistemas que permiten almacenar, organizar y gestionar grandes cantidades de información de manera eficiente. Algunos ejemplos son:

* MySQL: Un sistema de gestión de bases de datos relacional, conocido por su velocidad y fiabilidad.
* PostgreSQL: Otro sistema de gestión de bases de datos relacional, conocido por su extensibilidad y cumplimiento con los estándares SQL.
* MongoDB: Una base de datos NoSQL orientada a documentos, que almacena datos en formato JSON, popular en aplicaciones que requieren manejar grandes volúmenes de datos no estructurados.

### Estructuras de Datos y Algoritmos
Las estructuras de datos son formas de organizar y almacenar datos para su uso eficiente. 
Los algoritmos son pasos o procedimientos para resolver problemas o realizar tareas.

### Principios SOLID
Los principios de SOLID son un conjunto de directrices para el diseño de software orientado a objetos, que promueven la creación de sistemas más comprensibles, flexibles y mantenibles.

* S: Single Responsibility Principle (Principio de Responsabilidad Única)
* O: Open/Closed Principle (Principio de Abierto/Cerrado)
* L: Liskov Substitution Principle (Principio de Sustitución de Liskov)
* I: Interface Segregation Principle (Principio de Segregación de Interfaces)
* D: Dependency Inversion Principle (Principio de Inversión de Dependencias)

### API RESTful
Una API RESTful (Representational State Transfer) es una interfaz que permite la comunicación entre sistemas utilizando los principios y métodos del protocolo HTTP.Las API RESTful son escalables, eficientes y utilizan operaciones estándar como GET, POST, PUT y DELETE para interactuar con los recursos.

### Pruebas Unitarias
Las pruebas unitarias son una técnica de prueba de software en la que se verifican pequeñas partes del código, como funciones o métodos, de manera aislada. Su objetivo es asegurar que cada unidad de código funcione correctamente. Herramientas como JUnit (Java), pytest (Python), y Jest (JavaScript) son comunes en el desarrollo de pruebas unitarias.

### Implementación de Microservicios
La arquitectura de microservicios es un estilo de desarrollo de software que estructura una aplicación como una colección de servicios pequeños, autónomos y especializados que se comunican entre sí. Esta arquitectura facilita la escalabilidad, el despliegue continuo y la resiliencia de las aplicaciones.

### Seguridad en Aplicaciones Web
La seguridad en aplicaciones web se refiere a las prácticas y técnicas utilizadas para proteger las aplicaciones web contra amenazas y vulnerabilidades. Algunos aspectos clave incluyen:

* Autenticación y Autorización: Verificación de la identidad de los usuarios y control de acceso a recursos.
* Encriptación: Protección de datos en tránsito y en reposo mediante técnicas de cifrado.
* Protección contra ataques comunes: Como inyección SQL, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), entre otros.
* Pruebas de seguridad: Realización de pruebas de penetración y análisis de vulnerabilidades para identificar y mitigar riesgos.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
