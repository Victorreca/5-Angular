# S5. Onboarding digital (Angular)

Esta es una aplicación desarrollada con Angular que guía al usuario a través de un proceso de "onboarding". La aplicación incluye componentes reutilizables, servicios para la gestión de datos y animaciones para mejorar la experiencia del usuario.

## 📄 Descripción

La aplicación está compuesta por dos componentes principales: `Home` y `Escena`. El componente `Home` sirve como contenedor para las escenas, mientras que `Escena` presenta frases motivadoras e instrucciones relacionadas con el aprendizaje y desarrollo personal.

## ✨ Características

- **Renderización dinámica de frases**:

  Las frases se almacenan en un servicio llamado `StepsService` y se pasan al componente `Escena` mediante `@Input`.

  - Las frases se renderizan dinámicamente utilizando `ngFor`.

- **Navegación entre frases**:

  - Los usuarios pueden navegar entre las frases utilizando botones "anterior" y "siguiente".
  - Las frases activas se destacan visualmente con un diseño específico.

- **Indicadores visuales**:

  - En la parte inferior izquierda de la pantalla se muestran indicadores que representan las frases disponibles.
  - Al hacer clic en un indicador, se muestra la frase correspondiente.

- **Animaciones**:

  - Transiciones animadas entre frases para una experiencia de usuario fluida.

- **Diseño responsivo**:
  - La aplicación está diseñada para adaptarse a diferentes tamaños de pantalla, ofreciendo una experiencia óptima en dispositivos móviles y de escritorio.

## 💻 Tecnologías Utilizadas

- HTML5
- SCSS
- TypeScript
- [Angular CLI](https://angular.dev/) version 19.0.0.
- [Bootstrap 5](https://getbootstrap.com/)

## 📋 Requisitos

- Navegador web moderno.
- Node.js y npm instalados en tu sistema. Puedes descargarlos desde [nodejs.org](https://nodejs.org/).
- Angular CLI instalado globalmente. Puedes instalarlo con el siguiente comando:

```bash
npm install -g @angular/cli
```

## 🛠️ Instalación

**✔️ Paso 1:** Clona el repositorio:

```bash
git clone https://github.com/Victorreca/5-Angular
```

**✔️ Paso 2:** Ingresa al directorio del proyecto:

```bash
cd 5-Angular
```

**✔️ Paso 3:** Instala las dependencias:

```bash
npm install
```

**✔️ Paso 4:** Ejecuta Sass en modo automático:

```bash
npm run sass
```

**✔️ Paso 5:** (Opcional) Si necesitas compilar TypeScript automáticamente, usa el siguiente comando:

```bash
npx tsc --watch
```

**✔️ Paso 6:** Inicia el servidor de desarrollo:

```bash
ng serve -o
```

## 🛠️ Uso

1. Acceso a la aplicación:

- Una vez que el servidor de desarrollo esté en ejecución (ng serve -o), se abrirá automáticamente en el navegador en la dirección http://localhost:4200.
- Si no se abre automáticamente, puedes acceder manualmente escribiendo esta dirección en tu navegador.

2. Navegación por la aplicación:

- Explora las frases motivadoras navegando entre ellas mediante los botones "Anterior" y "Siguiente".
- Haz clic en las bolitas en la parte inferior izquierda para saltar directamente a una frase específica.

3. Experiencia interactiva:

- Observa las animaciones al cambiar entre frases.
- Prueba la aplicación en diferentes dispositivos para experimentar su diseño responsivo.

## 🤝 Contribuciones

¡Gracias por tu interés en contribuir! Para colaborar:

1. Realiza un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:

```bash
git checkout -b nombre-rama
```

3. Realiza tus cambios y asegúrate de seguir las guías de estilo del código.
4. Crea un pull request detallando los cambios realizados.
