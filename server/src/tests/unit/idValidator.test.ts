/* eslint-disable new-cap */
import { ObjectIdValidator } from '../../utils/idValidator';

describe('MongoDB Id Validator', () => {
  const helper = {
    error: jest.fn(
      (error: string, path: string, message: string) => 'id.error'
    ),
  };
  it('Should validate a mongoDB Object ID', () => {
    expect(ObjectIdValidator('61c9c6176153c142394bc432', helper)).toEqual(true);
  });
  it('Should not validate a non-mongoDB Object ID', () => {
    expect(ObjectIdValidator('not-a-valid-id', helper)).toEqual('id.error');
  });
});
