

import ContactForm from '../components/ContactForm'

const styles = {
 
    container: {
       width: '100%',
       height:'500px',
       padding:'50px 100px',
       borderBottom:'1px solid #000',
       textAlign:'center',
       background:'rgba(0,0,0,0.5)',
       zIndex:'-1'
         
    },
    watermark: {
      position: 'absolute',
      zIndex: '-1',
      color: '#ece',
      opacity: '0.4',
      fontSize: '1800%',
      fontWeight: '700',
  },
  
   };

    
   const Contact = () => {
     return (
      <section style={styles.container} id="contact">
       <h1 style={styles.watermark}>CONTACT</h1>
      <div>
        <ContactForm/>
       </div>
       
      </section>
     );
   };
   
   export default Contact;
   