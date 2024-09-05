export interface ZeroxArgs {
  cleanup?: boolean;
  concurrency?: number;
  filePath: string;
  maintainFormat?: boolean;
  model?: ModelOptions;
  openaiAPIKey?: string;
  outputDir?: string;
  tempDir?: string;
  llmParams?: LLMParams;
}

export enum ModelOptions {
  gpt_4o = "gpt-4o",
  gpt_4o_mini = "gpt-4o-mini",
}

export interface Page {
  content: string;
  contentLength: number;
  page: number;
}

export interface ZeroxOutput {
  completionTime: number;
  fileName: string;
  inputTokens: number;
  outputTokens: number;
  pages: Page[];
}

export interface CompletionResponse {
  content: string;
  inputTokens: number;
  outputTokens: number;
}

export interface CompletionArgs {
  apiKey: string;
  imagePath: string;
  maintainFormat: boolean;
  model: ModelOptions;
  priorPage: string;
  llmParams?: LLMParams;
}

export interface LLMParams {
  temperature?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  max_tokens?: number;
}
