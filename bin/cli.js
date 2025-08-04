#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const program = new Command();

console.log(chalk.cyan('🚀 Create Next.js + ShadCN + MongoDB App'));

program
  .version('1.0.0')
  .description('Create a new Next.js app with ShadCN UI and MongoDB integration')
  .argument('[project-name]', 'name of your project (use "." for current directory)')
  .option('-y, --yes', 'skip prompts and use defaults')
  .action(async (projectName, options) => {
    try {
      // Handle current directory installation
      const isCurrentDir = projectName === '.';
      let targetProjectName = projectName;
      let targetDir;
      
      if (isCurrentDir) {
        // Use current directory
        targetDir = process.cwd();
        targetProjectName = path.basename(targetDir);
        
        // Check if current directory is empty or has package.json
        const files = fs.readdirSync(targetDir).filter(file => !file.startsWith('.'));
        if (files.length > 0) {
          if (!options.yes) {
            const response = await inquirer.prompt([
              {
                type: 'confirm',
                name: 'proceed',
                message: 'Current directory is not empty. Do you want to proceed?',
                default: false
              }
            ]);
            
            if (!response.proceed) {
              console.log(chalk.yellow('❌ Operation cancelled'));
              process.exit(0);
            }
          }
        }
      } else {
        // Get project name if not provided
        if (!targetProjectName) {
          const response = await inquirer.prompt([
            {
              type: 'input',
              name: 'projectName',
              message: 'What is your project name?',
              default: 'my-next-shadcn-mongo-app',
              validate: (input) => {
                if (!input || input.trim() === '') {
                  return 'Project name is required';
                }
                if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
                  return 'Project name should only contain letters, numbers, hyphens, and underscores';
                }
                return true;
              }
            }
          ]);
          targetProjectName = response.projectName;
        }

        targetDir = path.resolve(process.cwd(), targetProjectName);
        
        // Check if directory already exists
        if (fs.existsSync(targetDir)) {
          if (!options.yes) {
            const response = await inquirer.prompt([
              {
                type: 'confirm',
                name: 'overwrite',
                message: `Directory ${targetProjectName} already exists. Do you want to overwrite it?`,
                default: false
              }
            ]);
            
            if (!response.overwrite) {
              console.log(chalk.yellow('❌ Operation cancelled'));
              process.exit(0);
            }
          }
          
          fs.removeSync(targetDir);
        }

        // Create target directory
        fs.ensureDirSync(targetDir);
      }
      
      console.log(chalk.blue(`📁 Creating project${isCurrentDir ? ' in current directory' : ` in ${targetDir}`}...`));
      
      // Copy template files
      const templateDir = path.join(__dirname, '..', 'template');
      console.log(chalk.blue('📋 Copying template files...'));
      fs.copySync(templateDir, targetDir);
      
      // Create package.json for the new project
      const packageJsonPath = path.join(targetDir, 'package.json');
      const templatePackageJson = require('../package.json');
      
      const newPackageJson = {
        name: targetProjectName,
        version: '0.1.0',
        private: true,
        scripts: {
          dev: 'next dev --turbopack',
          build: 'next build',
          start: 'next start',
          lint: 'next lint'
        },
        dependencies: templatePackageJson.templateDependencies,
        devDependencies: templatePackageJson.templateDevDependencies
      };
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(newPackageJson, null, 2));
      
      console.log(chalk.blue('📦 Installing dependencies...'));
      
      // Change to project directory and install dependencies
      process.chdir(targetDir);
      
      try {
        execSync('npm install', { stdio: 'inherit' });
      } catch (error) {
        console.log(chalk.yellow('⚠️  Failed to install with npm, trying with yarn...'));
        try {
          execSync('yarn install', { stdio: 'inherit' });
        } catch (yarnError) {
          console.log(chalk.red('❌ Failed to install dependencies. Please run npm install or yarn install manually.'));
        }
      }
      
      console.log(chalk.green('✅ Project created successfully!'));
      console.log('');
      console.log(chalk.cyan('Next steps:'));
      if (!isCurrentDir) {
        console.log(chalk.white(`  cd ${targetProjectName}`));
      }
      console.log(chalk.white('  npm run dev'));
      console.log('');
      console.log(chalk.yellow('📝 Don\'t forget to:'));
      console.log(chalk.white('  1. Set up your MongoDB connection string in .env.local'));
      console.log(chalk.white('  2. Configure your authentication providers'));
      console.log(chalk.white('  3. Customize your ShadCN components'));
      console.log('');
      console.log(chalk.green('🎉 Happy coding!'));
      
    } catch (error) {
      console.error(chalk.red('❌ Error creating project:'), error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
