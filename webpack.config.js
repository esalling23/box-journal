const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');
const path = require('path');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Remove existing rules about SVG and inject our own
  // (Inspired by https://github.com/storybookjs/storybook/issues/6758#issuecomment-495598635)
  config.module.rules = config.module.rules.map(rule => {
    if (rule.oneOf) {
      let hasModified = false;

      const newRule = {
        ...rule,
        oneOf: rule.oneOf.map(oneOfRule => {
          if (oneOfRule.test && oneOfRule.test.toString().includes('svg')) {
            hasModified = true;
            const test = oneOfRule.test.toString().replace('|svg', '');
            return { ...oneOfRule, test: new RegExp(test) };
          } else {
            return oneOfRule;
          }
        })
      };

      // Add new rule to use svgr
      // Place at the beginning so that the default loader doesn't catch it
      if (hasModified) {
        newRule.oneOf.unshift({
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: '@svgr/webpack',
            }
          ]
        });
      }

      return newRule;
    } else {
      return rule;
    }
  });
  config.module.rules.push(
    {
      test: /\.m?js$/,
      include: [
        path.resolve(__dirname, 'node_modules/@rneui/base'),
        path.resolve(__dirname, 'node_modules/@rneui/themed'),
        path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
        path.resolve(__dirname, 'node_modules/react-native-ratings'),
        path.resolve(__dirname, 'src'),
      ],
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
  })
  config.resolve.fallback = {
    url: require.resolve('url'),
    fs: false,
    tls: false,
    assert: require.resolve('assert'),
    https: require.resolve('https-browserify'),
    os: require.resolve('os-browserify/browser'),
  };
  config.module.exprContextCritical = false;
  return config;
};