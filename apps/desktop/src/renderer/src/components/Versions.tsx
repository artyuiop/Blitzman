import { useEffect, useState } from 'react'

type AppVersions = Awaited<ReturnType<typeof window.api.getVersions>>

function Versions(): React.JSX.Element {
  const [versions, setVersions] = useState<AppVersions | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    window.api
      .getVersions()
      .then((result) => {
        setVersions(result)
      })
      .catch((error: unknown) => {
        console.error('Failed to get app versions:', error)
        setError('Unable to load application versions')
      })
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  if (!versions) {
    return <p>Loading versions...</p>
  }

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
    </ul>
  )
}

export default Versions