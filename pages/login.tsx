import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <main className={styles['login-container']}>
        <h1>Login</h1>
        <form>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;


