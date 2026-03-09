import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1d4ed8', // Azul Matemático (Royal Blue)
    secondary: '#15803d', // Verde Pizarra (Slate Green)
    background: '#f8fafc', // Blanco ligero (Slate 50)
    surface: '#ffffff',
    surfaceVariant: '#e2e8f0', // Gris claro matemático
    error: '#b91c1c',
  },
};
