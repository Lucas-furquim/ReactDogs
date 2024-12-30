import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GETID } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GETID(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} description="Foto do meu pet favorito" />
        {/* single é usado para mostrar a foto unica quando o usuario clia no author e é mostrado a foto unica, single é usado para dar estilos a essa foto unica, ele é repassado para quase todos os photo, já o data é para passar as informações da foto,comentarios e vizu */}
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
