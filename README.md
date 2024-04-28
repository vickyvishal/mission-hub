# MISSION-HUB

This is a full-stack auto-complete application built with React for the client-side and Express for the server-side.

## Project Setup

1. Run `pnpm install` to install all the dependencies across the project
2. Run `pnpm server` to start the server.
3. Run `pnpm client` to start the server.

The server will start running and then the client, and you'll be able to access it at the specified port.

## Docker

1. `CD packages/server` and run `docker-compose build`
2. `CD packages/client` and run `docker-compose build`
3. `CD ../..` to be in the base location and run `docker-compose build`

## API Endpoints

- **GET /api/missions**: Fetches a list of mission.
