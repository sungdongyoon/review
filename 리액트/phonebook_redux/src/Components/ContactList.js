import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import {useSelector} from 'react-redux';
import { useState, useEffect } from 'react';

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
