# Music Player Application

This application is a Java-based music player with database integration using JDBC and MySQL. The player allows users to manage music tracks stored in a MySQL database, with functionalities such as playing, pausing, and controlling volume. Maven is used for project management and dependency handling.

## Features
- **Play, Pause, Stop**: Control music playback.
- **Track Management**: Store and fetch tracks from a MySQL database.
- **Volume Control**: Adjust the audio level.
- **Database Integration**: Use MySQL to store track details.
- **Maven**: Dependency management.

## Technologies Used
- **HTML** - Structure of the app.
- **CSS** - Styling for a polished look.
- **JavaScript** - Core functionality of the player.
- **Java**: Core application logic.
- **JDBC**: Database connectivity.
- **MySQL**: Store music track details.
- **Maven**: Project management and dependencies.

## Project Structure

Music-Player-Application/
│
├── pom.xml                  # Maven configuration file
├── README.md                # Project documentation
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── musicplayer/
│   │   │           ├── dao/
│   │   │           │   └── UserDAO.java         # Data Access Object for database operations
│   │   │           ├── models/
│   │   │           │   └── User.java            # User model class
│   │   │           └── servlets/
│   │   │               └── UserServlet.java     # Servlet to handle user requests
│   │   │
│   │   └── webapp/
│   │       ├── WEB-INF/
│   │       │   └── web.xml                      # Deployment descriptor for servlet configuration
│   │       ├── registration.jsp                 # JSP for user registration form
│   │       └── userProfile.jsp                  # JSP to display user data
│   │
│   └── test/
│       └── java/
│           └── com/
│               └── musicplayer/
│                   └── dao/
│                       └── UserDAOTest.java     # Unit tests for UserDAO class
│
└── target/                    # Compiled files (generated after build)
