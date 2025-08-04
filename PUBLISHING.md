# Publishing Guide

This guide will help you publish your `create-next-shadcn-mongo` package to npm.

## Prerequisites

1. **npm account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm CLI**: Make sure you have npm installed and are logged in:
   ```bash
   npm login
   ```

## Before Publishing

1. **Update package information** in `package.json`:
   - Change `author` field to your information
   - Update `repository.url` to your GitHub repository
   - Ensure version is correct
   - Update description if needed

2. **Test the package locally**:
   ```bash
   npm run build-template
   node bin/cli.js test-project -y
   ```

3. **Verify package contents**:
   ```bash
   npm pack --dry-run
   ```

## Publishing Steps

1. **Build the template**:
   ```bash
   npm run build-template
   ```

2. **Check package before publishing**:
   ```bash
   npm pack
   ```
   This creates a `.tgz` file you can inspect.

3. **Publish to npm**:
   ```bash
   npm publish
   ```

   For first-time publishing of a scoped package:
   ```bash
   npm publish --access public
   ```

## After Publishing

1. **Test the published package**:
   ```bash
   npx create-next-shadcn-mongo@latest my-test-app
   ```

2. **Update documentation** if needed

3. **Create a GitHub release** with the version tag

## Version Management

- **Patch release** (bug fixes): `npm version patch`
- **Minor release** (new features): `npm version minor`
- **Major release** (breaking changes): `npm version major`

Then republish:
```bash
npm publish
```

## Package Contents

The published package will include:
- `template/` - All project template files
- `bin/cli.js` - The CLI tool
- `index.js` - Main entry point
- `README.md` - Package documentation
- `LICENSE` - License file
- `package.json` - Package configuration

## Troubleshooting

### Common Issues

1. **Package name already exists**:
   - Change the package name in `package.json`
   - Use a scoped package: `@yourusername/create-next-shadcn-mongo`

2. **Permission denied**:
   - Make sure you're logged in: `npm whoami`
   - Check if you have publish rights

3. **Build fails**:
   - Ensure all dependencies are installed: `npm install`
   - Check that template files exist

### Testing Locally

You can test the package locally before publishing:

1. **Pack the package**:
   ```bash
   npm pack
   ```

2. **Install globally from the pack**:
   ```bash
   npm install -g ./create-next-shadcn-mongo-1.0.0.tgz
   ```

3. **Test the command**:
   ```bash
   create-next-shadcn-mongo my-test-app
   ```

4. **Uninstall when done**:
   ```bash
   npm uninstall -g create-next-shadcn-mongo
   ```

## Maintenance

### Updating Dependencies

Regularly update the template dependencies in `templateDependencies` and `templateDevDependencies`:

1. Check for updates:
   ```bash
   npm outdated
   ```

2. Update package.json with new versions

3. Test with the new dependencies

4. Publish a new version

### Adding New Features

1. Update template files in `template/` directory
2. Modify `bin/cli.js` if needed
3. Update documentation
4. Test thoroughly
5. Bump version and publish

## Example Workflow

```bash
# 1. Make changes to template or CLI
# 2. Test locally
npm run build-template
node bin/cli.js test-app -y

# 3. Update version
npm version patch

# 4. Build and publish
npm run build-template
npm publish

# 5. Test published version
npx create-next-shadcn-mongo@latest final-test
```

That's it! Your package is now available for the world to use. 🎉
