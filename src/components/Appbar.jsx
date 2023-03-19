import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  BellIcon,
  LightningBoltOutline,
  PlusOutline,
  SearchOutline,
  UserCircleOutline,
} from '../assets/icons';
import { auth } from '../config/firebase';

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 42px;
`;

const Appbar = () => {
  return (
    <div>
      <Container>
        <img src={LightningBoltOutline} alt="Home" />
        <img src={SearchOutline} alt="Search" />
        <img src={PlusOutline} alt="Plus" />
        <img src={BellIcon} alt="Notification" />
        <Link to="/profile">
          <img src={UserCircleOutline} alt="User Profile" />
        </Link>
      </Container>
    </div>
  );
};

export { Appbar };
