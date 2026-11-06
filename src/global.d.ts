interface PendoVisitor {
  id: string;
  email?: string;
  full_name?: string;
  [key: string]: unknown;
}

interface PendoAccount {
  id: string;
  name?: string;
  [key: string]: unknown;
}

interface PendoOptions {
  visitor?: PendoVisitor;
  account?: PendoAccount;
  location?: {
    transforms: Array<{
      attr: string;
      action: string;
      data?: unknown;
    }>;
  };
}

interface Pendo {
  initialize(options?: PendoOptions): void;
  identify(options?: PendoOptions): void;
  updateOptions(options?: PendoOptions): void;
  pageLoad(): void;
  track(event: string, properties?: Record<string, unknown>): void;
  clearSession(): void;
}

declare let pendo: Pendo;
