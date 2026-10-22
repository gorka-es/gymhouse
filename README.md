# Entrenador de fuerza en casa

**Versión actual:** `v0.07`

Aplicación web sencilla, en español y en un único archivo HTML, para
preparar y seguir una sesión de fuerza en casa como complemento del
entrenamiento de ciclismo. No necesita instalación, servidor ni conexión
a Internet para funcionar una vez descargado el archivo.

## Funcionalidades

-   **Pantalla de inicio** con la sesión guardada y dos acciones:
    `Iniciar` y `Personalizar sesión`.
-   **Botón Iniciar con control de disponibilidad:** permanece
    desactivado mientras no haya al menos un ejercicio en la sesión
    guardada.
-   **Personalización de la sesión:**
    -   Seleccionar los ejercicios que se quieren realizar.
    -   Configurar entre 1 y 5 series por ejercicio.
    -   Introducir de 1 a **50 repeticiones** por serie para ejercicios
        por repeticiones.
    -   Introducir de 1 a **300 segundos** por serie para ejercicios por
        tiempo.
    -   Añadir ejercicios nuevos escribiendo su nombre.
    -   Eliminar ejercicios de la biblioteca con confirmación. Si el
        ejercicio eliminado estaba en la sesión guardada, también se
        retira de esa sesión.
    -   Guardar los cambios y volver a la pantalla de inicio.
-   **Guía de entrenamiento** con descripción, instrucciones de
    ejecución y descanso orientativo.
-   **Interfaz sin imágenes ni dibujos de ejercicios**, para mantener
    una presentación más sencilla.
-   **Seguimiento de series** y resumen final de los ejercicios y las
    series completadas.
-   **Resumen copiable** para compartir el resultado del entrenamiento
    con el entrenador.
-   Interfaz adaptable a pantallas de móvil y ordenador.

## Ejercicios incluidos

La biblioteca inicial contiene ejercicios de fuerza general y
estabilidad, entre ellos:

-   Sentadillas
-   Flexiones
-   Zancadas hacia atrás
-   Puente de glúteo a una pierna
-   Plancha frontal
-   Dead bug
-   Elevaciones de gemelos

También se pueden añadir otros ejercicios desde la sección de
personalización. La aplicación prepara instrucciones específicas para
los nombres que reconoce y una ficha genérica para los demás; revisa
siempre que las indicaciones sean apropiadas para el ejercicio añadido.

La plancha se trata como ejercicio por tiempo. Los demás ejercicios se
configuran por repeticiones, incluidos los ejercicios nuevos que no se
reconozcan como plancha.

## Cómo ejecutar la aplicación

### Opción 1: abrir localmente

1.  Descarga o clona este repositorio.
2.  Abre `index.html` directamente con un navegador moderno (Chrome,
    Firefox, Edge o Safari).

Si el archivo de la aplicación conserva un nombre versionado, por
ejemplo `entrenador_fuerza_full_body_v0.07.html`, puedes abrirlo
directamente. Para que GitHub Pages muestre la aplicación como página
principal, coloca la versión que quieras publicar en la raíz del
repositorio con el nombre `index.html`.

No requiere dependencias, compilación ni instalación.

### Opción 2: publicar con GitHub Pages

1.  Sube `README.md` y el archivo HTML de la aplicación al repositorio.
2.  Para que GitHub Pages lo sirva como página principal, coloca la
    aplicación en la raíz con el nombre `index.html`.
3.  En GitHub, abre **Settings → Pages** y configura la publicación
    desde la rama y carpeta donde hayas guardado los archivos.
4.  Guarda la configuración y abre la URL que GitHub Pages indique.

## Uso básico

1.  En la pantalla de inicio, selecciona **Personalizar sesión**.
2.  Marca los ejercicios que quieras incluir.
3.  Escribe la cantidad por serie: de 1 a 50 repeticiones o de 1 a 300
    segundos en ejercicios por tiempo.
4.  Selecciona entre 1 y 5 series.
5.  Para añadir un ejercicio, escribe su nombre y pulsa **Añadir
    ejercicio**.
6.  Para retirar un ejercicio de la biblioteca, pulsa **Eliminar de
    biblioteca** y confirma la acción.
7.  Pulsa **Guardar sesión** para volver a inicio con la configuración
    actualizada.
8.  Pulsa **Iniciar** para comenzar. El botón solo estará habilitado si
    la sesión guardada contiene al menos un ejercicio.
9.  Sigue las indicaciones de cada ejercicio y registra las series
    realizadas.
10. Al terminar, copia el resumen si quieres compartirlo.

## Limitaciones conocidas

-   **La configuración no se conserva al cerrar o recargar la página.**
    La sesión y los cambios en la biblioteca viven en la memoria de la
    página; vuelve a configurarlos después de recargar.
-   La aplicación es una guía básica, no sustituye la valoración de un
    profesional sanitario o del entrenamiento.
-   Al añadir un ejercicio con un nombre no reconocido, la ficha de
    instrucciones es genérica y debe revisarse antes de utilizarla.
-   Los ejercicios añadidos se consideran ejercicios por repeticiones
    salvo que el nombre permita reconocerlos como plancha.

## Estructura del proyecto

Versión autónoma en un solo archivo HTML:

``` text
.
├── index.html
└── README.md
```

El HTML contiene el marcado, los estilos CSS y la lógica JavaScript. No
hay paquetes externos ni un proceso de construcción.

## Historial de versiones

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

-   Prioriza la técnica controlada y evita entrenar hasta el fallo.
-   Detén el ejercicio si aparece dolor o si no puedes mantener una
    técnica adecuada.
-   Ajusta los ejercicios y la carga a tu nivel y a las recomendaciones
    de tu entrenador.

## Licencia

No se ha definido una licencia para este proyecto. Si lo publicas para
que otras personas lo reutilicen o modifiquen, añade un archivo
`LICENSE` con la licencia que elijas.
