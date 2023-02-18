class CustomError extends Error {
  code: string;

  constructor(
    public statusCode: number,
    public publicMessage: string,
    messge: string
  ) {
    super(messge);
  }
}

export default CustomError;
