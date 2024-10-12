This project is a React application that fetches and displays the Astronomy Picture of the Day (APOD) from NASA's API.

## Table of Contents

- [Live Site](#live-site)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Live Site

You can view the live site [here](https://codynego-nasa-apod.netlify.app/).

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/codynego/react-nasa-apod.git
    ```
2. Navigate to the project directory:
    ```sh
    cd react-nasa-apod
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Create a `.env` file in the root of the project and add your NASA API key:
    ```env
    VITE_META_API_KEY=your_api_key_here
    ```
2. Start the development server:
    ```sh
    npm run dev
    ```
3. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Features

- Fetches the Astronomy Picture of the Day from NASA's API.
- Displays the picture along with its title and description.
- Responsive design for mobile and desktop views.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.