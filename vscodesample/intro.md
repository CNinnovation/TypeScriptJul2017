# Debugging in Visual Studio Code

## TypeScript Environment

1. Create a TypeScript File, e.g. hello.ts
2. Create a tsconfig.json TypeScript Configuration File

```JavaScript
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es2015",
        "sourceMap": true,
        "outDir": "./out/"     
    },
    "compileOnSave": true
}
```

## Configure Task Runner

View | Command Palette -> Configure Task Runner
Strg Shift P --> Configure Task Runner

Task runner for TypeScript: tasks.json (.vscode directory)

```JavaScript
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-p", "."],
    "showOutput": "silent",
    "problemMatcher": "$tsc"
}
```

## Configure Debug Engine

Use Node.js

Lanuch.json:

```JavaScript
{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${file}",
            "outFiles": [
                "${workspaceRoot}/out/**/*.js"
            ]
        }
    ]
}
```

${file} - currently selected file
alternative configure JavaScript file

## Launch Debugger

## Start from Console

node abc.js