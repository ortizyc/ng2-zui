import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';

@Component({
    selector: 'zui-rate-view',
    templateUrl: './rate-view.component.html',
    styleUrls: ['./rate-view.component.scss']
})
export class RateViewComponent implements OnInit, OnChanges {

    @Input()
    title = '设备概览';
    @Input()
    name = '开机率';
    @Input()
    percent = 0.8;
    @Input()
    description = '05/03 2017';
    @Input()
    dataList = [
        [
            {
                name: '正常',
                value: '460'
            }, {
                name: '暂停服务',
                value: '26'
            }, {
                name: '维护',
                value: '28'
            }], [{
                name: '通讯故障',
                value: '34'
            }, {
                name: '关机',
                value: '35'
            }, {
                name: '未知',
                value: '89'
            },
        ]
    ];

    _percent;

    option;         //图表配置项
    clientWidth;    //画图区域宽度
    clientHeight;   //画图区域高度
    lineChart;
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.lineChart = echarts.init(this.elementRef.nativeElement.querySelector('#main'));
        this.clientWidth = this.elementRef.nativeElement.querySelector('#main').childNodes[0].clientWidth;
        this.clientHeight = this.elementRef.nativeElement.querySelector('#main').childNodes[0].clientHeight;
        this.chartInit()
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.option) {
            this.chartInit();
        }
    }

    chartInit() {
        this._percent = (this.percent * 100).toFixed(1) + '';    //界面显示精确小数点
        let markX = 50 + (this.clientHeight / this.clientWidth) * 43 * Math.sin(360 * this.percent * Math.PI / 180) + '%';
        let markY = 50 - 43 * Math.cos(360 * this.percent * Math.PI / 180) + '%';

        this.option = {
            series: [
                {
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    type: 'pie',
                    radius: ['86%', '86%'],
                    data: [
                        {
                            value: this.percent * 100,
                            name: '占比',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                        offset: 0, color: '#27E7FF' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#9868FF' // 100% 处的颜色
                                    }], false),
                                    borderWidth: parseInt(this.clientWidth * 0.015 + ''),
                                    borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                        offset: 0, color: '#27E7FF' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#9868FF' // 100% 处的颜色
                                    }], false)
                                }
                            }
                        },
                        {
                            value: 100 - this.percent * 100,
                            name: '未占比',
                            itemStyle: {
                                normal: {
                                    borderWidth: parseInt(this.clientWidth * 0.01 + ''),
                                    borderColor: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        }
                    ],
                    markPoint: {
                        symbol: 'circle',
                        symbolSize: parseInt(this.clientWidth * 0.015 + ''),
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            x: '50%',
                            y: '7%',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                        offset: 0, color: '#27E7FF' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#5AAEFF' // 100% 处的颜色
                                    }], false)
                                }
                            }
                        },
                        {
                            x: markX,
                            y: markY,
                            symbolSize: parseInt(this.clientWidth * 0.05 + ''),
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
                                        offset: 0, color: 'rgba(134,224,255,0.5)' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'rgba(134,224,255,0)' // 100% 处的颜色
                                    }], false)
                                }
                            }
                        },
                        {
                            x: markX,
                            y: markY,
                            symbolSize: parseInt(this.clientWidth * 0.017 + ''),
                            itemStyle: {
                                normal: {
                                    color: '#CBF3FF'
                                }
                            }
                        }]
                    },
                    animationDurationUpdate: 300
                }
            ],
            silent: true,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            animationDurationUpdate: 100,
            animationEasingUpdate: 'easeOutBack'
        };
        this.lineChart.setOption(this.option);
    }

}
