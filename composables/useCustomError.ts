class CustomError extends Error {
  statusCode: number
  statusMessage: string

  constructor(data: Record<string, string | number>, message?: string) {
    super(message)

    for (const key in data) {
      this[key] = data[key]
    }
  }
}

export default () => ({
  setError(data: Record<string, string | number>, message?: string) {
    throwError(new CustomError(data, message))
  },
})
