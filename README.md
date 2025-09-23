# LinkForge 🔗

The ultimate open-source tool for creating, managing, and sharing shortened links.

---

🌟 ## Overview

LinkForge is a web application designed to solve the problem of long, unwieldy URLs. Whether you're a developer, a marketer, or just someone who wants to manage links more effectively, LinkForge provides the tools you need to create clean, trackable, and professional-looking links.

---

✨ ## Features

* 🔗 **Link Shortening**: Create clean, short, and memorable links from long URLs.
* 📊 **Analytics Dashboard**: Track click-through rates, referral sources, and geographic data.
* 🚀 **Fast & Lightweight**: Built for performance and a smooth user experience.
---

🛠️ ## Technologies Used

* **Frontend**: [React + Vite]
* **Backend**: Spring Boot, [Java 17+]
* **Database**: [PostgreSQL]
* **Deployment**: [Docker, Render, Netlify]
* **Other**: [Maven, Lombok, JWT]
---

🚀 ## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:
* [Java (v17 or later)]
* [Maven]
* [Node.js (v18.x or later)]
* [npm]
* [Git]

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/kmanish527/LinkForge.git](https://github.com/kmanish527/LinkForge.git)
    cd linkforge
    ```

2.  **Install frontend dependencies:**
    ```bash
    # Navigate to your frontend directory
    # cd linkforge-frontend
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root/frontend directory and add the necessary configuration. Copy the example file to get started:
    ```bash
    cp .env.example .env
    ```
    Now, open `.env` and fill in your details (e.g., VITE_BACKEND_URL, VITE_REACT_FRONT_END_URL).

4.  **Run the application:**

    * **Backend (Spring Boot):**
        * **Using the command line:**
            Navigate to the backend directory and run the following command to start the server:
            ```bash
            ./mvnw spring-boot:run
            ```
            
          or
        * **Using IntelliJ IDEA:**
            1.  Open IntelliJ IDEA.
            2.  Select `File > Open...` and navigate to the root directory of the backend project.
            3.  Allow IntelliJ to import the project and resolve Maven dependencies.
            4.  Locate the main application class (e.g., `LinkforgeBackendApplication.java`).
            5.  Right-click on the file and select `Run 'LinkforgeBackendApplication'`.
               
          The backend server should now be running on `http://localhost:8081`.
          
    * **Frontend:**
        In a separate terminal, navigate to the frontend directory and run:
        ```bash
        npm run dev
        ```
        The frontend application should now be running on `http://localhost:5173`.

---

## Live Link and Screenshot

**Home Page**
<img width="1901" height="909" alt="image" src="https://github.com/user-attachments/assets/0edd00f4-538c-48b2-b10a-cb38cf449af7" />


**SignUp Page**
<img width="1916" height="908" alt="image" src="https://github.com/user-attachments/assets/5a7f0875-7a46-4d13-8327-6899e3d1e42f" />

**Login Page**
<img width="1914" height="903" alt="image" src="https://github.com/user-attachments/assets/86e66a13-7f22-43d3-9a26-b52931170b93" />

**Dashboard**
<img width="1901" height="825" alt="image" src="https://github.com/user-attachments/assets/90e9ba30-b8ec-45d4-b0d2-aac4460f256c" />

**Loading Animation**
<img width="1898" height="907" alt="image" src="https://github.com/user-attachments/assets/cffc53f7-7b4c-423d-ad68-a6cbe975a75b" />

---

# LiveLink
[https://linkkforge.netlify.app/](https://linkkforge.netlify.app/)



