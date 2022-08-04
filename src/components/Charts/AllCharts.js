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

export default function AllCharts() {
  return (
    <div style={{ width: '90%', border: '2px groove black', margin: '5px auto', textAlign: 'center' }}>
      <Line
        data={{
          datasets: [{
            label: "BTC",
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            data: [0]
          }, {
            label: "ETH",
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            data: [0]
          }, {
            label: "LTC",
            backgroundColor: 'rgb(255, 205, 86, 0.5)',
            borderColor: 'rgb(255, 205, 86)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            data: [0]
          }]
        }}
        options={{
          scales: {
            x: {
              type: 'realtime',
              realtime: {
                duration: 60000,
                refresh: 5000,
                delay: 10000,
                onRefresh: chart => {
                  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
                    .then(response => response.json())
                    .then(data => {
                      chart.data.datasets[0].data.push({
                        x: Date.now(),
                        y: data.bitcoin.usd
                      });
                    });
                  fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
                    .then(response => response.json())
                    .then(data => {
                      chart.data.datasets[1].data.push({
                        x: Date.now(),
                        y: data.ethereum.usd
                      });
                    });
                  fetch("https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd")
                    .then(response => response.json())
                    .then(data => {
                      chart.data.datasets[2].data.push({
                        x: Date.now(),
                        y: data.litecoin.usd
                      });
                    });
                  // update chart datasets keeping the current animation
                  chart.update('quiet');
                }
              }
            }
          }
        }}
      />
    </div>
  );
}