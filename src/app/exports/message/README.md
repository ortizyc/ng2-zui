# MESSAGE
## 1 Infos
### 1.1 Files

`message.component.[ts|html|scss]`

### 1.2 Metadata

| property | value |
| --- | --- |
| selector | zui-message |
| templateUrl | ./message.component.html |
| styleUrls[] | ./message.component.scss |

### 1.3 Properties

|  | 作用域 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- | --- |
| isActive | public | boolean | 点击时刻的样式切换 | false |

### 1.4 Inputs

|  | 作用域 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- | --- |
| msgList  | public | Array<Message> | 消息数组 | [ ] |

### 1.5 Outputs

|   | 作用域 | 类型 | 说明 |
| --- | --- | --- | --- |
| msgClick | public | EventEmitter<Message> | 消息点击触发事件 |

### 1.6 Constructor

暂无

### 1.7 Lifecycle

未实现

## 2 Example

```typescript
export class AppComponent {
    
    private msgList:Array<Message> = new Array<Message>();
    
    constructor(){
        this.msgList.push(
            new Message(
                "10-28 14:30",
                "网络",
                "80889080(鼓楼·网络故障)",
                "CASE:9144,网络通讯（NET00408920)",
                "鼓楼区北京西路359号雨润大厦",
                "处理中",
                "吴青峰"
            )
        )
    }
}
```

```html
<zui-message [msgList] = "msgList"></zui-message>
```



