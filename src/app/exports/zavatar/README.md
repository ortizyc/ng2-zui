# CIRCLE-RATE

## 1 Infos
### 1.1 File

zavatar.component.[ts|html|css]

### 1.2 Metadata


| Property | Value  |
| --- | --- |
| selector | zui-avatar |
| templateUrl | ./zavatar.component.html |
| styleUrls[] | ./zavatar.component.scss |

### 1.3 Properties



### 1.4 Inputs


|   | 类型 | 默认值  |
| --- | --- | --- |
| avatarSrc | string |  |

### 1.5 Outputs

|   | 类型 | 默认值  |
| --- | --- | --- |
| loginClick | EventEmitter<any> |  |
| registerClick | EventEmitter<any> |  |

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
| onLoginClick | 无 | public | void | 无 |
| onRegisterClick | 无 | public | void | 无 |

## 2 Example

```typescript
<zui-avatar [contacts]="contacts"></zui-avatar>
```


