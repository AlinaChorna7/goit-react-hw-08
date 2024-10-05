import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operation";




export const UserMenu=()=>{
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

return(
    <div>
        <span>Welcome, {user.name}</span>
        <button onClick={()=> (logout())}>Logout</button>
    </div>
)

}