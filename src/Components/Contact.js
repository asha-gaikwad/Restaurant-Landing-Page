import React from "react";

const Contact = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    console.log("Email submitted:", email);
  
    event.target.reset();
  };
  
  return (
    <>
      <div id="contact" className="contact-page-wrapper">
        <h1 className="primary-heading">Have a Question in Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>

        <form className="contact-form-container" onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="yourmail@gmail.com"
            required
          />
          <button type="submit" className="secondary-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
