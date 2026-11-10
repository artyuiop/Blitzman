export {}

declare global {
  interface Window {
    api: {
      getVersions: () => Promise<{
        electron: string
        chrome: string
        node: string
      }>
    }
  }
}