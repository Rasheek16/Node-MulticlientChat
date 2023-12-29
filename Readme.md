# Node Multiclient Chat App with WebSocket

A simple multiclient chat application built using Node.js and WebSocket for real-time communication. Users are required to log in with a username and password before accessing the chat.

## Features

- **WebSocket:** Real-time bidirectional communication between clients and the server.
- **Authentication:** Users need to log in with a username and password.
- **Demo Users:** Two demo users, `u1` and `u2`, with the password set as text.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Rasheek16/Node-MulticlientChat.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Node-MulticlientChat
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

5. Open your web browser and visit [http://localhost:8080/](http://localhost:8080/) to log in. Once logged in, you can access the chat at [http://localhost:8080/chat](http://localhost:8080/chat).

## Demo Users

- **Username:** u1
- **Password:** test

- **Username:** u2
- **Password:** test

## Usage

1. Access the login page by visiting [http://localhost:8080/](http://localhost:8080/).
2. Log in using one of the demo usernames (`u1` or `u2`) and the password `text`.
3. After successful login, you will be redirected to the chat page at [http://localhost:8080/chat](http://localhost:8080/chat).
4. Start chatting with other users in real-time using WebSocket.

## Contributing

Feel free to contribute to the development of this chat application by creating issues or submitting pull requests.

