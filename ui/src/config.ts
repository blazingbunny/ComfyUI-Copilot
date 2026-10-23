// Copyright (C) 2025 AIDC-AI
// Licensed under the MIT License.

const isDevelopment = import.meta.env.MODE === 'development'

// Dev server runs the backend separately on :8000.
const devApiBaseUrl = 'http://localhost:8000'

// Production: the UI is served by ComfyUI itself at /copilot_web/ and the
// backend routes are mounted on ComfyUI's PromptServer, so the default must be
// same-origin (relative). An absolute URL here sends /api/* to a remote host.
const defaultApiBaseUrl = ''

export const github_url = 'https://github.com/AIDC-AI/ComfyUI-Copilot'

export const config = {
  apiBaseUrl: isDevelopment 
    ? devApiBaseUrl 
    : (import.meta.env.VITE_API_BASE_URL ?? defaultApiBaseUrl)
} 