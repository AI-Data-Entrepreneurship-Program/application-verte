import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function useQueryClientProvider() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });

    const Provider = ({ children }) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );

    return Provider;
}
