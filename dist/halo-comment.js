/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4807:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentApiClient = void 0;
const clients_1 = __webpack_require__(6292);
class ContentApiClient {
    constructor(client) {
        this.client = client.buildHttpClient();
        this._archive = new clients_1.ArchiveClient(this.client);
        this._category = new clients_1.CategoryClient(this.client);
        this._journal = new clients_1.JournalClient(this.client);
        this._link = new clients_1.LinkClient(this.client);
        this._menu = new clients_1.MenuClient(this.client);
        this._option = new clients_1.OptionClient(this.client);
        this._photo = new clients_1.PhotoClient(this.client);
        this._post = new clients_1.PostClient(this.client);
        this._sheet = new clients_1.SheetClient(this.client);
        this._statistic = new clients_1.StatisticClient(this.client);
        this._tag = new clients_1.TagClient(this.client);
        this._theme = new clients_1.ThemeClient(this.client);
        this._user = new clients_1.UserClient(this.client);
        this._comment = new clients_1.CommentClient(this.client);
    }
    get archive() {
        return this._archive;
    }
    get category() {
        return this._category;
    }
    get journal() {
        return this._journal;
    }
    get link() {
        return this._link;
    }
    get menu() {
        return this._menu;
    }
    get option() {
        return this._option;
    }
    get photo() {
        return this._photo;
    }
    get post() {
        return this._post;
    }
    get sheet() {
        return this._sheet;
    }
    get statistic() {
        return this._statistic;
    }
    get tag() {
        return this._tag;
    }
    get theme() {
        return this._theme;
    }
    get user() {
        return this._user;
    }
    get comment() {
        return this._comment;
    }
}
exports.ContentApiClient = ContentApiClient;
//# sourceMappingURL=ContentApiClient.js.map

/***/ }),

/***/ 5324:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArchiveClient = void 0;
const url_1 = __webpack_require__(6483);
class ArchiveClient {
    constructor(client) {
        this.client = client;
    }
    listYearArchives() {
        const path = (0, url_1.buildPath)({
            endpointName: 'archives/years',
        });
        return this.client.get(path, {});
    }
    listMonthArchives() {
        const path = (0, url_1.buildPath)({
            endpointName: 'archives/years',
        });
        return this.client.get(path, {});
    }
}
exports.ArchiveClient = ArchiveClient;
//# sourceMappingURL=ArchiveClient.js.map

/***/ }),

/***/ 3297:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryClient = void 0;
const url_1 = __webpack_require__(6483);
class CategoryClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'categories',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listPostBySlug(params) {
        const path = (0, url_1.buildPath)({
            endpointName: `categories/${params.slug}/posts`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.CategoryClient = CategoryClient;
//# sourceMappingURL=CategoryClient.js.map

/***/ }),

/***/ 2024:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentClient = void 0;
const url_1 = __webpack_require__(6483);
class CommentClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Get top comments
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listTopComments(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/top_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get children comments
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param commentId the id of the top comment
     * @param params optional query params
     */
    listChildren(target, targetId, commentId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/${commentId}/children`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get comments as tree view
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listAsTreeView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/tree_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Get comments as list view
     *
     * @param target posts, sheets, or journals
     * @param targetId the id of the target
     * @param params optional query params
     */
    listAsView(target, targetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/${targetId}/comments/list_view`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    /**
     * Create a comment
     *
     * @param target posts, sheets, or journals
     * @param params the comment params
     */
    create(target, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `${target}/comments`,
        });
        return this.client.post(path, params);
    }
}
exports.CommentClient = CommentClient;
//# sourceMappingURL=CommentClient.js.map

/***/ }),

/***/ 9880:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JournalClient = void 0;
const tslib_1 = __webpack_require__(6984);
const url_1 = __webpack_require__(6483);
class JournalClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'journals',
        });
        return this.client.get(path, {});
    }
    get(journalId) {
        const path = (0, url_1.buildPath)({
            endpointName: `journals/${journalId}`,
        });
        return this.client.get(path, {});
    }
    like(journalId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `journals/${journalId}/likes`,
            });
            yield this.client.post(path, {});
        });
    }
}
exports.JournalClient = JournalClient;
//# sourceMappingURL=JournalClient.js.map

/***/ }),

/***/ 3335:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LinkClient = void 0;
const url_1 = __webpack_require__(6483);
class LinkClient {
    constructor(client) {
        this.client = client;
    }
    list(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links',
        });
        return this.client.get(path, { sort });
    }
    listTeams(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'links/team_view',
        });
        return this.client.get(path, { sort });
    }
}
exports.LinkClient = LinkClient;
//# sourceMappingURL=LinkClient.js.map

/***/ }),

/***/ 5480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuClient = void 0;
const url_1 = __webpack_require__(6483);
class MenuClient {
    constructor(client) {
        this.client = client;
    }
    list(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus',
        });
        return this.client.get(path, { sort });
    }
    listAsTreeView(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'menus/tree_view',
        });
        return this.client.get(path, { sort });
    }
}
exports.MenuClient = MenuClient;
//# sourceMappingURL=MenuClient.js.map

/***/ }),

/***/ 1955:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionClient = void 0;
const url_1 = __webpack_require__(6483);
class OptionClient {
    constructor(client) {
        this.client = client;
    }
    list() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/list_view',
        });
        return this.client.get(path, {});
    }
    listAsMapView(key) {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/map_view',
        });
        return this.client.get(path, { key });
    }
    getByKey(key) {
        const path = (0, url_1.buildPath)({
            endpointName: `options/keys/${key}`,
        });
        return this.client.get(path, { key });
    }
    comment() {
        const path = (0, url_1.buildPath)({
            endpointName: 'options/comment',
        });
        return this.client.get(path, {});
    }
}
exports.OptionClient = OptionClient;
//# sourceMappingURL=OptionClient.js.map

/***/ }),

/***/ 4075:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PhotoClient = void 0;
const url_1 = __webpack_require__(6483);
class PhotoClient {
    constructor(client) {
        this.client = client;
    }
    latest(sort) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos/latest',
        });
        return this.client.get(path, { sort });
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'photos',
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.PhotoClient = PhotoClient;
//# sourceMappingURL=PhotoClient.js.map

/***/ }),

/***/ 5634:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostClient = void 0;
const tslib_1 = __webpack_require__(6984);
const url_1 = __webpack_require__(6483);
class PostClient {
    constructor(client) {
        this.client = client;
    }
    list(params, keyword, categoryId) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts',
        });
        return this.client.get(path, Object.assign({ keyword, categoryId }, params));
    }
    search(keyword, pageQuery) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/search',
        });
        return this.client.get(path, Object.assign({ keyword }, pageQuery));
    }
    get(postId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    getBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'posts/slug',
        });
        return this.client.get(path, Object.assign({ slug }, params));
    }
    getPrevPostById(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/prev`,
        });
        return this.client.get(path, {});
    }
    getNextPostById(postId) {
        const path = (0, url_1.buildPath)({
            endpointName: `posts/${postId}/next`,
        });
        return this.client.get(path, {});
    }
    like(postId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const path = (0, url_1.buildPath)({
                endpointName: `posts/${postId}/likes`,
            });
            yield this.client.get(path, {});
        });
    }
}
exports.PostClient = PostClient;
//# sourceMappingURL=PostClient.js.map

/***/ }),

/***/ 772:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SheetClient = void 0;
const url_1 = __webpack_require__(6483);
class SheetClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    get(sheetId, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `sheets/${sheetId}`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
    getBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'sheets/slug',
        });
        return this.client.get(path, Object.assign({ slug }, params));
    }
}
exports.SheetClient = SheetClient;
//# sourceMappingURL=SheetClient.js.map

/***/ }),

/***/ 6756:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatisticClient = void 0;
const url_1 = __webpack_require__(6483);
class StatisticClient {
    constructor(client) {
        this.client = client;
    }
    statistics() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics',
        });
        return this.client.get(path, {});
    }
    statisticsWithUser() {
        const path = (0, url_1.buildPath)({
            endpointName: 'statistics/user',
        });
        return this.client.get(path, {});
    }
}
exports.StatisticClient = StatisticClient;
//# sourceMappingURL=StatisticClient.js.map

/***/ }),

/***/ 6159:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TagClient = void 0;
const url_1 = __webpack_require__(6483);
class TagClient {
    constructor(client) {
        this.client = client;
    }
    list(params) {
        const path = (0, url_1.buildPath)({
            endpointName: 'tags',
        });
        return this.client.get(path, Object.assign({}, params));
    }
    listPostsBySlug(slug, params) {
        const path = (0, url_1.buildPath)({
            endpointName: `tags/${slug}/posts`,
        });
        return this.client.get(path, Object.assign({}, params));
    }
}
exports.TagClient = TagClient;
//# sourceMappingURL=TagClient.js.map

/***/ }),

/***/ 8311:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemeClient = void 0;
const url_1 = __webpack_require__(6483);
class ThemeClient {
    constructor(client) {
        this.client = client;
    }
    getProperty() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation',
        });
        return this.client.get(path, {});
    }
    listSettings() {
        const path = (0, url_1.buildPath)({
            endpointName: 'themes/activation/settings',
        });
        return this.client.get(path, {});
    }
    getPropertyById(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}`,
        });
        return this.client.get(path, {});
    }
    listSettingsById(themeId) {
        const path = (0, url_1.buildPath)({
            endpointName: `themes/${themeId}/settings`,
        });
        return this.client.get(path, {});
    }
}
exports.ThemeClient = ThemeClient;
//# sourceMappingURL=ThemeClient.js.map

/***/ }),

/***/ 3216:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserClient = void 0;
const url_1 = __webpack_require__(6483);
class UserClient {
    constructor(client) {
        this.client = client;
    }
    getProfile() {
        const path = (0, url_1.buildPath)({
            endpointName: 'users/profile',
        });
        return this.client.get(path, {});
    }
}
exports.UserClient = UserClient;
//# sourceMappingURL=UserClient.js.map

/***/ }),

/***/ 6292:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentClient = exports.UserClient = exports.ThemeClient = exports.TagClient = exports.StatisticClient = exports.SheetClient = exports.PostClient = exports.PhotoClient = exports.OptionClient = exports.MenuClient = exports.LinkClient = exports.JournalClient = exports.CategoryClient = exports.ArchiveClient = void 0;
var ArchiveClient_1 = __webpack_require__(5324);
Object.defineProperty(exports, "ArchiveClient", ({ enumerable: true, get: function () { return ArchiveClient_1.ArchiveClient; } }));
var CategoryClient_1 = __webpack_require__(3297);
Object.defineProperty(exports, "CategoryClient", ({ enumerable: true, get: function () { return CategoryClient_1.CategoryClient; } }));
var JournalClient_1 = __webpack_require__(9880);
Object.defineProperty(exports, "JournalClient", ({ enumerable: true, get: function () { return JournalClient_1.JournalClient; } }));
var LinkClient_1 = __webpack_require__(3335);
Object.defineProperty(exports, "LinkClient", ({ enumerable: true, get: function () { return LinkClient_1.LinkClient; } }));
var MenuClient_1 = __webpack_require__(5480);
Object.defineProperty(exports, "MenuClient", ({ enumerable: true, get: function () { return MenuClient_1.MenuClient; } }));
var OptionClient_1 = __webpack_require__(1955);
Object.defineProperty(exports, "OptionClient", ({ enumerable: true, get: function () { return OptionClient_1.OptionClient; } }));
var PhotoClient_1 = __webpack_require__(4075);
Object.defineProperty(exports, "PhotoClient", ({ enumerable: true, get: function () { return PhotoClient_1.PhotoClient; } }));
var PostClient_1 = __webpack_require__(5634);
Object.defineProperty(exports, "PostClient", ({ enumerable: true, get: function () { return PostClient_1.PostClient; } }));
var SheetClient_1 = __webpack_require__(772);
Object.defineProperty(exports, "SheetClient", ({ enumerable: true, get: function () { return SheetClient_1.SheetClient; } }));
var StatisticClient_1 = __webpack_require__(6756);
Object.defineProperty(exports, "StatisticClient", ({ enumerable: true, get: function () { return StatisticClient_1.StatisticClient; } }));
var TagClient_1 = __webpack_require__(6159);
Object.defineProperty(exports, "TagClient", ({ enumerable: true, get: function () { return TagClient_1.TagClient; } }));
var ThemeClient_1 = __webpack_require__(8311);
Object.defineProperty(exports, "ThemeClient", ({ enumerable: true, get: function () { return ThemeClient_1.ThemeClient; } }));
var UserClient_1 = __webpack_require__(3216);
Object.defineProperty(exports, "UserClient", ({ enumerable: true, get: function () { return UserClient_1.UserClient; } }));
var CommentClient_1 = __webpack_require__(2024);
Object.defineProperty(exports, "CommentClient", ({ enumerable: true, get: function () { return CommentClient_1.CommentClient; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9142:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContentApiClient = void 0;
const tslib_1 = __webpack_require__(6984);
var ContentApiClient_1 = __webpack_require__(4807);
Object.defineProperty(exports, "ContentApiClient", ({ enumerable: true, get: function () { return ContentApiClient_1.ContentApiClient; } }));
(0, tslib_1.__exportStar)(__webpack_require__(9892), exports);
(0, tslib_1.__exportStar)(__webpack_require__(7208), exports);
(0, tslib_1.__exportStar)(__webpack_require__(6292), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7208:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6483:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildPath = void 0;
const buildPath = (params) => {
    const { endpointName, scope } = params;
    const scopePath = scope !== undefined ? `${scope}` : 'content';
    return `/api/${scopePath}/${endpointName}`;
};
exports.buildPath = buildPath;
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 9720:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRequestConfigBuilder = void 0;
const tslib_1 = __webpack_require__(6984);
const form_data_1 = (0, tslib_1.__importDefault)(__webpack_require__(6243));
const qs_1 = (0, tslib_1.__importDefault)(__webpack_require__(5361));
const js_base64_1 = __webpack_require__(1329);
const auth_1 = __webpack_require__(7764);
const platform_1 = __webpack_require__(4031);
const THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE = 4096;
class HaloRequestConfigBuilder {
    constructor({ baseUrl, auth, basicAuth, clientCertAuth, proxy, userAgent, }) {
        this.baseUrl = baseUrl;
        this.auth = auth;
        this.headers = this.buildHeaders({ basicAuth, userAgent });
        this.clientCertAuth = clientCertAuth;
        this.proxy = proxy;
        this.requestToken = null;
    }
    build(method, path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = Object.assign(Object.assign(Object.assign({ method, headers: this.headers, url: `${this.baseUrl}${path}` }, (options ? options : {})), platform_1.platformDeps.buildPlatformDependentConfig({
                clientCertAuth: this.clientCertAuth,
            })), { proxy: this.proxy });
            switch (method) {
                case 'get': {
                    const requestUrl = this.buildRequestUrl(path, params);
                    if (requestUrl.length > THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE) {
                        return Object.assign(Object.assign({}, requestConfig), { method: 'post', headers: Object.assign(Object.assign({}, this.headers), { 'X-HTTP-Method-Override': 'GET' }), data: yield this.buildData(params) });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                case 'post': {
                    if (params instanceof form_data_1.default) {
                        const formData = yield this.buildData(params);
                        return Object.assign(Object.assign({}, requestConfig), { headers: 
                            // NOTE: formData.getHeaders does not exist in a browser environment.
                            typeof formData.getHeaders === 'function' ? Object.assign(Object.assign({}, this.headers), formData.getHeaders()) : this.headers, data: formData });
                    }
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'put': {
                    return Object.assign(Object.assign({}, requestConfig), { data: yield this.buildData(params) });
                }
                case 'delete': {
                    if (params instanceof Array) {
                        return Object.assign(Object.assign({}, requestConfig), { headers: this.headers, data: params });
                    }
                    const requestUrl = this.buildRequestUrl(path, yield this.buildData(params));
                    return Object.assign(Object.assign({}, requestConfig), { url: requestUrl });
                }
                default: {
                    throw new Error(`${method} method is not supported`);
                }
            }
        });
    }
    buildRequestUrl(path, params) {
        const requestUrl = `${this.baseUrl}${path}`;
        const query = qs_1.default.stringify(params, { indices: false });
        return query ? `${requestUrl}?${query}` : requestUrl;
    }
    buildData(params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.auth && this.auth.type === 'session') {
                const requestToken = yield this.getRequestToken();
                if (params instanceof form_data_1.default) {
                    params.append(auth_1.SESSION_TOKEN_KEY, requestToken);
                    return params;
                }
                return Object.assign({ [auth_1.SESSION_TOKEN_KEY]: requestToken }, params);
            }
            return params;
        });
    }
    buildHeaders(params) {
        const { basicAuth, userAgent } = params;
        const basicAuthHeaders = basicAuth
            ? {
                Authorization: `Basic ${js_base64_1.Base64.encode(`${basicAuth.username}:${basicAuth.password}`)}`,
            }
            : {};
        const platformDepsHeaders = platform_1.platformDeps.buildHeaders({ userAgent });
        const commonHeaders = Object.assign(Object.assign({}, platformDepsHeaders), basicAuthHeaders);
        if (!this.auth) {
            return {};
        }
        switch (this.auth.type) {
            case 'password': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: js_base64_1.Base64.encode(`${this.auth.username}:${this.auth.password}`) });
            }
            case 'adminToken': {
                const adminToken = this.auth.adminToken;
                return Object.assign(Object.assign({}, commonHeaders), { 'Admin-Authorization': adminToken });
            }
            case 'apiToken': {
                const apiToken = this.auth.apiToken;
                if (Array.isArray(apiToken)) {
                    return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken.join(',') });
                }
                return Object.assign(Object.assign({}, commonHeaders), { 'API-Authorization': apiToken });
            }
            case 'oAuthToken': {
                return Object.assign(Object.assign({}, commonHeaders), { Authorization: `Bearer ${this.auth.oAuthToken}` });
            }
            case 'customizeAuth': {
                return Object.assign(Object.assign({}, commonHeaders), { [this.auth.authHeader]: this.auth.getToken() });
            }
            default: {
                // https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
                return Object.assign(Object.assign({}, commonHeaders), { 'X-Requested-With': 'XMLHttpRequest' });
            }
        }
    }
    getRequestToken() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (this.requestToken === null) {
                this.requestToken = yield platform_1.platformDeps.getRequestToken();
            }
            return this.requestToken;
        });
    }
}
exports.HaloRequestConfigBuilder = HaloRequestConfigBuilder;
//# sourceMappingURL=HaloRequestConfigBuilder.js.map

/***/ }),

/***/ 672:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloResponseHandler = void 0;
const tslib_1 = __webpack_require__(6984);
const HaloRestAPIError_1 = __webpack_require__(5150);
class HaloResponseHandler {
    handle(response) {
        return response.then((res) => this.handleSuccessResponse(res), (error) => this.handleErrorResponse(error));
    }
    handleSuccessResponse(response) {
        return response.data;
    }
    handleErrorResponse(error) {
        if (!error.response) {
            // FIXME: find a better way to handle this error
            if (/MAC address verify failure/.test(error.toString())) {
                throw new Error('invalid clientCertAuth setting');
            }
            throw error;
        }
        const errorResponse = error.response;
        const { data } = errorResponse, rest = (0, tslib_1.__rest)(errorResponse, ["data"]);
        if (typeof data === 'string') {
            throw new Error(`${rest.status}: ${rest.statusText}`);
        }
        throw new HaloRestAPIError_1.HaloRestAPIError(Object.assign({ data }, rest));
    }
}
exports.HaloResponseHandler = HaloResponseHandler;
//# sourceMappingURL=HaloResponseHandler.js.map

/***/ }),

/***/ 1191:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRestAPIClient = void 0;
const http_1 = __webpack_require__(8305);
const HaloRequestConfigBuilder_1 = __webpack_require__(9720);
const HaloResponseHandler_1 = __webpack_require__(672);
const platform_1 = __webpack_require__(4031);
const buildDiscriminatedAuth = (auth) => {
    if ('username' in auth) {
        return Object.assign({ type: 'password' }, auth);
    }
    if ('apiToken' in auth) {
        return Object.assign({ type: 'apiToken' }, auth);
    }
    if ('adminToken' in auth) {
        return Object.assign({ type: 'adminToken' }, auth);
    }
    if ('oAuthToken' in auth) {
        return Object.assign({ type: 'oAuthToken' }, auth);
    }
    if ('type' in auth && auth['type'] == 'customizeAuth') {
        return auth;
    }
    return undefined;
};
class HaloRestAPIClient {
    constructor(options = {}) {
        var _a;
        this.baseUrl = platform_1.platformDeps.buildBaseUrl(options.baseUrl);
        const auth = buildDiscriminatedAuth((_a = options.auth) !== null && _a !== void 0 ? _a : {});
        const requestConfigBuilder = new HaloRequestConfigBuilder_1.HaloRequestConfigBuilder(Object.assign(Object.assign({}, options), { baseUrl: this.baseUrl, auth }));
        const responseHandler = new HaloResponseHandler_1.HaloResponseHandler();
        this.httpClient = new http_1.DefaultHttpClient({
            responseHandler,
            requestConfigBuilder,
        });
        this._interceptors = this.httpClient.interceptors;
    }
    static get version() {
        return platform_1.platformDeps.getVersion();
    }
    get interceptors() {
        return this._interceptors;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    buildHttpClient() {
        return this.httpClient;
    }
}
exports.HaloRestAPIClient = HaloRestAPIClient;
//# sourceMappingURL=HaloRestAPIClient.js.map

/***/ }),

/***/ 5150:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HaloRestAPIError = void 0;
class HaloRestAPIError extends Error {
    constructor(error) {
        const { data } = HaloRestAPIError.buildErrorResponseDate(error);
        super(data.message);
        this.name = 'HaloRestAPIError';
        this.data = data;
        this.status = data.status;
        this.headers = error.headers;
        this.message = `[${this.status}] ${this.message}`;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, HaloRestAPIError);
        }
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, HaloRestAPIError.prototype);
    }
    static buildErrorResponseDate(error) {
        // improvable
        return { data: error.data };
    }
}
exports.HaloRestAPIError = HaloRestAPIError;
//# sourceMappingURL=HaloRestAPIError.js.map

/***/ }),

/***/ 7040:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AxiosClient = void 0;
const tslib_1 = __webpack_require__(6984);
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__(299));
const InterceptorManager_1 = __webpack_require__(5231);
class AxiosClient {
    constructor({ responseHandler, requestConfigBuilder, }) {
        this.responseHandler = responseHandler;
        this.requestConfigBuilder = requestConfigBuilder;
        this.interceptors = {
            request: new InterceptorManager_1.RequestInterceptor(),
            response: new InterceptorManager_1.ResponseInterceptor(),
        };
    }
    get(path, params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params);
            return this.sendRequest(requestConfig);
        });
    }
    getData(path, params) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('get', path, params, {
                responseType: 'arraybuffer',
            });
            return this.sendRequest(requestConfig);
        });
    }
    post(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    postData(path, formData) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('post', path, formData);
            return this.sendRequest(requestConfig);
        });
    }
    put(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('put', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    delete(path, params, options) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const requestConfig = yield this.requestConfigBuilder.build('delete', path, params, options);
            return this.sendRequest(requestConfig);
        });
    }
    sendRequest(requestConfig) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return this.responseHandler.handle(
            // eslint-disable-next-line new-cap
            (0, axios_1.default)(Object.assign(Object.assign({}, requestConfig), { 
                // NOTE: For defining the max size of the http request content, `maxBodyLength` will be used after version 0.20.0.
                // `maxContentLength` will be still needed for defining the max size of the http response content.
                // ref: https://github.com/axios/axios/pull/2781/files
                // maxBodyLength: Infinity,
                maxContentLength: Infinity })));
        });
    }
}
exports.AxiosClient = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map

/***/ }),

/***/ 5231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseInterceptor = exports.RequestInterceptor = void 0;
const tslib_1 = __webpack_require__(6984);
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__(299));
class RequestInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.request.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.request.eject(id);
    }
}
exports.RequestInterceptor = RequestInterceptor;
class ResponseInterceptor {
    use(resolved, rejected) {
        return axios_1.default.interceptors.response.use(resolved, rejected);
    }
    eject(id) {
        axios_1.default.interceptors.response.eject(id);
    }
}
exports.ResponseInterceptor = ResponseInterceptor;
//# sourceMappingURL=InterceptorManager.js.map

/***/ }),

/***/ 8305:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultHttpClient = void 0;
var AxiosClient_1 = __webpack_require__(7040);
Object.defineProperty(exports, "DefaultHttpClient", ({ enumerable: true, get: function () { return AxiosClient_1.AxiosClient; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9892:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Axios = exports.FormData = exports.DefaultHttpClient = exports.HaloRequestConfigBuilder = exports.HaloResponseHandler = exports.HaloRestAPIClient = void 0;
const tslib_1 = __webpack_require__(6984);
const platform_1 = __webpack_require__(4031);
const browserDeps = (0, tslib_1.__importStar)(__webpack_require__(6945));
const form_data_1 = (0, tslib_1.__importDefault)(__webpack_require__(6243));
exports.FormData = form_data_1.default;
const axios_1 = (0, tslib_1.__importDefault)(__webpack_require__(299));
exports.Axios = axios_1.default;
(0, platform_1.injectPlatformDeps)(browserDeps);
var HaloRestAPIClient_1 = __webpack_require__(1191);
Object.defineProperty(exports, "HaloRestAPIClient", ({ enumerable: true, get: function () { return HaloRestAPIClient_1.HaloRestAPIClient; } }));
var HaloResponseHandler_1 = __webpack_require__(672);
Object.defineProperty(exports, "HaloResponseHandler", ({ enumerable: true, get: function () { return HaloResponseHandler_1.HaloResponseHandler; } }));
var HaloRequestConfigBuilder_1 = __webpack_require__(9720);
Object.defineProperty(exports, "HaloRequestConfigBuilder", ({ enumerable: true, get: function () { return HaloRequestConfigBuilder_1.HaloRequestConfigBuilder; } }));
var http_1 = __webpack_require__(8305);
Object.defineProperty(exports, "DefaultHttpClient", ({ enumerable: true, get: function () { return http_1.DefaultHttpClient; } }));
//# sourceMappingURL=index.browser.js.map

/***/ }),

/***/ 2925:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsupportedPlatformError = void 0;
class UnsupportedPlatformError extends Error {
    constructor(platform) {
        const message = `This function is not supported in ${platform} environment`;
        super(message);
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UnsupportedPlatformError);
        }
        this.name = 'UnsupportedPlatformError';
        this.platform = platform;
        // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, UnsupportedPlatformError.prototype);
    }
}
exports.UnsupportedPlatformError = UnsupportedPlatformError;
//# sourceMappingURL=UnsupportedPlatformError.js.map

/***/ }),

/***/ 6945:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVersion = exports.buildBaseUrl = exports.buildFormDataValue = exports.buildHeaders = exports.buildPlatformDependentConfig = exports.getDefaultAuth = exports.getRequestToken = exports.readFileFromPath = void 0;
const tslib_1 = __webpack_require__(6984);
const UnsupportedPlatformError_1 = __webpack_require__(2925);
const readFileFromPath = () => {
    throw new UnsupportedPlatformError_1.UnsupportedPlatformError('Browser');
};
exports.readFileFromPath = readFileFromPath;
const getRequestToken = () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    if (typeof halo === 'object' && halo !== null && typeof halo.getRequestToken === 'function') {
        return halo.getRequestToken();
    }
    throw new Error('session authentication must specify a request token');
});
exports.getRequestToken = getRequestToken;
const getDefaultAuth = () => {
    return {
        type: 'session',
    };
};
exports.getDefaultAuth = getDefaultAuth;
const buildPlatformDependentConfig = () => {
    return {};
};
exports.buildPlatformDependentConfig = buildPlatformDependentConfig;
const buildHeaders = () => {
    return {};
};
exports.buildHeaders = buildHeaders;
const buildFormDataValue = (data) => {
    return new Blob([data]);
};
exports.buildFormDataValue = buildFormDataValue;
const buildBaseUrl = (baseUrl) => {
    if (typeof baseUrl === 'undefined') {
        throw new Error('in browser environment, baseUrl is required');
    }
    return baseUrl;
};
exports.buildBaseUrl = buildBaseUrl;
const getVersion = () => {
    return PACKAGE_VERSION;
};
exports.getVersion = getVersion;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 4031:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectPlatformDeps = exports.platformDeps = void 0;
exports.platformDeps = {
    readFileFromPath: () => {
        throw new Error('not implemented');
    },
    getRequestToken: () => {
        throw new Error('not implemented');
    },
    getDefaultAuth: () => {
        throw new Error('not implemented');
    },
    buildPlatformDependentConfig: () => {
        throw new Error('not implemented');
    },
    buildHeaders: () => {
        throw new Error('not implemented');
    },
    buildFormDataValue: () => {
        throw new Error('not implemented');
    },
    buildBaseUrl: () => {
        throw new Error('not implemented');
    },
    getVersion: () => {
        throw new Error('not implemented');
    },
};
const injectPlatformDeps = (deps) => {
    exports.platformDeps.readFileFromPath = deps.readFileFromPath;
    exports.platformDeps.getRequestToken = deps.getRequestToken;
    exports.platformDeps.getDefaultAuth = deps.getDefaultAuth;
    exports.platformDeps.buildPlatformDependentConfig = deps.buildPlatformDependentConfig;
    exports.platformDeps.buildHeaders = deps.buildHeaders;
    exports.platformDeps.buildFormDataValue = deps.buildFormDataValue;
    exports.platformDeps.buildBaseUrl = deps.buildBaseUrl;
    exports.platformDeps.getVersion = deps.getVersion;
};
exports.injectPlatformDeps = injectPlatformDeps;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7764:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SESSION_TOKEN_KEY = void 0;
exports.SESSION_TOKEN_KEY = '__REQUEST_TOKEN__';
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 3388:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ 584:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ 299:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(2790);

/***/ }),

/***/ 2334:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);
var settle = __webpack_require__(9669);
var cookies = __webpack_require__(626);
var buildURL = __webpack_require__(5795);
var buildFullPath = __webpack_require__(8325);
var parseHeaders = __webpack_require__(6244);
var isURLSameOrigin = __webpack_require__(1307);
var createError = __webpack_require__(6171);
var defaults = __webpack_require__(9045);
var Cancel = __webpack_require__(6426);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 2790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);
var bind = __webpack_require__(6908);
var Axios = __webpack_require__(8388);
var mergeConfig = __webpack_require__(2534);
var defaults = __webpack_require__(9045);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(6426);
axios.CancelToken = __webpack_require__(343);
axios.isCancel = __webpack_require__(4376);
axios.VERSION = (__webpack_require__(6215).version);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(2682);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(2710);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 6426:
/***/ (function(module) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 343:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(6426);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 4376:
/***/ (function(module) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 8388:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);
var buildURL = __webpack_require__(5795);
var InterceptorManager = __webpack_require__(1816);
var dispatchRequest = __webpack_require__(6838);
var mergeConfig = __webpack_require__(2534);
var validator = __webpack_require__(6015);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 1816:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 8325:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(4108);
var combineURLs = __webpack_require__(1050);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 6171:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(1938);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 6838:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);
var transformData = __webpack_require__(5339);
var isCancel = __webpack_require__(4376);
var defaults = __webpack_require__(9045);
var Cancel = __webpack_require__(6426);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 1938:
/***/ (function(module) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ 2534:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ 9669:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(6171);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 5339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);
var defaults = __webpack_require__(9045);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ 9045:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);
var normalizeHeaderName = __webpack_require__(7567);
var enhanceError = __webpack_require__(1938);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(2334);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(2334);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 6215:
/***/ (function(module) {

module.exports = {
  "version": "0.24.0"
};

/***/ }),

/***/ 6908:
/***/ (function(module) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 5795:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 1050:
/***/ (function(module) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 626:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 4108:
/***/ (function(module) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 2710:
/***/ (function(module) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ 1307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 7567:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2070);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 2682:
/***/ (function(module) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 6015:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var VERSION = (__webpack_require__(6215).version);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ 2070:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(6908);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 3099:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(665);

var callBind = __webpack_require__(2755);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 2755:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3569);
var GetIntrinsic = __webpack_require__(665);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 6636:
/***/ (function(module) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ 1048:
/***/ (function(module) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ 2302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5383);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn{border-radius:3px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s;text-align:center;font-size:.875rem;line-height:1.25rem;-webkit-text-decoration-line:none;text-decoration-line:none;height:2.25rem;padding-left:1rem;padding-right:1rem;outline-width:0}.btn:hover{opacity:.9}.btn:active{opacity:1}.btn:disabled{opacity:.5}.btn-primary{background:#4ccba0}.btn-primary,.btn-secondary{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-secondary{background:#0e1731}.btn-danger{background:#d71d1d;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.btn-block{width:100%;display:block}.btn-lg{height:2.75rem;padding-left:1.25rem;padding-right:1.25rem;font-size:1.125rem;line-height:1.75rem}.btn-sm{height:1.75rem;padding-left:.75rem;padding-right:.75rem;font-size:.75rem;line-height:1rem}.btn-xs{height:1.5rem;padding-left:.5rem;padding-right:.5rem;font-size:.75rem;line-height:1rem}.btn-circle{width:2.25rem;padding:0;border-radius:9999px}.btn-lg.btn-circle{width:2.75rem}.btn-sm.btn-circle{width:1.75rem}.btn-xs.btn-circle{width:1.5rem}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5383);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_styles_github_markdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2368);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_styles_github_markdown_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:after,:before{--tw-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder,textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder, textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder, textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder, textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,0.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent;--tw-shadow:0 0 transparent;--tw-shadow-colored:0 0 transparent;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia:\n}.absolute{position:absolute}.relative{position:relative}.right-0{right:0}.bottom-7{bottom:1.75rem}.float-left{float:left}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.mr-2{margin-right:.5rem}.mb-2{margin-bottom:.5rem}.\\!mb-5{margin-bottom:1.25rem!important}.block{display:block}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.grid{display:grid}.w-full{width:100%}.flex-1{-ms-flex:1 1 0%;-webkit-box-flex:1;        flex:1 1 0%}.flex-1,.grow{-webkit-box-flex:1}.grow{-ms-flex-positive:1;-webkit-box-flex:1;        flex-grow:1}.transform{-webkit-transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gap-2{gap:.5rem}.self-center{-ms-flex-item-align:center;align-self:center}.border{border-width:1px}.p-0{padding:0}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.transition-all{-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.transition{-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s}.ease-in-out{-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.halo-comment.dark{color-scheme:dark;--color-prettylights-syntax-comment:#8b949e;--color-prettylights-syntax-constant:#79c0ff;--color-prettylights-syntax-entity:#d2a8ff;--color-prettylights-syntax-storage-modifier-import:#c9d1d9;--color-prettylights-syntax-entity-tag:#7ee787;--color-prettylights-syntax-keyword:#ff7b72;--color-prettylights-syntax-string:#a5d6ff;--color-prettylights-syntax-variable:#ffa657;--color-prettylights-syntax-brackethighlighter-unmatched:#f85149;--color-prettylights-syntax-invalid-illegal-text:#f0f6fc;--color-prettylights-syntax-invalid-illegal-bg:#8e1519;--color-prettylights-syntax-carriage-return-text:#f0f6fc;--color-prettylights-syntax-carriage-return-bg:#b62324;--color-prettylights-syntax-string-regexp:#7ee787;--color-prettylights-syntax-markup-list:#f2cc60;--color-prettylights-syntax-markup-heading:#1f6feb;--color-prettylights-syntax-markup-italic:#c9d1d9;--color-prettylights-syntax-markup-bold:#c9d1d9;--color-prettylights-syntax-markup-deleted-text:#ffdcd7;--color-prettylights-syntax-markup-deleted-bg:#67060c;--color-prettylights-syntax-markup-inserted-text:#aff5b4;--color-prettylights-syntax-markup-inserted-bg:#033a16;--color-prettylights-syntax-markup-changed-text:#ffdfb6;--color-prettylights-syntax-markup-changed-bg:#5a1e02;--color-prettylights-syntax-markup-ignored-text:#c9d1d9;--color-prettylights-syntax-markup-ignored-bg:#1158c7;--color-prettylights-syntax-meta-diff-range:#d2a8ff;--color-prettylights-syntax-brackethighlighter-angle:#8b949e;--color-prettylights-syntax-sublimelinter-gutter-mark:#484f58;--color-prettylights-syntax-constant-other-reference-link:#a5d6ff;--color-fg-default:#c9d1d9;--color-fg-muted:#8b949e;--color-fg-subtle:#484f58;--color-canvas-default:#0d1117;--color-canvas-subtle:#161b22;--color-border-default:#30363d;--color-border-muted:#21262d;--color-neutral-muted:rgba(110,118,129,0.4);--color-accent-fg:#58a6ff;--color-accent-emphasis:#1f6feb;--color-attention-subtle:rgba(187,128,9,0.15);--color-danger-fg:#f85149;--color-input-background:#2c2e33;--color-input-text:#c1c2c5}.halo-comment.light{color-scheme:light;--color-prettylights-syntax-comment:#6e7781;--color-prettylights-syntax-constant:#0550ae;--color-prettylights-syntax-entity:#8250df;--color-prettylights-syntax-storage-modifier-import:#24292f;--color-prettylights-syntax-entity-tag:#116329;--color-prettylights-syntax-keyword:#cf222e;--color-prettylights-syntax-string:#0a3069;--color-prettylights-syntax-variable:#953800;--color-prettylights-syntax-brackethighlighter-unmatched:#82071e;--color-prettylights-syntax-invalid-illegal-text:#f6f8fa;--color-prettylights-syntax-invalid-illegal-bg:#82071e;--color-prettylights-syntax-carriage-return-text:#f6f8fa;--color-prettylights-syntax-carriage-return-bg:#cf222e;--color-prettylights-syntax-string-regexp:#116329;--color-prettylights-syntax-markup-list:#3b2300;--color-prettylights-syntax-markup-heading:#0550ae;--color-prettylights-syntax-markup-italic:#24292f;--color-prettylights-syntax-markup-bold:#24292f;--color-prettylights-syntax-markup-deleted-text:#82071e;--color-prettylights-syntax-markup-deleted-bg:#ffebe9;--color-prettylights-syntax-markup-inserted-text:#116329;--color-prettylights-syntax-markup-inserted-bg:#dafbe1;--color-prettylights-syntax-markup-changed-text:#953800;--color-prettylights-syntax-markup-changed-bg:#ffd8b5;--color-prettylights-syntax-markup-ignored-text:#eaeef2;--color-prettylights-syntax-markup-ignored-bg:#0550ae;--color-prettylights-syntax-meta-diff-range:#8250df;--color-prettylights-syntax-brackethighlighter-angle:#57606a;--color-prettylights-syntax-sublimelinter-gutter-mark:#8c959f;--color-prettylights-syntax-constant-other-reference-link:#0a3069;--color-fg-default:#24292f;--color-fg-muted:#57606a;--color-fg-subtle:#6e7781;--color-canvas-default:#fff;--color-canvas-subtle:#f6f8fa;--color-border-default:#d0d7de;--color-border-muted:#f5f8fa;--color-neutral-muted:rgba(175,184,193,0.2);--color-accent-fg:#0969da;--color-accent-emphasis:#0969da;--color-attention-subtle:#fff8c5;--color-danger-fg:#cf222e;--color-input-background:#fff;--color-input-text:#333}.halo-comment{position:relative;font-size:14px;margin:0 auto;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:transparent;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}.halo-comment button,.halo-comment input,.halo-comment textarea{-webkit-appearance:none;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.halo-comment button:focus,.halo-comment input:focus,.halo-comment textarea:focus{outline:none}.halo-comment .avatar{border-radius:9999px;display:block;cursor:pointer;-o-object-fit:cover;object-fit:cover;width:48px;height:48px;-webkit-transition:all .8s;transition:all .8s}.halo-comment .avatar:hover{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.halo-comment .comment-editor{position:relative;z-index:1;-webkit-animation:top20 .5s;animation:top20 .5s}.halo-comment .comment-editor .inner{margin:auto}.halo-comment .comment-form input,.halo-comment .comment-form textarea{-webkit-box-shadow:none;box-shadow:none;border:1px solid var(--color-border-muted);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 10px;resize:vertical;background:var(--color-input-background);color:var(--color-input-text)}.halo-comment .comment-form input:focus,.halo-comment .comment-form textarea:focus{border-color:var(--color-fg-subtle)}.halo-comment .comment-textarea{width:100%}.halo-comment .comment-textarea textarea{font-size:14px;min-height:90px;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;overflow:hidden;overflow-wrap:break-word}.halo-comment .comment-preview{position:relative;min-height:90px;-webkit-box-shadow:none;box-shadow:none;border:1px solid var(--color-border-muted);border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 10px;overflow-wrap:break-word}.halo-comment .comment-preview img{max-width:50%}.halo-comment .comment-preview p{margin:0}.halo-comment .comment-empty{margin:30px 0;text-align:center;color:#8899a6}.halo-comment .comment-nodes{-webkit-animation:top20 1s;animation:top20 1s;position:relative}.halo-comment .comment-nodes .comment-editor{-webkit-animation:bottom20 .5s;animation:bottom20 .5s}.halo-comment .comment-nodes .index-1{overflow:hidden;margin-top:20px;padding-bottom:20px;border-bottom:1px solid var(--color-border-muted)}.halo-comment .comment-nodes .index-1>.children-nodes{margin-left:55px}.halo-comment .comment-nodes .index-1 .children-nodes .avatar{width:42px;height:42px}.halo-comment .comment-nodes li:last-child{border:0}.halo-comment .comment-nodes .commentator a:after,.halo-comment .comment-nodes .commentator a:before{display:none}.halo-comment .comment-body{position:relative;margin:0 auto;padding:0}.halo-comment .comment-main{margin-left:58px}.halo-comment .comment-ref{-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-animation:breath 1s ease-in-out infinite;animation:breath 1s ease-in-out infinite}.halo-comment .comment-meta{line-height:1}.halo-comment .comment-meta .useragent-info{margin-top:6px;font-size:12px;color:#657786}.halo-comment .comment-author{font-size:14px}.halo-comment .comment-author .author-name{font-size:16px;font-weight:700;color:#666}.halo-comment .comment-time{display:inline-block;margin-top:6px;font-size:12px;color:#657786}.halo-comment .comment-content{padding:15px 15px 15px 0;font-size:14px}.halo-comment .comment-content p{margin:0}.halo-comment .comment-content p img{max-width:50%}.halo-comment .comment-alert{margin-top:10px}.halo-comment .alert{-webkit-animation:top20 .5s;animation:top20 .5s;border-radius:4px;padding:8px 16px;background-color:#f44336;color:#fff;opacity:1;-webkit-transition:opacity .6s;transition:opacity .6s;margin-bottom:15px}.halo-comment .alert.success{background-color:#4caf50}.halo-comment .alert.info{background-color:#2196f3}.halo-comment .alert.warning{background-color:#ff9800}.halo-comment .alert .closebtn{margin-left:15px;color:#fff;font-weight:700;float:right;font-size:22px;line-height:16px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.halo-comment .alert .closebtn:hover{color:#000}@media only screen and (max-width:576px){.halo-comment .author-info input{width:100%;margin-right:0;margin-bottom:5px}}@-webkit-keyframes top20{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes top20{0%{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes bottom20{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes bottom20{0%{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes breath{0%{-webkit-transform:scale(.98);transform:scale(.98);opacity:.8}50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.98);transform:scale(.98);opacity:.8}}@keyframes breath{0%{-webkit-transform:scale(.98);transform:scale(.98);opacity:.8}50%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.98);transform:scale(.98);opacity:.8}}.hover\\:font-bold:hover{font-weight:700}.hover\\:opacity-80:hover{opacity:.8}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5383);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".comment-loader-container{-webkit-animation:top20 .5s;animation:top20 .5s;position:relative;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:30px 0}.comment-loader-container .comment-loader-default{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:30px}.comment-loader-container .comment-loader-default span{width:4px;height:15px;background-color:#898c7b}.comment-loader-container .comment-loader-default span:first-of-type{-webkit-animation:grow 1s ease-in-out -.45s infinite;animation:grow 1s ease-in-out -.45s infinite}.comment-loader-container .comment-loader-default span:nth-of-type(2){-webkit-animation:grow 1s ease-in-out -.3s infinite;animation:grow 1s ease-in-out -.3s infinite}.comment-loader-container .comment-loader-default span:nth-of-type(3){-webkit-animation:grow 1s ease-in-out -.15s infinite;animation:grow 1s ease-in-out -.15s infinite}.comment-loader-container .comment-loader-default span:nth-of-type(4){-webkit-animation:grow 1s ease-in-out infinite;animation:grow 1s ease-in-out infinite}@-webkit-keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}@keyframes grow{0%,to{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(2);transform:scaleY(2)}}.comment-loader-container .comment-loader-circle{border:3px solid #898c7b;border-top-color:#fff;border-radius:50%;width:2.5em;height:2.5em;-webkit-animation:spin .7s linear infinite;animation:spin .7s linear infinite}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.comment-loader-container .comment-loader-balls{width:3.5em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.comment-loader-container .comment-loader-balls div{width:.7em;height:.7em;border-radius:50%;background-color:#898c7b;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-animation:wave .7s ease-in-out infinite alternate;animation:wave .7s ease-in-out infinite alternate}.comment-loader-container .comment-loader-balls div:first-of-type{-webkit-animation-delay:-.4s;animation-delay:-.4s}.comment-loader-container .comment-loader-balls div:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes wave{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}@keyframes wave{0%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}to{-webkit-transform:translateY(100%);transform:translateY(100%)}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5383);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".comment-page{margin-top:30px;text-align:center;border-top:2px solid var(--color-border-muted)}.comment-page .page{display:inline-block;padding:10px 0;margin:0}.comment-page .page li{display:inline;margin-right:5px}.comment-page .page button{margin-bottom:8px;position:relative;font-size:inherit;font-family:inherit;padding:5px 10px;border:1px solid #d9d9d9;border-radius:4px;cursor:pointer;-webkit-transition:all .8s;transition:all .8s;font-weight:400;color:rgba(0,0,0,.65);background-color:#fff}.comment-page .page .active,.comment-page .page button:hover{color:#1890ff;border-color:#1890ff}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5383);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4446);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3649);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(8616), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;color:var(--color-fg-default);background-color:transparent;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;font-size:16px;line-height:1.5;word-wrap:break-word}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:\" \";display:inline-block;background-color:currentColor;-webkit-mask-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");mask-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.markdown-body details,.markdown-body figcaption,.markdown-body figure{display:block}.markdown-body summary{display:list-item}.markdown-body [hidden]{display:none!important}.markdown-body a{background-color:transparent;color:var(--color-accent-fg);text-decoration:none}.markdown-body a:active,.markdown-body a:hover{outline-width:0}.markdown-body abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.markdown-body b,.markdown-body strong{font-weight:600}.markdown-body dfn{font-style:italic}.markdown-body h1{margin:.67em 0;font-weight:600;padding-bottom:.3em;font-size:2em;border-bottom:1px solid var(--color-border-muted)}.markdown-body mark{background-color:var(--color-attention-subtle);color:var(--color-text-primary)}.markdown-body small{font-size:90%}.markdown-body sub,.markdown-body sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.markdown-body sub{bottom:-.25em}.markdown-body sup{top:-.5em}.markdown-body img{border-style:none;max-width:100%;-webkit-box-sizing:content-box;box-sizing:content-box;background-color:var(--color-canvas-default)}.markdown-body code,.markdown-body kbd,.markdown-body pre,.markdown-body samp{font-family:monospace,monospace;font-size:1em}.markdown-body figure{margin:1em 40px}.markdown-body hr{-webkit-box-sizing:content-box;box-sizing:content-box;overflow:hidden;background:transparent;border-bottom:1px solid var(--color-border-muted);height:.25em;padding:0;margin:24px 0;background-color:var(--color-border-default);border:0}.markdown-body input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body [type=button],.markdown-body [type=reset],.markdown-body [type=submit]{-webkit-appearance:button}.markdown-body [type=button]::-moz-focus-inner,.markdown-body [type=reset]::-moz-focus-inner,.markdown-body [type=submit]::-moz-focus-inner{border-style:none;padding:0}.markdown-body [type=button]:-moz-focusring,.markdown-body [type=reset]:-moz-focusring,.markdown-body [type=submit]:-moz-focusring{outline:1px dotted ButtonText}.markdown-body [type=checkbox],.markdown-body [type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.markdown-body [type=number]::-webkit-inner-spin-button,.markdown-body [type=number]::-webkit-outer-spin-button{height:auto}.markdown-body [type=search]{-webkit-appearance:textfield;outline-offset:-2px}.markdown-body [type=search]::-webkit-search-cancel-button,.markdown-body [type=search]::-webkit-search-decoration{-webkit-appearance:none}.markdown-body ::-webkit-input-placeholder{color:inherit;opacity:.54}.markdown-body ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.markdown-body a:hover{text-decoration:underline}.markdown-body hr:after,.markdown-body hr:before{display:table;content:\"\"}.markdown-body hr:after{clear:both}.markdown-body table{border-spacing:0;border-collapse:collapse;display:block;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;overflow:auto}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body details:not([open])>:not(summary){display:none!important}.markdown-body kbd{display:inline-block;padding:3px 5px;font:11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;line-height:10px;color:var(--color-fg-default);vertical-align:middle;background-color:var(--color-canvas-subtle);border:solid 1px var(--color-neutral-muted);border-bottom-color:var(--color-neutral-muted);border-radius:6px;-webkit-box-shadow:inset 0 -1px 0 var(--color-neutral-muted);box-shadow:inset 0 -1px 0 var(--color-neutral-muted)}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}.markdown-body h2{font-weight:600;padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid var(--color-border-muted)}.markdown-body h3{font-weight:600;font-size:1.25em}.markdown-body h4{font-weight:600;font-size:1em}.markdown-body h5{font-weight:600;font-size:.875em}.markdown-body h6{font-weight:600;font-size:.85em;color:var(--color-fg-muted)}.markdown-body p{margin-top:0;margin-bottom:10px}.markdown-body blockquote{margin:0;padding:0 1em;color:var(--color-fg-muted);border-left:.25em solid var(--color-border-default)}.markdown-body ol,.markdown-body ul{margin-top:0;margin-bottom:0;padding-left:2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code,.markdown-body pre,.markdown-body tt{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;word-wrap:normal}.markdown-body .octicon{display:inline-block;overflow:visible!important;vertical-align:text-bottom;fill:currentColor}.markdown-body ::-webkit-input-placeholder{color:var(--color-fg-subtle);opacity:1}.markdown-body ::-moz-placeholder{color:var(--color-fg-subtle);opacity:1}.markdown-body :-ms-input-placeholder{color:var(--color-fg-subtle);opacity:1}.markdown-body ::-ms-input-placeholder{color:var(--color-fg-subtle);opacity:1}.markdown-body ::placeholder{color:var(--color-fg-subtle);opacity:1}.markdown-body input::-webkit-inner-spin-button,.markdown-body input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none;appearance:none}.markdown-body .pl-c{color:var(--color-prettylights-syntax-comment)}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:var(--color-prettylights-syntax-constant)}.markdown-body .pl-e,.markdown-body .pl-en{color:var(--color-prettylights-syntax-entity)}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:var(--color-prettylights-syntax-storage-modifier-import)}.markdown-body .pl-ent{color:var(--color-prettylights-syntax-entity-tag)}.markdown-body .pl-k{color:var(--color-prettylights-syntax-keyword)}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:var(--color-prettylights-syntax-string)}.markdown-body .pl-smw,.markdown-body .pl-v{color:var(--color-prettylights-syntax-variable)}.markdown-body .pl-bu{color:var(--color-prettylights-syntax-brackethighlighter-unmatched)}.markdown-body .pl-ii{color:var(--color-prettylights-syntax-invalid-illegal-text);background-color:var(--color-prettylights-syntax-invalid-illegal-bg)}.markdown-body .pl-c2{color:var(--color-prettylights-syntax-carriage-return-text);background-color:var(--color-prettylights-syntax-carriage-return-bg)}.markdown-body .pl-sr .pl-cce{font-weight:700;color:var(--color-prettylights-syntax-string-regexp)}.markdown-body .pl-ml{color:var(--color-prettylights-syntax-markup-list)}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{font-weight:700;color:var(--color-prettylights-syntax-markup-heading)}.markdown-body .pl-mi{font-style:italic;color:var(--color-prettylights-syntax-markup-italic)}.markdown-body .pl-mb{font-weight:700;color:var(--color-prettylights-syntax-markup-bold)}.markdown-body .pl-md{color:var(--color-prettylights-syntax-markup-deleted-text);background-color:var(--color-prettylights-syntax-markup-deleted-bg)}.markdown-body .pl-mi1{color:var(--color-prettylights-syntax-markup-inserted-text);background-color:var(--color-prettylights-syntax-markup-inserted-bg)}.markdown-body .pl-mc{color:var(--color-prettylights-syntax-markup-changed-text);background-color:var(--color-prettylights-syntax-markup-changed-bg)}.markdown-body .pl-mi2{color:var(--color-prettylights-syntax-markup-ignored-text);background-color:var(--color-prettylights-syntax-markup-ignored-bg)}.markdown-body .pl-mdr{font-weight:700;color:var(--color-prettylights-syntax-meta-diff-range)}.markdown-body .pl-ba{color:var(--color-prettylights-syntax-brackethighlighter-angle)}.markdown-body .pl-sg{color:var(--color-prettylights-syntax-sublimelinter-gutter-mark)}.markdown-body .pl-corl{text-decoration:underline;color:var(--color-prettylights-syntax-constant-other-reference-link)}.markdown-body [data-catalyst]{display:block}.markdown-body g-emoji{font-family:Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:1em;font-style:normal!important;font-weight:400;line-height:1;vertical-align:-.075em}.markdown-body g-emoji img{width:1em;height:1em}.markdown-body:after,.markdown-body:before{display:table;content:\"\"}.markdown-body:after{clear:both}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .absent{color:var(--color-danger-fg)}.markdown-body .anchor{float:left;padding-right:4px;margin-left:-20px;line-height:1}.markdown-body .anchor:focus{outline:none}.markdown-body blockquote,.markdown-body details,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body sup>a:before{content:\"[\"}.markdown-body sup>a:after{content:\"]\"}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:var(--color-fg-default);vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1 code,.markdown-body h1 tt,.markdown-body h2 code,.markdown-body h2 tt,.markdown-body h3 code,.markdown-body h3 tt,.markdown-body h4 code,.markdown-body h4 tt,.markdown-body h5 code,.markdown-body h5 tt,.markdown-body h6 code,.markdown-body h6 tt{padding:0 .2em;font-size:inherit}.markdown-body ol.no-list,.markdown-body ul.no-list{padding:0;list-style-type:none}.markdown-body ol[type=\"1\"]{list-style-type:decimal}.markdown-body ol[type=a]{list-style-type:lower-alpha}.markdown-body ol[type=i]{list-style-type:lower-roman}.markdown-body div>ol:not([type]){list-style-type:decimal}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:16px}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:600}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body table th{font-weight:600}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid var(--color-border-default)}.markdown-body table tr{background-color:var(--color-canvas-default);border-top:1px solid var(--color-border-muted)}.markdown-body table tr:nth-child(2n){background-color:var(--color-canvas-subtle)}.markdown-body table img{background-color:transparent}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid var(--color-border-default)}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{display:block;padding:5px 0 0;clear:both;color:var(--color-fg-default)}.markdown-body span.align-center{display:block;overflow:hidden;clear:both}.markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{display:block;overflow:hidden;clear:both}.markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body tt{padding:.2em .4em;margin:0;font-size:85%;background-color:var(--color-neutral-muted);border-radius:6px}.markdown-body code br,.markdown-body tt br{display:none}.markdown-body del code{text-decoration:inherit}.markdown-body pre code{font-size:100%}.markdown-body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:var(--color-canvas-subtle);border-radius:6px}.markdown-body pre code,.markdown-body pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body .csv-data td,.markdown-body .csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.markdown-body .csv-data .blob-num{padding:10px 8px 9px;text-align:right;background:var(--color-canvas-default);border:0}.markdown-body .csv-data tr{border-top:0}.markdown-body .csv-data th{font-weight:600;background:var(--color-canvas-subtle);border-top:0}.markdown-body .footnotes{font-size:12px;color:var(--color-fg-muted);border-top:1px solid var(--color-border-default)}.markdown-body .footnotes ol{padding-left:16px}.markdown-body .footnotes li{position:relative}.markdown-body .footnotes li:target:before{position:absolute;top:-8px;right:-8px;bottom:-8px;left:-24px;pointer-events:none;content:\"\";border:2px solid var(--color-accent-emphasis);border-radius:6px}.markdown-body .footnotes li:target{color:var(--color-fg-default)}.markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item label{font-weight:400}.markdown-body .task-list-item.enabled label{cursor:pointer}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item .handle{display:none}.markdown-body .task-list-item-checkbox{margin:0 .2em .25em -1.6em;vertical-align:middle}.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body ::-webkit-calendar-picker-indicator{-webkit-filter:invert(50%);filter:invert(50%)}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4446:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 3649:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 5383:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 6243:
/***/ (function(module) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ 8640:
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 3569:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(8640);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 665:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(4906)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(3569);
var hasOwn = __webpack_require__(8416);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 4906:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(5251);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 5251:
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 8416:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3569);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 3149:
/***/ (function(module) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 1329:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

//
// THIS FILE IS AUTOMATICALLY GENERATED! DO NOT EDIT BY HAND!
//
;
(function (global, factory) {
     true
        ? module.exports = factory()
        : 0;
}((typeof self !== 'undefined' ? self
    : typeof window !== 'undefined' ? window
        : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g
            : this), function () {
    'use strict';
    /**
     *  base64.ts
     *
     *  Licensed under the BSD 3-Clause License.
     *    http://opensource.org/licenses/BSD-3-Clause
     *
     *  References:
     *    http://en.wikipedia.org/wiki/Base64
     *
     * @author Dan Kogai (https://github.com/dankogai)
     */
    var version = '3.7.2';
    /**
     * @deprecated use lowercase `version`.
     */
    var VERSION = version;
    var _hasatob = typeof atob === 'function';
    var _hasbtoa = typeof btoa === 'function';
    var _hasBuffer = typeof Buffer === 'function';
    var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
    var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
    var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var b64chs = Array.prototype.slice.call(b64ch);
    var b64tab = (function (a) {
        var tab = {};
        a.forEach(function (c, i) { return tab[c] = i; });
        return tab;
    })(b64chs);
    var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    var _fromCC = String.fromCharCode.bind(String);
    var _U8Afrom = typeof Uint8Array.from === 'function'
        ? Uint8Array.from.bind(Uint8Array)
        : function (it, fn) {
            if (fn === void 0) { fn = function (x) { return x; }; }
            return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
        };
    var _mkUriSafe = function (src) { return src
        .replace(/=/g, '').replace(/[+\/]/g, function (m0) { return m0 == '+' ? '-' : '_'; }); };
    var _tidyB64 = function (s) { return s.replace(/[^A-Za-z0-9\+\/]/g, ''); };
    /**
     * polyfill version of `btoa`
     */
    var btoaPolyfill = function (bin) {
        // console.log('polyfilled');
        var u32, c0, c1, c2, asc = '';
        var pad = bin.length % 3;
        for (var i = 0; i < bin.length;) {
            if ((c0 = bin.charCodeAt(i++)) > 255 ||
                (c1 = bin.charCodeAt(i++)) > 255 ||
                (c2 = bin.charCodeAt(i++)) > 255)
                throw new TypeError('invalid character found');
            u32 = (c0 << 16) | (c1 << 8) | c2;
            asc += b64chs[u32 >> 18 & 63]
                + b64chs[u32 >> 12 & 63]
                + b64chs[u32 >> 6 & 63]
                + b64chs[u32 & 63];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
    };
    /**
     * does what `window.btoa` of web browsers do.
     * @param {String} bin binary string
     * @returns {string} Base64-encoded string
     */
    var _btoa = _hasbtoa ? function (bin) { return btoa(bin); }
        : _hasBuffer ? function (bin) { return Buffer.from(bin, 'binary').toString('base64'); }
            : btoaPolyfill;
    var _fromUint8Array = _hasBuffer
        ? function (u8a) { return Buffer.from(u8a).toString('base64'); }
        : function (u8a) {
            // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
            var maxargs = 0x1000;
            var strs = [];
            for (var i = 0, l = u8a.length; i < l; i += maxargs) {
                strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
            }
            return _btoa(strs.join(''));
        };
    /**
     * converts a Uint8Array to a Base64 string.
     * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
     * @returns {string} Base64 string
     */
    var fromUint8Array = function (u8a, urlsafe) {
        if (urlsafe === void 0) { urlsafe = false; }
        return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
    };
    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
    // const utob = (src: string) => unescape(encodeURIComponent(src));
    // reverting good old fationed regexp
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                    + _fromCC(0x80 | (cc & 0x3f)))
                    : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                        + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                        + _fromCC(0x80 | (cc & 0x3f)));
        }
        else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
                + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
                + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                + _fromCC(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    /**
     * @deprecated should have been internal use only.
     * @param {string} src UTF-8 string
     * @returns {string} UTF-16 string
     */
    var utob = function (u) { return u.replace(re_utob, cb_utob); };
    //
    var _encode = _hasBuffer
        ? function (s) { return Buffer.from(s, 'utf8').toString('base64'); }
        : _TE
            ? function (s) { return _fromUint8Array(_TE.encode(s)); }
            : function (s) { return _btoa(utob(s)); };
    /**
     * converts a UTF-8-encoded string to a Base64 string.
     * @param {boolean} [urlsafe] if `true` make the result URL-safe
     * @returns {string} Base64 string
     */
    var encode = function (src, urlsafe) {
        if (urlsafe === void 0) { urlsafe = false; }
        return urlsafe
            ? _mkUriSafe(_encode(src))
            : _encode(src);
    };
    /**
     * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
     * @returns {string} Base64 string
     */
    var encodeURI = function (src) { return encode(src, true); };
    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
    // const btou = (src: string) => decodeURIComponent(escape(src));
    // reverting good old fationed regexp
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                    | ((0x3f & cccc.charCodeAt(1)) << 12)
                    | ((0x3f & cccc.charCodeAt(2)) << 6)
                    | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
                return (_fromCC((offset >>> 10) + 0xD800)
                    + _fromCC((offset & 0x3FF) + 0xDC00));
            case 3:
                return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    | (0x3f & cccc.charCodeAt(2)));
            default:
                return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                    | (0x3f & cccc.charCodeAt(1)));
        }
    };
    /**
     * @deprecated should have been internal use only.
     * @param {string} src UTF-16 string
     * @returns {string} UTF-8 string
     */
    var btou = function (b) { return b.replace(re_btou, cb_btou); };
    /**
     * polyfill version of `atob`
     */
    var atobPolyfill = function (asc) {
        // console.log('polyfilled');
        asc = asc.replace(/\s+/g, '');
        if (!b64re.test(asc))
            throw new TypeError('malformed base64.');
        asc += '=='.slice(2 - (asc.length & 3));
        var u24, bin = '', r1, r2;
        for (var i = 0; i < asc.length;) {
            u24 = b64tab[asc.charAt(i++)] << 18
                | b64tab[asc.charAt(i++)] << 12
                | (r1 = b64tab[asc.charAt(i++)]) << 6
                | (r2 = b64tab[asc.charAt(i++)]);
            bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
                : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                    : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
        }
        return bin;
    };
    /**
     * does what `window.atob` of web browsers do.
     * @param {String} asc Base64-encoded string
     * @returns {string} binary string
     */
    var _atob = _hasatob ? function (asc) { return atob(_tidyB64(asc)); }
        : _hasBuffer ? function (asc) { return Buffer.from(asc, 'base64').toString('binary'); }
            : atobPolyfill;
    //
    var _toUint8Array = _hasBuffer
        ? function (a) { return _U8Afrom(Buffer.from(a, 'base64')); }
        : function (a) { return _U8Afrom(_atob(a), function (c) { return c.charCodeAt(0); }); };
    /**
     * converts a Base64 string to a Uint8Array.
     */
    var toUint8Array = function (a) { return _toUint8Array(_unURI(a)); };
    //
    var _decode = _hasBuffer
        ? function (a) { return Buffer.from(a, 'base64').toString('utf8'); }
        : _TD
            ? function (a) { return _TD.decode(_toUint8Array(a)); }
            : function (a) { return btou(_atob(a)); };
    var _unURI = function (a) { return _tidyB64(a.replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/'; })); };
    /**
     * converts a Base64 string to a UTF-8 string.
     * @param {String} src Base64 string.  Both normal and URL-safe are supported
     * @returns {string} UTF-8 string
     */
    var decode = function (src) { return _decode(_unURI(src)); };
    /**
     * check if a value is a valid Base64 string
     * @param {String} src a value to check
      */
    var isValid = function (src) {
        if (typeof src !== 'string')
            return false;
        var s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
        return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
    };
    //
    var _noEnum = function (v) {
        return {
            value: v, enumerable: false, writable: true, configurable: true
        };
    };
    /**
     * extend String.prototype with relevant methods
     */
    var extendString = function () {
        var _add = function (name, body) { return Object.defineProperty(String.prototype, name, _noEnum(body)); };
        _add('fromBase64', function () { return decode(this); });
        _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
        _add('toBase64URI', function () { return encode(this, true); });
        _add('toBase64URL', function () { return encode(this, true); });
        _add('toUint8Array', function () { return toUint8Array(this); });
    };
    /**
     * extend Uint8Array.prototype with relevant methods
     */
    var extendUint8Array = function () {
        var _add = function (name, body) { return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body)); };
        _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
        _add('toBase64URI', function () { return fromUint8Array(this, true); });
        _add('toBase64URL', function () { return fromUint8Array(this, true); });
    };
    /**
     * extend Builtin prototypes with relevant methods
     */
    var extendBuiltins = function () {
        extendString();
        extendUint8Array();
    };
    var gBase64 = {
        version: version,
        VERSION: VERSION,
        atob: _atob,
        atobPolyfill: atobPolyfill,
        btoa: _btoa,
        btoaPolyfill: btoaPolyfill,
        fromBase64: decode,
        toBase64: encode,
        encode: encode,
        encodeURI: encodeURI,
        encodeURL: encodeURI,
        utob: utob,
        btou: btou,
        decode: decode,
        isValid: isValid,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array,
        extendString: extendString,
        extendUint8Array: extendUint8Array,
        extendBuiltins: extendBuiltins
    };
    //
    // export Base64 to the namespace
    //
    // ES5 is yet to have Object.assign() that may make transpilers unhappy.
    // gBase64.Base64 = Object.assign({}, gBase64);
    gBase64.Base64 = {};
    Object.keys(gBase64).forEach(function (k) { return gBase64.Base64[k] = gBase64[k]; });
    return gBase64;
}));


/***/ }),

/***/ 6706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(1048),
      utf8 = (__webpack_require__(6636).utf8),
      isBuffer = __webpack_require__(3149),
      bin = (__webpack_require__(6636).bin),

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ 2102:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var inspectCustom = (__webpack_require__(4121).custom);
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ('cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 5728:
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 5361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(9626);
var parse = __webpack_require__(8328);
var formats = __webpack_require__(5728);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 8328:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9403);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 9626:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(5714);
var utils = __webpack_require__(9403);
var formats = __webpack_require__(5728);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 9403:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(5728);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 5714:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(665);
var callBound = __webpack_require__(3099);
var inspect = __webpack_require__(2102);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ 6984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__values": function() { return /* binding */ __values; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 4014:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v0.7.31
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.31',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 255;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /\bqbcore\/([\w\.]+)/i                                              // WeChat Desktop for Windows Built-in Browser
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i                                                      // LieBao Browser
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.]+) .*mobile\/\w+ (safari)/i                        // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w\.]+) .*(mobile ?safari|safari)/i                     // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i              // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86)/i                              // Android-x86
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__.amdO) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),

/***/ 8211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8635);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 9303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7613);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 4119:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7121);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentLoading_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 4644:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5134);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_clonedRuleSet_22_0_rules_0_use_0_node_modules_pnpm_css_loader_6_7_1_webpack_5_70_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_1_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_2_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_4_13_webpack_5_70_0_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_3_node_modules_pnpm_sass_loader_12_6_0_sass_1_51_0_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_0_rules_0_use_4_node_modules_pnpm_vue_loader_15_9_8_1f9b6d6a8c5e3033a639476f0cf6d876_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 8635:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2302);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9943)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("56a75b60", content, shadowRoot)
};

/***/ }),

/***/ 7613:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4905);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9943)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("72c0a964", content, shadowRoot)
};

/***/ }),

/***/ 7121:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7291);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9943)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("68865aa0", content, shadowRoot)
};

/***/ }),

/***/ 5134:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9943)/* ["default"] */ .Z)
module.exports.__inject__ = function (shadowRoot) {
  add("4ed7ee80", content, shadowRoot)
};

/***/ }),

/***/ 9943:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ addStylesToShadowDOM; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 8616:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z\"/></svg>";

/***/ }),

/***/ 4121:
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			308: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.4_d5335da69185890ffa7afaf61a23b958/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__(3388)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external "Vue"
var external_Vue_namespaceObject = Vue;
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+web-component-wrapper@1.3.0/node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.7.1_webpack@5.70.0/node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__(4446);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Comment.vue?vue&type=template&id=555f7ed2&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"halo-comment",class:_vm.mergedConfigs.dark ? 'dark' : 'light',attrs:{"id":"halo-comment"}},[_c('comment-editor',{attrs:{"configs":_vm.mergedConfigs,"options":_vm.options,"target":_vm.target,"targetId":_vm.id}}),(!_vm.mergedConfigs.autoLoad && !_vm.list.loaded)?_c('div',{staticClass:"text-center py-10"},[_c('BaseButton',{attrs:{"type":"secondary"},on:{"click":_vm.handleGetComments}},[_vm._v("加载评论")])],1):_vm._e(),_c('comment-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.list.loading),expression:"list.loading"}],attrs:{"configs":_vm.configs}}),(_vm.list.data.length >= 1)?_c('ol',{staticClass:"comment-nodes"},[_vm._l((_vm.list.data),function(comment,index){return [_c('CommentNode',{key:index,attrs:{"comment":comment,"configs":_vm.mergedConfigs,"options":_vm.options,"target":_vm.target,"targetId":_vm.id}})]})],2):_vm._e(),(_vm.list.loaded && !_vm.list.loading && _vm.list.data.length <= 0)?_c('div',{staticClass:"comment-empty"},[_vm._v("暂无评论")]):_vm._e(),(_vm.list.pages > 1)?_c('pagination',{attrs:{"page":_vm.list.params.page,"size":_vm.list.size,"total":_vm.list.total},on:{"change":_vm.handlePaginationChange}}):_vm._e()],1)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CommentEditor.vue?vue&type=template&id=25e2b206&
var CommentEditorvue_type_template_id_25e2b206_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"comment-editor",attrs:{"role":"form"}},[_c('div',{staticClass:"flex my-5"},[_c('div',{staticClass:"mr-2"},[_c('img',{staticClass:"avatar",attrs:{"src":_vm.avatar}})]),_c('form',{staticClass:"comment-form flex-1"},[_c('div',{staticClass:"grid grid-cols-3 gap-2 mb-2"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.author),expression:"comment.author"}],staticClass:"w-full",attrs:{"id":"author","aria-required":"true","placeholder":"* 昵称","required":"required","type":"text"},domProps:{"value":(_vm.comment.author)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "author", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.email),expression:"comment.email"}],staticClass:"w-full",attrs:{"id":"email","placeholder":"电子邮件","type":"text"},domProps:{"value":(_vm.comment.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "email", $event.target.value)}}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.authorUrl),expression:"comment.authorUrl"}],staticClass:"w-full",attrs:{"id":"authorUrl","placeholder":"个人站点","type":"text"},domProps:{"value":(_vm.comment.authorUrl)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "authorUrl", $event.target.value)}}})]),(!_vm.previewMode)?_c('div',{staticClass:"comment-textarea mb-2"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comment.content),expression:"comment.content"}],ref:"commentTextarea",staticClass:"block w-full",attrs:{"placeholder":_vm.options.comment_content_placeholder || '撰写评论...',"aria-required":"true","required":"required"},domProps:{"value":(_vm.comment.content)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.comment, "content", $event.target.value)}}}),_c('span',{staticClass:"emoji-picker absolute right-0 bottom-7 cursor-pointer hover:opacity-80 transition-all"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","width":"18","height":"18"}},[_c('path',{attrs:{"fill":"none","d":"M0 0h24v24H0z"}}),_c('path',{attrs:{"d":"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-7h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0zm1-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z","fill":"rgba(174,174,174,1)"}})])])]):_c('div',{staticClass:"comment-preview markdown-body mb-2 w-full",domProps:{"innerHTML":_vm._s(_vm.renderedContent)}}),_c('ul',[_c('li',{staticClass:"inline-flex mr-2"},[_c('BaseButton',{attrs:{"type":"secondary"},on:{"click":_vm.handleSubmitClick}},[_vm._v("提交")])],1),(_vm.comment.content)?_c('li',{staticClass:"inline-flex"},[_c('BaseButton',{on:{"click":function($event){_vm.previewMode = !_vm.previewMode}}},[_vm._v(" "+_vm._s(_vm.previewMode ? '编辑' : '预览')+" ")])],1):_vm._e()]),_c('div',{staticClass:"comment-alert"},[(_vm.infoAlertVisible)?_vm._l((_vm.infoes),function(info,index){return _c('div',{key:index,staticClass:"alert info"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(info))])])}):_vm._e(),(_vm.successAlertVisible)?_vm._l((_vm.successes),function(success,index){return _c('div',{key:index,staticClass:"alert success"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(success))])])}):_vm._e(),(_vm.warningAlertVisible)?_vm._l((_vm.warnings),function(warning,index){return _c('div',{key:index,staticClass:"alert warning"},[_c('span',{staticClass:"closebtn",on:{"click":_vm.clearAlertClose}},[_vm._v("×")]),_c('strong',[_vm._v(_vm._s(warning))])])}):_vm._e()],2)])])])}
var CommentEditorvue_type_template_id_25e2b206_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/marked@4.0.15/node_modules/marked/lib/marked.esm.js
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function marked_esm_escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function marked_esm_unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(marked_esm_unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? marked_esm_escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: marked_esm_escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');

      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) { // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) { // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else { // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inlineTokens(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inlineTokens(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: marked_esm_escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : marked_esm_escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = marked_esm_escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = marked_esm_escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = marked_esm_escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0])) : cap[0];
      } else {
        text = marked_esm_escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : marked_esm_escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + marked_esm_escape(lang, true)
      + '">'
      + (escaped ? code : marked_esm_escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + marked_esm_escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            marked_esm_unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + marked_esm_escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + marked_esm_escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;

const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = (/* unused pure expression or super */ null && (marked));
const parser = Parser.parse;
const lexer = Lexer.lex;



// EXTERNAL MODULE: ./node_modules/.pnpm/md5@2.3.0/node_modules/md5/md5.js
var md5 = __webpack_require__(6706);
var md5_default = /*#__PURE__*/__webpack_require__.n(md5);
;// CONCATENATED MODULE: ./src/utils/util.js
/**
 * time ago
 * @param {*} time
 */
function timeAgo(time) {
  const currentTime = new Date().getTime();
  const between = currentTime - time;
  const days = Math.floor(between / (24 * 3600 * 1000));

  if (days === 0) {
    const leave1 = between % (24 * 3600 * 1000);
    const hours = Math.floor(leave1 / (3600 * 1000));

    if (hours === 0) {
      const leave2 = leave1 % (3600 * 1000);
      const minutes = Math.floor(leave2 / (60 * 1000));

      if (minutes === 0) {
        const leave3 = leave2 % (60 * 1000);
        const seconds = Math.round(leave3 / 1000);
        return seconds + ' 秒前';
      }

      return minutes + ' 分钟前';
    }

    return hours + ' 小时前';
  }

  if (days < 0) return '刚刚';

  if (days < 1) {
    return days + ' 天前';
  } else {
    return formatDate(time, 'yyyy/MM/dd hh:mm');
  }
}

function formatDate(date, fmt) {
  date = new Date(date);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
} // From <https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php>


function isUrl(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  return regexp.test(str);
}
function isEmpty(content) {
  return content === null || content === undefined || content === '';
}
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}
function validEmail(email) {
  const re = /^[A-Za-z1-9]+([-_.][A-Za-z1-9]+)*@([A-Za-z1-9]+[-.])+[A-Za-z]{2,8}$/;
  return re.test(email);
}
const queryStringify = query => {
  return Object.keys(query).map(key => `${key}=${encodeURIComponent(query[key] || '')}`).join('&');
};
function getUrlKey(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || '')[1].replace(/\+/g, '%20')) || null;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@halo-dev+content-api@1.0.0/node_modules/@halo-dev/content-api/lib/index.js
var lib = __webpack_require__(9142);
;// CONCATENATED MODULE: ./src/plugins/api-client.js

const haloRestApiClient = new lib.HaloRestAPIClient({
  baseUrl:  true ? '' : 0
});
const apiClient = new lib.ContentApiClient(haloRestApiClient);
/* harmony default export */ var api_client = (apiClient);
// EXTERNAL MODULE: ./node_modules/.pnpm/autosize@4.0.4/node_modules/autosize/dist/autosize.js
var autosize = __webpack_require__(584);
var autosize_default = /*#__PURE__*/__webpack_require__.n(autosize);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@joeattardi+emoji-button@4.6.4/node_modules/@joeattardi/emoji-button/dist/index.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,o,n,i){return new(n||(n=Promise))((function(a,r){function t(e){try{m(i.next(e))}catch(e){r(e)}}function s(e){try{m(i.throw(e))}catch(e){r(e)}}function m(e){var o;e.done?a(e.value):(o=e.value,o instanceof n?o:new n((function(e){e(o)}))).then(t,s)}m((i=i.apply(e,o||[])).next())}))}!function(e,o){void 0===o&&(o={});var n=o.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('@keyframes show {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  100% {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n@keyframes hide {\n  0% {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n\n  100% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1); \n  }\n}\n\n@keyframes shrink {\n  0% { \n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n\n  100% { \n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8); \n  }\n}\n\n@keyframes fade-in {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n@keyframes fade-out {\n  0% { opacity: 1; }\n  100% { opacity: 0; }\n}\n\n.emoji-picker {\n  --animation-duration: 0.2s;\n  --animation-easing: ease-in-out;\n\n  --emoji-size: 1.8em;\n  --emoji-size-multiplier: 1.5;\n  --emoji-preview-size: 2em;\n  --emoji-per-row: 8;\n  --row-count: 6;\n\n  --content-height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size) + var(--category-button-height) + 0.5em);\n\n  --category-name-size: 0.85em;\n\n  --category-button-height: 2em;\n  --category-button-size: 1.1em;\n  --category-border-bottom-size: 4px;\n\n  --focus-indicator-color: #999999;\n\n  --search-height: 2em;\n\n  --blue-color: #4F81E5;\n\n  --border-color: #CCCCCC;\n  --background-color: #FFFFFF;\n  --text-color: #000000;\n  --secondary-text-color: #666666;\n  --hover-color: #E8F4F9;\n  --search-focus-border-color: var(--blue-color);\n  --search-icon-color: #CCCCCC;\n  --overlay-background-color: rgba(0, 0, 0, 0.8);\n  --popup-background-color: #FFFFFF;\n  --category-button-color: #666666;\n  --category-button-active-color: var(--blue-color);\n\n  --dark-border-color: #666666;\n  --dark-background-color: #333333;\n  --dark-text-color: #FFFFFF;\n  --dark-secondary-text-color: #999999;\n  --dark-hover-color: #666666;\n  --dark-search-background-color: #666666;\n  --dark-search-border-color: #999999;\n  --dark-search-placeholder-color: #999999;\n  --dark-search-focus-border-color: #DBE5F9;\n  --dark-popup-background-color: #333333;\n  --dark-category-button-color: #FFFFFF;\n\n  --font: Arial, Helvetica, sans-serif;\n  --font-size: 16px;\n}\n\n.emoji-picker {\n  font-size: var(--font-size);\n  border: 1px solid var(--border-color);\n  border-radius: 5px;\n  background: var(--background-color);\n  width: calc(var(--emoji-per-row) * var(--emoji-size) * var(--emoji-size-multiplier) + 1em + 1.5rem);\n  font-family: var(--font);\n  overflow: hidden;\n  animation: show var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker * {\n  font-family: var(--font);\n  box-sizing: content-box;\n}\n\n.emoji-picker__overlay {\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.emoji-picker.hiding {\n  animation: hide var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark {\n  background: var(--dark-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-border-color);\n}\n\n.emoji-picker__content {\n  padding: 0.5em;\n  height: var(--content-height);\n  position: relative;\n}\n\n.emoji-picker__preview {\n  height: var(--emoji-preview-size);\n  padding: 0.5em;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.emoji-picker.dark .emoji-picker__preview {\n  border-top-color: var(--dark-border-color);\n}\n\n.emoji-picker__preview-emoji {\n  font-size: var(--emoji-preview-size);\n  margin-right: 0.25em;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n}\n\n.emoji-picker__preview-emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__preview-name {\n  color: var(--text-color);\n  font-size: 0.85em;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}\n\n.emoji-picker.dark .emoji-picker__preview-name {\n  color: var(--dark-text-color);\n}\n\n.emoji-picker__container {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(var(--emoji-per-row), calc(var(--emoji-size) * var(--emoji-size-multiplier)));\n  grid-auto-rows: calc(var(--emoji-size) * var(--emoji-size-multiplier));\n}\n\n.emoji-picker__container.search-results {\n  height: var(--content-height);\n  overflow-y: auto;\n}\n\n.emoji-picker__custom-emoji {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__emoji {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  font-size: var(--emoji-size);\n  width: 1.5em;\n  height: 1.5em;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.emoji-picker__emoji img.emoji {\n  height: 1em;\n  width: 1em;\n  margin: 0 .05em 0 .1em;\n  vertical-align: -0.1em;\n}\n\n.emoji-picker__emoji:focus, .emoji-picker__emoji:hover {\n  background: var(--hover-color);\n}\n\n.emoji-picker__emoji:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark .emoji-picker__emoji:focus, .emoji-picker.dark .emoji-picker__emoji:hover {\n  background: var(--dark-hover-color);\n}\n\n.emoji-picker__plugin-container {\n  margin: 0.5em;\n  display: flex;\n  flex-direction: row;\n}\n\n.emoji-picker__search-container {\n  margin: 0.5em;\n  position: relative;\n  height: var(--search-height);\n  display: flex;\n}\n\n.emoji-picker__search {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 3px;\n  border: 1px solid var(--border-color);\n  padding-right: 2em;\n  padding: 0.5em 2.25em 0.5em 0.5em;\n  font-size: 0.85em;\n  outline: none;\n}\n\n.emoji-picker.dark .emoji-picker__search {\n  background: var(--dark-search-background-color);\n  color: var(--dark-text-color);\n  border-color: var(--dark-search-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search::placeholder {\n  color: var(--dark-search-placeholder-color);\n}\n\n.emoji-picker__search:focus {\n  border: 1px solid var(--search-focus-border-color);\n}\n\n.emoji-picker.dark .emoji-picker__search:focus {\n  border-color: var(--dark-search-focus-border-color);\n}\n\n.emoji-picker__search-icon {\n  position: absolute;\n  color: var(--search-icon-color);\n  width: 1em;\n  height: 1em;\n  right: 0.75em;\n  top: calc(50% - 0.5em);\n}\n\n.emoji-picker__search-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found {\n  color: var(--secondary-text-color);\n  text-align: center;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.emoji-picker__search-not-found h2 {\n  color: var(--secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker.dark .emoji-picker__search-not-found h2 {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__search-not-found-icon {\n  font-size: 3em;\n}\n\n.emoji-picker__search-not-found-icon img {\n  width: 1em;\n  height: 1em;\n}\n\n.emoji-picker__search-not-found h2 {\n  margin: 0.5em 0;\n  font-size: 1em;\n}\n\n.emoji-picker__variant-overlay {\n  background: var(--overlay-background-color);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  animation: fade-in var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-overlay.hiding {\n  animation: fade-out var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker__variant-popup {\n  background: var(--popup-background-color);\n  margin: 0.5em;\n  padding: 0.5em;\n  text-align: center;\n  border-radius: 5px;\n  animation: grow var(--animation-duration) var(--animation-easing);\n  user-select: none;\n}\n\n.emoji-picker__variant-overlay.hiding .emoji-picker__variant-popup {\n  animation: shrink var(--animation-duration) var(--animation-easing);\n}\n\n.emoji-picker.dark .emoji-picker__variant-popup {\n  background: var(--dark-popup-background-color);\n}\n\n.emoji-picker__emojis {\n  overflow-y: auto;\n  position: relative;\n  height: calc((var(--emoji-size) * var(--emoji-size-multiplier)) * var(--row-count) + var(--category-name-size));\n}\n\n.emoji-picker__emojis.hiding {\n  animation: fade-out 0.05s var(--animation-easing);\n}\n\n.emoji-picker__emojis h2.emoji-picker__category-name {\n  font-size: 0.85em;\n  color: var(--secondary-text-color);\n  text-transform: uppercase;\n  margin: 0.25em 0;\n  text-align: left;\n}\n\n.emoji-picker.dark h2.emoji-picker__category-name {\n  color: var(--dark-secondary-text-color);\n}\n\n.emoji-picker__category-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  height: var(--category-button-height);\n  margin-bottom: 0.5em;\n}\n\nbutton.emoji-picker__category-button {\n  flex-grow: 1;\n  background: transparent;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n  font-size: var(--category-button-size);\n  vertical-align: middle;\n  color: var(--category-button-color);\n  border-bottom: var(--category-border-bottom-size) solid transparent;\n  outline: none;\n}\n\nbutton.emoji-picker__category-button img {\n  width: var(--category-button-size);\n  height: var(--category-button-size);\n}\n\n.emoji-picker.keyboard button.emoji-picker__category-button:focus {\n  outline: 1px dotted var(--focus-indicator-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n}\n\n.emoji-picker.dark button.emoji-picker__category-button {\n  color: var(--dark-category-button-color);\n}\n\nbutton.emoji-picker__category-button.active {\n  color: var(--category-button-active-color);\n  border-bottom: var(--category-border-bottom-size) solid var(--category-button-active-color);\n}\n\n@media (prefers-color-scheme: dark) {\n  .emoji-picker.auto {\n    background: var(--dark-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview {\n    border-top-color: var(--dark-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__preview-name {\n    color: var(--dark-text-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button {\n    color: var(--dark-category-button-color);\n  }\n\n  .emoji-picker.auto button.emoji-picker__category-button.active {\n    color: var(--category-button-active-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__emoji:focus, .emoji-picker.auto .emoji-picker__emoji:hover {\n    background: var(--dark-hover-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search {\n    background: var(--dark-search-background-color);\n    color: var(--dark-text-color);\n    border-color: var(--dark-search-border-color);\n  }\n \n  .emoji-picker.auto h2.emoji-picker__category-name {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search::placeholder {\n    color: var(--dark-search-placeholder-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search:focus {\n    border-color: var(--dark-search-focus-border-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__search-not-found h2 {\n    color: var(--dark-secondary-text-color);\n  }\n\n  .emoji-picker.auto .emoji-picker__variant-popup {\n    background: var(--dark-popup-background-color);\n  }\n}');var o=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=o.join(","),i="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function a(e,o){o=o||{};var a,t,s,d=[],g=[],u=e.querySelectorAll(n);for(o.includeContainer&&i.call(e,n)&&(u=Array.prototype.slice.apply(u)).unshift(e),a=0;a<u.length;a++)r(t=u[a])&&(0===(s=m(t))?d.push(t):g.push({documentOrder:a,tabIndex:s,node:t}));return g.sort(c).map((function(e){return e.node})).concat(d)}function r(e){return!(!t(e)||function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var o=function(e){for(var o=0;o<e.length;o++)if(e[o].checked)return e[o]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!o||o===e}(e)}(e)||m(e)<0)}function t(e){return!(e.disabled||function(e){return d(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}a.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,n)&&r(e)},a.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==i.call(e,s)&&t(e)};var s=o.concat("iframe").join(",");function m(e){var o=parseInt(e.getAttribute("tabindex"),10);return isNaN(o)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:o}function c(e,o){return e.tabIndex===o.tabIndex?e.documentOrder-o.documentOrder:e.tabIndex-o.tabIndex}function d(e){return"INPUT"===e.tagName}var g,u=a,l=function(){for(var e={},o=0;o<arguments.length;o++){var n=arguments[o];for(var i in n)v.call(n,i)&&(e[i]=n[i])}return e},v=Object.prototype.hasOwnProperty;var y,f=(y=[],{activateTrap:function(e){if(y.length>0){var o=y[y.length-1];o!==e&&o.pause()}var n=y.indexOf(e);-1===n||y.splice(n,1),y.push(e)},deactivateTrap:function(e){var o=y.indexOf(e);-1!==o&&y.splice(o,1),y.length>0&&y[y.length-1].unpause()}});function j(e){return setTimeout(e,0)}var h=function(e,o){var n=document,i="string"==typeof e?n.querySelector(e):e,a=l({returnFocusOnDeactivate:!0,escapeDeactivates:!0},o),r={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},t={activate:function(e){if(r.active)return;w(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=n.activeElement;var o=e&&e.onActivate?e.onActivate:a.onActivate;o&&o();return m(),t},deactivate:s,pause:function(){if(r.paused||!r.active)return;r.paused=!0,c()},unpause:function(){if(!r.paused||!r.active)return;r.paused=!1,w(),m()}};return t;function s(e){if(r.active){clearTimeout(g),c(),r.active=!1,r.paused=!1,f.deactivateTrap(t);var o=e&&void 0!==e.onDeactivate?e.onDeactivate:a.onDeactivate;return o&&o(),(e&&void 0!==e.returnFocus?e.returnFocus:a.returnFocusOnDeactivate)&&j((function(){var e;k((e=r.nodeFocusedBeforeActivation,d("setReturnFocus")||e))})),t}}function m(){if(r.active)return f.activateTrap(t),g=j((function(){k(v())})),n.addEventListener("focusin",h,!0),n.addEventListener("mousedown",y,{capture:!0,passive:!1}),n.addEventListener("touchstart",y,{capture:!0,passive:!1}),n.addEventListener("click",b,{capture:!0,passive:!1}),n.addEventListener("keydown",p,{capture:!0,passive:!1}),t}function c(){if(r.active)return n.removeEventListener("focusin",h,!0),n.removeEventListener("mousedown",y,!0),n.removeEventListener("touchstart",y,!0),n.removeEventListener("click",b,!0),n.removeEventListener("keydown",p,!0),t}function d(e){var o=a[e],i=o;if(!o)return null;if("string"==typeof o&&!(i=n.querySelector(o)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof o&&!(i=o()))throw new Error("`"+e+"` did not return a node");return i}function v(){var e;if(!(e=null!==d("initialFocus")?d("initialFocus"):i.contains(n.activeElement)?n.activeElement:r.firstTabbableNode||d("fallbackFocus")))throw new Error("Your focus-trap needs to have at least one focusable element");return e}function y(e){i.contains(e.target)||(a.clickOutsideDeactivates?s({returnFocus:!u.isFocusable(e.target)}):a.allowOutsideClick&&a.allowOutsideClick(e)||e.preventDefault())}function h(e){i.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),k(r.mostRecentlyFocusedNode||v()))}function p(e){if(!1!==a.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void s();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(w(),e.shiftKey&&e.target===r.firstTabbableNode)return e.preventDefault(),void k(r.lastTabbableNode);if(!e.shiftKey&&e.target===r.lastTabbableNode)e.preventDefault(),k(r.firstTabbableNode)}(e)}function b(e){a.clickOutsideDeactivates||i.contains(e.target)||a.allowOutsideClick&&a.allowOutsideClick(e)||(e.preventDefault(),e.stopImmediatePropagation())}function w(){var e=u(i);r.firstTabbableNode=e[0]||v(),r.lastTabbableNode=e[e.length-1]||v()}function k(e){e!==n.activeElement&&(e&&e.focus?(e.focus(),r.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(e)&&e.select()):k(v()))}};function p(){}p.prototype={on:function(e,o,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:o,ctx:n}),this},once:function(e,o,n){var i=this;function a(){i.off(e,a),o.apply(n,arguments)}return a._=o,this.on(e,a,n)},emit:function(e){for(var o=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,a=n.length;i<a;i++)n[i].fn.apply(n[i].ctx,o);return this},off:function(e,o){var n=this.e||(this.e={}),i=n[e],a=[];if(i&&o)for(var r=0,t=i.length;r<t;r++)i[r].fn!==o&&i[r].fn._!==o&&a.push(i[r]);return a.length?n[e]=a:delete n[e],this}};var b=p;function w(e){var o=e.getBoundingClientRect();return{width:o.width,height:o.height,top:o.top,right:o.right,bottom:o.bottom,left:o.left,x:o.left,y:o.top}}function k(e){if("[object Window]"!==e.toString()){var o=e.ownerDocument;return o?o.defaultView:window}return e}function x(e){var o=k(e);return{scrollLeft:o.pageXOffset,scrollTop:o.pageYOffset}}function C(e){return e instanceof k(e).Element||e instanceof Element}function E(e){return e instanceof k(e).HTMLElement||e instanceof HTMLElement}function _(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){return(C(e)?e.ownerDocument:e.document).documentElement}function O(e){return w(z(e)).left+x(e).scrollLeft}function I(e){return k(e).getComputedStyle(e)}function S(e){var o=I(e),n=o.overflow,i=o.overflowX,a=o.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+i)}function P(e,o,n){void 0===n&&(n=!1);var i,a,r=z(o),t=w(e),s={scrollLeft:0,scrollTop:0},m={x:0,y:0};return n||(("body"!==_(o)||S(r))&&(s=(i=o)!==k(i)&&E(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:x(i)),E(o)?((m=w(o)).x+=o.clientLeft,m.y+=o.clientTop):r&&(m.x=O(r))),{x:t.left+s.scrollLeft-m.x,y:t.top+s.scrollTop-m.y,width:t.width,height:t.height}}function M(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function A(e){return"html"===_(e)?e:e.assignedSlot||e.parentNode||e.host||z(e)}function L(e){return["html","body","#document"].indexOf(_(e))>=0?e.ownerDocument.body:E(e)&&S(e)?e:L(A(e))}function T(e,o){void 0===o&&(o=[]);var n=L(e),i="body"===_(n),a=k(n),r=i?[a].concat(a.visualViewport||[],S(n)?n:[]):n,t=o.concat(r);return i?t:t.concat(T(A(r)))}function N(e){return["table","td","th"].indexOf(_(e))>=0}function F(e){return E(e)&&"fixed"!==I(e).position?e.offsetParent:null}function B(e){for(var o=k(e),n=F(e);n&&N(n);)n=F(n);return n&&"body"===_(n)&&"static"===I(n).position?o:n||o}p.TinyEmitter=b;var D="top",R="bottom",q="right",V="left",H=[D,R,q,V],U=H.reduce((function(e,o){return e.concat([o+"-start",o+"-end"])}),[]),W=[].concat(H,["auto"]).reduce((function(e,o){return e.concat([o,o+"-start",o+"-end"])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function J(e){var o=new Map,n=new Set,i=[];function a(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var i=o.get(e);i&&a(i)}})),i.push(e)}return e.forEach((function(e){o.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||a(e)})),i}function G(e){return e.split("-")[0]}var X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return!o.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function $(e){void 0===e&&(e={});var o=e,n=o.defaultModifiers,i=void 0===n?[]:n,a=o.defaultOptions,r=void 0===a?X:a;return function(e,o,n){void 0===n&&(n=r);var a,t,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,{},r),modifiersData:{},elements:{reference:e,popper:o},attributes:{},styles:{}},m=[],c=!1,d={state:s,setOptions:function(n){g(),s.options=Object.assign({},r,{},s.options,{},n),s.scrollParents={reference:C(e)?T(e):e.contextElement?T(e.contextElement):[],popper:T(o)};var a,t,c=function(e){var o=J(e);return K.reduce((function(e,n){return e.concat(o.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(i,s.options.modifiers),t=a.reduce((function(e,o){var n=e[o.name];return e[o.name]=n?Object.assign({},n,{},o,{options:Object.assign({},n.options,{},o.options),data:Object.assign({},n.data,{},o.data)}):o,e}),{}),Object.keys(t).map((function(e){return t[e]}))));return s.orderedModifiers=c.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var o=e.name,n=e.options,i=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var r=a({state:s,name:o,instance:d,options:i}),t=function(){};m.push(r||t)}})),d.update()},forceUpdate:function(){if(!c){var e=s.elements,o=e.reference,n=e.popper;if(Y(o,n)){s.rects={reference:P(o,B(n),"fixed"===s.options.strategy),popper:M(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var i=0;i<s.orderedModifiers.length;i++)if(!0!==s.reset){var a=s.orderedModifiers[i],r=a.fn,t=a.options,m=void 0===t?{}:t,g=a.name;"function"==typeof r&&(s=r({state:s,options:m,name:g,instance:d})||s)}else s.reset=!1,i=-1}}},update:(a=function(){return new Promise((function(e){d.forceUpdate(),e(s)}))},function(){return t||(t=new Promise((function(e){Promise.resolve().then((function(){t=void 0,e(a())}))}))),t}),destroy:function(){g(),c=!0}};if(!Y(e,o))return d;function g(){m.forEach((function(e){return e()})),m=[]}return d.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),d}}var Z={passive:!0};function Q(e){return e.split("-")[1]}function ee(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e){var o,n=e.reference,i=e.element,a=e.placement,r=a?G(a):null,t=a?Q(a):null,s=n.x+n.width/2-i.width/2,m=n.y+n.height/2-i.height/2;switch(r){case D:o={x:s,y:n.y-i.height};break;case R:o={x:s,y:n.y+n.height};break;case q:o={x:n.x+n.width,y:m};break;case V:o={x:n.x-i.width,y:m};break;default:o={x:n.x,y:n.y}}var c=r?ee(r):null;if(null!=c){var d="y"===c?"height":"width";switch(t){case"start":o[c]=Math.floor(o[c])-Math.floor(n[d]/2-i[d]/2);break;case"end":o[c]=Math.floor(o[c])+Math.ceil(n[d]/2-i[d]/2)}}return o}var ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ie(e){var o,n=e.popper,i=e.popperRect,a=e.placement,r=e.offsets,t=e.position,s=e.gpuAcceleration,m=e.adaptive,c=function(e){var o=e.x,n=e.y,i=window.devicePixelRatio||1;return{x:Math.round(o*i)/i||0,y:Math.round(n*i)/i||0}}(r),d=c.x,g=c.y,u=r.hasOwnProperty("x"),l=r.hasOwnProperty("y"),v=V,y=D,f=window;if(m){var j=B(n);j===k(n)&&(j=z(n)),a===D&&(y=R,g-=j.clientHeight-i.height,g*=s?1:-1),a===V&&(v=q,d-=j.clientWidth-i.width,d*=s?1:-1)}var h,p=Object.assign({position:t},m&&ne);return s?Object.assign({},p,((h={})[y]=l?"0":"",h[v]=u?"0":"",h.transform=(f.devicePixelRatio||1)<2?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",h)):Object.assign({},p,((o={})[y]=l?g+"px":"",o[v]=u?d+"px":"",o.transform="",o))}var ae={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ae[e]}))}var te={start:"end",end:"start"};function se(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function me(e){return parseFloat(e)||0}function ce(e){var o=k(e),n=function(e){var o=E(e)?I(e):{};return{top:me(o.borderTopWidth),right:me(o.borderRightWidth),bottom:me(o.borderBottomWidth),left:me(o.borderLeftWidth)}}(e),i="html"===_(e),a=O(e),r=e.clientWidth+n.right,t=e.clientHeight+n.bottom;return i&&o.innerHeight-e.clientHeight>50&&(t=o.innerHeight-n.bottom),{top:i?0:e.clientTop,right:e.clientLeft>n.left?n.right:i?o.innerWidth-r-a:e.offsetWidth-r,bottom:i?o.innerHeight-t:e.offsetHeight-t,left:i?a:e.clientLeft}}function de(e,o){var n=Boolean(o.getRootNode&&o.getRootNode().host);if(e.contains(o))return!0;if(n){var i=o;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,o){return"viewport"===o?ge(function(e){var o=k(e),n=o.visualViewport,i=o.innerWidth,a=o.innerHeight;return n&&/iPhone|iPod|iPad/.test(navigator.platform)&&(i=n.width,a=n.height),{width:i,height:a,x:0,y:0}}(e)):E(o)?w(o):ge(function(e){var o=k(e),n=x(e),i=P(z(e),o);return i.height=Math.max(i.height,o.innerHeight),i.width=Math.max(i.width,o.innerWidth),i.x=-n.scrollLeft,i.y=-n.scrollTop,i}(z(e)))}function le(e,o,n){var i="clippingParents"===o?function(e){var o=T(e),n=["absolute","fixed"].indexOf(I(e).position)>=0&&E(e)?B(e):e;return C(n)?o.filter((function(e){return C(e)&&de(e,n)})):[]}(e):[].concat(o),a=[].concat(i,[n]),r=a[0],t=a.reduce((function(o,n){var i=ue(e,n),a=ce(E(n)?n:z(e));return o.top=Math.max(i.top+a.top,o.top),o.right=Math.min(i.right-a.right,o.right),o.bottom=Math.min(i.bottom-a.bottom,o.bottom),o.left=Math.max(i.left+a.left,o.left),o}),ue(e,r));return t.width=t.right-t.left,t.height=t.bottom-t.top,t.x=t.left,t.y=t.top,t}function ve(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},e)}function ye(e,o){return o.reduce((function(o,n){return o[n]=e,o}),{})}function fe(e,o){void 0===o&&(o={});var n=o,i=n.placement,a=void 0===i?e.placement:i,r=n.boundary,t=void 0===r?"clippingParents":r,s=n.rootBoundary,m=void 0===s?"viewport":s,c=n.elementContext,d=void 0===c?"popper":c,g=n.altBoundary,u=void 0!==g&&g,l=n.padding,v=void 0===l?0:l,y=ve("number"!=typeof v?v:ye(v,H)),f="popper"===d?"reference":"popper",j=e.elements.reference,h=e.rects.popper,p=e.elements[u?f:d],b=le(C(p)?p:p.contextElement||z(e.elements.popper),t,m),k=w(j),x=oe({reference:k,element:h,strategy:"absolute",placement:a}),E=ge(Object.assign({},h,{},x)),_="popper"===d?E:k,O={top:b.top-_.top+y.top,bottom:_.bottom-b.bottom+y.bottom,left:b.left-_.left+y.left,right:_.right-b.right+y.right},I=e.modifiersData.offset;if("popper"===d&&I){var S=I[a];Object.keys(O).forEach((function(e){var o=[q,R].indexOf(e)>=0?1:-1,n=[D,R].indexOf(e)>=0?"y":"x";O[e]+=S[n]*o}))}return O}function je(e,o){void 0===o&&(o={});var n=o,i=n.placement,a=n.boundary,r=n.rootBoundary,t=n.padding,s=n.flipVariations,m=n.allowedAutoPlacements,c=void 0===m?W:m,d=Q(i),g=(d?s?U:U.filter((function(e){return Q(e)===d})):H).filter((function(e){return c.indexOf(e)>=0})).reduce((function(o,n){return o[n]=fe(e,{placement:n,boundary:a,rootBoundary:r,padding:t})[G(n)],o}),{});return Object.keys(g).sort((function(e,o){return g[e]-g[o]}))}function he(e,o,n){return Math.max(e,Math.min(o,n))}function pe(e,o,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-o.height-n.y,right:e.right-o.width+n.x,bottom:e.bottom-o.height+n.y,left:e.left-o.width-n.x}}function be(e){return[D,q,R,V].some((function(o){return e[o]>=0}))}var we=$({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var o=e.state,n=e.instance,i=e.options,a=i.scroll,r=void 0===a||a,t=i.resize,s=void 0===t||t,m=k(o.elements.popper),c=[].concat(o.scrollParents.reference,o.scrollParents.popper);return r&&c.forEach((function(e){e.addEventListener("scroll",n.update,Z)})),s&&m.addEventListener("resize",n.update,Z),function(){r&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Z)})),s&&m.removeEventListener("resize",n.update,Z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var o=e.state,n=e.name;o.modifiersData[n]=oe({reference:o.rects.reference,element:o.rects.popper,strategy:"absolute",placement:o.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var o=e.state,n=e.options,i=n.gpuAcceleration,a=void 0===i||i,r=n.adaptive,t=void 0===r||r,s={placement:G(o.placement),popper:o.elements.popper,popperRect:o.rects.popper,gpuAcceleration:a};null!=o.modifiersData.popperOffsets&&(o.styles.popper=Object.assign({},o.styles.popper,{},ie(Object.assign({},s,{offsets:o.modifiersData.popperOffsets,position:o.options.strategy,adaptive:t})))),null!=o.modifiersData.arrow&&(o.styles.arrow=Object.assign({},o.styles.arrow,{},ie(Object.assign({},s,{offsets:o.modifiersData.arrow,position:"absolute",adaptive:!1})))),o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-placement":o.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var o=e.state;Object.keys(o.elements).forEach((function(e){var n=o.styles[e]||{},i=o.attributes[e]||{},a=o.elements[e];E(a)&&_(a)&&(Object.assign(a.style,n),Object.keys(i).forEach((function(e){var o=i[e];!1===o?a.removeAttribute(e):a.setAttribute(e,!0===o?"":o)})))}))},effect:function(e){var o=e.state,n={popper:{position:o.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(o.elements.popper.style,n.popper),o.elements.arrow&&Object.assign(o.elements.arrow.style,n.arrow),function(){Object.keys(o.elements).forEach((function(e){var i=o.elements[e],a=o.attributes[e]||{},r=Object.keys(o.styles.hasOwnProperty(e)?o.styles[e]:n[e]).reduce((function(e,o){return e[o]="",e}),{});E(i)&&_(i)&&(Object.assign(i.style,r),Object.keys(a).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var o=e.state,n=e.options,i=e.name,a=n.offset,r=void 0===a?[0,0]:a,t=W.reduce((function(e,n){return e[n]=function(e,o,n){var i=G(e),a=[V,D].indexOf(i)>=0?-1:1,r="function"==typeof n?n(Object.assign({},o,{placement:e})):n,t=r[0],s=r[1];return t=t||0,s=(s||0)*a,[V,q].indexOf(i)>=0?{x:s,y:t}:{x:t,y:s}}(n,o.rects,r),e}),{}),s=t[o.placement],m=s.x,c=s.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=m,o.modifiersData.popperOffsets.y+=c),o.modifiersData[i]=t}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var o=e.state,n=e.options,i=e.name;if(!o.modifiersData[i]._skip){for(var a=n.mainAxis,r=void 0===a||a,t=n.altAxis,s=void 0===t||t,m=n.fallbackPlacements,c=n.padding,d=n.boundary,g=n.rootBoundary,u=n.altBoundary,l=n.flipVariations,v=void 0===l||l,y=n.allowedAutoPlacements,f=o.options.placement,j=G(f),h=m||(j===f||!v?[re(f)]:function(e){if("auto"===G(e))return[];var o=re(e);return[se(e),o,se(o)]}(f)),p=[f].concat(h).reduce((function(e,n){return e.concat("auto"===G(n)?je(o,{placement:n,boundary:d,rootBoundary:g,padding:c,flipVariations:v,allowedAutoPlacements:y}):n)}),[]),b=o.rects.reference,w=o.rects.popper,k=new Map,x=!0,C=p[0],E=0;E<p.length;E++){var _=p[E],z=G(_),O="start"===Q(_),I=[D,R].indexOf(z)>=0,S=I?"width":"height",P=fe(o,{placement:_,boundary:d,rootBoundary:g,altBoundary:u,padding:c}),M=I?O?q:V:O?R:D;b[S]>w[S]&&(M=re(M));var A=re(M),L=[];if(r&&L.push(P[z]<=0),s&&L.push(P[M]<=0,P[A]<=0),L.every((function(e){return e}))){C=_,x=!1;break}k.set(_,L)}if(x)for(var T=function(e){var o=p.find((function(o){var n=k.get(o);if(n)return n.slice(0,e).every((function(e){return e}))}));if(o)return C=o,"break"},N=v?3:1;N>0;N--){if("break"===T(N))break}o.placement!==C&&(o.modifiersData[i]._skip=!0,o.placement=C,o.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var o=e.state,n=e.options,i=e.name,a=n.mainAxis,r=void 0===a||a,t=n.altAxis,s=void 0!==t&&t,m=n.boundary,c=n.rootBoundary,d=n.altBoundary,g=n.padding,u=n.tether,l=void 0===u||u,v=n.tetherOffset,y=void 0===v?0:v,f=fe(o,{boundary:m,rootBoundary:c,padding:g,altBoundary:d}),j=G(o.placement),h=Q(o.placement),p=!h,b=ee(j),w="x"===b?"y":"x",k=o.modifiersData.popperOffsets,x=o.rects.reference,C=o.rects.popper,E="function"==typeof y?y(Object.assign({},o.rects,{placement:o.placement})):y,_={x:0,y:0};if(k){if(r){var z="y"===b?D:V,O="y"===b?R:q,I="y"===b?"height":"width",S=k[b],P=k[b]+f[z],A=k[b]-f[O],L=l?-C[I]/2:0,T="start"===h?x[I]:C[I],N="start"===h?-C[I]:-x[I],F=o.elements.arrow,H=l&&F?M(F):{width:0,height:0},U=o.modifiersData["arrow#persistent"]?o.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},W=U[z],K=U[O],J=he(0,x[I],H[I]),X=p?x[I]/2-L-J-W-E:T-J-W-E,Y=p?-x[I]/2+L+J+K+E:N+J+K+E,$=o.elements.arrow&&B(o.elements.arrow),Z=$?"y"===b?$.clientTop||0:$.clientLeft||0:0,oe=o.modifiersData.offset?o.modifiersData.offset[o.placement][b]:0,ne=k[b]+X-oe-Z,ie=k[b]+Y-oe,ae=he(l?Math.min(P,ne):P,S,l?Math.max(A,ie):A);k[b]=ae,_[b]=ae-S}if(s){var re="x"===b?D:V,te="x"===b?R:q,se=k[w],me=he(se+f[re],se,se-f[te]);k[w]=me,_[w]=me-se}o.modifiersData[i]=_}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var o,n=e.state,i=e.name,a=n.elements.arrow,r=n.modifiersData.popperOffsets,t=G(n.placement),s=ee(t),m=[V,q].indexOf(t)>=0?"height":"width";if(a&&r){var c=n.modifiersData[i+"#persistent"].padding,d=M(a),g="y"===s?D:V,u="y"===s?R:q,l=n.rects.reference[m]+n.rects.reference[s]-r[s]-n.rects.popper[m],v=r[s]-n.rects.reference[s],y=B(a),f=y?"y"===s?y.clientHeight||0:y.clientWidth||0:0,j=l/2-v/2,h=c[g],p=f-d[m]-c[u],b=f/2-d[m]/2+j,w=he(h,b,p),k=s;n.modifiersData[i]=((o={})[k]=w,o.centerOffset=w-b,o)}},effect:function(e){var o=e.state,n=e.options,i=e.name,a=n.element,r=void 0===a?"[data-popper-arrow]":a,t=n.padding,s=void 0===t?0:t;null!=r&&("string"!=typeof r||(r=o.elements.popper.querySelector(r)))&&de(o.elements.popper,r)&&(o.elements.arrow=r,o.modifiersData[i+"#persistent"]={padding:ve("number"!=typeof s?s:ye(s,H))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var o=e.state,n=e.name,i=o.rects.reference,a=o.rects.popper,r=o.modifiersData.preventOverflow,t=fe(o,{elementContext:"reference"}),s=fe(o,{altBoundary:!0}),m=pe(t,i),c=pe(s,a,r),d=be(m),g=be(c);o.modifiersData[n]={referenceClippingOffsets:m,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:g},o.attributes.popper=Object.assign({},o.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":g})}}]}),ke=function(){var e={base:"https://twemoji.maxcdn.com/v/12.1.2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(e){var o="string"==typeof e?parseInt(e,16):e;if(o<65536)return s(o);return s(55296+((o-=65536)>>10),56320+(1023&o))},toCodePoint:j},onerror:function(){this.parentNode&&this.parentNode.replaceChild(m(this.alt,!1),this)},parse:function(o,n){n&&"function"!=typeof n||(n={callback:n});return("string"==typeof o?l:u)(o,{callback:n.callback||c,attributes:"function"==typeof n.attributes?n.attributes:y,base:"string"==typeof n.base?n.base:e.base,ext:n.ext||e.ext,size:n.folder||(i=n.size||e.size,"number"==typeof i?i+"x"+i:i),className:n.className||e.className,onerror:n.onerror||e.onerror});var i},replace:f,test:function(e){n.lastIndex=0;var o=n.test(e);return n.lastIndex=0,o}},o={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},n=/(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,i=/\uFE0F/g,a=String.fromCharCode(8205),r=/[&<>'"]/g,t=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,s=String.fromCharCode;return e;function m(e,o){return document.createTextNode(o?e.replace(i,""):e)}function c(e,o){return"".concat(o.base,o.size,"/",e,o.ext)}function d(e,o){for(var n,i,a=e.childNodes,r=a.length;r--;)3===(i=(n=a[r]).nodeType)?o.push(n):1!==i||"ownerSVGElement"in n||t.test(n.nodeName.toLowerCase())||d(n,o);return o}function g(e){return j(e.indexOf(a)<0?e.replace(i,""):e)}function u(e,o){for(var i,a,r,t,s,c,u,l,v,y,f,j,h,p=d(e,[]),b=p.length;b--;){for(r=!1,t=document.createDocumentFragment(),c=(s=p[b]).nodeValue,l=0;u=n.exec(c);){if((v=u.index)!==l&&t.appendChild(m(c.slice(l,v),!0)),j=g(f=u[0]),l=v+f.length,h=o.callback(j,o),j&&h){for(a in(y=new Image).onerror=o.onerror,y.setAttribute("draggable","false"),i=o.attributes(f,j))i.hasOwnProperty(a)&&0!==a.indexOf("on")&&!y.hasAttribute(a)&&y.setAttribute(a,i[a]);y.className=o.className,y.alt=f,y.src=h,r=!0,t.appendChild(y)}y||t.appendChild(m(f,!1)),y=null}r&&(l<c.length&&t.appendChild(m(c.slice(l),!0)),s.parentNode.replaceChild(t,s))}return e}function l(e,o){return f(e,(function(e){var n,i,a=e,t=g(e),s=o.callback(t,o);if(t&&s){for(i in a="<img ".concat('class="',o.className,'" ','draggable="false" ','alt="',e,'"',' src="',s,'"'),n=o.attributes(e,t))n.hasOwnProperty(i)&&0!==i.indexOf("on")&&-1===a.indexOf(" "+i+"=")&&(a=a.concat(" ",i,'="',n[i].replace(r,v),'"'));a=a.concat("/>")}return a}))}function v(e){return o[e]}function y(){return null}function f(e,o){return String(e).replace(n,o)}function j(e,o){for(var n=[],i=0,a=0,r=0;r<e.length;)i=e.charCodeAt(r++),a?(n.push((65536+(a-55296<<10)+(i-56320)).toString(16)),a=0):55296<=i&&i<=56319?a=i:n.push(i.toString(16));return n.join(o||"-")}}(),xe={categories:["smileys","people","animals","food","travel","activities","objects","symbols","flags"],emoji:[{emoji:"😀",category:0,name:"grinning face",version:"1.0"},{emoji:"😃",category:0,name:"grinning face with big eyes",version:"1.0"},{emoji:"😄",category:0,name:"grinning face with smiling eyes",version:"1.0"},{emoji:"😁",category:0,name:"beaming face with smiling eyes",version:"1.0"},{emoji:"😆",category:0,name:"grinning squinting face",version:"1.0"},{emoji:"😅",category:0,name:"grinning face with sweat",version:"1.0"},{emoji:"🤣",category:0,name:"rolling on the floor laughing",version:"3.0"},{emoji:"😂",category:0,name:"face with tears of joy",version:"1.0"},{emoji:"🙂",category:0,name:"slightly smiling face",version:"1.0"},{emoji:"🙃",category:0,name:"upside-down face",version:"1.0"},{emoji:"😉",category:0,name:"winking face",version:"1.0"},{emoji:"😊",category:0,name:"smiling face with smiling eyes",version:"1.0"},{emoji:"😇",category:0,name:"smiling face with halo",version:"1.0"},{emoji:"🥰",category:0,name:"smiling face with hearts",version:"11.0"},{emoji:"😍",category:0,name:"smiling face with heart-eyes",version:"1.0"},{emoji:"🤩",category:0,name:"star-struck",version:"5.0"},{emoji:"😘",category:0,name:"face blowing a kiss",version:"1.0"},{emoji:"😗",category:0,name:"kissing face",version:"1.0"},{emoji:"☺️",category:0,name:"smiling face",version:"1.0"},{emoji:"😚",category:0,name:"kissing face with closed eyes",version:"1.0"},{emoji:"😙",category:0,name:"kissing face with smiling eyes",version:"1.0"},{emoji:"🥲",category:0,name:"smiling face with tear",version:"13.0"},{emoji:"😋",category:0,name:"face savoring food",version:"1.0"},{emoji:"😛",category:0,name:"face with tongue",version:"1.0"},{emoji:"😜",category:0,name:"winking face with tongue",version:"1.0"},{emoji:"🤪",category:0,name:"zany face",version:"5.0"},{emoji:"😝",category:0,name:"squinting face with tongue",version:"1.0"},{emoji:"🤑",category:0,name:"money-mouth face",version:"1.0"},{emoji:"🤗",category:0,name:"hugging face",version:"1.0"},{emoji:"🤭",category:0,name:"face with hand over mouth",version:"5.0"},{emoji:"🤫",category:0,name:"shushing face",version:"5.0"},{emoji:"🤔",category:0,name:"thinking face",version:"1.0"},{emoji:"🤐",category:0,name:"zipper-mouth face",version:"1.0"},{emoji:"🤨",category:0,name:"face with raised eyebrow",version:"5.0"},{emoji:"😐",category:0,name:"neutral face",version:"1.0"},{emoji:"😑",category:0,name:"expressionless face",version:"1.0"},{emoji:"😶",category:0,name:"face without mouth",version:"1.0"},{emoji:"😏",category:0,name:"smirking face",version:"1.0"},{emoji:"😒",category:0,name:"unamused face",version:"1.0"},{emoji:"🙄",category:0,name:"face with rolling eyes",version:"1.0"},{emoji:"😬",category:0,name:"grimacing face",version:"1.0"},{emoji:"🤥",category:0,name:"lying face",version:"3.0"},{emoji:"😌",category:0,name:"relieved face",version:"1.0"},{emoji:"😔",category:0,name:"pensive face",version:"1.0"},{emoji:"😪",category:0,name:"sleepy face",version:"1.0"},{emoji:"🤤",category:0,name:"drooling face",version:"3.0"},{emoji:"😴",category:0,name:"sleeping face",version:"1.0"},{emoji:"😷",category:0,name:"face with medical mask",version:"1.0"},{emoji:"🤒",category:0,name:"face with thermometer",version:"1.0"},{emoji:"🤕",category:0,name:"face with head-bandage",version:"1.0"},{emoji:"🤢",category:0,name:"nauseated face",version:"3.0"},{emoji:"🤮",category:0,name:"face vomiting",version:"5.0"},{emoji:"🤧",category:0,name:"sneezing face",version:"3.0"},{emoji:"🥵",category:0,name:"hot face",version:"11.0"},{emoji:"🥶",category:0,name:"cold face",version:"11.0"},{emoji:"🥴",category:0,name:"woozy face",version:"11.0"},{emoji:"😵",category:0,name:"dizzy face",version:"1.0"},{emoji:"🤯",category:0,name:"exploding head",version:"5.0"},{emoji:"🤠",category:0,name:"cowboy hat face",version:"3.0"},{emoji:"🥳",category:0,name:"partying face",version:"11.0"},{emoji:"🥸",category:0,name:"disguised face",version:"13.0"},{emoji:"😎",category:0,name:"smiling face with sunglasses",version:"1.0"},{emoji:"🤓",category:0,name:"nerd face",version:"1.0"},{emoji:"🧐",category:0,name:"face with monocle",version:"5.0"},{emoji:"😕",category:0,name:"confused face",version:"1.0"},{emoji:"😟",category:0,name:"worried face",version:"1.0"},{emoji:"🙁",category:0,name:"slightly frowning face",version:"1.0"},{emoji:"☹️",category:0,name:"frowning face",version:"1.0"},{emoji:"😮",category:0,name:"face with open mouth",version:"1.0"},{emoji:"😯",category:0,name:"hushed face",version:"1.0"},{emoji:"😲",category:0,name:"astonished face",version:"1.0"},{emoji:"😳",category:0,name:"flushed face",version:"1.0"},{emoji:"🥺",category:0,name:"pleading face",version:"11.0"},{emoji:"😦",category:0,name:"frowning face with open mouth",version:"1.0"},{emoji:"😧",category:0,name:"anguished face",version:"1.0"},{emoji:"😨",category:0,name:"fearful face",version:"1.0"},{emoji:"😰",category:0,name:"anxious face with sweat",version:"1.0"},{emoji:"😥",category:0,name:"sad but relieved face",version:"1.0"},{emoji:"😢",category:0,name:"crying face",version:"1.0"},{emoji:"😭",category:0,name:"loudly crying face",version:"1.0"},{emoji:"😱",category:0,name:"face screaming in fear",version:"1.0"},{emoji:"😖",category:0,name:"confounded face",version:"1.0"},{emoji:"😣",category:0,name:"persevering face",version:"1.0"},{emoji:"😞",category:0,name:"disappointed face",version:"1.0"},{emoji:"😓",category:0,name:"downcast face with sweat",version:"1.0"},{emoji:"😩",category:0,name:"weary face",version:"1.0"},{emoji:"😫",category:0,name:"tired face",version:"1.0"},{emoji:"🥱",category:0,name:"yawning face",version:"12.0"},{emoji:"😤",category:0,name:"face with steam from nose",version:"1.0"},{emoji:"😡",category:0,name:"pouting face",version:"1.0"},{emoji:"😠",category:0,name:"angry face",version:"1.0"},{emoji:"🤬",category:0,name:"face with symbols on mouth",version:"5.0"},{emoji:"😈",category:0,name:"smiling face with horns",version:"1.0"},{emoji:"👿",category:0,name:"angry face with horns",version:"1.0"},{emoji:"💀",category:0,name:"skull",version:"1.0"},{emoji:"☠️",category:0,name:"skull and crossbones",version:"1.0"},{emoji:"💩",category:0,name:"pile of poo",version:"1.0"},{emoji:"🤡",category:0,name:"clown face",version:"3.0"},{emoji:"👹",category:0,name:"ogre",version:"1.0"},{emoji:"👺",category:0,name:"goblin",version:"1.0"},{emoji:"👻",category:0,name:"ghost",version:"1.0"},{emoji:"👽",category:0,name:"alien",version:"1.0"},{emoji:"👾",category:0,name:"alien monster",version:"1.0"},{emoji:"🤖",category:0,name:"robot",version:"1.0"},{emoji:"😺",category:0,name:"grinning cat",version:"1.0"},{emoji:"😸",category:0,name:"grinning cat with smiling eyes",version:"1.0"},{emoji:"😹",category:0,name:"cat with tears of joy",version:"1.0"},{emoji:"😻",category:0,name:"smiling cat with heart-eyes",version:"1.0"},{emoji:"😼",category:0,name:"cat with wry smile",version:"1.0"},{emoji:"😽",category:0,name:"kissing cat",version:"1.0"},{emoji:"🙀",category:0,name:"weary cat",version:"1.0"},{emoji:"😿",category:0,name:"crying cat",version:"1.0"},{emoji:"😾",category:0,name:"pouting cat",version:"1.0"},{emoji:"🙈",category:0,name:"see-no-evil monkey",version:"1.0"},{emoji:"🙉",category:0,name:"hear-no-evil monkey",version:"1.0"},{emoji:"🙊",category:0,name:"speak-no-evil monkey",version:"1.0"},{emoji:"💋",category:0,name:"kiss mark",version:"1.0"},{emoji:"💌",category:0,name:"love letter",version:"1.0"},{emoji:"💘",category:0,name:"heart with arrow",version:"1.0"},{emoji:"💝",category:0,name:"heart with ribbon",version:"1.0"},{emoji:"💖",category:0,name:"sparkling heart",version:"1.0"},{emoji:"💗",category:0,name:"growing heart",version:"1.0"},{emoji:"💓",category:0,name:"beating heart",version:"1.0"},{emoji:"💞",category:0,name:"revolving hearts",version:"1.0"},{emoji:"💕",category:0,name:"two hearts",version:"1.0"},{emoji:"💟",category:0,name:"heart decoration",version:"1.0"},{emoji:"❣️",category:0,name:"heart exclamation",version:"1.0"},{emoji:"💔",category:0,name:"broken heart",version:"1.0"},{emoji:"❤️",category:0,name:"red heart",version:"1.0"},{emoji:"🧡",category:0,name:"orange heart",version:"5.0"},{emoji:"💛",category:0,name:"yellow heart",version:"1.0"},{emoji:"💚",category:0,name:"green heart",version:"1.0"},{emoji:"💙",category:0,name:"blue heart",version:"1.0"},{emoji:"💜",category:0,name:"purple heart",version:"1.0"},{emoji:"🤎",category:0,name:"brown heart",version:"12.0"},{emoji:"🖤",category:0,name:"black heart",version:"3.0"},{emoji:"🤍",category:0,name:"white heart",version:"12.0"},{emoji:"💯",category:0,name:"hundred points",version:"1.0"},{emoji:"💢",category:0,name:"anger symbol",version:"1.0"},{emoji:"💥",category:0,name:"collision",version:"1.0"},{emoji:"💫",category:0,name:"dizzy",version:"1.0"},{emoji:"💦",category:0,name:"sweat droplets",version:"1.0"},{emoji:"💨",category:0,name:"dashing away",version:"1.0"},{emoji:"🕳️",category:0,name:"hole",version:"1.0"},{emoji:"💣",category:0,name:"bomb",version:"1.0"},{emoji:"💬",category:0,name:"speech balloon",version:"1.0"},{emoji:"👁️‍🗨️",category:0,name:"eye in speech bubble",version:"2.0"},{emoji:"🗨️",category:0,name:"left speech bubble",version:"2.0"},{emoji:"🗯️",category:0,name:"right anger bubble",version:"1.0"},{emoji:"💭",category:0,name:"thought balloon",version:"1.0"},{emoji:"💤",category:0,name:"zzz",version:"1.0"},{emoji:"👋",category:1,name:"waving hand",variations:["👋🏻","👋🏼","👋🏽","👋🏾","👋🏿"],version:"1.0"},{emoji:"🤚",category:1,name:"raised back of hand",variations:["🤚🏻","🤚🏼","🤚🏽","🤚🏾","🤚🏿"],version:"3.0"},{emoji:"🖐️",category:1,name:"hand with fingers splayed",variations:["🖐🏻","🖐🏼","🖐🏽","🖐🏾","🖐🏿"],version:"1.0"},{emoji:"✋",category:1,name:"raised hand",variations:["✋🏻","✋🏼","✋🏽","✋🏾","✋🏿"],version:"1.0"},{emoji:"🖖",category:1,name:"vulcan salute",variations:["🖖🏻","🖖🏼","🖖🏽","🖖🏾","🖖🏿"],version:"1.0"},{emoji:"👌",category:1,name:"OK hand",variations:["👌🏻","👌🏼","👌🏽","👌🏾","👌🏿"],version:"1.0"},{emoji:"🤌",category:1,name:"pinched fingers",variations:["🤌🏻","🤌🏼","🤌🏽","🤌🏾","🤌🏿"],version:"13.0"},{emoji:"🤏",category:1,name:"pinching hand",variations:["🤏🏻","🤏🏼","🤏🏽","🤏🏾","🤏🏿"],version:"12.0"},{emoji:"✌️",category:1,name:"victory hand",variations:["✌🏻","✌🏼","✌🏽","✌🏾","✌🏿"],version:"1.0"},{emoji:"🤞",category:1,name:"crossed fingers",variations:["🤞🏻","🤞🏼","🤞🏽","🤞🏾","🤞🏿"],version:"3.0"},{emoji:"🤟",category:1,name:"love-you gesture",variations:["🤟🏻","🤟🏼","🤟🏽","🤟🏾","🤟🏿"],version:"5.0"},{emoji:"🤘",category:1,name:"sign of the horns",variations:["🤘🏻","🤘🏼","🤘🏽","🤘🏾","🤘🏿"],version:"1.0"},{emoji:"🤙",category:1,name:"call me hand",variations:["🤙🏻","🤙🏼","🤙🏽","🤙🏾","🤙🏿"],version:"3.0"},{emoji:"👈",category:1,name:"backhand index pointing left",variations:["👈🏻","👈🏼","👈🏽","👈🏾","👈🏿"],version:"1.0"},{emoji:"👉",category:1,name:"backhand index pointing right",variations:["👉🏻","👉🏼","👉🏽","👉🏾","👉🏿"],version:"1.0"},{emoji:"👆",category:1,name:"backhand index pointing up",variations:["👆🏻","👆🏼","👆🏽","👆🏾","👆🏿"],version:"1.0"},{emoji:"🖕",category:1,name:"middle finger",variations:["🖕🏻","🖕🏼","🖕🏽","🖕🏾","🖕🏿"],version:"1.0"},{emoji:"👇",category:1,name:"backhand index pointing down",variations:["👇🏻","👇🏼","👇🏽","👇🏾","👇🏿"],version:"1.0"},{emoji:"☝️",category:1,name:"index pointing up",variations:["☝🏻","☝🏼","☝🏽","☝🏾","☝🏿"],version:"1.0"},{emoji:"👍",category:1,name:"thumbs up",variations:["👍🏻","👍🏼","👍🏽","👍🏾","👍🏿"],version:"1.0"},{emoji:"👎",category:1,name:"thumbs down",variations:["👎🏻","👎🏼","👎🏽","👎🏾","👎🏿"],version:"1.0"},{emoji:"✊",category:1,name:"raised fist",variations:["✊🏻","✊🏼","✊🏽","✊🏾","✊🏿"],version:"1.0"},{emoji:"👊",category:1,name:"oncoming fist",variations:["👊🏻","👊🏼","👊🏽","👊🏾","👊🏿"],version:"1.0"},{emoji:"🤛",category:1,name:"left-facing fist",variations:["🤛🏻","🤛🏼","🤛🏽","🤛🏾","🤛🏿"],version:"3.0"},{emoji:"🤜",category:1,name:"right-facing fist",variations:["🤜🏻","🤜🏼","🤜🏽","🤜🏾","🤜🏿"],version:"3.0"},{emoji:"👏",category:1,name:"clapping hands",variations:["👏🏻","👏🏼","👏🏽","👏🏾","👏🏿"],version:"1.0"},{emoji:"🙌",category:1,name:"raising hands",variations:["🙌🏻","🙌🏼","🙌🏽","🙌🏾","🙌🏿"],version:"1.0"},{emoji:"👐",category:1,name:"open hands",variations:["👐🏻","👐🏼","👐🏽","👐🏾","👐🏿"],version:"1.0"},{emoji:"🤲",category:1,name:"palms up together",variations:["🤲🏻","🤲🏼","🤲🏽","🤲🏾","🤲🏿"],version:"5.0"},{emoji:"🤝",category:1,name:"handshake",version:"3.0"},{emoji:"🙏",category:1,name:"folded hands",variations:["🙏🏻","🙏🏼","🙏🏽","🙏🏾","🙏🏿"],version:"1.0"},{emoji:"✍️",category:1,name:"writing hand",variations:["✍🏻","✍🏼","✍🏽","✍🏾","✍🏿"],version:"1.0"},{emoji:"💅",category:1,name:"nail polish",variations:["💅🏻","💅🏼","💅🏽","💅🏾","💅🏿"],version:"1.0"},{emoji:"🤳",category:1,name:"selfie",variations:["🤳🏻","🤳🏼","🤳🏽","🤳🏾","🤳🏿"],version:"3.0"},{emoji:"💪",category:1,name:"flexed biceps",variations:["💪🏻","💪🏼","💪🏽","💪🏾","💪🏿"],version:"1.0"},{emoji:"🦾",category:1,name:"mechanical arm",version:"12.0"},{emoji:"🦿",category:1,name:"mechanical leg",version:"12.0"},{emoji:"🦵",category:1,name:"leg",variations:["🦵🏻","🦵🏼","🦵🏽","🦵🏾","🦵🏿"],version:"11.0"},{emoji:"🦶",category:1,name:"foot",variations:["🦶🏻","🦶🏼","🦶🏽","🦶🏾","🦶🏿"],version:"11.0"},{emoji:"👂",category:1,name:"ear",variations:["👂🏻","👂🏼","👂🏽","👂🏾","👂🏿"],version:"1.0"},{emoji:"🦻",category:1,name:"ear with hearing aid",variations:["🦻🏻","🦻🏼","🦻🏽","🦻🏾","🦻🏿"],version:"12.0"},{emoji:"👃",category:1,name:"nose",variations:["👃🏻","👃🏼","👃🏽","👃🏾","👃🏿"],version:"1.0"},{emoji:"🧠",category:1,name:"brain",version:"5.0"},{emoji:"🫀",category:1,name:"anatomical heart",version:"13.0"},{emoji:"🫁",category:1,name:"lungs",version:"13.0"},{emoji:"🦷",category:1,name:"tooth",version:"11.0"},{emoji:"🦴",category:1,name:"bone",version:"11.0"},{emoji:"👀",category:1,name:"eyes",version:"1.0"},{emoji:"👁️",category:1,name:"eye",version:"1.0"},{emoji:"👅",category:1,name:"tongue",version:"1.0"},{emoji:"👄",category:1,name:"mouth",version:"1.0"},{emoji:"👶",category:1,name:"baby",variations:["👶🏻","👶🏼","👶🏽","👶🏾","👶🏿"],version:"1.0"},{emoji:"🧒",category:1,name:"child",variations:["🧒🏻","🧒🏼","🧒🏽","🧒🏾","🧒🏿"],version:"5.0"},{emoji:"👦",category:1,name:"boy",variations:["👦🏻","👦🏼","👦🏽","👦🏾","👦🏿"],version:"1.0"},{emoji:"👧",category:1,name:"girl",variations:["👧🏻","👧🏼","👧🏽","👧🏾","👧🏿"],version:"1.0"},{emoji:"🧑",category:1,name:"person",variations:["🧑🏻","🧑🏼","🧑🏽","🧑🏾","🧑🏿"],version:"5.0"},{emoji:"👱",category:1,name:"person with blond hair",variations:["👱🏻","👱🏼","👱🏽","👱🏾","👱🏿"],version:"1.0"},{emoji:"👨",category:1,name:"man",variations:["👨🏻","👨🏼","👨🏽","👨🏾","👨🏿"],version:"1.0"},{emoji:"🧔",category:1,name:"man with beard",variations:["🧔🏻","🧔🏼","🧔🏽","🧔🏾","🧔🏿"],version:"5.0"},{emoji:"👨‍🦰",category:1,name:"man with red hair",variations:["👨🏻‍🦰","👨🏼‍🦰","👨🏽‍🦰","👨🏾‍🦰","👨🏿‍🦰"],version:"11.0"},{emoji:"👨‍🦱",category:1,name:"man with curly hair",variations:["👨🏻‍🦱","👨🏼‍🦱","👨🏽‍🦱","👨🏾‍🦱","👨🏿‍🦱"],version:"11.0"},{emoji:"👨‍🦳",category:1,name:"man with white hair",variations:["👨🏻‍🦳","👨🏼‍🦳","👨🏽‍🦳","👨🏾‍🦳","👨🏿‍🦳"],version:"11.0"},{emoji:"👨‍🦲",category:1,name:"man with no hair",variations:["👨🏻‍🦲","👨🏼‍🦲","👨🏽‍🦲","👨🏾‍🦲","👨🏿‍🦲"],version:"11.0"},{emoji:"👩",category:1,name:"woman",variations:["👩🏻","👩🏼","👩🏽","👩🏾","👩🏿"],version:"1.0"},{emoji:"👩‍🦰",category:1,name:"woman with red hair",variations:["👩🏻‍🦰","👩🏼‍🦰","👩🏽‍🦰","👩🏾‍🦰","👩🏿‍🦰"],version:"11.0"},{emoji:"🧑‍🦰",category:1,name:"person with red hair",variations:["🧑🏻‍🦰","🧑🏼‍🦰","🧑🏽‍🦰","🧑🏾‍🦰","🧑🏿‍🦰"],version:"12.1"},{emoji:"👩‍🦱",category:1,name:"woman with curly hair",variations:["👩🏻‍🦱","👩🏼‍🦱","👩🏽‍🦱","👩🏾‍🦱","👩🏿‍🦱"],version:"11.0"},{emoji:"🧑‍🦱",category:1,name:"person with curly hair",variations:["🧑🏻‍🦱","🧑🏼‍🦱","🧑🏽‍🦱","🧑🏾‍🦱","🧑🏿‍🦱"],version:"12.1"},{emoji:"👩‍🦳",category:1,name:"woman with white hair",variations:["👩🏻‍🦳","👩🏼‍🦳","👩🏽‍🦳","👩🏾‍🦳","👩🏿‍🦳"],version:"11.0"},{emoji:"🧑‍🦳",category:1,name:"person with white hair",variations:["🧑🏻‍🦳","🧑🏼‍🦳","🧑🏽‍🦳","🧑🏾‍🦳","🧑🏿‍🦳"],version:"12.1"},{emoji:"👩‍🦲",category:1,name:"woman with no hair",variations:["👩🏻‍🦲","👩🏼‍🦲","👩🏽‍🦲","👩🏾‍🦲","👩🏿‍🦲"],version:"11.0"},{emoji:"🧑‍🦲",category:1,name:"person with no hair",variations:["🧑🏻‍🦲","🧑🏼‍🦲","🧑🏽‍🦲","🧑🏾‍🦲","🧑🏿‍🦲"],version:"12.1"},{emoji:"👱‍♀️",category:1,name:"woman with blond hair",variations:["👱🏻‍♀️","👱🏼‍♀️","👱🏽‍♀️","👱🏾‍♀️","👱🏿‍♀️"],version:"4.0"},{emoji:"👱‍♂️",category:1,name:"man with blond hair",variations:["👱🏻‍♂️","👱🏼‍♂️","👱🏽‍♂️","👱🏾‍♂️","👱🏿‍♂️"],version:"4.0"},{emoji:"🧓",category:1,name:"older person",variations:["🧓🏻","🧓🏼","🧓🏽","🧓🏾","🧓🏿"],version:"5.0"},{emoji:"👴",category:1,name:"old man",variations:["👴🏻","👴🏼","👴🏽","👴🏾","👴🏿"],version:"1.0"},{emoji:"👵",category:1,name:"old woman",variations:["👵🏻","👵🏼","👵🏽","👵🏾","👵🏿"],version:"1.0"},{emoji:"🙍",category:1,name:"person frowning",variations:["🙍🏻","🙍🏼","🙍🏽","🙍🏾","🙍🏿"],version:"1.0"},{emoji:"🙍‍♂️",category:1,name:"man frowning",variations:["🙍🏻‍♂️","🙍🏼‍♂️","🙍🏽‍♂️","🙍🏾‍♂️","🙍🏿‍♂️"],version:"4.0"},{emoji:"🙍‍♀️",category:1,name:"woman frowning",variations:["🙍🏻‍♀️","🙍🏼‍♀️","🙍🏽‍♀️","🙍🏾‍♀️","🙍🏿‍♀️"],version:"4.0"},{emoji:"🙎",category:1,name:"person pouting",variations:["🙎🏻","🙎🏼","🙎🏽","🙎🏾","🙎🏿"],version:"1.0"},{emoji:"🙎‍♂️",category:1,name:"man pouting",variations:["🙎🏻‍♂️","🙎🏼‍♂️","🙎🏽‍♂️","🙎🏾‍♂️","🙎🏿‍♂️"],version:"4.0"},{emoji:"🙎‍♀️",category:1,name:"woman pouting",variations:["🙎🏻‍♀️","🙎🏼‍♀️","🙎🏽‍♀️","🙎🏾‍♀️","🙎🏿‍♀️"],version:"4.0"},{emoji:"🙅",category:1,name:"person gesturing NO",variations:["🙅🏻","🙅🏼","🙅🏽","🙅🏾","🙅🏿"],version:"1.0"},{emoji:"🙅‍♂️",category:1,name:"man gesturing NO",variations:["🙅🏻‍♂️","🙅🏼‍♂️","🙅🏽‍♂️","🙅🏾‍♂️","🙅🏿‍♂️"],version:"4.0"},{emoji:"🙅‍♀️",category:1,name:"woman gesturing NO",variations:["🙅🏻‍♀️","🙅🏼‍♀️","🙅🏽‍♀️","🙅🏾‍♀️","🙅🏿‍♀️"],version:"4.0"},{emoji:"🙆",category:1,name:"person gesturing OK",variations:["🙆🏻","🙆🏼","🙆🏽","🙆🏾","🙆🏿"],version:"1.0"},{emoji:"🙆‍♂️",category:1,name:"man gesturing OK",variations:["🙆🏻‍♂️","🙆🏼‍♂️","🙆🏽‍♂️","🙆🏾‍♂️","🙆🏿‍♂️"],version:"4.0"},{emoji:"🙆‍♀️",category:1,name:"woman gesturing OK",variations:["🙆🏻‍♀️","🙆🏼‍♀️","🙆🏽‍♀️","🙆🏾‍♀️","🙆🏿‍♀️"],version:"4.0"},{emoji:"💁",category:1,name:"person tipping hand",variations:["💁🏻","💁🏼","💁🏽","💁🏾","💁🏿"],version:"1.0"},{emoji:"💁‍♂️",category:1,name:"man tipping hand",variations:["💁🏻‍♂️","💁🏼‍♂️","💁🏽‍♂️","💁🏾‍♂️","💁🏿‍♂️"],version:"4.0"},{emoji:"💁‍♀️",category:1,name:"woman tipping hand",variations:["💁🏻‍♀️","💁🏼‍♀️","💁🏽‍♀️","💁🏾‍♀️","💁🏿‍♀️"],version:"4.0"},{emoji:"🙋",category:1,name:"person raising hand",variations:["🙋🏻","🙋🏼","🙋🏽","🙋🏾","🙋🏿"],version:"1.0"},{emoji:"🙋‍♂️",category:1,name:"man raising hand",variations:["🙋🏻‍♂️","🙋🏼‍♂️","🙋🏽‍♂️","🙋🏾‍♂️","🙋🏿‍♂️"],version:"4.0"},{emoji:"🙋‍♀️",category:1,name:"woman raising hand",variations:["🙋🏻‍♀️","🙋🏼‍♀️","🙋🏽‍♀️","🙋🏾‍♀️","🙋🏿‍♀️"],version:"4.0"},{emoji:"🧏",category:1,name:"deaf person",variations:["🧏🏻","🧏🏼","🧏🏽","🧏🏾","🧏🏿"],version:"12.0"},{emoji:"🧏‍♂️",category:1,name:"deaf man",variations:["🧏🏻‍♂️","🧏🏼‍♂️","🧏🏽‍♂️","🧏🏾‍♂️","🧏🏿‍♂️"],version:"12.0"},{emoji:"🧏‍♀️",category:1,name:"deaf woman",variations:["🧏🏻‍♀️","🧏🏼‍♀️","🧏🏽‍♀️","🧏🏾‍♀️","🧏🏿‍♀️"],version:"12.0"},{emoji:"🙇",category:1,name:"person bowing",variations:["🙇🏻","🙇🏼","🙇🏽","🙇🏾","🙇🏿"],version:"1.0"},{emoji:"🙇‍♂️",category:1,name:"man bowing",variations:["🙇🏻‍♂️","🙇🏼‍♂️","🙇🏽‍♂️","🙇🏾‍♂️","🙇🏿‍♂️"],version:"4.0"},{emoji:"🙇‍♀️",category:1,name:"woman bowing",variations:["🙇🏻‍♀️","🙇🏼‍♀️","🙇🏽‍♀️","🙇🏾‍♀️","🙇🏿‍♀️"],version:"4.0"},{emoji:"🤦",category:1,name:"person facepalming",variations:["🤦🏻","🤦🏼","🤦🏽","🤦🏾","🤦🏿"],version:"3.0"},{emoji:"🤦‍♂️",category:1,name:"man facepalming",variations:["🤦🏻‍♂️","🤦🏼‍♂️","🤦🏽‍♂️","🤦🏾‍♂️","🤦🏿‍♂️"],version:"4.0"},{emoji:"🤦‍♀️",category:1,name:"woman facepalming",variations:["🤦🏻‍♀️","🤦🏼‍♀️","🤦🏽‍♀️","🤦🏾‍♀️","🤦🏿‍♀️"],version:"4.0"},{emoji:"🤷",category:1,name:"person shrugging",variations:["🤷🏻","🤷🏼","🤷🏽","🤷🏾","🤷🏿"],version:"3.0"},{emoji:"🤷‍♂️",category:1,name:"man shrugging",variations:["🤷🏻‍♂️","🤷🏼‍♂️","🤷🏽‍♂️","🤷🏾‍♂️","🤷🏿‍♂️"],version:"4.0"},{emoji:"🤷‍♀️",category:1,name:"woman shrugging",variations:["🤷🏻‍♀️","🤷🏼‍♀️","🤷🏽‍♀️","🤷🏾‍♀️","🤷🏿‍♀️"],version:"4.0"},{emoji:"🧑‍⚕️",category:1,name:"health worker",variations:["🧑🏻‍⚕️","🧑🏼‍⚕️","🧑🏽‍⚕️","🧑🏾‍⚕️","🧑🏿‍⚕️"],version:"12.1"},{emoji:"👨‍⚕️",category:1,name:"man health worker",variations:["👨🏻‍⚕️","👨🏼‍⚕️","👨🏽‍⚕️","👨🏾‍⚕️","👨🏿‍⚕️"],version:"4.0"},{emoji:"👩‍⚕️",category:1,name:"woman health worker",variations:["👩🏻‍⚕️","👩🏼‍⚕️","👩🏽‍⚕️","👩🏾‍⚕️","👩🏿‍⚕️"],version:"4.0"},{emoji:"🧑‍🎓",category:1,name:"student",variations:["🧑🏻‍🎓","🧑🏼‍🎓","🧑🏽‍🎓","🧑🏾‍🎓","🧑🏿‍🎓"],version:"12.1"},{emoji:"👨‍🎓",category:1,name:"man student",variations:["👨🏻‍🎓","👨🏼‍🎓","👨🏽‍🎓","👨🏾‍🎓","👨🏿‍🎓"],version:"4.0"},{emoji:"👩‍🎓",category:1,name:"woman student",variations:["👩🏻‍🎓","👩🏼‍🎓","👩🏽‍🎓","👩🏾‍🎓","👩🏿‍🎓"],version:"4.0"},{emoji:"🧑‍🏫",category:1,name:"teacher",variations:["🧑🏻‍🏫","🧑🏼‍🏫","🧑🏽‍🏫","🧑🏾‍🏫","🧑🏿‍🏫"],version:"12.1"},{emoji:"👨‍🏫",category:1,name:"man teacher",variations:["👨🏻‍🏫","👨🏼‍🏫","👨🏽‍🏫","👨🏾‍🏫","👨🏿‍🏫"],version:"4.0"},{emoji:"👩‍🏫",category:1,name:"woman teacher",variations:["👩🏻‍🏫","👩🏼‍🏫","👩🏽‍🏫","👩🏾‍🏫","👩🏿‍🏫"],version:"4.0"},{emoji:"🧑‍⚖️",category:1,name:"judge",variations:["🧑🏻‍⚖️","🧑🏼‍⚖️","🧑🏽‍⚖️","🧑🏾‍⚖️","🧑🏿‍⚖️"],version:"12.1"},{emoji:"👨‍⚖️",category:1,name:"man judge",variations:["👨🏻‍⚖️","👨🏼‍⚖️","👨🏽‍⚖️","👨🏾‍⚖️","👨🏿‍⚖️"],version:"4.0"},{emoji:"👩‍⚖️",category:1,name:"woman judge",variations:["👩🏻‍⚖️","👩🏼‍⚖️","👩🏽‍⚖️","👩🏾‍⚖️","👩🏿‍⚖️"],version:"4.0"},{emoji:"🧑‍🌾",category:1,name:"farmer",variations:["🧑🏻‍🌾","🧑🏼‍🌾","🧑🏽‍🌾","🧑🏾‍🌾","🧑🏿‍🌾"],version:"12.1"},{emoji:"👨‍🌾",category:1,name:"man farmer",variations:["👨🏻‍🌾","👨🏼‍🌾","👨🏽‍🌾","👨🏾‍🌾","👨🏿‍🌾"],version:"4.0"},{emoji:"👩‍🌾",category:1,name:"woman farmer",variations:["👩🏻‍🌾","👩🏼‍🌾","👩🏽‍🌾","👩🏾‍🌾","👩🏿‍🌾"],version:"4.0"},{emoji:"🧑‍🍳",category:1,name:"cook",variations:["🧑🏻‍🍳","🧑🏼‍🍳","🧑🏽‍🍳","🧑🏾‍🍳","🧑🏿‍🍳"],version:"12.1"},{emoji:"👨‍🍳",category:1,name:"man cook",variations:["👨🏻‍🍳","👨🏼‍🍳","👨🏽‍🍳","👨🏾‍🍳","👨🏿‍🍳"],version:"4.0"},{emoji:"👩‍🍳",category:1,name:"woman cook",variations:["👩🏻‍🍳","👩🏼‍🍳","👩🏽‍🍳","👩🏾‍🍳","👩🏿‍🍳"],version:"4.0"},{emoji:"🧑‍🔧",category:1,name:"mechanic",variations:["🧑🏻‍🔧","🧑🏼‍🔧","🧑🏽‍🔧","🧑🏾‍🔧","🧑🏿‍🔧"],version:"12.1"},{emoji:"👨‍🔧",category:1,name:"man mechanic",variations:["👨🏻‍🔧","👨🏼‍🔧","👨🏽‍🔧","👨🏾‍🔧","👨🏿‍🔧"],version:"4.0"},{emoji:"👩‍🔧",category:1,name:"woman mechanic",variations:["👩🏻‍🔧","👩🏼‍🔧","👩🏽‍🔧","👩🏾‍🔧","👩🏿‍🔧"],version:"4.0"},{emoji:"🧑‍🏭",category:1,name:"factory worker",variations:["🧑🏻‍🏭","🧑🏼‍🏭","🧑🏽‍🏭","🧑🏾‍🏭","🧑🏿‍🏭"],version:"12.1"},{emoji:"👨‍🏭",category:1,name:"man factory worker",variations:["👨🏻‍🏭","👨🏼‍🏭","👨🏽‍🏭","👨🏾‍🏭","👨🏿‍🏭"],version:"4.0"},{emoji:"👩‍🏭",category:1,name:"woman factory worker",variations:["👩🏻‍🏭","👩🏼‍🏭","👩🏽‍🏭","👩🏾‍🏭","👩🏿‍🏭"],version:"4.0"},{emoji:"🧑‍💼",category:1,name:"office worker",variations:["🧑🏻‍💼","🧑🏼‍💼","🧑🏽‍💼","🧑🏾‍💼","🧑🏿‍💼"],version:"12.1"},{emoji:"👨‍💼",category:1,name:"man office worker",variations:["👨🏻‍💼","👨🏼‍💼","👨🏽‍💼","👨🏾‍💼","👨🏿‍💼"],version:"4.0"},{emoji:"👩‍💼",category:1,name:"woman office worker",variations:["👩🏻‍💼","👩🏼‍💼","👩🏽‍💼","👩🏾‍💼","👩🏿‍💼"],version:"4.0"},{emoji:"🧑‍🔬",category:1,name:"scientist",variations:["🧑🏻‍🔬","🧑🏼‍🔬","🧑🏽‍🔬","🧑🏾‍🔬","🧑🏿‍🔬"],version:"12.1"},{emoji:"👨‍🔬",category:1,name:"man scientist",variations:["👨🏻‍🔬","👨🏼‍🔬","👨🏽‍🔬","👨🏾‍🔬","👨🏿‍🔬"],version:"4.0"},{emoji:"👩‍🔬",category:1,name:"woman scientist",variations:["👩🏻‍🔬","👩🏼‍🔬","👩🏽‍🔬","👩🏾‍🔬","👩🏿‍🔬"],version:"4.0"},{emoji:"🧑‍💻",category:1,name:"technologist",variations:["🧑🏻‍💻","🧑🏼‍💻","🧑🏽‍💻","🧑🏾‍💻","🧑🏿‍💻"],version:"12.1"},{emoji:"👨‍💻",category:1,name:"man technologist",variations:["👨🏻‍💻","👨🏼‍💻","👨🏽‍💻","👨🏾‍💻","👨🏿‍💻"],version:"4.0"},{emoji:"👩‍💻",category:1,name:"woman technologist",variations:["👩🏻‍💻","👩🏼‍💻","👩🏽‍💻","👩🏾‍💻","👩🏿‍💻"],version:"4.0"},{emoji:"🧑‍🎤",category:1,name:"singer",variations:["🧑🏻‍🎤","🧑🏼‍🎤","🧑🏽‍🎤","🧑🏾‍🎤","🧑🏿‍🎤"],version:"12.1"},{emoji:"👨‍🎤",category:1,name:"man singer",variations:["👨🏻‍🎤","👨🏼‍🎤","👨🏽‍🎤","👨🏾‍🎤","👨🏿‍🎤"],version:"4.0"},{emoji:"👩‍🎤",category:1,name:"woman singer",variations:["👩🏻‍🎤","👩🏼‍🎤","👩🏽‍🎤","👩🏾‍🎤","👩🏿‍🎤"],version:"4.0"},{emoji:"🧑‍🎨",category:1,name:"artist",variations:["🧑🏻‍🎨","🧑🏼‍🎨","🧑🏽‍🎨","🧑🏾‍🎨","🧑🏿‍🎨"],version:"12.1"},{emoji:"👨‍🎨",category:1,name:"man artist",variations:["👨🏻‍🎨","👨🏼‍🎨","👨🏽‍🎨","👨🏾‍🎨","👨🏿‍🎨"],version:"4.0"},{emoji:"👩‍🎨",category:1,name:"woman artist",variations:["👩🏻‍🎨","👩🏼‍🎨","👩🏽‍🎨","👩🏾‍🎨","👩🏿‍🎨"],version:"4.0"},{emoji:"🧑‍✈️",category:1,name:"pilot",variations:["🧑🏻‍✈️","🧑🏼‍✈️","🧑🏽‍✈️","🧑🏾‍✈️","🧑🏿‍✈️"],version:"12.1"},{emoji:"👨‍✈️",category:1,name:"man pilot",variations:["👨🏻‍✈️","👨🏼‍✈️","👨🏽‍✈️","👨🏾‍✈️","👨🏿‍✈️"],version:"4.0"},{emoji:"👩‍✈️",category:1,name:"woman pilot",variations:["👩🏻‍✈️","👩🏼‍✈️","👩🏽‍✈️","👩🏾‍✈️","👩🏿‍✈️"],version:"4.0"},{emoji:"🧑‍🚀",category:1,name:"astronaut",variations:["🧑🏻‍🚀","🧑🏼‍🚀","🧑🏽‍🚀","🧑🏾‍🚀","🧑🏿‍🚀"],version:"12.1"},{emoji:"👨‍🚀",category:1,name:"man astronaut",variations:["👨🏻‍🚀","👨🏼‍🚀","👨🏽‍🚀","👨🏾‍🚀","👨🏿‍🚀"],version:"4.0"},{emoji:"👩‍🚀",category:1,name:"woman astronaut",variations:["👩🏻‍🚀","👩🏼‍🚀","👩🏽‍🚀","👩🏾‍🚀","👩🏿‍🚀"],version:"4.0"},{emoji:"🧑‍🚒",category:1,name:"firefighter",variations:["🧑🏻‍🚒","🧑🏼‍🚒","🧑🏽‍🚒","🧑🏾‍🚒","🧑🏿‍🚒"],version:"12.1"},{emoji:"👨‍🚒",category:1,name:"man firefighter",variations:["👨🏻‍🚒","👨🏼‍🚒","👨🏽‍🚒","👨🏾‍🚒","👨🏿‍🚒"],version:"4.0"},{emoji:"👩‍🚒",category:1,name:"woman firefighter",variations:["👩🏻‍🚒","👩🏼‍🚒","👩🏽‍🚒","👩🏾‍🚒","👩🏿‍🚒"],version:"4.0"},{emoji:"👮",category:1,name:"police officer",variations:["👮🏻","👮🏼","👮🏽","👮🏾","👮🏿"],version:"1.0"},{emoji:"👮‍♂️",category:1,name:"man police officer",variations:["👮🏻‍♂️","👮🏼‍♂️","👮🏽‍♂️","👮🏾‍♂️","👮🏿‍♂️"],version:"4.0"},{emoji:"👮‍♀️",category:1,name:"woman police officer",variations:["👮🏻‍♀️","👮🏼‍♀️","👮🏽‍♀️","👮🏾‍♀️","👮🏿‍♀️"],version:"4.0"},{emoji:"🕵️",category:1,name:"detective",variations:["🕵🏻","🕵🏼","🕵🏽","🕵🏾","🕵🏿"],version:"1.0"},{emoji:"🕵️‍♂️",category:1,name:"man detective",variations:["🕵🏻‍♂️","🕵🏼‍♂️","🕵🏽‍♂️","🕵🏾‍♂️","🕵🏿‍♂️"],version:"4.0"},{emoji:"🕵️‍♀️",category:1,name:"woman detective",variations:["🕵🏻‍♀️","🕵🏼‍♀️","🕵🏽‍♀️","🕵🏾‍♀️","🕵🏿‍♀️"],version:"4.0"},{emoji:"💂",category:1,name:"guard",variations:["💂🏻","💂🏼","💂🏽","💂🏾","💂🏿"],version:"1.0"},{emoji:"💂‍♂️",category:1,name:"man guard",variations:["💂🏻‍♂️","💂🏼‍♂️","💂🏽‍♂️","💂🏾‍♂️","💂🏿‍♂️"],version:"4.0"},{emoji:"💂‍♀️",category:1,name:"woman guard",variations:["💂🏻‍♀️","💂🏼‍♀️","💂🏽‍♀️","💂🏾‍♀️","💂🏿‍♀️"],version:"4.0"},{emoji:"🥷",category:1,name:"ninja",variations:["🥷🏻","🥷🏼","🥷🏽","🥷🏾","🥷🏿"],version:"13.0"},{emoji:"👷",category:1,name:"construction worker",variations:["👷🏻","👷🏼","👷🏽","👷🏾","👷🏿"],version:"1.0"},{emoji:"👷‍♂️",category:1,name:"man construction worker",variations:["👷🏻‍♂️","👷🏼‍♂️","👷🏽‍♂️","👷🏾‍♂️","👷🏿‍♂️"],version:"4.0"},{emoji:"👷‍♀️",category:1,name:"woman construction worker",variations:["👷🏻‍♀️","👷🏼‍♀️","👷🏽‍♀️","👷🏾‍♀️","👷🏿‍♀️"],version:"4.0"},{emoji:"🤴",category:1,name:"prince",variations:["🤴🏻","🤴🏼","🤴🏽","🤴🏾","🤴🏿"],version:"3.0"},{emoji:"👸",category:1,name:"princess",variations:["👸🏻","👸🏼","👸🏽","👸🏾","👸🏿"],version:"1.0"},{emoji:"👳",category:1,name:"person wearing turban",variations:["👳🏻","👳🏼","👳🏽","👳🏾","👳🏿"],version:"1.0"},{emoji:"👳‍♂️",category:1,name:"man wearing turban",variations:["👳🏻‍♂️","👳🏼‍♂️","👳🏽‍♂️","👳🏾‍♂️","👳🏿‍♂️"],version:"4.0"},{emoji:"👳‍♀️",category:1,name:"woman wearing turban",variations:["👳🏻‍♀️","👳🏼‍♀️","👳🏽‍♀️","👳🏾‍♀️","👳🏿‍♀️"],version:"4.0"},{emoji:"👲",category:1,name:"person with skullcap",variations:["👲🏻","👲🏼","👲🏽","👲🏾","👲🏿"],version:"1.0"},{emoji:"🧕",category:1,name:"woman with headscarf",variations:["🧕🏻","🧕🏼","🧕🏽","🧕🏾","🧕🏿"],version:"5.0"},{emoji:"🤵",category:1,name:"person in tuxedo",variations:["🤵🏻","🤵🏼","🤵🏽","🤵🏾","🤵🏿"],version:"3.0"},{emoji:"🤵‍♂️",category:1,name:"man in tuxedo",variations:["🤵🏻‍♂️","🤵🏼‍♂️","🤵🏽‍♂️","🤵🏾‍♂️","🤵🏿‍♂️"],version:"13.0"},{emoji:"🤵‍♀️",category:1,name:"woman in tuxedo",variations:["🤵🏻‍♀️","🤵🏼‍♀️","🤵🏽‍♀️","🤵🏾‍♀️","🤵🏿‍♀️"],version:"13.0"},{emoji:"👰",category:1,name:"person with veil",variations:["👰🏻","👰🏼","👰🏽","👰🏾","👰🏿"],version:"1.0"},{emoji:"👰‍♂️",category:1,name:"man with veil",variations:["👰🏻‍♂️","👰🏼‍♂️","👰🏽‍♂️","👰🏾‍♂️","👰🏿‍♂️"],version:"13.0"},{emoji:"👰‍♀️",category:1,name:"woman with veil",variations:["👰🏻‍♀️","👰🏼‍♀️","👰🏽‍♀️","👰🏾‍♀️","👰🏿‍♀️"],version:"13.0"},{emoji:"🤰",category:1,name:"pregnant woman",variations:["🤰🏻","🤰🏼","🤰🏽","🤰🏾","🤰🏿"],version:"3.0"},{emoji:"🤱",category:1,name:"breast-feeding",variations:["🤱🏻","🤱🏼","🤱🏽","🤱🏾","🤱🏿"],version:"5.0"},{emoji:"👩‍🍼",category:1,name:"woman feeding baby",variations:["👩🏻‍🍼","👩🏼‍🍼","👩🏽‍🍼","👩🏾‍🍼","👩🏿‍🍼"],version:"13.0"},{emoji:"👨‍🍼",category:1,name:"man feeding baby",variations:["👨🏻‍🍼","👨🏼‍🍼","👨🏽‍🍼","👨🏾‍🍼","👨🏿‍🍼"],version:"13.0"},{emoji:"🧑‍🍼",category:1,name:"person feeding baby",variations:["🧑🏻‍🍼","🧑🏼‍🍼","🧑🏽‍🍼","🧑🏾‍🍼","🧑🏿‍🍼"],version:"13.0"},{emoji:"👼",category:1,name:"baby angel",variations:["👼🏻","👼🏼","👼🏽","👼🏾","👼🏿"],version:"1.0"},{emoji:"🎅",category:1,name:"Santa Claus",variations:["🎅🏻","🎅🏼","🎅🏽","🎅🏾","🎅🏿"],version:"1.0"},{emoji:"🤶",category:1,name:"Mrs. Claus",variations:["🤶🏻","🤶🏼","🤶🏽","🤶🏾","🤶🏿"],version:"3.0"},{emoji:"🧑‍🎄",category:1,name:"mx claus",variations:["🧑🏻‍🎄","🧑🏼‍🎄","🧑🏽‍🎄","🧑🏾‍🎄","🧑🏿‍🎄"],version:"13.0"},{emoji:"🦸",category:1,name:"superhero",variations:["🦸🏻","🦸🏼","🦸🏽","🦸🏾","🦸🏿"],version:"11.0"},{emoji:"🦸‍♂️",category:1,name:"man superhero",variations:["🦸🏻‍♂️","🦸🏼‍♂️","🦸🏽‍♂️","🦸🏾‍♂️","🦸🏿‍♂️"],version:"11.0"},{emoji:"🦸‍♀️",category:1,name:"woman superhero",variations:["🦸🏻‍♀️","🦸🏼‍♀️","🦸🏽‍♀️","🦸🏾‍♀️","🦸🏿‍♀️"],version:"11.0"},{emoji:"🦹",category:1,name:"supervillain",variations:["🦹🏻","🦹🏼","🦹🏽","🦹🏾","🦹🏿"],version:"11.0"},{emoji:"🦹‍♂️",category:1,name:"man supervillain",variations:["🦹🏻‍♂️","🦹🏼‍♂️","🦹🏽‍♂️","🦹🏾‍♂️","🦹🏿‍♂️"],version:"11.0"},{emoji:"🦹‍♀️",category:1,name:"woman supervillain",variations:["🦹🏻‍♀️","🦹🏼‍♀️","🦹🏽‍♀️","🦹🏾‍♀️","🦹🏿‍♀️"],version:"11.0"},{emoji:"🧙",category:1,name:"mage",variations:["🧙🏻","🧙🏼","🧙🏽","🧙🏾","🧙🏿"],version:"5.0"},{emoji:"🧙‍♂️",category:1,name:"man mage",variations:["🧙🏻‍♂️","🧙🏼‍♂️","🧙🏽‍♂️","🧙🏾‍♂️","🧙🏿‍♂️"],version:"5.0"},{emoji:"🧙‍♀️",category:1,name:"woman mage",variations:["🧙🏻‍♀️","🧙🏼‍♀️","🧙🏽‍♀️","🧙🏾‍♀️","🧙🏿‍♀️"],version:"5.0"},{emoji:"🧚",category:1,name:"fairy",variations:["🧚🏻","🧚🏼","🧚🏽","🧚🏾","🧚🏿"],version:"5.0"},{emoji:"🧚‍♂️",category:1,name:"man fairy",variations:["🧚🏻‍♂️","🧚🏼‍♂️","🧚🏽‍♂️","🧚🏾‍♂️","🧚🏿‍♂️"],version:"5.0"},{emoji:"🧚‍♀️",category:1,name:"woman fairy",variations:["🧚🏻‍♀️","🧚🏼‍♀️","🧚🏽‍♀️","🧚🏾‍♀️","🧚🏿‍♀️"],version:"5.0"},{emoji:"🧛",category:1,name:"vampire",variations:["🧛🏻","🧛🏼","🧛🏽","🧛🏾","🧛🏿"],version:"5.0"},{emoji:"🧛‍♂️",category:1,name:"man vampire",variations:["🧛🏻‍♂️","🧛🏼‍♂️","🧛🏽‍♂️","🧛🏾‍♂️","🧛🏿‍♂️"],version:"5.0"},{emoji:"🧛‍♀️",category:1,name:"woman vampire",variations:["🧛🏻‍♀️","🧛🏼‍♀️","🧛🏽‍♀️","🧛🏾‍♀️","🧛🏿‍♀️"],version:"5.0"},{emoji:"🧜",category:1,name:"merperson",variations:["🧜🏻","🧜🏼","🧜🏽","🧜🏾","🧜🏿"],version:"5.0"},{emoji:"🧜‍♂️",category:1,name:"merman",variations:["🧜🏻‍♂️","🧜🏼‍♂️","🧜🏽‍♂️","🧜🏾‍♂️","🧜🏿‍♂️"],version:"5.0"},{emoji:"🧜‍♀️",category:1,name:"mermaid",variations:["🧜🏻‍♀️","🧜🏼‍♀️","🧜🏽‍♀️","🧜🏾‍♀️","🧜🏿‍♀️"],version:"5.0"},{emoji:"🧝",category:1,name:"elf",variations:["🧝🏻","🧝🏼","🧝🏽","🧝🏾","🧝🏿"],version:"5.0"},{emoji:"🧝‍♂️",category:1,name:"man elf",variations:["🧝🏻‍♂️","🧝🏼‍♂️","🧝🏽‍♂️","🧝🏾‍♂️","🧝🏿‍♂️"],version:"5.0"},{emoji:"🧝‍♀️",category:1,name:"woman elf",variations:["🧝🏻‍♀️","🧝🏼‍♀️","🧝🏽‍♀️","🧝🏾‍♀️","🧝🏿‍♀️"],version:"5.0"},{emoji:"🧞",category:1,name:"genie",version:"5.0"},{emoji:"🧞‍♂️",category:1,name:"man genie",version:"5.0"},{emoji:"🧞‍♀️",category:1,name:"woman genie",version:"5.0"},{emoji:"🧟",category:1,name:"zombie",version:"5.0"},{emoji:"🧟‍♂️",category:1,name:"man zombie",version:"5.0"},{emoji:"🧟‍♀️",category:1,name:"woman zombie",version:"5.0"},{emoji:"💆",category:1,name:"person getting massage",variations:["💆🏻","💆🏼","💆🏽","💆🏾","💆🏿"],version:"1.0"},{emoji:"💆‍♂️",category:1,name:"man getting massage",variations:["💆🏻‍♂️","💆🏼‍♂️","💆🏽‍♂️","💆🏾‍♂️","💆🏿‍♂️"],version:"4.0"},{emoji:"💆‍♀️",category:1,name:"woman getting massage",variations:["💆🏻‍♀️","💆🏼‍♀️","💆🏽‍♀️","💆🏾‍♀️","💆🏿‍♀️"],version:"4.0"},{emoji:"💇",category:1,name:"person getting haircut",variations:["💇🏻","💇🏼","💇🏽","💇🏾","💇🏿"],version:"1.0"},{emoji:"💇‍♂️",category:1,name:"man getting haircut",variations:["💇🏻‍♂️","💇🏼‍♂️","💇🏽‍♂️","💇🏾‍♂️","💇🏿‍♂️"],version:"4.0"},{emoji:"💇‍♀️",category:1,name:"woman getting haircut",variations:["💇🏻‍♀️","💇🏼‍♀️","💇🏽‍♀️","💇🏾‍♀️","💇🏿‍♀️"],version:"4.0"},{emoji:"🚶",category:1,name:"person walking",variations:["🚶🏻","🚶🏼","🚶🏽","🚶🏾","🚶🏿"],version:"1.0"},{emoji:"🚶‍♂️",category:1,name:"man walking",variations:["🚶🏻‍♂️","🚶🏼‍♂️","🚶🏽‍♂️","🚶🏾‍♂️","🚶🏿‍♂️"],version:"4.0"},{emoji:"🚶‍♀️",category:1,name:"woman walking",variations:["🚶🏻‍♀️","🚶🏼‍♀️","🚶🏽‍♀️","🚶🏾‍♀️","🚶🏿‍♀️"],version:"4.0"},{emoji:"🧍",category:1,name:"person standing",variations:["🧍🏻","🧍🏼","🧍🏽","🧍🏾","🧍🏿"],version:"12.0"},{emoji:"🧍‍♂️",category:1,name:"man standing",variations:["🧍🏻‍♂️","🧍🏼‍♂️","🧍🏽‍♂️","🧍🏾‍♂️","🧍🏿‍♂️"],version:"12.0"},{emoji:"🧍‍♀️",category:1,name:"woman standing",variations:["🧍🏻‍♀️","🧍🏼‍♀️","🧍🏽‍♀️","🧍🏾‍♀️","🧍🏿‍♀️"],version:"12.0"},{emoji:"🧎",category:1,name:"person kneeling",variations:["🧎🏻","🧎🏼","🧎🏽","🧎🏾","🧎🏿"],version:"12.0"},{emoji:"🧎‍♂️",category:1,name:"man kneeling",variations:["🧎🏻‍♂️","🧎🏼‍♂️","🧎🏽‍♂️","🧎🏾‍♂️","🧎🏿‍♂️"],version:"12.0"},{emoji:"🧎‍♀️",category:1,name:"woman kneeling",variations:["🧎🏻‍♀️","🧎🏼‍♀️","🧎🏽‍♀️","🧎🏾‍♀️","🧎🏿‍♀️"],version:"12.0"},{emoji:"🧑‍🦯",category:1,name:"person with white cane",variations:["🧑🏻‍🦯","🧑🏼‍🦯","🧑🏽‍🦯","🧑🏾‍🦯","🧑🏿‍🦯"],version:"12.1"},{emoji:"👨‍🦯",category:1,name:"man with white cane",variations:["👨🏻‍🦯","👨🏼‍🦯","👨🏽‍🦯","👨🏾‍🦯","👨🏿‍🦯"],version:"12.0"},{emoji:"👩‍🦯",category:1,name:"woman with white cane",variations:["👩🏻‍🦯","👩🏼‍🦯","👩🏽‍🦯","👩🏾‍🦯","👩🏿‍🦯"],version:"12.0"},{emoji:"🧑‍🦼",category:1,name:"person in motorized wheelchair",variations:["🧑🏻‍🦼","🧑🏼‍🦼","🧑🏽‍🦼","🧑🏾‍🦼","🧑🏿‍🦼"],version:"12.1"},{emoji:"👨‍🦼",category:1,name:"man in motorized wheelchair",variations:["👨🏻‍🦼","👨🏼‍🦼","👨🏽‍🦼","👨🏾‍🦼","👨🏿‍🦼"],version:"12.0"},{emoji:"👩‍🦼",category:1,name:"woman in motorized wheelchair",variations:["👩🏻‍🦼","👩🏼‍🦼","👩🏽‍🦼","👩🏾‍🦼","👩🏿‍🦼"],version:"12.0"},{emoji:"🧑‍🦽",category:1,name:"person in manual wheelchair",variations:["🧑🏻‍🦽","🧑🏼‍🦽","🧑🏽‍🦽","🧑🏾‍🦽","🧑🏿‍🦽"],version:"12.1"},{emoji:"👨‍🦽",category:1,name:"man in manual wheelchair",variations:["👨🏻‍🦽","👨🏼‍🦽","👨🏽‍🦽","👨🏾‍🦽","👨🏿‍🦽"],version:"12.0"},{emoji:"👩‍🦽",category:1,name:"woman in manual wheelchair",variations:["👩🏻‍🦽","👩🏼‍🦽","👩🏽‍🦽","👩🏾‍🦽","👩🏿‍🦽"],version:"12.0"},{emoji:"🏃",category:1,name:"person running",variations:["🏃🏻","🏃🏼","🏃🏽","🏃🏾","🏃🏿"],version:"1.0"},{emoji:"🏃‍♂️",category:1,name:"man running",variations:["🏃🏻‍♂️","🏃🏼‍♂️","🏃🏽‍♂️","🏃🏾‍♂️","🏃🏿‍♂️"],version:"4.0"},{emoji:"🏃‍♀️",category:1,name:"woman running",variations:["🏃🏻‍♀️","🏃🏼‍♀️","🏃🏽‍♀️","🏃🏾‍♀️","🏃🏿‍♀️"],version:"4.0"},{emoji:"💃",category:1,name:"woman dancing",variations:["💃🏻","💃🏼","💃🏽","💃🏾","💃🏿"],version:"1.0"},{emoji:"🕺",category:1,name:"man dancing",variations:["🕺🏻","🕺🏼","🕺🏽","🕺🏾","🕺🏿"],version:"3.0"},{emoji:"🕴️",category:1,name:"person in suit levitating",variations:["🕴🏻","🕴🏼","🕴🏽","🕴🏾","🕴🏿"],version:"1.0"},{emoji:"👯",category:1,name:"people with bunny ears",version:"1.0"},{emoji:"👯‍♂️",category:1,name:"men with bunny ears",version:"4.0"},{emoji:"👯‍♀️",category:1,name:"women with bunny ears",version:"4.0"},{emoji:"🧖",category:1,name:"person in steamy room",variations:["🧖🏻","🧖🏼","🧖🏽","🧖🏾","🧖🏿"],version:"5.0"},{emoji:"🧖‍♂️",category:1,name:"man in steamy room",variations:["🧖🏻‍♂️","🧖🏼‍♂️","🧖🏽‍♂️","🧖🏾‍♂️","🧖🏿‍♂️"],version:"5.0"},{emoji:"🧖‍♀️",category:1,name:"woman in steamy room",variations:["🧖🏻‍♀️","🧖🏼‍♀️","🧖🏽‍♀️","🧖🏾‍♀️","🧖🏿‍♀️"],version:"5.0"},{emoji:"🧗",category:1,name:"person climbing",variations:["🧗🏻","🧗🏼","🧗🏽","🧗🏾","🧗🏿"],version:"5.0"},{emoji:"🧗‍♂️",category:1,name:"man climbing",variations:["🧗🏻‍♂️","🧗🏼‍♂️","🧗🏽‍♂️","🧗🏾‍♂️","🧗🏿‍♂️"],version:"5.0"},{emoji:"🧗‍♀️",category:1,name:"woman climbing",variations:["🧗🏻‍♀️","🧗🏼‍♀️","🧗🏽‍♀️","🧗🏾‍♀️","🧗🏿‍♀️"],version:"5.0"},{emoji:"🤺",category:1,name:"person fencing",version:"3.0"},{emoji:"🏇",category:1,name:"horse racing",variations:["🏇🏻","🏇🏼","🏇🏽","🏇🏾","🏇🏿"],version:"1.0"},{emoji:"⛷️",category:1,name:"skier",version:"1.0"},{emoji:"🏂",category:1,name:"snowboarder",variations:["🏂🏻","🏂🏼","🏂🏽","🏂🏾","🏂🏿"],version:"1.0"},{emoji:"🏌️",category:1,name:"person golfing",variations:["🏌🏻","🏌🏼","🏌🏽","🏌🏾","🏌🏿"],version:"1.0"},{emoji:"🏌️‍♂️",category:1,name:"man golfing",variations:["🏌🏻‍♂️","🏌🏼‍♂️","🏌🏽‍♂️","🏌🏾‍♂️","🏌🏿‍♂️"],version:"4.0"},{emoji:"🏌️‍♀️",category:1,name:"woman golfing",variations:["🏌🏻‍♀️","🏌🏼‍♀️","🏌🏽‍♀️","🏌🏾‍♀️","🏌🏿‍♀️"],version:"4.0"},{emoji:"🏄",category:1,name:"person surfing",variations:["🏄🏻","🏄🏼","🏄🏽","🏄🏾","🏄🏿"],version:"1.0"},{emoji:"🏄‍♂️",category:1,name:"man surfing",variations:["🏄🏻‍♂️","🏄🏼‍♂️","🏄🏽‍♂️","🏄🏾‍♂️","🏄🏿‍♂️"],version:"4.0"},{emoji:"🏄‍♀️",category:1,name:"woman surfing",variations:["🏄🏻‍♀️","🏄🏼‍♀️","🏄🏽‍♀️","🏄🏾‍♀️","🏄🏿‍♀️"],version:"4.0"},{emoji:"🚣",category:1,name:"person rowing boat",variations:["🚣🏻","🚣🏼","🚣🏽","🚣🏾","🚣🏿"],version:"1.0"},{emoji:"🚣‍♂️",category:1,name:"man rowing boat",variations:["🚣🏻‍♂️","🚣🏼‍♂️","🚣🏽‍♂️","🚣🏾‍♂️","🚣🏿‍♂️"],version:"4.0"},{emoji:"🚣‍♀️",category:1,name:"woman rowing boat",variations:["🚣🏻‍♀️","🚣🏼‍♀️","🚣🏽‍♀️","🚣🏾‍♀️","🚣🏿‍♀️"],version:"4.0"},{emoji:"🏊",category:1,name:"person swimming",variations:["🏊🏻","🏊🏼","🏊🏽","🏊🏾","🏊🏿"],version:"1.0"},{emoji:"🏊‍♂️",category:1,name:"man swimming",variations:["🏊🏻‍♂️","🏊🏼‍♂️","🏊🏽‍♂️","🏊🏾‍♂️","🏊🏿‍♂️"],version:"4.0"},{emoji:"🏊‍♀️",category:1,name:"woman swimming",variations:["🏊🏻‍♀️","🏊🏼‍♀️","🏊🏽‍♀️","🏊🏾‍♀️","🏊🏿‍♀️"],version:"4.0"},{emoji:"⛹️",category:1,name:"person bouncing ball",variations:["⛹🏻","⛹🏼","⛹🏽","⛹🏾","⛹🏿"],version:"1.0"},{emoji:"⛹️‍♂️",category:1,name:"man bouncing ball",variations:["⛹🏻‍♂️","⛹🏼‍♂️","⛹🏽‍♂️","⛹🏾‍♂️","⛹🏿‍♂️"],version:"4.0"},{emoji:"⛹️‍♀️",category:1,name:"woman bouncing ball",variations:["⛹🏻‍♀️","⛹🏼‍♀️","⛹🏽‍♀️","⛹🏾‍♀️","⛹🏿‍♀️"],version:"4.0"},{emoji:"🏋️",category:1,name:"person lifting weights",variations:["🏋🏻","🏋🏼","🏋🏽","🏋🏾","🏋🏿"],version:"1.0"},{emoji:"🏋️‍♂️",category:1,name:"man lifting weights",variations:["🏋🏻‍♂️","🏋🏼‍♂️","🏋🏽‍♂️","🏋🏾‍♂️","🏋🏿‍♂️"],version:"4.0"},{emoji:"🏋️‍♀️",category:1,name:"woman lifting weights",variations:["🏋🏻‍♀️","🏋🏼‍♀️","🏋🏽‍♀️","🏋🏾‍♀️","🏋🏿‍♀️"],version:"4.0"},{emoji:"🚴",category:1,name:"person biking",variations:["🚴🏻","🚴🏼","🚴🏽","🚴🏾","🚴🏿"],version:"1.0"},{emoji:"🚴‍♂️",category:1,name:"man biking",variations:["🚴🏻‍♂️","🚴🏼‍♂️","🚴🏽‍♂️","🚴🏾‍♂️","🚴🏿‍♂️"],version:"4.0"},{emoji:"🚴‍♀️",category:1,name:"woman biking",variations:["🚴🏻‍♀️","🚴🏼‍♀️","🚴🏽‍♀️","🚴🏾‍♀️","🚴🏿‍♀️"],version:"4.0"},{emoji:"🚵",category:1,name:"person mountain biking",variations:["🚵🏻","🚵🏼","🚵🏽","🚵🏾","🚵🏿"],version:"1.0"},{emoji:"🚵‍♂️",category:1,name:"man mountain biking",variations:["🚵🏻‍♂️","🚵🏼‍♂️","🚵🏽‍♂️","🚵🏾‍♂️","🚵🏿‍♂️"],version:"4.0"},{emoji:"🚵‍♀️",category:1,name:"woman mountain biking",variations:["🚵🏻‍♀️","🚵🏼‍♀️","🚵🏽‍♀️","🚵🏾‍♀️","🚵🏿‍♀️"],version:"4.0"},{emoji:"🤸",category:1,name:"person cartwheeling",variations:["🤸🏻","🤸🏼","🤸🏽","🤸🏾","🤸🏿"],version:"3.0"},{emoji:"🤸‍♂️",category:1,name:"man cartwheeling",variations:["🤸🏻‍♂️","🤸🏼‍♂️","🤸🏽‍♂️","🤸🏾‍♂️","🤸🏿‍♂️"],version:"4.0"},{emoji:"🤸‍♀️",category:1,name:"woman cartwheeling",variations:["🤸🏻‍♀️","🤸🏼‍♀️","🤸🏽‍♀️","🤸🏾‍♀️","🤸🏿‍♀️"],version:"4.0"},{emoji:"🤼",category:1,name:"people wrestling",version:"3.0"},{emoji:"🤼‍♂️",category:1,name:"men wrestling",version:"4.0"},{emoji:"🤼‍♀️",category:1,name:"women wrestling",version:"4.0"},{emoji:"🤽",category:1,name:"person playing water polo",variations:["🤽🏻","🤽🏼","🤽🏽","🤽🏾","🤽🏿"],version:"3.0"},{emoji:"🤽‍♂️",category:1,name:"man playing water polo",variations:["🤽🏻‍♂️","🤽🏼‍♂️","🤽🏽‍♂️","🤽🏾‍♂️","🤽🏿‍♂️"],version:"4.0"},{emoji:"🤽‍♀️",category:1,name:"woman playing water polo",variations:["🤽🏻‍♀️","🤽🏼‍♀️","🤽🏽‍♀️","🤽🏾‍♀️","🤽🏿‍♀️"],version:"4.0"},{emoji:"🤾",category:1,name:"person playing handball",variations:["🤾🏻","🤾🏼","🤾🏽","🤾🏾","🤾🏿"],version:"3.0"},{emoji:"🤾‍♂️",category:1,name:"man playing handball",variations:["🤾🏻‍♂️","🤾🏼‍♂️","🤾🏽‍♂️","🤾🏾‍♂️","🤾🏿‍♂️"],version:"4.0"},{emoji:"🤾‍♀️",category:1,name:"woman playing handball",variations:["🤾🏻‍♀️","🤾🏼‍♀️","🤾🏽‍♀️","🤾🏾‍♀️","🤾🏿‍♀️"],version:"4.0"},{emoji:"🤹",category:1,name:"person juggling",variations:["🤹🏻","🤹🏼","🤹🏽","🤹🏾","🤹🏿"],version:"3.0"},{emoji:"🤹‍♂️",category:1,name:"man juggling",variations:["🤹🏻‍♂️","🤹🏼‍♂️","🤹🏽‍♂️","🤹🏾‍♂️","🤹🏿‍♂️"],version:"4.0"},{emoji:"🤹‍♀️",category:1,name:"woman juggling",variations:["🤹🏻‍♀️","🤹🏼‍♀️","🤹🏽‍♀️","🤹🏾‍♀️","🤹🏿‍♀️"],version:"4.0"},{emoji:"🧘",category:1,name:"person in lotus position",variations:["🧘🏻","🧘🏼","🧘🏽","🧘🏾","🧘🏿"],version:"5.0"},{emoji:"🧘‍♂️",category:1,name:"man in lotus position",variations:["🧘🏻‍♂️","🧘🏼‍♂️","🧘🏽‍♂️","🧘🏾‍♂️","🧘🏿‍♂️"],version:"5.0"},{emoji:"🧘‍♀️",category:1,name:"woman in lotus position",variations:["🧘🏻‍♀️","🧘🏼‍♀️","🧘🏽‍♀️","🧘🏾‍♀️","🧘🏿‍♀️"],version:"5.0"},{emoji:"🛀",category:1,name:"person taking bath",variations:["🛀🏻","🛀🏼","🛀🏽","🛀🏾","🛀🏿"],version:"1.0"},{emoji:"🛌",category:1,name:"person in bed",variations:["🛌🏻","🛌🏼","🛌🏽","🛌🏾","🛌🏿"],version:"1.0"},{emoji:"🧑‍🤝‍🧑",category:1,name:"people holding hands",variations:["🧑🏻‍🤝‍🧑🏻","🧑🏻‍🤝‍🧑🏼","🧑🏻‍🤝‍🧑🏽","🧑🏻‍🤝‍🧑🏾","🧑🏻‍🤝‍🧑🏿","🧑🏼‍🤝‍🧑🏻","🧑🏼‍🤝‍🧑🏼","🧑🏼‍🤝‍🧑🏽","🧑🏼‍🤝‍🧑🏾","🧑🏼‍🤝‍🧑🏿","🧑🏽‍🤝‍🧑🏻","🧑🏽‍🤝‍🧑🏼","🧑🏽‍🤝‍🧑🏽","🧑🏽‍🤝‍🧑🏾","🧑🏽‍🤝‍🧑🏿","🧑🏾‍🤝‍🧑🏻","🧑🏾‍🤝‍🧑🏼","🧑🏾‍🤝‍🧑🏽","🧑🏾‍🤝‍🧑🏾","🧑🏾‍🤝‍🧑🏿","🧑🏿‍🤝‍🧑🏻","🧑🏿‍🤝‍🧑🏼","🧑🏿‍🤝‍🧑🏽","🧑🏿‍🤝‍🧑🏾","🧑🏿‍🤝‍🧑🏿"],version:"12.0"},{emoji:"👭",category:1,name:"women holding hands",variations:["👭🏻","👩🏻‍🤝‍👩🏼","👩🏻‍🤝‍👩🏽","👩🏻‍🤝‍👩🏾","👩🏻‍🤝‍👩🏿","👩🏼‍🤝‍👩🏻","👭🏼","👩🏼‍🤝‍👩🏽","👩🏼‍🤝‍👩🏾","👩🏼‍🤝‍👩🏿","👩🏽‍🤝‍👩🏻","👩🏽‍🤝‍👩🏼","👭🏽","👩🏽‍🤝‍👩🏾","👩🏽‍🤝‍👩🏿","👩🏾‍🤝‍👩🏻","👩🏾‍🤝‍👩🏼","👩🏾‍🤝‍👩🏽","👭🏾","👩🏾‍🤝‍👩🏿","👩🏿‍🤝‍👩🏻","👩🏿‍🤝‍👩🏼","👩🏿‍🤝‍👩🏽","👩🏿‍🤝‍👩🏾","👭🏿"],version:"1.0"},{emoji:"👫",category:1,name:"woman and man holding hands",variations:["👫🏻","👩🏻‍🤝‍👨🏼","👩🏻‍🤝‍👨🏽","👩🏻‍🤝‍👨🏾","👩🏻‍🤝‍👨🏿","👩🏼‍🤝‍👨🏻","👫🏼","👩🏼‍🤝‍👨🏽","👩🏼‍🤝‍👨🏾","👩🏼‍🤝‍👨🏿","👩🏽‍🤝‍👨🏻","👩🏽‍🤝‍👨🏼","👫🏽","👩🏽‍🤝‍👨🏾","👩🏽‍🤝‍👨🏿","👩🏾‍🤝‍👨🏻","👩🏾‍🤝‍👨🏼","👩🏾‍🤝‍👨🏽","👫🏾","👩🏾‍🤝‍👨🏿","👩🏿‍🤝‍👨🏻","👩🏿‍🤝‍👨🏼","👩🏿‍🤝‍👨🏽","👩🏿‍🤝‍👨🏾","👫🏿"],version:"1.0"},{emoji:"👬",category:1,name:"men holding hands",variations:["👬🏻","👨🏻‍🤝‍👨🏼","👨🏻‍🤝‍👨🏽","👨🏻‍🤝‍👨🏾","👨🏻‍🤝‍👨🏿","👨🏼‍🤝‍👨🏻","👬🏼","👨🏼‍🤝‍👨🏽","👨🏼‍🤝‍👨🏾","👨🏼‍🤝‍👨🏿","👨🏽‍🤝‍👨🏻","👨🏽‍🤝‍👨🏼","👬🏽","👨🏽‍🤝‍👨🏾","👨🏽‍🤝‍👨🏿","👨🏾‍🤝‍👨🏻","👨🏾‍🤝‍👨🏼","👨🏾‍🤝‍👨🏽","👬🏾","👨🏾‍🤝‍👨🏿","👨🏿‍🤝‍👨🏻","👨🏿‍🤝‍👨🏼","👨🏿‍🤝‍👨🏽","👨🏿‍🤝‍👨🏾","👬🏿"],version:"1.0"},{emoji:"💏",category:1,name:"kiss",variations:["👩‍❤️‍💋‍👨","👨‍❤️‍💋‍👨","👩‍❤️‍💋‍👩"],version:"1.0"},{emoji:"💑",category:1,name:"couple with heart",variations:["👩‍❤️‍👨","👨‍❤️‍👨","👩‍❤️‍👩"],version:"1.0"},{emoji:"👪",category:1,name:"family",version:"1.0"},{emoji:"👨‍👩‍👦",category:1,name:"family: man, woman, boy",version:"2.0"},{emoji:"👨‍👩‍👧",category:1,name:"family: man, woman, girl",version:"2.0"},{emoji:"👨‍👩‍👧‍👦",category:1,name:"family: man, woman, girl, boy",version:"2.0"},{emoji:"👨‍👩‍👦‍👦",category:1,name:"family: man, woman, boy, boy",version:"2.0"},{emoji:"👨‍👩‍👧‍👧",category:1,name:"family: man, woman, girl, girl",version:"2.0"},{emoji:"👨‍👨‍👦",category:1,name:"family: man, man, boy",version:"2.0"},{emoji:"👨‍👨‍👧",category:1,name:"family: man, man, girl",version:"2.0"},{emoji:"👨‍👨‍👧‍👦",category:1,name:"family: man, man, girl, boy",version:"2.0"},{emoji:"👨‍👨‍👦‍👦",category:1,name:"family: man, man, boy, boy",version:"2.0"},{emoji:"👨‍👨‍👧‍👧",category:1,name:"family: man, man, girl, girl",version:"2.0"},{emoji:"👩‍👩‍👦",category:1,name:"family: woman, woman, boy",version:"2.0"},{emoji:"👩‍👩‍👧",category:1,name:"family: woman, woman, girl",version:"2.0"},{emoji:"👩‍👩‍👧‍👦",category:1,name:"family: woman, woman, girl, boy",version:"2.0"},{emoji:"👩‍👩‍👦‍👦",category:1,name:"family: woman, woman, boy, boy",version:"2.0"},{emoji:"👩‍👩‍👧‍👧",category:1,name:"family: woman, woman, girl, girl",version:"2.0"},{emoji:"👨‍👦",category:1,name:"family: man, boy",version:"4.0"},{emoji:"👨‍👦‍👦",category:1,name:"family: man, boy, boy",version:"4.0"},{emoji:"👨‍👧",category:1,name:"family: man, girl",version:"4.0"},{emoji:"👨‍👧‍👦",category:1,name:"family: man, girl, boy",version:"4.0"},{emoji:"👨‍👧‍👧",category:1,name:"family: man, girl, girl",version:"4.0"},{emoji:"👩‍👦",category:1,name:"family: woman, boy",version:"4.0"},{emoji:"👩‍👦‍👦",category:1,name:"family: woman, boy, boy",version:"4.0"},{emoji:"👩‍👧",category:1,name:"family: woman, girl",version:"4.0"},{emoji:"👩‍👧‍👦",category:1,name:"family: woman, girl, boy",version:"4.0"},{emoji:"👩‍👧‍👧",category:1,name:"family: woman, girl, girl",version:"4.0"},{emoji:"🗣️",category:1,name:"speaking head",version:"1.0"},{emoji:"👤",category:1,name:"bust in silhouette",version:"1.0"},{emoji:"👥",category:1,name:"busts in silhouette",version:"1.0"},{emoji:"🫂",category:1,name:"people hugging",version:"13.0"},{emoji:"👣",category:1,name:"footprints",version:"1.0"},{emoji:"🐵",category:2,name:"monkey face",version:"1.0"},{emoji:"🐒",category:2,name:"monkey",version:"1.0"},{emoji:"🦍",category:2,name:"gorilla",version:"3.0"},{emoji:"🦧",category:2,name:"orangutan",version:"12.0"},{emoji:"🐶",category:2,name:"dog face",version:"1.0"},{emoji:"🐕",category:2,name:"dog",version:"1.0"},{emoji:"🦮",category:2,name:"guide dog",version:"12.0"},{emoji:"🐕‍🦺",category:2,name:"service dog",version:"12.0"},{emoji:"🐩",category:2,name:"poodle",version:"1.0"},{emoji:"🐺",category:2,name:"wolf",version:"1.0"},{emoji:"🦊",category:2,name:"fox",version:"3.0"},{emoji:"🦝",category:2,name:"raccoon",version:"11.0"},{emoji:"🐱",category:2,name:"cat face",version:"1.0"},{emoji:"🐈",category:2,name:"cat",version:"1.0"},{emoji:"🐈‍⬛",category:2,name:"black cat",version:"13.0"},{emoji:"🦁",category:2,name:"lion",version:"1.0"},{emoji:"🐯",category:2,name:"tiger face",version:"1.0"},{emoji:"🐅",category:2,name:"tiger",version:"1.0"},{emoji:"🐆",category:2,name:"leopard",version:"1.0"},{emoji:"🐴",category:2,name:"horse face",version:"1.0"},{emoji:"🐎",category:2,name:"horse",version:"1.0"},{emoji:"🦄",category:2,name:"unicorn",version:"1.0"},{emoji:"🦓",category:2,name:"zebra",version:"5.0"},{emoji:"🦌",category:2,name:"deer",version:"3.0"},{emoji:"🦬",category:2,name:"bison",version:"13.0"},{emoji:"🐮",category:2,name:"cow face",version:"1.0"},{emoji:"🐂",category:2,name:"ox",version:"1.0"},{emoji:"🐃",category:2,name:"water buffalo",version:"1.0"},{emoji:"🐄",category:2,name:"cow",version:"1.0"},{emoji:"🐷",category:2,name:"pig face",version:"1.0"},{emoji:"🐖",category:2,name:"pig",version:"1.0"},{emoji:"🐗",category:2,name:"boar",version:"1.0"},{emoji:"🐽",category:2,name:"pig nose",version:"1.0"},{emoji:"🐏",category:2,name:"ram",version:"1.0"},{emoji:"🐑",category:2,name:"ewe",version:"1.0"},{emoji:"🐐",category:2,name:"goat",version:"1.0"},{emoji:"🐪",category:2,name:"camel",version:"1.0"},{emoji:"🐫",category:2,name:"two-hump camel",version:"1.0"},{emoji:"🦙",category:2,name:"llama",version:"11.0"},{emoji:"🦒",category:2,name:"giraffe",version:"5.0"},{emoji:"🐘",category:2,name:"elephant",version:"1.0"},{emoji:"🦣",category:2,name:"mammoth",version:"13.0"},{emoji:"🦏",category:2,name:"rhinoceros",version:"3.0"},{emoji:"🦛",category:2,name:"hippopotamus",version:"11.0"},{emoji:"🐭",category:2,name:"mouse face",version:"1.0"},{emoji:"🐁",category:2,name:"mouse",version:"1.0"},{emoji:"🐀",category:2,name:"rat",version:"1.0"},{emoji:"🐹",category:2,name:"hamster",version:"1.0"},{emoji:"🐰",category:2,name:"rabbit face",version:"1.0"},{emoji:"🐇",category:2,name:"rabbit",version:"1.0"},{emoji:"🐿️",category:2,name:"chipmunk",version:"1.0"},{emoji:"🦫",category:2,name:"beaver",version:"13.0"},{emoji:"🦔",category:2,name:"hedgehog",version:"5.0"},{emoji:"🦇",category:2,name:"bat",version:"3.0"},{emoji:"🐻",category:2,name:"bear",version:"1.0"},{emoji:"🐻‍❄️",category:2,name:"polar bear",version:"13.0"},{emoji:"🐨",category:2,name:"koala",version:"1.0"},{emoji:"🐼",category:2,name:"panda",version:"1.0"},{emoji:"🦥",category:2,name:"sloth",version:"12.0"},{emoji:"🦦",category:2,name:"otter",version:"12.0"},{emoji:"🦨",category:2,name:"skunk",version:"12.0"},{emoji:"🦘",category:2,name:"kangaroo",version:"11.0"},{emoji:"🦡",category:2,name:"badger",version:"11.0"},{emoji:"🐾",category:2,name:"paw prints",version:"1.0"},{emoji:"🦃",category:2,name:"turkey",version:"1.0"},{emoji:"🐔",category:2,name:"chicken",version:"1.0"},{emoji:"🐓",category:2,name:"rooster",version:"1.0"},{emoji:"🐣",category:2,name:"hatching chick",version:"1.0"},{emoji:"🐤",category:2,name:"baby chick",version:"1.0"},{emoji:"🐥",category:2,name:"front-facing baby chick",version:"1.0"},{emoji:"🐦",category:2,name:"bird",version:"1.0"},{emoji:"🐧",category:2,name:"penguin",version:"1.0"},{emoji:"🕊️",category:2,name:"dove",version:"1.0"},{emoji:"🦅",category:2,name:"eagle",version:"3.0"},{emoji:"🦆",category:2,name:"duck",version:"3.0"},{emoji:"🦢",category:2,name:"swan",version:"11.0"},{emoji:"🦉",category:2,name:"owl",version:"3.0"},{emoji:"🦤",category:2,name:"dodo",version:"13.0"},{emoji:"🪶",category:2,name:"feather",version:"13.0"},{emoji:"🦩",category:2,name:"flamingo",version:"12.0"},{emoji:"🦚",category:2,name:"peacock",version:"11.0"},{emoji:"🦜",category:2,name:"parrot",version:"11.0"},{emoji:"🐸",category:2,name:"frog",version:"1.0"},{emoji:"🐊",category:2,name:"crocodile",version:"1.0"},{emoji:"🐢",category:2,name:"turtle",version:"1.0"},{emoji:"🦎",category:2,name:"lizard",version:"3.0"},{emoji:"🐍",category:2,name:"snake",version:"1.0"},{emoji:"🐲",category:2,name:"dragon face",version:"1.0"},{emoji:"🐉",category:2,name:"dragon",version:"1.0"},{emoji:"🦕",category:2,name:"sauropod",version:"5.0"},{emoji:"🦖",category:2,name:"T-Rex",version:"5.0"},{emoji:"🐳",category:2,name:"spouting whale",version:"1.0"},{emoji:"🐋",category:2,name:"whale",version:"1.0"},{emoji:"🐬",category:2,name:"dolphin",version:"1.0"},{emoji:"🦭",category:2,name:"seal",version:"13.0"},{emoji:"🐟",category:2,name:"fish",version:"1.0"},{emoji:"🐠",category:2,name:"tropical fish",version:"1.0"},{emoji:"🐡",category:2,name:"blowfish",version:"1.0"},{emoji:"🦈",category:2,name:"shark",version:"3.0"},{emoji:"🐙",category:2,name:"octopus",version:"1.0"},{emoji:"🐚",category:2,name:"spiral shell",version:"1.0"},{emoji:"🐌",category:2,name:"snail",version:"1.0"},{emoji:"🦋",category:2,name:"butterfly",version:"3.0"},{emoji:"🐛",category:2,name:"bug",version:"1.0"},{emoji:"🐜",category:2,name:"ant",version:"1.0"},{emoji:"🐝",category:2,name:"honeybee",version:"1.0"},{emoji:"🪲",category:2,name:"beetle",version:"13.0"},{emoji:"🐞",category:2,name:"lady beetle",version:"1.0"},{emoji:"🦗",category:2,name:"cricket",version:"5.0"},{emoji:"🪳",category:2,name:"cockroach",version:"13.0"},{emoji:"🕷️",category:2,name:"spider",version:"1.0"},{emoji:"🕸️",category:2,name:"spider web",version:"1.0"},{emoji:"🦂",category:2,name:"scorpion",version:"1.0"},{emoji:"🦟",category:2,name:"mosquito",version:"11.0"},{emoji:"🪰",category:2,name:"fly",version:"13.0"},{emoji:"🪱",category:2,name:"worm",version:"13.0"},{emoji:"🦠",category:2,name:"microbe",version:"11.0"},{emoji:"💐",category:2,name:"bouquet",version:"1.0"},{emoji:"🌸",category:2,name:"cherry blossom",version:"1.0"},{emoji:"💮",category:2,name:"white flower",version:"1.0"},{emoji:"🏵️",category:2,name:"rosette",version:"1.0"},{emoji:"🌹",category:2,name:"rose",version:"1.0"},{emoji:"🥀",category:2,name:"wilted flower",version:"3.0"},{emoji:"🌺",category:2,name:"hibiscus",version:"1.0"},{emoji:"🌻",category:2,name:"sunflower",version:"1.0"},{emoji:"🌼",category:2,name:"blossom",version:"1.0"},{emoji:"🌷",category:2,name:"tulip",version:"1.0"},{emoji:"🌱",category:2,name:"seedling",version:"1.0"},{emoji:"🪴",category:2,name:"potted plant",version:"13.0"},{emoji:"🌲",category:2,name:"evergreen tree",version:"1.0"},{emoji:"🌳",category:2,name:"deciduous tree",version:"1.0"},{emoji:"🌴",category:2,name:"palm tree",version:"1.0"},{emoji:"🌵",category:2,name:"cactus",version:"1.0"},{emoji:"🌾",category:2,name:"sheaf of rice",version:"1.0"},{emoji:"🌿",category:2,name:"herb",version:"1.0"},{emoji:"☘️",category:2,name:"shamrock",version:"1.0"},{emoji:"🍀",category:2,name:"four leaf clover",version:"1.0"},{emoji:"🍁",category:2,name:"maple leaf",version:"1.0"},{emoji:"🍂",category:2,name:"fallen leaf",version:"1.0"},{emoji:"🍃",category:2,name:"leaf fluttering in wind",version:"1.0"},{emoji:"🍇",category:3,name:"grapes",version:"1.0"},{emoji:"🍈",category:3,name:"melon",version:"1.0"},{emoji:"🍉",category:3,name:"watermelon",version:"1.0"},{emoji:"🍊",category:3,name:"tangerine",version:"1.0"},{emoji:"🍋",category:3,name:"lemon",version:"1.0"},{emoji:"🍌",category:3,name:"banana",version:"1.0"},{emoji:"🍍",category:3,name:"pineapple",version:"1.0"},{emoji:"🥭",category:3,name:"mango",version:"11.0"},{emoji:"🍎",category:3,name:"red apple",version:"1.0"},{emoji:"🍏",category:3,name:"green apple",version:"1.0"},{emoji:"🍐",category:3,name:"pear",version:"1.0"},{emoji:"🍑",category:3,name:"peach",version:"1.0"},{emoji:"🍒",category:3,name:"cherries",version:"1.0"},{emoji:"🍓",category:3,name:"strawberry",version:"1.0"},{emoji:"🫐",category:3,name:"blueberries",version:"13.0"},{emoji:"🥝",category:3,name:"kiwi fruit",version:"3.0"},{emoji:"🍅",category:3,name:"tomato",version:"1.0"},{emoji:"🫒",category:3,name:"olive",version:"13.0"},{emoji:"🥥",category:3,name:"coconut",version:"5.0"},{emoji:"🥑",category:3,name:"avocado",version:"3.0"},{emoji:"🍆",category:3,name:"eggplant",version:"1.0"},{emoji:"🥔",category:3,name:"potato",version:"3.0"},{emoji:"🥕",category:3,name:"carrot",version:"3.0"},{emoji:"🌽",category:3,name:"ear of corn",version:"1.0"},{emoji:"🌶️",category:3,name:"hot pepper",version:"1.0"},{emoji:"🫑",category:3,name:"bell pepper",version:"13.0"},{emoji:"🥒",category:3,name:"cucumber",version:"3.0"},{emoji:"🥬",category:3,name:"leafy green",version:"11.0"},{emoji:"🥦",category:3,name:"broccoli",version:"5.0"},{emoji:"🧄",category:3,name:"garlic",version:"12.0"},{emoji:"🧅",category:3,name:"onion",version:"12.0"},{emoji:"🍄",category:3,name:"mushroom",version:"1.0"},{emoji:"🥜",category:3,name:"peanuts",version:"3.0"},{emoji:"🌰",category:3,name:"chestnut",version:"1.0"},{emoji:"🍞",category:3,name:"bread",version:"1.0"},{emoji:"🥐",category:3,name:"croissant",version:"3.0"},{emoji:"🥖",category:3,name:"baguette bread",version:"3.0"},{emoji:"🫓",category:3,name:"flatbread",version:"13.0"},{emoji:"🥨",category:3,name:"pretzel",version:"5.0"},{emoji:"🥯",category:3,name:"bagel",version:"11.0"},{emoji:"🥞",category:3,name:"pancakes",version:"3.0"},{emoji:"🧇",category:3,name:"waffle",version:"12.0"},{emoji:"🧀",category:3,name:"cheese wedge",version:"1.0"},{emoji:"🍖",category:3,name:"meat on bone",version:"1.0"},{emoji:"🍗",category:3,name:"poultry leg",version:"1.0"},{emoji:"🥩",category:3,name:"cut of meat",version:"5.0"},{emoji:"🥓",category:3,name:"bacon",version:"3.0"},{emoji:"🍔",category:3,name:"hamburger",version:"1.0"},{emoji:"🍟",category:3,name:"french fries",version:"1.0"},{emoji:"🍕",category:3,name:"pizza",version:"1.0"},{emoji:"🌭",category:3,name:"hot dog",version:"1.0"},{emoji:"🥪",category:3,name:"sandwich",version:"5.0"},{emoji:"🌮",category:3,name:"taco",version:"1.0"},{emoji:"🌯",category:3,name:"burrito",version:"1.0"},{emoji:"🫔",category:3,name:"tamale",version:"13.0"},{emoji:"🥙",category:3,name:"stuffed flatbread",version:"3.0"},{emoji:"🧆",category:3,name:"falafel",version:"12.0"},{emoji:"🥚",category:3,name:"egg",version:"3.0"},{emoji:"🍳",category:3,name:"cooking",version:"1.0"},{emoji:"🥘",category:3,name:"shallow pan of food",version:"3.0"},{emoji:"🍲",category:3,name:"pot of food",version:"1.0"},{emoji:"🫕",category:3,name:"fondue",version:"13.0"},{emoji:"🥣",category:3,name:"bowl with spoon",version:"5.0"},{emoji:"🥗",category:3,name:"green salad",version:"3.0"},{emoji:"🍿",category:3,name:"popcorn",version:"1.0"},{emoji:"🧈",category:3,name:"butter",version:"12.0"},{emoji:"🧂",category:3,name:"salt",version:"11.0"},{emoji:"🥫",category:3,name:"canned food",version:"5.0"},{emoji:"🍱",category:3,name:"bento box",version:"1.0"},{emoji:"🍘",category:3,name:"rice cracker",version:"1.0"},{emoji:"🍙",category:3,name:"rice ball",version:"1.0"},{emoji:"🍚",category:3,name:"cooked rice",version:"1.0"},{emoji:"🍛",category:3,name:"curry rice",version:"1.0"},{emoji:"🍜",category:3,name:"steaming bowl",version:"1.0"},{emoji:"🍝",category:3,name:"spaghetti",version:"1.0"},{emoji:"🍠",category:3,name:"roasted sweet potato",version:"1.0"},{emoji:"🍢",category:3,name:"oden",version:"1.0"},{emoji:"🍣",category:3,name:"sushi",version:"1.0"},{emoji:"🍤",category:3,name:"fried shrimp",version:"1.0"},{emoji:"🍥",category:3,name:"fish cake with swirl",version:"1.0"},{emoji:"🥮",category:3,name:"moon cake",version:"11.0"},{emoji:"🍡",category:3,name:"dango",version:"1.0"},{emoji:"🥟",category:3,name:"dumpling",version:"5.0"},{emoji:"🥠",category:3,name:"fortune cookie",version:"5.0"},{emoji:"🥡",category:3,name:"takeout box",version:"5.0"},{emoji:"🦀",category:3,name:"crab",version:"1.0"},{emoji:"🦞",category:3,name:"lobster",version:"11.0"},{emoji:"🦐",category:3,name:"shrimp",version:"3.0"},{emoji:"🦑",category:3,name:"squid",version:"3.0"},{emoji:"🦪",category:3,name:"oyster",version:"12.0"},{emoji:"🍦",category:3,name:"soft ice cream",version:"1.0"},{emoji:"🍧",category:3,name:"shaved ice",version:"1.0"},{emoji:"🍨",category:3,name:"ice cream",version:"1.0"},{emoji:"🍩",category:3,name:"doughnut",version:"1.0"},{emoji:"🍪",category:3,name:"cookie",version:"1.0"},{emoji:"🎂",category:3,name:"birthday cake",version:"1.0"},{emoji:"🍰",category:3,name:"shortcake",version:"1.0"},{emoji:"🧁",category:3,name:"cupcake",version:"11.0"},{emoji:"🥧",category:3,name:"pie",version:"5.0"},{emoji:"🍫",category:3,name:"chocolate bar",version:"1.0"},{emoji:"🍬",category:3,name:"candy",version:"1.0"},{emoji:"🍭",category:3,name:"lollipop",version:"1.0"},{emoji:"🍮",category:3,name:"custard",version:"1.0"},{emoji:"🍯",category:3,name:"honey pot",version:"1.0"},{emoji:"🍼",category:3,name:"baby bottle",version:"1.0"},{emoji:"🥛",category:3,name:"glass of milk",version:"3.0"},{emoji:"☕",category:3,name:"hot beverage",version:"1.0"},{emoji:"🫖",category:3,name:"teapot",version:"13.0"},{emoji:"🍵",category:3,name:"teacup without handle",version:"1.0"},{emoji:"🍶",category:3,name:"sake",version:"1.0"},{emoji:"🍾",category:3,name:"bottle with popping cork",version:"1.0"},{emoji:"🍷",category:3,name:"wine glass",version:"1.0"},{emoji:"🍸",category:3,name:"cocktail glass",version:"1.0"},{emoji:"🍹",category:3,name:"tropical drink",version:"1.0"},{emoji:"🍺",category:3,name:"beer mug",version:"1.0"},{emoji:"🍻",category:3,name:"clinking beer mugs",version:"1.0"},{emoji:"🥂",category:3,name:"clinking glasses",version:"3.0"},{emoji:"🥃",category:3,name:"tumbler glass",version:"3.0"},{emoji:"🥤",category:3,name:"cup with straw",version:"5.0"},{emoji:"🧋",category:3,name:"bubble tea",version:"13.0"},{emoji:"🧃",category:3,name:"beverage box",version:"12.0"},{emoji:"🧉",category:3,name:"mate",version:"12.0"},{emoji:"🧊",category:3,name:"ice",version:"12.0"},{emoji:"🥢",category:3,name:"chopsticks",version:"5.0"},{emoji:"🍽️",category:3,name:"fork and knife with plate",version:"1.0"},{emoji:"🍴",category:3,name:"fork and knife",version:"1.0"},{emoji:"🥄",category:3,name:"spoon",version:"3.0"},{emoji:"🔪",category:3,name:"kitchen knife",version:"1.0"},{emoji:"🏺",category:3,name:"amphora",version:"1.0"},{emoji:"🌍",category:4,name:"globe showing Europe-Africa",version:"1.0"},{emoji:"🌎",category:4,name:"globe showing Americas",version:"1.0"},{emoji:"🌏",category:4,name:"globe showing Asia-Australia",version:"1.0"},{emoji:"🌐",category:4,name:"globe with meridians",version:"1.0"},{emoji:"🗺️",category:4,name:"world map",version:"1.0"},{emoji:"🗾",category:4,name:"map of Japan",version:"1.0"},{emoji:"🧭",category:4,name:"compass",version:"11.0"},{emoji:"🏔️",category:4,name:"snow-capped mountain",version:"1.0"},{emoji:"⛰️",category:4,name:"mountain",version:"1.0"},{emoji:"🌋",category:4,name:"volcano",version:"1.0"},{emoji:"🗻",category:4,name:"mount fuji",version:"1.0"},{emoji:"🏕️",category:4,name:"camping",version:"1.0"},{emoji:"🏖️",category:4,name:"beach with umbrella",version:"1.0"},{emoji:"🏜️",category:4,name:"desert",version:"1.0"},{emoji:"🏝️",category:4,name:"desert island",version:"1.0"},{emoji:"🏞️",category:4,name:"national park",version:"1.0"},{emoji:"🏟️",category:4,name:"stadium",version:"1.0"},{emoji:"🏛️",category:4,name:"classical building",version:"1.0"},{emoji:"🏗️",category:4,name:"building construction",version:"1.0"},{emoji:"🧱",category:4,name:"brick",version:"11.0"},{emoji:"🪨",category:4,name:"rock",version:"13.0"},{emoji:"🪵",category:4,name:"wood",version:"13.0"},{emoji:"🛖",category:4,name:"hut",version:"13.0"},{emoji:"🏘️",category:4,name:"houses",version:"1.0"},{emoji:"🏚️",category:4,name:"derelict house",version:"1.0"},{emoji:"🏠",category:4,name:"house",version:"1.0"},{emoji:"🏡",category:4,name:"house with garden",version:"1.0"},{emoji:"🏢",category:4,name:"office building",version:"1.0"},{emoji:"🏣",category:4,name:"Japanese post office",version:"1.0"},{emoji:"🏤",category:4,name:"post office",version:"1.0"},{emoji:"🏥",category:4,name:"hospital",version:"1.0"},{emoji:"🏦",category:4,name:"bank",version:"1.0"},{emoji:"🏨",category:4,name:"hotel",version:"1.0"},{emoji:"🏩",category:4,name:"love hotel",version:"1.0"},{emoji:"🏪",category:4,name:"convenience store",version:"1.0"},{emoji:"🏫",category:4,name:"school",version:"1.0"},{emoji:"🏬",category:4,name:"department store",version:"1.0"},{emoji:"🏭",category:4,name:"factory",version:"1.0"},{emoji:"🏯",category:4,name:"Japanese castle",version:"1.0"},{emoji:"🏰",category:4,name:"castle",version:"1.0"},{emoji:"💒",category:4,name:"wedding",version:"1.0"},{emoji:"🗼",category:4,name:"Tokyo tower",version:"1.0"},{emoji:"🗽",category:4,name:"Statue of Liberty",version:"1.0"},{emoji:"⛪",category:4,name:"church",version:"1.0"},{emoji:"🕌",category:4,name:"mosque",version:"1.0"},{emoji:"🛕",category:4,name:"hindu temple",version:"12.0"},{emoji:"🕍",category:4,name:"synagogue",version:"1.0"},{emoji:"⛩️",category:4,name:"shinto shrine",version:"1.0"},{emoji:"🕋",category:4,name:"kaaba",version:"1.0"},{emoji:"⛲",category:4,name:"fountain",version:"1.0"},{emoji:"⛺",category:4,name:"tent",version:"1.0"},{emoji:"🌁",category:4,name:"foggy",version:"1.0"},{emoji:"🌃",category:4,name:"night with stars",version:"1.0"},{emoji:"🏙️",category:4,name:"cityscape",version:"1.0"},{emoji:"🌄",category:4,name:"sunrise over mountains",version:"1.0"},{emoji:"🌅",category:4,name:"sunrise",version:"1.0"},{emoji:"🌆",category:4,name:"cityscape at dusk",version:"1.0"},{emoji:"🌇",category:4,name:"sunset",version:"1.0"},{emoji:"🌉",category:4,name:"bridge at night",version:"1.0"},{emoji:"♨️",category:4,name:"hot springs",version:"1.0"},{emoji:"🎠",category:4,name:"carousel horse",version:"1.0"},{emoji:"🎡",category:4,name:"ferris wheel",version:"1.0"},{emoji:"🎢",category:4,name:"roller coaster",version:"1.0"},{emoji:"💈",category:4,name:"barber pole",version:"1.0"},{emoji:"🎪",category:4,name:"circus tent",version:"1.0"},{emoji:"🚂",category:4,name:"locomotive",version:"1.0"},{emoji:"🚃",category:4,name:"railway car",version:"1.0"},{emoji:"🚄",category:4,name:"high-speed train",version:"1.0"},{emoji:"🚅",category:4,name:"bullet train",version:"1.0"},{emoji:"🚆",category:4,name:"train",version:"1.0"},{emoji:"🚇",category:4,name:"metro",version:"1.0"},{emoji:"🚈",category:4,name:"light rail",version:"1.0"},{emoji:"🚉",category:4,name:"station",version:"1.0"},{emoji:"🚊",category:4,name:"tram",version:"1.0"},{emoji:"🚝",category:4,name:"monorail",version:"1.0"},{emoji:"🚞",category:4,name:"mountain railway",version:"1.0"},{emoji:"🚋",category:4,name:"tram car",version:"1.0"},{emoji:"🚌",category:4,name:"bus",version:"1.0"},{emoji:"🚍",category:4,name:"oncoming bus",version:"1.0"},{emoji:"🚎",category:4,name:"trolleybus",version:"1.0"},{emoji:"🚐",category:4,name:"minibus",version:"1.0"},{emoji:"🚑",category:4,name:"ambulance",version:"1.0"},{emoji:"🚒",category:4,name:"fire engine",version:"1.0"},{emoji:"🚓",category:4,name:"police car",version:"1.0"},{emoji:"🚔",category:4,name:"oncoming police car",version:"1.0"},{emoji:"🚕",category:4,name:"taxi",version:"1.0"},{emoji:"🚖",category:4,name:"oncoming taxi",version:"1.0"},{emoji:"🚗",category:4,name:"automobile",version:"1.0"},{emoji:"🚘",category:4,name:"oncoming automobile",version:"1.0"},{emoji:"🚙",category:4,name:"sport utility vehicle",version:"1.0"},{emoji:"🛻",category:4,name:"pickup truck",version:"13.0"},{emoji:"🚚",category:4,name:"delivery truck",version:"1.0"},{emoji:"🚛",category:4,name:"articulated lorry",version:"1.0"},{emoji:"🚜",category:4,name:"tractor",version:"1.0"},{emoji:"🏎️",category:4,name:"racing car",version:"1.0"},{emoji:"🏍️",category:4,name:"motorcycle",version:"1.0"},{emoji:"🛵",category:4,name:"motor scooter",version:"3.0"},{emoji:"🦽",category:4,name:"manual wheelchair",version:"12.0"},{emoji:"🦼",category:4,name:"motorized wheelchair",version:"12.0"},{emoji:"🛺",category:4,name:"auto rickshaw",version:"12.0"},{emoji:"🚲",category:4,name:"bicycle",version:"1.0"},{emoji:"🛴",category:4,name:"kick scooter",version:"3.0"},{emoji:"🛹",category:4,name:"skateboard",version:"11.0"},{emoji:"🛼",category:4,name:"roller skate",version:"13.0"},{emoji:"🚏",category:4,name:"bus stop",version:"1.0"},{emoji:"🛣️",category:4,name:"motorway",version:"1.0"},{emoji:"🛤️",category:4,name:"railway track",version:"1.0"},{emoji:"🛢️",category:4,name:"oil drum",version:"1.0"},{emoji:"⛽",category:4,name:"fuel pump",version:"1.0"},{emoji:"🚨",category:4,name:"police car light",version:"1.0"},{emoji:"🚥",category:4,name:"horizontal traffic light",version:"1.0"},{emoji:"🚦",category:4,name:"vertical traffic light",version:"1.0"},{emoji:"🛑",category:4,name:"stop sign",version:"3.0"},{emoji:"🚧",category:4,name:"construction",version:"1.0"},{emoji:"⚓",category:4,name:"anchor",version:"1.0"},{emoji:"⛵",category:4,name:"sailboat",version:"1.0"},{emoji:"🛶",category:4,name:"canoe",version:"3.0"},{emoji:"🚤",category:4,name:"speedboat",version:"1.0"},{emoji:"🛳️",category:4,name:"passenger ship",version:"1.0"},{emoji:"⛴️",category:4,name:"ferry",version:"1.0"},{emoji:"🛥️",category:4,name:"motor boat",version:"1.0"},{emoji:"🚢",category:4,name:"ship",version:"1.0"},{emoji:"✈️",category:4,name:"airplane",version:"1.0"},{emoji:"🛩️",category:4,name:"small airplane",version:"1.0"},{emoji:"🛫",category:4,name:"airplane departure",version:"1.0"},{emoji:"🛬",category:4,name:"airplane arrival",version:"1.0"},{emoji:"🪂",category:4,name:"parachute",version:"12.0"},{emoji:"💺",category:4,name:"seat",version:"1.0"},{emoji:"🚁",category:4,name:"helicopter",version:"1.0"},{emoji:"🚟",category:4,name:"suspension railway",version:"1.0"},{emoji:"🚠",category:4,name:"mountain cableway",version:"1.0"},{emoji:"🚡",category:4,name:"aerial tramway",version:"1.0"},{emoji:"🛰️",category:4,name:"satellite",version:"1.0"},{emoji:"🚀",category:4,name:"rocket",version:"1.0"},{emoji:"🛸",category:4,name:"flying saucer",version:"5.0"},{emoji:"🛎️",category:4,name:"bellhop bell",version:"1.0"},{emoji:"🧳",category:4,name:"luggage",version:"11.0"},{emoji:"⌛",category:4,name:"hourglass done",version:"1.0"},{emoji:"⏳",category:4,name:"hourglass not done",version:"1.0"},{emoji:"⌚",category:4,name:"watch",version:"1.0"},{emoji:"⏰",category:4,name:"alarm clock",version:"1.0"},{emoji:"⏱️",category:4,name:"stopwatch",version:"1.0"},{emoji:"⏲️",category:4,name:"timer clock",version:"1.0"},{emoji:"🕰️",category:4,name:"mantelpiece clock",version:"1.0"},{emoji:"🕛",category:4,name:"twelve o’clock",version:"1.0"},{emoji:"🕧",category:4,name:"twelve-thirty",version:"1.0"},{emoji:"🕐",category:4,name:"one o’clock",version:"1.0"},{emoji:"🕜",category:4,name:"one-thirty",version:"1.0"},{emoji:"🕑",category:4,name:"two o’clock",version:"1.0"},{emoji:"🕝",category:4,name:"two-thirty",version:"1.0"},{emoji:"🕒",category:4,name:"three o’clock",version:"1.0"},{emoji:"🕞",category:4,name:"three-thirty",version:"1.0"},{emoji:"🕓",category:4,name:"four o’clock",version:"1.0"},{emoji:"🕟",category:4,name:"four-thirty",version:"1.0"},{emoji:"🕔",category:4,name:"five o’clock",version:"1.0"},{emoji:"🕠",category:4,name:"five-thirty",version:"1.0"},{emoji:"🕕",category:4,name:"six o’clock",version:"1.0"},{emoji:"🕡",category:4,name:"six-thirty",version:"1.0"},{emoji:"🕖",category:4,name:"seven o’clock",version:"1.0"},{emoji:"🕢",category:4,name:"seven-thirty",version:"1.0"},{emoji:"🕗",category:4,name:"eight o’clock",version:"1.0"},{emoji:"🕣",category:4,name:"eight-thirty",version:"1.0"},{emoji:"🕘",category:4,name:"nine o’clock",version:"1.0"},{emoji:"🕤",category:4,name:"nine-thirty",version:"1.0"},{emoji:"🕙",category:4,name:"ten o’clock",version:"1.0"},{emoji:"🕥",category:4,name:"ten-thirty",version:"1.0"},{emoji:"🕚",category:4,name:"eleven o’clock",version:"1.0"},{emoji:"🕦",category:4,name:"eleven-thirty",version:"1.0"},{emoji:"🌑",category:4,name:"new moon",version:"1.0"},{emoji:"🌒",category:4,name:"waxing crescent moon",version:"1.0"},{emoji:"🌓",category:4,name:"first quarter moon",version:"1.0"},{emoji:"🌔",category:4,name:"waxing gibbous moon",version:"1.0"},{emoji:"🌕",category:4,name:"full moon",version:"1.0"},{emoji:"🌖",category:4,name:"waning gibbous moon",version:"1.0"},{emoji:"🌗",category:4,name:"last quarter moon",version:"1.0"},{emoji:"🌘",category:4,name:"waning crescent moon",version:"1.0"},{emoji:"🌙",category:4,name:"crescent moon",version:"1.0"},{emoji:"🌚",category:4,name:"new moon face",version:"1.0"},{emoji:"🌛",category:4,name:"first quarter moon face",version:"1.0"},{emoji:"🌜",category:4,name:"last quarter moon face",version:"1.0"},{emoji:"🌡️",category:4,name:"thermometer",version:"1.0"},{emoji:"☀️",category:4,name:"sun",version:"1.0"},{emoji:"🌝",category:4,name:"full moon face",version:"1.0"},{emoji:"🌞",category:4,name:"sun with face",version:"1.0"},{emoji:"🪐",category:4,name:"ringed planet",version:"12.0"},{emoji:"⭐",category:4,name:"star",version:"1.0"},{emoji:"🌟",category:4,name:"glowing star",version:"1.0"},{emoji:"🌠",category:4,name:"shooting star",version:"1.0"},{emoji:"🌌",category:4,name:"milky way",version:"1.0"},{emoji:"☁️",category:4,name:"cloud",version:"1.0"},{emoji:"⛅",category:4,name:"sun behind cloud",version:"1.0"},{emoji:"⛈️",category:4,name:"cloud with lightning and rain",version:"1.0"},{emoji:"🌤️",category:4,name:"sun behind small cloud",version:"1.0"},{emoji:"🌥️",category:4,name:"sun behind large cloud",version:"1.0"},{emoji:"🌦️",category:4,name:"sun behind rain cloud",version:"1.0"},{emoji:"🌧️",category:4,name:"cloud with rain",version:"1.0"},{emoji:"🌨️",category:4,name:"cloud with snow",version:"1.0"},{emoji:"🌩️",category:4,name:"cloud with lightning",version:"1.0"},{emoji:"🌪️",category:4,name:"tornado",version:"1.0"},{emoji:"🌫️",category:4,name:"fog",version:"1.0"},{emoji:"🌬️",category:4,name:"wind face",version:"1.0"},{emoji:"🌀",category:4,name:"cyclone",version:"1.0"},{emoji:"🌈",category:4,name:"rainbow",version:"1.0"},{emoji:"🌂",category:4,name:"closed umbrella",version:"1.0"},{emoji:"☂️",category:4,name:"umbrella",version:"1.0"},{emoji:"☔",category:4,name:"umbrella with rain drops",version:"1.0"},{emoji:"⛱️",category:4,name:"umbrella on ground",version:"1.0"},{emoji:"⚡",category:4,name:"high voltage",version:"1.0"},{emoji:"❄️",category:4,name:"snowflake",version:"1.0"},{emoji:"☃️",category:4,name:"snowman",version:"1.0"},{emoji:"⛄",category:4,name:"snowman without snow",version:"1.0"},{emoji:"☄️",category:4,name:"comet",version:"1.0"},{emoji:"🔥",category:4,name:"fire",version:"1.0"},{emoji:"💧",category:4,name:"droplet",version:"1.0"},{emoji:"🌊",category:4,name:"water wave",version:"1.0"},{emoji:"🎃",category:5,name:"jack-o-lantern",version:"1.0"},{emoji:"🎄",category:5,name:"Christmas tree",version:"1.0"},{emoji:"🎆",category:5,name:"fireworks",version:"1.0"},{emoji:"🎇",category:5,name:"sparkler",version:"1.0"},{emoji:"🧨",category:5,name:"firecracker",version:"11.0"},{emoji:"✨",category:5,name:"sparkles",version:"1.0"},{emoji:"🎈",category:5,name:"balloon",version:"1.0"},{emoji:"🎉",category:5,name:"party popper",version:"1.0"},{emoji:"🎊",category:5,name:"confetti ball",version:"1.0"},{emoji:"🎋",category:5,name:"tanabata tree",version:"1.0"},{emoji:"🎍",category:5,name:"pine decoration",version:"1.0"},{emoji:"🎎",category:5,name:"Japanese dolls",version:"1.0"},{emoji:"🎏",category:5,name:"carp streamer",version:"1.0"},{emoji:"🎐",category:5,name:"wind chime",version:"1.0"},{emoji:"🎑",category:5,name:"moon viewing ceremony",version:"1.0"},{emoji:"🧧",category:5,name:"red envelope",version:"11.0"},{emoji:"🎀",category:5,name:"ribbon",version:"1.0"},{emoji:"🎁",category:5,name:"wrapped gift",version:"1.0"},{emoji:"🎗️",category:5,name:"reminder ribbon",version:"1.0"},{emoji:"🎟️",category:5,name:"admission tickets",version:"1.0"},{emoji:"🎫",category:5,name:"ticket",version:"1.0"},{emoji:"🎖️",category:5,name:"military medal",version:"1.0"},{emoji:"🏆",category:5,name:"trophy",version:"1.0"},{emoji:"🏅",category:5,name:"sports medal",version:"1.0"},{emoji:"🥇",category:5,name:"1st place medal",version:"3.0"},{emoji:"🥈",category:5,name:"2nd place medal",version:"3.0"},{emoji:"🥉",category:5,name:"3rd place medal",version:"3.0"},{emoji:"⚽",category:5,name:"soccer ball",version:"1.0"},{emoji:"⚾",category:5,name:"baseball",version:"1.0"},{emoji:"🥎",category:5,name:"softball",version:"11.0"},{emoji:"🏀",category:5,name:"basketball",version:"1.0"},{emoji:"🏐",category:5,name:"volleyball",version:"1.0"},{emoji:"🏈",category:5,name:"american football",version:"1.0"},{emoji:"🏉",category:5,name:"rugby football",version:"1.0"},{emoji:"🎾",category:5,name:"tennis",version:"1.0"},{emoji:"🥏",category:5,name:"flying disc",version:"11.0"},{emoji:"🎳",category:5,name:"bowling",version:"1.0"},{emoji:"🏏",category:5,name:"cricket game",version:"1.0"},{emoji:"🏑",category:5,name:"field hockey",version:"1.0"},{emoji:"🏒",category:5,name:"ice hockey",version:"1.0"},{emoji:"🥍",category:5,name:"lacrosse",version:"11.0"},{emoji:"🏓",category:5,name:"ping pong",version:"1.0"},{emoji:"🏸",category:5,name:"badminton",version:"1.0"},{emoji:"🥊",category:5,name:"boxing glove",version:"3.0"},{emoji:"🥋",category:5,name:"martial arts uniform",version:"3.0"},{emoji:"🥅",category:5,name:"goal net",version:"3.0"},{emoji:"⛳",category:5,name:"flag in hole",version:"1.0"},{emoji:"⛸️",category:5,name:"ice skate",version:"1.0"},{emoji:"🎣",category:5,name:"fishing pole",version:"1.0"},{emoji:"🤿",category:5,name:"diving mask",version:"12.0"},{emoji:"🎽",category:5,name:"running shirt",version:"1.0"},{emoji:"🎿",category:5,name:"skis",version:"1.0"},{emoji:"🛷",category:5,name:"sled",version:"5.0"},{emoji:"🥌",category:5,name:"curling stone",version:"5.0"},{emoji:"🎯",category:5,name:"direct hit",version:"1.0"},{emoji:"🪀",category:5,name:"yo-yo",version:"12.0"},{emoji:"🪁",category:5,name:"kite",version:"12.0"},{emoji:"🎱",category:5,name:"pool 8 ball",version:"1.0"},{emoji:"🔮",category:5,name:"crystal ball",version:"1.0"},{emoji:"🪄",category:5,name:"magic wand",version:"13.0"},{emoji:"🧿",category:5,name:"nazar amulet",version:"11.0"},{emoji:"🎮",category:5,name:"video game",version:"1.0"},{emoji:"🕹️",category:5,name:"joystick",version:"1.0"},{emoji:"🎰",category:5,name:"slot machine",version:"1.0"},{emoji:"🎲",category:5,name:"game die",version:"1.0"},{emoji:"🧩",category:5,name:"puzzle piece",version:"11.0"},{emoji:"🧸",category:5,name:"teddy bear",version:"11.0"},{emoji:"🪅",category:5,name:"piñata",version:"13.0"},{emoji:"🪆",category:5,name:"nesting dolls",version:"13.0"},{emoji:"♠️",category:5,name:"spade suit",version:"1.0"},{emoji:"♥️",category:5,name:"heart suit",version:"1.0"},{emoji:"♦️",category:5,name:"diamond suit",version:"1.0"},{emoji:"♣️",category:5,name:"club suit",version:"1.0"},{emoji:"♟️",category:5,name:"chess pawn",version:"11.0"},{emoji:"🃏",category:5,name:"joker",version:"1.0"},{emoji:"🀄",category:5,name:"mahjong red dragon",version:"1.0"},{emoji:"🎴",category:5,name:"flower playing cards",version:"1.0"},{emoji:"🎭",category:5,name:"performing arts",version:"1.0"},{emoji:"🖼️",category:5,name:"framed picture",version:"1.0"},{emoji:"🎨",category:5,name:"artist palette",version:"1.0"},{emoji:"🧵",category:5,name:"thread",version:"11.0"},{emoji:"🪡",category:5,name:"sewing needle",version:"13.0"},{emoji:"🧶",category:5,name:"yarn",version:"11.0"},{emoji:"🪢",category:5,name:"knot",version:"13.0"},{emoji:"👓",category:6,name:"glasses",version:"1.0"},{emoji:"🕶️",category:6,name:"sunglasses",version:"1.0"},{emoji:"🥽",category:6,name:"goggles",version:"11.0"},{emoji:"🥼",category:6,name:"lab coat",version:"11.0"},{emoji:"🦺",category:6,name:"safety vest",version:"12.0"},{emoji:"👔",category:6,name:"necktie",version:"1.0"},{emoji:"👕",category:6,name:"t-shirt",version:"1.0"},{emoji:"👖",category:6,name:"jeans",version:"1.0"},{emoji:"🧣",category:6,name:"scarf",version:"5.0"},{emoji:"🧤",category:6,name:"gloves",version:"5.0"},{emoji:"🧥",category:6,name:"coat",version:"5.0"},{emoji:"🧦",category:6,name:"socks",version:"5.0"},{emoji:"👗",category:6,name:"dress",version:"1.0"},{emoji:"👘",category:6,name:"kimono",version:"1.0"},{emoji:"🥻",category:6,name:"sari",version:"12.0"},{emoji:"🩱",category:6,name:"one-piece swimsuit",version:"12.0"},{emoji:"🩲",category:6,name:"briefs",version:"12.0"},{emoji:"🩳",category:6,name:"shorts",version:"12.0"},{emoji:"👙",category:6,name:"bikini",version:"1.0"},{emoji:"👚",category:6,name:"woman’s clothes",version:"1.0"},{emoji:"👛",category:6,name:"purse",version:"1.0"},{emoji:"👜",category:6,name:"handbag",version:"1.0"},{emoji:"👝",category:6,name:"clutch bag",version:"1.0"},{emoji:"🛍️",category:6,name:"shopping bags",version:"1.0"},{emoji:"🎒",category:6,name:"backpack",version:"1.0"},{emoji:"🩴",category:6,name:"thong sandal",version:"13.0"},{emoji:"👞",category:6,name:"man’s shoe",version:"1.0"},{emoji:"👟",category:6,name:"running shoe",version:"1.0"},{emoji:"🥾",category:6,name:"hiking boot",version:"11.0"},{emoji:"🥿",category:6,name:"flat shoe",version:"11.0"},{emoji:"👠",category:6,name:"high-heeled shoe",version:"1.0"},{emoji:"👡",category:6,name:"woman’s sandal",version:"1.0"},{emoji:"🩰",category:6,name:"ballet shoes",version:"12.0"},{emoji:"👢",category:6,name:"woman’s boot",version:"1.0"},{emoji:"👑",category:6,name:"crown",version:"1.0"},{emoji:"👒",category:6,name:"woman’s hat",version:"1.0"},{emoji:"🎩",category:6,name:"top hat",version:"1.0"},{emoji:"🎓",category:6,name:"graduation cap",version:"1.0"},{emoji:"🧢",category:6,name:"billed cap",version:"5.0"},{emoji:"🪖",category:6,name:"military helmet",version:"13.0"},{emoji:"⛑️",category:6,name:"rescue worker’s helmet",version:"1.0"},{emoji:"📿",category:6,name:"prayer beads",version:"1.0"},{emoji:"💄",category:6,name:"lipstick",version:"1.0"},{emoji:"💍",category:6,name:"ring",version:"1.0"},{emoji:"💎",category:6,name:"gem stone",version:"1.0"},{emoji:"🔇",category:6,name:"muted speaker",version:"1.0"},{emoji:"🔈",category:6,name:"speaker low volume",version:"1.0"},{emoji:"🔉",category:6,name:"speaker medium volume",version:"1.0"},{emoji:"🔊",category:6,name:"speaker high volume",version:"1.0"},{emoji:"📢",category:6,name:"loudspeaker",version:"1.0"},{emoji:"📣",category:6,name:"megaphone",version:"1.0"},{emoji:"📯",category:6,name:"postal horn",version:"1.0"},{emoji:"🔔",category:6,name:"bell",version:"1.0"},{emoji:"🔕",category:6,name:"bell with slash",version:"1.0"},{emoji:"🎼",category:6,name:"musical score",version:"1.0"},{emoji:"🎵",category:6,name:"musical note",version:"1.0"},{emoji:"🎶",category:6,name:"musical notes",version:"1.0"},{emoji:"🎙️",category:6,name:"studio microphone",version:"1.0"},{emoji:"🎚️",category:6,name:"level slider",version:"1.0"},{emoji:"🎛️",category:6,name:"control knobs",version:"1.0"},{emoji:"🎤",category:6,name:"microphone",version:"1.0"},{emoji:"🎧",category:6,name:"headphone",version:"1.0"},{emoji:"📻",category:6,name:"radio",version:"1.0"},{emoji:"🎷",category:6,name:"saxophone",version:"1.0"},{emoji:"🪗",category:6,name:"accordion",version:"13.0"},{emoji:"🎸",category:6,name:"guitar",version:"1.0"},{emoji:"🎹",category:6,name:"musical keyboard",version:"1.0"},{emoji:"🎺",category:6,name:"trumpet",version:"1.0"},{emoji:"🎻",category:6,name:"violin",version:"1.0"},{emoji:"🪕",category:6,name:"banjo",version:"12.0"},{emoji:"🥁",category:6,name:"drum",version:"3.0"},{emoji:"🪘",category:6,name:"long drum",version:"13.0"},{emoji:"📱",category:6,name:"mobile phone",version:"1.0"},{emoji:"📲",category:6,name:"mobile phone with arrow",version:"1.0"},{emoji:"☎️",category:6,name:"telephone",version:"1.0"},{emoji:"📞",category:6,name:"telephone receiver",version:"1.0"},{emoji:"📟",category:6,name:"pager",version:"1.0"},{emoji:"📠",category:6,name:"fax machine",version:"1.0"},{emoji:"🔋",category:6,name:"battery",version:"1.0"},{emoji:"🔌",category:6,name:"electric plug",version:"1.0"},{emoji:"💻",category:6,name:"laptop",version:"1.0"},{emoji:"🖥️",category:6,name:"desktop computer",version:"1.0"},{emoji:"🖨️",category:6,name:"printer",version:"1.0"},{emoji:"⌨️",category:6,name:"keyboard",version:"1.0"},{emoji:"🖱️",category:6,name:"computer mouse",version:"1.0"},{emoji:"🖲️",category:6,name:"trackball",version:"1.0"},{emoji:"💽",category:6,name:"computer disk",version:"1.0"},{emoji:"💾",category:6,name:"floppy disk",version:"1.0"},{emoji:"💿",category:6,name:"optical disk",version:"1.0"},{emoji:"📀",category:6,name:"dvd",version:"1.0"},{emoji:"🧮",category:6,name:"abacus",version:"11.0"},{emoji:"🎥",category:6,name:"movie camera",version:"1.0"},{emoji:"🎞️",category:6,name:"film frames",version:"1.0"},{emoji:"📽️",category:6,name:"film projector",version:"1.0"},{emoji:"🎬",category:6,name:"clapper board",version:"1.0"},{emoji:"📺",category:6,name:"television",version:"1.0"},{emoji:"📷",category:6,name:"camera",version:"1.0"},{emoji:"📸",category:6,name:"camera with flash",version:"1.0"},{emoji:"📹",category:6,name:"video camera",version:"1.0"},{emoji:"📼",category:6,name:"videocassette",version:"1.0"},{emoji:"🔍",category:6,name:"magnifying glass tilted left",version:"1.0"},{emoji:"🔎",category:6,name:"magnifying glass tilted right",version:"1.0"},{emoji:"🕯️",category:6,name:"candle",version:"1.0"},{emoji:"💡",category:6,name:"light bulb",version:"1.0"},{emoji:"🔦",category:6,name:"flashlight",version:"1.0"},{emoji:"🏮",category:6,name:"red paper lantern",version:"1.0"},{emoji:"🪔",category:6,name:"diya lamp",version:"12.0"},{emoji:"📔",category:6,name:"notebook with decorative cover",version:"1.0"},{emoji:"📕",category:6,name:"closed book",version:"1.0"},{emoji:"📖",category:6,name:"open book",version:"1.0"},{emoji:"📗",category:6,name:"green book",version:"1.0"},{emoji:"📘",category:6,name:"blue book",version:"1.0"},{emoji:"📙",category:6,name:"orange book",version:"1.0"},{emoji:"📚",category:6,name:"books",version:"1.0"},{emoji:"📓",category:6,name:"notebook",version:"1.0"},{emoji:"📒",category:6,name:"ledger",version:"1.0"},{emoji:"📃",category:6,name:"page with curl",version:"1.0"},{emoji:"📜",category:6,name:"scroll",version:"1.0"},{emoji:"📄",category:6,name:"page facing up",version:"1.0"},{emoji:"📰",category:6,name:"newspaper",version:"1.0"},{emoji:"🗞️",category:6,name:"rolled-up newspaper",version:"1.0"},{emoji:"📑",category:6,name:"bookmark tabs",version:"1.0"},{emoji:"🔖",category:6,name:"bookmark",version:"1.0"},{emoji:"🏷️",category:6,name:"label",version:"1.0"},{emoji:"💰",category:6,name:"money bag",version:"1.0"},{emoji:"🪙",category:6,name:"coin",version:"13.0"},{emoji:"💴",category:6,name:"yen banknote",version:"1.0"},{emoji:"💵",category:6,name:"dollar banknote",version:"1.0"},{emoji:"💶",category:6,name:"euro banknote",version:"1.0"},{emoji:"💷",category:6,name:"pound banknote",version:"1.0"},{emoji:"💸",category:6,name:"money with wings",version:"1.0"},{emoji:"💳",category:6,name:"credit card",version:"1.0"},{emoji:"🧾",category:6,name:"receipt",version:"11.0"},{emoji:"💹",category:6,name:"chart increasing with yen",version:"1.0"},{emoji:"✉️",category:6,name:"envelope",version:"1.0"},{emoji:"📧",category:6,name:"e-mail",version:"1.0"},{emoji:"📨",category:6,name:"incoming envelope",version:"1.0"},{emoji:"📩",category:6,name:"envelope with arrow",version:"1.0"},{emoji:"📤",category:6,name:"outbox tray",version:"1.0"},{emoji:"📥",category:6,name:"inbox tray",version:"1.0"},{emoji:"📦",category:6,name:"package",version:"1.0"},{emoji:"📫",category:6,name:"closed mailbox with raised flag",version:"1.0"},{emoji:"📪",category:6,name:"closed mailbox with lowered flag",version:"1.0"},{emoji:"📬",category:6,name:"open mailbox with raised flag",version:"1.0"},{emoji:"📭",category:6,name:"open mailbox with lowered flag",version:"1.0"},{emoji:"📮",category:6,name:"postbox",version:"1.0"},{emoji:"🗳️",category:6,name:"ballot box with ballot",version:"1.0"},{emoji:"✏️",category:6,name:"pencil",version:"1.0"},{emoji:"✒️",category:6,name:"black nib",version:"1.0"},{emoji:"🖋️",category:6,name:"fountain pen",version:"1.0"},{emoji:"🖊️",category:6,name:"pen",version:"1.0"},{emoji:"🖌️",category:6,name:"paintbrush",version:"1.0"},{emoji:"🖍️",category:6,name:"crayon",version:"1.0"},{emoji:"📝",category:6,name:"memo",version:"1.0"},{emoji:"💼",category:6,name:"briefcase",version:"1.0"},{emoji:"📁",category:6,name:"file folder",version:"1.0"},{emoji:"📂",category:6,name:"open file folder",version:"1.0"},{emoji:"🗂️",category:6,name:"card index dividers",version:"1.0"},{emoji:"📅",category:6,name:"calendar",version:"1.0"},{emoji:"📆",category:6,name:"tear-off calendar",version:"1.0"},{emoji:"🗒️",category:6,name:"spiral notepad",version:"1.0"},{emoji:"🗓️",category:6,name:"spiral calendar",version:"1.0"},{emoji:"📇",category:6,name:"card index",version:"1.0"},{emoji:"📈",category:6,name:"chart increasing",version:"1.0"},{emoji:"📉",category:6,name:"chart decreasing",version:"1.0"},{emoji:"📊",category:6,name:"bar chart",version:"1.0"},{emoji:"📋",category:6,name:"clipboard",version:"1.0"},{emoji:"📌",category:6,name:"pushpin",version:"1.0"},{emoji:"📍",category:6,name:"round pushpin",version:"1.0"},{emoji:"📎",category:6,name:"paperclip",version:"1.0"},{emoji:"🖇️",category:6,name:"linked paperclips",version:"1.0"},{emoji:"📏",category:6,name:"straight ruler",version:"1.0"},{emoji:"📐",category:6,name:"triangular ruler",version:"1.0"},{emoji:"✂️",category:6,name:"scissors",version:"1.0"},{emoji:"🗃️",category:6,name:"card file box",version:"1.0"},{emoji:"🗄️",category:6,name:"file cabinet",version:"1.0"},{emoji:"🗑️",category:6,name:"wastebasket",version:"1.0"},{emoji:"🔒",category:6,name:"locked",version:"1.0"},{emoji:"🔓",category:6,name:"unlocked",version:"1.0"},{emoji:"🔏",category:6,name:"locked with pen",version:"1.0"},{emoji:"🔐",category:6,name:"locked with key",version:"1.0"},{emoji:"🔑",category:6,name:"key",version:"1.0"},{emoji:"🗝️",category:6,name:"old key",version:"1.0"},{emoji:"🔨",category:6,name:"hammer",version:"1.0"},{emoji:"🪓",category:6,name:"axe",version:"12.0"},{emoji:"⛏️",category:6,name:"pick",version:"1.0"},{emoji:"⚒️",category:6,name:"hammer and pick",version:"1.0"},{emoji:"🛠️",category:6,name:"hammer and wrench",version:"1.0"},{emoji:"🗡️",category:6,name:"dagger",version:"1.0"},{emoji:"⚔️",category:6,name:"crossed swords",version:"1.0"},{emoji:"🔫",category:6,name:"pistol",version:"1.0"},{emoji:"🪃",category:6,name:"boomerang",version:"13.0"},{emoji:"🏹",category:6,name:"bow and arrow",version:"1.0"},{emoji:"🛡️",category:6,name:"shield",version:"1.0"},{emoji:"🪚",category:6,name:"carpentry saw",version:"13.0"},{emoji:"🔧",category:6,name:"wrench",version:"1.0"},{emoji:"🪛",category:6,name:"screwdriver",version:"13.0"},{emoji:"🔩",category:6,name:"nut and bolt",version:"1.0"},{emoji:"⚙️",category:6,name:"gear",version:"1.0"},{emoji:"🗜️",category:6,name:"clamp",version:"1.0"},{emoji:"⚖️",category:6,name:"balance scale",version:"1.0"},{emoji:"🦯",category:6,name:"white cane",version:"12.0"},{emoji:"🔗",category:6,name:"link",version:"1.0"},{emoji:"⛓️",category:6,name:"chains",version:"1.0"},{emoji:"🪝",category:6,name:"hook",version:"13.0"},{emoji:"🧰",category:6,name:"toolbox",version:"11.0"},{emoji:"🧲",category:6,name:"magnet",version:"11.0"},{emoji:"🪜",category:6,name:"ladder",version:"13.0"},{emoji:"⚗️",category:6,name:"alembic",version:"1.0"},{emoji:"🧪",category:6,name:"test tube",version:"11.0"},{emoji:"🧫",category:6,name:"petri dish",version:"11.0"},{emoji:"🧬",category:6,name:"dna",version:"11.0"},{emoji:"🔬",category:6,name:"microscope",version:"1.0"},{emoji:"🔭",category:6,name:"telescope",version:"1.0"},{emoji:"📡",category:6,name:"satellite antenna",version:"1.0"},{emoji:"💉",category:6,name:"syringe",version:"1.0"},{emoji:"🩸",category:6,name:"drop of blood",version:"12.0"},{emoji:"💊",category:6,name:"pill",version:"1.0"},{emoji:"🩹",category:6,name:"adhesive bandage",version:"12.0"},{emoji:"🩺",category:6,name:"stethoscope",version:"12.0"},{emoji:"🚪",category:6,name:"door",version:"1.0"},{emoji:"🛗",category:6,name:"elevator",version:"13.0"},{emoji:"🪞",category:6,name:"mirror",version:"13.0"},{emoji:"🪟",category:6,name:"window",version:"13.0"},{emoji:"🛏️",category:6,name:"bed",version:"1.0"},{emoji:"🛋️",category:6,name:"couch and lamp",version:"1.0"},{emoji:"🪑",category:6,name:"chair",version:"12.0"},{emoji:"🚽",category:6,name:"toilet",version:"1.0"},{emoji:"🪠",category:6,name:"plunger",version:"13.0"},{emoji:"🚿",category:6,name:"shower",version:"1.0"},{emoji:"🛁",category:6,name:"bathtub",version:"1.0"},{emoji:"🪤",category:6,name:"mouse trap",version:"13.0"},{emoji:"🪒",category:6,name:"razor",version:"12.0"},{emoji:"🧴",category:6,name:"lotion bottle",version:"11.0"},{emoji:"🧷",category:6,name:"safety pin",version:"11.0"},{emoji:"🧹",category:6,name:"broom",version:"11.0"},{emoji:"🧺",category:6,name:"basket",version:"11.0"},{emoji:"🧻",category:6,name:"roll of paper",version:"11.0"},{emoji:"🪣",category:6,name:"bucket",version:"13.0"},{emoji:"🧼",category:6,name:"soap",version:"11.0"},{emoji:"🪥",category:6,name:"toothbrush",version:"13.0"},{emoji:"🧽",category:6,name:"sponge",version:"11.0"},{emoji:"🧯",category:6,name:"fire extinguisher",version:"11.0"},{emoji:"🛒",category:6,name:"shopping cart",version:"3.0"},{emoji:"🚬",category:6,name:"cigarette",version:"1.0"},{emoji:"⚰️",category:6,name:"coffin",version:"1.0"},{emoji:"🪦",category:6,name:"headstone",version:"13.0"},{emoji:"⚱️",category:6,name:"funeral urn",version:"1.0"},{emoji:"🗿",category:6,name:"moai",version:"1.0"},{emoji:"🪧",category:6,name:"placard",version:"13.0"},{emoji:"🏧",category:7,name:"ATM sign",version:"1.0"},{emoji:"🚮",category:7,name:"litter in bin sign",version:"1.0"},{emoji:"🚰",category:7,name:"potable water",version:"1.0"},{emoji:"♿",category:7,name:"wheelchair symbol",version:"1.0"},{emoji:"🚹",category:7,name:"men’s room",version:"1.0"},{emoji:"🚺",category:7,name:"women’s room",version:"1.0"},{emoji:"🚻",category:7,name:"restroom",version:"1.0"},{emoji:"🚼",category:7,name:"baby symbol",version:"1.0"},{emoji:"🚾",category:7,name:"water closet",version:"1.0"},{emoji:"🛂",category:7,name:"passport control",version:"1.0"},{emoji:"🛃",category:7,name:"customs",version:"1.0"},{emoji:"🛄",category:7,name:"baggage claim",version:"1.0"},{emoji:"🛅",category:7,name:"left luggage",version:"1.0"},{emoji:"⚠️",category:7,name:"warning",version:"1.0"},{emoji:"🚸",category:7,name:"children crossing",version:"1.0"},{emoji:"⛔",category:7,name:"no entry",version:"1.0"},{emoji:"🚫",category:7,name:"prohibited",version:"1.0"},{emoji:"🚳",category:7,name:"no bicycles",version:"1.0"},{emoji:"🚭",category:7,name:"no smoking",version:"1.0"},{emoji:"🚯",category:7,name:"no littering",version:"1.0"},{emoji:"🚱",category:7,name:"non-potable water",version:"1.0"},{emoji:"🚷",category:7,name:"no pedestrians",version:"1.0"},{emoji:"📵",category:7,name:"no mobile phones",version:"1.0"},{emoji:"🔞",category:7,name:"no one under eighteen",version:"1.0"},{emoji:"☢️",category:7,name:"radioactive",version:"1.0"},{emoji:"☣️",category:7,name:"biohazard",version:"1.0"},{emoji:"⬆️",category:7,name:"up arrow",version:"1.0"},{emoji:"↗️",category:7,name:"up-right arrow",version:"1.0"},{emoji:"➡️",category:7,name:"right arrow",version:"1.0"},{emoji:"↘️",category:7,name:"down-right arrow",version:"1.0"},{emoji:"⬇️",category:7,name:"down arrow",version:"1.0"},{emoji:"↙️",category:7,name:"down-left arrow",version:"1.0"},{emoji:"⬅️",category:7,name:"left arrow",version:"1.0"},{emoji:"↖️",category:7,name:"up-left arrow",version:"1.0"},{emoji:"↕️",category:7,name:"up-down arrow",version:"1.0"},{emoji:"↔️",category:7,name:"left-right arrow",version:"1.0"},{emoji:"↩️",category:7,name:"right arrow curving left",version:"1.0"},{emoji:"↪️",category:7,name:"left arrow curving right",version:"1.0"},{emoji:"⤴️",category:7,name:"right arrow curving up",version:"1.0"},{emoji:"⤵️",category:7,name:"right arrow curving down",version:"1.0"},{emoji:"🔃",category:7,name:"clockwise vertical arrows",version:"1.0"},{emoji:"🔄",category:7,name:"counterclockwise arrows button",version:"1.0"},{emoji:"🔙",category:7,name:"BACK arrow",version:"1.0"},{emoji:"🔚",category:7,name:"END arrow",version:"1.0"},{emoji:"🔛",category:7,name:"ON! arrow",version:"1.0"},{emoji:"🔜",category:7,name:"SOON arrow",version:"1.0"},{emoji:"🔝",category:7,name:"TOP arrow",version:"1.0"},{emoji:"🛐",category:7,name:"place of worship",version:"1.0"},{emoji:"⚛️",category:7,name:"atom symbol",version:"1.0"},{emoji:"🕉️",category:7,name:"om",version:"1.0"},{emoji:"✡️",category:7,name:"star of David",version:"1.0"},{emoji:"☸️",category:7,name:"wheel of dharma",version:"1.0"},{emoji:"☯️",category:7,name:"yin yang",version:"1.0"},{emoji:"✝️",category:7,name:"latin cross",version:"1.0"},{emoji:"☦️",category:7,name:"orthodox cross",version:"1.0"},{emoji:"☪️",category:7,name:"star and crescent",version:"1.0"},{emoji:"☮️",category:7,name:"peace symbol",version:"1.0"},{emoji:"🕎",category:7,name:"menorah",version:"1.0"},{emoji:"🔯",category:7,name:"dotted six-pointed star",version:"1.0"},{emoji:"♈",category:7,name:"Aries",version:"1.0"},{emoji:"♉",category:7,name:"Taurus",version:"1.0"},{emoji:"♊",category:7,name:"Gemini",version:"1.0"},{emoji:"♋",category:7,name:"Cancer",version:"1.0"},{emoji:"♌",category:7,name:"Leo",version:"1.0"},{emoji:"♍",category:7,name:"Virgo",version:"1.0"},{emoji:"♎",category:7,name:"Libra",version:"1.0"},{emoji:"♏",category:7,name:"Scorpio",version:"1.0"},{emoji:"♐",category:7,name:"Sagittarius",version:"1.0"},{emoji:"♑",category:7,name:"Capricorn",version:"1.0"},{emoji:"♒",category:7,name:"Aquarius",version:"1.0"},{emoji:"♓",category:7,name:"Pisces",version:"1.0"},{emoji:"⛎",category:7,name:"Ophiuchus",version:"1.0"},{emoji:"🔀",category:7,name:"shuffle tracks button",version:"1.0"},{emoji:"🔁",category:7,name:"repeat button",version:"1.0"},{emoji:"🔂",category:7,name:"repeat single button",version:"1.0"},{emoji:"▶️",category:7,name:"play button",version:"1.0"},{emoji:"⏩",category:7,name:"fast-forward button",version:"1.0"},{emoji:"⏭️",category:7,name:"next track button",version:"1.0"},{emoji:"⏯️",category:7,name:"play or pause button",version:"1.0"},{emoji:"◀️",category:7,name:"reverse button",version:"1.0"},{emoji:"⏪",category:7,name:"fast reverse button",version:"1.0"},{emoji:"⏮️",category:7,name:"last track button",version:"1.0"},{emoji:"🔼",category:7,name:"upwards button",version:"1.0"},{emoji:"⏫",category:7,name:"fast up button",version:"1.0"},{emoji:"🔽",category:7,name:"downwards button",version:"1.0"},{emoji:"⏬",category:7,name:"fast down button",version:"1.0"},{emoji:"⏸️",category:7,name:"pause button",version:"1.0"},{emoji:"⏹️",category:7,name:"stop button",version:"1.0"},{emoji:"⏺️",category:7,name:"record button",version:"1.0"},{emoji:"⏏️",category:7,name:"eject button",version:"1.0"},{emoji:"🎦",category:7,name:"cinema",version:"1.0"},{emoji:"🔅",category:7,name:"dim button",version:"1.0"},{emoji:"🔆",category:7,name:"bright button",version:"1.0"},{emoji:"📶",category:7,name:"antenna bars",version:"1.0"},{emoji:"📳",category:7,name:"vibration mode",version:"1.0"},{emoji:"📴",category:7,name:"mobile phone off",version:"1.0"},{emoji:"♀️",category:7,name:"female sign",version:"4.0"},{emoji:"♂️",category:7,name:"male sign",version:"4.0"},{emoji:"⚧️",category:7,name:"transgender symbol",version:"13.0"},{emoji:"✖️",category:7,name:"multiply",version:"1.0"},{emoji:"➕",category:7,name:"plus",version:"1.0"},{emoji:"➖",category:7,name:"minus",version:"1.0"},{emoji:"➗",category:7,name:"divide",version:"1.0"},{emoji:"♾️",category:7,name:"infinity",version:"11.0"},{emoji:"‼️",category:7,name:"double exclamation mark",version:"1.0"},{emoji:"⁉️",category:7,name:"exclamation question mark",version:"1.0"},{emoji:"❓",category:7,name:"question mark",version:"1.0"},{emoji:"❔",category:7,name:"white question mark",version:"1.0"},{emoji:"❕",category:7,name:"white exclamation mark",version:"1.0"},{emoji:"❗",category:7,name:"exclamation mark",version:"1.0"},{emoji:"〰️",category:7,name:"wavy dash",version:"1.0"},{emoji:"💱",category:7,name:"currency exchange",version:"1.0"},{emoji:"💲",category:7,name:"heavy dollar sign",version:"1.0"},{emoji:"⚕️",category:7,name:"medical symbol",version:"4.0"},{emoji:"♻️",category:7,name:"recycling symbol",version:"1.0"},{emoji:"⚜️",category:7,name:"fleur-de-lis",version:"1.0"},{emoji:"🔱",category:7,name:"trident emblem",version:"1.0"},{emoji:"📛",category:7,name:"name badge",version:"1.0"},{emoji:"🔰",category:7,name:"Japanese symbol for beginner",version:"1.0"},{emoji:"⭕",category:7,name:"hollow red circle",version:"1.0"},{emoji:"✅",category:7,name:"check mark button",version:"1.0"},{emoji:"☑️",category:7,name:"check box with check",version:"1.0"},{emoji:"✔️",category:7,name:"check mark",version:"1.0"},{emoji:"❌",category:7,name:"cross mark",version:"1.0"},{emoji:"❎",category:7,name:"cross mark button",version:"1.0"},{emoji:"➰",category:7,name:"curly loop",version:"1.0"},{emoji:"➿",category:7,name:"double curly loop",version:"1.0"},{emoji:"〽️",category:7,name:"part alternation mark",version:"1.0"},{emoji:"✳️",category:7,name:"eight-spoked asterisk",version:"1.0"},{emoji:"✴️",category:7,name:"eight-pointed star",version:"1.0"},{emoji:"❇️",category:7,name:"sparkle",version:"1.0"},{emoji:"©️",category:7,name:"copyright",version:"1.0"},{emoji:"®️",category:7,name:"registered",version:"1.0"},{emoji:"™️",category:7,name:"trade mark",version:"1.0"},{emoji:"#️⃣",category:7,name:"keycap: #",version:"1.0"},{emoji:"*️⃣",category:7,name:"keycap: *",version:"2.0"},{emoji:"0️⃣",category:7,name:"keycap: 0",version:"1.0"},{emoji:"1️⃣",category:7,name:"keycap: 1",version:"1.0"},{emoji:"2️⃣",category:7,name:"keycap: 2",version:"1.0"},{emoji:"3️⃣",category:7,name:"keycap: 3",version:"1.0"},{emoji:"4️⃣",category:7,name:"keycap: 4",version:"1.0"},{emoji:"5️⃣",category:7,name:"keycap: 5",version:"1.0"},{emoji:"6️⃣",category:7,name:"keycap: 6",version:"1.0"},{emoji:"7️⃣",category:7,name:"keycap: 7",version:"1.0"},{emoji:"8️⃣",category:7,name:"keycap: 8",version:"1.0"},{emoji:"9️⃣",category:7,name:"keycap: 9",version:"1.0"},{emoji:"🔟",category:7,name:"keycap: 10",version:"1.0"},{emoji:"🔠",category:7,name:"input latin uppercase",version:"1.0"},{emoji:"🔡",category:7,name:"input latin lowercase",version:"1.0"},{emoji:"🔢",category:7,name:"input numbers",version:"1.0"},{emoji:"🔣",category:7,name:"input symbols",version:"1.0"},{emoji:"🔤",category:7,name:"input latin letters",version:"1.0"},{emoji:"🅰️",category:7,name:"A button (blood type)",version:"1.0"},{emoji:"🆎",category:7,name:"AB button (blood type)",version:"1.0"},{emoji:"🅱️",category:7,name:"B button (blood type)",version:"1.0"},{emoji:"🆑",category:7,name:"CL button",version:"1.0"},{emoji:"🆒",category:7,name:"COOL button",version:"1.0"},{emoji:"🆓",category:7,name:"FREE button",version:"1.0"},{emoji:"ℹ️",category:7,name:"information",version:"1.0"},{emoji:"🆔",category:7,name:"ID button",version:"1.0"},{emoji:"Ⓜ️",category:7,name:"circled M",version:"1.0"},{emoji:"🆕",category:7,name:"NEW button",version:"1.0"},{emoji:"🆖",category:7,name:"NG button",version:"1.0"},{emoji:"🅾️",category:7,name:"O button (blood type)",version:"1.0"},{emoji:"🆗",category:7,name:"OK button",version:"1.0"},{emoji:"🅿️",category:7,name:"P button",version:"1.0"},{emoji:"🆘",category:7,name:"SOS button",version:"1.0"},{emoji:"🆙",category:7,name:"UP! button",version:"1.0"},{emoji:"🆚",category:7,name:"VS button",version:"1.0"},{emoji:"🈁",category:7,name:"Japanese “here” button",version:"1.0"},{emoji:"🈂️",category:7,name:"Japanese “service charge” button",version:"1.0"},{emoji:"🈷️",category:7,name:"Japanese “monthly amount” button",version:"1.0"},{emoji:"🈶",category:7,name:"Japanese “not free of charge” button",version:"1.0"},{emoji:"🈯",category:7,name:"Japanese “reserved” button",version:"1.0"},{emoji:"🉐",category:7,name:"Japanese “bargain” button",version:"1.0"},{emoji:"🈹",category:7,name:"Japanese “discount” button",version:"1.0"},{emoji:"🈚",category:7,name:"Japanese “free of charge” button",version:"1.0"},{emoji:"🈲",category:7,name:"Japanese “prohibited” button",version:"1.0"},{emoji:"🉑",category:7,name:"Japanese “acceptable” button",version:"1.0"},{emoji:"🈸",category:7,name:"Japanese “application” button",version:"1.0"},{emoji:"🈴",category:7,name:"Japanese “passing grade” button",version:"1.0"},{emoji:"🈳",category:7,name:"Japanese “vacancy” button",version:"1.0"},{emoji:"㊗️",category:7,name:"Japanese “congratulations” button",version:"1.0"},{emoji:"㊙️",category:7,name:"Japanese “secret” button",version:"1.0"},{emoji:"🈺",category:7,name:"Japanese “open for business” button",version:"1.0"},{emoji:"🈵",category:7,name:"Japanese “no vacancy” button",version:"1.0"},{emoji:"🔴",category:7,name:"red circle",version:"1.0"},{emoji:"🟠",category:7,name:"orange circle",version:"12.0"},{emoji:"🟡",category:7,name:"yellow circle",version:"12.0"},{emoji:"🟢",category:7,name:"green circle",version:"12.0"},{emoji:"🔵",category:7,name:"blue circle",version:"1.0"},{emoji:"🟣",category:7,name:"purple circle",version:"12.0"},{emoji:"🟤",category:7,name:"brown circle",version:"12.0"},{emoji:"⚫",category:7,name:"black circle",version:"1.0"},{emoji:"⚪",category:7,name:"white circle",version:"1.0"},{emoji:"🟥",category:7,name:"red square",version:"12.0"},{emoji:"🟧",category:7,name:"orange square",version:"12.0"},{emoji:"🟨",category:7,name:"yellow square",version:"12.0"},{emoji:"🟩",category:7,name:"green square",version:"12.0"},{emoji:"🟦",category:7,name:"blue square",version:"12.0"},{emoji:"🟪",category:7,name:"purple square",version:"12.0"},{emoji:"🟫",category:7,name:"brown square",version:"12.0"},{emoji:"⬛",category:7,name:"black large square",version:"1.0"},{emoji:"⬜",category:7,name:"white large square",version:"1.0"},{emoji:"◼️",category:7,name:"black medium square",version:"1.0"},{emoji:"◻️",category:7,name:"white medium square",version:"1.0"},{emoji:"◾",category:7,name:"black medium-small square",version:"1.0"},{emoji:"◽",category:7,name:"white medium-small square",version:"1.0"},{emoji:"▪️",category:7,name:"black small square",version:"1.0"},{emoji:"▫️",category:7,name:"white small square",version:"1.0"},{emoji:"🔶",category:7,name:"large orange diamond",version:"1.0"},{emoji:"🔷",category:7,name:"large blue diamond",version:"1.0"},{emoji:"🔸",category:7,name:"small orange diamond",version:"1.0"},{emoji:"🔹",category:7,name:"small blue diamond",version:"1.0"},{emoji:"🔺",category:7,name:"red triangle pointed up",version:"1.0"},{emoji:"🔻",category:7,name:"red triangle pointed down",version:"1.0"},{emoji:"💠",category:7,name:"diamond with a dot",version:"1.0"},{emoji:"🔘",category:7,name:"radio button",version:"1.0"},{emoji:"🔳",category:7,name:"white square button",version:"1.0"},{emoji:"🔲",category:7,name:"black square button",version:"1.0"},{emoji:"🏁",category:8,name:"chequered flag",version:"1.0"},{emoji:"🚩",category:8,name:"triangular flag",version:"1.0"},{emoji:"🎌",category:8,name:"crossed flags",version:"1.0"},{emoji:"🏴",category:8,name:"black flag",version:"1.0"},{emoji:"🏳️",category:8,name:"white flag",version:"1.0"},{emoji:"🏳️‍🌈",category:8,name:"rainbow flag",version:"4.0"},{emoji:"🏳️‍⚧️",category:8,name:"transgender flag",version:"13.0"},{emoji:"🏴‍☠️",category:8,name:"pirate flag",version:"11.0"},{emoji:"🇦🇨",category:8,name:"flag: Ascension Island",version:"2.0"},{emoji:"🇦🇩",category:8,name:"flag: Andorra",version:"2.0"},{emoji:"🇦🇪",category:8,name:"flag: United Arab Emirates",version:"2.0"},{emoji:"🇦🇫",category:8,name:"flag: Afghanistan",version:"2.0"},{emoji:"🇦🇬",category:8,name:"flag: Antigua & Barbuda",version:"2.0"},{emoji:"🇦🇮",category:8,name:"flag: Anguilla",version:"2.0"},{emoji:"🇦🇱",category:8,name:"flag: Albania",version:"2.0"},{emoji:"🇦🇲",category:8,name:"flag: Armenia",version:"2.0"},{emoji:"🇦🇴",category:8,name:"flag: Angola",version:"2.0"},{emoji:"🇦🇶",category:8,name:"flag: Antarctica",version:"2.0"},{emoji:"🇦🇷",category:8,name:"flag: Argentina",version:"2.0"},{emoji:"🇦🇸",category:8,name:"flag: American Samoa",version:"2.0"},{emoji:"🇦🇹",category:8,name:"flag: Austria",version:"2.0"},{emoji:"🇦🇺",category:8,name:"flag: Australia",version:"2.0"},{emoji:"🇦🇼",category:8,name:"flag: Aruba",version:"2.0"},{emoji:"🇦🇽",category:8,name:"flag: Åland Islands",version:"2.0"},{emoji:"🇦🇿",category:8,name:"flag: Azerbaijan",version:"2.0"},{emoji:"🇧🇦",category:8,name:"flag: Bosnia & Herzegovina",version:"2.0"},{emoji:"🇧🇧",category:8,name:"flag: Barbados",version:"2.0"},{emoji:"🇧🇩",category:8,name:"flag: Bangladesh",version:"2.0"},{emoji:"🇧🇪",category:8,name:"flag: Belgium",version:"2.0"},{emoji:"🇧🇫",category:8,name:"flag: Burkina Faso",version:"2.0"},{emoji:"🇧🇬",category:8,name:"flag: Bulgaria",version:"2.0"},{emoji:"🇧🇭",category:8,name:"flag: Bahrain",version:"2.0"},{emoji:"🇧🇮",category:8,name:"flag: Burundi",version:"2.0"},{emoji:"🇧🇯",category:8,name:"flag: Benin",version:"2.0"},{emoji:"🇧🇱",category:8,name:"flag: St. Barthélemy",version:"2.0"},{emoji:"🇧🇲",category:8,name:"flag: Bermuda",version:"2.0"},{emoji:"🇧🇳",category:8,name:"flag: Brunei",version:"2.0"},{emoji:"🇧🇴",category:8,name:"flag: Bolivia",version:"2.0"},{emoji:"🇧🇶",category:8,name:"flag: Caribbean Netherlands",version:"2.0"},{emoji:"🇧🇷",category:8,name:"flag: Brazil",version:"2.0"},{emoji:"🇧🇸",category:8,name:"flag: Bahamas",version:"2.0"},{emoji:"🇧🇹",category:8,name:"flag: Bhutan",version:"2.0"},{emoji:"🇧🇻",category:8,name:"flag: Bouvet Island",version:"2.0"},{emoji:"🇧🇼",category:8,name:"flag: Botswana",version:"2.0"},{emoji:"🇧🇾",category:8,name:"flag: Belarus",version:"2.0"},{emoji:"🇧🇿",category:8,name:"flag: Belize",version:"2.0"},{emoji:"🇨🇦",category:8,name:"flag: Canada",version:"2.0"},{emoji:"🇨🇨",category:8,name:"flag: Cocos (Keeling) Islands",version:"2.0"},{emoji:"🇨🇩",category:8,name:"flag: Congo - Kinshasa",version:"2.0"},{emoji:"🇨🇫",category:8,name:"flag: Central African Republic",version:"2.0"},{emoji:"🇨🇬",category:8,name:"flag: Congo - Brazzaville",version:"2.0"},{emoji:"🇨🇭",category:8,name:"flag: Switzerland",version:"2.0"},{emoji:"🇨🇮",category:8,name:"flag: Côte d’Ivoire",version:"2.0"},{emoji:"🇨🇰",category:8,name:"flag: Cook Islands",version:"2.0"},{emoji:"🇨🇱",category:8,name:"flag: Chile",version:"2.0"},{emoji:"🇨🇲",category:8,name:"flag: Cameroon",version:"2.0"},{emoji:"🇨🇳",category:8,name:"flag: China",version:"1.0"},{emoji:"🇨🇴",category:8,name:"flag: Colombia",version:"2.0"},{emoji:"🇨🇵",category:8,name:"flag: Clipperton Island",version:"2.0"},{emoji:"🇨🇷",category:8,name:"flag: Costa Rica",version:"2.0"},{emoji:"🇨🇺",category:8,name:"flag: Cuba",version:"2.0"},{emoji:"🇨🇻",category:8,name:"flag: Cape Verde",version:"2.0"},{emoji:"🇨🇼",category:8,name:"flag: Curaçao",version:"2.0"},{emoji:"🇨🇽",category:8,name:"flag: Christmas Island",version:"2.0"},{emoji:"🇨🇾",category:8,name:"flag: Cyprus",version:"2.0"},{emoji:"🇨🇿",category:8,name:"flag: Czechia",version:"2.0"},{emoji:"🇩🇪",category:8,name:"flag: Germany",version:"1.0"},{emoji:"🇩🇬",category:8,name:"flag: Diego Garcia",version:"2.0"},{emoji:"🇩🇯",category:8,name:"flag: Djibouti",version:"2.0"},{emoji:"🇩🇰",category:8,name:"flag: Denmark",version:"2.0"},{emoji:"🇩🇲",category:8,name:"flag: Dominica",version:"2.0"},{emoji:"🇩🇴",category:8,name:"flag: Dominican Republic",version:"2.0"},{emoji:"🇩🇿",category:8,name:"flag: Algeria",version:"2.0"},{emoji:"🇪🇦",category:8,name:"flag: Ceuta & Melilla",version:"2.0"},{emoji:"🇪🇨",category:8,name:"flag: Ecuador",version:"2.0"},{emoji:"🇪🇪",category:8,name:"flag: Estonia",version:"2.0"},{emoji:"🇪🇬",category:8,name:"flag: Egypt",version:"2.0"},{emoji:"🇪🇭",category:8,name:"flag: Western Sahara",version:"2.0"},{emoji:"🇪🇷",category:8,name:"flag: Eritrea",version:"2.0"},{emoji:"🇪🇸",category:8,name:"flag: Spain",version:"1.0"},{emoji:"🇪🇹",category:8,name:"flag: Ethiopia",version:"2.0"},{emoji:"🇪🇺",category:8,name:"flag: European Union",version:"2.0"},{emoji:"🇫🇮",category:8,name:"flag: Finland",version:"2.0"},{emoji:"🇫🇯",category:8,name:"flag: Fiji",version:"2.0"},{emoji:"🇫🇰",category:8,name:"flag: Falkland Islands",version:"2.0"},{emoji:"🇫🇲",category:8,name:"flag: Micronesia",version:"2.0"},{emoji:"🇫🇴",category:8,name:"flag: Faroe Islands",version:"2.0"},{emoji:"🇫🇷",category:8,name:"flag: France",version:"1.0"},{emoji:"🇬🇦",category:8,name:"flag: Gabon",version:"2.0"},{emoji:"🇬🇧",category:8,name:"flag: United Kingdom",version:"1.0"},{emoji:"🇬🇩",category:8,name:"flag: Grenada",version:"2.0"},{emoji:"🇬🇪",category:8,name:"flag: Georgia",version:"2.0"},{emoji:"🇬🇫",category:8,name:"flag: French Guiana",version:"2.0"},{emoji:"🇬🇬",category:8,name:"flag: Guernsey",version:"2.0"},{emoji:"🇬🇭",category:8,name:"flag: Ghana",version:"2.0"},{emoji:"🇬🇮",category:8,name:"flag: Gibraltar",version:"2.0"},{emoji:"🇬🇱",category:8,name:"flag: Greenland",version:"2.0"},{emoji:"🇬🇲",category:8,name:"flag: Gambia",version:"2.0"},{emoji:"🇬🇳",category:8,name:"flag: Guinea",version:"2.0"},{emoji:"🇬🇵",category:8,name:"flag: Guadeloupe",version:"2.0"},{emoji:"🇬🇶",category:8,name:"flag: Equatorial Guinea",version:"2.0"},{emoji:"🇬🇷",category:8,name:"flag: Greece",version:"2.0"},{emoji:"🇬🇸",category:8,name:"flag: South Georgia & South Sandwich Islands",version:"2.0"},{emoji:"🇬🇹",category:8,name:"flag: Guatemala",version:"2.0"},{emoji:"🇬🇺",category:8,name:"flag: Guam",version:"2.0"},{emoji:"🇬🇼",category:8,name:"flag: Guinea-Bissau",version:"2.0"},{emoji:"🇬🇾",category:8,name:"flag: Guyana",version:"2.0"},{emoji:"🇭🇰",category:8,name:"flag: Hong Kong SAR China",version:"2.0"},{emoji:"🇭🇲",category:8,name:"flag: Heard & McDonald Islands",version:"2.0"},{emoji:"🇭🇳",category:8,name:"flag: Honduras",version:"2.0"},{emoji:"🇭🇷",category:8,name:"flag: Croatia",version:"2.0"},{emoji:"🇭🇹",category:8,name:"flag: Haiti",version:"2.0"},{emoji:"🇭🇺",category:8,name:"flag: Hungary",version:"2.0"},{emoji:"🇮🇨",category:8,name:"flag: Canary Islands",version:"2.0"},{emoji:"🇮🇩",category:8,name:"flag: Indonesia",version:"2.0"},{emoji:"🇮🇪",category:8,name:"flag: Ireland",version:"2.0"},{emoji:"🇮🇱",category:8,name:"flag: Israel",version:"2.0"},{emoji:"🇮🇲",category:8,name:"flag: Isle of Man",version:"2.0"},{emoji:"🇮🇳",category:8,name:"flag: India",version:"2.0"},{emoji:"🇮🇴",category:8,name:"flag: British Indian Ocean Territory",version:"2.0"},{emoji:"🇮🇶",category:8,name:"flag: Iraq",version:"2.0"},{emoji:"🇮🇷",category:8,name:"flag: Iran",version:"2.0"},{emoji:"🇮🇸",category:8,name:"flag: Iceland",version:"2.0"},{emoji:"🇮🇹",category:8,name:"flag: Italy",version:"1.0"},{emoji:"🇯🇪",category:8,name:"flag: Jersey",version:"2.0"},{emoji:"🇯🇲",category:8,name:"flag: Jamaica",version:"2.0"},{emoji:"🇯🇴",category:8,name:"flag: Jordan",version:"2.0"},{emoji:"🇯🇵",category:8,name:"flag: Japan",version:"1.0"},{emoji:"🇰🇪",category:8,name:"flag: Kenya",version:"2.0"},{emoji:"🇰🇬",category:8,name:"flag: Kyrgyzstan",version:"2.0"},{emoji:"🇰🇭",category:8,name:"flag: Cambodia",version:"2.0"},{emoji:"🇰🇮",category:8,name:"flag: Kiribati",version:"2.0"},{emoji:"🇰🇲",category:8,name:"flag: Comoros",version:"2.0"},{emoji:"🇰🇳",category:8,name:"flag: St. Kitts & Nevis",version:"2.0"},{emoji:"🇰🇵",category:8,name:"flag: North Korea",version:"2.0"},{emoji:"🇰🇷",category:8,name:"flag: South Korea",version:"1.0"},{emoji:"🇰🇼",category:8,name:"flag: Kuwait",version:"2.0"},{emoji:"🇰🇾",category:8,name:"flag: Cayman Islands",version:"2.0"},{emoji:"🇰🇿",category:8,name:"flag: Kazakhstan",version:"2.0"},{emoji:"🇱🇦",category:8,name:"flag: Laos",version:"2.0"},{emoji:"🇱🇧",category:8,name:"flag: Lebanon",version:"2.0"},{emoji:"🇱🇨",category:8,name:"flag: St. Lucia",version:"2.0"},{emoji:"🇱🇮",category:8,name:"flag: Liechtenstein",version:"2.0"},{emoji:"🇱🇰",category:8,name:"flag: Sri Lanka",version:"2.0"},{emoji:"🇱🇷",category:8,name:"flag: Liberia",version:"2.0"},{emoji:"🇱🇸",category:8,name:"flag: Lesotho",version:"2.0"},{emoji:"🇱🇹",category:8,name:"flag: Lithuania",version:"2.0"},{emoji:"🇱🇺",category:8,name:"flag: Luxembourg",version:"2.0"},{emoji:"🇱🇻",category:8,name:"flag: Latvia",version:"2.0"},{emoji:"🇱🇾",category:8,name:"flag: Libya",version:"2.0"},{emoji:"🇲🇦",category:8,name:"flag: Morocco",version:"2.0"},{emoji:"🇲🇨",category:8,name:"flag: Monaco",version:"2.0"},{emoji:"🇲🇩",category:8,name:"flag: Moldova",version:"2.0"},{emoji:"🇲🇪",category:8,name:"flag: Montenegro",version:"2.0"},{emoji:"🇲🇫",category:8,name:"flag: St. Martin",version:"2.0"},{emoji:"🇲🇬",category:8,name:"flag: Madagascar",version:"2.0"},{emoji:"🇲🇭",category:8,name:"flag: Marshall Islands",version:"2.0"},{emoji:"🇲🇰",category:8,name:"flag: North Macedonia",version:"2.0"},{emoji:"🇲🇱",category:8,name:"flag: Mali",version:"2.0"},{emoji:"🇲🇲",category:8,name:"flag: Myanmar (Burma)",version:"2.0"},{emoji:"🇲🇳",category:8,name:"flag: Mongolia",version:"2.0"},{emoji:"🇲🇴",category:8,name:"flag: Macao SAR China",version:"2.0"},{emoji:"🇲🇵",category:8,name:"flag: Northern Mariana Islands",version:"2.0"},{emoji:"🇲🇶",category:8,name:"flag: Martinique",version:"2.0"},{emoji:"🇲🇷",category:8,name:"flag: Mauritania",version:"2.0"},{emoji:"🇲🇸",category:8,name:"flag: Montserrat",version:"2.0"},{emoji:"🇲🇹",category:8,name:"flag: Malta",version:"2.0"},{emoji:"🇲🇺",category:8,name:"flag: Mauritius",version:"2.0"},{emoji:"🇲🇻",category:8,name:"flag: Maldives",version:"2.0"},{emoji:"🇲🇼",category:8,name:"flag: Malawi",version:"2.0"},{emoji:"🇲🇽",category:8,name:"flag: Mexico",version:"2.0"},{emoji:"🇲🇾",category:8,name:"flag: Malaysia",version:"2.0"},{emoji:"🇲🇿",category:8,name:"flag: Mozambique",version:"2.0"},{emoji:"🇳🇦",category:8,name:"flag: Namibia",version:"2.0"},{emoji:"🇳🇨",category:8,name:"flag: New Caledonia",version:"2.0"},{emoji:"🇳🇪",category:8,name:"flag: Niger",version:"2.0"},{emoji:"🇳🇫",category:8,name:"flag: Norfolk Island",version:"2.0"},{emoji:"🇳🇬",category:8,name:"flag: Nigeria",version:"2.0"},{emoji:"🇳🇮",category:8,name:"flag: Nicaragua",version:"2.0"},{emoji:"🇳🇱",category:8,name:"flag: Netherlands",version:"2.0"},{emoji:"🇳🇴",category:8,name:"flag: Norway",version:"2.0"},{emoji:"🇳🇵",category:8,name:"flag: Nepal",version:"2.0"},{emoji:"🇳🇷",category:8,name:"flag: Nauru",version:"2.0"},{emoji:"🇳🇺",category:8,name:"flag: Niue",version:"2.0"},{emoji:"🇳🇿",category:8,name:"flag: New Zealand",version:"2.0"},{emoji:"🇴🇲",category:8,name:"flag: Oman",version:"2.0"},{emoji:"🇵🇦",category:8,name:"flag: Panama",version:"2.0"},{emoji:"🇵🇪",category:8,name:"flag: Peru",version:"2.0"},{emoji:"🇵🇫",category:8,name:"flag: French Polynesia",version:"2.0"},{emoji:"🇵🇬",category:8,name:"flag: Papua New Guinea",version:"2.0"},{emoji:"🇵🇭",category:8,name:"flag: Philippines",version:"2.0"},{emoji:"🇵🇰",category:8,name:"flag: Pakistan",version:"2.0"},{emoji:"🇵🇱",category:8,name:"flag: Poland",version:"2.0"},{emoji:"🇵🇲",category:8,name:"flag: St. Pierre & Miquelon",version:"2.0"},{emoji:"🇵🇳",category:8,name:"flag: Pitcairn Islands",version:"2.0"},{emoji:"🇵🇷",category:8,name:"flag: Puerto Rico",version:"2.0"},{emoji:"🇵🇸",category:8,name:"flag: Palestinian Territories",version:"2.0"},{emoji:"🇵🇹",category:8,name:"flag: Portugal",version:"2.0"},{emoji:"🇵🇼",category:8,name:"flag: Palau",version:"2.0"},{emoji:"🇵🇾",category:8,name:"flag: Paraguay",version:"2.0"},{emoji:"🇶🇦",category:8,name:"flag: Qatar",version:"2.0"},{emoji:"🇷🇪",category:8,name:"flag: Réunion",version:"2.0"},{emoji:"🇷🇴",category:8,name:"flag: Romania",version:"2.0"},{emoji:"🇷🇸",category:8,name:"flag: Serbia",version:"2.0"},{emoji:"🇷🇺",category:8,name:"flag: Russia",version:"1.0"},{emoji:"🇷🇼",category:8,name:"flag: Rwanda",version:"2.0"},{emoji:"🇸🇦",category:8,name:"flag: Saudi Arabia",version:"2.0"},{emoji:"🇸🇧",category:8,name:"flag: Solomon Islands",version:"2.0"},{emoji:"🇸🇨",category:8,name:"flag: Seychelles",version:"2.0"},{emoji:"🇸🇩",category:8,name:"flag: Sudan",version:"2.0"},{emoji:"🇸🇪",category:8,name:"flag: Sweden",version:"2.0"},{emoji:"🇸🇬",category:8,name:"flag: Singapore",version:"2.0"},{emoji:"🇸🇭",category:8,name:"flag: St. Helena",version:"2.0"},{emoji:"🇸🇮",category:8,name:"flag: Slovenia",version:"2.0"},{emoji:"🇸🇯",category:8,name:"flag: Svalbard & Jan Mayen",version:"2.0"},{emoji:"🇸🇰",category:8,name:"flag: Slovakia",version:"2.0"},{emoji:"🇸🇱",category:8,name:"flag: Sierra Leone",version:"2.0"},{emoji:"🇸🇲",category:8,name:"flag: San Marino",version:"2.0"},{emoji:"🇸🇳",category:8,name:"flag: Senegal",version:"2.0"},{emoji:"🇸🇴",category:8,name:"flag: Somalia",version:"2.0"},{emoji:"🇸🇷",category:8,name:"flag: Suriname",version:"2.0"},{emoji:"🇸🇸",category:8,name:"flag: South Sudan",version:"2.0"},{emoji:"🇸🇹",category:8,name:"flag: São Tomé & Príncipe",version:"2.0"},{emoji:"🇸🇻",category:8,name:"flag: El Salvador",version:"2.0"},{emoji:"🇸🇽",category:8,name:"flag: Sint Maarten",version:"2.0"},{emoji:"🇸🇾",category:8,name:"flag: Syria",version:"2.0"},{emoji:"🇸🇿",category:8,name:"flag: Eswatini",version:"2.0"},{emoji:"🇹🇦",category:8,name:"flag: Tristan da Cunha",version:"2.0"},{emoji:"🇹🇨",category:8,name:"flag: Turks & Caicos Islands",version:"2.0"},{emoji:"🇹🇩",category:8,name:"flag: Chad",version:"2.0"},{emoji:"🇹🇫",category:8,name:"flag: French Southern Territories",version:"2.0"},{emoji:"🇹🇬",category:8,name:"flag: Togo",version:"2.0"},{emoji:"🇹🇭",category:8,name:"flag: Thailand",version:"2.0"},{emoji:"🇹🇯",category:8,name:"flag: Tajikistan",version:"2.0"},{emoji:"🇹🇰",category:8,name:"flag: Tokelau",version:"2.0"},{emoji:"🇹🇱",category:8,name:"flag: Timor-Leste",version:"2.0"},{emoji:"🇹🇲",category:8,name:"flag: Turkmenistan",version:"2.0"},{emoji:"🇹🇳",category:8,name:"flag: Tunisia",version:"2.0"},{emoji:"🇹🇴",category:8,name:"flag: Tonga",version:"2.0"},{emoji:"🇹🇷",category:8,name:"flag: Turkey",version:"2.0"},{emoji:"🇹🇹",category:8,name:"flag: Trinidad & Tobago",version:"2.0"},{emoji:"🇹🇻",category:8,name:"flag: Tuvalu",version:"2.0"},{emoji:"🇹🇼",category:8,name:"flag: Taiwan",version:"2.0"},{emoji:"🇹🇿",category:8,name:"flag: Tanzania",version:"2.0"},{emoji:"🇺🇦",category:8,name:"flag: Ukraine",version:"2.0"},{emoji:"🇺🇬",category:8,name:"flag: Uganda",version:"2.0"},{emoji:"🇺🇲",category:8,name:"flag: U.S. Outlying Islands",version:"2.0"},{emoji:"🇺🇳",category:8,name:"flag: United Nations",version:"4.0"},{emoji:"🇺🇸",category:8,name:"flag: United States",version:"1.0"},{emoji:"🇺🇾",category:8,name:"flag: Uruguay",version:"2.0"},{emoji:"🇺🇿",category:8,name:"flag: Uzbekistan",version:"2.0"},{emoji:"🇻🇦",category:8,name:"flag: Vatican City",version:"2.0"},{emoji:"🇻🇨",category:8,name:"flag: St. Vincent & Grenadines",version:"2.0"},{emoji:"🇻🇪",category:8,name:"flag: Venezuela",version:"2.0"},{emoji:"🇻🇬",category:8,name:"flag: British Virgin Islands",version:"2.0"},{emoji:"🇻🇮",category:8,name:"flag: U.S. Virgin Islands",version:"2.0"},{emoji:"🇻🇳",category:8,name:"flag: Vietnam",version:"2.0"},{emoji:"🇻🇺",category:8,name:"flag: Vanuatu",version:"2.0"},{emoji:"🇼🇫",category:8,name:"flag: Wallis & Futuna",version:"2.0"},{emoji:"🇼🇸",category:8,name:"flag: Samoa",version:"2.0"},{emoji:"🇽🇰",category:8,name:"flag: Kosovo",version:"2.0"},{emoji:"🇾🇪",category:8,name:"flag: Yemen",version:"2.0"},{emoji:"🇾🇹",category:8,name:"flag: Mayotte",version:"2.0"},{emoji:"🇿🇦",category:8,name:"flag: South Africa",version:"2.0"},{emoji:"🇿🇲",category:8,name:"flag: Zambia",version:"2.0"},{emoji:"🇿🇼",category:8,name:"flag: Zimbabwe",version:"2.0"},{emoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",category:8,name:"flag: England",version:"5.0"},{emoji:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",category:8,name:"flag: Scotland",version:"5.0"},{emoji:"🏴󠁧󠁢󠁷󠁬󠁳󠁿",category:8,name:"flag: Wales",version:"5.0"}]};
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var Ce=/["'&<>]/,Ee=function(e){var o,n=""+e,i=Ce.exec(n);if(!i)return n;var a="",r=0,t=0;for(r=i.index;r<n.length;r++){switch(n.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}t!==r&&(a+=n.substring(t,r)),t=r+1,a+=o}return t!==r?a+n.substring(t,r):a};const _e="emoji-picker__emoji";function ze(e,o){const n=document.createElement(e);return o&&(n.className=o),n}function Oe(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function Ie(e,o){e.dataset.loaded||(e.dataset.custom?function(e){const o=ze("img","emoji-picker__custom-emoji");e.dataset.emoji&&(o.src=Ee(e.dataset.emoji),e.innerText="",e.appendChild(o))}(e):"twemoji"===o.style&&function(e,o){e.dataset.emoji&&(e.innerHTML=ke.parse(e.dataset.emoji,o.twemojiOptions))}(e,o),e.dataset.loaded="true",e.style.opacity="1")}class Se{constructor(e,o){this.events=e,this.options=o}render(){const e=ze("div","emoji-picker__preview");return this.emoji=ze("div","emoji-picker__preview-emoji"),e.appendChild(this.emoji),this.name=ze("div","emoji-picker__preview-name"),e.appendChild(this.name),this.events.on("showPreview",(e=>this.showPreview(e))),this.events.on("hidePreview",(()=>this.hidePreview())),e}showPreview(e){let o=e.emoji;e.custom?o=`<img class="emoji-picker__custom-emoji" src="${Ee(e.emoji)}">`:"twemoji"===this.options.style&&(o=ke.parse(e.emoji,this.options.twemojiOptions)),this.emoji.innerHTML=o,this.name.innerHTML=Ee(e.name)}hidePreview(){this.emoji.innerHTML="",this.name.innerHTML=""}}function Pe(e,o){for(var n=0;n<o.length;n++){var i=o[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Me(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function Ae(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(o){Me(e,o,n[o])}))}return e}function Le(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var n=[],i=!0,a=!1,r=void 0;try{for(var t,s=e[Symbol.iterator]();!(i=(t=s.next()).done)&&(n.push(t.value),!o||n.length!==o);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==s.return||s.return()}finally{if(a)throw r}}return n}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Te=function(){},Ne={},Fe={},Be={mark:Te,measure:Te};try{"undefined"!=typeof window&&(Ne=window),"undefined"!=typeof document&&(Fe=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(Be=performance)}catch(e){}var De=(Ne.navigator||{}).userAgent,Re=void 0===De?"":De,qe=Ne,Ve=Fe,He=Be,Ue=(qe.document,!!Ve.documentElement&&!!Ve.head&&"function"==typeof Ve.addEventListener&&"function"==typeof Ve.createElement),We=(~Re.indexOf("MSIE")||Re.indexOf("Trident/"),function(){try{}catch(e){return!1}}(),"group"),Ke="primary",Je="secondary",Ge=qe.FontAwesomeConfig||{};if(Ve&&"function"==typeof Ve.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var o=Le(e,2),n=o[0],i=o[1],a=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var o=Ve.querySelector("script["+e+"]");if(o)return o.getAttribute(e)}(n));null!=a&&(Ge[i]=a)}))}var Xe=Ae({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ge);Xe.autoReplaceSvg||(Xe.observeMutations=!1);var Ye=Ae({},Xe);qe.FontAwesomeConfig=Ye;var $e=qe||{};$e.___FONT_AWESOME___||($e.___FONT_AWESOME___={}),$e.___FONT_AWESOME___.styles||($e.___FONT_AWESOME___.styles={}),$e.___FONT_AWESOME___.hooks||($e.___FONT_AWESOME___.hooks={}),$e.___FONT_AWESOME___.shims||($e.___FONT_AWESOME___.shims=[]);var Ze=$e.___FONT_AWESOME___,Qe=[];Ue&&((Ve.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ve.readyState)||Ve.addEventListener("DOMContentLoaded",(function e(){Ve.removeEventListener("DOMContentLoaded",e),1,Qe.map((function(e){return e()}))})));"undefined"!=typeof __webpack_require__.g&&void 0!==__webpack_require__.g.process&&__webpack_require__.g.process.emit,"undefined"==typeof setImmediate?setTimeout:setImmediate;var eo={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oo(){for(var e=12,o="";e-- >0;)o+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return o}function no(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function io(e){return Object.keys(e||{}).reduce((function(o,n){return o+"".concat(n,": ").concat(e[n],";")}),"")}function ao(e){return e.size!==eo.size||e.x!==eo.x||e.y!==eo.y||e.rotate!==eo.rotate||e.flipX||e.flipY}function ro(e){var o=e.transform,n=e.containerWidth,i=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(32*o.x,", ").concat(32*o.y,") "),t="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),s="rotate(".concat(o.rotate," 0 0)");return{outer:a,inner:{transform:"".concat(r," ").concat(t," ").concat(s)},path:{transform:"translate(".concat(i/2*-1," -256)")}}}var to={x:0,y:0,width:"100%",height:"100%"};function so(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||o)&&(e.attributes.fill="black"),e}function mo(e){var o=e.icons,n=o.main,i=o.mask,a=e.prefix,r=e.iconName,t=e.transform,s=e.symbol,m=e.title,c=e.maskId,d=e.titleId,g=e.extra,u=e.watchable,l=void 0!==u&&u,v=i.found?i:n,y=v.width,f=v.height,j="fa-w-".concat(Math.ceil(y/f*16)),h=[Ye.replacementClass,r?"".concat(Ye.familyPrefix,"-").concat(r):"",j].filter((function(e){return-1===g.classes.indexOf(e)})).concat(g.classes).join(" "),p={children:[],attributes:Ae({},g.attributes,{"data-prefix":a,"data-icon":r,class:h,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(f)})};l&&(p.attributes["data-fa-i2svg"]=""),m&&p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(d||oo())},children:[m]});var b=Ae({},p,{prefix:a,iconName:r,main:n,mask:i,maskId:c,transform:t,symbol:s,styles:g.styles}),w=i.found&&n.found?function(e){var o,n=e.children,i=e.attributes,a=e.main,r=e.mask,t=e.maskId,s=e.transform,m=a.width,c=a.icon,d=r.width,g=r.icon,u=ro({transform:s,containerWidth:d,iconWidth:m}),l={tag:"rect",attributes:Ae({},to,{fill:"white"})},v=c.children?{children:c.children.map(so)}:{},y={tag:"g",attributes:Ae({},u.inner),children:[so(Ae({tag:c.tag,attributes:Ae({},c.attributes,u.path)},v))]},f={tag:"g",attributes:Ae({},u.outer),children:[y]},j="mask-".concat(t||oo()),h="clip-".concat(t||oo()),p={tag:"mask",attributes:Ae({},to,{id:j,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[l,f]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:(o=g,"g"===o.tag?o.children:[o])},p]};return n.push(b,{tag:"rect",attributes:Ae({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(j,")")},to)}),{children:n,attributes:i}}(b):function(e){var o=e.children,n=e.attributes,i=e.main,a=e.transform,r=io(e.styles);if(r.length>0&&(n.style=r),ao(a)){var t=ro({transform:a,containerWidth:i.width,iconWidth:i.width});o.push({tag:"g",attributes:Ae({},t.outer),children:[{tag:"g",attributes:Ae({},t.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:Ae({},i.icon.attributes,t.path)}]}]})}else o.push(i.icon);return{children:o,attributes:n}}(b),k=w.children,x=w.attributes;return b.children=k,b.attributes=x,s?function(e){var o=e.prefix,n=e.iconName,i=e.children,a=e.attributes,r=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Ae({},a,{id:!0===r?"".concat(o,"-").concat(Ye.familyPrefix,"-").concat(n):r}),children:i}]}]}(b):function(e){var o=e.children,n=e.main,i=e.mask,a=e.attributes,r=e.styles,t=e.transform;if(ao(t)&&n.found&&!i.found){var s={x:n.width/n.height/2,y:.5};a.style=io(Ae({},r,{"transform-origin":"".concat(s.x+t.x/16,"em ").concat(s.y+t.y/16,"em")}))}return[{tag:"svg",attributes:a,children:o}]}(b)}var co=function(){},go=(Ye.measurePerformance&&He&&He.mark&&He.measure,function(e,o,n,i){var a,r,t,s=Object.keys(e),m=s.length,c=void 0!==i?function(e,o){return function(n,i,a,r){return e.call(o,n,i,a,r)}}(o,i):o;for(void 0===n?(a=1,t=e[s[0]]):(a=0,t=n);a<m;a++)t=c(t,e[r=s[a]],r,e);return t});function uo(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.skipHooks,a=void 0!==i&&i,r=Object.keys(o).reduce((function(e,n){var i=o[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e}),{});"function"!=typeof Ze.hooks.addPack||a?Ze.styles[e]=Ae({},Ze.styles[e]||{},r):Ze.hooks.addPack(e,r),"fas"===e&&uo("fa",o)}var lo=Ze.styles,vo=Ze.shims,yo=function(){var e=function(e){return go(lo,(function(o,n,i){return o[i]=go(n,e,{}),o}),{})};e((function(e,o,n){return o[3]&&(e[o[3]]=n),e})),e((function(e,o,n){var i=o[2];return e[n]=n,i.forEach((function(o){e[o]=n})),e}));var o="far"in lo;go(vo,(function(e,n){var i=n[0],a=n[1],r=n[2];return"far"!==a||o||(a="fas"),e[i]={prefix:a,iconName:r},e}),{})};yo();Ze.styles;function fo(e,o,n){if(e&&e[o]&&e[o][n])return{prefix:o,iconName:n,icon:e[o][n]}}function jo(e){var o=e.tag,n=e.attributes,i=void 0===n?{}:n,a=e.children,r=void 0===a?[]:a;return"string"==typeof e?no(e):"<".concat(o," ").concat(function(e){return Object.keys(e||{}).reduce((function(o,n){return o+"".concat(n,'="').concat(no(e[n]),'" ')}),"").trim()}(i),">").concat(r.map(jo).join(""),"</").concat(o,">")}function ho(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}ho.prototype=Object.create(Error.prototype),ho.prototype.constructor=ho;var po={fill:"currentColor"},bo={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},wo=(Ae({},po,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),Ae({},bo,{attributeName:"opacity"}));Ae({},po,{cx:"256",cy:"364",r:"28"}),Ae({},bo,{attributeName:"r",values:"28;14;28;28;14;28;"}),Ae({},wo,{values:"1;0;1;1;0;1;"}),Ae({},po,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Ae({},wo,{values:"1;0;0;0;0;1;"}),Ae({},po,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Ae({},wo,{values:"0;0;1;1;0;0;"}),Ze.styles;function ko(e){var o=e[0],n=e[1],i=Le(e.slice(4),1)[0];return{found:!0,width:o,height:n,icon:Array.isArray(i)?{tag:"g",attributes:{class:"".concat(Ye.familyPrefix,"-").concat(We)},children:[{tag:"path",attributes:{class:"".concat(Ye.familyPrefix,"-").concat(Je),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Ye.familyPrefix,"-").concat(Ke),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}}}}Ze.styles;function xo(){Ye.autoAddCss&&!Oo&&(!function(e){if(e&&Ue){var o=Ve.createElement("style");o.setAttribute("type","text/css"),o.innerHTML=e;for(var n=Ve.head.childNodes,i=null,a=n.length-1;a>-1;a--){var r=n[a],t=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(i=r)}Ve.head.insertBefore(o,i)}}(function(){var e="fa",o="svg-inline--fa",n=Ye.familyPrefix,i=Ye.replacementClass,a='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(n!==e||i!==o){var r=new RegExp("\\.".concat(e,"\\-"),"g"),t=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(o),"g");a=a.replace(r,".".concat(n,"-")).replace(t,"--".concat(n,"-")).replace(s,".".concat(i))}return a}()),Oo=!0)}function Co(e,o){return Object.defineProperty(e,"abstract",{get:o}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return jo(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(Ue){var o=Ve.createElement("div");return o.innerHTML=e.html,o.children}}}),e}function Eo(e){var o=e.prefix,n=void 0===o?"fa":o,i=e.iconName;if(i)return fo(zo.definitions,n,i)||fo(Ze.styles,n,i)}var _o,zo=new(function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var o,n,i;return o=e,(n=[{key:"add",value:function(){for(var e=this,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];var a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(o){e.definitions[o]=Ae({},e.definitions[o]||{},a[o]),uo(o,a[o]),yo()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,o){var n=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(n).map((function(o){var i=n[o],a=i.prefix,r=i.iconName,t=i.icon;e[a]||(e[a]={}),e[a][r]=t})),e}}])&&Pe(o.prototype,n),i&&Pe(o,i),e}()),Oo=!1,Io=(_o=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.transform,i=void 0===n?eo:n,a=o.symbol,r=void 0!==a&&a,t=o.mask,s=void 0===t?null:t,m=o.maskId,c=void 0===m?null:m,d=o.title,g=void 0===d?null:d,u=o.titleId,l=void 0===u?null:u,v=o.classes,y=void 0===v?[]:v,f=o.attributes,j=void 0===f?{}:f,h=o.styles,p=void 0===h?{}:h;if(e){var b=e.prefix,w=e.iconName,k=e.icon;return Co(Ae({type:"icon"},e),(function(){return xo(),Ye.autoA11y&&(g?j["aria-labelledby"]="".concat(Ye.replacementClass,"-title-").concat(l||oo()):(j["aria-hidden"]="true",j.focusable="false")),mo({icons:{main:ko(k),mask:s?ko(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:w,transform:Ae({},eo,i),symbol:r,title:g,maskId:c,titleId:l,extra:{attributes:j,styles:p,classes:y}})}))}},function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e||{}).icon?e:Eo(e||{}),i=o.mask;return i&&(i=(i||{}).icon?i:Eo(i||{})),_o(n,Ae({},o,{mask:i}))});zo.add({prefix:"far",iconName:"building",icon:[448,512,[],"f1ad","M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"]},{prefix:"fas",iconName:"cat",icon:[512,512,[],"f6be","M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"]},{prefix:"fas",iconName:"coffee",icon:[640,512,[],"f0f4","M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"]},{prefix:"far",iconName:"flag",icon:[512,512,[],"f024","M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"]},{prefix:"far",iconName:"frown",icon:[496,512,[],"f119","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"]},{prefix:"fas",iconName:"futbol",icon:[512,512,[],"f1e3","M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"]},{prefix:"fas",iconName:"history",icon:[512,512,[],"f1da","M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"]},{prefix:"fas",iconName:"icons",icon:[512,512,[],"f86d","M116.65 219.35a15.68 15.68 0 0 0 22.65 0l96.75-99.83c28.15-29 26.5-77.1-4.91-103.88C203.75-7.7 163-3.5 137.86 22.44L128 32.58l-9.85-10.14C93.05-3.5 52.25-7.7 24.86 15.64c-31.41 26.78-33 74.85-5 103.88zm143.92 100.49h-48l-7.08-14.24a27.39 27.39 0 0 0-25.66-17.78h-71.71a27.39 27.39 0 0 0-25.66 17.78l-7 14.24h-48A27.45 27.45 0 0 0 0 347.3v137.25A27.44 27.44 0 0 0 27.43 512h233.14A27.45 27.45 0 0 0 288 484.55V347.3a27.45 27.45 0 0 0-27.43-27.46zM144 468a52 52 0 1 1 52-52 52 52 0 0 1-52 52zm355.4-115.9h-60.58l22.36-50.75c2.1-6.65-3.93-13.21-12.18-13.21h-75.59c-6.3 0-11.66 3.9-12.5 9.1l-16.8 106.93c-1 6.3 4.88 11.89 12.5 11.89h62.31l-24.2 83c-1.89 6.65 4.2 12.9 12.23 12.9a13.26 13.26 0 0 0 10.92-5.25l92.4-138.91c4.88-6.91-1.16-15.7-10.87-15.7zM478.08.33L329.51 23.17C314.87 25.42 304 38.92 304 54.83V161.6a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V99.66l112-17.22v47.18a83.25 83.25 0 0 0-16-1.7c-35.35 0-64 21.48-64 48s28.65 48 64 48c35.2 0 63.73-21.32 64-47.66V32c0-19.48-16-34.42-33.92-31.67z"]},{prefix:"far",iconName:"lightbulb",icon:[352,512,[],"f0eb","M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]},{prefix:"fas",iconName:"music",icon:[512,512,[],"f001","M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"]},{prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},{prefix:"far",iconName:"smile",icon:[496,512,[],"f118","M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"]},{prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]},{prefix:"fas",iconName:"user",icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]});const So=Io({prefix:"far",iconName:"building"}).html[0],Po=Io({prefix:"fas",iconName:"cat"}).html[0],Mo=Io({prefix:"fas",iconName:"coffee"}).html[0],Ao=Io({prefix:"far",iconName:"flag"}).html[0],Lo=Io({prefix:"fas",iconName:"futbol"}).html[0],To=Io({prefix:"far",iconName:"frown"}).html[0],No=Io({prefix:"fas",iconName:"history"}).html[0],Fo=Io({prefix:"fas",iconName:"icons"}).html[0],Bo=Io({prefix:"far",iconName:"lightbulb"}).html[0],Do=Io({prefix:"fas",iconName:"music"}).html[0],Ro=Io({prefix:"fas",iconName:"search"}).html[0],qo=Io({prefix:"far",iconName:"smile"}).html[0],Vo=Io({prefix:"fas",iconName:"times"}).html[0],Ho=Io({prefix:"fas",iconName:"user"}).html[0];function Uo(e){const o=document.createElement("img");return o.src=e,o}function Wo(){const e=localStorage.getItem("emojiPicker.recent");return(e?JSON.parse(e):[]).filter((e=>!!e.emoji))}class Ko{constructor(e,o,n,i,a,r=!0){this.emoji=e,this.showVariants=o,this.showPreview=n,this.events=i,this.options=a,this.lazy=r}render(){this.emojiButton=ze("button",_e);let e=this.emoji.emoji;return this.emoji.custom?e=this.lazy?qo:`<img class="emoji-picker__custom-emoji" src="${Ee(this.emoji.emoji)}">`:"twemoji"===this.options.style&&(e=this.lazy?qo:ke.parse(this.emoji.emoji,this.options.twemojiOptions)),this.emojiButton.innerHTML=e,this.emojiButton.tabIndex=-1,this.emojiButton.dataset.emoji=this.emoji.emoji,this.emoji.custom&&(this.emojiButton.dataset.custom="true"),this.emojiButton.title=this.emoji.name,this.emojiButton.addEventListener("focus",(()=>this.onEmojiHover())),this.emojiButton.addEventListener("blur",(()=>this.onEmojiLeave())),this.emojiButton.addEventListener("click",(()=>this.onEmojiClick())),this.emojiButton.addEventListener("mouseover",(()=>this.onEmojiHover())),this.emojiButton.addEventListener("mouseout",(()=>this.onEmojiLeave())),"twemoji"===this.options.style&&this.lazy&&(this.emojiButton.style.opacity="0.25"),this.emojiButton}onEmojiClick(){this.emoji.variations&&this.showVariants&&this.options.showVariants||!this.options.showRecents||function(e,o){const n=Wo(),i={emoji:e.emoji,name:e.name,key:e.key||e.name,custom:e.custom};localStorage.setItem("emojiPicker.recent",JSON.stringify([i,...n.filter((e=>!!e.emoji&&e.key!==i.key))].slice(0,o.recentsCount)))}(this.emoji,this.options),this.events.emit("emoji",{emoji:this.emoji,showVariants:this.showVariants,button:this.emojiButton})}onEmojiHover(){this.showPreview&&this.events.emit("showPreview",this.emoji)}onEmojiLeave(){this.showPreview&&this.events.emit("hidePreview")}}class Jo{constructor(e,o,n,i,a=!0){this.showVariants=o,this.events=n,this.options=i,this.lazy=a,this.emojis=e.filter((e=>!e.version||parseFloat(e.version)<=parseFloat(i.emojiVersion)))}render(){const e=ze("div","emoji-picker__container");return this.emojis.forEach((o=>e.appendChild(new Ko(o,this.showVariants,!0,this.events,this.options,this.lazy).render()))),e}}var Go="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};var Xo,Yo=(function(e){var o,n;o=Go,n=function(){var e="undefined"==typeof window,o=new Map,n=new Map,i=[];i.total=0;var a=[],r=[];function t(){o.clear(),n.clear(),a=[],r=[]}function s(e){for(var o=-9007199254740991,n=e.length-1;n>=0;--n){var i=e[n];if(null!==i){var a=i.score;a>o&&(o=a)}}return-9007199254740991===o?null:o}function m(e,o){var n=e[o];if(void 0!==n)return n;var i=o;Array.isArray(o)||(i=o.split("."));for(var a=i.length,r=-1;e&&++r<a;)e=e[i[r]];return e}function c(e){return"object"==typeof e}var d=function(){var e=[],o=0,n={};function i(){for(var n=0,i=e[n],a=1;a<o;){var r=a+1;n=a,r<o&&e[r].score<e[a].score&&(n=r),e[n-1>>1]=e[n],a=1+(n<<1)}for(var t=n-1>>1;n>0&&i.score<e[t].score;t=(n=t)-1>>1)e[n]=e[t];e[n]=i}return n.add=function(n){var i=o;e[o++]=n;for(var a=i-1>>1;i>0&&n.score<e[a].score;a=(i=a)-1>>1)e[i]=e[a];e[i]=n},n.poll=function(){if(0!==o){var n=e[0];return e[0]=e[--o],i(),n}},n.peek=function(n){if(0!==o)return e[0]},n.replaceTop=function(o){e[0]=o,i()},n},g=d();return function u(l){var v={single:function(e,o,n){return e?(c(e)||(e=v.getPreparedSearch(e)),o?(c(o)||(o=v.getPrepared(o)),((n&&void 0!==n.allowTypo?n.allowTypo:!l||void 0===l.allowTypo||l.allowTypo)?v.algorithm:v.algorithmNoTypo)(e,o,e[0])):null):null},go:function(e,o,n){if(!e)return i;var a=(e=v.prepareSearch(e))[0],r=n&&n.threshold||l&&l.threshold||-9007199254740991,t=n&&n.limit||l&&l.limit||9007199254740991,d=(n&&void 0!==n.allowTypo?n.allowTypo:!l||void 0===l.allowTypo||l.allowTypo)?v.algorithm:v.algorithmNoTypo,u=0,y=0,f=o.length;if(n&&n.keys)for(var j=n.scoreFn||s,h=n.keys,p=h.length,b=f-1;b>=0;--b){for(var w=o[b],k=new Array(p),x=p-1;x>=0;--x)(_=m(w,E=h[x]))?(c(_)||(_=v.getPrepared(_)),k[x]=d(e,_,a)):k[x]=null;k.obj=w;var C=j(k);null!==C&&(C<r||(k.score=C,u<t?(g.add(k),++u):(++y,C>g.peek().score&&g.replaceTop(k))))}else if(n&&n.key){var E=n.key;for(b=f-1;b>=0;--b)(_=m(w=o[b],E))&&(c(_)||(_=v.getPrepared(_)),null!==(z=d(e,_,a))&&(z.score<r||(z={target:z.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:z.score,indexes:z.indexes,obj:w},u<t?(g.add(z),++u):(++y,z.score>g.peek().score&&g.replaceTop(z)))))}else for(b=f-1;b>=0;--b){var _,z;(_=o[b])&&(c(_)||(_=v.getPrepared(_)),null!==(z=d(e,_,a))&&(z.score<r||(u<t?(g.add(z),++u):(++y,z.score>g.peek().score&&g.replaceTop(z)))))}if(0===u)return i;var O=new Array(u);for(b=u-1;b>=0;--b)O[b]=g.poll();return O.total=u+y,O},goAsync:function(o,n,a){var r=!1,t=new Promise((function(t,g){if(!o)return t(i);var u=(o=v.prepareSearch(o))[0],y=d(),f=n.length-1,j=a&&a.threshold||l&&l.threshold||-9007199254740991,h=a&&a.limit||l&&l.limit||9007199254740991,p=(a&&void 0!==a.allowTypo?a.allowTypo:!l||void 0===l.allowTypo||l.allowTypo)?v.algorithm:v.algorithmNoTypo,b=0,w=0;function k(){if(r)return g("canceled");var d=Date.now();if(a&&a.keys)for(var l=a.scoreFn||s,x=a.keys,C=x.length;f>=0;--f){for(var E=n[f],_=new Array(C),z=C-1;z>=0;--z)(S=m(E,I=x[z]))?(c(S)||(S=v.getPrepared(S)),_[z]=p(o,S,u)):_[z]=null;_.obj=E;var O=l(_);if(null!==O&&!(O<j)&&(_.score=O,b<h?(y.add(_),++b):(++w,O>y.peek().score&&y.replaceTop(_)),f%1e3==0&&Date.now()-d>=10))return void(e?setImmediate(k):setTimeout(k))}else if(a&&a.key){for(var I=a.key;f>=0;--f)if((S=m(E=n[f],I))&&(c(S)||(S=v.getPrepared(S)),null!==(P=p(o,S,u))&&!(P.score<j)&&(P={target:P.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:P.score,indexes:P.indexes,obj:E},b<h?(y.add(P),++b):(++w,P.score>y.peek().score&&y.replaceTop(P)),f%1e3==0&&Date.now()-d>=10)))return void(e?setImmediate(k):setTimeout(k))}else for(;f>=0;--f){var S,P;if((S=n[f])&&(c(S)||(S=v.getPrepared(S)),null!==(P=p(o,S,u))&&!(P.score<j)&&(b<h?(y.add(P),++b):(++w,P.score>y.peek().score&&y.replaceTop(P)),f%1e3==0&&Date.now()-d>=10)))return void(e?setImmediate(k):setTimeout(k))}if(0===b)return t(i);for(var M=new Array(b),A=b-1;A>=0;--A)M[A]=y.poll();M.total=b+w,t(M)}e?setImmediate(k):k()}));return t.cancel=function(){r=!0},t},highlight:function(e,o,n){if(null===e)return null;void 0===o&&(o="<b>"),void 0===n&&(n="</b>");for(var i="",a=0,r=!1,t=e.target,s=t.length,m=e.indexes,c=0;c<s;++c){var d=t[c];if(m[a]===c){if(r||(r=!0,i+=o),++a===m.length){i+=d+n+t.substr(c+1);break}}else r&&(r=!1,i+=n);i+=d}return i},prepare:function(e){if(e)return{target:e,_targetLowerCodes:v.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:v.prepareLowerCodes(e),_nextBeginningIndexes:v.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return v.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return v.prepare(e);var n=o.get(e);return void 0!==n||(n=v.prepare(e),o.set(e,n)),n},getPreparedSearch:function(e){if(e.length>999)return v.prepareSearch(e);var o=n.get(e);return void 0!==o||(o=v.prepareSearch(e),n.set(e,o)),o},algorithm:function(e,o,n){for(var i=o._targetLowerCodes,t=e.length,s=i.length,m=0,c=0,d=0,g=0;;){if(n===i[c]){if(a[g++]=c,++m===t)break;n=e[0===d?m:d===m?m+1:d===m-1?m-1:m]}if(++c>=s)for(;;){if(m<=1)return null;if(0===d){if(n===e[--m])continue;d=m}else{if(1===d)return null;if((n=e[1+(m=--d)])===e[m])continue}c=a[(g=m)-1]+1;break}}m=0;var u=0,l=!1,y=0,f=o._nextBeginningIndexes;null===f&&(f=o._nextBeginningIndexes=v.prepareNextBeginningIndexes(o.target));var j=c=0===a[0]?0:f[a[0]-1];if(c!==s)for(;;)if(c>=s){if(m<=0){if(++u>t-2)break;if(e[u]===e[u+1])continue;c=j;continue}--m,c=f[r[--y]]}else if(e[0===u?m:u===m?m+1:u===m-1?m-1:m]===i[c]){if(r[y++]=c,++m===t){l=!0;break}++c}else c=f[c];if(l)var h=r,p=y;else h=a,p=g;for(var b=0,w=-1,k=0;k<t;++k)w!==(c=h[k])-1&&(b-=c),w=c;for(l?0!==u&&(b+=-20):(b*=1e3,0!==d&&(b+=-20)),b-=s-t,o.score=b,o.indexes=new Array(p),k=p-1;k>=0;--k)o.indexes[k]=h[k];return o},algorithmNoTypo:function(e,o,n){for(var i=o._targetLowerCodes,t=e.length,s=i.length,m=0,c=0,d=0;;){if(n===i[c]){if(a[d++]=c,++m===t)break;n=e[m]}if(++c>=s)return null}m=0;var g=!1,u=0,l=o._nextBeginningIndexes;if(null===l&&(l=o._nextBeginningIndexes=v.prepareNextBeginningIndexes(o.target)),(c=0===a[0]?0:l[a[0]-1])!==s)for(;;)if(c>=s){if(m<=0)break;--m,c=l[r[--u]]}else if(e[m]===i[c]){if(r[u++]=c,++m===t){g=!0;break}++c}else c=l[c];if(g)var y=r,f=u;else y=a,f=d;for(var j=0,h=-1,p=0;p<t;++p)h!==(c=y[p])-1&&(j-=c),h=c;for(g||(j*=1e3),j-=s-t,o.score=j,o.indexes=new Array(f),p=f-1;p>=0;--p)o.indexes[p]=y[p];return o},prepareLowerCodes:function(e){for(var o=e.length,n=[],i=e.toLowerCase(),a=0;a<o;++a)n[a]=i.charCodeAt(a);return n},prepareBeginningIndexes:function(e){for(var o=e.length,n=[],i=0,a=!1,r=!1,t=0;t<o;++t){var s=e.charCodeAt(t),m=s>=65&&s<=90,c=m||s>=97&&s<=122||s>=48&&s<=57,d=m&&!a||!r||!c;a=m,r=c,d&&(n[i++]=t)}return n},prepareNextBeginningIndexes:function(e){for(var o=e.length,n=v.prepareBeginningIndexes(e),i=[],a=n[0],r=0,t=0;t<o;++t)a>t?i[t]=a:(a=n[++r],i[t]=void 0===a?o:a);return i},cleanup:t,new:u};return v}()},e.exports?e.exports=n():o.fuzzysort=n()}(Xo={exports:{}},Xo.exports),Xo.exports);class $o{constructor(e,o){this.message=e,this.iconUrl=o}render(){const e=ze("div","emoji-picker__search-not-found"),o=ze("div","emoji-picker__search-not-found-icon");this.iconUrl?o.appendChild(Uo(this.iconUrl)):o.innerHTML=To,e.appendChild(o);const n=ze("h2");return n.innerHTML=Ee(this.message),e.appendChild(n),e}}class Zo{constructor(e,o,n,i,a){if(this.events=e,this.i18n=o,this.options=n,this.focusedEmojiIndex=0,this.emojisPerRow=this.options.emojisPerRow||8,this.emojiData=i.filter((e=>e.version&&parseFloat(e.version)<=parseFloat(n.emojiVersion)&&void 0!==e.category&&a.indexOf(e.category)>=0)),this.options.custom){const e=this.options.custom.map((e=>Object.assign(Object.assign({},e),{custom:!0})));this.emojiData=[...this.emojiData,...e]}this.events.on("hideVariantPopup",(()=>{setTimeout((()=>this.setFocusedEmoji(this.focusedEmojiIndex)))}))}render(){return this.searchContainer=ze("div","emoji-picker__search-container"),this.searchField=ze("input","emoji-picker__search"),this.searchField.placeholder=this.i18n.search,this.searchContainer.appendChild(this.searchField),this.searchIcon=ze("span","emoji-picker__search-icon"),this.options.icons&&this.options.icons.search?this.searchIcon.appendChild(Uo(this.options.icons.search)):this.searchIcon.innerHTML=Ro,this.searchIcon.addEventListener("click",(e=>this.onClearSearch(e))),this.searchContainer.appendChild(this.searchIcon),this.searchField.addEventListener("keydown",(e=>this.onKeyDown(e))),this.searchField.addEventListener("keyup",(e=>this.onKeyUp(e))),this.searchContainer}clear(){this.searchField.value=""}focus(){this.searchField.focus()}onClearSearch(e){e.stopPropagation(),this.searchField.value&&(this.searchField.value="",this.resultsContainer=null,this.options.icons&&this.options.icons.search?(Oe(this.searchIcon),this.searchIcon.appendChild(Uo(this.options.icons.search))):this.searchIcon.innerHTML=Ro,this.searchIcon.style.cursor="default",this.events.emit("hideSearchResults"),setTimeout((()=>this.searchField.focus())))}setFocusedEmoji(e){if(this.resultsContainer){const o=this.resultsContainer.querySelectorAll("."+_e);o[this.focusedEmojiIndex].tabIndex=-1,this.focusedEmojiIndex=e;const n=o[this.focusedEmojiIndex];n.tabIndex=0,n.focus()}}handleResultsKeydown(e){if(this.resultsContainer){const o=this.resultsContainer.querySelectorAll("."+_e);"ArrowRight"===e.key?this.setFocusedEmoji(Math.min(this.focusedEmojiIndex+1,o.length-1)):"ArrowLeft"===e.key?this.setFocusedEmoji(Math.max(0,this.focusedEmojiIndex-1)):"ArrowDown"===e.key?(e.preventDefault(),this.focusedEmojiIndex<o.length-this.emojisPerRow&&this.setFocusedEmoji(this.focusedEmojiIndex+this.emojisPerRow)):"ArrowUp"===e.key?(e.preventDefault(),this.focusedEmojiIndex>=this.emojisPerRow&&this.setFocusedEmoji(this.focusedEmojiIndex-this.emojisPerRow)):"Escape"===e.key&&this.onClearSearch(e)}}onKeyDown(e){"Escape"===e.key&&this.searchField.value&&this.onClearSearch(e)}onKeyUp(e){if("Tab"!==e.key&&"Shift"!==e.key)if(this.searchField.value){this.options.icons&&this.options.icons.clearSearch?(Oe(this.searchIcon),this.searchIcon.appendChild(Uo(this.options.icons.clearSearch))):this.searchIcon.innerHTML=Vo,this.searchIcon.style.cursor="pointer";const e=Yo.go(this.searchField.value,this.emojiData,{allowTypo:!0,limit:100,key:"name"}).map((e=>e.obj));this.events.emit("hidePreview"),e.length?(this.resultsContainer=new Jo(e,!0,this.events,this.options,!1).render(),this.resultsContainer&&(this.resultsContainer.querySelector("."+_e).tabIndex=0,this.focusedEmojiIndex=0,this.resultsContainer.addEventListener("keydown",(e=>this.handleResultsKeydown(e))),this.events.emit("showSearchResults",this.resultsContainer))):this.events.emit("showSearchResults",new $o(this.i18n.notFound,this.options.icons&&this.options.icons.notFound).render())}else this.options.icons&&this.options.icons.search?(Oe(this.searchIcon),this.searchIcon.appendChild(Uo(this.options.icons.search))):this.searchIcon.innerHTML=Ro,this.searchIcon.style.cursor="default",this.events.emit("hideSearchResults")}}class Qo{constructor(e,o,n){this.events=e,this.emoji=o,this.options=n,this.focusedEmojiIndex=0}getEmoji(e){return this.popup.querySelectorAll("."+_e)[e]}setFocusedEmoji(e){this.getEmoji(this.focusedEmojiIndex).tabIndex=-1,this.focusedEmojiIndex=e;const o=this.getEmoji(this.focusedEmojiIndex);o.tabIndex=0,o.focus()}render(){this.popup=ze("div","emoji-picker__variant-popup");const e=ze("div","emoji-picker__variant-overlay");e.addEventListener("click",(e=>{e.stopPropagation(),this.popup.contains(e.target)||this.events.emit("hideVariantPopup")})),this.popup.appendChild(new Ko(this.emoji,!1,!1,this.events,this.options,!1).render()),(this.emoji.variations||[]).forEach(((e,o)=>this.popup.appendChild(new Ko({name:this.emoji.name,emoji:e,key:this.emoji.name+o},!1,!1,this.events,this.options,!1).render())));const o=this.popup.querySelector("."+_e);return this.focusedEmojiIndex=0,o.tabIndex=0,setTimeout((()=>o.focus())),this.popup.addEventListener("keydown",(e=>{"ArrowRight"===e.key?this.setFocusedEmoji(Math.min(this.focusedEmojiIndex+1,this.popup.querySelectorAll("."+_e).length-1)):"ArrowLeft"===e.key?this.setFocusedEmoji(Math.max(this.focusedEmojiIndex-1,0)):"Escape"===e.key&&(e.stopPropagation(),this.events.emit("hideVariantPopup"))})),e.appendChild(this.popup),e}}const en={search:"Search emojis...",categories:{recents:"Recent Emojis",smileys:"Smileys & Emotion",people:"People & Body",animals:"Animals & Nature",food:"Food & Drink",activities:"Activities",travel:"Travel & Places",objects:"Objects",symbols:"Symbols",flags:"Flags",custom:"Custom"},notFound:"No emojis found"},on={recents:No,smileys:qo,people:Ho,animals:Po,food:Mo,activities:Lo,travel:So,objects:Bo,symbols:Do,flags:Ao,custom:Fo};class nn{constructor(e,o,n){this.options=e,this.events=o,this.i18n=n,this.activeButton=0,this.buttons=[]}render(){var e;const o=ze("div","emoji-picker__category-buttons"),n=this.options.categories||(null===(e=this.options.emojiData)||void 0===e?void 0:e.categories)||xe.categories;let i=this.options.showRecents?["recents",...n]:n;return this.options.custom&&(i=[...i,"custom"]),i.forEach((e=>{const n=ze("button","emoji-picker__category-button");this.options.icons&&this.options.icons.categories&&this.options.icons.categories[e]?n.appendChild(Uo(this.options.icons.categories[e])):n.innerHTML=on[e],n.tabIndex=-1,n.title=this.i18n.categories[e],o.appendChild(n),this.buttons.push(n),n.addEventListener("click",(()=>{this.events.emit("categoryClicked",e)}))})),o.addEventListener("keydown",(e=>{switch(e.key){case"ArrowRight":this.events.emit("categoryClicked",i[(this.activeButton+1)%this.buttons.length]);break;case"ArrowLeft":this.events.emit("categoryClicked",i[0===this.activeButton?this.buttons.length-1:this.activeButton-1]);break;case"ArrowUp":case"ArrowDown":e.stopPropagation(),e.preventDefault()}})),o}setActiveButton(e,o=!0){let n=this.buttons[this.activeButton];n.classList.remove("active"),n.tabIndex=-1,this.activeButton=e,n=this.buttons[this.activeButton],n.classList.add("active"),n.tabIndex=0,o&&n.focus()}}const an=["recents","smileys","people","animals","food","activities","travel","objects","symbols","flags","custom"];class rn{constructor(e,o,n,i){var a;this.events=e,this.i18n=o,this.options=n,this.emojiCategories=i,this.currentCategory=0,this.headers=[],this.focusedIndex=0,this.handleKeyDown=e=>{switch(this.emojis.removeEventListener("scroll",this.highlightCategory),e.key){case"ArrowRight":this.focusedEmoji.tabIndex=-1,this.focusedIndex===this.currentEmojiCount-1&&this.currentCategory<this.categories.length-1?(this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(++this.currentCategory),this.setFocusedEmoji(0)):this.focusedIndex<this.currentEmojiCount-1&&this.setFocusedEmoji(this.focusedIndex+1);break;case"ArrowLeft":this.focusedEmoji.tabIndex=-1,0===this.focusedIndex&&this.currentCategory>0?(this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(--this.currentCategory),this.setFocusedEmoji(this.currentEmojiCount-1)):this.setFocusedEmoji(Math.max(0,this.focusedIndex-1));break;case"ArrowDown":e.preventDefault(),this.focusedEmoji.tabIndex=-1,this.focusedIndex+this.emojisPerRow>=this.currentEmojiCount&&this.currentCategory<this.categories.length-1?(this.currentCategory++,this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory),this.setFocusedEmoji(Math.min(this.focusedIndex%this.emojisPerRow,this.currentEmojiCount-1))):this.currentEmojiCount-this.focusedIndex>this.emojisPerRow&&this.setFocusedEmoji(this.focusedIndex+this.emojisPerRow);break;case"ArrowUp":if(e.preventDefault(),this.focusedEmoji.tabIndex=-1,this.focusedIndex<this.emojisPerRow&&this.currentCategory>0){const e=this.getEmojiCount(this.currentCategory-1);let o=e%this.emojisPerRow;0===o&&(o=this.emojisPerRow);const n=this.focusedIndex,i=n>o-1?e-1:e-o+n;this.currentCategory--,this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory),this.setFocusedEmoji(i)}else this.setFocusedEmoji(this.focusedIndex>=this.emojisPerRow?this.focusedIndex-this.emojisPerRow:this.focusedIndex)}requestAnimationFrame((()=>this.emojis.addEventListener("scroll",this.highlightCategory)))},this.addCategory=(e,o)=>{const n=ze("h2","emoji-picker__category-name");n.innerHTML=Ee(this.i18n.categories[e]||en.categories[e]),this.emojis.appendChild(n),this.headers.push(n),this.emojis.appendChild(new Jo(o,!0,this.events,this.options,"recents"!==e).render())},this.selectCategory=(e,o=!0)=>{this.emojis.removeEventListener("scroll",this.highlightCategory),this.focusedEmoji&&(this.focusedEmoji.tabIndex=-1);const n=this.categories.indexOf(e);this.currentCategory=n,this.setFocusedEmoji(0,!1),this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory,o);const i=this.headerOffsets[n];this.emojis.scrollTop=i,requestAnimationFrame((()=>this.emojis.addEventListener("scroll",this.highlightCategory)))},this.highlightCategory=()=>{if(document.activeElement&&document.activeElement.classList.contains("emoji-picker__emoji"))return;let e=this.headerOffsets.findIndex((e=>e>=Math.round(this.emojis.scrollTop)));this.emojis.scrollTop+this.emojis.offsetHeight===this.emojis.scrollHeight&&(e=-1),0===e?e=1:e<0&&(e=this.headerOffsets.length),this.headerOffsets[e]===this.emojis.scrollTop&&e++,this.currentCategory=e-1,this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory)},this.emojisPerRow=n.emojisPerRow||8,this.categories=(null===(a=n.emojiData)||void 0===a?void 0:a.categories)||n.categories||xe.categories,n.showRecents&&(this.categories=["recents",...this.categories]),n.custom&&(this.categories=[...this.categories,"custom"]),this.categories.sort(((e,o)=>an.indexOf(e)-an.indexOf(o)))}updateRecents(){if(this.options.showRecents){this.emojiCategories.recents=Wo();const e=this.emojis.querySelector(".emoji-picker__container");e&&e.parentNode&&e.parentNode.replaceChild(new Jo(this.emojiCategories.recents,!0,this.events,this.options,!1).render(),e)}}render(){this.container=ze("div","emoji-picker__emoji-area"),this.options.showCategoryButtons&&(this.categoryButtons=new nn(this.options,this.events,this.i18n),this.container.appendChild(this.categoryButtons.render())),this.emojis=ze("div","emoji-picker__emojis"),this.options.showRecents&&(this.emojiCategories.recents=Wo()),this.options.custom&&(this.emojiCategories.custom=this.options.custom.map((e=>Object.assign(Object.assign({},e),{custom:!0})))),this.categories.forEach((e=>this.addCategory(e,this.emojiCategories[e]))),requestAnimationFrame((()=>{setTimeout((()=>{setTimeout((()=>this.emojis.addEventListener("scroll",this.highlightCategory)))}))})),this.emojis.addEventListener("keydown",this.handleKeyDown),this.events.on("categoryClicked",this.selectCategory),this.container.appendChild(this.emojis);return this.container.querySelectorAll("."+_e)[0].tabIndex=0,this.container}reset(){this.headerOffsets=Array.prototype.map.call(this.headers,(e=>e.offsetTop)),this.selectCategory(this.options.initialCategory||"smileys",!1),this.currentCategory=this.categories.indexOf(this.options.initialCategory||"smileys"),this.options.showCategoryButtons&&this.categoryButtons.setActiveButton(this.currentCategory,!1)}get currentCategoryEl(){return this.emojis.querySelectorAll(".emoji-picker__container")[this.currentCategory]}get focusedEmoji(){return this.currentCategoryEl.querySelectorAll("."+_e)[this.focusedIndex]}get currentEmojiCount(){return this.currentCategoryEl.querySelectorAll("."+_e).length}getEmojiCount(e){return this.emojis.querySelectorAll(".emoji-picker__container")[e].querySelectorAll("."+_e).length}setFocusedEmoji(e,o=!0){this.focusedIndex=e,this.focusedEmoji&&(this.focusedEmoji.tabIndex=0,o&&this.focusedEmoji.focus())}}const tn={position:"auto",autoHide:!0,autoFocusSearch:!0,showAnimation:!0,showPreview:!0,showSearch:!0,showRecents:!0,showVariants:!0,showCategoryButtons:!0,recentsCount:50,emojiData:xe,emojiVersion:"12.1",theme:"light",categories:["smileys","people","animals","food","activities","travel","objects","symbols","flags"],style:"native",twemojiOptions:{ext:".svg",folder:"svg"},emojisPerRow:8,rows:6,emojiSize:"1.8em",initialCategory:"smileys"};class sn{constructor(e={}){this.events=new b,this.publicEvents=new b,this.pickerVisible=!1,this.options=Object.assign(Object.assign({},tn),e),this.options.rootElement||(this.options.rootElement=document.body),this.i18n=Object.assign(Object.assign({},en),e.i18n),this.onDocumentClick=this.onDocumentClick.bind(this),this.onDocumentKeydown=this.onDocumentKeydown.bind(this),this.theme=this.options.theme||"light",this.emojiCategories=function(e){const o={};return e.emoji.forEach((n=>{let i=o[e.categories[n.category||0]];i||(i=o[e.categories[n.category||0]]=[]),i.push(n)})),o}(this.options.emojiData||xe),this.buildPicker()}on(e,o){this.publicEvents.on(e,o)}off(e,o){this.publicEvents.off(e,o)}setStyleProperties(){this.options.showAnimation||this.pickerEl.style.setProperty("--animation-duration","0s"),this.options.emojisPerRow&&this.pickerEl.style.setProperty("--emoji-per-row",this.options.emojisPerRow.toString()),this.options.rows&&this.pickerEl.style.setProperty("--row-count",this.options.rows.toString()),this.options.emojiSize&&this.pickerEl.style.setProperty("--emoji-size",this.options.emojiSize),this.options.showCategoryButtons||this.pickerEl.style.setProperty("--category-button-height","0"),this.options.styleProperties&&Object.keys(this.options.styleProperties).forEach((e=>{this.options.styleProperties&&this.pickerEl.style.setProperty(e,this.options.styleProperties[e])}))}showSearchResults(e){Oe(this.pickerContent),e.classList.add("search-results"),this.pickerContent.appendChild(e)}hideSearchResults(){this.pickerContent.firstChild!==this.emojiArea.container&&(Oe(this.pickerContent),this.pickerContent.appendChild(this.emojiArea.container)),this.emojiArea.reset()}emitEmoji({emoji:o,showVariants:n}){return e(this,void 0,void 0,(function*(){if(o.variations&&n&&this.options.showVariants)this.showVariantPopup(o);else{let e;setTimeout((()=>this.emojiArea.updateRecents())),e=o.custom?this.emitCustomEmoji(o):"twemoji"===this.options.style?yield this.emitTwemoji(o):this.emitNativeEmoji(o),this.publicEvents.emit("emoji",e),this.options.autoHide&&this.hidePicker()}}))}emitNativeEmoji(e){return{emoji:e.emoji,name:e.name}}emitCustomEmoji(e){return{url:e.emoji,name:e.name,custom:!0}}emitTwemoji(e){return new Promise((o=>{ke.parse(e.emoji,Object.assign(Object.assign({},this.options.twemojiOptions),{callback:(n,{base:i,size:a,ext:r})=>{const t=`${i}${a}/${n}${r}`;return o({url:t,emoji:e.emoji,name:e.name}),t}}))}))}buildSearch(){var e;this.options.showSearch&&(this.search=new Zo(this.events,this.i18n,this.options,(null===(e=this.options.emojiData)||void 0===e?void 0:e.emoji)||xe.emoji,(this.options.categories||[]).map((e=>(this.options.emojiData||xe).categories.indexOf(e)))),this.pickerEl.appendChild(this.search.render()))}buildPreview(){this.options.showPreview&&this.pickerEl.appendChild(new Se(this.events,this.options).render())}initPlugins(){if(this.options.plugins){const e=ze("div","emoji-picker__plugin-container");this.options.plugins.forEach((o=>{if(!o.render)throw new Error('Emoji Button plugins must have a "render" function.');e.appendChild(o.render(this))})),this.pickerEl.appendChild(e)}}initFocusTrap(){this.focusTrap=h(this.pickerEl,{clickOutsideDeactivates:!0,initialFocus:this.options.showSearch&&this.options.autoFocusSearch?".emoji-picker__search":'.emoji-picker__emoji[tabindex="0"]'})}buildPicker(){this.pickerEl=ze("div","emoji-picker"),this.pickerEl.classList.add(this.theme),this.setStyleProperties(),this.initFocusTrap(),this.pickerContent=ze("div","emoji-picker__content"),this.initPlugins(),this.buildSearch(),this.pickerEl.appendChild(this.pickerContent),this.emojiArea=new rn(this.events,this.i18n,this.options,this.emojiCategories),this.pickerContent.appendChild(this.emojiArea.render()),this.events.on("showSearchResults",this.showSearchResults.bind(this)),this.events.on("hideSearchResults",this.hideSearchResults.bind(this)),this.events.on("emoji",this.emitEmoji.bind(this)),this.buildPreview(),this.wrapper=ze("div","emoji-picker__wrapper"),this.wrapper.appendChild(this.pickerEl),this.wrapper.style.display="none",this.options.zIndex&&(this.wrapper.style.zIndex=this.options.zIndex+""),this.options.rootElement&&this.options.rootElement.appendChild(this.wrapper),this.observeForLazyLoad()}showVariantPopup(e){const o=new Qo(this.events,e,this.options).render();o&&this.pickerEl.appendChild(o),this.events.on("hideVariantPopup",(()=>{o&&(o.classList.add("hiding"),setTimeout((()=>{o&&this.pickerEl.removeChild(o)}),175)),this.events.off("hideVariantPopup")}))}observeForLazyLoad(){this.observer=new IntersectionObserver(this.handleIntersectionChange.bind(this),{root:this.emojiArea.emojis}),this.emojiArea.emojis.querySelectorAll("."+_e).forEach((e=>{this.shouldLazyLoad(e)&&this.observer.observe(e)}))}handleIntersectionChange(e){Array.prototype.filter.call(e,(e=>e.intersectionRatio>0)).map((e=>e.target)).forEach((e=>{Ie(e,this.options)}))}shouldLazyLoad(e){return"twemoji"===this.options.style||"true"===e.dataset.custom}onDocumentClick(e){this.pickerEl.contains(e.target)||this.hidePicker()}destroyPicker(){this.events.off("emoji"),this.events.off("hideVariantPopup"),this.options.rootElement&&(this.options.rootElement.removeChild(this.wrapper),this.popper&&this.popper.destroy()),this.observer&&this.observer.disconnect(),this.options.plugins&&this.options.plugins.forEach((e=>{e.destroy&&e.destroy()}))}hidePicker(){this.hideInProgress=!0,this.focusTrap.deactivate(),this.pickerVisible=!1,this.overlay&&(document.body.removeChild(this.overlay),this.overlay=void 0),this.emojiArea.emojis.removeEventListener("scroll",this.emojiArea.highlightCategory),this.pickerEl.classList.add("hiding"),setTimeout((()=>{this.wrapper.style.display="none",this.pickerEl.classList.remove("hiding"),this.pickerContent.firstChild!==this.emojiArea.container&&(Oe(this.pickerContent),this.pickerContent.appendChild(this.emojiArea.container)),this.search&&this.search.clear(),this.events.emit("hideVariantPopup"),this.hideInProgress=!1,this.popper&&this.popper.destroy(),this.publicEvents.emit("hidden")}),this.options.showAnimation?170:0),setTimeout((()=>{document.removeEventListener("click",this.onDocumentClick),document.removeEventListener("keydown",this.onDocumentKeydown)}))}showPicker(e){this.hideInProgress?setTimeout((()=>this.showPicker(e)),100):(this.pickerVisible=!0,this.wrapper.style.display="block",this.determineDisplay(e),this.focusTrap.activate(),setTimeout((()=>{this.addEventListeners(),this.setInitialFocus()})),this.emojiArea.reset())}determineDisplay(e){window.matchMedia("screen and (max-width: 450px)").matches?this.showMobileView():"string"==typeof this.options.position?this.setRelativePosition(e):this.setFixedPosition()}setInitialFocus(){this.pickerEl.querySelector(this.options.showSearch&&this.options.autoFocusSearch?".emoji-picker__search":`.${_e}[tabindex="0"]`).focus()}addEventListeners(){document.addEventListener("click",this.onDocumentClick),document.addEventListener("keydown",this.onDocumentKeydown)}setRelativePosition(e){this.popper=we(e,this.wrapper,{placement:this.options.position})}setFixedPosition(){var e;if(null===(e=this.options)||void 0===e?void 0:e.position){this.wrapper.style.position="fixed";const e=this.options.position;Object.keys(e).forEach((o=>{this.wrapper.style[o]=e[o]}))}}showMobileView(){const e=window.getComputedStyle(this.pickerEl),o=document.querySelector("html"),n=o&&o.clientHeight,i=o&&o.clientWidth,a=parseInt(e.height),r=n?n/2-a/2:0,t=parseInt(e.width),s=i?i/2-t/2:0;this.wrapper.style.position="fixed",this.wrapper.style.top=r+"px",this.wrapper.style.left=s+"px",this.wrapper.style.zIndex="5000",this.overlay=ze("div","emoji-picker__overlay"),document.body.appendChild(this.overlay)}togglePicker(e){this.pickerVisible?this.hidePicker():this.showPicker(e)}isPickerVisible(){return this.pickerVisible}onDocumentKeydown(e){"Escape"===e.key?this.hidePicker():"Tab"===e.key?this.pickerEl.classList.add("keyboard"):e.key.match(/^[\w]$/)&&this.search&&this.search.focus()}setTheme(e){e!==this.theme&&(this.pickerEl.classList.remove(this.theme),this.theme=e,this.pickerEl.classList.add(e))}}

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.70.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2a0488f1a2617d8b852acb55a592e611/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CommentEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var CommentEditorvue_type_script_lang_js_ = ({
  name: 'CommentEditor',
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function (value) {
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    replyComment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      required: false,
      default: []
    },
    configs: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: ''
      },
      previewMode: false,
      infoes: [],
      warnings: [],
      successes: []
    };
  },

  computed: {
    renderedContent() {
      return this.comment.content ? marked.parse(this.comment.content) : '';
    },

    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default;
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';

      if (!this.comment.email || !validEmail(this.comment.email)) {
        return `${gravatarSource}?d=${gravatarDefault}`;
      }

      const gravatarMd5 = md5_default()(this.comment.email);
      return `${gravatarSource}${gravatarMd5}?s=256&d=${gravatarDefault}`;
    },

    infoAlertVisible() {
      return this.infoes !== null && this.infoes.length > 0;
    },

    warningAlertVisible() {
      return this.warnings !== null && this.warnings.length > 0;
    },

    successAlertVisible() {
      return this.successes !== null && this.successes.length > 0;
    }

  },

  created() {
    // Get info from local storage
    const author = localStorage.getItem('comment-author');
    const authorUrl = localStorage.getItem('comment-authorUrl');
    const email = localStorage.getItem('comment-email');
    this.comment.author = author ? author : '';
    this.comment.authorUrl = authorUrl ? authorUrl : '';
    this.comment.email = email ? email : '';
    this.handleCreateEmojiPicker();
  },

  mounted() {
    autosize_default()(document.querySelector('textarea'));
  },

  methods: {
    handleCreateEmojiPicker() {
      this.$nextTick(() => {
        const picker = new sn({
          zIndex: 9999,
          theme: this.configs.dark ? 'dark' : 'light'
        });
        picker.on('emoji', selection => {
          this.comment.content += selection.emoji;
        });
        const trigger = this.$el.getElementsByClassName('emoji-picker')[0];
        trigger.addEventListener('click', () => picker.togglePicker(trigger));
      });
    },

    handleSubmitClick() {
      if (isEmpty(this.comment.author)) {
        this.warnings.push('评论者昵称不能为空');
        return;
      }

      if (isEmpty(this.comment.content)) {
        this.warnings.push('评论内容不能为空');
        return;
      } // Submit the comment


      this.comment.postId = this.targetId;

      if (this.replyComment) {
        // Set parent id if available
        this.comment.parentId = this.replyComment.id;
      }

      api_client.comment.create(this.target, this.comment).then(response => {
        // Store comment author, email, authorUrl
        localStorage.setItem('comment-author', this.comment.author);
        localStorage.setItem('comment-email', this.comment.email);
        localStorage.setItem('comment-authorUrl', this.comment.authorUrl); // clear comment

        this.comment.content = '';
        this.handleCommentCreated(response.data);
      }).catch(error => {
        this.handleFailedToCreateComment(error);
      });
    },

    handleCommentCreated(createdComment) {
      this.clearAlertClose();

      if (createdComment.status === 'PUBLISHED') {
        this.successes.push('评论成功，刷新即可显示最新评论！');
      } else {
        // Show tips
        this.infoes.push('您的评论已经投递至博主，等待博主审核！');
      }
    },

    handleFailedToCreateComment(response) {
      this.clearAlertClose();

      if (response.status === 400) {
        this.warnings.push(response.data.message);

        if (response.data) {
          const errorDetail = response.data.data;

          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach(key => {
              this.warnings.push(errorDetail[key]);
            });
          }
        }
      }
    },

    clearAlertClose() {
      this.infoes = [];
      this.warnings = [];
      this.successes = [];
    }

  }
});
;// CONCATENATED MODULE: ./src/components/CommentEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentEditorvue_type_script_lang_js_ = (CommentEditorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/components/CommentEditor.vue





/* normalize component */
;
var component = normalizeComponent(
  components_CommentEditorvue_type_script_lang_js_,
  CommentEditorvue_type_template_id_25e2b206_render,
  CommentEditorvue_type_template_id_25e2b206_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentEditor = (component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CommentNode.vue?vue&type=template&id=cdceeca6&
var CommentNodevue_type_template_id_cdceeca6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"comment",class:_vm.commentClass,attrs:{"id":'li-comment-' + _vm.comment.id,"itemprop":"comment","itemtype":"https://schema.org/Comment"}},[_c('div',{ref:'comment-' + _vm.comment.id,staticClass:"comment-body markdown-body !mb-5",attrs:{"id":'comment-' + _vm.comment.id}},[_c('div',{staticClass:"relative float-left p-0"},[_c('a',{attrs:{"href":("" + (_vm.comment.authorUrl ? _vm.comment.authorUrl : 'javascript:void(0)')),"rel":"nofollow","target":"_blank"}},[_c('img',{staticClass:"avatar",attrs:{"alt":_vm.comment.author + "'s avatar","src":_vm.avatar}})])]),_c('div',{staticClass:"comment-main"},[_c('div',{staticClass:"comment-meta"},[_c('div',{staticClass:"comment-author",attrs:{"itemprop":"author"}},[_c('div',{staticClass:"flex justify-between"},[_c('div',{staticClass:"self-center inline-flex"},[_c('a',{staticClass:"self-center author-name mr-2",attrs:{"href":_vm.comment.authorUrl,"rel":"nofollow","target":"_blank"}},[_vm._v(" "+_vm._s(_vm.comment.author)+" ")]),(_vm.comment.isAdmin)?_c('span',{staticClass:"self-center is-admin"},[_c('svg',{staticClass:"icon",attrs:{"height":"14","version":"1.1","viewBox":"0 0 1024 1024","width":"14","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z m0 896c-212.032 0-384-171.968-384-384S299.968 128 512 128s384 171.968 384 384-171.968 384-384 384z m94.08-513.408L512 192.064l-94.016 190.528-210.304 30.592 152.192 148.288-35.968 209.344L512 672l188.032 98.88-35.904-209.344 152.128-148.288-210.176-30.656z","fill":"#1296db","p-id":"6998"}})])]):_vm._e()])]),(_vm.configs.showUserAgent)?_c('div',{staticClass:"useragent-info"},[_vm._v(" "+_vm._s(_vm.compileUserAgent)+" ")]):_vm._e()]),_c('time',{staticClass:"comment-time",attrs:{"datetime":_vm.comment.createTime,"itemprop":"datePublished"}},[_vm._v(_vm._s(_vm.createTimeAgo))])]),_c('div',{staticClass:"comment-content",attrs:{"itemprop":"description"}},[(_vm.parent)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.compileReference)},on:{"mouseenter":_vm.handleHighlightParent,"mouseleave":function($event){return _vm.handleHighlightParent(false)}}}):_vm._e(),_c('span',{domProps:{"innerHTML":_vm._s(_vm.compileContent)}})]),_c('div',{staticClass:"flex"},[_c('span',{staticClass:"cursor-pointer select-none text-sm hover:font-bold transition-all",on:{"click":function($event){_vm.editing = !_vm.editing}}},[_vm._v(" "+_vm._s(_vm.editing ? '取消回复' : '回复')+" ")])])])]),(_vm.editing)?_c('comment-editor',{attrs:{"configs":_vm.configs,"options":_vm.options,"replyComment":_vm.comment,"target":_vm.target,"targetId":_vm.targetId}}):_vm._e(),(_vm.comment.children)?_c('ol',{staticClass:"children-nodes"},[_vm._l((_vm.comment.children),function(children,index){return [_c('CommentNode',{key:index,attrs:{"comment":children,"configs":_vm.configs,"isChild":true,"options":_vm.options,"parent":_vm.comment,"target":_vm.target,"targetId":_vm.targetId}})]})],2):_vm._e()],1)}
var CommentNodevue_type_template_id_cdceeca6_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/ua-parser-js@0.7.31/node_modules/ua-parser-js/src/ua-parser.js
var ua_parser = __webpack_require__(4014);
var ua_parser_default = /*#__PURE__*/__webpack_require__.n(ua_parser);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.70.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2a0488f1a2617d8b852acb55a592e611/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CommentNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var CommentNodevue_type_script_lang_js_ = ({
  name: 'CommentNode',
  props: {
    isChild: {
      type: Boolean,
      required: false,
      default: false
    },
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function (value) {
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1;
      }
    },
    parent: {
      type: Object,
      required: false
    },
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    configs: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      editing: false
    };
  },

  computed: {
    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default;
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/';

      if (this.comment.avatar) {
        return this.comment.avatar;
      }

      return `${gravatarSource}${this.comment.gravatarMd5}?s=256&d=${gravatarDefault}`;
    },

    compileReference() {
      if (this.parent) {
        return marked.parse(`[@${this.parent.author}](#comment-${this.parent.id})`);
      }

      return undefined;
    },

    compileContent() {
      return marked.parse(this.comment.content, {
        sanitize: true
      });
    },

    createTimeAgo() {
      return timeAgo(this.comment.createTime);
    },

    compileUserAgent() {
      const parser = new (ua_parser_default())();
      parser.setUA(this.comment.userAgent);
      const result = parser.getResult();
      return result.browser.name + ' ' + result.browser.version + ' in ' + result.os.name + ' ' + result.os.version;
    },

    commentClass() {
      let isChild = this.isChild ? ' ' : ' index-1';
      return ' li-comment-' + this.comment.id + isChild;
    }

  },
  methods: {
    handleHighlightParent(highlight) {
      const shadowRoot = document.getElementById(this.targetId + '').shadowRoot;

      if (!shadowRoot) {
        return;
      }

      const commentRef = shadowRoot.getElementById(`comment-${this.parent.id}`);

      if (commentRef) {
        const classList = commentRef.classList;
        highlight ? classList.add('comment-ref') : classList.remove('comment-ref');
      }
    }

  }
});
;// CONCATENATED MODULE: ./src/components/CommentNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentNodevue_type_script_lang_js_ = (CommentNodevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/CommentNode.vue





/* normalize component */
;
var CommentNode_component = normalizeComponent(
  components_CommentNodevue_type_script_lang_js_,
  CommentNodevue_type_template_id_cdceeca6_render,
  CommentNodevue_type_template_id_cdceeca6_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var CommentNode = (CommentNode_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CommentLoading.vue?vue&type=template&id=18c7d94b&
var CommentLoadingvue_type_template_id_18c7d94b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-loader-container"},[(_vm.configs.loadingStyle === 'default')?_c('div',{staticClass:"comment-loader-default"},[_c('span'),_c('span'),_c('span'),_c('span')]):(_vm.configs.loadingStyle === 'circle')?_c('div',{staticClass:"comment-loader-circle"}):(_vm.configs.loadingStyle === 'balls')?_c('div',{staticClass:"comment-loader-balls"},[_c('div'),_c('div'),_c('div')]):_vm._e()])}
var CommentLoadingvue_type_template_id_18c7d94b_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.70.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2a0488f1a2617d8b852acb55a592e611/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CommentLoading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentLoadingvue_type_script_lang_js_ = ({
  name: 'CommentLoading',
  props: {
    configs: {
      type: Object,
      required: true
    }
  }
});
;// CONCATENATED MODULE: ./src/components/CommentLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentLoadingvue_type_script_lang_js_ = (CommentLoadingvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/CommentLoading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(4119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CommentLoading_component = normalizeComponent(
  components_CommentLoadingvue_type_script_lang_js_,
  CommentLoadingvue_type_template_id_18c7d94b_render,
  CommentLoadingvue_type_template_id_18c7d94b_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var CommentLoading = (CommentLoading_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Pagination.vue?vue&type=template&id=5be51f7a&
var Paginationvue_type_template_id_5be51f7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-page"},[_c('ul',{staticClass:"page"},[_c('li',{staticClass:"page-item",class:{ disabled: !_vm.hasPrev }},[_c('button',{staticClass:"prev-button",attrs:{"tabindex":"-1"},on:{"click":_vm.handlePrevClick}},[_vm._v("上一页")])]),(_vm.firstPage != null)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.firstPage }},[_c('button',{class:{ active: _vm.page === _vm.firstPage },on:{"click":function($event){return _vm.handlePageItemClick(_vm.firstPage)}}},[_vm._v(" "+_vm._s(_vm.firstPage + 1)+" ")])]):_vm._e(),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMorePrev),expression:"hasMorePrev"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),_vm._l((_vm.middlePages),function(middlePage){return _c('li',{key:middlePage,staticClass:"page-item",class:{ active: middlePage === _vm.page }},[_c('button',{class:{ active: middlePage === _vm.page },on:{"click":function($event){return _vm.handlePageItemClick(middlePage)}}},[_vm._v(" "+_vm._s(middlePage + 1)+" ")])])}),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasMoreNext),expression:"hasMoreNext"}],staticClass:"page-item"},[_c('span',[_vm._v("...")])]),(_vm.lastPage)?_c('li',{staticClass:"page-item",class:{ active: _vm.page === _vm.lastPage }},[_c('button',{class:{ active: _vm.page === _vm.lastPage },on:{"click":function($event){return _vm.handlePageItemClick(_vm.lastPage)}}},[_vm._v(" "+_vm._s(_vm.lastPage + 1)+" ")])]):_vm._e(),_c('li',{staticClass:"page-item",class:{ disabled: !_vm.hasNext }},[_c('button',{staticClass:"next-button",on:{"click":_vm.handleNextClick}},[_vm._v("下一页")])])],2)])}
var Paginationvue_type_template_id_5be51f7a_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.70.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2a0488f1a2617d8b852acb55a592e611/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Pagination.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  name: 'Pagination',
  model: {
    prop: 'page',
    event: 'change'
  },
  props: {
    page: {
      type: Number,
      required: false,
      default: 0
    },
    size: {
      type: Number,
      required: false,
      default: 10
    },
    total: {
      type: Number,
      required: false,
      default: 0
    }
  },

  data() {
    return {
      middleSize: 3
    };
  },

  computed: {
    pages() {
      return Math.ceil(this.total / this.size);
    },

    hasNext() {
      return this.page < this.pages - 1;
    },

    hasPrev() {
      return this.page > 0;
    },

    firstPage() {
      if (this.pages === 0) {
        return null;
      }

      return 0;
    },

    hasMorePrev() {
      if (this.firstPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page >= 2 + this.middleSize / 2;
    },

    hasMoreNext() {
      if (this.lastPage === null || this.pages <= this.middleSize + 2) {
        return false;
      }

      return this.page < this.lastPage - 1 - this.middleSize / 2;
    },

    middlePages() {
      if (this.pages <= 2) {
        return [];
      }

      if (this.pages <= 2 + this.middleSize) {
        return this.range(1, this.lastPage);
      }

      const halfMiddleSize = Math.floor(this.middleSize / 2);
      let left = this.page - halfMiddleSize;
      let right = this.page + halfMiddleSize;

      if (this.page <= this.firstPage + halfMiddleSize + 1) {
        left = this.firstPage + 1;
        right = left + this.middleSize - 1;
      } else if (this.page >= this.lastPage - halfMiddleSize - 1) {
        right = this.lastPage - 1;
        left = right - this.middleSize + 1;
      }

      return this.range(left, right + 1);
    },

    lastPage() {
      if (this.pages === 0 || this.pages === 1) {
        return 0;
      }

      return this.pages - 1;
    }

  },
  methods: {
    handleNextClick() {
      if (this.hasNext) {
        this.$emit('change', this.page + 1);
      }
    },

    handlePrevClick() {
      if (this.hasPrev) {
        this.$emit('change', this.page - 1);
      }
    },

    handlePageItemClick(page) {
      this.$emit('change', page);
    },

    range(left, right) {
      if (left >= right) {
        return [];
      }

      const result = [];

      for (let i = left; i < right; i++) {
        result.push(i);
      }

      return result;
    }

  }
});
;// CONCATENATED MODULE: ./src/components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/Pagination.vue



function Pagination_injectStyles (context) {
  
  var style0 = __webpack_require__(4644)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Pagination_component = normalizeComponent(
  components_Paginationvue_type_script_lang_js_,
  Paginationvue_type_template_id_5be51f7a_render,
  Paginationvue_type_template_id_5be51f7a_staticRenderFns,
  false,
  Pagination_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Pagination = (Pagination_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BaseButton.vue?vue&type=template&id=69702e1e&
var BaseButtonvue_type_template_id_69702e1e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:_vm.classes,attrs:{"disabled":_vm.disabled,"type":"button"},on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var BaseButtonvue_type_template_id_69702e1e_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.70.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2a0488f1a2617d8b852acb55a592e611/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/BaseButton.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var BaseButtonvue_type_script_lang_js_ = ({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'md'
    },
    circle: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [`btn-${this.size}`, `btn-${this.type}`, {
        'btn-circle': this.circle
      }, {
        'btn-block': this.block
      }];
    }

  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit('click', e);
      }
    }

  }
});
;// CONCATENATED MODULE: ./src/components/BaseButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BaseButtonvue_type_script_lang_js_ = (BaseButtonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/BaseButton.vue



function BaseButton_injectStyles (context) {
  
  var style0 = __webpack_require__(8211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var BaseButton_component = normalizeComponent(
  components_BaseButtonvue_type_script_lang_js_,
  BaseButtonvue_type_template_id_69702e1e_render,
  BaseButtonvue_type_template_id_69702e1e_staticRenderFns,
  false,
  BaseButton_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var BaseButton = (BaseButton_component.exports);
;// CONCATENATED MODULE: ./src/components/index.js
// Register components
 // pro components






const _components = {
  CommentEditor: CommentEditor,
  CommentNode: CommentNode,
  CommentLoading: CommentLoading,
  Pagination: Pagination,
  BaseButton: BaseButton
};
const components = {};
Object.keys(_components).forEach(key => {
  components[key] = external_Vue_default().component(key, _components[key]);
});
/* harmony default export */ var src_components = ((/* unused pure expression or super */ null && (components)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.70.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.2.3_2a0488f1a2617d8b852acb55a592e611/node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_1f9b6d6a8c5e3033a639476f0cf6d876/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Comment.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const defaultConfig = {
  autoLoad: true,
  showUserAgent: true,
  loadingStyle: 'default',
  dark: false
};
/* harmony default export */ var Commentvue_type_script_lang_js_shadow = ({
  name: 'Comment',
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      required: false,
      default: 'post',
      validator: function (value) {
        return ['post', 'sheet', 'journal'].indexOf(value) !== -1;
      }
    },
    configs: {
      type: [Object, String],
      required: false,
      default: () => defaultConfig
    }
  },

  data() {
    return {
      list: {
        data: [],
        loading: false,
        loaded: false,
        params: {
          page: 0
        },
        pages: 0,
        total: 0,
        size: 10
      },
      options: {
        comment_gravatar_default: ''
      }
    };
  },

  computed: {
    target() {
      // pluralize it
      return `${this.type}s`;
    },

    mergedConfigs() {
      let externalConfigs = {};

      if (Object.prototype.toString.call(this.configs) === '[object String]') {
        externalConfigs = JSON.parse(this.configs);
      }

      return Object.assign(defaultConfig, externalConfigs);
    }

  },

  created() {
    this.handleGetOptions();

    if (this.mergedConfigs.autoLoad) {
      this.handleGetComments();
    }
  },

  methods: {
    async handleGetComments() {
      this.list.loading = true;
      const {
        data
      } = await api_client.comment.listAsTreeView(this.target, this.id, this.list.params);
      this.list.data = data.content;
      this.list.total = data.total;
      this.list.pages = data.pages;
      this.list.size = data.size;
      this.list.loading = false;
      this.list.loaded = true;
    },

    async handleGetOptions() {
      const {
        data
      } = await api_client.option.comment();
      this.options = data;
    },

    handlePaginationChange(page) {
      this.list.params.page = page;
      this.handleGetComments();
    }

  }
});
;// CONCATENATED MODULE: ./src/components/Comment.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Commentvue_type_script_lang_js_shadow = (Commentvue_type_script_lang_js_shadow); 
;// CONCATENATED MODULE: ./src/components/Comment.vue?shadow



function Commentshadow_injectStyles (context) {
  
  var style0 = __webpack_require__(9303)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Commentshadow_component = normalizeComponent(
  components_Commentvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  Commentshadow_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Commentshadow = (Commentshadow_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.4_d5335da69185890ffa7afaf61a23b958/node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('halo-comment', vue_wc_wrapper((external_Vue_default()), Commentshadow))
}();
/******/ })()
;