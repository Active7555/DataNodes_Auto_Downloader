# 🚀 DataNodes Auto Downloader

A Tampermonkey UserScript that automatically bypasses the time-consuming 3-step download screens on **DataNodes** links, commonly found on sites.

## ✨ Features

* **Fully Autonomous 3 Steps:** Automatically clicks through the "Continue to Download" -> "Free Download" -> "Start Download" buttons in the correct order.
* **Smart Timer Tracking:** Detects the background 5-10 second countdowns and clicks the button the exact second it becomes active.
* **Download Manager Compatible:** Works flawlessly with external download managers like IDM, FDM (Free Download Manager), or JDownloader. Hands over the final file directly to your app.
* **Bulk Download Friendly:** Perfect for downloading multi-part archives (e.g., 100+ parts). Just middle-click the links to open them in new tabs and sit back while the script does the work.

## 🛠️ Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) (or Violentmonkey) extension for your browser.
2. Click the extension icon and select **"Create a new script"**.
3. Delete all the default text in the editor and paste the code provided in this repository.
4. Go to **File -> Save** (or press `Ctrl + S`).
5. You are all set! Make sure the script is enabled in your Tampermonkey dashboard.

## 📝 Usage

No extra configuration is required. Whenever you open a DataNodes download link (e.g., `datanodes.to/...`), the script will automatically run in the background, wait for the timers, and trigger the final download for you. 

---
**Author:** Active7555
