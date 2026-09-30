# Perfil3 – App móvil con React Native + Expo

Aplicación móvil hecha con React Native y Expo que muestra la información del estudiante y consume la API de planetas de Dragon Ball: https://dragonball-api.com/api/planets

## Datos del estudiante

- **Nombre:** Christopher Alexander Morales Quijano
- **Carnet:** 20240207

## Enlaces

- **Video demostrativo:** [Ver video](https://drive.google.com/drive/folders/1w4YZD0eBWWOmqLzX83AbGSTsMBTTkZZm)
- **Descargar APK:** [Descargar APK](https://expo.dev/accounts/blitzk6/projects/perfil3-app/builds/fcfcf768-3e49-4d5a-9fe8-c69d9e2281ab)

## Funcionalidades

- **Splash screen e ícono personalizados:** los dos usan una Master Ball.
- **Pantalla 1 (Inicio):** muestra el nombre, el carnet, la sección y el grupo del estudiante, y tiene un botón para ir a la pantalla 2.
- **Pantalla 2 (Planetas):** lista los planetas de Dragon Ball con nombre, imagen, descripción y estado (destruido o existente). Se puede deslizar hacia abajo para recargar.

## Arquitectura

```
src/
├── components/   # Componentes reutilizables (Card, Loader, ErrorMessage, PrimaryButton, InfoRow)
├── config/       # Datos del estudiante, URL de la API y colores
├── hooks/        # Custom hooks (useFetchData, usePlanets, useStudent)
├── navigation/   # React Navigation (Native Stack)
└── screens/      # HomeScreen y PlanetsScreen (solo UI)
```

- **useFetchData:** hook genérico que consume la API con `fetch` y `async/await`, y maneja la carga, los errores y la recarga.
- **usePlanets:** usa `useFetchData` y adapta los datos de la API al formato que recibe `Card` por props.
- **Navegación:** `@react-navigation/native-stack`, con botón para volver a la pantalla anterior.

## Ejecutar el proyecto

```bash
npm install
npx expo start
```

## Generar el APK

```bash
npx eas-cli@latest login
npx eas-cli@latest build -p android --profile preview
```
