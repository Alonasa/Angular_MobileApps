# Recipe Finder Mobile Application
A cross-platform mobile app using the **Ionic Framework** and **Angular**, that allows users to find recipes based on what they have at home to cook with. This project interfaces with the **Spoonacular API** for access to real-time cooking information.
## 🚀Key Features
- **Ingredient Search** - allows users to find recipes using one or more ingredients by typing them into the text box as comma-separated values.
- **Endless/Infinite Scrolling** - users continue to scroll to view more recipes dynamically loaded while scrolling through their search.
- **Recipe Information** - complete recipe details including step-by-step formatted instructions and dietary labels for each recipe.
- **Dynamic Measurement Units** - users can set the measurement system of their choice (e.g. Metric or U.S.) in their app settings and see the appropriate measurement values throughout their app automatically.
- **Favorites List** - users can create a list of their favorite recipes, as well as have their list saved for future reference; anytime they want to view their list of favorites it will be easily accessible.
- **Enhanced User Experience** - "Skeleton Screens" have been included in addition to "Loading Controllers" to help produce smoother visual transitions while performing API calls.

## 🛠️Technical Stack
- **Framework**: Ionic 7.2.1 / Angular 20.0
- **Language**: **TypeScript** (Strictly Typed especially on the API communication part)
- **State & Persistence**: `@ionic/storage-angular` used for persistent data storage (e.g. Favorite Recipes and User App Settings).
- **API Integration**: RESTful API integration using Angular's `HttpClient`.
- **UI/UX**: The use of a responsive grid system (a.k.a. Adaptive Markup) ensures that your app looks great on any mobile device as well as on any desktop computer.

## 📁 Project Structure
- `src/app/home`: Main search interface and results grid.
- `src/app/recipe`: Detailed recipe view with measurement logic.
- `src/app/favorites`: Saved recipes management.
- `src/app/settings`: User preference configuration (Units/Metrics).
- `src/app/services`: Logic for API calls and Storage management.
