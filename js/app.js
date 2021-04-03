const Dgram = require('dgram');
const Highcharts = require('highcharts');

/**
 * Main application.
 */
class App {

    constructor(){

        const chart1 = Highcharts.chart({
            chart: {
                type: 'line',
                renderTo: 'container1'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '力1',
                align: 'left'
            },

            yAxis: {
                title: {
                    text: 'Power'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9]
            }]
        });
        const chart2 = Highcharts.chart({
            chart: {
                type: 'line',
                renderTo: 'container2'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '力2',
                align: 'left'
            },

            yAxis: {
                title: {
                    text: 'Power'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9]
            }]
        });

        const chart3 = Highcharts.chart({
            chart: {
                type: 'line',
                renderTo: 'container3'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '力3',
                align: 'left'
            },

            yAxis: {
                title: {
                    text: 'Power'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9]
            }]
        });

        const chart4 = Highcharts.chart({
            chart: {
                type: 'line',
                renderTo: 'container4'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '力4',
                align: 'left'
            },

            yAxis: {
                title: {
                    text: 'Power'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9]
            }]
        });

        const chart5 = Highcharts.chart({
            chart: {
                type: 'line',
                renderTo: 'container5'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '力5',
                align: 'left'
            },

            yAxis: {
                title: {
                    text: 'Power'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9]
            }]
        });

        const chart6 = Highcharts.chart({
            chart: {
                type: 'line',
                renderTo: 'container6'
            },
            credits: {
                enabled: false
            },
            title: {
                text: '力6',
                align: 'left'
            },

            yAxis: {
                title: {
                    text: 'Power'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9]
            }]
        });

        document.getElementById('chart-panel').style.display = 'none';

        this.login_element = document.getElementById('login');

        this.start_element = document.getElementById('start');

        this.ng_element = document.getElementById('ng-button');
        this.ng_element.style.display = 'none';

        this.container1_ng_element = document.getElementById('container1-ng-button');
        this.container1_ng_element.style.display = 'none';

        this.container2_ng_element = document.getElementById('container2-ng-button');
        this.container2_ng_element.style.display = 'none';

        this.container3_ng_element = document.getElementById('container3-ng-button');
        this.container3_ng_element.style.display = 'none';

        this.container4_ng_element = document.getElementById('container4-ng-button');
        this.container4_ng_element.style.display = 'none';

        this.container5_ng_element = document.getElementById('container5-ng-button');
        this.container5_ng_element.style.display = 'none';

        this.container6_ng_element = document.getElementById('container6-ng-button');
        this.container6_ng_element.style.display = 'none';

        this.container1_confirm_element = document.getElementById('container1-confirm');
        this.container1_confirm_element.style.display = 'none';

        this.container2_confirm_element = document.getElementById('container2-confirm');
        this.container2_confirm_element.style.display = 'none';

        this.container3_confirm_element = document.getElementById('container3-confirm');
        this.container3_confirm_element.style.display = 'none';

        this.container4_confirm_element = document.getElementById('container4-confirm');
        this.container4_confirm_element.style.display = 'none';

        this.container5_confirm_element = document.getElementById('container5-confirm');
        this.container5_confirm_element.style.display = 'none';

        this.container6_confirm_element = document.getElementById('container6-confirm');
        this.container6_confirm_element.style.display = 'none';

        this.container1_edit_element = document.getElementById('container1-edit');

        this.container2_edit_element = document.getElementById('container2-edit');

        this.container3_edit_element = document.getElementById('container3-edit');

        this.container4_edit_element = document.getElementById('container4-edit');

        this.container5_edit_element = document.getElementById('container5-edit');

        this.container6_edit_element = document.getElementById('container6-edit');

        this.start_element.addEventListener('click', (event) => {
            event.preventDefault();
            let count = 0;
            const socket = Dgram.createSocket('udp4');
            const bytesToSend = [0xaa, 0x55, 0x03, 0x00, 0x01, 0x02];
            const message = new Uint8Array(bytesToSend);
            socket.on('listening', () => {
                const address = socket.address();
                console.log('UDP Server listening on ' + address.address + ":" + address.port);
            });
            socket.on('message', function(message, remote) {
                if (count === 0) {
                    window.alert('成功接收数据');
                    count += 1;
                }
            });
            socket.bind(33333, '127.0.0.1');
            socket.send(message, 44444, '127.0.0.1', function(err, bytes) {
                if (err) throw err;
                console.log('UDP message sent to ' + '127.0.0.1' + ':' + 33333);
            });
        })
        
        this.login_element.addEventListener('click', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const pwd = document.getElementById('pwd').value;
            if (name === 'liujiean' && pwd === 'liujiean') {
                document.getElementById('login-panel').remove();
                document.getElementById('chart-panel').style.display = 'block';
            } else {
                window.alert('用户名或者密码错误！');
            }
            
        });
    }
}