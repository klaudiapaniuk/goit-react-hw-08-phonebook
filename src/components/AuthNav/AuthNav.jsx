import styles from './AuthNav.module.css';
import { Center, Heading } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Center>
        <div>
          <Heading className={styles.AuthNav_log}>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </Heading>
        </div>
      </Center>
    </div>
  );
};
