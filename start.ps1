$ErrorActionPreference = "Stop"

$siteRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$sitePort = 8765
$siteUrl = "http://127.0.0.1:$sitePort/"

try {
  $response = Invoke-WebRequest -Uri $siteUrl -UseBasicParsing -TimeoutSec 2
  if ($response.StatusCode -eq 200) {
    Start-Process $siteUrl
    exit 0
  }
} catch {
  # No existing local server; start one below.
}

Start-Process -FilePath "python" `
  -ArgumentList @("-m", "http.server", "$sitePort", "--bind", "127.0.0.1", "--directory", $siteRoot) `
  -WindowStyle Hidden

Start-Sleep -Milliseconds 900
Start-Process $siteUrl
