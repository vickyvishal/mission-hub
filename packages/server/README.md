# React Auto Complete Full Stack App

This is a full-stack auto-complete application built with React for the client-side and Express for the server-side. The auto-complete feature allows users to search for items and see real-time results as they type.

## Server Setup

### Starting the Server

1. Navigate to the `auto-complete-react-server` directory in your terminal.
2. Run `pnpm install` to install all the dependencies.
3. Run `pnpm dev` to start the server.

```bash
cd auto-complete-react-server
pnpm install
pnpm dev
```

The server will start running, and you'll be able to access it at the specified port.

## Server Dependencies

- [Express](https://expressjs.com/): Web application framework for Node.js.
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS (Cross-Origin Resource Sharing) in Express.
- [pnpm](https://pnpm.io/): Package manager for JavaScript projects.

## API Endpoints

- **GET /api/items**: Fetches a list of items. Accepts an optional query parameter `searchTerm` for filtering the items based on search term.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any bugs or feature requests.

## License

This project is licensed under the [MIT License](LICENSE).
