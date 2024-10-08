import { NavLink } from 'react-router-dom'
import styles from './AuthNav.module.css'
export default function AuthNav(){
    return(
    <div className={styles.authnav}>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
    )
}