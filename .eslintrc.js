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
    "@typescript-eslint/type-annotation-spacing": "warn", // Предупреждения об отступах
    "@typescript-eslint/semi": "warn", // Предупреждение о лишней точкой с запятой
    "@typescript-eslint/consistent-type-imports": // Типы в импортах
        [
          "warn", // Сделать предупреждением
          {fixStyle: "separate-type-imports"} // Выносить тип за фигурную скобку
        ]
  }
}
