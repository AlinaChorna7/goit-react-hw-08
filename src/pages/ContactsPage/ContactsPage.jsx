import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactPage=()=>{
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