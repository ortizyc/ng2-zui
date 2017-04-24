# SELECT-BAR

## 1 Infos
### 1.1 files

`select-bar.component.[ts|html|scss]`

### 1.2 Metadata

| property | value |  |
| --- | --- | --- |
| selector | select-bar |  |
| templateUrl | select-bar.component.html |  |
| styleUrl[] | select-bar.component.scss |  |

### 1.3 Inputs

|  | 作用域 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataList | public | Array | [] |

### 1.4 Outputs

|   | 作用域 | 类型 | 说明 |
| --- | --- | --- | --- |
| select | public  | EventEmitter | 单击触发事件 |

## 2 Example

```typescript
export class AppComponent {
    dataList = [
        {
            name: 'ATM',
            no: '1'
        }
    ];

    selected(event) {
        console.log(event)
    }
}
```

```
<select-bar [dataList]="dataList" (select)="selected($event)"></select-bar>
```

