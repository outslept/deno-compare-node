# Deno vs Node.js: Built-in API comparison
This repository provides a comparative overview of the Deno and Node.js runtime API.

Scrolling down, you should be able to see what's available in Deno, what's not, and how they differ.

Updated Aug 8, 2025 • Node.js v24.5.0 • deno 2.4.2 (stable, release, x86_64-pc-windows-msvc)

## Module details

<a id="assert"></a>
<details>
  <summary><code>assert</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/assert.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/assert.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="assert-strict"></a>
<details>
  <summary><code>assert/strict</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/assert_strict.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/assert_strict.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="async_hooks"></a>
<details>
  <summary><code>async_hooks</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/async_hooks.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/async_hooks.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="buffer"></a>
<details>
  <summary><code>buffer</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/buffer.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/buffer.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="child_process"></a>
<details>
  <summary><code>child_process</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/child_process.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/child_process.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="cluster"></a>
<details>
  <summary><code>cluster</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/cluster.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/cluster.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="console"></a>
<details>
  <summary><code>console</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/console.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/console.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="constants"></a>
<details>
  <summary><code>constants</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/constants.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/constants.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="crypto"></a>
<details>
  <summary><code>crypto</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/crypto.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/crypto.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="dgram"></a>
<details>
  <summary><code>dgram</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/dgram.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/dgram.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="diagnostics_channel"></a>
<details>
  <summary><code>diagnostics_channel</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/diagnostics_channel.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/diagnostics_channel.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="dns"></a>
<details>
  <summary><code>dns</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/dns.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/dns.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="dns-promises"></a>
<details>
  <summary><code>dns/promises</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/dns_promises.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/dns_promises.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="domain"></a>
<details>
  <summary><code>domain</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/domain.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/domain.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="events"></a>
<details>
  <summary><code>events</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/events.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/events.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="fs"></a>
<details>
  <summary><code>fs</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/fs.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/fs.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="fs-promises"></a>
<details>
  <summary><code>fs/promises</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/fs_promises.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/fs_promises.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="http"></a>
<details>
  <summary><code>http</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/http.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/http.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="http2"></a>
<details>
  <summary><code>http2</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/http2.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/http2.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="https"></a>
<details>
  <summary><code>https</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/https.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/https.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="inspector"></a>
<details>
  <summary><code>inspector</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/inspector.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/inspector.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="inspector-promises"></a>
<details>
  <summary><code>inspector/promises</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/inspector_promises.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/inspector_promises.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="module"></a>
<details>
  <summary><code>module</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/module.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/module.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="net"></a>
<details>
  <summary><code>net</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/net.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/net.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="sea"></a>
<details>
  <summary><code>node:sea</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/sea.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/sea.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="sqlite"></a>
<details>
  <summary><code>node:sqlite</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/sqlite.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/sqlite.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="test"></a>
<details>
  <summary><code>node:test</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/test.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/test.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="test-reporters"></a>
<details>
  <summary><code>node:test/reporters</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/test_reporters.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/test_reporters.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="os"></a>
<details>
  <summary><code>os</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/os.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/os.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="path"></a>
<details>
  <summary><code>path</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/path.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/path.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="path-posix"></a>
<details>
  <summary><code>path/posix</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/path_posix.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/path_posix.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="path-win32"></a>
<details>
  <summary><code>path/win32</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/path_win32.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/path_win32.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="perf_hooks"></a>
<details>
  <summary><code>perf_hooks</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/perf_hooks.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/perf_hooks.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="process"></a>
<details>
  <summary><code>process</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/process.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/process.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="punycode"></a>
<details>
  <summary><code>punycode</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/punycode.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/punycode.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="querystring"></a>
<details>
  <summary><code>querystring</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/querystring.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/querystring.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="readline"></a>
<details>
  <summary><code>readline</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/readline.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/readline.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="readline-promises"></a>
<details>
  <summary><code>readline/promises</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/readline_promises.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/readline_promises.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="repl"></a>
<details>
  <summary><code>repl</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/repl.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/repl.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="stream"></a>
<details>
  <summary><code>stream</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="stream-consumers"></a>
<details>
  <summary><code>stream/consumers</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream_consumers.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream_consumers.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="stream-promises"></a>
<details>
  <summary><code>stream/promises</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream_promises.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream_promises.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="stream-web"></a>
<details>
  <summary><code>stream/web</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream_web.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/stream_web.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="string_decoder"></a>
<details>
  <summary><code>string_decoder</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/string_decoder.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/string_decoder.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="sys"></a>
<details>
  <summary><code>sys</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/sys.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/sys.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="timers"></a>
<details>
  <summary><code>timers</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/timers.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/timers.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="timers-promises"></a>
<details>
  <summary><code>timers/promises</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/timers_promises.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/timers_promises.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="tls"></a>
<details>
  <summary><code>tls</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/tls.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/tls.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="trace_events"></a>
<details>
  <summary><code>trace_events</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/trace_events.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/trace_events.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="tty"></a>
<details>
  <summary><code>tty</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/tty.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/tty.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="url"></a>
<details>
  <summary><code>url</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/url.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/url.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="util"></a>
<details>
  <summary><code>util</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/util.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/util.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="util-types"></a>
<details>
  <summary><code>util/types</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/util_types.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/util_types.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="v8"></a>
<details>
  <summary><code>v8</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/v8.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/v8.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="vm"></a>
<details>
  <summary><code>vm</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/vm.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/vm.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="wasi"></a>
<details>
  <summary><code>wasi</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/wasi.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/wasi.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="worker_threads"></a>
<details>
  <summary><code>worker_threads</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/worker_threads.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/worker_threads.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

<a id="zlib"></a>
<details>
  <summary><code>zlib</code> — Unavailable in both</summary>
  <br>
  <table><tr><th>Node.js</th><th>Deno</th></tr><tr><td valign="top">

```js
file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/zlib.mjs:7
      console.error('Error importing module:', error.message));
                                                             ^

SyntaxError: Unexpected token ')'
    at compileSourceTextModule (node:internal/modules/esm/utils:357:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:108:18)
    at #translate (node:internal/modules/esm/loader:550:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:597:27)
    at async #link (node:internal/modules/esm/module_job:180:19)

Node.js v24.5.0
```

</td><td valign="top">

```js
error: The module's source code could not be parsed: Expected ';', '}' or <eof> at file:///C:/Users/Eugene/AppData/Local/Temp/fs-fixture-1754645417786-17284-1/zlib.mjs:7:62

        console.error('Error importing module:', error.message));
                                                               ~
```

</td></tr></table>
</details>

## Credits
Code adapted from [compare-bun-node](https://github.com/privatenumber/compare-bun-node/) by [@privatenumber](https://github.com/privatenumber).
