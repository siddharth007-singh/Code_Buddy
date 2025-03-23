resolve: {
  fallback: {
    "buffer": require.resolve("buffer/"),
    "process": require.resolve("process/browser"),
  }
}