var data = {
      labels: ['Feb' , 'Mar' , 'Apr' , 'May' , 'June' , 'July' ,'Aug' , 'Sep'],
      datasets: [
      {
        fill : false,
        backgroundColor : 'rgba(235,234,255,255)',
        borderColor: 'rgba(153,0,255,255)',
        lineTension : 0.1,
        pointBorderWidth : 1,
        data: [35, 28 , 20 , 30 , 41 , 78 ,60 ,90 ],
      },

      {
        fill : true,
        lineTension : 0.1,
        backgroundColor : 'rgba(235,234,255,255)',
        borderColor: 'rgba(200,192,255,255)',
        pointBorderWidth : 1,
        data: [30, 24 , 15 , 25 , 36 , 73 , 55 , 85],
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
            },
        },
                maintainAspectRatio : false,
      }
    };

    // render init block
    var myChart = new Chart(
      document.getElementById('myChart4'),
      config
    );