const { app, BrowserWindow, Notification} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1200,
      height: 800,
      backgroundColor: "white",
      webPreferences: {
          nodeIntegration: true,
          //ensures preload and electron logic run in seperate context 
      }
    })
  //Opens index.html when  app is opened 
    win.loadFile('index.html')
    win.webContents.openDevTools();
  }


   app.whenReady().then(() => {
     createWindow();
     const notification = new Notification({title:"Welcome", body:'Beta Test 3D Combinator'});
     notification.show();
   })  

   app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

   app.on('active', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
   })

   app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })

  //webpack is module builder for javascript 

  //Babel is Javascript compilier 
