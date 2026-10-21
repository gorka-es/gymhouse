Entrenador de fuerza en casa
Versión actual: v0.05

Aplicación web sencilla, en español y en un único archivo HTML, para
preparar y seguir una sesión de fuerza en casa como complemento del
entrenamiento de ciclismo. No necesita instalación, servidor ni conexión
a Internet para funcionar una vez descargado el archivo.
Funcionalidades
- Pantalla de inicio con la sesión guardada y dos acciones:
  Iniciar y Personalizar sesión.
- Personalización de la sesión:
  - Seleccionar los ejercicios que se quieren realizar.
  - Configurar entre 1 y 5 series por ejercicio.
  - Introducir las repeticiones o los segundos deseados para cada
    serie.
  - Añadir ejercicios nuevos escribiendo su nombre.
  - Eliminar ejercicios de la biblioteca con confirmación.
  - Guardar los cambios y volver a la pantalla de inicio.
- Guía de entrenamiento con descripción, instrucciones de
  ejecución, descanso orientativo e ilustración esquemática.
- Seguimiento de series y resumen final de los ejercicios y las
  series completadas.
- Resumen copiable para compartir el resultado del entrenamiento
  con el entrenador.
- Interfaz adaptable a pantallas de móvil y ordenador.
Ejercicios incluidos
La biblioteca inicial contiene ejercicios de fuerza general y
estabilidad, entre ellos:
- Sentadillas
- Flexiones
- Zancadas hacia atrás
- Puente de glúteo a una pierna
- Plancha frontal
- Dead bug
- Elevaciones de gemelos
También se pueden añadir otros ejercicios desde la sección de
personalización. La aplicación prepara instrucciones específicas para
los nombres que reconoce y una ficha genérica para los demás; revisa
siempre que las indicaciones sean apropiadas para el ejercicio añadido.
Cómo ejecutar la aplicación
Opción 1: abrir localmente
1. Descarga o clona este repositorio.
2. Abre index.html directamente con un navegador moderno (Chrome,
   Firefox, Edge o Safari).
Si el archivo de la aplicación conserva el nombre
entrenador_fuerza_full_body_v0.05.html, puedes abrirlo directamente o
renombrarlo a index.html para seguir los pasos de este README.

No requiere dependencias, compilación ni instalación.
Opción 2: publicar con GitHub Pages
1. Sube README.md y el archivo HTML de la aplicación al repositorio.
2. Para que GitHub Pages lo sirva como página principal, coloca la
   aplicación en la raíz con el nombre index.html.
3. En GitHub, abre Settings → Pages y configura la publicación
   desde la rama y carpeta donde hayas guardado los archivos.
4. Guarda la configuración y abre la URL que GitHub Pages indique.
Uso básico
1. En la pantalla de inicio, selecciona Personalizar sesión.
2. Marca los ejercicios que quieras incluir.
3. Escribe la cantidad por serie para cada ejercicio. En ejercicios por
   tiempo, introduce los segundos.
4. Selecciona entre 1 y 5 series.
5. Para añadir un ejercicio, escribe su nombre y pulsa Añadir
   ejercicio.
6. Para retirar un ejercicio de la biblioteca, pulsa Eliminar de
   biblioteca y confirma la acción.
7. Pulsa Guardar sesión para volver a inicio con la configuración
   actualizada.
8. Pulsa Iniciar para comenzar. Sigue las indicaciones de cada
   ejercicio y registra las series realizadas.
9. Al terminar, copia el resumen si quieres compartirlo.
Limitaciones conocidas
- La configuración no se conserva al cerrar o recargar la página.
  La sesión y los cambios en la biblioteca viven en la memoria de la
  página; vuelve a configurarlos después de recargar.
- La aplicación es una guía básica, no sustituye la valoración de un
  profesional sanitario o del entrenamiento.
- Las ilustraciones son esquemáticas y no representan todos los
  detalles de la técnica.
- Al añadir un ejercicio con un nombre no reconocido, la ficha de
  instrucciones es genérica y debe revisarse antes de utilizarla.
Estructura del proyecto
Versión autónoma en un solo archivo HTML:
.
├── index.html
└── README.md
El HTML contiene el marcado, los estilos CSS, la lógica JavaScript y las
ilustraciones SVG. No hay paquetes externos ni un proceso de
construcción.
Historial de versiones
- v0.05: permite eliminar ejercicios de la biblioteca desde la
  pantalla de personalización.
- v0.04: separa la pantalla de inicio de la personalización y
  permite añadir ejercicios nuevos.
- Versiones anteriores: guía de ejercicios, configuración de series y
  cantidades, seguimiento del entrenamiento y resumen final.
Seguridad y uso responsable
- Prioriza la técnica controlada y evita entrenar hasta el fallo.
- Detén el ejercicio si aparece dolor o si no puedes mantener una
  técnica adecuada.
- Ajusta los ejercicios y la carga a tu nivel y a las recomendaciones
  de tu entrenador.
Licencia
No se ha definido una licencia para este proyecto. Si lo publicas para
que otras personas lo reutilicen o modifiquen, añade un archivo
LICENSE con la licencia que elijas.
