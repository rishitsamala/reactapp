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

export default function AllCharts() {
  return (
    <div className={styles.right}>
      <Line
        data={{
          datasets: [{
            label: "BTC",
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            data: []
          }, {
            label: "ETH",
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            data: []
          }, {
            label: "LTC",
            backgroundColor: 'rgb(255, 205, 86, 0.5)',
            borderColor: 'rgb(255, 205, 86)',
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
                refresh: 3000,
                delay: 6000,
                onRefresh: chart => {
                  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd")
                    .then(response => response.json())
                    .then(data => {
                      chart.data.datasets[0].data.push({
                        x: Date.now(),
                        y: data.bitcoin.usd
                      });
                      chart.data.datasets[1].data.push({
                        x: Date.now(),
                        y: data.ethereum.usd
                      });
                      chart.data.datasets[2].data.push({
                        x: Date.now(),
                        y: data.litecoin.usd
                      });
                      // update chart datasets keeping the current animation
                      chart.update('quiet');
                    });
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
              text: 'Live Data via API Call',
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
  );
}