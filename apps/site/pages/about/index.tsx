import { GetStaticProps } from 'next';
import styles from './index.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About({name}: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {name}!</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
  return {
    props: {
      name: 'My About',
    },
  };
}

export default About;
