import Validator from './app';

const val = new Validator();

test('функция не пропускает имена которые содержат что-то кроме латинских буквы, цифр от 0 до 9, - и _', () => {
  const input = 'Пяточок';
  const received = val.validateUsername(input);
  const expected = false;
  expect(received).toBe(expected);
});

test('функция пропускает имена которые содержат только латинские буквы, цифры от 0 до 9, - и _', () => {
  const input = 'Piglet';
  const received = val.validateUsername(input);
  const expected = true;
  expect(received).toBe(expected);
});

test('имена которые не начинаются цифрами', () => {
  const input = '123Pop';
  const received = val.validateUsername(input);
  const expected = false;
  expect(received).toBe(expected);
});

test('имена которые не заканчиваются цифрами', () => {
  const input = 'Pop123';
  const received = val.validateUsername(input);
  const expected = false;
  expect(received).toBe(expected);
});

test('функция выводит имена, которые не имеют три цифры подряд в любом месте', () => {
  const input = 'O456pop';
  const received = val.validateUsername(input);
  const expected = false;
  expect(received).toEqual(expected);
});
