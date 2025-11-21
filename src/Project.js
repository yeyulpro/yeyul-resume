export const projects=[
        {
            name: "YC-Store",
            url: "http://ycstore.azurewebsites.net",
            period: "Sept 2025 - In Progress",
            description:
                "Developed full-stack e-commerce platform enabling users to browse, purchase products, manage orders, and securely pay via Stripe.",
            backend:
                "C#, ASP.NET Core Web API, Entity Framework Core, MS SQL Server, LINQ, authentication/authorization via ASP.NET Core Identity",
            frontend:
                "React + TypeScript; state management with Redux Toolkit and data fetching via RTK Query, navigation with React Router, responsive Material UI components, forms handled with React Hook Form + Zod",
            integrations:
                "Stripe payments & webhooks; Cloudinary image upload via React Dropzone",
            deployment: "Azure using GitHub Actions CI/CD",
        },
        {
            name: "Re-Hub",
            url: "re-hub-portfolio.azurewebsites.net",
            period: "Aug 2025 - Oct 2025",
            description:
                "Developed a full-stack real estate information exchange platform where users gather and share property information.",
            backend:
                "C#, ASP.NET Core Web API; implemented Clean Architecture (CQRS + Mediator Pattern) and managed authentication & authorization via ASP.NET Core Identity, MSSQL Server",
            frontend:
                "React + TypeScript; responsive Material UI components, state and data management with React Query, navigation with React Router, forms handled with React Hook Form + Zod",
            integrations:
                "Cloudinary API with React Dropzone for image uploads, SignalR for real-time communication, cursor-based pagination to optimize and reduce server load",
            deployment: "Azure using GitHub Actions CI/CD",
            improvement:
                "Improved main page performance by implementing a full-screen splash screen with intro thumbnail, reducing LCP by 30% and enhancing CLS and INP for faster load and better user experience.",
        },
        {
            name: "YC-Tinder",
            url: "yctinder.online",
            period: "Oct 2025 - Nov 2025",
            description:
                "Developed a Tinder-inspired social matching platform with MERN, featuring profile editing, real-time chat, and email notifications.",
            backend:
                "Node.js, Express, MongoDB (Mongoose, Atlas), implemented RESTful APIs, CRUD operations, JWT authentication, and secure user management with bcrypt",
            frontend:
                "React + Redux Toolkit + RTK Query, SPA architecture with data-driven routing; responsive Material UI components; forms handled with React Hook Form + Zod",
            integrations:
                "Real-time chat with Socket.io/WebSockets, scheduled email notifications via Amazon SES and Cron Jobs",
            deployment:
                "AWS EC2 with Nginx and PM2, containerized using Docker in a Linux environment, domain and DNS configured via GoDaddy + Cloudflare",
            improvement:
                "Added lazy loading for Connections Page images, reducing LCP by 25% and improving CLS.",
        },
    ];
