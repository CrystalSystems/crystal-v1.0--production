[<img src="https://shedov.top/ru/wp-content/images/logo_crystal-v1.0_github_25.png">](https://shedov.top/description-and-capabilities-of-crystal-v1-0/)

[![Discord](https://img.shields.io/discord/1006372235172384849?style=for-the-badge&logo=5865F2&logoColor=black&labelColor=black&color=%23f3f3f3
)](https://discord.gg/ENB7RbxVZE)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&logo=5865F2&logoColor=black&labelColor=black&color=%23f3f3f3)](https://github.com/CrystalSystems/crystal-v1.0/blob/main/LICENSE)

This version CRYSTAL v1.0 is deployed in a production environment as of 07/19/2025 and is functionally identical to the regular [CRYSTAL v1.0](https://github.com/CrystalSystems/crystal-v1.0). However, it includes several key enhancements aimed at improving reliability, security, and stability:

### Secure database connection
The backend connects to MongoDB using authentication parameters (`USER`, `PASSWORD`, `authSource`), ensuring protection against unauthorized access and aligning with production best practices.

### Automatic MongoDB connection retry logic
Implemented automatic retry logic for MongoDB connection failures, with customizable retry count (`MAX_RETRIES`) and delay (`RETRY_DELAY`) between attempts. This increases application resilience during temporary database outages.

### Extended `.env` configuration  
This version introduces a more flexible and detailed `.env` structure, allowing precise configuration across different environments such as development and production.

### Enhanced connection logging
Improved database connection logging with visual cues and detailed status messages — making debugging and monitoring easier in production environments.

**⚠️ Before using [CRYSTAL v1.0 (prod)](https://github.com/CrystalSystems/crystal-v1.0--prod) or its code in a production environment, it is strongly recommended to carefully review the implementation and assess any potential cybersecurity risks.**<br/>

[CRYSTAL](https://crysty.ru/) | [shedov.top](https://shedov.top/) | [Discord](https://discord.gg/ENB7RbxVZE) | [Telegram](https://t.me/ShedovChannel) | [X](https://x.com/AndrewShedov) | [VK](https://vk.com/shedovclub) | [VK Video](https://vkvideo.ru/@shedovclub) | [YouTube](https://www.youtube.com/@AndrewShedov)

<h3 align="center">CRYSTAL is tested on</h3>

<p align="center">
  <a href="https://www.browserstack.com/">
    <img src="https://shedov.top/wp-content/images/browserstack-logo-global.svg" width="290" />
  </a>
</p>
