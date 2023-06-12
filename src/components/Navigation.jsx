
import styled from 'styled-components';

const StyledAnchor = styled.a`
    text-decoration: none;  
    font-size: 1.7em;
    font-weight: 700;
    margin: 0 13px;
    color:#DDA0DD;
    padding:10px 40px;
    &:hover {
        color: #4a90e2;
    }
`;
const styles = {
 
 nav: {
  
    width: '100%',
    height:'50px',
    textAlign:'center',
    paddingTop:'8px',
    background:'#333',
    borderBottom: '1px solid #000',
    fontFamily:'Instrument Serif',
    position: 'relative',
    top:'0'
  
   
    },


};


const Navigation = () => {

   return (
    <div style={styles.container}>
    <nav style={styles.nav}>
      
        <StyledAnchor href="#about" title="About">About</StyledAnchor>
        <StyledAnchor href="#skills" title="Skills">Skills</StyledAnchor>
        <StyledAnchor href="#projects" title="Projects">Projects</StyledAnchor>
        <StyledAnchor href="#contact" title="Contact">Contact</StyledAnchor>
    
    </nav>
    
    </div>
  );

};

export default Navigation;
