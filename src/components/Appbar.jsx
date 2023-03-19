import styled from 'styled-components';
import {
  BellIcon,
  LightningBoltOutline,
  PlusOutline,
  SearchOutline,
  UserCircleOutline,
} from '../assets/icons';

const Cotainer = styled.div`
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
    <Cotainer>
      <img src={LightningBoltOutline} alt="Home" />
      <img src={SearchOutline} alt="Search" />
      <img src={PlusOutline} alt="Plus" />
      <img src={BellIcon} alt="Notification" />
      <img src={UserCircleOutline} alt="User Profile" />
    </Cotainer>
  );
};

export { Appbar };
