import Logo from '../hero_components/Logo';
import Social from '../hero_components/Social';
import myBackgroundVideo from '../assets/videos/background.mp4';


const styles = {
  heroVid: {
    position: 'absolute',
    zIndex: '-1',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '100%',
    minHeight: '100%',
   
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    overflow: 'hidden',
    position: 'relative',
    padding: '0 50px',
    borderBottom: '1px solid #000',
  
  },
  title: {
    position:'relative',
    top:'50',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    padding:'0 0 1.5rem 1rem',
    fontFamily:'Instrument Serif'
  },
  title_color: {
    color : '#B78700',
    fontSize:'1.5em',
    fontFamily: "'Bruno Ace SC', cursive",
  },
 

};
const heroSocial = {
  
    position:'absolute',
    top: '25px',
    right:'25px'

};
const content = {
  position:'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign:'center'
}


const Hero = () => {

  return (
    <header style={styles.container}>
      
      <Logo/>
      <Social style={heroSocial}/>  
      
      <div>
        <video style={styles.heroVid} autoPlay muted loop id="video-background">
          <source src={myBackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div style={content}>
          <h1 style={styles.title}> <span style={styles.title_color}>Mariya Sunny</span></h1>
          <p style={styles.title}>Student,Web Developer</p>
          <p style={styles.title}>Take a look over my Work please...</p>
    
          <div>
            <a href='#projects' className='btn'>Project</a>
            <a href='#contact' className='btn btn-light'>Contact</a>
          </div>
      </div>
     
    </header>
  );
};

export default Hero;
