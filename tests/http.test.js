import { test, expect } from '@jest/globals';

import { http } from '../';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';
const GET_RESPONSE = {
  data: {
    completed: false,
    id: 1,
    title: 'delectus aut autem',
    userId: 1,
  },
  error: null,
  ok: true,
  status: 200
};

test('get http response', async () => {

  const response = await http.doGet(URL);
  expect(response).toEqual(GET_RESPONSE);

});
