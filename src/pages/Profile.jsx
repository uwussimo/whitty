import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { Title } from '../components/ui';

import eventImage from './../assets/event.png';

import {
  HiOutlineClock,
  HiOutlineCalendarDays,
  HiOutlineMap,
} from 'react-icons/hi2';
import { Appbar } from '../components/Appbar';

const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 3px solid #ff3e3e;
  }
  h1 {
    font-family: 'Sora';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Black */

    color: #020300;
  }
`;

const Stories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  padding: 20px;
  overflow-x: scroll;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  padding: 0 20px;
  overflow-x: hidden;
  & > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    input {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  background: #fff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  img {
    width: 100%;
    border-radius: 12px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 20px;
    h1 {
      font-family: 'Sora';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;

      /* Black */

      color: #020300;
    }
    & > p {
      color: #020300b2;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  & > .icon {
    color: #ff3e3e;
  }
`;

const ProfileContainer = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  color: #fff;
  padding: 20px;
  background: linear-gradient(0deg, #020300, #020300),
    radial-gradient(
      100% 100% at 98.73% 0%,
      rgba(255, 0, 0, 0.2) 0%,
      rgba(255, 85, 85, 0) 100%
    ),
    radial-gradient(
      64.21% 64.21% at 0% 90.36%,
      rgba(6, 151, 255, 0.2) 0%,
      rgba(57, 172, 255, 0) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));

  img {
    width: 164px;
    height: 164px;
    border-radius: 50%;
  }
`;

const SignOutButton = styled.button`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;

  /* Primary/Red */
  background: #ff3e3e;
  border-radius: 8px;
  color: #fff;
  border: none;
  font-size: 18px;

  &:hover {
    cursor: pointer;
  }
`;

export const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading) {
      if (!user) {
        return navigate('/auth');
      }
    }
  }, [user, loading]);

  return (
    <div>
      <ProfileContainer>
        <img
          src={
            user?.photoURL
              ? user.photoURL
              : 'https://c1.alamy.com/thumbs/2g7ft6p/default-avatar-photo-placeholder-grey-profile-picture-icon-man-in-t-shirt-2g7ft6p.jpg'
          }
          alt="Avatar"
        />
        <h2>{user?.displayName}</h2>
        <p>{user?.email}</p>
        <SignOutButton
          onClick={() => {
            signOut(auth);
            navigate('/auth');
          }}
        >
          Sign out
        </SignOutButton>
      </ProfileContainer>
      <Title>Hosted Events</Title>
      <div>
        <Event>
          <img src={eventImage} alt="" />
          <div>
            <h1>Party type of event</h1>
            <Info>
              <HiOutlineMap size={20} className="icon" /> <span>EJ 305</span>
              <HiOutlineCalendarDays className="icon" size={20} />{' '}
              <span>10/10/2021</span>
              <HiOutlineClock size={20} className="icon" />{' '}
              <span>10:00 AM</span>
            </Info>
            <p>
              Whitty is a student connection app specifically designed for
              Whitworth University students.
            </p>
          </div>
        </Event>
        <Event>
          <img src={eventImage} alt="" />
          <div>
            <h1>WhitCode Social Hour</h1>
            <Info>
              <HiOutlineMap size={20} className="icon" /> <span>EJ 305</span>
              <HiOutlineCalendarDays className="icon" size={20} />{' '}
              <span>10/10/2021</span>
              <HiOutlineClock size={20} className="icon" />{' '}
              <span>10:00 AM</span>
            </Info>
            <p>
              Whitty is a student connection app specifically designed for
              Whitworth University students.
            </p>
          </div>
        </Event>
      </div>
      <Appbar />
    </div>
  );
};
