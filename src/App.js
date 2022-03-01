import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table';
import { AddBox, ArrowDownward } from '@material-ui/icons';
import api from './services/api';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    indexContatos();
  }, []);

  async function indexContatos() {
    const json = await api
    .get('/contatos')
    .then((res) => res.data)
    .catch((err) => {
      console.error(`ops! ocorreu um erro${err}`);
    });

    const obj = [];

    for (let i = 0; i < json.length; i++) {
      obj.push(json[i]);
    }

    setData(obj);
  }

  const columns = [
    {
      title: 'Name',
      field: 'name',
      validate: (rowData) => (rowData.name === undefined || rowData.name === '' ? 'Required' : true),
    },
    {
      title: 'Email',
      field: 'email',
      validate: (rowData) => (rowData.email === undefined || rowData.email === '' ? 'Required' : true),
    },
    {
      title: 'Phone',
      field: 'phone',
      validate: (rowData) => (rowData.phone === undefined || rowData.phone === '' ? 'Required' : true),
    },
];
  return (
    <div className="App">
      <h1 align="center">Contatos</h1>
      <MaterialTable
        title="Student Details"
        columns={columns}
        data={data}
        options={{ actionsColumnIndex: -1, addRowPosition: 'first' }}
        editable={{
          onRowAdd: (newData) => new Promise((resolve, reject) => {
            const { name, email, phone } = newData;

            api.post('/contatos', {
              name, email, phone,
            });

            indexContatos();
            resolve();
          }),
          onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
            console.log(newData);

            const { name, email, phone } = newData;

            api.put(`/contatos/${oldData.id}`, {
              name,
              email,
              phone,
          })
            .then((resp) => {
              indexContatos();
              resolve();
              });
          }),
          onRowDelete: (oldData) => new Promise((resolve, reject) => {
            api.delete(`/contatos/${oldData.id}`)
            .then((resp) => {
              indexContatos();
              resolve();
              });
          }),
        }}
      />
    </div>
  );
}
