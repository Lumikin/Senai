//Importar os modulos importantes do Electron
const { app, BrowserWindow } = require(`electron`);

//Quando estiver pronto, cria uma janela 
app.whenReady().then(() => {
    //criar uma janela do app com tamanho 800x600
    const janela = new BrowserWindow({
        width: 800,
        height: 600
    });

    //Carregar um arquivo HTML que sera exibido na janela
    janela.loadFile(`index.html`);
});
    //Quando todas as janelas estiverem fechadas o app para de executar
app.on('window-all-closed', () => {
    app.quit();
});