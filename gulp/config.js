module.exports = {
	delete: {
		dest: {
			dev : './build/dev/assets',
			prod : './build/prod/assets'
		}
	},
	html : {
		src : './src/templates/*.php',
		dest : {
			dev : './build/dev',
			prod : './build/prod'
		}
	},
	scripts : {
		dest : {
			dev : './build/dev/assets/js',
			prod : './build/prod/assets/js'
		},
		src: {
			dev : [
				'./src/js/vendor/*.js',
				'./src/js/*.js',
				'!./src/js/vendor/00_bower.js',
				'!./src/js/arch',
				'!./src/js/arch/**/*'
				],
			dist : [
				'./src/js/vendor/*.js', 
				'./src/js/dist/*.js'
				],
			prod : [
				'./src/js/vendor/*.js',
				'./src/js/dist/*.js'
				]
		}
	},
	babel : {
		src:  './src/js/*.js',
		dest: './src/js/dist'
	},
	images: {
		src:  [
			'./src/img/*',
			'./src/img/**/*',
			'!./src/img/arch',
			'!./src/img/arch/**/*'
			],
		dest: {
			dev : './build/dev/assets/img',
			prod : './build/prod/assets/img'
		}
	},
	data: {
		src:  './src/data/*.json',
		dest: {
			dev : './build/dev/assets/data',
			prod : './build/prod/assets/data'
		}
	},
	lib: {
		src: {
			dev : './src/lib/**/*',
			prod : './src/lib/**/*',
			}, 
		dest: {
			dev : './build/dev/assets/lib',
			prod : './build/prod/assets/lib'
		}
	},
	sass: {
		src:  './src/scss/**/*.scss',
		dest: { 
			dev : './build/dev/assets/css',
			prod : './build/prod/assets/css'
		},
		options: {
			dev : {
				noCache: true,
				compass: false,
				bundleExec: false,
				sourcemap: true,
				style: 'expanded'
  			},
  			prod : {
				noCache: true,
				compass: false,
				bundleExec: false,
				sourcemap: false,
				style: 'compressed'
  			}
		}
	},
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'Firefox >= 43',
			'Chrome >= 43',
			'Safari >= 8',
			'ie >= 9',
			'Edge >= 12',
			'Opera >= 12.1',
			'iOS 6',
			'Android 4'
		],
		cascade: true
	},
	bower:{
		src: {
			dev : './build/dev',
			prod : './build/prod'
		},
		dest : './src/js/vendor',
		index: '/index.php'
	},
	server : {
		url : 'portfolio.imac',
		build : {
			dev : '/dev',
			prod : '/prod'
		}
	}
};