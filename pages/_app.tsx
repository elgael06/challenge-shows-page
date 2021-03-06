import { Provider } from 'react-redux';
import store from '../store';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutOrg from '../components/Layout/LayoutOrg';

function MyApp({ Component, pageProps }){
  return <Provider store={store}>
    <header>
      <title>Shows TV'S</title>
    </header>
    <LayoutOrg>
      <Component {...pageProps} />
    </LayoutOrg>
  </Provider>
}
export default MyApp
