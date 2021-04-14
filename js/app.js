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
                text: 'FX',
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
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
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
                text: 'FY',
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
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
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
                text: 'FZ',
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
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
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
                text: 'MX',
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
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
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
                text: 'MY',
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
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
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
                text: 'MZ',
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
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
            }]
        });

        document.getElementById('chart-panel').style.display = 'none';

        this.login_element = document.getElementById('login');

        this.start_element = document.getElementById('start');

        this.ng_element = document.getElementById('ng-button');
        this.ng_element.style.display = 'none';
        this.ok_element = document.getElementById('ok-button');
        this.ok_element.style.display = 'block';

        this.container1_ng_element = document.getElementById('container1-ng-button');
        this.container1_ng_element.style.display = 'none';
        this.container1_ok_element = document.getElementById('container1-ok-button');
        this.container1_ok_element.style.display = 'block';

        this.container2_ng_element = document.getElementById('container2-ng-button');
        this.container2_ng_element.style.display = 'none';
        this.container2_ok_element = document.getElementById('container2-ok-button');
        this.container2_ok_element.style.display = 'block';

        this.container3_ng_element = document.getElementById('container3-ng-button');
        this.container3_ng_element.style.display = 'none';
        this.container3_ok_element = document.getElementById('container3-ok-button');
        this.container3_ok_element.style.display = 'block';

        this.container4_ng_element = document.getElementById('container4-ng-button');
        this.container4_ng_element.style.display = 'none';
        this.container4_ok_element = document.getElementById('container4-ok-button');
        this.container4_ok_element.style.display = 'block';

        this.container5_ng_element = document.getElementById('container5-ng-button');
        this.container5_ng_element.style.display = 'none';
        this.container5_ok_element = document.getElementById('container5-ok-button');
        this.container5_ok_element.style.display = 'block';

        this.container6_ng_element = document.getElementById('container6-ng-button');
        this.container6_ng_element.style.display = 'none';
        this.container6_ok_element = document.getElementById('container6-ok-button');
        this.container6_ok_element.style.display = 'block';

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

        this.container1_edit_element.addEventListener('click', () => {
            this.container1_confirm_element.style.display = 'block';
            this.container1_edit_element.style.display = 'none';
            this.container1_high_element.readOnly = false;
            this.container1_low_element.readOnly = false;
        });
        this.container1_confirm_element.addEventListener('click', () => {
            this.container1_confirm_element.style.display = 'none';
            this.container1_edit_element.style.display = 'block';
            this.container1_high_element.readOnly = true;
            this.container1_low_element.readOnly = true;
        });

        this.container2_edit_element.addEventListener('click', () => {
            this.container2_confirm_element.style.display = 'block';
            this.container2_edit_element.style.display = 'none';
            this.container2_high_element.readOnly = false;
            this.container2_low_element.readOnly = false;
        });
        this.container2_confirm_element.addEventListener('click', () => {
            this.container2_confirm_element.style.display = 'none';
            this.container2_edit_element.style.display = 'block';
            this.container2_high_element.readOnly = true;
            this.container2_low_element.readOnly = true;
        });

        this.container3_edit_element.addEventListener('click', () => {
            this.container3_confirm_element.style.display = 'block';
            this.container3_edit_element.style.display = 'none';
            this.container3_high_element.readOnly = false;
            this.container3_low_element.readOnly = false;
        });
        this.container3_confirm_element.addEventListener('click', () => {
            this.container3_confirm_element.style.display = 'none';
            this.container3_edit_element.style.display = 'block';
            this.container3_high_element.readOnly = true;
            this.container3_low_element.readOnly = true;
        });

        this.container4_edit_element.addEventListener('click', () => {
            this.container4_confirm_element.style.display = 'block';
            this.container4_edit_element.style.display = 'none';
            this.container4_high_element.readOnly = false;
            this.container4_low_element.readOnly = false;
        });
        this.container4_confirm_element.addEventListener('click', () => {
            this.container4_confirm_element.style.display = 'none';
            this.container4_edit_element.style.display = 'block';
            this.container4_high_element.readOnly = true;
            this.container4_low_element.readOnly = true;
        });

        this.container5_edit_element.addEventListener('click', () => {
            this.container5_confirm_element.style.display = 'block';
            this.container5_edit_element.style.display = 'none';
            this.container5_high_element.readOnly = false;
            this.container5_low_element.readOnly = false;
        });
        this.container5_confirm_element.addEventListener('click', () => {
            this.container5_confirm_element.style.display = 'none';
            this.container5_edit_element.style.display = 'block';
            this.container5_high_element.readOnly = true;
            this.container5_low_element.readOnly = true;
        });

        this.container6_edit_element.addEventListener('click', () => {
            this.container6_confirm_element.style.display = 'block';
            this.container6_edit_element.style.display = 'none';
            this.container6_high_element.readOnly = false;
            this.container6_low_element.readOnly = false;
        });
        this.container6_confirm_element.addEventListener('click', () => {
            this.container6_confirm_element.style.display = 'none';
            this.container6_edit_element.style.display = 'block';
            this.container6_high_element.readOnly = true;
            this.container6_low_element.readOnly = true;
        });

        this.container1_data_element = document.getElementById('container1-data');
        this.container2_data_element = document.getElementById('container2-data');
        this.container3_data_element = document.getElementById('container3-data');
        this.container4_data_element = document.getElementById('container4-data');
        this.container5_data_element = document.getElementById('container5-data');
        this.container6_data_element = document.getElementById('container6-data');

        this.container1_high_element = document.getElementById('container1-high');
        this.container1_low_element = document.getElementById('container1-low');
        this.container2_high_element = document.getElementById('container2-high');
        this.container2_low_element = document.getElementById('container2-low');
        this.container3_high_element = document.getElementById('container3-high');
        this.container3_low_element = document.getElementById('container3-low');
        this.container4_high_element = document.getElementById('container4-high');
        this.container4_low_element = document.getElementById('container4-low');
        this.container5_high_element = document.getElementById('container5-high');
        this.container5_low_element = document.getElementById('container5-low');
        this.container6_high_element = document.getElementById('container6-high');
        this.container6_low_element = document.getElementById('container6-low');

        this.container1_high_element.value = 0;
        this.container1_low_element.value = 0;
        this.container2_high_element.value = 0;
        this.container2_low_element.value = 0;
        this.container3_high_element.value = 0;
        this.container3_low_element.value = 0;
        this.container4_high_element.value = 0;
        this.container4_low_element.value = 0;
        this.container5_high_element.value = 0;
        this.container5_low_element.value = 0;
        this.container6_high_element.value = 0;
        this.container6_low_element.value = 0;

        this.container1_high_element.readOnly = true;
        this.container1_low_element.readOnly  = true;
        this.container2_high_element.readOnly = true;
        this.container2_low_element.readOnly  = true;
        this.container3_high_element.readOnly = true;
        this.container3_low_element.readOnly  = true;
        this.container4_high_element.readOnly = true;
        this.container4_low_element.readOnly  = true;
        this.container5_high_element.readOnly = true;
        this.container5_low_element.readOnly  = true;
        this.container6_high_element.readOnly = true;
        this.container6_low_element.readOnly  = true;

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
            socket.on('message', (message, remote) => {
                if (count % 100 === 0) {
                    count += 1;
                    let arr = Uint8Array.from(message);

                    let container1_data = arr.slice(8, 12).reverse().buffer;
                    let dataView = new DataView(container1_data);
                    container1_data = dataView.getFloat32();
                    this.container1_data_element.value = container1_data;

                    const high1 = this.container1_high_element.value;
                    const low1 = this.container1_low_element.value;
                    if (container1_data > high1 || container1_data < low1) {
                        this.ok_element.style.display = "none";
                        this.ng_element.style.display = "display";
                        this.container1_ok_element.style.display = "none";
                        this.container1_ng_element.style.display = "block";
                    }

                    let container2_data = arr.slice(12, 16).reverse().buffer;
                    dataView = new DataView(container2_data);
                    container2_data = dataView.getFloat32();
                    this.container2_data_element.value = container2_data;

                    const high2 = this.container2_high_element.value;
                    const low2 = this.container2_low_element.value;
                    if (container2_data > high2 || container2_data < low2) {
                        this.ok_element.style.display = "none";
                        this.ng_element.style.display = "display";
                        this.container2_ok_element.style.display = "none";
                        this.container2_ng_element.style.display = "block";
                    }

                    let container3_data = arr.slice(16, 20).reverse().buffer;
                    dataView = new DataView(container3_data);
                    container3_data = dataView.getFloat32();
                    this.container3_data_element.value = container3_data;

                    const high3 = this.container3_high_element.value;
                    const low3 = this.container3_low_element.value;
                    if (container3_data > high3 || container3_data < low3) {
                        this.ok_element.style.display = "none";
                        this.ng_element.style.display = "display";
                        this.container3_ok_element.style.display = "none";
                        this.container3_ng_element.style.display = "block";
                    }

                    let container4_data = arr.slice(20, 24).reverse().buffer;
                    dataView = new DataView(container4_data);
                    container4_data = dataView.getFloat32();
                    this.container4_data_element.value = container4_data;

                    const high4 = this.container4_high_element.value;
                    const low4 = this.container4_low_element.value;
                    if (container4_data > high4 || container4_data < low4) {
                        this.ok_element.style.display = "none";
                        this.ng_element.style.display = "display";
                        this.container4_ok_element.style.display = "none";
                        this.container4_ng_element.style.display = "block";
                    }

                    let container5_data = arr.slice(24, 28).reverse().buffer;
                    dataView = new DataView(container5_data);
                    container5_data = dataView.getFloat32();
                    this.container5_data_element.value = container5_data;

                    const high5 = this.container5_high_element.value;
                    const low5 = this.container5_low_element.value;
                    if (container5_data > high5 || container5_data < low5) {
                        this.ok_element.style.display = "none";
                        this.ng_element.style.display = "display";
                        this.container5_ok_element.style.display = "none";
                        this.container5_ng_element.style.display = "block";
                    }

                    let container6_data = arr.slice(28, 32).reverse().buffer;
                    dataView = new DataView(container6_data);
                    container6_data = dataView.getFloat32();
                    this.container6_data_element.value = container6_data;

                    const high6 = this.container6_high_element.value;
                    const low6 = this.container6_low_element.value;
                    if (container6_data > high6 || container6_data < low6) {
                        this.ok_element.style.display = "none";
                        this.ng_element.style.display = "display";
                        this.container6_ok_element.style.display = "none";
                        this.container6_ng_element.style.display = "block";
                    }

                    chart1.series[0].addPoint(container1_data, true, true);
                    chart1.redraw();
                    chart2.series[0].addPoint(container2_data, true, true);
                    chart2.redraw();
                    chart3.series[0].addPoint(container3_data, true, true);
                    chart3.redraw();
                    chart4.series[0].addPoint(container4_data, true, true);
                    chart4.redraw();
                    chart5.series[0].addPoint(container5_data, true, true);
                    chart5.redraw();
                    chart6.series[0].addPoint(container6_data, true, true);
                    chart6.redraw();
                }
            });
            socket.bind(20000, '0.0.0.0');
            socket.send(message, 502, '192.168.0.200', function(err, bytes) {
                if (err) throw err;
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
