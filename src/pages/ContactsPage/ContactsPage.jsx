import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operation";
import { useEffect } from "react";

const ContactPage=()=>{
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return(
    <div>
        <h1>PhoneBook</h1>
        <ContactForm/>
        <SearchBox/>
        <ContactList/>
    </div>
    )
}
export default ContactPage;