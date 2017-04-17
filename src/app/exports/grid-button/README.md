# GRID-BUTTON

## 1 Infos
### 1.1 files

`grid-button.component.[ts|html|scss]`

### 1.2 Metadata

| property | value |  |
| --- | --- | --- |
| selector | zui-grid-button |  |
| templateUrl | grid-button.component.html |  |
| styleUrl[] | grid-button.component.scss |  |

### 1.3 Inputs

|  | 作用域 | 类型 | 默认值 |
| --- | --- | --- | --- |
| btns | public | Array<GridButton> | [] |

### 1.4 Outputs

|   | 作用域 | 类型 | 说明 |
| --- | --- | --- | --- |
| btnClick | public  | EventEmitter<GridButton> | 单击触发事件 |

### 1.5 Lifecycle

未实现

### 1.6 Methods


|  | 作用域 | 参数 | 输出类型 | 输出值 | 说明 |
| --- | --- | --- | --- | --- | --- |
| onClick | public | Btw:GridButton |  |  | 单击触发事件输出被点击的按钮数据 |

## 2 Example

```typescript
export class AppComponent {
    btns = [{
        icon:"./assets/images/icon_冠字号.png",
        name:"冠字号"
    },{
        icon:"./assets/images/icon_大数据.png",
        name:"大数据"
    }]
    
    constructor(){
    }

    gotoPage(event){
        console.log(event);
    }
}
```

```
<zui-grid-button [btns]="btns" (btnClick)="gotoPage($event)"></zui-grid-button>
```

