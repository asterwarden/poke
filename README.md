# React + Vite
=======
<img width="916" alt="image" src="https://github.com/user-attachments/assets/03cfac14-f8a7-4fea-a38f-6745c9f0ba5a"># Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

![image](https://github.com/user-attachments/assets/65e10e42-1772-476f-95e1-0bbc2b70dc2d)

Так выглядит развернутая структура проекта. Стоит обратить внимание, что все файлы, формирующие приложение, хранятся исключительно в папке Packages. Внутри этой папки есть index.html, который хранит в себе точку входа в приложение, это основной HTML-файл приложения, который содержит структуру проекта.
Далее, можем заметить папку Src, она уже содержит функциональную часть проекта. Здесь хранятся глупые и умные компоненты, могут храниться хуки, утилиты, хелперы и все то, что нужно для качественной разработки. Внутри папки App можно найти файлы, которые отвечают за стилизацию компонента App и непосредственно сам компонент App, который содержит внутри себя ссылку на компонент Directory. App нужен для того, чтобы хранить в нем фундамент приложения, самую первую точку входа после HTML-файла.
Папка Components содержит внутри себя глупые компоненты, которые отвечают только за стилизацию и вывод информации. Только здесь мы можем вносить визуальные изменения.
Папка Features содержит внутри себя умные компоненты, внутри которых уже происходят вычисления, логика выполнения. Здесь можем добавлять только функциональные части, никаких стилей в ней быть не может!


Directory Компонент
Компонент Directoryпредставляет собой функциональный компонент React, разработанный для отображения списка альбомов и связанных с ними фотографий. Он использует различные дочерние компоненты для создания интерактивного интерфейса, который позволяет пользователям исследовать альбомы, просматривать фотографии в каждом альбоме и видеть сведения о конкретном альбоме в ящике.

Функции
Извлечь альбомы: извлекает список альбомов из API и отображает их в формате списка.
Извлечение фотографий по идентификатору альбома: при нажатии на альбом компонент извлекает и отображает фотографии, связанные с этим альбомом.
Панель сведений об альбоме: при нажатии на фотографию открывается панель, в которой отображаются сведения о выбранном альбоме.
Структура
Компонент Directoryиспользует следующие дочерние компоненты:

Layout: Обеспечивает структуру страницы.
List: Отображает список альбомов.
CardList: Отображает фотографии в формате карточки.
Drawer: Отображает дополнительную информацию о выбранном альбоме в панели.

Реквизит
Компонент Directory не принимает никаких свойств напрямую, но полагается на:

List - для отображения данных альбома.
CardList - для отображения фотографий по альбомам.
Drawer - для отображения сведений об альбоме.
Хуки и функции: 
useEffect: Извлекает данные альбома при монтировании компонента.
useFetch: Пользовательский хук для извлечения данных из API.
getAlbumsData: Извлекает данные альбома.
getPhotosByAlbumsIdData: Выбирает фотографии по идентификатору альбома.
getCardDetailsData: Извлекает и устанавливает данные альбома для ящика.

Как это выглядит на UI
<img width="916" alt="image" src="https://github.com/user-attachments/assets/af1d59ed-7be6-499e-bccf-5ba5b14b8aa0">

Компонент CardList
Представляет собой список карточек с изображением, представленных компонентов Card(смотреть ниже)

Компонент Card
Отображает информационную карточку с изображением, заголовком и кнопкой для дополнительных действий. Этот компонент использует компоненты Ant Design Card и Image для структурирования и стилизации карточки, а также пользовательский модуль CSS для дополнительной стилизации.

Использование
Чтобы использовать этот компонент, импортируйте его и передайте требуемый dataобъект со свойствами, такими как title и thumbnailUrl, а также onClickфункцию-обработчик для кнопки.

Реквизит
данные (object, обязательный): Содержат информацию для отображения на карточке.
title(string): Заголовок, отображаемый в верхней части карточки.
thumbnailUrl(string): URL-адрес изображения, которое будет отображаться в качестве обложки открытки.
id(string или number): уникальный идентификатор элемента, передаваемый onClickпри нажатии кнопки.
onClick(function, обязательная): функция обратного вызова, срабатывающая при нажатии кнопки «Еще», принимающая data.id в качестве аргумента.

Как это выглядит на UI
<img width="380" alt="image" src="https://github.com/user-attachments/assets/1aef5108-2229-45d5-bae1-22588ac25480">

Компонент List
Представляет собой настраиваемый, горизонтально ориентированный список, который отображает элементы с заголовками, описаниями и ссылкой «Информация» для дополнительных действий. Он использует компонент списка Ant Design для простого оформления и компоновки, а также модули CSS для индивидуального оформления.

Реквизит
данные(Array, обязательный): массив объектов, где каждый объект представляет элемент списка.
id(string или number): уникальный идентификатор для каждого элемента, передаваемый функции onClickItem при нажатии кнопки «Info».
title(string): Заголовок, отображаемый в верхней части каждого элемента списка.
onClickItem(function, обязательно): функция обратного вызова, которая срабатывает при нажатии на ссылку «Info». Получает item.id в качестве аргумента.

Как это выглядит на UI
<img width="499" alt="image" src="https://github.com/user-attachments/assets/55b28161-d1d4-4635-82b6-ea27aef77639">

Имеется компонент Drawer, который представляет собой обыкновенный Drawer из библиотеки And Design.
Появляется на экране только при нажатии кнопки «More» на компоненте Card.

Как это выглядит на UI
<img width="248" alt="image" src="https://github.com/user-attachments/assets/f3e863be-490a-4bd2-bcbc-35684f7056c2">

Хук useFetch — это повторно используемый, настраиваемый хук React, разработанный для упрощения извлечения данных в функциональных компонентах. Он выполняет асинхронные GET-запросы для извлечения данных JSON из указанного URL со встроенной обработкой ошибок.

Функции
Простая выборка данных: извлекайте данные из любой конечной точки API, передавая URL-адрес.
Обработка ошибок: если запрос не выполнен, на консоль выводится сообщение об ошибке, что упрощает отладку.
Многоразовое использование: крючок универсален и может использоваться в нескольких компонентах с минимальной настройкой.

Установка
Включите useFetch хук в свой проект, сохранив его как .jsфайл, например, useFetch.js, а затем импортируйте его при необходимости.

Использование
Импортируйте useFetch хук в свой компонент.
Вызовите getData целевой URL для инициирования GET-запроса.
При необходимости используйте возвращенные данные в вашем компоненте.

API
getData(url: string): функция, которая принимает urlв качестве параметра и выполняет GETзапрос.
Параметры :
url( string): Конечная точка API, из которой извлекаются данные.

Обработка ошибок
Если статус ответа не ОК (например, 404 или 500), хук выдает ошибку и регистрирует статус в консоли. Это помогает поддерживать компонент чистым и сосредоточенным на извлечении данных, предоставляя обратную связь в случае возникновения проблемы.

Примечания
Зависимость: Хук использует собственный API Fetch.
<img width="539" alt="image" src="https://github.com/user-attachments/assets/49529cf1-6103-4ef4-983c-f2260e58bdd8">
