import js from '@eslint/js';
import ts from 'typescript-eslint';
export default ts.config({ignores:['dist/**','node_modules/**']}, js.configs.recommended, {files:['scripts/*.mjs'],languageOptions:{globals:{process:'readonly',URL:'readonly'}}}, ...ts.configs.recommended, {files:['**/*.{ts,tsx}'], languageOptions:{globals:{window:'readonly',document:'readonly',URL:'readonly',console:'readonly'}}});

