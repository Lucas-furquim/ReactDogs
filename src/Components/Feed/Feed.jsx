import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import PropTypes from 'prop-types';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [inifinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;

    // função para fazer o scroll infinito
    function infiniteScroll() {
      if (inifinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [inifinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {/* envia as informações para o feedphotos para puxar as fotos de acordo com as informações passadas */}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          page={page}
          key={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

// função talvez seja defazada no futuro, usada para definir condições que ira ser usada no site, geralmente informações puxadas da API
// Feed.defaultProps = {
//   user: 0,
// };

// Feed.propTypes = {
//   user: PropTypes.oneOfType([
//     PropTypes.string.isRequired,
//     PropTypes.number.isRequired,
//   ]),
// };

export default Feed;
