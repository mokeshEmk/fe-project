Prerequisites
Ensure you have the following installed:

Node.js (version 14.x or later)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/react-aws-ec2-nginx.git
cd react-aws-ec2-nginx
Install the dependencies:

bash
Copy code
npm install
Development Server
To start the development server, run the following:

bash
Copy code
npm start
This will start the app at http://localhost:3000.

Building for Production
To build the application for production, run:

bash
Copy code
npm run build
This will create an optimized build of your application in the build/ directory, which can be deployed on any static server.

Deployment
To deploy this app on an AWS EC2 instance using NGINX, follow these steps:

Upload the build/ directory to your EC2 instance.
Configure NGINX to serve the React app from the build/ folder.
Ensure your EC2 instance is publicly accessible and the necessary firewall rules are applied.
Project Details
React Version: 18.2.0
Dependencies:
@testing-library/react: ^13.4.0
react-scripts: ^5.0.1
web-vitals: ^2.1.4
