import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import Error404 from '../src/pages/Error404/index'
import CadastroVideo from '../src/pages/cadastro/Video/index'
//Switch = if 
import {BrowserRouter , Switch, Route} from 'react-router-dom'
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route  path='/' component={App} exact/>
    <Route  path='/cadastro/video' component={CadastroVideo} />
    <Route  path='/cadastro/categoria' component={CadastroCategoria} />
    <Route  component= {Error404} />
  </Switch>
</BrowserRouter> ,
  
 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

