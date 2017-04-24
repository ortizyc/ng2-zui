# DEV-LIST

## 1 Infos
### 1.1 files

`dev-list.component.[ts|html|scss]`

### 1.2 Metadata

| property | value |  |
| --- | --- | --- |
| selector | dev-list |  |
| templateUrl | dev-list.component.html |  |
| styleUrl[] | dev-list.component.scss |  |

### 1.3 Inputs

|  | 作用域 | 类型 | 默认值 |
| --- | --- | --- | --- |
| devices | public | Array | [] |

### 1.4 Outputs

|   | 作用域 | 类型 | 说明 |
| --- | --- | --- | --- |
| itemClick | public  | EventEmitter | 单击触发事件 |

### 1.5 Lifecycle

## 2 Example

```typescript
export class AppComponent {
   devices = [
        {
            no: '0008890',
            address: '建邺区江东中路359号国睿大厦一号楼A区12楼',
            devType: {
                devVendor: {
                    name: 'Diebold'
                }
            },
            org: {
                name: '建邺区支行'
            },
            cdevRunStatus: 'HEALTHY',
            cdevModStatus: 'HEALTHY',
            cdevCashStatus: 'HEALTHY',
            cdevNetStatus: 'HEALTHY',
            devRunStatus: '运行正常',
            devModStatus: '正常',
            devCashStatus: '钞箱正常',
            devNetStatus: '正常'
        }
    ];
}
```

```
<dev-list [devices]="devices" (itemClick)="console.log($event)"></dev-list>
```

