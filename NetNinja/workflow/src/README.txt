1. TypeScript Compiling:  tsc src/sandbox.tsc
2. Initilizing TypeScript for the project: tsc --init
3. Modify ROOT Dir : "rootDir": "./src", (whatever is definded for the project)
4. Modify OUTDir : "outDir": "./public",
5. For Auto File creation and update : tsc -w
6. To make sure it creates only files in source folder then add key-value in tsconfig.json : "include": ["src"]
