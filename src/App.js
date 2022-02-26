/* eslint-disable react/jsx-tag-spacing */
import React, { useState, useEffect } from 'react';
import api from './services/api';
import Main from './components/Main';
// import './App.css';

export default function App() {
  const [contatos, setContatos] = useState([]);
  const novoNomeContato = '';

  useEffect(async () => {
    indexContatos();
  }, []);

  async function indexContatos() {
    const data = await api
    .get('/contatos')
    .then((res) => res.data)
    .catch((err) => {
      console.error(`ops! ocorreu um erro${err}`);
    });

    console.log(data);
    setContatos(data);
  }

  async function deleteContato(id) {
    await api.delete(`/contatos/${id}`);
    indexContatos();
  }

  async function postContato(name) {
    await api.post('/contatos', {
      name,
    });
  }

  function mudarNovoContato(novoContato) {}

  return (
    <>
      <h1>Hello</h1>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            {contato.name}
            <br />
            {contato.email}
            <br />
            <button type="button" onClick={() => deleteContato(contato.id)}>Delete</button>
            <br />
          </li>
))}
      </ul>
      <input type="text" name="" id="" onChange={(novoContato) => mudarNovoContato(novoContato)}/>
      <button type="submit" onClick={() => postContato(novoNomeContato)}>Adicionar</button>

    </>
  );
}
