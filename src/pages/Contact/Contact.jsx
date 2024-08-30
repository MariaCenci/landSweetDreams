import React, { useState } from "react";
import "./contact.scss";
import Button from "../../components/Button/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNameChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };

  const handleMessageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      message: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      email: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-text-wrapper">
            <h1 className="title-section">Contact us</h1>
            <div className="contact-infos">
              <div className="info-contact">
                <img
                  className="img-info-contact"
                  src="./icons/phone.svg"
                  alt=""
                />
                <span className="info-contact">+1 (555) 123-4567</span>
              </div>
              <div className="info-contact">
                <img
                  className="img-info-contact"
                  src="./icons/address.svg"
                  alt=""
                />
                <span className="info-contact">Toronto St</span>
              </div>
              <div className="info-contact">
                <img
                  className="img-info-contact"
                  src="./icons/email.svg"
                  alt=""
                />
                <span className="info-contact">sweetdreams@gmail.com</span>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field-form">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleNameChange}
                />
              </div>

              <div className="field-form">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="field-form">
                <div className="textarea-form">
                  <textarea
                    id="message"
                    name="message"
                    cols={50}
                    rows={10}
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleMessageChange}
                  />
                </div>
              </div>
              <div className="btn-form">
                <Button
                  className="form"
                  label="Send"
                  icon="./icons/iconSend.svg"
                  iconName="send"
                />
              </div>
            </form>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9054936424805!2d-79.37873182462155!3d43.650134552630334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb32476d17c3%3A0xc0286b92ad186853!2sToronto%20St%2C%20Toronto%2C%20ON%2C%20Canad%C3%A1!5e0!3m2!1sen-US!2sus!4v1723547573327!5m2!1sen-US!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
