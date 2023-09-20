
# Authentication_API
- Authentication API using Node.js, Express framework, MongoDB

## Techmologies used 
- Node.js
- Express framework and express global error handler
- MogoDB and Mongoose
- JWT for generating and verify`ing tokens
- JOI for validation
- Nodemailer for sending Emails
- Bcrypt for hashing passwords

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NadaAly56/Authentication_API.git
   cd Authentication_API

2. Install the dependencies:
    ```bash
    npm install

3. Set up Environment Variables:
  
      Create a .env file in the directory and set the following environment variables:
      ```bash
      - PASS=your_password
      - EMAIL=your_email
      - KEY=your_secret_key
      - ROUND=number_of_rounds_for_password_hashing
      - PORT=your_server_port
      - DBCONNECTION=your_mongodb_connection_string

6. Start the API:
    In the directory:
    npm start
    or nodemon

## Usage

1. Register for an account using your email address.
2. Verify your email address by clicking the confirmation link sent to your email.
3. Log in to your account after confirming email.

## Contributing
   If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Commit your changes and create a pull request.

## Contact
   For any inquiries or support, please contact Nada Aly at nada.aly5613@gmail.com.
