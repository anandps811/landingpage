# Read .nvmrc file and automatically use the specified Node version
if (Test-Path ".\.nvmrc") {
    $version = Get-Content ".\.nvmrc" -Raw | Where-Object { $_ -match '\d+' } -OutVariable match | ForEach-Object { $_.Trim() }
    if ($version) {
        Write-Host "Found .nvmrc: Node $version"
        nvm use $version
    }
} else {
    Write-Host "No .nvmrc file found in current directory"
}
