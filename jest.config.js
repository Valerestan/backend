module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Reporte de Pruebas Unitarias de Brayan Narvaez ",
        outputPath: "./test-report.html",
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};
