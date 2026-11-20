# Inkwell

CMS minimalista desarrollado para la creación, edición y publicación de artículos en blogs. Cuenta con un editor de texto personalizable, gestión de recursos multimedia y almacenamiento de contenido estructurado. Su arquitectura permite extender su funcionalidad a otros proyectos, como tiendas en línea (e-commerce) y sistemas de gestión de catálogos.

## Tecnologías

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Prisma ORM
- PostgreSQL

### Editor de contenido

- Tiptap (ProseMirror)

## Gestión de estado y formularios

- Zustand
- React Hook Form

### Servicios

- Cloudflare R2

## Guía de inicio (getting started)

### Requisitos

- Node.js `≈24.11.1`
- PostgreSQL `≈15.3`
- npm `≈11.6.2`

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crea el archivo .env a partir de la plantilla proporcionada:

```bash
cp .env.example .env
```

### 4. Configurar PostgreSQL

Puedes utilizar una instalación local de PostgreSQL o ejecutar la base de datos mediante Docker Compose.

#### Opción A: PostgreSQL local

Asegúrate de tener PostgreSQL ejecutándose y configura `DATABASE_URL` en `.env` con los datos de conexión correspondientes.

#### Opción B: PostgreSQL con docker

Si prefieres no instalar PostgreSQL directamente en tu sistema, puedes utilizar el servicio incluido en docker-compose.yml.

```bash
docker compose up -d
```

Esto iniciará una instancia de PostgreSQL en el puerto `5433` del sistema host.

Una vez iniciado el contenedor, configura `DATABASE_URL` para utilizar ese puerto.


### 5. Ejecutar las migraciones de Prisma

```bash
npx prisma migrate dev
```

### 6. Generar el Prisma Client

```bash
npx prisma generate
```

### 7. Registrar la cuenta de usuario administrador

Configura las variables de entorno `ADMIN_EMAIL` y `ADMIN_PASSWORD` en .env. Estas variables se utilizarán para crear la cuenta de administrador, necesaria para acceder al panel de administración.

```bash
npx prisma db seed
```

### 8. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`


