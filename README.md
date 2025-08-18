[<img src="https://shedov.top/ru/wp-content/images/logo_crystal-v1.0_github_25.png">](https://shedov.top/description-and-capabilities-of-crystal-v1-0/)

[![Discord](https://img.shields.io/discord/1006372235172384849?style=for-the-badge&logo=5865F2&logoColor=black&labelColor=black&color=%23f3f3f3
)](https://discord.gg/ENB7RbxVZE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&logo=5865F2&logoColor=black&labelColor=black&color=%23f3f3f3)](https://github.com/CrystalSystems/crystal-v1.0/blob/main/LICENSE)

## CRYSTAL v1.0 (Production) - current production version as of July 19, 2025

#### This version is functionally identical to the regular [CRYSTAL v1.0](https://github.com/CrystalSystems/crystal-v1.0). However, it includes several key enhancements aimed at improving reliability, security, and stability:

#### 1. Secure database connection.
In the production environment, the backend [connects](https://github.com/CrystalSystems/crystal-v1.0--production/blob/544bfffa9c1b06b081d2be622a9190030ca0444d/backend/src/core/engine/db/connectDB.js#L22) to MongoDB using authentication parameters (`user`, `password`, `authSource`), ensuring protection against unauthorized access.

#### 2. Automatic reconnection to MongoDB.
Implemented an automatic reconnection [mechanism](https://github.com/CrystalSystems/crystal-v1.0--production/blob/4700679e84b8683fd5414d1700df99f7a145879e/backend/src/core/engine/db/connectDB.js#L14) for MongoDB in case of connection failures. It supports customizable retry count (`maxRetries`) and delay (`retryDelay`) between attempts, improving application resilience during temporary database outages.

#### 3. Extended `.env` configuration. 
This version introduces a more flexible and detailed `.env` [structure](https://github.com/CrystalSystems/crystal-v1.0--production/tree/main/backend/src/shared/constants), allowing for fine-grained customization in development and production environments.

#### 4. Advanced MongoDB connection logging.
Connection to the database is performed with detailed [logging](https://github.com/CrystalSystems/crystal-v1.0--production/blob/6b1bdc59fffe20d38d56a00459926a72fe5326bb/backend/src/core/engine/db/connectDB.js#L29) and status [messages](https://github.com/CrystalSystems/crystal-v1.0--production/blob/6b1bdc59fffe20d38d56a00459926a72fe5326bb/backend/src/core/engine/db/connectDB.js#L34) - this simplifies debugging and monitoring in development and production environments.

#### 5. Improved error handling.  
A custom `handleServerError` [helper](https://github.com/CrystalSystems/crystal-v1.0--production/blob/main/backend/src/shared/helpers/handle-server-error/handle-server-error.js) was introduced to standardize backend error responses and improve debugging during development.  
This function captures the context in which the error occurred (even if not explicitly provided), logs detailed information to the console, and adjusts the HTTP response based on the environment:  
- In **production**, it returns a generic 500 error message without exposing sensitive details.  
- In **development**, it returns the full error object including stack trace and calling context - making it easier to trace and fix issues.

**⚠️ Before using [CRYSTAL v1.0 (Production)](https://github.com/CrystalSystems/crystal-v1.0--production) or its code in a production environment, it is strongly recommended to carefully review the implementation and assess any potential cybersecurity risks.**<br/>

[SHEDOV.TOP](https://shedov.top/) | [CRYSTAL](https://crysty.ru/AndrewShedov) | [Discord](https://discord.gg/ENB7RbxVZE) | [Telegram](https://t.me/ShedovChannel) | [X](https://x.com/AndrewShedov) | [VK](https://vk.com/shedovclub) | [VK Video](https://vkvideo.ru/@shedovclub) | [YouTube](https://www.youtube.com/@AndrewShedov)

<h3 align="center">CRYSTAL is tested on</h3>

<p align="center">
  <a href="https://www.browserstack.com/">
    <img src="https://shedov.top/wp-content/images/browserstack-logo-global.svg" width="290" />
  </a>
</p>
