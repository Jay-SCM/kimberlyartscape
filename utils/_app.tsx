
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.scss';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
