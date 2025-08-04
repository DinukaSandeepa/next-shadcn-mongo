const fs = require('fs-extra');
const path = require('path');

async function buildTemplate() {
  console.log('🔨 Building template...');
  
  try {
    // Ensure template directory exists
    await fs.ensureDir('template');
    
    // Copy README template
    const templateReadme = `# {{PROJECT_NAME}}

A modern Next.js application with ShadCN UI components, MongoDB integration, and authentication.

## Features

- ⚡ **Next.js 15** - The React Framework for Production
- 🎨 **ShadCN UI** - Beautifully designed components built with Radix UI and Tailwind CSS
- 🗄️ **MongoDB** - NoSQL database integration with Mongoose
- 🔐 **Authentication** - Ready-to-use auth system
- 🎯 **TypeScript Ready** - Full TypeScript support (optional)
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Modern Stack** - Built with the latest web technologies

## Getting Started

First, set up your environment variables. Copy \`.env.example\` to \`.env.local\`:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your MongoDB connection string and other environment variables:

\`\`\`env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
\`\`\`

Install dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
{{PROJECT_NAME}}/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── ...
├── components/            # React components
│   ├── ui/               # ShadCN UI components
│   └── common/           # Common components
├── lib/                  # Utility functions and configurations
│   ├── db/              # Database configuration
│   └── models/          # Database models
├── hooks/               # Custom React hooks
└── public/             # Static assets
\`\`\`

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

## Customization

### Adding New Components

This project uses ShadCN UI. To add new components:

\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

### Database Models

Add new Mongoose models in the \`lib/models/\` directory.

### Styling

The project uses Tailwind CSS with ShadCN UI. Customize colors and themes in:
- \`components.json\` - ShadCN configuration
- \`app/globals.css\` - Global styles
- \`tailwind.config.js\` - Tailwind configuration

## Deployment

Deploy on [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any platform that supports Next.js.

Don't forget to set your environment variables in your deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
`;

    await fs.writeFile('template/README.md', templateReadme);
    
    // Create .env.example
    const envExample = `# Database
MONGODB_URI=mongodb://localhost:27017/your-database-name

# Authentication
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Add other environment variables as needed
`;

    await fs.writeFile('template/.env.example', envExample);
    
    // Create .gitignore
    const gitignore = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`;

    await fs.writeFile('template/.gitignore', gitignore);
    
    console.log('✅ Template built successfully!');
    
  } catch (error) {
    console.error('❌ Error building template:', error);
    process.exit(1);
  }
}

buildTemplate();
