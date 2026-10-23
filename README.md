# DEPORTE — Entrenador de fuerza en casa v0.0.8

## Objetivo de esta versión
Primera versión conectada a Supabase: acceso personal con correo y contraseña y carga de la biblioteca de ejercicios desde `public.ejercicios`. No guarda rutinas, sesiones ni series en Supabase todavía.

## Archivos
- `entrenador_fuerza_full_body_v0.0.8.html`: interfaz de la aplicación.
- `supabase-config.js`: URL del proyecto y clave publicable.
- `supabase-connection.js`: inicialización de Supabase Auth y lectura de ejercicios.

Los tres archivos deben estar en la misma carpeta.

## Configuración necesaria
1. Abre `supabase-config.js`.
2. Sustituye `PEGA_AQUI_LA_URL_DEL_PROYECTO` por la URL de tu proyecto Supabase.
3. Sustituye `PEGA_AQUI_LA_CLAVE_PUBLISHABLE_O_ANON` por la publishable key (o la clave `anon` heredada).
4. No introduzcas nunca una `service_role` o `secret` key en archivos del navegador.
5. En Supabase Auth, utiliza la cuenta personal que ya creaste. No es necesario habilitar el acceso anónimo ni el registro público.
6. Abre la aplicación desde un servidor HTTPS o servidor local. Para evitar problemas con `file://`, no la pruebes abriendo el HTML directamente desde el disco.

## Prueba de conexión
- Al abrir la aplicación, si existe una sesión guardada, intentará cargar los ejercicios.
- Si no existe, introduce tu correo y contraseña.
- El mensaje de estado debe confirmar que se han cargado 7 ejercicios.
- Si falla, el mensaje mostrará el error. Comprueba primero la URL/clave, después Auth y finalmente RLS/permisos de `ejercicios`.

## Qué se ha comprobado en esta entrega
- Los archivos incluyen la librería `supabase-js` v2 y separan configuración y lógica de conexión.
- La interfaz obtiene el catálogo desde `public.ejercicios`, y mantiene las guías de ejecución locales para los ejercicios conocidos.
- La carga real contra tu proyecto aún debe verificarse en tu navegador una vez pegues las credenciales públicas de tu proyecto; no se han incluido credenciales en estos archivos.

## Límites intencionados
- No se guardan rutinas ni entrenamientos.
- La biblioteca remota es de solo lectura desde la interfaz en esta versión; no se borran ni crean ejercicios en Supabase.
- Los datos de configuración de la sesión siguen siendo temporales en la página, como en la versión anterior.
