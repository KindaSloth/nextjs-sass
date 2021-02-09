import styles from './Hello.module.scss';

export const Hello: React.FC = () => {
  return (
    <div className={styles['main']}>
      <h1 className={styles['main__title']}>
        Hello, this is a Next.js Boilerplate
      </h1>
    </div>
  );
};
