import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import Loader from "./Loader";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrices = [];
  const coinTimeStamp = [];

  if (!coinHistory) return <Loader />;

  for (const history of coinHistory?.data?.history) {
    coinPrices.push(history?.price);
    coinTimeStamp.push(
      new Date(history?.timestamp * 1000).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrices,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ChartTitle,
    Tooltip,
    Legend
  );

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-header">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={4} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>

      <Line datasetIdKey={coinName} data={data} options={options} />
    </>
  );
};
export default LineChart;
