let html = document.querySelector('.html');
let css = document.querySelector('.css');
let js = document.querySelector('.js');
let output = document.querySelector('.output iframe');
let timeout = null;

const updateCode = () => {
    clearTimeout(timeout); 
    timeout = setTimeout(() => {
        let style = `<style>${css.value}</style>`;
        let script = `<script>
            try {
                ${js.value}
            
            
                } catch (e) {
                console.error(e);
            }
        <\/script>`;

        let codeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Editor</title>
    ${style}
</head>
<body>
    ${html.value}
    ${script}  
</body>
</html>`;

        let iframeDoc = output.contentDocument || output.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(codeHtml);
        iframeDoc.close();
    }, 500)
};

html.addEventListener('input', updateCode);
css.addEventListener('input', updateCode);
js.addEventListener('input', updateCode);
