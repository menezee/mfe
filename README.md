# MFE
simple micro frontend using react, express, nginx, and ssi.

## requirements
- docker
- node.js

## instructions
```
nvm use
```
```
cd products
npm i
npm run build
npm run ssr
```

this will spin up products on http://localhost:3000/products


on a different shell, run:
```
cd profile
npm i
npm run build
npm run ssr
```

this will spin up profile on http://localhost:3001/profile


on a third shell, run:
```
npm run nginx
```

this will spin up the MFE on http://localhost:3009/products
