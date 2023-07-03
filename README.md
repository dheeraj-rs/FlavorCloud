# Food Recipe App

This is a food recipe app developed using React with ViteJS. It allows users to search and discover various recipes and provides detailed information about each recipe.

## Environment Configuration

To run the app properly, you need to set up the following environment variables in a `.env` file at the root of your project:

```
VITE_APP_ID=<Your App ID>
VITE_APP_KEY=<Your App Key>
```

These variables are required for accessing certain features and services within the app.

### Setting up the environment variables

1. Create a file named `.env` at the root of your project.
2. Open the `.env` file and add the following lines:

```
VITE_APP_ID=<Your App ID>
VITE_APP_KEY=<Your App Key>
```

3. Replace `<Your App ID>` and `<Your App Key>` with the appropriate values. These values can be obtained by signing up for the respective services/APIs used in your app.

### API Keys

The `VITE_APP_ID` and `VITE_APP_KEY` environment variables are used to authenticate and access the APIs required by the app. Make sure to obtain valid API keys from the respective services and replace the placeholders in the `.env` file.

**Note**: It's important to keep your API keys secure and avoid committing them to version control systems like Git. Make sure to add the `.env` file to your project's `.gitignore` file to prevent accidental exposure of sensitive information.

## Installation

Follow the steps below to install and run the food recipe app:

1. Clone the repository:

```shell
git https://github.com/dheeraj-rs/FlavorCloud.git
```

2. Navigate to the project directory:

```shell
cd FlavorCloud
```

3. Install the dependencies using your preferred package manager. For example, with npm:

```shell
npm install
```

## Usage

To start the app locally, run the following command:

```shell
npm run dev
```

This will start the development server and open the app in your default browser.

## Build

To build the app for production, run the following command:

```shell
npm run build
```

This will create an optimized build of the app in the `dist` directory.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the Food Recipe App! If you have any questions or feedback, please don't hesitate to contact us.
