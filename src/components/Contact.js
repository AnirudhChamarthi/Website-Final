import React from 'react';
import "../App.css";
import "./Contact.css";
import FormData from 'form-data';
function Contact() {

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInfo = new FormData(form);
    const jsonBody = Object.fromEntries(formInfo);
    console.log (jsonBody)
    async function fetchData() {
      await fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify (jsonBody),
      headers: {
        "Content-Type": "application/json"
      }
    }
    ).then(
      (response) => (response.json())
        ).then((response)=> {
          if (response.status === "success") {
            alert ("Message sent!")
          }
          else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
fetchData ();

  }

  return (
    <>
      <div className="container">
        <style>{'body { background-color: black; }'}</style>
        <form method="post" onSubmit={handleSubmit}>
          <label>Name: <input type="text" className = "textbox" name="name"></input></label>
          <label>Email:  <input type="email" className = "textbox" name="email"></input></label>
          <div className="input-help">
            <label> Message:
              <textarea type="text" className = "textbox" name="message" placeholder="Thank you for messaging!" columns="200" rows="10" />
            </label>
          </div>
          <button className = "submit-button" type="submit">Submit</button>
        </form>
      </div>


    </>
  );

}

export default Contact;