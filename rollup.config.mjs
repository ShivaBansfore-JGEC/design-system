import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import { format, parse } from 'path';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import styles from 'rollup-plugin-styles';
import pkg from './package.json' assert { type: 'json' };

const getTypesPath = (jsFile) => {
    const pathInfo = parse(jsFile);
    return format({
        ...pathInfo,
        base: '',
        dir: `${pathInfo.dir}/types`,
        ext: '.d.ts',
    });
};

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                interop: 'compat',
                exports: 'named',
                sourcemap: true,
                inlineDynamicImports: true,
            },
            {
                file: pkg.module,
                format: 'esm',
                exports: 'named',
                sourcemap: true,
                inlineDynamicImports: true,
            },
        ],
        external: ['react', 'react-dom'],
        plugins: [
            external(),
            resolve({
                browser: true,
            }),
            url(),
            styles({
                mode: 'inject'
            }),
            json(),
            commonjs({
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            }),
            typescript(),
            terser(),
        ],
    },
    {
        input: getTypesPath(pkg.module ?? pkg.main),
        output: [
            {
                file: pkg.types,
                format: 'esm',
            },
        ],
        external: [/\.(sass|scss|css)$/] /* ignore style files */,
        plugins: [dts()],
    },
];