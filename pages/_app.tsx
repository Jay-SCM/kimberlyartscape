// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import '../styles/globals.scss';

// const queryClient = new QueryClient();

// function MyApp({ Component, pageProps }: any) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Component {...pageProps} />
//     </QueryClientProvider>
//   );
// }

// export default MyApp;


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.scss';
import Navbar from '../components/Navbar';  

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}

export default MyApp;



// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import '../styles/globals.scss';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

// const queryClient = new QueryClient();

// function MyApp({ Component, pageProps }: any) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Navbar />
//       <Sidebar />
//       <Component {...pageProps} />
//     </QueryClientProvider>
//   );
// }

// export default MyApp;



// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import '../styles/globals.scss';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar';

// const queryClient = new QueryClient();

// function MyApp({ Component, pageProps }: any) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Navbar />
//       <Sidebar />
//       <main style={{ marginLeft: '250px', padding: '1rem' }}>
//         <Component {...pageProps} />
//       </main>
//     </QueryClientProvider>
//   );
// }

// export default MyApp;
