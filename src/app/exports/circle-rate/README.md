# CIRCLE-RATE

## 1 Infos
### 1.1 File

circle-rate.component.[ts|html|css]

### 1.2 Metadata


| Property | Value  |
| --- | --- |
| selector | zui-circle-rate |
| templateUrl | circle-rate.component.html |
| styleUrls[] | circle-rate.component.scss |

### 1.3 Properties


|   | 作用域 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- | --- |
| _percent | private | number | percent经过取小数点后1位后的界面显示值 | 无 |
| _yesterday | private | string | 昨天日期 | 昨天 |
| _option | private | Object | echarts图表显示的option | 无  |
| _clientWidth | private | number | echarts图表实例化后的宽度 | 无 |
| _clientHeight | private | number | echarts图表实例后的长度 | 无 |
| _top | Private | number | 数据显示的高度位置 | 无 |
| _echartsNg2Component | private | EchartsNg2Component | 图表组件 | 图表组件实例 |


### 1.4 Inputs


|   | 类型 | 默认值  |
| --- | --- | --- |
| percent | Number(0<percent<1) | 无 |
| height | Number(0<height<320) | 320 |
| type | string | 平均开机率 |

### 1.5 Outputs

无

### 1.6 Constructor

暂无

### 

### 1.7 Lifecycle


|   | 输入 | 作用域 | 返回类型 | 返回值 |
| --- | --- | --- | --- | --- |
| ngOnInit | 无 | public | 无 | 无 |
| ngAfterViewInit | 无 | public | 无 | 无 |
| ngOnChanges | 无 | Public | 无 | 无 |
| echartsNg2Init | 无 | public | 无 | 无 |

## 2 Example

```typescript
<zui-circle-rate [percent]="percent" [height]="200"></zui-circle-rate>
```


