import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import '@/index.css';
import { ThemeProvider } from "@/providers/theme";
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="kazuma-portfolio-theme">
        <App />
        <Analytics />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
