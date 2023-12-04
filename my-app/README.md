# Tech Challenge

Welcome to the Tech Challenge project! This project is designed to demonstrate a React Single Page Application integrating Auth0 for authentication.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have Node.js(https://nodejs.org/) installed on your machine. This project has been tested on a Windows 11 PC.

### Installation

1. **Clone the Repository**
   
   You can clone the project from GitHub by clicking on the "<> Code" green button at https://github.com/rob-lopez-v/tech-challenge and selecting your preferred method (e.g., "Download Zip").

2. **Navigate to the Project Directory**
   
   Once the project is cloned or downloaded, open your terminal and navigate to the `/my-app` directory within the project.

   ```bash
   cd path/to/tech-challenge/my-app
   ```

3. **Install Dependencies**
   
   Run the following command to install the necessary dependencies, including the Auth0 React SDK:

   ```bash
   npm install @auth0/auth0-react
   ```

### Running the Project

After installing the dependencies, you can start the project in development mode:

```bash
npm start
```

This will launch the project in your default web browser. You can view it at: http://localhost:3000.

## Usage

After launching the project, you can interact with the Single Page Application, which includes features secured by Auth0 authentication. It implements the following:

 - Signup/login with email/password and also with Google.
 - Implements Account Linkin to prevent duplicate accounts.
 - Displays an error if a user tries to login with an account where the email address remains unverified.
 - Customises the NEw Universal Login by adding a Cruise ship logo, Cruise ship background and customised title & description.
 
Thanks for reading!