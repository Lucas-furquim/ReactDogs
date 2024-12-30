import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../Api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
const UserStatsGraps = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head
          title="Estatisticas"
          description="uma pagina para verificar sobre suas postagem e views"
        />
        <UserStatsGraps data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
