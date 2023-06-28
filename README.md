# Generateur de code de sécurité pour autoradio Renault

## A quoi sert

-Une application mobile qui vous aide à générer le code d'autoradio Renault

## L'origine

Le code qui transforme le precode en code a été empreinté à [@lucasg](https://lucasg.github.io/2019/08/03/Compute-renault-radio-code/).

## code javascript

```js
  function normalize(precode) {
    // première lettre du précode en majuscule
    precode = precode.toUpperCase();
    // vérification du précode
    if (!/^[A-Z]\d{3}$/.test(precode) || precode.startsWith('A0')) {
        return '';
    }
    return precode;
    }

    const precode = ref('');

    const code = computed(() => {
    const normalizedPrecode = normalize(precode.value);
    //si e précode est vide
    if (!normalizedPrecode) {
        return 'CODE';
    }
    //varaible temporaire 
    const x = normalizedPrecode.charCodeAt(1) + normalizedPrecode.charCodeAt(0) * 10 - 698;
    const y = normalizedPrecode.charCodeAt(3) + normalizedPrecode.charCodeAt(2) * 10 + x - 528;
    const z = (y * 7) % 100;
    // le code comme entier
    const code = Math.floor(z / 10) + (z % 10) * 10 + ((259 % x) % 100) * 100;
    // le code comme chaîne avec 4 chiffres
    return code.toString().padStart(4, '0');
    });
```

## Licence

[MIT](LICENSE)