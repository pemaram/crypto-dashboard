var data = {
      labels: ['Feb' , 'Mar' , 'Apr' , 'May' , 'June' , 'July' ,'Aug' , 'Sep'],
      datasets: [
      {
        fill : false,
        backgroundColor : 'rgba(235,234,255,255)',
        borderColor: 'rgba(153,0,255,255)',
        lineTension : 0.1,
        pointBorderWidth : 1,
        data: [0, 79 , 55 , 67 , 56 , 55 , 40 , 33],
      },

      {
        fill : true,
        lineTension : 0.1,
        backgroundColor : 'rgba(235,234,255,255)',
        borderColor: 'rgba(200,192,255,255)',
        pointBorderWidth : 1,
        data: [0, 68 , 50 , 62 , 50 , 48 , 38 , 28],
      },
    ]
    };

    // config 
    var config = {
      type: 'line',
      data,
      options: {
        plugins : {
                    legend : {
                        display : false,
                    }
                },
        scales : {
            x : {
                grid : {
                    display : false
                }
            },
            y : {
                    grid : {
                        display : false,

                    },
                    ticks : {
                        display : false
                    },
            }
        },
                maintainAspectRatio : false,
      }
    };

    // render init block
    var myChart = new Chart(
      document.getElementById('myChart2'),
      config
    );