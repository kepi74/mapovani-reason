# Basic Reason Template

Hello! This project allows you to quickly get started with Reason and BuckleScript. If you wanted a more sophisticated version, try the `react` template (`bsb -theme react -init .`).

# Build
```
npm run build
```

# Build + Watch

```
npm run start
```


# Editor
If you use `vscode`, Press `Windows + Shift + B` it will build automatically

# Starting graphQL server
1. `node app.js`
2.  make a post request

    Example:
    `http://localhost:3000/`

    `{"query":"query PostsForAuthor {\n  author(id: 3) {\n    firstName\n    posts {\n      title\n      votes\n    }\n  }\n}\n","variables":null,"operationName":"PostsForAuthor"}`