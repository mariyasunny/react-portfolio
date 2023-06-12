import logo from '../assets/images/MS.png';

const styles = {
 
 logo: {
    width: '25%',
    position: 'absolute',
    top: '15px',
    left: '15px',
  }
};

const Logo = () => {
  return (
    <img src={logo} alt=""style={styles.logo}/>
  );
};

export default Logo;
