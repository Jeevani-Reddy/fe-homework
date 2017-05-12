import ReactDOM from 'react-dom';
import routes from './route'
import './styles/styles.css'

var _APP_INFO = { //eslint-disable-line no-unused-vars
  name:'User-CRM',
  branch:'Master',
  version:'1.0'
};

ReactDOM.render(
  routes,
  document.getElementById('root')
)
