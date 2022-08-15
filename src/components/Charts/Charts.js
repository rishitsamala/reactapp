import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-luxon';
import StreamingPlugin from 'chartjs-plugin-streaming';
import styles from './Charts.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  StreamingPlugin
);

export default function Charts(props) {

  const cryptos = [
    { id: 1, title: "BTC", url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd" },
    { id: 2, title: "ETH", url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd" },
    { id: 3, title: "LTC", url: "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd" }
  ];

  return (
    cryptos.filter(crypto => crypto.id === props.clickedId).map(crypto => (
      <div className={styles.left} key={crypto.id}>
        <Line
          data={{
            datasets: [{
              label: crypto.title,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderColor: 'rgb(0, 0, 0)',
              cubicInterpolationMode: 'monotone',
              fill: true,
              data: []
            }]
          }}
          options={{
            scales: {
              x: {
                type: 'realtime',
                realtime: {
                  duration: 20000,
                  refresh: 1000,
                  delay: 2000,
                  onRefresh: chart => {
                    // fetch(crypto.url)
                    // .then(response => response.json())
                    // .then(data => {
                    if (crypto.id === 1) {
                      chart.data.datasets.forEach(dataset => {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.floor(Math.random() * 1000) + 22000
                        });
                      });
                    } else if (crypto.id === 2) {
                      chart.data.datasets.forEach(dataset => {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.floor(Math.random() * 100) + 1600
                        });
                      });
                    } else if (crypto.id === 3) {
                      chart.data.datasets.forEach(dataset => {
                        dataset.data.push({
                          x: Date.now(),
                          y: Math.floor(Math.random() * 10) + 50
                        });
                      });
                    }
                    // update chart datasets keeping the current animation
                    chart.update('quiet');
                    // });
                  }
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'USD',
                  font: {
                    weight: 'bold'
                  },
                  color: 'black'
                }
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Mock Up Data',
                position: 'bottom',
                font: {
                  weight: 'bold'
                },
                color: 'black'
              },
              legend: {
                display: true,
                position: 'top',
                labels: {
                  font: {
                    weight: 'bold'
                  },
                  color: 'black',
                }
              }
            }
          }}
        />
      </div>
    ))
  );
}