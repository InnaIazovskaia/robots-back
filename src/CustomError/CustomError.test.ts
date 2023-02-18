import CustomError from "./CustomError";

describe("Given the CustomError class", () => {
  describe("When it is instantiated with message 'Error', code 'AAA', status code 404, and public message 'Data not found'", () => {
    test("Then it should return an error object instance of Error with tose properties and values", () => {
      const expectedError = {
        message: "Error",
        statusCode: 404,
        publicMessage: "Data not found",
      };

      const newCustomError = new CustomError(
        expectedError.statusCode,
        expectedError.publicMessage,
        expectedError.message
      );

      expect(newCustomError).toHaveProperty("message", expectedError.message);
      expect(newCustomError).toHaveProperty(
        "statusCode",
        expectedError.statusCode
      );
      expect(newCustomError).toHaveProperty(
        "publicMessage",
        expectedError.publicMessage
      );
      expect(newCustomError).toBeInstanceOf(Error);
    });
  });
});
