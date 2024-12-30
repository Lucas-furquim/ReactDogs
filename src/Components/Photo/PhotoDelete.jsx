import React from 'react';
import styles from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../Api';
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function deletar() {
    const confirm = window.confirm('Tem certeza que deseja deletar esta foto?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.deletar}>
          Deletar
        </button>
      ) : (
        <button className={styles.deletar} onClick={deletar}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
