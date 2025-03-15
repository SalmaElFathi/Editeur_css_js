html=document.querySelector('.html');
css=document.querySelector('.css');
js=document.querySelector('.js');
output=document.querySelector('.output').querySelector('iframe');
let codeHtml;
let style;
let script;
const updateCode = () => {
    style = `<style>${css.value}</style>`;
    codeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    ${style}
</head>
<body>${html.value}</body>
</html>`;

    const iframeDoc = output.contentDocument || output.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(codeHtml);
    iframeDoc.close();

    const scriptTag = iframeDoc.createElement("script");
    scriptTag.textContent = js.value;
    iframeDoc.body.appendChild(scriptTag);



};

html.addEventListener('input',updateCode);
css.addEventListener('input',updateCode);
js.addEventListener('input',updateCode);

