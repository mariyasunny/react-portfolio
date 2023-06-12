import { FaLinkedin, FaMailBulk , FaGithub} from 'react-icons/fa';



const Social = ({style}) => {
  return (
    <div style={style}> 
              <a href="google.gmail.com" target='_blank' rel='noreferrer'><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
              <a href="mariya-sunny1993" target='_blank' rel='noreferrer'><FaLinkedin size={20} style={{color:'#fff', marginRight:'2rem'}}/> </a>
              <a href="https://github.com/mariyasunny" target='_blank' rel='noreferrer' ><FaGithub size={20} style={{color:'#fff', marginRight:'2rem'}}/> </a>
             
          
    </div>
    
  );
};

export default Social;
