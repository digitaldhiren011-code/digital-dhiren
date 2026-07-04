$ErrorActionPreference = "Continue"
$logPath = Join-Path $PSScriptRoot "start-website.log"
"[$(Get-Date -Format o)] Starting website" | Out-File -FilePath $logPath -Encoding utf8
$env:NEXT_TELEMETRY_DISABLED = "1"
Set-Location -LiteralPath $PSScriptRoot
"[$(Get-Date -Format o)] Folder: $(Get-Location)" | Add-Content -Path $logPath
& "C:\Program Files\nodejs\node.exe" "node_modules\next\dist\bin\next" dev *>> $logPath
"[$(Get-Date -Format o)] Server command exited with code $LASTEXITCODE" | Add-Content -Path $logPath
