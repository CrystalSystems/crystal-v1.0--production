[<img src="https://raw.githubusercontent.com/CrystalSystems/crystal-v1.0--production/refs/heads/main/assets/crystal-v1.0_logo.png">](https://shedov.top/description-and-capabilities-of-crystal-v1-0/)

[![Members](https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=&logo=discord&logoColor=white&labelColor=black&color=%23f3f3f3&query=$.approximate_member_count&url=https%3A%2F%2Fdiscord.com%2Fapi%2Finvites%2FENB7RbxVZE%3Fwith_counts%3Dtrue)](https://discord.gg/ENB7RbxVZE)&nbsp;[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&logo=5865F2&logoColor=black&labelColor=black&color=%23f3f3f3)](https://github.com/CrystalSystems/crystal-v1.0--production/blob/main/LICENSE)<br/>
[![About_project](https://img.shields.io/badge/About_project-black?style=for-the-badge)](https://shedov.top/about-the-crystal-project)&nbsp;[![Documentation](https://img.shields.io/badge/Documentation-black?style=for-the-badge)](https://shedov.top/documentation-crystal/)&nbsp;[![Developer’s Diary](https://img.shields.io/badge/Developer’s_Diary-black?style=for-the-badge)](https://shedov.top/category/crystal/crystal-developers-diary/)

## CRYSTAL v1.0 (Production)

This version is functionally identical to the base [CRYSTAL v1.0](https://github.com/CrystalSystems/crystal-v1.0), but it includes several improvements aimed at increasing reliability, security, and stability.<br/>
You can deploy and test CRYSTAL v1.0 (Production) on a
[local PC](https://shedov.top/instructions-for-deploying-crystal-v1-0-on-a-local-pc/) or on a [VPC](https://shedov.top/instructions-for-deploying-crystal-v1-0-on-vpc-and-setting-up-access-to-the-website-via-public-ip/) following the [instructions](https://shedov.top/documentation-crystal-v1-0/) for regular version, but additionally, it is necessary to define env variables based on [these examples](https://github.com/CrystalSystems/crystal-v1.0--production/tree/main/examples/env).

**Architecture:** <br/>
SPA, REST API, FSD.

**Composition:** <br/>
[Full code](https://github.com/CrystalSystems/crystal-v1.0--production/tree/main/main) | Package.json: [frontend](https://github.com/CrystalSystems/crystal-v1.0--production/blob/main/main/frontend/package.json) | [backend](https://github.com/CrystalSystems/crystal-v1.0--production/blob/main/main/backend/package.json)<br/>

**Structure:** <br/>
**M**ongoDB v8.0.4.<br/>
**E**xpress.js v4.21.2.<br/>
**R**eact v19.0.0.<br/>
**N**ode.js v24.0.2.<br/>
NPM v11.3.0.<br/>
PM2 v5.4.3.<br/>
Vite v6.1.0.<br/>

**Improvements:** <br/>
**1. Secure database connection** <br/>
In the production environment, the backend [connects](https://github.com/CrystalSystems/crystal-v1.0--production/blob/544bfffa9c1b06b081d2be622a9190030ca0444d/backend/src/core/engine/db/connectDB.js#L22) to MongoDB using authentication parameters (`user`, `password`, `authSource`), ensuring protection against unauthorized access.

**2. Automatic reconnection to MongoDB** <br/>
Implemented an automatic reconnection [mechanism](https://github.com/CrystalSystems/crystal-v1.0--production/blob/4700679e84b8683fd5414d1700df99f7a145879e/backend/src/core/engine/db/connectDB.js#L14) for MongoDB in case of connection failures. It supports customizable retry count (`maxRetries`) and delay (`retryDelay`) between attempts, improving application resilience during temporary database outages.

**3. Extended env variables configuration** <br/> 
This version introduces a more flexible and detailed env variables [structure](https://github.com/CrystalSystems/crystal-v1.0--production/tree/main/main/backend/src/shared/constants), allowing for fine-grained customization in development and production environments.

**4. Advanced MongoDB connection logging** <br/>
Connection to the database is performed with detailed [logging](https://github.com/CrystalSystems/crystal-v1.0--production/blob/6b1bdc59fffe20d38d56a00459926a72fe5326bb/backend/src/core/engine/db/connectDB.js#L29) and status [messages](https://github.com/CrystalSystems/crystal-v1.0--production/blob/6b1bdc59fffe20d38d56a00459926a72fe5326bb/backend/src/core/engine/db/connectDB.js#L34) - this simplifies debugging and monitoring in development and production environments.

**5. Improved error handling** <br/> 
A custom `handleServerError` [helper](https://github.com/CrystalSystems/crystal-v1.0--production/blob/main/main/backend/src/shared/helpers/handle-server-error/handle-server-error.js) was introduced to standardize backend error responses and improve debugging during development.  
This function captures the context in which the error occurred (even if not explicitly provided), logs detailed information to the console, and adjusts the HTTP response based on the environment:  
- In **production**, it returns a generic 500 error message without exposing sensitive details.  
- In **development**, it returns the full error object including stack trace and calling context - making it easier to trace and fix issues.

**⚠️ Before using [CRYSTAL v1.0 (Production)](https://github.com/CrystalSystems/crystal-v1.0--production) or its code in a production environment, it is strongly recommended to carefully review the implementation and assess any potential cybersecurity risks.**<br/>

<h3 align="center">CRYSTAL is tested on</h3>
<p align="center">
  <a href="https://www.browserstack.com/">
    <img src="https://raw.githubusercontent.com/CrystalSystems/crystal-v1.0--production/eae791ae0fc1fd4ebcdac588ca8a03a06f13abe3/assets/browserstack_logo.svg" width="290" />
  </a>
</p>

[![SHEDOV.TOP](https://img.shields.io/badge/SHEDOV.TOP-black?style=for-the-badge)](https://shedov.top/) 
[![CRYSTAL](https://img.shields.io/badge/CRYSTAL-black?style=for-the-badge)](https://crystal.you/AndrewShedov)
[![Discord](https://img.shields.io/badge/Discord-black?style=for-the-badge&logo=discord&color=black&logoColor=white)](https://discord.gg/ENB7RbxVZE)
[![Telegram](https://img.shields.io/badge/Telegram-black?style=for-the-badge&logo=telegram&color=black&logoColor=white)](https://t.me/ShedovTop)
[![X](https://img.shields.io/badge/%20-black?style=for-the-badge&logo=x&logoColor=white)](https://x.com/AndrewShedov)
[![VK](https://img.shields.io/badge/VK-black?style=for-the-badge&logo=vk)](https://vk.com/ShedovTop)
[![VK Video](https://img.shields.io/badge/VK%20Video-black?style=for-the-badge&logo=vk)](https://vkvideo.ru/@ShedovTop)
[![YouTube](https://img.shields.io/badge/YouTube-black?style=for-the-badge&logo=youtube)](https://www.youtube.com/@AndrewShedov)
