module.exports = {
	presets: [
		'@vue/app',
		["@bable/preset-env", {
			"modules": false
		}]
	],
	"plugins": [
		[
			"component",
			{
				"libraryName": "element-ui",
				"styleLibraryName": "theme-chalk"
			}
		]
	]
}
