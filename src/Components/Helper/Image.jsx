import React from 'react';
import styles from './image.module.css';

const Image = ({ alt, ...props }) => {
  // carrega a imagem com um degrade cinza ate a imagem carregar completamente
  const [skeleton, setSkeleton] = React.useState(true);

  function Load({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={Load} className={styles.img} alt="" {...props} />
    </div>
  );
};

export default Image;
