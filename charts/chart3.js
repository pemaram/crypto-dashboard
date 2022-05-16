  var data = {
      labels: ['Feb' , 'Mar' , 'Apr' , 'May' , 'June' , 'July' ,'Aug' , 'Sep'],
      datasets: [
      {
        fill : false,
        backgroundColor : 'rgba(235,234,255,255)',
        borderColor: 'rgba(153,0,255,255)',
        lineTension : 0.1,
        pointBorderWidth : 1,
        data: [35, 28, 44 , 58 , 63 , 58 , 50 , 33 ],
      },

      {
        fill : true,
        lineTension : 0.1,
        backgroundColor : 'rgba(235,234,255,255)',
        borderColor: 'rgba(200,192,255,255)',
        pointBorderWidth : 1,
        data: [30, 24 , 39 , 52 , 59 , 53 , 45 , 30],
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
      document.getElementById('myChart3'),
      config
    );