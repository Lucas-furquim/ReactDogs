import React from 'react';
import useFetch from '../../Hooks/useFetch';
import styles from './FeedModal.module.css';
import { PHOTO_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function outsideClick(e) {
    const { target } = e;
    const { currentTarget } = e;
    if (target === currentTarget) return setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={outsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
