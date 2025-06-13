const FtpSrv = require('ftp-srv');

const ftpServer = new FtpSrv({
  url: "ftp://0.0.0.0:21",  // écoute sur toutes les interfaces au port 21
  anonymous: true           // permet accès anonyme (optionnel)
});

ftpServer.on('login', ({connection, username, password}, resolve, reject) => {
  // Ici tu peux vérifier username/password
  // Exemple : accepter tout le monde
  resolve({ root: __dirname }); // dossier racine du serveur FTP
});

ftpServer.listen()
  .then(() => {
    console.log('Serveur FTP lancé sur ftp://localhost:21');
  })
  .catch(err => console.error(err));
