
import './App.css'
import luigi from "./assets/luigi.png"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

function App() {

  return(
    <div>
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset */}
      <div>
        <img src={luigi} alt="Luigi" />
      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name = "Maria"/>
      
    </div>
   
  );
}

export default App
