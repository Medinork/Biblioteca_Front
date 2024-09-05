import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/home-image.jpg";

function Home() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" gutterBottom>
          Bem-Vindo ao Sistema de Biblioteca
        </Typography>
        <img
          src={image}
          alt="Home"
          style={{ width: "100%", marginBottom: "20px" }}
        />{" "}
        {/* Add image*/}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/livros"
          sx={{ marginTop: 2 }}
        >
          Gerenciar Livros
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/usuarios"
          sx={{ marginTop: 2, marginLeft: 2 }}
        >
          Gerenciar Usúários
        </Button>
      </Box>
    </Container>
  );
}

export default Home;