# Security code generator for Renault car radio

## What's its use

-A mobile application that helps you generate the Renault car radio code

[Download the APK file](https://www.upload-apk.com/M4ONBG414IXAmf2)


## The origin

The code that transforms the precode into code has been fingerprinted at [@lucasg](https://lucasg.github.io/2019/08/03/Compute-renault-radio-code/).

## Javascript code

```js
  function normalize(precode) {
    // uppercase first letter of precode
    precode = precode.toUpperCase();
    // precode check
    if (!/^[A-Z]\d{3}$/.test(precode) || precode.startsWith('A0')) {
        return '';
    }
    return precode;
    }

    const precode = ref('');

    const code = computed(() => {
    const normalizedPrecode = normalize(precode.value);
    // if e precode is empty
    if (!normalizedPrecode) {
        return 'CODE';
    }
    // temporary variable
    const x = normalizedPrecode.charCodeAt(1) + normalizedPrecode.charCodeAt(0) * 10 - 698;
    const y = normalizedPrecode.charCodeAt(3) + normalizedPrecode.charCodeAt(2) * 10 + x - 528;
    const z = (y * 7) % 100;
    // the code as integer
    const code = Math.floor(z / 10) + (z % 10) * 10 + ((259 % x) % 100) * 100;
    // the code as string with 4 digits
    return code.toString().padStart(4, '0');
    });
```

## Licence

[MIT](LICENSE)
