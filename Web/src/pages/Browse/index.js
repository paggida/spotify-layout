import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlist/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/64/FFSkinBones.jpg/220px-FFSkinBones.jpg"
          alt="Playlist"
        />
        <strong>Rock dos bons</strong>
        <p>Codando com as melhores do rock</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://www.somlivre.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/9/3903-2.jpg"
          alt="Playlist"
        />
        <strong>Pagocódigo</strong>
        <p>Esta barra que é codar com você!</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8PIidm_9V9Tj0HoMi8r1P2OG7bw8e8_k4fYMl5cZJVP2kuvm"
          alt="Playlist"
        />
        <strong>Sapato velho</strong>
        <p>Codando em cima de sistemas legado</p>
      </Playlist>
      <Playlist to="/playlist/1">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71IjTUGdpNL._SY355_.jpg"
          alt="Playlist"
        />
        <strong>Uma brisa de inverno</strong>
        <p>Let's codar...</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
