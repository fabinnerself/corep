# CRUD Aplicacion sobre Producto con JSON Interno y React-EasyUI -COREP
## Operaciones: Adicion, modificacion, eliminacion y busqueda

### Descripcion

Este proyecto implementa operaciones CRUD completas (Crear, Leer, Actualizar y Eliminar), junto con filtrado y paginación en un grid. A continuación, se describen las funcionalidades principales:

*Operaciones CRUD y Filtrado: Todas las operaciones de CRUD y filtrado son completamente funcionales.

*Grid con Filtros: El grid permite filtrar datos por todos los campos.

*Ajuste de Columnas: Es posible cambiar el ancho de las columnas en el grid.

*Paginación: El grid incluye paginación y permite seleccionar el número de elementos por página (10, 20, etc.).

*Función de Limpiar Filtros: Actualmente, la función para limpiar campos de filtro no está operativa.

*Función formato numerico: Actualmente, el formato numerico a las columnas del grid no está operativa.

### Requisitos del Sistema

- **Sistema Operativo**: Ubuntu 20.04.6 LTS (Focal Fossa)
- **Kernel**: Version 6.2.16-3-pve
- **EasyUI**: Version 1.10.19 (react-easyui-1.10.19)
- **NodeJS**: Version v20.15.0
- **npm/npx**: 10.8.1
- **react**: 18.3.1

Sistemas Alternativos Probados
El proyecto también ha sido probado en el siguiente entorno alternativo:

- **Sistema Operativo**: Windows 10 Pro 1803
- **EasyUI**: Version 1.10.19 (react-easyui-1.10.19)
- **NodeJS**: Version v20.15.1
- **npm/npx**: 10.7.0
- **react**: 18.3.1

## notas de instalacion
1. Crear la React App.
   
    npm install -g create-react-app
   
    create-react-app my-app
   
    cd my-app
   
3.  Instalar  EasyUI para React.
   
    npm install rc-easyui --save
    
5. Importar los archivos theme .
   
    @import '~rc-easyui/dist/themes/default/easyui.css';
   
    @import '~rc-easyui/dist/themes/icon.css';
   
    @import '~rc-easyui/dist/themes/react.css';
   
7. En el archivo donde se ejecutaran los componentes Easyi-UI incluir las librerias que correspondan
   
    import { DataGrid, GridColumn } from 'rc-easyui';
   
9. Para ejecutar
    
    npm run start

extraido de https://www.jeasyui.com/download/rc.php

## Comandos utiles

lsb_release -a && uname -r

node -v && nvm -v && npm -v && npx -v && vue -V

(C) 2024 Favian Medina Gemio
