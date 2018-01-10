// Manual mock
export const mockPlayVideoFile = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { playVideoFile: mockPlayVideoFile }
});

export default mock;
