import React from 'react';
import "../App.css";
import "./Contact.css";
import FormData from 'form-data';
function Contact() {

 

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInfo = new FormData(form);
    const jsonBody = Object.fromEntries(formInfo.entries());  // Ensure correct conversion
    console.log(jsonBody);

    async function fetchData() {
      try {
        // Determine the base URL dynamically based on environment
        const baseURL = `${window.location.protocol}//${window.location.hostname}:3002`;
  
        const response = await fetch(`${baseURL}/send`, {
          method: "POST",
          body: JSON.stringify(jsonBody),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const result = await response.json();
        if (result.status === "success") {
          alert("Message sent!");
        } else {
          alert("Message failed to send.");
        }
      } catch (error) {
        console.error('Error:', error);
        alert("Message failed to send due to an error.");
      }
    }

    fetchData();
  }

  return (
    <>
      <div className="contact-container">
        <label style={{ fontSize: '36px', color: 'blue' }}>
        Contact Me
        </label>
    <div className="inner-container">
        <style>{'body { background-color: black; }'}</style>
        <form method="post" onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" className="textbox" name="name" />
            </label>
            <label>
                Email:
                <input type="email" className="textbox" name="email" />
            </label>
            <div className="input-help">
                <label>
                    Message:
                    <textarea
                        className="textbox"
                        name="message"
                        placeholder="Thank you for messaging!"
                        cols="50"
                        rows="10"
                    />
                </label>
            </div>
            <button className="submit-button" type="submit">Submit</button>
        </form>
    </div>
</div>



    </>
  );

}

export default Contact;