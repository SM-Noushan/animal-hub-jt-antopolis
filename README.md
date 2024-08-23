# AnimalHub: Discover, Filter, and Expand the World of Animals!

## Project Overview

AnimalHub is a platform where users can explore a diverse collection of animals, filter them by categories, and contribute by adding new animals and categories to the growing database.

- [Live-Site](https://animalhub-by-sm-nowshan.vercel.app)
- [Server-Repo](https://github.com/sm-noushan/animal-hub-server-jt-antopolis)

## Key Features

### 1. Filtering

- **Categorize Animal**: Users can filter animals by name, allowing them to quickly find specific animal within a short time.

### 2. New Addition

- **New Animals**: User can contribute by entering name, image and category.
- **New Category**: User can add new category.

## Technologies Used

- **Front-End**: Developed using NextJS, and TailwindCSS for a responsive and interactive user experience.
- **Back-End**: Powered by Node.js and Express for robust server-side logic and efficient data handling.
- **Database**: Integrated with MongoDB for flexible and scalable data storage and retrieval.

## Run the Project Locally

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (LTS version recommended)

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/SM-Noushan/animal-hub-jt-antopolis
   cd animal-hub-jt-antopolis
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env.local` file in the root directory and add the following environment variables. (**Important!**)

   ```sh
   NEXT_PUBLIC_BASE_API_URL =
   NEXT_PUBLIC_VITE_IMGBB_API_KEY =
   ```

4. **Set Up Server**: For detailed information, refer to the [Setup](https://github.com/sm-noushan/jtask-ph-server) in the back-end repository's `README.md`. (**Important!**)

5. **Run the Application**:

   ```sh
   npm run dev
   ```

6. **Access the Site**: Open your browser and go to `http://localhost:3000/` or `http://192.168.1.12:3000/` from other devices on the same network to view the application.

<br/>
<details>
    <summary>Thank you!</summary>
</details>
