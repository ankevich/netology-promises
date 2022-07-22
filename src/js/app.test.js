import GameSavingLoader from './app';

test('Функция возвращает правильный обьект', (done) => {
  const expectedResult = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  GameSavingLoader.load().then(
    (savedGameJson) => {
      expect(savedGameJson).toEqual(expectedResult);
      done();
    },
  );
});
