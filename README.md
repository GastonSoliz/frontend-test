# Pagina de Perfil de Usuario

## Descripcion

Este proyecto es una pagina de perfil de usuario desarrollada con HTML, CSS, React y Next.js 14. La pagina incluye secciones sobre el usuario, una cabecera, sobre mi, intereses y un formulario de contacto. Esta diseñada para ser responsiva y accesible, ofreciendo una experiencia de usuario óptima en diferentes dispositivos.

## Tecnologias usadas:

- **HTML**
- **CSS**
- **React**
- **Next**
- **Testing Library**
- **GIT**

## Instalacion

Para clonar y ejecutar el proyecto, se necesitara GIT y Node.js instalados en tu computadora.

### Pasos para la instalacion:

1. Clonar el repositorio:

```bash
git clone https://github.com/GastonSoliz/frontend-test.git
```

2. Navegar al directorio del proyecto:

```bash
cd frontend-test/
```

3. Instala las dependencias:

```bash
npm install
```

## Ejecucion

4. Ejecutar la aplicacion en produccion

```bash
npm run dev
```

5. Luego para un entorno de despliegue

```bash
npm run build
## Despues:
npm run start
```

Finalmente puedes abrir la url [http://localhost:3000](http://localhost:3000) con tu navegador para ver el proyecto.

## Pruebas

Este proyecto utiliza **React Testing Library** para pruebas. Para ejecutar las pruebas, usaremos este comando:

```bash
npm run dev
```

### Pruebas basicas incluidas:

- Header:
  - Renderiza el componente Header.
  - Verifica que la imagen tiene las propiedades adecuadas.
  - Verificar el texto del titulo.
- About:
  - Renderiza el componente About.
  - Verificar el texto correcto del primer parrafo.
  - Verificar el texto correcto del segundo parrafo.
  - Verificar cada tecnologia en un elemento de lista.
- Interests:
  - Renderiza el componente Interests.
  - Verifica el texto correcto del primer parrafo.
  - Verificar cada interes en un elemento de lista.
- ContactForm:
  - Renderiza el componente ContactForm.
  - Mostrar los errores correctamente.
  - Mostrar un error especifico para el formato de email.
  - Mostrar un mensaje de exito al mandar un formulario.

## Contacto

Espero poder lograr las expectativas de la prueba tecnica, en todo caso pueden contactarme a traves de mi correo: **gaston.e.soliz@gmail.com**
