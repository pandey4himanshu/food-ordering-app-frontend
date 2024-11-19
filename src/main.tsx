import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Corrected import without trailing space
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';


//fetch all the details ine=ce the user clicks
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client = {queryClient}>
      <Auth0ProviderWithNavigate>
      <AppRoutes/> 
      <Toaster visibleToasts={1} position="top-right" richColors/>
      </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router> 
  </StrictMode>,
);
