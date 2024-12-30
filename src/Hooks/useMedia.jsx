import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function chageMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    chageMatch();
    window.addEventListener('resize', chageMatch);
    return () => {
      window.removeEventListener('resize', chageMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
