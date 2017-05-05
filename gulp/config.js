module.exports = {
	sass: {
		src:  './src/scss/**/*.scss',
		dest: './css',
		options: {
			dev : {
				noCache: true,
				compass: false,
				bundleExec: false,
				sourcemap: false,
				style: 'expanded'
  			}
		}
	},
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'Firefox >= 43',
			'Chrome >= 43',
			'Safari >= 6',
			'ie >= 9',
			'Edge >= 12',
			'Opera >= 12.1',
			'iOS 6',
			'Android 4'
		],
		cascade: true
	}
};