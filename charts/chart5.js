
    var startingday = luxon.DateTime.fromRFC2822('01 May 2021 00:00 GMT');
    var date2 = luxon.DateTime.fromRFC2822('02 May 2021 00:00 GMT')
    var date3 = luxon.DateTime.fromRFC2822('05 May 2021 00:00 GMT')
    var date4 = luxon.DateTime.fromRFC2822('06 May 2021 00:00 GMT')
    var date5 = luxon.DateTime.fromRFC2822('07 May 2021 00:00 GMT')
    var date6 = luxon.DateTime.fromRFC2822('08 May 2021 00:00 GMT')
    var date7 = luxon.DateTime.fromRFC2822('09 May 2021 00:00 GMT')
    var date8 = luxon.DateTime.fromRFC2822('10 May 2021 00:00 GMT')
    var date9 = luxon.DateTime.fromRFC2822('11 May 2021 00:00 GMT')
    var date10 = luxon.DateTime.fromRFC2822('12 May 2021 00:00 GMT')
    var date11= luxon.DateTime.fromRFC2822('13 May 2021 00:00 GMT')
    var date12 = luxon.DateTime.fromRFC2822('14 May 2021 00:00 GMT')
    var date13= luxon.DateTime.fromRFC2822('15 May 2021 00:00 GMT')
    var date14 = luxon.DateTime.fromRFC2822('16 May 2021 00:00 GMT')
    var date15 = luxon.DateTime.fromRFC2822('17 May 2021 00:00 GMT')
    var date16= luxon.DateTime.fromRFC2822('18 May 2021 00:00 GMT')
    var date17 = luxon.DateTime.fromRFC2822('19 May 2021 00:00 GMT')
    var date18= luxon.DateTime.fromRFC2822('20 May 2021 00:00 GMT')
    var date19 = luxon.DateTime.fromRFC2822('21 May 2021 00:00 GMT')
    var date20 = luxon.DateTime.fromRFC2822('22 May 2021 00:00 GMT')
    var date21= luxon.DateTime.fromRFC2822('23 May 2021 00:00 GMT')
    var date22 = luxon.DateTime.fromRFC2822('24 May 2021 00:00 GMT')
    var date23 = luxon.DateTime.fromRFC2822('25 May 2021 00:00 GMT')
    var date24 = luxon.DateTime.fromRFC2822('26 May 2021 00:00 GMT')
    
    var data = {
      datasets: [{
        data: [
            {   fill : true,
                backgroundColor : 'rgba(153,0,255,255)',
                x : startingday.valueOf(),
                o : 1,
                h : 1.50,
                l : 0.75,
                c : 1.25,
                color : '#666'
            },
            {
                x : date2.valueOf(),
                o : 1.25,
                h : 1.50,
                l : 0.50,
                c : 0.90,
            },
            {
                x : date3.valueOf(),
                o : 1.00,
                h : 1.20,
                l : 0.30,
                c : 1.10,
            }
            ,
            {
                x : date4.valueOf(),
                o : 0.80,
                h : 1.00,
                l : 0.10,
                c : 1.20,
            }
            ,
            {
                x : date5.valueOf(),
                o : 1.50,
                h : 1.30,
                l : 0.70,
                c : 1.60,
            }
            ,
            {
                x : date6.valueOf(),
                o : 1.60,
                h : 1.80,
                l : 1.00,
                c : 0.80,
            }
            ,
            {
                x : date7.valueOf(),
                o : 1.22,
                h : 1.50,
                l : 0.20,
                c : 1.30,
            }
            ,
            {
                x : date8.valueOf(),
                o : 0.70,
                h : 1.06,
                l : 0.10,
                c : 1.19,
            }
            ,

            {
                x : date9.valueOf(),
                o : 1.30,
                h : 1.50,
                l : 0.20,
                c : 1.60,
            }
            ,
            
            {
                x : date10.valueOf(),
                o : 1.20,
                h : 1.23,
                l : 0.40,
                c : 1.40,
            }
            ,
            {
                x : date11.valueOf(),
                o : 1.10,
                h : 1.50,
                l : 0.50,
                c : 0.90,
            }
            ,
            {
                x : date12.valueOf(),
                o : 1.10,
                h : 1.12,
                l : 0.11,
                c : 1.22,
            }
            ,
            {
                x : date13.valueOf(),
                o : 1.30,
                h : 1.79,
                l : 0.68,
                c : 1.33,
            }
            ,

            {
                x : date14.valueOf(),
                o : 1.00,
                h : 1.10,
                l : 0.11,
                c : 1.17,
            }
            ,
            {
                x : date15.valueOf(),
                o : 1.20,
                h : 1.30,
                l : 0.22,
                c : 1.00,
            }
            ,
            {
                x : date16.valueOf(),
                o : 1.01,
                h : 1.20,
                l : 0.12,
                c : 1.22,
            }
            ,
            {
                x : date17.valueOf(),
                o : 1.30,
                h : 1.34,
                l : 0.07,
                c : 1.10,
            }
            ,

            {
                x : date18.valueOf(),
                o : 0.70,
                h : 1.10,
                l : 0.70,
                c : 1.10,
            }
            ,
            {
                x : date19.valueOf(),
                o : 1.03,
                h : 1.10,
                l : 0.50,
                c : 1.00,
            }
            ,
            {
                x : date20.valueOf(),
                o : 2.00,
                h : 2.20,
                l : 1.15,
                c : 1.20,
            }
            ,
            {
                x : date21.valueOf(),
                o : 1.00,
                h : 1.11,
                l : 0.40,
                c : 1.04,
            }
            ,
            {
                x : date22.valueOf(),
                o : 1.22,
                h : 1.40,
                l : 0.90,
                c : 0.50,
            }
            ,

            {
                x : date23.valueOf(),
                o : 0.99,
                h : 1.11,
                l : 0.20,
                c : 1.05,
            }
            ,
            {
                x : date24.valueOf(),
                o : 1.25,
                h : 1.70,
                l : 0.90,
                c : 1.40,
            }
            ,
            
        
        ],
      },
    ]
    };

    var config = {
      type: 'candlestick',
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

    
    var myChart = new Chart(
      document.getElementById('myChart5'),
      config
    );
 