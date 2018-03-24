// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAkaji7inOm_sN0XJcrE6YvXI9MEvmtYbc",
    authDomain: "bitshifted-recipebox.firebaseapp.com",
    databaseURL: "https://bitshifted-recipebox.firebaseio.com",
    projectId: "bitshifted-recipebox",
    storageBucket: "bitshifted-recipebox.appspot.com",
    messagingSenderId: "24912320769"
  }
};
