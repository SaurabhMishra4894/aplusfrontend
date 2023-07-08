import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: true,
      refetchOnMount:true,
    },
  },
 })

 if(container.hasChildNodes()){
  root.hydrate(
    <BrowserRouter >
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </BrowserRouter>
  );
  
 }else{
  root.render(
    <BrowserRouter >
    <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </BrowserRouter>
  );
  
 }
