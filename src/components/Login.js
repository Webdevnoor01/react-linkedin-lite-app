import React,{useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import styles from "../Styles/Login.module.css";
import { useAuth } from '../context/authContext'


const Login = () => {
  const navigate = useNavigate()
  const { signInWithGoogle,  currentUser } = useAuth();

  useEffect(() => {
    if(currentUser?.displayName){
      navigate('/home');
      return;
    }
  },[currentUser, navigate])

  const handleSubmit = async () =>{

    try {
      await signInWithGoogle();
      navigate("/home")

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className={styles.loginContainer}>
        <nav>
          <div className={styles.navLeft}>
            <a href="/">
              {" "}
              <img src="./images/linkedin_login_logo.png" alt="" />{" "}
            </a>
          </div>
          <div className={styles.navRight}>
            <a href="/join" className={styles.joinNow}>
              Join now
            </a>
            <a href="/join" className={styles.singIn}>
              Sing in
            </a>
          </div>
        </nav>

        <section>
          <div className={styles.heroSection}>
            <h2>Welcome to your professional community</h2>
            <div className={styles.illustration_logo}>
              <img src="/images/illustration_logo.svg" alt="" />
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.googleSingup} onClick={handleSubmit}  >
              <img src="./images/google_logo.png" alt="" />
              <h3>Sing in with google</h3>
            </div>
          </form>
        </section>
      </div>
    </>

  );
};

export default Login;
