import { Component, OnInit, AfterViewInit, OnChanges, Input, ViewChild, Query } from '@angular/core';

import { EchartsNg2Component } from "echarts-ng2";

import * as echarts from "echarts";

import * as moment from "moment";

@Component({
    selector: 'zui-circle-rate',
    templateUrl: './circle-rate.component.html',
    styleUrls: ['./circle-rate.component.scss'],
})
export class CircleRateComponent implements OnInit, AfterViewInit, OnChanges {

    private _percent;
    private _yesterday;

    private _option;
    private _clientWidth: number;
    private _clientHeight: number;
    private _top:number;


    @ViewChild('echartsNg2')
    private _echartsNg2Component: EchartsNg2Component;

    @Input()
    percent;

    @Input()
    height:number = 320;

    @Input()
    type:string = "平均开机率";

    constructor() {
        this._yesterday = moment().add(-1, 'd').format('YYYY.MM.DD');
    }

    ngOnInit() {
        this._top = -(this.height+7.1*14)/2;
    }

    ngAfterViewInit() {
        this._percent = (this.percent * 100).toFixed(1) + '';    //界面显示精确小数点
        this._clientHeight = this._echartsNg2Component.getHeight();
        this._clientWidth = this._echartsNg2Component.getWidth();

        this.echartsNg2Init();
    }
    ngOnChanges(){
        if(this._option){
            this.echartsNg2Init();
        }
    }

    echartsNg2Init() {
        let markX = 50 + (this._clientHeight / this._clientWidth) * 43 * Math.sin(360 * this.percent * Math.PI / 180) + '%';
        let markY = 50 - 43 * Math.cos(360 * this.percent * Math.PI / 180) + '%';
        console.log(markX);
        this._option = {
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
                            name: '开机比例',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                        offset: 0, color: '#33FFF3' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#AD80FF' // 100% 处的颜色
                                    }], false),
                                    borderWidth: parseInt(this._clientWidth * 0.02 + ''),
                                    borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                        offset: 0, color: '#33FFF3' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#AD80FF' // 100% 处的颜色
                                    }], false)
                                }
                            }
                        },
                        {
                            value: 100 - this.percent * 100,
                            name: '未开机比例',
                            itemStyle: {
                                normal: {
                                    borderWidth: parseInt(this._clientWidth * 0.01 + ''),
                                    borderColor: 'rgba(50,196,255,0.4)'
                                }
                            }
                        }
                    ],
                    markPoint: {
                        symbol: 'circle',
                        symbolSize: parseInt(this._clientWidth * 0.02 + ''),
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
                                    color: '#49C1FF'
                                }
                            }
                        },
                        {
                            x: markX,
                            y: markY,
                            symbolSize: parseInt(this._clientWidth * 0.06 + ''),
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
                            symbolSize: parseInt(this._clientWidth * 0.022 + ''),
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
    }
}
