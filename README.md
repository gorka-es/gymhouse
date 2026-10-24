# Entrenador de fuerza en casa

**Versión actual:** `v0.0.8`

Aplicación web sencilla, en español, para preparar y seguir una sesión
de fuerza en casa como complemento del entrenamiento de ciclismo. Esta
versión incorpora el acceso personal mediante Supabase Auth y carga la
biblioteca de ejercicios desde la base de datos. La aplicación se
publica como web y necesita conexión a Internet para iniciar sesión y
cargar el catálogo remoto.

## Funcionalidades

-   **Pantalla de inicio** con la sesión guardada y las acciones
    disponibles para iniciar o personalizar la sesión.
-   **Acceso personal** mediante correo electrónico y contraseña a
    través de Supabase Auth.
-   **Carga de la biblioteca de ejercicios desde Supabase**, consultando
    la tabla `public.ejercicios`.
-   **Personalización de la sesión:**
    -   Seleccionar los ejercicios que se quieren realizar.
    -   Configurar entre 1 y 5 series por ejercicio.
    -   Introducir de 1 a **50 repeticiones** por serie para ejercicios
        por repeticiones.
    -   Introducir de 1 a **300 segundos** por serie para ejercicios por
        tiempo.
    -   Configurar la sesión con los ejercicios disponibles en la
        biblioteca cargada.
-   **Guía de entrenamiento** con descripción, instrucciones de
    ejecución y descanso orientativo para los ejercicios reconocidos.
-   **Interfaz sin imágenes ni dibujos de ejercicios**, para mantener
    una presentación sencilla.
-   **Seguimiento de series** y resumen final de los ejercicios y las
    series completadas.
-   **Resumen copiable** para compartir el resultado del entrenamiento
    con el entrenador.
-   Interfaz adaptable a pantallas de móvil y ordenador.

La conexión con Supabase de esta versión se limita al inicio de sesión y
a la lectura de la biblioteca de ejercicios. No implica que las rutinas
ni los entrenamientos se guarden en la base de datos.

## Ejercicios incluidos

La biblioteca se carga desde la tabla `public.ejercicios` de Supabase.
En la configuración inicial comprobada para esta versión hay siete
ejercicios:

-   Sentadillas
-   Flexiones
-   Zancada hacia atrás
-   Puente de glúteos a una pierna
-   Plancha abdominal
-   Dead bug
-   Elevaciones de gemelos

La aplicación mantiene localmente las guías de ejecución para los
ejercicios conocidos. La disponibilidad de un ejercicio en la base de
datos no significa que sus instrucciones se hayan almacenado también en
Supabase.

La plancha se trata como ejercicio por tiempo. Los demás ejercicios se
configuran por repeticiones, incluidos los ejercicios cuyo nombre no se
reconozca como plancha. Revisa las indicaciones de cualquier ejercicio
antes de utilizarlo.

## Cómo ejecutar la aplicación

### Opción 1: publicación con GitHub Pages

1.  Sube a la raíz del repositorio el archivo HTML de la aplicación,
    `supabase-config.js`, `supabase-connection.js` y este README.
2.  Asegúrate de que los archivos JavaScript estén junto al HTML, ya que
    la aplicación los carga desde esa ubicación.
3.  Si quieres que GitHub Pages muestre la aplicación como página
    principal, coloca la versión que quieras publicar en la raíz del
    repositorio con el nombre `index.html`.
4.  En GitHub, abre **Settings → Pages** y configura la publicación
    desde la rama y carpeta donde hayas guardado los archivos.
5.  Guarda la configuración y abre la URL que GitHub Pages indique.

La aplicación debe servirse mediante HTTPS o desde un servidor local. No
la pruebes abriendo el HTML directamente mediante `file://`.

### Opción 2: servidor local

1.  Coloca los tres archivos de la aplicación en una misma carpeta.
2.  Inicia un servidor web local desde esa carpeta.
3.  Abre en el navegador la dirección local que proporcione el servidor.

No se ha definido aquí un comando de servidor local concreto, porque
depende de las herramientas instaladas en el equipo.

## Configuración de Supabase

La aplicación utiliza tres archivos principales:

-   `entrenador_fuerza_full_body_v0.0.8.html`: interfaz de la
    aplicación.
-   `supabase-config.js`: URL del proyecto y clave publicable.
-   `supabase-connection.js`: inicialización de Supabase y funciones de
    autenticación y lectura de ejercicios.

Los tres archivos deben estar en la misma carpeta.

Para configurar la conexión:

1.  Abre `supabase-config.js`.
2.  Sustituye el valor de ejemplo de la URL por la URL de tu proyecto
    Supabase.
3.  Sustituye el valor de ejemplo de la clave por la **publishable key**
    o la clave `anon` heredada del proyecto.
4.  En Supabase Auth, utiliza la cuenta personal creada para la
    aplicación.
5.  Comprueba que las políticas RLS y los permisos de la tabla
    `ejercicios` permiten a esa cuenta leer los ejercicios
    correspondientes.

