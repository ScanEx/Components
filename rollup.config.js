import pkg from './package.json';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import css from 'rollup-plugin-css-porter';
import {string} from 'rollup-plugin-string';

export default [
    {
        input: 'example/App.js',
        output: { 
            file: 'public/main.js',
            format: 'iife',
            sourcemap: true,
            name: 'Example',
            globals: {
                 T: '@scanex/translations'	
            },
        },
        plugins: [                        
            resolve(),
            commonjs(),
            json(),
            string({
                include: "**/*.txt",
            }),
            css({dest: 'public/main.css', minified: false}),            
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['example/App.js', 'src/**', 'node_modules/**']
            }),
        ],
    },
    {
        input: pkg.module,
        output: { 
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            json(),
            resolve({
                dedupe: [
                    '@scanex/event-target',
                    '@scanex/translations',
                    'core-js',
                ]
            }),
            commonjs(),
            css({dest: 'dist/scanex-components.css', minified: false}),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.mjs'],
                exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
                include: ['src/**', 'node_modules/**']
            }),
        ],
    },
];