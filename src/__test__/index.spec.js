const JQL = require('..');

describe('JQL Testing', () => {
  it('should parse JSON String and create JQL Object', () => {
    const collection = new JQL('[{"name": "foo"}]');
    expect(collection).toBeInstanceOf(JQL);
  });

  it('should able to query data from object instance', () => {
    const collection = new JQL('[{"name": "foo"}]');
    const query = collection.select('*')
        .where('name')
        .match('^foo', 'i');
    expect(query.fetch()).toHaveLength(1);
  });
  it('should order query correctly', () => {
    const collection = new JQL([
      {
        id: 2,
        name: 'foo',
      },
      {
        id: 3,
        name: 'bar',
      },
      {
        id: 1,
        name: 'joe',
      },
    ]);
    const query = collection.select('*').orderBy('id');
    const result = query.fetch();
    expect(result).toHaveLength(3);
    expect(result[0].id).toEqual(1);
  });

  const filterTestCollection = new JQL([{
    name: 'John',
    room: 101,
  }, {
    name: 'Jane',
    room: 201,
  }, {
    name: 'Joe',
    room: 102,
  }, {
    name: 'June',
    room: 202,
  }]);

  it('should query with lessThan filter correctly', () => {
    const query = filterTestCollection.select('*')
        .where('room')
        .lessThan(200);
    const result = query.fetch();
    expect(result).toHaveLength(2);
    expect(result[0].room).toBeLessThan(200);
  });

  it('should query with moreThan filter correctly', () => {
    const query = filterTestCollection.select('*')
        .where('room')
        .moreThan(200);
    const result = query.fetch();
    expect(result).toHaveLength(2);
    expect(result[0].room).toBeGreaterThan(200);
  });

  it('should query with moreThanOrEqualTo filter correctly', () => {
    const query = filterTestCollection.select('*')
        .where('room')
        .moreThanOrEqualTo(201);
    const result = query.fetch();
    expect(result).toHaveLength(2);
    expect(result[0].room).toBeGreaterThanOrEqual(201);
  });

  it('should query with equalTo filter correctly', () => {
    const query = filterTestCollection.select('*')
        .where('room')
        .equalTo(201);
    const result = query.fetch();
    expect(result).toHaveLength(1);
    expect(result[0].room).toEqual(201);
  });

  it('should query with `.contains` correctly ( with no case sensitive param)', () => {
    const query = filterTestCollection.select('*')
        .where('name')
        .contains('J');
    const result = query.fetch();
    expect(result).toHaveLength(4);
  });

  it('should query with `.contains` with case sensitive correctly', () => {
    const query = filterTestCollection.select('*')
        .where('name')
        .contains('J', true);
    const result = query.fetch();
    expect(result).toHaveLength(4);
  });

  it('should query with `.contains` filter with non-casesensitive correctly', () => {
    const query = filterTestCollection.select('*')
        .where('name')
        .contains('j', true);
    const result = query.fetch();
    expect(result).toHaveLength(0);
  });
});
