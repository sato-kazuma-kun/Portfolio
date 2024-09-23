import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import '@/index.css';
import { ThemeProvider } from "@/providers/theme";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="kazuma-portfolio-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
