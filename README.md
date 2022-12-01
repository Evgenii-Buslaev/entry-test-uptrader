# Тестовое задание "UpTrader"

Описание тестового задания: https://github.com/UptraderTestTask/Junior-frontend.

## Описание

Фронтенд часть приложения списка задач.

- #### Технологии
  - HTML
  - CSS
  - JavaScript (ES6)
  - React
  - react-router-dom
  - Redux

* #### Функционал приложения

1. Созданиe/удаление проекта. Навигационная панель приложения содержит кнопку "создать проект". Кликнув на нее, Вы можете открыть форму создания проекта.

2. Создание задач. На странице проекта (динамический роут, соответствующий id проекта) распологается кнопка-карандаш, нажав на которую, Вы можете создать задачу. Ниже располагается доска с тремя колонками, содержащая в себе задачи. Перемещать задачи между колонками Вы модете посредством механизма 'Drag and drop'.

3. Редактирование задачи. Кликнув на задачу можно открыть форму с полями ее свойств. Вы можете заполнять/редактировать содержимое задачи.

4. Все проекты и задачи сохраняются в localStorage.

- #### Архитектура

  1. Приложение было написано с использованием функциональных компонентов. Для их создания я использовал синтаксис ES6.
  2. В качестве глобального хранилища состояния была использована библиотека redux. Сохранение данных осуществлеяется в localStorage браузера посредством функций-редьюсеров стейт-менеджера.

* #### Достижения

  Повторил навыки использования базовых реакт-хуков и работу с состоянием с использованием стейт-менеджера Redux.

* #### Деплоймент
  Попробовать использование приложения можно по ссылке: https://evgenii-buslaev.github.io/entry-test-woman-up/.

## Скрипты из документации

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
