
const styles = {
    container: {
      width: '20%',
      maxWidth: '120px',
      minWidth: '160px',
      height: '150px',
      padding: '20px 10px',
      border: '1px solid #333',
      margin: '12px 1%',
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '3px 3px 5px #fdd',
      color: '#333',
      display: 'inline-block',
    },

    
    icon: {
        fontSize: '4rem',       
    },

    heading: {
        background: 'lavender',
        marginTop: '10px',
        padding: '5px 15px',
        borderRadius: '16px',
        fontSize: '.9em',
        width: '100%',
    },
  };
 
  
  const Skill = ({source, years}) => {
    return (
      <div style={styles.container}>
        <i style={styles.icon} className={source}></i>
        <h3 style={styles.heading}>{years} year(s) XP</h3>
      </div>
    );
  };
  
  export default Skill;