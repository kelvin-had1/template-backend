module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['module-resolver', {
        alias: {          
          '@modules': './src/modules',
          '@shared': './src/shared'          
        }
      }],
      'babel-plugin-transform-typescript-metadata',
    ],
    ignore: [
      '**/*.spec.ts'
    ]
}