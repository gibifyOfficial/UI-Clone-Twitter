import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Evandro Gibicoski</h1>
        <h2>@gibify_official</h2>

        <p>
          Development Student at <a href="http://rocketseat.com.br">@Rocketseat</a>
        </p>
         <ul>
           <li>
             <LocationIcon />
             São José, Brasil
           </li>
           <li>
             <CakeIcon />
             Nascido em 29 de Setembro de 1985
           </li>
         </ul>

         <Followage>
           <span>
             seguindo <strong>95</strong>
           </span>
           <span>
           <strong>62 </strong> seguidores
           </span>
         </Followage>
      </ProfileData>

    < Feed />
    </Container>
  )
}

export default ProfilePage;