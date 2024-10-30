console.log('start');

Deno.readTextFile('.vscode/settings.json').then(content => {
    console.log(content);

    let deel: string = content.substring(0,10);
    console.log(deel);
});

console.log('klaar');