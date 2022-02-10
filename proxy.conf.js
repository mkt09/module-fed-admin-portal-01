module.exports = {
    "/mf-admin-portal-root/**": {
        target: "http://localhost:8000",
        pathRewrite: { "^/mf-admin-portal-root": "" }
      }
};
