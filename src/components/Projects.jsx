import ImageLightbox from './ImageLightbox'
import BasicCarousel from './BasicCarousel';

import html from '../assets/images/htmlIcon.png';
import css from '../assets/images/cssIcon.png';
import js from '../assets/images/javascript.png';
import linux from '../assets/images/linux.png';
import asp from '../assets/images/asp.png';
import bootstrap from '../assets/images/bootstrap.png';
import php from '../assets/images/php.png';
import mysql from '../assets/images/mysql.png';
import img1 from '../assets/images/kidsHome.png'
import img2 from '../assets/images/kidsShop.png'
import img3 from '../assets/images/kidsSeller.png'
import img4 from '../assets/images/kidsYt.png'
import img5 from '../assets/images/kidContact.png'


const styles = {
 

  container: { 
    minHeight: '500px',
    borderBottom: '1px solid #000',
    fontSize: '2em',
    overflowY: 'auto',   
    textAlign:'center',
    overflow: 'hidden',
    content:'',
    backgroundImage:'url("https://images.pexels.com/photos/10060915/pexels-photo-10060915.jpeg?auto=compress&cs=tinysrgb&w=600")',
    backgroundSize:'cover',
    backgrounfPosition:'center',
    height:'100%',
    width:'100%',
    position:'relative',
    top:'0',
    left:'0',
    zIndex:'0',
    backgroundRepeat: 'no-repeat',
    padding:'20px'
  },

  projectContainer:{
      width:'100%',
      background:'rgba(0,0,0,0.6)',
      overflow: 'hidden',
     
  },

aboutText: {
  margin: '10px 30px 20px 30px',
  lineHeight: '1.5em',
  fontSize: '.6em',
  fontFamily: 'Instrument Serif',
  color:'#fff'
},

images: {
  width: '700px',
  height:'500px',
  position: 'relative',
  boxShadow: '2px 2px #fff'
      
  },

projectHeading: {
  fontSize: '1em',
  color:'yellow',
  width:'100%',
  fontFamily: 'Instrument Serif',
  
      },


heroVid: {
  position: 'relative',
  zIndex: '0',
  minWidth: '100%',
  minHeight: '100%',
 
},



    };
       
   const Projects = () => {
    
    const image = [
      img1,img2,img3,img4,img5
    ];
   
    return (      
     
    <section style={styles.container} id="projects">
     <div style={styles.projectContainer}> 
      <h1 style={styles.projectHeading}>PROJECTS</h1> <br/>
      <div className='divContainer'>
        
         <img src={html} alt='java' width={40}></img>
         <img src={css} alt='java' width={40}></img> 
         <p style={styles.aboutText}>I have designed and created a website for an online Bookstore for kids under different 
            age category  using HTML5 and CSS3. This was my first web project and hosted in <a href='http://triosdevelopers.com/~M.Sunny/kidsworld/kidsworld/'
             target='_blank' rel="noreferrer" style={{color:'#00FFFF'}}>triosdevelopers.com</a> using FileZilla ftp server.    </p>
            
         <BasicCarousel images={image} interval={4000}/> <br/>
      </div>


      
      
      <div className='divContainer'>
      <img src={asp} alt='asp' width={40}></img> 
      <img src={bootstrap} alt='bootstrap' width={40}></img> 
        <p style={styles.aboutText}>I have created a simple portfolio site using ASP.Net and bootstrap and published in <a href='https://msvportfolio.azurewebsites.net/Home/Projects' style={{color:'#00FFFF'}}>Microsoft Azure.com</a> </p>
         
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sbuodh-K3RQ" title="YouTube video player" frameBorder="0" allow="autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      </div>

      <div className='divContainer'>
      <img src={linux} alt='linux' width={40}></img> 
        <p style={styles.aboutText}>In Linux ubuntu(wsl),I have created a bash script file which create a folder for course that contains sub folders of project sample, agenda, and recordings. 
        Script file uses <a href='https://openweathermap.org' target='_blank' rel="noreferrer" style={{color:'#00FFFF'}}>Weather API</a> for showing the  weather in a purticular location and also moves image files  and recording mp4 from downloads to the purticular folder. Furthermore 
        creates a project sample and Agenda. </p>
            
       
      
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nyluhMGDEIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      </div>

      <div>   
        <img src={html} alt='html' width={40}></img>
        <img src={css} alt='css' width={40}></img> 
        <img src={js} alt='java' width={40}></img>

        <p style={styles.aboutText}>I have designed and created a website for an online burgershop using HTML5 and CSS Grid. 
                      Which uses javaScript for image animation, lightbox and toggling theme. View <a href='https://github.com/mariyasunny/cssgrid' target='_blank' rel="noreferrer" style={{color:'#00FFFF'}}>source code</a>
        </p>
       

        <iframe width="560" height="315" src="https://www.youtube.com/embed/nUcrMbYyOWk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
     </div>  

     <div className='divContainer'>
      <img src={php} alt='php' width={40}></img> 
      <img src={html} alt='html' width={40}></img>
      <img src={css} alt='css' width={40}></img> 
      <img src={mysql} alt='mysql' width={40}></img>


      
        <p style={styles.aboutText}>I have designed created a website for an Online Bakery shop using PHP,HTML,CSS,javaScript and MySQL. View <a href='https://heavenlytreats2023.000webhostapp.com/loginForm.php'target='_blank' rel="noreferrer" style={{color:'#00FFFF'}}>source code</a> </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SYLe8O5qnRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      </div> <br/> <br/>


     <div className='divContainer'>          
              <h3 size={20} style={{color:'#fff'}}>UI and Software Applications</h3>
              
              <ImageLightbox/>
            
      </div>
      </div>
     
    </section>
      );
      
    };
    
    export default Projects;
    