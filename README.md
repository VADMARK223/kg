# Клиент

## Соглашения стилистики кода

Секция настроек форматирования Type Script в Idea: Editor -> Code Style -> Type Script

Для быстрого рефакторинга горячие клавиши в Idea (Windows): Ctrl+Alt+O, Ctrl+Alt+L

### Tabs and Idents

- Indent: 2

- Continuation indent: 2

### Spaces

#### Within

- ES6 import/export braces (Пробелы вокруг скобок в импортах/экспортах)

- Object literal braces (Пробелы вокруг скобок в объектах)

#### Before parentheses

- Function declaration parentheses (Пробел между названием функции и скобкой)

### Blank Lines

#### Keep maximum blank lines

- In code: 1 (Максимальное количество пустых строк)

### Punctuation

- Don't use semicolon to terminate statements always (Никогда не использовать точку с запятой для завершения операторов)

- Use single quotes always (Всегда использовать одинарные кавычки)

- Trailing comma Remove (Удалять лишние запятые в конце)

### Code Generation

### Comments

- Include types in JSDoc (Добавляет типы в комментарии документации)

## Инспектор

Предупреждение о замене на сокращение: Editor -> Inspections -> JavaScript and TypesScript -> General -> Property can replaced with shorthand

# NPM

`npm -v` - версия

`npm install` - установка всех зависимостей из `package.json`.

`npm install -g npm@latest` - установить глобально последнюю версию