**Seguridad de las claves:** no introduzcas nunca una clave
`service_role` ni una clave `secret` en archivos que se sirven al
navegador. La URL del proyecto y la clave publicable están destinadas al
uso en cliente; el acceso a los datos debe protegerse con las políticas
de seguridad de Supabase (RLS) y los permisos apropiados.

No es necesario habilitar el registro público ni el acceso anónimo para
utilizar una cuenta personal ya creada.

## Uso básico

1.  Abre la aplicación desde su URL HTTPS o desde un servidor local.
2.  Si la aplicación solicita iniciar sesión, introduce el correo
    electrónico y la contraseña de la cuenta personal de Supabase.
3.  Espera a que se cargue la biblioteca de ejercicios.
4.  En la pantalla de inicio, selecciona **Personalizar sesión**.
5.  Marca los ejercicios que quieras incluir.
6.  Configura la cantidad por serie: de 1 a 50 repeticiones o de 1 a 300
    segundos en ejercicios por tiempo.
7.  Selecciona entre 1 y 5 series.
8.  Guarda la sesión para volver a la pantalla de inicio.
9.  Pulsa **Iniciar** para comenzar la sesión.
10. Sigue las indicaciones de cada ejercicio y registra las series
    realizadas.
11. Al terminar, copia el resumen si quieres compartirlo.

Los nombres exactos de los botones pueden variar si cambia la interfaz.
La biblioteca remota es de solo lectura desde la interfaz en esta
versión.

## Limitaciones conocidas

-   **No se guardan rutinas ni entrenamientos en Supabase.** La conexión
    remota de esta versión se utiliza para la autenticación y la lectura
    de la biblioteca de ejercicios.
-   **No se crean ni se eliminan ejercicios en Supabase desde la
    interfaz.** La biblioteca remota es de solo lectura en esta versión.
-   **La configuración de la sesión sigue siendo temporal en la
    página**, como en la versión anterior. No se debe asumir que la
    sesión personalizada se conserva después de recargar o cerrar la
    página.
-   Las guías de ejecución de los ejercicios conocidos se mantienen en
    el código de la aplicación, no en la tabla remota.
-   La aplicación necesita conectividad con Supabase para iniciar sesión
    y cargar el catálogo remoto.
-   Si no se cargan los ejercicios, comprueba primero la URL y la clave
    publicable de `supabase-config.js`; después revisa la sesión de
    Supabase Auth y las políticas RLS y permisos de la tabla
    `ejercicios`.
-   La aplicación es una guía básica y no sustituye la valoración de un
    profesional sanitario o del entrenamiento.
-   Revisa las instrucciones de los ejercicios y adapta la sesión a tu
    nivel.

## Estructura del proyecto

La versión 0.0.8 utiliza los siguientes archivos:

``` text
.
├── entrenador_fuerza_full_body_v0.0.8.html
├── supabase-config.js
├── supabase-connection.js
└── README_entrenador_fuerza_v0.0.8.md
```

-   El archivo HTML contiene la interfaz, los estilos y la lógica de la
    aplicación.
-   `supabase-config.js` contiene la configuración pública necesaria
    para conectar con el proyecto Supabase.
-   `supabase-connection.js` inicializa la librería de Supabase y
    proporciona la lógica de autenticación y lectura del catálogo.

## Historial de versiones

-   `v0.0.8`: primera versión conectada a Supabase. Incorpora el acceso
    personal mediante correo y contraseña y carga la biblioteca de
    ejercicios desde `public.ejercicios`. No guarda rutinas, sesiones ni
    series en Supabase.
-   `v0.07`: se limita la cantidad por serie a 50 repeticiones o 300
    segundos en ejercicios por tiempo; se eliminan las imágenes y
    dibujos de los ejercicios.
-   `v0.06`: el botón **Iniciar** permanece desactivado si no hay
    ejercicios en la sesión guardada; se elimina la alerta redundante
    que pedía elegir un ejercicio al iniciar.
-   `v0.05`: permite eliminar ejercicios de la biblioteca desde la
    pantalla de personalización.
-   `v0.04`: separa la pantalla de inicio de la personalización y
    permite añadir ejercicios nuevos.
-   Versiones anteriores: guía de ejercicios, configuración de series y
    cantidades, seguimiento del entrenamiento y resumen final.

## Seguridad y uso responsable

-   No publiques claves `service_role` ni `secret` en archivos
    accesibles desde el navegador.
-   Protege los datos de Supabase mediante RLS y permisos adecuados; la
    clave publicable no sustituye estas medidas.
-   Prioriza la técnica controlada y evita entrenar hasta el fallo.
-   Detén el ejercicio si aparece dolor o si no puedes mantener una
    técnica adecuada.
-   Ajusta los ejercicios y la carga a tu nivel y a las recomendaciones
    de tu entrenador.

## Licencia

No se ha definido una licencia para este proyecto. Si lo publicas para
que otras personas lo reutilicen o modifiquen, añade un archivo
`LICENSE` con la licencia que elijas.
