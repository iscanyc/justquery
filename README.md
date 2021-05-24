## Examples

```js
const justquery = require("justquery");

const myQuery = justquery.create({
  keyword: "foo",
  max: 5,
});
//?keyword=foo&max=5

const parsed = justquery.parse(myQuery);
//{ keyword: "foo", max: 5 }

const has = justquery.has(myQuery, "max");
//true
```
