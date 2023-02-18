class CustomError extends Error {
  code: string;

  constructor(
    public statusCode: number,
    public publicMessage: string,
    message: string
  ) {
    super(message);
  }
}

export default CustomError;
