import Contacts from 'components/Contacts/Contacts';
import { Provider } from 'react-redux'
import store from 'redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <section className="section">
        
        <Contacts />
      </section>
    </div>
    </Provider>
  );
}
export default App;
