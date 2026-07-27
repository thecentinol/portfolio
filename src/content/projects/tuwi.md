---
title: "tuwi"
desc: "A TUI for managing WiFi on Linux via D-Bus IPC"
date: 2026-06-05
image: "../../static/tuwi.webp"
alt: "tuwi image"
tags: ["Go", "Linux", "D-Bus", "IPC", "NetworkManager", "Bubbletea", "Lipgloss"]
github: "https://github.com/thecentinol/tuwi"
featured: true
---

**tuwi** is an Open-Source Terminal User Interface (TUI) for managing WiFi networks on Linux based
operating systems. It uses D-Bus Inter Process Communication (IPC - godbus) to interface with the
[NetworkManager](https://networkmanager.dev/) system daemon to manage wireless networking.

![Tuwi Demo](https://raw.githubusercontent.com/thecentinol/tuwi/main/assets/demo.gif)

## Key Features

- **Browse available networks** — scan and view nearby WiFi networks with signal strength, security type and frequency
- **Connect to networks** — connect to open, secured (WPA/WPA2/WPA3) and hidden networks
- **Manage saved connections** — view, connect to and forget saved WiFi profiles
- **Real-time updates** — network list updates automatically via NetworkManager D-Bus signals without manual scanning
- **Security detection** — accurately identifies WEP, WPA, WPA2, WPA3, WPA2/WPA3 transition, Enterprise and OWE networks
- **Keyboard driven** — fully navigable without a mouse
