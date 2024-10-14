# Pharus Front-end Assignment

## Overview

This project is a chat interface and a data visualization chart according to the specified design and guidelines. The application is designed to be responsive and uses the following technologies:

- React.js
- MUI (Material-UI)
- Context API
- Hooks
- Axios
- Apache ECharts

## Features

### Task 1: Chat Interface

- A chat interface located on the right side of the view.
- Auto-populates a response using a random text generator API for each sent message.
- The chat can be collapsed by clicking the "X" in the top right corner.
- A purple button in the bottom right shows the chat when clicked.
- Chat history is saved in the session, containing:
  - Message
  - User who sent the message
  - Timestamp

### Task 2: Double Vertical Bar Chart

- Displays data fetched from an API using a double vertical bar chart.
- Tooltip shows data for each bar on hover, reducing the transparency of other bars to highlight the hovered bar.
- A large number at the top represents the total revenue from all periods combined.

### Additional Features

- Two contexts are created for managing chat and chart states.
- Effective state management using React Hooks.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-name>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

1. Run the project:
   ```bash
   npm run dev
   ```
