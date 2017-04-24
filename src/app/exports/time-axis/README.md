# TIME-AXIS
## 1 Infos
### 1.1 Files

`time-axis.component.[ts|html|scss]`

### 1.2 Metadata

| property | value |
| --- | --- |
| selector | zui-time-axis |
| templateUrl | ./time-axis.component.html |
| styleUrls[] | ./time-axis.component.scss |

### 1.3 Inputs

|  | 作用域 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- | --- |
| timeaxis | public | Array<TimeAxis> | 时间轴上的事件列表 | [] |

### 1.4 Outputs

|  | 作用域 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- | --- |
| txClick | public | EventEmitter | 事件单击触发事件 | 无 |

### 1.5 Contructor

暂无

### 1.6 Lifecycle

未实现

### 1.7 Methods

|  | 作用域 | 说明 |
| --- | --- | --- |
| onClick | public | 内部方法，单击事件触发 |

## 2 Example

```typescript

export class AppComponent {

    tas = [
        new TimeAxis('故障处理完成','2016-10-28 14:32:00'),
        new TimeAxis('设备网络恢复正常','2016-10-28 14:32:00','ATM设备监控恢复')
        ]

    constructor(){
    }

    click(event){
        console.log(event);
    }
}


```

```html
<zui-time-axis [timeaxis]="tas" (txClick)="click($event)"></zui-time-axis>
```

