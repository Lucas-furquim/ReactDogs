import React from 'react';
import styles from './UserStatsGraps.module.css';
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from 'victory';

const UsetStatsGraphs = ({ data }) => {
  const [graps, setGraps] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: +item.acessos,
      };
    });

    setTotal(data.map(({ acessos }) => +acessos).reduce((a, b) => a + b, 0));
    setGraps(graphData);
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>

      <div className={styles.graphItem}>
        <VictoryPie
          data={graps}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          theme={VictoryTheme.clean}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graps}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UsetStatsGraphs;
