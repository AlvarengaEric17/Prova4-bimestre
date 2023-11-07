import './App.css';
import horta from './img/horta.jpg'
import Eric from './img/eric.jpg'
import Post from './components/Post';
import Comentario from './components/Comentario';



function App() {
  return (
    <div className="App">
      <h1>Blog Alvarenga</h1>
      <div className='main'>



        <Post
          titulo="Horta na comunidade Escoalar"
          imagem={horta}
          alt="Foto do FC Mobile"
          descricao="Um projeto realizado em uma escola no interior do estado de São Paulo."
          categoria=" Saúde"


        />
        <Comentario
          nome="Eric Alvarenga"
          imagem={Eric}
          alt="foto do Usuario"
          comentario="Muito bacana esse projeto realizado na comunidade escolar"

        />

      </div>
    </div>
  );
}

export default App;