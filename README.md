# Symfony-Angular-Dockerization Demo

This project demonstrates a dockerized application using Symfony, Angular, and MySQL. It includes a test site built with Symfony and Twig, as well as a small Angular application.

## Project Structure

- Symfony application: Located in the `app` directory
- Angular application: Located in the `panier` directory
- Docker configuration files: In the root directory and `docker` subdirectories

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/timlapov/symfony-angular-dockerization.git
   cd symfony-angular-dockerization
   ```

2. Create a `.env.local` file in the root directory and add any necessary environment-specific configurations. I propose an .env file with test data.

3. Build and start the Docker containers:
   ```
   docker-compose up -d
   ```

4. The applications will be available at:
   - Symfony app: http://localhost:8081
   - Angular app: http://localhost:4200
   - PHPMyAdmin: http://localhost:8080

## Services

- **nginx**: Web server for the Symfony application
- **php-fpm**: PHP-FPM service for Symfony
- **php-cli**: PHP CLI service for Composer and other command-line tasks
- **mysql**: MySQL database server
- **phpmyadmin**: PHPMyAdmin for database management
- **angular-1**: Angular application
- **backup**: Automated daily database backups

## Configuration

The main configuration is in the `docker-compose.yml` file. Environment variables are stored in the `.env` file.

**Note**: For demonstration purposes, database credentials and other sensitive information are included in the repository. In a production environment, these should be kept secure and not committed to version control.

## Database

- The MySQL database is automatically set up with the credentials specified in the `.env` file.
- PHPMyAdmin is configured for automatic login.
- Daily backups are created and stored in the `backups` directory.

## Development

- Symfony files are located in the `app` directory and are mounted as a volume in the Docker containers.
- The Angular application is in the `panier` directory and has its own Dockerfile for building and serving the app.

## Customization

You can modify the `.env` file to change project names, database credentials, and other configuration options.

## Security Notice

This project is a demonstration of Docker containerization and includes exposed database credentials and automatic PHPMyAdmin login for ease of use. In a production environment, ensure proper security measures are implemented, including:

- Secure handling of credentials
- Proper network isolation
- Regular security audits

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or fixes.

## License

This project is open-source and available under the MIT License.
