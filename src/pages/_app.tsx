import { AppProps } from 'next/app';
import { globalStyles } from '../styles/globalStyles';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
};

export default App;
