# Задание 1. Компонента с продуктом. 
## Генерация данных
1. Сгенерировать тестовые данные продукта используя `https://fakestoreapi.com/`, а именно `https://fakestoreapi.com/products`
2. Исходя из полученных данных сформировать модель `ProductDto` и положить ее в `product.model.ts`
3. В разделе `src/data` создать файл `product.data.ts`. Сохраним все продукты в `productListData`
## Создание компоненты
1. В разделе `src/components` создаем раздел `product` и в нём файл `product.component.tsx`
2. В файле `product.component.tsx` Создаем функциональную компоненту:

```typescript
import React, { memo, FC } from 'react';

type ProductProps = {};

const Product: FC<ProductProps> = () => {
    return <div>Product</div>;
};

export default memo(Product);
```

P.S. Для быстрого создания функциональных компонент можно использовать snippet(live templates):

```typescript
import React, { memo, FC } from "react";

type $Name$Props = {}

const $Name$: FC<$Name$Props> = () => {
    return <div>$Name$$END$</div>;
};

export default memo($Name$);
```
4. Используем созданную компоненту в `app.ts`. В случае успеха на экране появится надпись `Prdouct`
5. В качестве входных пропертей будем использовать `ProductDto`:
```typescript
type ProductProps = ProductDto;
```
6. В `Product` компоненте будем показывать `title`, `image` и `description`, используем деструктуризацию для передачи **props** внутрь компоненты.
7. Возьмём данные из `productListData` и передадим их в компоненту:
```typescript
<Product {...productListData[0]} />
```
8. Создайте файл со стилями `product.module.css` в разделе `src/components/product` и подключите его:
```typescript
import styles from './product.module.css'
```
8. Напишите вёрстку и добавьте стили такие, чтобы слева была квадратная картинка (с сохранением пропорций, но ограниченная по размеру), а слева заголовок и под ним описание продукта.