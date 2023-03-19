import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../config/firebase';
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

export const Home = () => {
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
      <Stories>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Story key={i}>
              <img
                src={
                  user?.photoURL ||
                  'https://c1.alamy.com/thumbs/2g7ft6p/default-avatar-photo-placeholder-grey-profile-picture-icon-man-in-t-shirt-2g7ft6p.jpg'
                }
                alt=""
              />
              <h1>
                {user?.displayName
                  ? user?.displayName?.slice(0, 8)
                  : user?.email.slice(0, 8)}
              </h1>
            </Story>
          ))}
      </Stories>
      <Title>Upcoming Events</Title>
      <Categories>
        <span>
          <input type="radio" name="category" id="sports" />{' '}
          <label for="sports">Sports</label>
        </span>
        <span>
          <input type="radio" name="category" id="clubs" />{' '}
          <label for="clubs">Clubs</label>
        </span>
        <span>
          <input type="radio" name="category" id="food" />{' '}
          <label for="food">Food</label>
        </span>
        <span>
          <input type="radio" name="category" id="gaming" />{' '}
          <label for="gaming">Gaming</label>
        </span>
        <span>
          <input type="radio" name="category" id="career" />{' '}
          <label for="career">Career</label>
        </span>
      </Categories>
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
    </div>
  );
};
