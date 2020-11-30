## 调用方式：
- ts 项目： import util from '@/util/ts';
- js 项目： import util from '@/util/js';

## 编译：
```
tsc
```

## 文件目录：
```
├─ js  // 打包后的 js 文件（可删除）
│  ├─ ...
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ ts
│  ├─ browser.ts
│  ├─ dom.ts
│  ├─ index.ts
│  ├─ mdExplain.ts
│  ├─ type_array.ts
│  ├─ type_date.ts
│  ├─ type_number.ts
│  ├─ type_object.ts
│  ├─ type_regexp.ts
│  └─ type_string.ts
└─ tsconfig.json

```