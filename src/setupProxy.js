const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy("/api/user/*", { target: "//getrightproperty.com:3001/" }));
    app.use(
        proxy("/api/user/property/*", { target: "//getrightproperty.com:3001/" })
    );
    app.use(proxy("/api/profile/*", { target: "//getrightproperty.com:3001/" }));
    app.use(
        proxy("/api/user/propertyCount", { target: "//getrightproperty.com:3001/" })
    );
    app.use(proxy("/api/profile/*", { target: "//getrightproperty.com:3001/" }));
    app.use(
        proxy("/api/profile/user/current", { target: "//getrightproperty.com:3001/" })
    );

    app.use(
        proxy("/api/profile/user/*", { target: "//getrightproperty.com:3001/" })
    );
    app.use(
        proxy("/api/profile/user/property/*", {
            target: "//getrightproperty.com:3001/",
        })
    );
    app.use(
        proxy("/api/profile/user/property/count", {
            target: "//getrightproperty.com:3001/",
        })
    );
    app.use(proxy("/api/property/all", { target: "//getrightproperty.com:3001/" }));
    app.use(proxy("/api/property/", { target: "//getrightproperty.com:3001/" }));
    app.use(proxy("/api/property/add", { target: "//getrightproperty.com:3001/" }));
    app.use(
        proxy("/api/property/update/", { target: "//getrightproperty.com:3001/" })
    );
    app.use(
        proxy("/api/property/delete/*", { target: "//getrightproperty.com:3001/" })
    );
};