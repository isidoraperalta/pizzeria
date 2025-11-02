# App de Evaluación - Desarrollo Mobile

Proyecto de evaluación para el curso de Desarrollo de Aplicaciones Móviles.

## 📱 Descripción

Esta aplicación móvil desarrollada con React Native y Expo implementa un sistema de autenticación básico con navegación por pestañas (tabs).

### Características principales:
- **Pantalla de Login**: Validación de email y contraseña
- **Navegación por Tabs**: Home y Perfil
- **Autenticación**: Sistema de login/logout
- **Validaciones**: Email y contraseña
- **Contexto**: Email guardado en contexto global de la aplicación

## 📽️ Video demostrativo

[![Ver video en Loom](https://cdn.loom.com/sessions/thumbnails/0a2fd926029b4d5d88869342dd98cb01-d4b37dd5b7335edb-full-play.gif)](https://www.loom.com/share/0a2fd926029b4d5d88869342dd98cb01)

## 🚀 Inicio rápido

### Prerrequisitos
- Node.js instalado
- Expo CLI

### Instalación

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Iniciar la aplicación**
   ```bash
   npm start
   ```

3. **Ejecutar en dispositivo**
   - Escanea el código QR con la app Expo Go
   - O abre en el navegador [localhost:8081](http://localhost:8081)

## 🔐 Credenciales de prueba

- **Email**: Cualquier email válido (ej: test@example.com)
- **Contraseña**: `1234`

## 📁 Estructura del proyecto

```
pizzeria/
├── app/                                     # Pantallas y navegación
│   ├── _layout.tsx                          # Layout principal con AuthProvider
│   ├── login.tsx                            # Pantalla de login
│   ├── index.tsx                            # Index para redirigir al login
│   └── (tabs)/                              # Navegación por pestañas
│       ├── _layout.tsx                      # Configuración de tabs
│       ├── index.tsx                        # Tab Home - pantalla principal
│       └── profile.tsx                      # Tab Perfil - muestra email del usuario
├── components/                              # Componentes reutilizables
│   └── ui/                                  # Componentes de interfaz
│       ├── CustomButton.tsx                 # Botón personalizado
│       └── CustomInput.tsx                  # Input personalizado
├── hooks/                                   # Hooks personalizados
│   └── useLogin.ts                          # Hook para lógica de login
├── contexts/                                # Contextos de React
│   └── AuthContext.tsx                      # Contexto de autenticación
├── constants/                               # Constantes y validaciones
│   └── validation.ts                        # Funciones de validación (email, password)
└── utils/                                   # Utilidades
    └── alert.ts                             # Función para mostrar alertas
```

## 🛠️ Tecnologías utilizadas

- **React Native** - Framework para desarrollo mobile
- **Expo** - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **Expo Router** - Navegación basada en archivos

## 📚 Aprendizajes

Este proyecto demuestra:
- Manejo de estado con React Hooks
- Navegación con Expo Router
- Context API para estado global
- Validaciones de formularios
- Arquitectura de componentes
