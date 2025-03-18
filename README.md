
```markdown
# Wallpaper Ecommerce Store

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- **pnpm** (Package Manager)
- **Node.js**
- **Git**

### Installation on macOS / Linux
Run the following command to install **pnpm**, **Node.js**, and **Git**:
```sh
brew install pnpm node git
```

### Installation on Windows
If you are using **Windows**, you can install these packages using **Scoop**:
1. Install **Scoop** (if not already installed):
   ```powershell
   iwr -useb get.scoop.sh | iex
   ```
2. Install the required packages:
   ```powershell
   scoop install pnpm node git
   ```

## Project Setup

1. **Navigate to the project directory:**
   ```sh
   cd Wallpaper-Ecommerce-Store
   ```
2. **Install project dependencies:**
   ```sh
   pnpm i
   ```
3. **Install Prisma CLI as a dev dependency:**
   ```sh
   pnpm add -D prisma
   ```
4. **Install Prisma Client:**
   ```sh
   pnpm add @prisma/client
   ```
5. **Generate Prisma Client:**
   ```sh
   pnpm prisma generate
   ```
6. **Push schema to the database:**
   ```sh
   pnpm prisma db push
   ```
7. **Start the development server:**
   ```sh
   pnpm run dev
   ```

## Notes
- Ensure your database is set up correctly before running `pnpm prisma db push`.
- If you encounter any issues, ensure you have the correct environment variables configured in `.env`.

## Contributing
Feel free to fork this repository, make changes, and submit a pull request.

---
Happy coding! 🚀
```

