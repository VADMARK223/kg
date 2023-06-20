import IntroductoryPhoneticPage from '../components/mam/introductoryPhonetic/IntroductoryPhoneticPage'
import BelongingSingle from '../components/algorithmTables/BelongingSingle'

export enum RoutePath {
  HOME = '/', // Домашняя страница
  SERVICE = '/service', // Сервисная страница
  LOGIN = '/login', // Страница логина
  REGISTER = '/register', // Страница регистрации
  NUMBERS = '/numbers', // Страница числительных
  PHRASES = '/phrases', // Страница фраз
  AFFIXES = '/affixes', // Страница аффиксов
  PHONETICS = '/phonetics', // Вводно-фонетический курс
  INTRODUCTORY_PHONETIC = '/introductory_phonetic', // Вводно-фонетический курс
  BASIC = '/basic', // Основной курс
  LOCATIVE = '/locative', // Местный падеж
  MULTIPLICITY = '/multiplicity', // Выражение множественности
  PRONOUNS = '/pronouns', // Местоимения
  BELONGING_SINGLE = '/belonging_single', // Образование категории принадлежности единственного числа
  MANAS = '/manas',
  ALL = '*' // Шаблон для всех страниц
}
