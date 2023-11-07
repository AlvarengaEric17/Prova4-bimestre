import React from 'react';
import './comentario.css';

const Comentario = ({ nome, imagem, alt, comentario }) => {
    return (
        <div className='main'>
            <h1 className='titulo'>Comentarios</h1>
            <div className='centralizar'>
                <div className='card'>
                    <div className='nomeFoto'>
                        <img className='imagem' src={imagem} alt={alt} />
                        <h2 className='nome'>{nome}</h2>
                    </div>
                    <p className='comentario'>{comentario}</p>
                </div>
            </div>
        </div>
    )
}

export default Comentario;