/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

/* Приклад використання, з числовим ключем та рядковим значенням : */
const user1: KeyValuePair<number, string> = {key: 1, value: 'Mango'}

export {};