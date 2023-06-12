
const styles = {
   container: { 
       width: '100%',
       minHeight: '450px',
       padding: '50px 100px',
       borderBottom: '1px solid #000',
       fontSize: '2em',
       overflow: 'hidden',
       background:'rgba(0,0,0,0.5)',
       zIndex:'-1'
   },
   watermark: {
       position: 'absolute',
       zIndex: '-1',
       color: '#ece',
       opacity: '0.2',
       fontSize: '1080%',
       fontWeight: '700',
   },
   aboutText: {
       margin: '0 0 20px 0',
       lineHeight: '1.5em',
       fontSize: '.6em',
       fontFamily: 'Instrument Serif',
       color:'#fff',
       textAlign:'center',
       zIndex:'3'
   },
};

const About = () => {
 return (
   <section style={styles.container} id='about'>
       <h1 style={styles.watermark}>ABOUT</h1>
            <p style={styles.aboutText}>Hello, Welcome to my site! I am a self motivated, and enthusiastic person who work hard for achieving the career goals and happy to learn new skills .
                I started of my career as Junior Web Developer working for company S J Technologies for 2 years after qualification in Bachelors in Information Technology .
                Being Customer Service Supervisor in Pizza hut, Hinton, Alberta, I learned about the importance of being punctual and providing great customer service. 
                Then I moved on to work as IT support analyst in SFS Ltd. for 3 years. There I quickly learned new skills and applied them to daily tasks for improving efficiency and productivity.
            </p>

            <p style={styles.aboutText}>
                Currently I am doing my studies in<a href='https://www.trios.com/programs-courses/technology/applications-developer/' style={{color:'#00FFFF'}}> Application Development (Mobile Specialist) </a>from triOS College,
                 London, Ontario. During this time I have learned the <a href='#skills' style={{color:'#00FFFF'}}>below</a> technologies. In addition to that I am proficient in Object oriented programming and Window applications 
                 using Window forms, WPF and UWP. 
            </p>

            <p style={styles.aboutText}>
                Outside of my education I am seeking opportunities where I can prove my skills and abilities. Open to work as web developer. Kindly looking forward to new openings!
            </p> 
       
   </section>
 );
};

export default About;