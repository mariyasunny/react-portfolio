import React, { useState } from 'react';

const styles= {
  label: {
    color:'#fff',
    marginBotton:'.5rem',
    padding:'0 0 0 12px',
    fontWeight:'2rem'
  },

  form: {
    display:'flex',
    flexDirection:'column',
    padding:'.5rem .2rem',
    margin:'auto',
    maxWidth:'600px'
  },
  input: {
    marginBottom:'1rem',
    padding:'10px 100px',
    fontSize:'1.2rem',
    background:'rgba(255,255,255,0.1)',
    borderColor:'rgba(255,255,255,0.1)',
    color:'#f4f4f4'
  },
  text: {
    marginBottom:'1rem',
    padding:'10px 18px',
    fontSize:'1.2rem',
    background:'rgba(255,255,255,0.1)',
    borderColor:'rgba(255,255,255,0.1)',
    color:'#f4f4f4'

  }
}
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    alert('Submitted');
  }

  return (
    <div>
    <form style={styles.form}>
      
      <label style={styles.label}> Name: </label>
        <input style={styles.input} type="text" value={name} onChange={handleNameChange} />
     
     
      <label style={styles.label}> Email: </label>
        <input style={styles.input} type="email" value={email} onChange={handleEmailChange} />
     
      <label style={styles.label}> Subject: </label>
        <input style={styles.input} type="text" value={subject} onChange={handleSubjectChange} />
      
      
      <label style={styles.label}> Message:  </label>
        <textarea style={styles.text} value={message}placeholder='Type your message' onChange={handleMessageChange} />
     
      <button type="submit" className='btn' onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  );
}

export default ContactForm;
