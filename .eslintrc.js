module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
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

    // Type script
    "@typescript-eslint/type-annotation-spacing": "warn", // Ожидается пробел после ':'
    "@typescript-eslint/semi": "warn", // Лишняя точка с запятой
    "@typescript-eslint/no-unused-vars": "warn", // Имеет значение, но никогда не используется
    "@typescript-eslint/explicit-function-return-type": "warn", // Отсутствует возвращаемый тип функции
    "@typescript-eslint/consistent-type-imports": // Типы в импортах
        [
          "warn", // Сделать предупреждением
          {fixStyle: "separate-type-imports"} // Выносить тип за фигурную скобку
        ]
  }
}
