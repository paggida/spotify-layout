import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/64/FFSkinBones.jpg/220px-FFSkinBones.jpg"
        alt="Playlist"
      />
      <div>
        <span>playlist</span>
        <h1>Rock dos bons</h1>
        <p>13 músicas</p>
        <button>play</button>
      </div>
    </Header>
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Razor</td>
          <td>Foo Fighters</td>
          <td>Skin and Bones</td>
          <td>6:48</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Walking After You</td>
          <td>Foo Fighters</td>
          <td>Skin and Bones</td>
          <td>5:18</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Over and Ou</td>
          <td>Foo Fighters</td>
          <td>Skin and Bones</td>
          <td>5:56</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
