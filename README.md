# DealBuddy (Backend currently down due to heroku changing pricing)

## Overview

DealBuddy is a web application that provides users with real-time information about video game sales. It utilizes the CheapShark API to fetch individual video game prices and a web scraper built with Puppeteer to extract data from Humble Bundle, a popular platform for purchasing game bundles at discounted prices. With DealBuddy, users can stay informed about ongoing and upcoming game deals, as well as set up personalized alerts for specific titles.

## Features

- **Video Game Prices:** DealBuddy fetches real-time individual game prices from the CheapShark API, ensuring users have up-to-date information on game discounts.

- **Game Bundle Information:** The web scraper component extracts details about game bundles from Humble Bundle, providing users with comprehensive insights into ongoing and upcoming bundle sales.

- **User Registration and Authentication:** Users can create accounts and securely log in to DealBuddy, allowing for a personalized experience with the ability to save preferences and set up custom alerts.

- **Alert System:** DealBuddy enables users to set up alerts for specific games. When a targeted game goes on sale, users receive notifications, ensuring they never miss an opportunity to grab their favorite titles at discounted prices.

## Technologies Used

DealBuddy is built using the following technologies:

- **React:** A JavaScript library for building user interfaces, providing a responsive and interactive front-end experience.

- **Node.js:** A runtime environment for executing JavaScript on the server side, powering the back-end of the application.

- **CheapShark API:** Used to fetch real-time individual video game prices.

- **Puppeteer:** A Node library that provides a high-level API to control headless browsers, allowing for web scraping capabilities to extract game bundle information from Humble Bundle.
