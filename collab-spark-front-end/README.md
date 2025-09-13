# CollabSpark - HUB de Colaboración para Jóvenes

## Visión del Proyecto

CollabSpark es un HUB digital diseñado para conectar talento joven con oportunidades de experimentación, crecimiento y colaboración. Nuestra misión es democratizar el acceso a la experiencia real y fomentar un ecosistema creativo y emprendedor más inclusivo.

### Los Dos Ejes Principales

1. **Exploración y Participación en Proyectos**
   - **Microproyectos**: Para experimentar, practicar y ganar experiencia sin presión
   - **Proyectos con potencial**: Ideas que pueden escalar a startups con equipos multidisciplinarios
   - Sin intermediación laboral ni procesos de selección formales

2. **Marketplace/Red de Recursos para Escalar**
   - Conecta con incubadoras, aceleradoras y fondos de inversión
   - Recursos adaptados a tu perfil, etapa y sector
   - Democratización del acceso a recursos para escalar ideas

### Filosofía

Este espacio es todo lo opuesto a una red social formal o de networking corporativo. Priorizamos:
- **Inspiración** y **accesibilidad**
- **Colaboración experimental** 
- **Diseño minimalista** con fondo blanco y acentos azules
- **Proceso y crecimiento personal** con el mismo peso que los logros visibles

## Tecnologías Utilizadas

- **Frontend**: React + TypeScript + Vite
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de shadcn/ui
│   ├── Hero.tsx        # Sección principal
│   ├── Features.tsx    # Características principales
│   ├── ProjectsSection.tsx # Sección de proyectos
│   └── Navbar.tsx      # Navegación
├── pages/              # Páginas de la aplicación
│   ├── Index.tsx       # Página principal
│   ├── Projects.tsx    # Lista de proyectos
│   ├── ProjectDetail.tsx # Detalle de proyectos
│   ├── Resources.tsx   # Recursos y marketplace
│   └── ResourceDetail.tsx # Detalle de recursos
└── assets/             # Imágenes y recursos estáticos
```

## Impacto Esperado

Al conectar talento joven con proyectos reales y una red de recursos, CollabSpark busca:
- Democratizar el acceso a la experiencia
- Fomentar un ecosistema creativo y emprendedor más inclusivo
- Crear un espacio donde las ideas puedan nacer, madurar o quedarse como aprendizaje
- Proporcionar apoyo, colaboración y visibilidad para todas las iniciativas

---

**CollabSpark**: Donde las nuevas generaciones practican, se inspiran, crecen y llevan colaborativamente sus ideas lo más lejos posible.
