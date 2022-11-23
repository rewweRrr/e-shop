# Задание 4. Добавление нового продукта
1. Создать компоненту кнопка `CreateButton`, которая будет располагаться **фиксированно** в правом нижнем углу экрана имет форму круга с тестом `+`.
2. Создать компоненту модальное окно (popup) `Modal` оно должно иметь подложку полупрозрачного серого цвета и основное окно. В основном окне должен быть хэдер, в котром располагается название (`title`) и крестик. По клику на крестик или на подложку, должно выбрасываться событие `onClose`. Управление открытием/закрытием осуществляется **снаружи** через проперти `visible`. В модал в качестве контента должна быть возможность прокидывать чайлдов `children?: ReactNode;`.

В качестве крестика используйте `.svg` таким образом: `import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';` 
```svg
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.9394 10.0001L2.46973 3.53039L3.53039 2.46973L10.0001 8.9394L16.4697 2.46973L17.5304 3.53039L11.0607 10.0001L17.5304 16.4697L16.4697 17.5304L10.0001 11.0607L3.53039 17.5304L2.46973 16.4697L8.9394 10.0001Z"/>
</svg>
```
3. Создать компоненту `ProductCreationContainer` в неё требуется добавить модальное окно и кнопку, а ак же написать логику по открытию и закрытию модального окна. Сам контейнер будем использовать в `ProductListContainer`.
4. Создать компоненту `Input` с внутренними стейтом, а также c возможностью передать все проерти native `HTMLInputElement`. Должна быть возможность передать извне `className` и применить соответствующие стили. Получиенная, стилизованная компонента, теперь может использоваться по всему проекту. 
```typescript jsx
const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

...

return <input value={innerValue} onChange={handleChange} className={innerClassName} {...rest} /
```

5. Создать компоненту кнопка `Button` c возможностью передать все проерти native `HTMLButtonElement`. Должна быть возможность передать извне `className` и применить соответствующие стили.
6. Для того чтобы создать новый продукт потребуется форма, сделаем ее достаточно простой: форма будет содержать два текстовых поля `title` и `description` и кнопку `Сreate`, а также будет выводить валидационное сообщение в случае, когда `title` пустой. Для этого потребуется создать компоненту `ProductCreationForm` и поместить ее внутрь модального окна в качестве `children`. По кнопке `Create` должен происходить сабмит формы и выбрасываться событие `onSubmit: (product: Partial<Product>) => void`.

```typescript jsx
    <Modal title="Create Product" visible={modalVisible} onClose={handleModalClose}>
        <ProductCreationForm onSubmit={handleSubmit} />
    </Modal>
```
6. Добавим API для создания продукта `createProductApi(product: Partial<Product>)` в `product-api.service.ts`.
7. Используем созданное API в `ProductCreationContainer` на сабмит формы. Необходимо добавить коллбек `onCreate` и в случае успешного создания вызвать его: `onCreate(response.data);`
8. В `useProducts` хуке, добавить возможность добавления продуктов `addProduct`. И в `ProductListContainer` добавить созданный продукт в список.