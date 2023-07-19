import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';

const ContactList = () => {
  const {contact, keyword} = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if(keyword !== "") {
      let list = contact.filter((it) => it.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);
  return (
    <div>
      <SearchBox/>
      {filteredList.map((it) => (
        <ContactItem it={it}/>
      ))}
    </div>
  )
}

export default ContactList;
