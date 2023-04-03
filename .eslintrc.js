module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [],
    parserOptions: {
        project: ['tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        // Common
        "arrow-spacing": "warn", // Пропущен пробел после =>
        "no-multiple-empty-lines": "warn", // Не допускается более 1 пустой строки
        "prefer-const": "warn", // Никогда не переназначается. Вместо этого используйте 'const'
        "no-empty": "warn", // Пустой блок условия
        "spaced-comment": "warn", // Пробелы в комментах

        // Type script
        "@typescript-eslint/quotes": "warn", // Строки должны использовать одинарные кавычки
        "@typescript-eslint/restrict-plus-operands": "warn", // Операнды операции '+' должны быть либо обеими строками, либо обоими числами. Рассмотрите возможность использования литерала шаблона
        "@typescript-eslint/type-annotation-spacing": "warn", // Ожидается пробел после ':'
        "@typescript-eslint/indent": "warn", // Неверные отступы
        "@typescript-eslint/object-curly-spacing": "warn", // Отступы между фигурными скобочками
        "@typescript-eslint/dot-notation": "warn", // Лучше писать через точку
        "@typescript-eslint/semi": "warn", // Лишняя точка с запятой
        "@typescript-eslint/no-unused-vars": "warn", // Имеет значение, но никогда не используется
        "@typescript-eslint/explicit-function-return-type": "warn", // Отсутствует возвращаемый тип функции
        "@typescript-eslint/comma-spacing": "warn", // Пробел обязателен после ','
        "@typescript-eslint/no-unnecessary-type-assertion": "warn", // Это утверждение не нужно, так как оно не меняет тип выражения
        "@typescript-eslint/no-confusing-void-expression": "warn", // Возврат выражения void из сокращенной записи функции стрелки запрещен. Пожалуйста, добавьте фигурные скобки к функции стрелки
        "@typescript-eslint/consistent-type-imports": // Типы в импортах
            [
                "warn", // Сделать предупреждением
                {fixStyle: "separate-type-imports"} // Выносить тип за фигурную скобку
            ]
    }
}
