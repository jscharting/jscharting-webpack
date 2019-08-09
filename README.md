# JSCharting: Any Chart. Anywhere.

<a href="https://jscharting.com"><img src="https://jscharting.com/images/logo_short.svg" style="margin:0px" align="left" hspace="10" vspace="6" width="200" ></a>

**JSCharting** is a JavaScript chart library for visualizing your data, providing resolution 
independent results across all devices and platorms. Every JSCharting license includes the 
full suite of 150+ advanced chart types, interactive stock charts and JSMapping at no additional charge.

This example dashboard is written in typescript and built with webpack. A declarations (d.ts) file provides code 
completion for the JSCharting library which is used to generate the charts. 

Visit https://jscharting.com/ for more information.

## How to use

Install the necessary packages including JSCharting.
```
npm install
```

Run the webpack dev server: localhost:5051
```
npm run start
```

Or build the dashboard manually.
```
npm run build
```


## How it works

The webpack build copies the JSCharting package resources (modules, mapping data, polyfills, icons library) to 
the ```./dist/jsc/``` folder. A wrapper module of the charting library is 
 created in ```./src/jscharting.ts``` to provide a single point of contact with the library which also specifies the location of these 
 resource files globally. 

```typescript
import * as JSC from 'jscharting';

// Apply these defaults to all charts.
JSC.defaults({
	baseUrl: 'dist/jsc'
});

export default JSC;
```

When using the chart library, this wrapper is imported instead of package itself.

```typescript
import * as JSC from './jscharting';

new JSC.Chart('targetDiv', {/*chart options*/})
```