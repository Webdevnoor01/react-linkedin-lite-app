// External imports
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

// Internal exports
import Navigation from './Navigation';
import styles from '../Styles/Home.module.css'
import Feed from './Feed';
import {useAuth} from '../context/authContext'
export default function Home(){
    const {currentUser} = useAuth();
    const navigate= useNavigate();

    useEffect(() =>{
        if(!currentUser){
            navigate("/");

            return;
        }

        return ;
    },[currentUser, navigate])


    return(
        <>
        <div className={styles.home}>
            
            <Navigation />
            <Feed />
        </div>
        </>
        
        
    )
}