
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

const config: AppConfig = {
  api: {
    baseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'http://localhost:3100',
  },
  observability: {
    connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING ?? '',
  },
};

export default config;