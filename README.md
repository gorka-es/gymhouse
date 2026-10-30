# Entrenador de fuerza en casa

**Versión actual:** `v0.2.1`

Aplicación web en español para preparar y seguir sesiones de fuerza en casa como complemento del entrenamiento de ciclismo. Utiliza Supabase para la autenticación, la carga de la biblioteca de ejercicios y el almacenamiento de los entrenamientos realizados.

La aplicación se publica como web y necesita conexión a Internet para iniciar sesión, cargar los ejercicios y guardar o consultar los datos remotos.

## Funcionalidades

- **Acceso personal** mediante correo electrónico y contraseña a través de Supabase Auth.
- **Pantalla Principal** con acceso independiente a Historial, Entrenamiento libre y Sesiones.
- **Entrenamiento libre**, que permite configurar y realizar una sesión de fuerza.
- **Personalización de sesiones:**
  - Seleccionar los ejercicios que se quieren realizar.
  - Configurar entre 1 y 5 series por ejercicio.
  - Introducir de 1 a 50 repeticiones por serie para ejercicios por repeticiones.
  - Introducir de 1 a 300 segundos por serie para ejercicios por tiempo.
- **Carga de la biblioteca de ejercicios desde Supabase**, consultando `public.ejercicios`.
- **Guía de entrenamiento** con descripción, instrucciones de ejecución y descanso orientativo para los ejercicios reconocidos.
- **Seguimiento de series** y resumen final de los ejercicios y las series completadas.
- **Almacenamiento de entrenamientos en Supabase**, incluyendo los datos de las series registradas.
- **Registro de entrenamientos incompletos**, cuando una sesión termina antes de completarse y se registra el motivo correspondiente.
- **Interfaz sin imágenes ni dibujos de ejercicios**, para mantener una presentación sencilla.
- Interfaz adaptable a pantallas de móvil y ordenador.
- **Historial de entrenamientos:** consulta los entrenamientos guardados en Supabase, con su fecha, estado y nombre.
- **Detalle de entrenamientos históricos:** consulta los ejercicios y las series registradas en cada entrenamiento, incluidas repeticiones, duración, peso y estado de finalización cuando esos datos estén disponibles.
- **Resumen visual por ejercicio:** muestra cada ejercicio en una tarjeta independiente, con el número de ejercicio, las series completadas y el detalle de cada serie.
- **Interfaz del historial y del resumen:** tarjetas, tipografía y estados visuales coherentes con la identidad gráfica general de la aplicación.

La biblioteca de ejercicios remota es de solo lectura desde la interfaz de esta versión.

## Ejercicios incluidos

La biblioteca se carga desde la tabla `public.ejercicios` de Supabase. En la configuración inicial documentada hay siete ejercicios:

- Sentadillas
- Flexiones
- Zancada hacia atrás
- Puente de glúteos a una pierna
- Plancha abdominal
- Dead bug
- Elevaciones de gemelos

La aplicación mantiene localmente las guías de ejecución para los ejercicios conocidos. La disponibilidad de un ejercicio en la base de datos no significa que sus instrucciones se hayan almacenado también en Supabase.

La plancha se trata como ejercicio por tiempo. Los demás ejercicios se configuran por repeticiones, incluidos los ejercicios cuyo nombre no se reconozca como plancha. Revisa las indicaciones de cualquier ejercicio antes de utilizarlo.

## Cómo ejecutar la aplicación

### Opción 1: publicación con GitHub Pages

1. Sube a la raíz del repositorio el archivo HTML de la aplicación, `supabase-config.js`, `supabase-connection.js` y este README.
2. Asegúrate de que los archivos JavaScript estén junto al HTML, ya que la aplicación los carga desde esa ubicación.
3. Si quieres que GitHub Pages muestre la aplicación como página principal, coloca la versión que quieras publicar en la raíz del repositorio con el nombre `index.html`.
4. En GitHub, abre **Settings → Pages** y configura la publicación desde la rama y carpeta donde hayas guardado los archivos.
5. Guarda la configuración y abre la URL que GitHub Pages indique.

La aplicación debe servirse mediante HTTPS o desde un servidor local. No la pruebes abriendo el HTML directamente mediante `file://`.

### Opción 2: servidor local

1. Coloca los archivos de la aplicación en una misma carpeta.
2. Inicia un servidor web local desde esa carpeta.
3. Abre en el navegador la dirección local que proporcione el servidor.

No se ha definido aquí un comando de servidor local concreto, porque depende de las herramientas instaladas en el equipo.

## Configuración de Supabase

La aplicación utiliza los siguientes componentes principales:

- El archivo HTML, que contiene la interfaz, los estilos y la lógica de la aplicación.
- `supabase-config.js`, con la URL del proyecto y la clave publicable.
- `supabase-connection.js`, con la inicialización de Supabase y las funciones de conexión.

Comprueba los nombres reales de los archivos en el repositorio antes de publicar la versión.

Para configurar la conexión:

1. Abre `supabase-config.js`.
2. Sustituye el valor de ejemplo de la URL por la URL de tu proyecto Supabase.
3. Sustituye el valor de ejemplo de la clave por la **publishable key** o la clave `anon` heredada del proyecto.
4. En Supabase Auth, utiliza la cuenta personal creada para la aplicación.
5. Comprueba que las políticas RLS y los permisos permiten acceder a los datos correspondientes.
6. Verifica que las tablas y funciones utilizadas por la aplicación están creadas y tienen los permisos adecuados.

Los entrenamientos se almacenan mediante la función de guardado configurada en Supabase. En el esquema implementado se utilizan las tablas `entrenamientos` y `entrenamiento_series`, junto con la función `guardar_entrenamiento`.

