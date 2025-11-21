// src/config.// src/config.ts

export interface ApiConfig {
  baseUrl: string;
}

export interface ObservabilityConfig {
  connectionString: string;
}

export interface AppConfig {
  api: ApiConfig;
  observability: ObservabilityConfig;
}

// Default fallbacks
const DEFAULT_API_BASE_URL = 'http://localhost:3100';
const DEFAULT_APPINSIGHTS_CONNECTION_STRING = '';

const config: AppConfig = {
  api: {
    baseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? DEFAULT_API_BASE_URL,
  },
  observability: {
    connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING ?? DEFAULT_APPINSIGHTS_CONNECTION_STRING,
  },
};

export default config;