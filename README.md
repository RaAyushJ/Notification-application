# Notification Logger (Electron)

A simple Electron-based desktop app that collects and displays system notifications on a Windows PC using PowerShell and the Windows Event Log.

## Features

- Displays the most recent system-level notifications.
- Uses PowerShell to fetch events from Windows notification logs.
- Simple, clean UI built with HTML, JS, and Electron.
- Works on Windows 10 and above.

## Requirements

- Node.js (v14 or higher)
- PowerShell (installed by default on Windows)
- Windows 10 or later

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/notification-logger.git
cd notification-logger
```
  


2. Install Dependencies

npm install

3. Run the App

npm start

4. Grant Permissions (if needed)

If you're not seeing any notifications:

    Run the app as Administrator (right-click cmd > Run as Administrator > npm start)

    Ensure PowerShell script execution is allowed:

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Folder Structure

notification-logger/
├── main.js                   # Main Electron process
├── preload.js                # Exposes safe APIs to renderer
├── renderer.js               # Frontend logic
├── index.html                # UI template
├── powershell/
│   └── get_notifications.ps1 # PowerShell script for event logs
├── package.json              # Project metadata

How It Works

    Electron starts a window and runs main.js.

    A PowerShell script is executed via child_process.exec to fetch recent notifications.

    The output is parsed and sent to the frontend using IPC.

    Notifications are displayed in a scrollable list with timestamps and messages.

Notes

    This app fetches notifications from the Windows Push Notification Platform Operational Log.

    It may not capture all third-party notifications unless they log events to Windows Event Viewer.
