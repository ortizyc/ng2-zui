# FEATURE-LIST

## 1 Infos
### 1.1 files

`feature-list.component.[ts|html|scss]`

### 1.2 Metadata

| property | value |  |
| --- | --- | --- |
| selector | feature-list |  |
| templateUrl | feature-list.component.html |  |
| styleUrl[] | feature-list.component.scss |  |

### 1.3 Inputs

|  | 作用域 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | public | Array | [] |

## 2 Example

```typescript
export class AppComponent {
    content = [
        {
            label: '历史监控',
            name: '开通率历史数据',
            click: (event)=> {
                console.log(123)
            }
        }
    ];
}
```

```
<feature-list [content]="content"></feature-list>
```

