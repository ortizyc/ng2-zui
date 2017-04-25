# CIRCLE-RATE

## 1 Infos
### 1.1 File

contacts.component.[ts|html|css]

### 1.2 Metadata


| Property | Value  |
| --- | --- |
| selector | zui-contacts |
| templateUrl | ./contacts.component.html |
| styleUrls[] | ./contacts.component.scss |

### 1.3 Properties


|   | 作用域 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- | --- |
| _fmContact | private | Object | 通讯录列表 | 无 |
| _yesterday | private | string | 昨天日期 | 昨天 |


### 1.4 Inputs


|   | 类型 | 默认值  |
| --- | --- | --- |
| contacts | Array<Contact> | [] |
| condition | string |  |

### 1.5 Outputs

|   | 类型 | 默认值  |
| --- | --- | --- |
| contactClick | EventEmitter<Contact> |  |

### 1.6 Constructor

暂无

### 

### 1.7 Lifecycle

|   | 输入 | 作用域 | 返回类型 | 返回值 |
| --- | --- | --- | --- | --- |
| ngOnInit | 无 | public | 无 | 无 |

### 1.8 Methods

|  | 输入 | 作用域 | 返回类型 | 返回值 |
| --- | --- | --- | --- | --- |
| existInContacts | 无 | public | Array<string> | 无 |

## 2 Example

```typescript
<zui-contacts [contacts]="contacts"></zui-contacts>
```


