import React, { useState } from "react";
import Header from "components/Header";
import AddContact from "components/AddContact";
import ContactCard from "components/ContactCard";

import { useSelector } from "react-redux";
import AppConfig from "App.config";
import ExternalInfo from "components/ExternalInfo";

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.list);

    const [contactFormVisiblity, setContactFormVisiblity] = useState(false);

    const toggleContactFormVisiblity = () =>
        setContactFormVisiblity(visiblity => !visiblity);

    return (
        <>
            <Header title="Contact List" />

            <ExternalInfo page="contactList" />

            <div className="row">
                <div className="col text-center">
                    <h2>Contact List</h2>

                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-left">
                                <h4 className="d-inline">Contact List</h4>
                                <span
                                    className="float-right mt-1 cursor-pointer"
                                    onClick={toggleContactFormVisiblity}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                            </div>

                            <ul className="list-group list-group-flush">
                                {contacts.map((contact, index) => (
                                    <ContactCard
                                        {...contact}
                                        index={index}
                                        key={contact.name}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                    {contactFormVisiblity && (
                        <AddContact onClose={toggleContactFormVisiblity} />
                    )}
                </div>
            </div>
        </>
    );
};

export default ContactList;