# Shape Extrusion Multiplayer Game

A multiplayer 3D shape extrusion game where users can create, manipulate, and interact with shapes in real time. This project uses **Colyseus** for the server to manage multiplayer sessions and **BabylonJS** on the client for 3D rendering.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Thought Process](#thought-process)

---

## Overview

This project is a multiplayer game where players join a shared 3D environment, create shapes, and interact with each other’s creations. The server, built using Colyseus, handles player sessions and synchronizes shapes across all clients. The client, using BabylonJS, renders a 3D scene where users can interact with shapes in real time.

## Features

- Real-time multiplayer synchronization
- Shape creation and extrusion tools
- Smooth 3D rendering with BabylonJS
- Interactive interface for manipulating shapes

## Project Structure

```plaintext
task3-shape-extrusion/
├── server/
│   ├── src/
│   │   ├── colyseusServer.js       # Main Colyseus server setup
│   ├── rooms/
│   │   └── gameRoom.js             # Colyseus room to handle player sessions and sync
│   └── tests/
│       └── gameRoom.test.js        # Tests for room sync and multiplayer interactions
├── client/
│   ├── src/
│   │   ├── game.js                 # BabylonJS game logic and rendering
│   │   ├── components/
│   │   │   └── shape-tool.ts       # Tool for creating and extruding shapes
│   │   ├── assets/
│   │   │   └── styles.css          # Styling for the client interface
│   │   └── utils/
│   │       └── babylonHelpers.js   # Helper functions for BabylonJS object manipulation
│   ├── index.html                  # Client HTML setup
│   └── config.js                   # Configuration for server connection
├── README.md                       # Explanation, setup, and thought process
└── package.json                    # Dependencies and scripts for server/client.
