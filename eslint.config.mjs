// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig(
  {
    plugins: {
      '@stylistic': stylistic
    }
  },
  js.configs.recommended,
  tseslint.configs.recommended,
);
