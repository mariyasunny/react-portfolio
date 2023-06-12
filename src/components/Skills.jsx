import Skill from './Skilled';

const styles = {
  skillsContainer:{
    width:'100%',
    background:'rgba(0,0,0,0.6)',
  },
  container: {
    
    borderBottom: '1px solid #333',
    overflowY:'auto',
    backgroundImage:'url("https://images.pexels.com/photos/16155281/pexels-photo-16155281.jpeg?auto=compress&cs=tinysrgb&w=600")',
    textAlign: 'center',
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
    skillsHeading: {
    fontSize: '2em',
    fontFamily: 'Instrument Serif',
    color:'yellow',
    width:'100%',
  },
  
};
  
  const Skills = () => {
  
    return (
     
      <section id="skills" style={styles.container}>
         <div style={styles.skillsContainer} >
          <h1 style={styles.skillsHeading}>SKILLS</h1>
          <Skill years="5" source="devicon-html5-plain colored"/>
          <Skill years="2" source="devicon-css3-plain colored"/>
          <Skill years="1" source="devicon-javascript-plain colored"/>
          <Skill years="2" source="devicon-java-plain colored" />
          <Skill years="1" source="devicon-csharp-plain colored"/>
          <Skill years="2" source="devicon-php-plain colored"/>
          <Skill years="3" source="devicon-mysql-plain colored"/>         
          <Skill years="1" source="devicon-react-original colored"/>
          <Skill years="1" source="devicon-linux-plain colored"/>
          <Skill years="1" source="devicon-c-line colored"/>
          <Skill years="1" source="devicon-illustrator-line colored"/>
          <Skill years="1" source="devicon-photoshop-line colored"/>
       </div>
      </section>
  
    );
  };
  
  export default Skills;