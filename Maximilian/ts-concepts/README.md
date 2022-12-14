1. npm i -g typescript
2. tsc using-ts.ts
3. npm i --s-dev lite-server
4. Add to package.json
   "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "lite-server"
   },
5. npm start
6. tsc app.ts
7. Watch Mode: tsc app.ts --watch / tsc app.ts -w
8. For Multiple file in a project: tsc --init
9. After tsc --init you can do tsc -w for watch mode
10. To exclude any file add exclusion in tsconfig.json
    },"exclude": ["node_modules"]
    }
11. File Types for exclusion: _.dev.ts, \*\*/_.dev.ts
12. Can use "include" :["app.ts","analytics.ts"] in tsconfig
13. Can specify special file as "files":["app.ts"]
14. Folder Organization:
    1. dist folder holds all output files
    2. src folder holds all typescript files
