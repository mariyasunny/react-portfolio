
const styles = {
    lang: {
        color: '#555',
        fontSize: '6.7vw',
        margin: '50px 2.5%',
        display: 'inline',
    },
};

const Licon = ({daSource}) => {
  return (
    <div style={styles.lang} className={daSource}></div>
  );
};

export default Licon;