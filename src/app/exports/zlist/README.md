# ZLIST

## 1 Infos
### 1.1 files

`zlist.component.[ts|html|scss]`

### 1.2 Metadata

| property | value |  |
| --- | --- | --- |
| selector | zlist |  |
| templateUrl | zlist.component.html |  |
| styleUrl[] | zlist.component.scss |  |

### 1.3 Inputs

|  | 作用域 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collection | public | Array | [] |
| clickable | public | boolean | [] |

## 2 Example

```typescript
export class AppComponent {
   collection = [
        {
            title: '80889080',
            subTitle: '南京支行',
            imgName: 'brand_Diebold.svg',
            introduction: '状态：已通知',
            content: '创建时间：07-28 19:55',
            click: (event)=> {

            }
        }
    ];
}
```

```
<zlist [collection]="collection" [clickable]="false"></zlist>
```

