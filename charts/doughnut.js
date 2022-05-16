 var data = {
            labels : ['Bitcoin' , 'Ethereum' ,'Monero'],
            datasets : [{
                label : 'crypto',
                data : [11567, 5583 , 8050 ],
                backgroundColor : [
                    'rgba(153,0,255,255)',
                    'rgba(200,192,255,255)',
                    'rgba(243,241,255,255)',
                ],
            }]
        };


        var config = {
            type : 'doughnut',
            data : data,
            options : {
                plugins : {
                    legend : {
                        display : false,
                    }
                },
                maintainAspectRatio : false,
                cutout :30
            }
        };

        var myChart = new Chart(
        document.getElementById('myChart1'),
        config
    );