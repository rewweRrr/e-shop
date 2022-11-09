# Задание 2. Список продуктов. 
## Создание компоненты
1. Создадим новую компоненту для списка продуктов в `src/components/product/list/product-list.component.tsx`.
2. В качестве входных параметров компонента будет принимать список продуктов: `products: ProductDto[]`
## Axios и загрузка списка продуктов
1. `npm i axios` 
2. Создаём файл `src/constants/api.constants.ts` и добаляем новую константу `PRODUCTS_URl` в ней будет лежать **URL** до списка продуктов `https://fakestoreapi.com/products`
3. Создаём новый сервис для того, чтобы загрузить наши продукты `src/services/product-api.service.ts`.
4. В сервисе добавляем метод `fetchProductsApi`, возвращаемое значение будет: `Promise<AxiosResponse<Product[]>>`
5. С помощью `axios`, загужаем список продуктов.
6. Создаём контейнер для списка продуктов. `src/components/product/list/product-list.container.tsx`. (не забываем про шаблон из первого задания)
7. Внутри контейнера потребуется локальный стейт для того, чтобы хранить список, для этого используем `useState`
```typescript
 const [products, setProducts] = useState<Product[]>([]);
```
8. Внутри контейнера создадим асинхронный метод, чтобы загрузить продукты и сохранить их в локальном стейте `async function fetchProducts()`
9. Добавим еще один хук `useEffect`, чтобы загрузить список 1 раз при рендере компоненты.
10. Полученные продукты отобразим с помощью `product-list.component.tsx`:
```typescript
 return <ProductList products={products} />;
```
11. А созданный контейнер вызовем в `app.tsx`:
```typescript
    return <ProductListContainer />;
```
## Loading и обработка ошибок
1. В контейнере `product-list.container.tsx` добавим еще `useState` в котором будем хранить информацияю об ощибке `error` типа `string`
2. В методе `fetchProducts` добавим обработку ошибок `try/catch/finally`, и в случае ошибки сохраним в стейт строку вида: `Something went wrong! Error: ${e}`
3. Если есть ошибка, то показываем ее.
4. Аналогично добавляем `loading`.
## Clean up!
1. Контейнер стал немного перегруженным, поэтому логику связанную с загрузкой списка можно вынести в хук `src/products.hook.tsx`
2. Создайте в файле с хуком функцию `useProducts`, которая вернёт объект `{ products, loading, error };` и перенесите в нее всю логику из контейнера.
3. Используйте хук в контейнере:
```typescript
const { products, loading, error } = useProducts();
```

