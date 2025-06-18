# AutoFix\_grupo1

**AE7\_ABPRO – Ejercicio Grupal (Módulo 2)**
**Fundamentos del Desarrollo Front-End (72 Horas) / ELE069944089557**
**Grupo 1:** 
- **``Javier Gonzales``**

- **``Víctor Aliaga``**

- **``Tatu Vergara``**

- **``Luis Díaz Díaz``**

- **``Abraham Lillo``**

---

## Descripción

AutoFix es una página web estática para gestionar solicitudes de reparación de vehículos a domicilio. Permite a los clientes:

* Ver los servicios disponibles y sus precios.
* Completar un formulario con datos de la reparación.
* Programar la fecha y hora de la cita.
* Simular un pago en línea.

El objetivo es aplicar HTML, CSS y JavaScript para construir una interfaz responsiva y funcional.



---

## Requisitos de Entrega

1. **Enlace al repositorio GitHub** con todo el código.
2. Archivos mínimos:

   * `index.html` (estructura de la página)
   * `css/styles.css` (estilos responsivos)
   * `js/app.js` (lógica básica: validaciones y manejo de fecha/hora)
   * Carpeta `img/` con los assets.
3. Uso de **Git**:

   * Ramas: `main`, `dev`, `feature/<tarea>`.
   * Commits claros y descriptivos.
   * Pull Requests para mergear `feature` → `develop`.
   * Etiquetar versión final con tag `v1.0`.

---

## Guía Rápida de Git

```bash
# Iniciar repositorio
git init
git add .
git commit -m "chore: inicio del proyecto AutoFix"

git branch -M main
git remote add origin git@github.com:tu-usuario/AutoFix_grupo2.git
git push -u origin main

# Crear rama de integración
git checkout -b develop
git push -u origin develop

# Para cada nueva funcionalidad:
git checkout -b feature/nombre-tarea
git add .
git commit -m "feat: descripción de la tarea"
git push origin feature/nombre-tarea
# Luego abrir PR contra 'develop'
```

---

## Tecnologías y Herramientas

* **HTML5**: Semántica y accesibilidad.
* **CSS3**: Flexbox/Grid, media queries para responsive design.
* **JavaScript (ES6+)**: Validación de formulario, selección de fecha/hora, interactividad mínima.
* **Git & GitHub**: Control de versiones y colaboración.

---

## Pasos de Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jgonzalezvargas/AE7_ABPRO.git
   cd AE7_ABPRO
   ```
2. Abre `index.html` en tu navegador.
3. Prueba el formulario:

   * Elige servicio, fecha/hora.
   * Ingresa datos y observa validaciones.

---

