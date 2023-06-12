import Social from '../hero_components/Social';
import {FaHome, FaPhone, FaMailBulk} from "react-icons/fa"
const styles = {
   footcontainer: {
      maxWidth:'100%',
      margin:'auto',
      display:'grid',
      gridTemplateColumns:'repeat(3,1fr)',
      gridGap:'200px',
      height:'200px',
      color: '#fff',
      fontSize: '1.5em'
    },
   
    copy : {
      color:'white',
      fontFamily:'Cascadia Code',
      fontSize:'1em'
    },
    left:{
      height:'100px',
      maxWidth:'100%',
      display:'flex',
      flexDirection:'column',
      padding:'1rem',
      fontSize:'1.05rem',
      lineHeight:'2rem'
      
    },
    center:{
      height:'100px',
      maxWidth:'100%',
      display:'flex',
      flexDirection:'column',
      padding:'10rem 0px 1px 0px',
      fontSize:'15px'

    },
    right:{
      height:'100px',
      maxWidth:'100%',
      display:'flex',
      flexDirection:'column',
      padding:'1rem'
    },
    location:{
      display:'flex',
      marginBottom:'0.8rem'
    },
    phone:{
      display:'flex',        
     },

     gmail:{
        display:'flex'
     },
    
   };
   
   
   const container= {
    width:'100%',
    padding:'1rem 3rem',
    background:'rgba(19,19,19,0.8'
   }
 
   const Foot = () => {
     return (
      <div style={container}>
        <footer style={styles.footcontainer}>
    
      
      
     
        <div style={styles.left}>
          <div style={styles.location}>
            <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
            <div>
              <p>London</p>
              <p>Ontario</p>
            </div>
          </div>
          <div style={styles.phone}>
            <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>  
              226-580-2636
          </div>
          <div style={styles.gmail}>
           <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>  
              mariyasunny09@gmail.com
          </div>
        </div>

        <div style={styles.center}>
          <p>&copy; 2023 Mariyasunny. All rights reserved</p>
        </div>

        <div style={styles.right}>
          <div style={styles.social}>
           <Social/>
          </div>
        </div>
    </footer>
  </div>
     
     );
   };
   
   export default Foot;
   