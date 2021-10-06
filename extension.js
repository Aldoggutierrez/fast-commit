// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('identificador.commit', function () {
		function exitoadd() {
			vscode.window.showInformationMessage("se ejecuto el comando el comando add");
			let commit = vscode.commands.executeCommand('git.commitStaged');
			commit.then(exitocommit,fallocommit);
		}
		  
		function falloadd() {
			vscode.window.showInformationMessage("no se ejecuto el comando add");
		}

		function exitocommit() {
			vscode.window.showInformationMessage("se ejecuto el comando el comando commit");
			let pull = vscode.commands.executeCommand('git.pull');
			pull.then(exitopull,fallopull);
		}
		  
		function fallocommit() {
			vscode.window.showInformationMessage("no se ejecuto el comando commit");
		}

		function exitopull() {
			vscode.window.showInformationMessage("se ejecuto el comando el comando pull");
			let push = vscode.commands.executeCommand('git.push');
			push.then(exitopush,fallopush);
		}
		  
		function fallopull() {
			vscode.window.showInformationMessage("no se ejecuto el comando pull");
		}

		function exitopush() {
			vscode.window.showInformationMessage("se ejecuto el comando el comando push");
		}
		  
		function fallopush() {
			vscode.window.showInformationMessage("no se ejecuto el comando push");
		}


		let add = vscode.commands.executeCommand('git.stageAll');
		add.then(exitoadd,falloadd);    
	});

	context.subscriptions.push(disposable);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
