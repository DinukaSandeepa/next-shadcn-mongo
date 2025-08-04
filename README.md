# Create Next.js + ShadCN + MongoDB App

A powerful CLI tool to quickly bootstrap a Next.js application with ShadCN UI components, MongoDB integration, and authentication setup.

## Features

- ⚡ **Next.js 15** - The React Framework for Production  
- 🎨 **ShadCN UI** - Beautiful, customizable components built with Radix UI and Tailwind CSS
- 🗄️ **MongoDB** - NoSQL database integration with Mongoose
- 🔐 **Authentication** - Ready-to-use auth system setup
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Modern Stack** - Built with the latest web technologies

## Quick Start

```sh
# Using npx (recommended)
npx create-next-shadcn-mongo my-app

# Install in current directory
npx create-next-shadcn-mongo .

# Using npm
npm install -g create-next-shadcn-mongo
create-next-shadcn-mongo my-app
```

## Usage

1. **Create your project:**
```sh
   npx create-next-shadcn-mongo my-app
   cd my-app
```

2. **Set up environment variables:**
```sh
   cp .env.example .env.local
```

3. **Start development:**
```sh
   npm run dev
```

## CLI Options

```sh
create-next-shadcn-mongo [project-name] [options]

Arguments:
  project-name   Name of your project (use "." for current directory)

Options:
  -y, --yes     Skip prompts and use defaults
  -h, --help    Display help for command
  -V, --version Display version number
```

## Examples

```sh
# Create new project
npx create-next-shadcn-mongo my-awesome-app

# Install in current directory
npx create-next-shadcn-mongo .

# Skip prompts and use defaults
npx create-next-shadcn-mongo my-app -y
```

## What You Get

- Complete Next.js 15 setup with App Router
- 45+ ShadCN UI components pre-installed
- MongoDB integration with Mongoose
- Authentication foundation
- Tailwind CSS configuration
- ESLint setup
- Environment variables template

## Requirements

- Node.js 18.0 or later
- npm, yarn, or pnpm

## License

MIT License

## Support

- [GitHub Issues](https://github.com/DinukaSandeepa/next-shadcn-mongo/issues)
- [Documentation](https://github.com/DinukaSandeepa/next-shadcn-mongo)

Made with  for the Next.js community
