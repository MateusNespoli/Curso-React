
import './App.css'
import luigi from "./assets/luigi.png"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment  from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

    const cars = [
          {id: 1, brand: "Ferrari", color:"vermelha", newCar: true, km:0},
          {id: 2, brand: "KIA", color:"roxa", newCar: false, km:5000},
          {id: 3, brand: "Toyota", color:"branca", newCar: false, km:900000}
        ]
    
    function showMessage () {
      console.log("Evento do componente pai")
    }

    const [message, setMessage] = useState("");
    
    const handleMessage = (msg) => {
      setMessage(msg);
    };

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
      {/* props*/}
      <ShowUserName name = "Maria"/>
      {/* destructing */}
      <CarDetails brand="VW" km={10000} color="amarelo" newCar={false} />
      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="branco" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="verde" km={50000} newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) =>
        <CarDetails 
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar} />
      )}
      {/* Frangment */}
      <Fragment propFragment="teste"/>
      {/* Children */}
      <Container myValue="teste">
        <p>E este é o conteúdo</p>
        <p>O valor é: </p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction= {showMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
   
  );
}

export default App
