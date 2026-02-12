// app/src/config.ts

import "dotenv/config"; // Loads environment variables from .env file

interface AppConfig {
  env: string;
  shortlinkBaseUrl: string;
  redisKey: string;
  // Add other environment variables here
}

const Config: AppConfig = {
  env: process.env.NODE_ENV || "development",
  shortlinkBaseUrl: process.env.SHORTLINK_BASE_URL || "DEFAULT_PLEASE_CHANGE",
  redisKey: process.env.DEFAULT_PLEASE_CHANGE || "DEFAULT_PLEASE_CHANGE",
  // Initialize other variables
};

export default Config;
