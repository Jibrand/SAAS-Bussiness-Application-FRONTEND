import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Grid,
  CardContent,
  CardMedia,
  Card,
  CardActions,
} from "@material-ui/core";
import useStyles from "../Components/Home/Home";
import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { Api } from "../Backened/Api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
 
  const [data, setData] = useState([]);
  const classes=useStyles()
  const getProducts = async () => {
    let result = await fetch(`${Api}/change`);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Whom'st let the dogs out",
        data: [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.4)",
      },
    ],
  });
 
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Whom'st let the dogs out",
      },
    },
  });
 
  useEffect(() => {
    const labels = data.map((post) => post.textInput);
    const initialData = Array(data.length).fill(0);
    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Whom'st let the dogs out",
          data: initialData,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
      ],
    });
  }, [data]);

  const handleButtonClick = (post, index) => {
    setChartData((prevState) => {
      const newData = [...prevState.datasets[0].data];
      newData[index] += 1;
      return {
        ...prevState,
        datasets: [
          {
            ...prevState.datasets[0],
            data: newData,
          },
        ],
      };
    });
  };

  return (
    <div>
      <div>
        <Container maxWidth="md" className={classes.cardgrid}>
          <Grid container spacing={4}>
            {data.map((post, index) => (
              <Grid item xs={12} sm={6} md={3} key={post.id}>
                <Card className={classes.card} onClick={() => handleButtonClick(post, index)}>
                  <CardMedia
                    className={classes.media}
                    image={  `${Api}/${post?.image}`}
                    title={post.textInput}
                    img src={  `${Api}/${post?.image}`} style={{ height: 150, width: 150 }}  
                  />
                  <CardContent className={classes.cardcontent}>
                    <Typography variant="body2" color="text.secondary">
                      {post.textInput}
                      <span className={classes.span}></span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </div>
      <br />

      <div style={{ position: "relative", margin: "auto", width: "60vw" }}>
        <h2>Chart</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default App;
