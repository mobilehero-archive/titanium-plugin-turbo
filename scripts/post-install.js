const fs = require('fs-extra');
const path = require('path');
const tiappDir = require('tiapp-dir');
const tiappXml = require('tiapp.xml');

const pluginName = 'turbo';

// root directory of project where tiapp.xml is located.
const root = tiappDir.sync(__dirname);

if (!root) {
	console.error('Could not find tiapp.xml.  Be sure you are installing this locally into root of your Titanium project.');
	return 0;
}

// copy plugin hook to the project's plugins directory
const pluginDest = path.join(root, 'plugins', pluginName, '1.0', 'hooks', pluginName + '.js');
console.info(`copying plugin to: ${pluginDest}`);
fs.copySync(path.join(__dirname, '..', pluginName + '.js'), pluginDest,  { overwrite: true  });

const tiappPath = path.join(root, 'tiapp.xml');

// modify tiapp.xml to add new plugin to it
console.info(`adding pluginName plugin to: ${tiappPath}`);
const tiapp = tiappXml.load(tiappPath);
tiapp.setPlugin(pluginName, '1.0');
tiapp.write();


