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
    { id: 1, title: "BTC Price", url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd" },
    { id: 2, title: "ETH Price", url: "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd" },
    { id: 3, title: "LTC Price", url: "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd" }
  ];

  return (
    <div>
      {
        cryptos.filter(crypto => crypto.id === props.clickedId).map(crypto => (

          <div style={{ width: '55%', border: '2px groove black', margin: '20px auto', textAlign: 'center' }}>
            <Line key={crypto.id}
              data={{
                datasets: [{
                  label: crypto.title,
                  backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  borderColor: 'rgb(54, 162, 235)',
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
                      duration: 60000,
                      refresh: 5000,
                      delay: 5000,
                      onRefresh: chart => {
                        fetch(crypto.url)
                          .then(response => response.json())
                          .then(data => {
                            if (crypto.id === 1) {
                              chart.data.datasets.forEach(dataset => {
                                dataset.data.push({
                                  x: Date.now(),
                                  y: data.bitcoin.usd
                                });
                              });
                            } else if (crypto.id === 2) {
                              chart.data.datasets.forEach(dataset => {
                                dataset.data.push({
                                  x: Date.now(),
                                  y: data.ethereum.usd
                                });
                              });
                            } else if (crypto.id === 3) {
                              chart.data.datasets.forEach(dataset => {
                                dataset.data.push({
                                  x: Date.now(),
                                  y: data.litecoin.usd
                                });
                              });
                            }

                            // update chart datasets keeping the current animation
                            chart.update('quiet');
                          });
                      }
                    }
                  }
                }
              }}
            />
          </div>
        ))
      }
    </div>
  );
}