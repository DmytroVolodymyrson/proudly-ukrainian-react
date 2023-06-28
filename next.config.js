/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');
const {FileSystemIconLoader} = require('unplugin-icons/loaders');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
	i18n,
	reactStrictMode: true,
	webpack(config) {
		config.plugins.push(
			require('unplugin-icons/webpack')({
				compiler: 'jsx',
				jsx: 'react',
				customCollections: {
					// eslint-disable-next-line new-cap
					pu: FileSystemIconLoader('assets/icons', svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')),
				},
			}),
		);

		return config;
	},

});

