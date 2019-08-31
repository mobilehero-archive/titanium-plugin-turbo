const fs = require('fs-extra');
const path = require('path');
const isInstalledGlobally = require('is-installed-globally');

const tiappDir = require('@titanium/tiapp-xml/tiapp-dir');
const tiappXml = require('@titanium/tiapp-xml');

const pluginName = 'turbo';

console.error('__dirname: ' + JSON.stringify(__dirname, null, 2));
console.error('isInstalledGlobally: ' + JSON.stringify(isInstalledGlobally, null, 2));


if( !isInstalledGlobally ){
	// root directory of project where tiapp.xml is located.
	const root = tiappDir.sync(__dirname);

	if (!root) {
		console.error('Could not find tiapp.xml.  Be sure you are installing this locally into root of your Titanium project.');
		return 0;
	}

	const tiappPath = path.join(root, 'tiapp.xml');

	// modify tiapp.xml to remove plugin from it
	console.info(`removing ${pluginName} plugin from: ${tiappPath}`);
	const tiapp = tiappXml.load(tiappPath);
	tiapp.removePlugin(pluginName);
	tiapp.write();

} else {
	const spawnSync = require('@geek/spawn').spawnSync;
	const hookPath = path.join(__dirname, '..', 'hooks');
	const pluginPath = path.join(__dirname, '..', 'plugins');
	console.error('Uninstalling global hook → ' + hookPath);
	spawnSync('ti', ['config', 'paths.hooks', '--remove', hookPath]);
	console.error('Uninstalling global plugin → ' + pluginPath);
	spawnSync('ti', ['config', 'paths.plugins', '--remove', pluginPath]);
}


