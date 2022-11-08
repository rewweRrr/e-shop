# Задание 1. Компонента с карточкой продукта 
## Генерация данных
1. Сгенерировать тестовые данные продукта используя `https://fakestoreapi.com/`, а именно `https://fakestoreapi.com/products`
2. Исходя из полученных данных сформировать модель `ProductDto` и положить ее в `product.model.ts`
3. В разделе `src/data` создать файл `product.data.ts`. Сохраним все продукты в `productListData`
## Создание компоненты
1. В разделе `src/components` создаем раздел `product/card` и в нём файл `product-card.component.tsx`
2. В файле `product-card.component.tsx` Создаем функциональную компоненту:

```typescript
import React, { memo, FC } from 'react';

type ProductCardProps = {};

const ProductCard: FC<ProductCardProps> = () => {
    return <div>ProductCard</div>;
};

export default memo(ProductCard);
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
## Использование компоненты
1. Используем созданную компоненту в `app.ts`. В случае успеха на экране появится надпись `PrdouctCard`
2. В качестве входных пропертей будем использовать `ProductDto`:
```typescript
type ProductProps = ProductDto;
```
3. В `ProductCard` компоненте будем показывать `title`, `image`, `price` и `description`, используем деструктуризацию для передачи **props** внутрь компоненты.
4. Возьмём данные из `productListData` и передадим их в компоненту:
```typescript
<ProductCard {...productListData[0]} />
```
## Стилизация
1. Создайте файл со стилями `product-card.module.css` в разделе `src/components/product/card` и подключите его:
```typescript
import styles from './product-card.module.css'
```
2. Напишите вёрстку и добавьте стили такие, чтобы слева была квадратная картинка (с сохранением пропорций, но ограниченная по размеру), по центру заголовок и под ним описание продукта, а справа цена в $.