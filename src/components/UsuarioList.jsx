import React, { useState, useEffect } from 'react';
import { usuariosApi } from './api'; // Importa os endpoints de usuários
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [role, setRole] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Função para buscar todos os usuários
    const fetchUsuarios = async () => {
      const response = await usuariosApi.getAll();
      setUsuarios(response.data);
    };

    fetchUsuarios();
  }, []);

  const handleSave = async () => {
    const usuario = { nome, email, senha, role };
    if (editId) {
      await usuariosApi.update(editId, usuario);
      setUsuarios(usuarios.map(u => u.id === editId ? { id: editId, ...usuario } : u));
      setEditId(null);
    } else {
      const response = await usuariosApi.create(usuario);
      setUsuarios([...usuarios, response.data]);
    }
    setNome('');
    setEmail('');
    setSenha('');
    setRole('');
  };

  const handleEdit = (usuario) => {
    setNome(usuario.nome);
    setEmail(usuario.email);
    setSenha(usuario.senha);
    setRole(usuario.role);
    setEditId(usuario.id);
  };

  const handleDelete = async (id) => {
    await usuariosApi.delete(id);
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
  };

  return (
    <Container sx={{ paddingTop: '80px' }}>
      <h1>Lista de Usuários</h1>
      <div style={{ marginBottom: '20px' }}>
        <TextField
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Senha"
          variant="outlined"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <TextField
          label="Role"
          variant="outlined"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          {editId ? 'Atualizar' : 'Salvar'}
        </Button>
      </div>
      <List>
        {usuarios.map(usuario => (
          <ListItem key={usuario.id} divider>
            <ListItemText primary={`${usuario.nome} - ${usuario.email}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(usuario)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(usuario.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UsuarioList;
