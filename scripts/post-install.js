const fs = require('fs-extra');
const path = require('path');
const isInstalledGlobally = require('is-installed-globally');


// const tiappDir = require('tiapp-dir');
// const tiappXml = require('tiapp.xml');


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

	// copy plugin hook to the project's plugins directory
	const pluginDest = path.join(root, 'plugins', pluginName, '1.0', 'hooks', pluginName + '.js');
	console.info(`copying plugin to: ${pluginDest}`);
	fs.copySync(path.join(__dirname, '..', 'hooks', pluginName + '.js'), pluginDest,  { overwrite: true  });

	const tiappPath = path.join(root, 'tiapp.xml');

	// modify tiapp.xml to add new plugin to it
	console.info(`adding pluginName plugin to: ${tiappPath}`);
	const tiapp = tiappXml.load(tiappPath);
	tiapp.setPlugin(pluginName, '1.0');
	tiapp.write();

} else {
	const spawnSync = require('@geek/spawn').spawnSync;
	const hookPath = path.join(__dirname, '..', 'hooks');
	console.error('Installing global hook → ' + hookPath);
	spawnSync('ti', ['config', 'paths.hooks', '--remove', hookPath]);
}