**Seguridad de las claves:** no introduzcas nunca una clave `service_role` ni una clave `secret` en archivos que se sirven al navegador. La URL del proyecto y la clave publicable están destinadas al uso en cliente; el acceso a los datos debe protegerse con las políticas de seguridad de Supabase (RLS) y los permisos apropiados.

No es necesario habilitar el registro público ni el acceso anónimo para utilizar una cuenta personal ya creada.

## Uso básico

1. Abre la aplicación desde su URL HTTPS o desde un servidor local.
2. Si la aplicación solicita iniciar sesión, introduce el correo electrónico y la contraseña de la cuenta personal de Supabase.
3. Espera a que se cargue la biblioteca de ejercicios.
4. En la pantalla Principal, selecciona **Entrenamiento libre** para preparar una sesión o **Sesiones** para configurar la selección de ejercicios.
5. Marca los ejercicios que quieras incluir.
6. Configura la cantidad por serie: de 1 a 50 repeticiones o de 1 a 300 segundos en ejercicios por tiempo.
7. Selecciona entre 1 y 5 series.
8. Guarda la configuración y vuelve a la pantalla correspondiente.
9. Inicia el entrenamiento y sigue las indicaciones de cada ejercicio.
10. Registra las series realizadas durante la sesión.
11. Al finalizar, consulta el resumen y copia su contenido si quieres compartirlo.
12. Los entrenamientos guardados se registran en Supabase, incluidos los que terminan antes de completarse cuando se registra esa circunstancia.

Los nombres exactos de los botones pueden variar si cambia la interfaz. La biblioteca remota de ejercicios es de solo lectura desde la interfaz.

## Limitaciones conocidas

- El historial y el detalle de los entrenamientos consultan los datos guardados en Supabase y requieren una sesión válida y los permisos RLS correspondientes.
- No se crean ni se eliminan ejercicios en Supabase desde la interfaz.
- Las guías de ejecución de los ejercicios conocidos se mantienen en el código de la aplicación, no en la tabla remota.
- La aplicación necesita conectividad con Supabase para iniciar sesión, cargar el catálogo remoto y guardar los entrenamientos.
- Si no se cargan los ejercicios, comprueba primero la URL y la clave publicable de `supabase-config.js`; después revisa la sesión de Supabase Auth y las políticas RLS y permisos correspondientes.
- La aplicación es una guía básica y no sustituye la valoración de un profesional sanitario o del entrenamiento.
- Revisa las instrucciones de los ejercicios y adapta la sesión a tu nivel.

## Estructura del proyecto

Los archivos principales de la aplicación son:

```text
.
├── [archivo HTML de la aplicación]
├── supabase-config.js
├── supabase-connection.js
└── README.md
```

Sustituye el marcador del archivo HTML por su nombre real en el repositorio. No es necesario cambiar los nombres de los archivos para actualizar la versión.

- El archivo HTML contiene la interfaz, los estilos y la lógica de la aplicación.
- `supabase-config.js` contiene la configuración pública necesaria para conectar con Supabase.
- `supabase-connection.js` inicializa Supabase y proporciona las funciones de conexión.

## Historial de versiones

- **`v0.2.1`**: corrige un error en la visualización del detalle de los entrenamientos históricos que provocaba la duplicación de tarjetas de ejercicios. Ahora cada ejercicio aparece una sola vez, con su resumen de series completadas y el detalle de cada serie.
- **`v0.2.0`**: incorpora el historial de entrenamientos guardados en Supabase y la consulta de sus detalles, con ejercicios y series registradas. Mejora el diseño de las tarjetas del historial y del resumen de cada entrenamiento, con una presentación más clara y coherente con la identidad visual de la aplicación.
- **`v0.1.0`**: reorganiza la navegación en una pantalla Principal con accesos a Historial, Entrenamiento libre y Sesiones. Mantiene el entrenamiento libre y la personalización, e incorpora el guardado de entrenamientos y series en Supabase, incluidos los entrenamientos incompletos. El listado del Historial y el detalle de entrenamientos históricos quedan pendientes.
- **`v0.0.8`**: incorpora el acceso personal mediante correo y contraseña con Supabase Auth y carga la biblioteca de ejercicios desde `public.ejercicios`.
- **`v0.0.7`**: limita la cantidad por serie a 50 repeticiones o 300 segundos en ejercicios por tiempo; elimina las imágenes y dibujos de los ejercicios.
- **`v0.0.6`**: mantiene desactivado el botón **Iniciar** si no hay ejercicios en la sesión guardada y elimina una alerta redundante.
- **`v0.0.5`**: permite eliminar ejercicios de la biblioteca desde la pantalla de personalización.
- **`v0.0.4`**: separa la pantalla de inicio de la personalización y permite añadir ejercicios nuevos.
- Versiones anteriores: guía de ejercicios, configuración de series y cantidades, seguimiento del entrenamiento y resumen final.

## Seguridad y uso responsable

- No publiques claves `service_role` ni `secret` en archivos accesibles desde el navegador.
- Protege los datos de Supabase mediante RLS y permisos adecuados; la clave publicable no sustituye estas medidas.
- Prioriza la técnica controlada y evita entrenar hasta el fallo.
- Detén el ejercicio si aparece dolor o si no puedes mantener una técnica adecuada.
- Ajusta los ejercicios y la carga a tu nivel y a las recomendaciones de tu entrenador.

## Licencia

No se ha definido una licencia para este proyecto. Si lo publicas para que otras personas lo reutilicen o modifiquen, añade un archivo `LICENSE` con la licencia que elijas.
