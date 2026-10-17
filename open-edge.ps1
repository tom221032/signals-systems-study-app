param(
  [switch]$NoLaunch
)

$ErrorActionPreference = "Stop"

$siteRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$indexPath = Join-Path $siteRoot "index.html"
if (-not (Test-Path -LiteralPath $indexPath)) {
  throw "index.html was not found next to this launcher."
}

$edgeCandidates = @(
  (Join-Path ${env:ProgramFiles(x86)} "Microsoft\Edge\Application\msedge.exe"),
  (Join-Path $env:ProgramFiles "Microsoft\Edge\Application\msedge.exe"),
  (Join-Path $env:LOCALAPPDATA "Microsoft\Edge\Application\msedge.exe")
)

$edgePath = $edgeCandidates |
  Where-Object { $_ -and (Test-Path -LiteralPath $_) } |
  Select-Object -First 1

if (-not $edgePath) {
  $registryLocations = @(
    "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe",
    "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe"
  )
  foreach ($location in $registryLocations) {
    if (Test-Path $location) {
      $candidate = (Get-ItemProperty -Path $location)."(default)"
      if ($candidate -and (Test-Path -LiteralPath $candidate)) {
        $edgePath = $candidate
        break
      }
    }
  }
}

if (-not $edgePath) {
  throw "Microsoft Edge was not found. Please install Edge and try again."
}

$pageUri = [System.Uri]::new($indexPath).AbsoluteUri

if ($NoLaunch) {
  [PSCustomObject]@{
    Edge = $edgePath
    Page = $pageUri
  } | Format-List
  exit 0
}

Start-Process -FilePath $edgePath -ArgumentList @("--new-window", $pageUri)
