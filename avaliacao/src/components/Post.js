import React from 'react';
import './post.css';

const Blog = ({ titulo, imagem, alt, descricao, categoria }) => {
    return (
        <div className='cardPost'>
            <h2 className='tituloPost'>{titulo}</h2>
            <img className='imagemPost' src={imagem} alt={alt} />
            <p className='descricaoPost'>Descrição: {descricao}</p>

            <p className='categoriaPost'>Categoria: {categoria}</p>

        </div>
    )
}

export default Blog;