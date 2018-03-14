# Webpack DllPlugin

Пример конфигурации [webpack.DllPlugin](https://webpack.js.org/plugins/dll-plugin/) для [статьи на habrahabr](https://habrahabr.ru/company/skbkontur/blog/351080/).

## Запуск

Чтобы локально запустить пример, выполните шаги:

- Установите зависимости

  ```
  npm install
  ```


- Соберите development-версию:

  ```
  npm run build:dll
  npm run build
  ```

  ​

- Или соберите  production-версию:

  ````
  npm run deploy
  ````

> Обратите внимание, что в данном случае не нужно собирать dll, потому что он уже собран и лежит в репозитории.

Что именно делает каждый из скриптов, можно посмотреть в [package.json](https://github.com/vansosnin/webpack-dll-example/blob/master/package.json) в разделе `scripts`.

- Откройте index.html

## Описание

На что нужно обратить внимание (кроме конфигов):

- папка src — исходники, очевидно, они должны лежать в вашем репозитории;
- папка [dist/dll/production](https://github.com/vansosnin/webpack-dll-example/tree/master/dist/dll/production) — это как раз предсобранный dll, который нужно положить в репозиторий. При деплое на production его пересобирать не нужно;
- папка [example_dist](https://github.com/vansosnin/webpack-dll-example/tree/master/example_dist) — просто пример получившихся бандлов (их таскать в вашем репозитории не нужно).

## [Optional] Копирование dll

В данном примере конфигурации DllPlugin, dll собираются отдельно для каждоый среды. Например потому, что в режиме разработке мы хотим видеть ошибки React, которые не показываются в production-версии. Ну и могут быть другие причины, в зависимости от стека — это не столь важно.

Важно то, что у вас dll может лежать совершенно в другом месте, нежели ваши бандлы. Эту проблему можно решать несколькими способами. Я вижу 2:

1. использовать [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin): он сам добавляет в html нужные теги `script`;
2. использовать [CopyWebpackPlugin](https://github.com/webpack-contrib/copy-webpack-plugin): он умеет копировать файлики.

Я выбрал второй вариант и пример его настройки можно увидеть в [основном конфиге](https://github.com/vansosnin/webpack-dll-example/blob/master/webpack.config.js). Таким образом я копирую dll для текущей среды в папку с бандлами и без труда могу сгенерировать нужную ссылку на dll в html.

> В данном примере в [index.html](https://github.com/vansosnin/webpack-dll-example/blob/master/index.html) ссылки написаны жестко, это сделано для простоты. На деле же их можно генерировать при рендеринге вьюшки.

