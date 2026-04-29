const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./AbstractMethod.js", "./UserAvatar.js", "./UserAvatar.css", "./AbstractMethod.css", "./AccountBlacklistClean.js", "./Header.js", "./Header.css", "./AccountBlacklists.js", "./List.js", "./constants.js", "./List.css", "./Footer.js", "./Footer.css", "./Share.js", "./story_reply_outline_24.js", "./AccountDocsClean.js", "./Checkbox.js", "./SelectionControl.js", "./SelectionControl.css", "./check_box_on_24.js", "./Checkbox.css", "./delete_24.js", "./AccountGiftsStat.js", "./HorizontalScroll.js", "./chevron_24.js", "./HorizontalScroll.css", "./Cell.js", "./Removable.js", "./useGlobalEventListener.js", "./Removable.css", "./Cell.css", "./HorizontalCell.js", "./HorizontalCell.css", "./hide_outline_24.js", "./sticker_outline_24.js", "./users_3_outline_24.js", "./AccountId.js", "./FormItem.js", "./FormItem.css", "./FormLayoutGroup.js", "./FormLayoutGroup.css", "./AccountRegDate.js", "./AccountStickersStat.js", "./AccountVotesStat.js", "./money_circle_outline_24.js", "./FollowersActivitiesAdd.js", "./ItemsList.js", "./CellButton.js", "./CellButton.css", "./SubnavigationButton.js", "./SubnavigationButton.css", "./verified_12.js", "./UsersActivities.js", "./FormStatus.js", "./FormStatus.css", "./FollowersAdd.js", "./FollowersClean.js", "./UsersClean.js", "./FilterClean.js", "./Radio.js", "./Radio.css", "./FollowersSearch.js", "./UsersSearch.js", "./NativeSelect.js", "./NativeSelect.css", "./cancel_16.js", "./CustomSelectOption.js", "./CustomSelectOption.css", "./useEnsuredControl.js", "./useNativeFormResetListener.js", "./ExportCSV.js", "./Link.js", "./Link.css", "./Textarea.js", "./Card.js", "./Card.css", "./Textarea2.js", "./Textarea.css", "./arrow_up_right_out_square_outline_12.js", "./UsersSearch.css", "./FriendsActive.js", "./FriendsActivitiesClean.js", "./FriendsAnalysis.js", "./MiniInfoCell.js", "./MiniInfoCell.css", "./WomenMen.js", "./WomenMen.css", "./search_outline_24.js", "./FriendsApp.js", "./FriendsCareer.js", "./UsersStack.js", "./UsersStack.css", "./FriendsClean.js", "./FriendsCleanById.js", "./FriendsCleanBySubscriptions.js", "./Slider.js", "./useBooleanState.js", "./Slider.css", "./FriendsGroups.js", "./FriendsHandshakes.js", "./FriendsLower.js", "./FriendsOutClean.js", "./FriendsSearch.js", "./GroupsActive.js", "./GroupsActivitiesClean.js", "./GroupsAnalysis.js", "./GroupsBirthday.js", "./CustomSelect.js", "./CustomSelect.css", "./CopyOwnersList.js", "./GroupsBlacklistClean.js", "./GroupsClean.js", "./GroupsDonut.js", "./GroupsDonutMembers.js", "./Line.js", "./Line.css", "./GroupsElite.js", "./TabsList.js", "./useTabsNavigation.js", "./TabsList.css", "./GroupsFollowersClean.js", "./SegmentedControl.js", "./SegmentedControl.css", "./GroupsFollowersDonutSearch.js", "./GroupsFollowersSearch.js", "./GroupsFriends.js", "./GroupsPoll.js", "./GroupsSyncDonutGroups.js", "./MessagesChatsReturn.js", "./MessagesClean.js", "./MessagesDialogsCount.js", "./MessagesDownloadAttachments.js", "./jszip.min.js", "./DialogsList.js", "./MessagesRead.js", "./MessagesStat.js", "./MessagesStatCommon.js", "./Activity.js", "./Activity.css", "./PhotosClean.js", "./PhotosDownloadAlbum.js", "./PhotosStat.js", "./like_outline_28.js", "./PhotosTags.js", "./PhotosTags.css", "./StoriesClean.js", "./Attachments.js", "./StoriesDownload.js", "./StoriesStat.js", "./StoriesViewersStat.js", "./VideosClean.js", "./WallAnalysis.js", "./clear_16.js", "./WallAnalysis.css", "./WallCheckPost.js", "./WallClean.js", "./WallCleanNoFilters.js", "./WallCleanSnippetCache.js", "./WallContest.js", "./WallSearchMentions.js", "./Search.js", "./Search.css", "./Home.js", "./group_avatar.js", "./HomeMA.js", "./HomeMA.css"]))) => i.map(i => d[i]);
var b5 = Object.defineProperty;
var Qp = e => {
	throw TypeError(e)
};
var C5 = (e, t, n) => t in e ? b5(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n;
var qe = (e, t, n) => C5(e, typeof t != "symbol" ? t + "" : t, n),
	bf = (e, t, n) => t.has(e) || Qp("Cannot " + n);
var Q = (e, t, n) => (bf(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
	$e = (e, t, n) => t.has(e) ? Qp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
	je = (e, t, n, r) => (bf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
	Zt = (e, t, n) => (bf(e, t, "access private method"), n);
var Dc = (e, t, n, r) => ({
	set _(o) {
		je(e, t, o, n)
	},
	get _() {
		return Q(e, t, r)
	}
});
(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
	new MutationObserver(o => {
		for (const i of o)
			if (i.type === "childList")
				for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
	}).observe(document, {
		childList: !0,
		subtree: !0
	});

	function n(o) {
		const i = {};
		return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
	}

	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i)
	}
})();
var pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ci(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var p_ = {
		exports: {}
	},
	He = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nc = Symbol.for("react.element"),
	E5 = Symbol.for("react.portal"),
	A5 = Symbol.for("react.fragment"),
	I5 = Symbol.for("react.strict_mode"),
	P5 = Symbol.for("react.profiler"),
	O5 = Symbol.for("react.provider"),
	M5 = Symbol.for("react.context"),
	j5 = Symbol.for("react.forward_ref"),
	T5 = Symbol.for("react.suspense"),
	R5 = Symbol.for("react.memo"),
	N5 = Symbol.for("react.lazy"),
	Zp = Symbol.iterator;

function L5(e) {
	return e === null || typeof e != "object" ? null : (e = Zp && e[Zp] || e["@@iterator"], typeof e == "function" ? e : null)
}
var m_ = {
		isMounted: function() {
			return !1
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	},
	v_ = Object.assign,
	__ = {};

function Aa(e, t, n) {
	this.props = e, this.context = t, this.refs = __, this.updater = n || m_
}
Aa.prototype.isReactComponent = {};
Aa.prototype.setState = function(e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	this.updater.enqueueSetState(this, e, t, "setState")
};
Aa.prototype.forceUpdate = function(e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function g_() {}
g_.prototype = Aa.prototype;

function Kh(e, t, n) {
	this.props = e, this.context = t, this.refs = __, this.updater = n || m_
}
var Uh = Kh.prototype = new g_;
Uh.constructor = Kh;
v_(Uh, Aa.prototype);
Uh.isPureReactComponent = !0;
var Jp = Array.isArray,
	y_ = Object.prototype.hasOwnProperty,
	Yh = {
		current: null
	},
	w_ = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function x_(e, t, n) {
	var r, o = {},
		i = null,
		a = null;
	if (t != null)
		for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) y_.call(t, r) && !w_.hasOwnProperty(r) && (o[r] = t[r]);
	var c = arguments.length - 2;
	if (c === 1) o.children = n;
	else if (1 < c) {
		for (var d = Array(c), f = 0; f < c; f++) d[f] = arguments[f + 2];
		o.children = d
	}
	if (e && e.defaultProps)
		for (r in c = e.defaultProps, c) o[r] === void 0 && (o[r] = c[r]);
	return {
		$$typeof: nc,
		type: e,
		key: i,
		ref: a,
		props: o,
		_owner: Yh.current
	}
}

function D5(e, t) {
	return {
		$$typeof: nc,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner
	}
}

function qh(e) {
	return typeof e == "object" && e !== null && e.$$typeof === nc
}

function B5(e) {
	var t = {
		"=": "=0",
		":": "=2"
	};
	return "$" + e.replace(/[=:]/g, function(n) {
		return t[n]
	})
}
var e2 = /\/+/g;

function Cf(e, t) {
	return typeof e == "object" && e !== null && e.key != null ? B5("" + e.key) : t.toString(36)
}

function au(e, t, n, r, o) {
	var i = typeof e;
	(i === "undefined" || i === "boolean") && (e = null);
	var a = !1;
	if (e === null) a = !0;
	else switch (i) {
		case "string":
		case "number":
			a = !0;
			break;
		case "object":
			switch (e.$$typeof) {
				case nc:
				case E5:
					a = !0
			}
	}
	if (a) return a = e, o = o(a), e = r === "" ? "." + Cf(a, 0) : r, Jp(o) ? (n = "", e != null && (n = e.replace(e2, "$&/") + "/"), au(o, t, n, "", function(f) {
		return f
	})) : o != null && (qh(o) && (o = D5(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(e2, "$&/") + "/") + e)), t.push(o)), 1;
	if (a = 0, r = r === "" ? "." : r + ":", Jp(e))
		for (var c = 0; c < e.length; c++) {
			i = e[c];
			var d = r + Cf(i, c);
			a += au(i, t, n, d, o)
		} else if (d = L5(e), typeof d == "function")
			for (e = d.call(e), c = 0; !(i = e.next()).done;) i = i.value, d = r + Cf(i, c++), a += au(i, t, n, d, o);
		else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
	return a
}

function Bc(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return au(e, r, "", "", function(i) {
		return t.call(n, i, o++)
	}), r
}

function z5(e) {
	if (e._status === -1) {
		var t = e._result;
		t = t(), t.then(function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
		}, function(n) {
			(e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
		}), e._status === -1 && (e._status = 0, e._result = t)
	}
	if (e._status === 1) return e._result.default;
	throw e._result
}
var vn = {
		current: null
	},
	lu = {
		transition: null
	},
	$5 = {
		ReactCurrentDispatcher: vn,
		ReactCurrentBatchConfig: lu,
		ReactCurrentOwner: Yh
	};

function S_() {
	throw Error("act(...) is not supported in production builds of React.")
}
He.Children = {
	map: Bc,
	forEach: function(e, t, n) {
		Bc(e, function() {
			t.apply(this, arguments)
		}, n)
	},
	count: function(e) {
		var t = 0;
		return Bc(e, function() {
			t++
		}), t
	},
	toArray: function(e) {
		return Bc(e, function(t) {
			return t
		}) || []
	},
	only: function(e) {
		if (!qh(e)) throw Error("React.Children.only expected to receive a single React element child.");
		return e
	}
};
He.Component = Aa;
He.Fragment = A5;
He.Profiler = P5;
He.PureComponent = Kh;
He.StrictMode = I5;
He.Suspense = T5;
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $5;
He.act = S_;
He.cloneElement = function(e, t, n) {
	if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
	var r = v_({}, e.props),
		o = e.key,
		i = e.ref,
		a = e._owner;
	if (t != null) {
		if (t.ref !== void 0 && (i = t.ref, a = Yh.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
		for (d in t) y_.call(t, d) && !w_.hasOwnProperty(d) && (r[d] = t[d] === void 0 && c !== void 0 ? c[d] : t[d])
	}
	var d = arguments.length - 2;
	if (d === 1) r.children = n;
	else if (1 < d) {
		c = Array(d);
		for (var f = 0; f < d; f++) c[f] = arguments[f + 2];
		r.children = c
	}
	return {
		$$typeof: nc,
		type: e.type,
		key: o,
		ref: i,
		props: r,
		_owner: a
	}
};
He.createContext = function(e) {
	return e = {
		$$typeof: M5,
		_currentValue: e,
		_currentValue2: e,
		_threadCount: 0,
		Provider: null,
		Consumer: null,
		_defaultValue: null,
		_globalName: null
	}, e.Provider = {
		$$typeof: O5,
		_context: e
	}, e.Consumer = e
};
He.createElement = x_;
He.createFactory = function(e) {
	var t = x_.bind(null, e);
	return t.type = e, t
};
He.createRef = function() {
	return {
		current: null
	}
};
He.forwardRef = function(e) {
	return {
		$$typeof: j5,
		render: e
	}
};
He.isValidElement = qh;
He.lazy = function(e) {
	return {
		$$typeof: N5,
		_payload: {
			_status: -1,
			_result: e
		},
		_init: z5
	}
};
He.memo = function(e, t) {
	return {
		$$typeof: R5,
		type: e,
		compare: t === void 0 ? null : t
	}
};
He.startTransition = function(e) {
	var t = lu.transition;
	lu.transition = {};
	try {
		e()
	} finally {
		lu.transition = t
	}
};
He.unstable_act = S_;
He.useCallback = function(e, t) {
	return vn.current.useCallback(e, t)
};
He.useContext = function(e) {
	return vn.current.useContext(e)
};
He.useDebugValue = function() {};
He.useDeferredValue = function(e) {
	return vn.current.useDeferredValue(e)
};
He.useEffect = function(e, t) {
	return vn.current.useEffect(e, t)
};
He.useId = function() {
	return vn.current.useId()
};
He.useImperativeHandle = function(e, t, n) {
	return vn.current.useImperativeHandle(e, t, n)
};
He.useInsertionEffect = function(e, t) {
	return vn.current.useInsertionEffect(e, t)
};
He.useLayoutEffect = function(e, t) {
	return vn.current.useLayoutEffect(e, t)
};
He.useMemo = function(e, t) {
	return vn.current.useMemo(e, t)
};
He.useReducer = function(e, t, n) {
	return vn.current.useReducer(e, t, n)
};
He.useRef = function(e) {
	return vn.current.useRef(e)
};
He.useState = function(e) {
	return vn.current.useState(e)
};
He.useSyncExternalStore = function(e, t, n) {
	return vn.current.useSyncExternalStore(e, t, n)
};
He.useTransition = function() {
	return vn.current.useTransition()
};
He.version = "18.3.1";
p_.exports = He;
var P = p_.exports;
const ua = ci(P),
	ei = {
		"-sizeX--compact-mq": "_-sizeX--compact-mq_145km_16",
		"-sizeX--regular-mq": "_-sizeX--regular-mq_145km_23",
		"-sizeY--compact-mq": "_-sizeY--compact-mq_145km_32",
		"-sizeY--regular-mq": "_-sizeY--regular-mq_145km_39",
		"-viewWidth--tabletMinus-mq": "_-viewWidth--tabletMinus-mq_145km_48",
		"-viewWidth--tabletPlus-mq": "_-viewWidth--tabletPlus-mq_145km_55",
		"-deviceType--mobile-mq": "_-deviceType--mobile-mq_145km_64",
		"-deviceType--desktop-mq": "_-deviceType--desktop-mq_145km_71"
	},
	ku = {
		"-focus-visible": "_-focus-visible_10wo7_5",
		"-focus-visible--mode-outside": "_-focus-visible--mode-outside_10wo7_16",
		"-focus-visible--mode-inside": "_-focus-visible--mode-inside_10wo7_20",
		"-focus-visible--focused": "_-focus-visible--focused_10wo7_24"
	},
	Bt = {
		"-row-gap--2xs": "_-row-gap--2xs_5p9mb_3",
		"-row-gap--xs": "_-row-gap--xs_5p9mb_7",
		"-row-gap--s": "_-row-gap--s_5p9mb_11",
		"-row-gap--m": "_-row-gap--m_5p9mb_15",
		"-row-gap--l": "_-row-gap--l_5p9mb_19",
		"-row-gap--xl": "_-row-gap--xl_5p9mb_23",
		"-row-gap--2xl": "_-row-gap--2xl_5p9mb_27",
		"-row-gap--3xl": "_-row-gap--3xl_5p9mb_31",
		"-row-gap--4xl": "_-row-gap--4xl_5p9mb_35",
		"-column-gap--2xs": "_-column-gap--2xs_5p9mb_41",
		"-column-gap--xs": "_-column-gap--xs_5p9mb_45",
		"-column-gap--s": "_-column-gap--s_5p9mb_49",
		"-column-gap--m": "_-column-gap--m_5p9mb_53",
		"-column-gap--l": "_-column-gap--l_5p9mb_57",
		"-column-gap--xl": "_-column-gap--xl_5p9mb_61",
		"-column-gap--2xl": "_-column-gap--2xl_5p9mb_65",
		"-column-gap--3xl": "_-column-gap--3xl_5p9mb_69",
		"-column-gap--4xl": "_-column-gap--4xl_5p9mb_73"
	};
var k_ = {
		exports: {}
	},
	pd = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F5 = P,
	V5 = Symbol.for("react.element"),
	H5 = Symbol.for("react.fragment"),
	W5 = Object.prototype.hasOwnProperty,
	K5 = F5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	U5 = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};

function b_(e, t, n) {
	var r, o = {},
		i = null,
		a = null;
	n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
	for (r in t) W5.call(t, r) && !U5.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps)
		for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
	return {
		$$typeof: V5,
		type: e,
		key: i,
		ref: a,
		props: o,
		_owner: K5.current
	}
}
pd.Fragment = H5;
pd.jsx = b_;
pd.jsxs = b_;
k_.exports = pd;
var u = k_.exports,
	Fn = function() {
		return !!(typeof window < "u" && window.document && window.document.createElement)
	}();

function t2(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
	return r
}

function Y5(e, t) {
	if (e) {
		if (typeof e == "string") return t2(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t2(e, t)
	}
}

function cu(e) {
	"@swc/helpers - typeof";
	return e && typeof Symbol < "u" && e.constructor === Symbol ? "symbol" : typeof e
}

function q5(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : typeof window < "u" ? window : void 0,
		r, o, i = function() {
			return e.apply(n, o)
		},
		a = function() {
			for (var c = arguments.length, d = new Array(c), f = 0; f < c; f++) d[f] = arguments[f];
			o = d, clearTimeout(r), r = setTimeout(i, t)
		};
	return a.cancel = function() {
		clearTimeout(r)
	}, a
}

function G5(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50,
		n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : typeof window < "u" ? window : void 0,
		r = Date.now() - t,
		o, i = function() {
			for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
			var f = r + t - Date.now();
			if (clearTimeout(o), f > 0) {
				o = setTimeout(function() {
					r = Date.now(), e.apply(n, c)
				}, f);
				return
			}
			r = Date.now(), e.apply(n, c)
		};
	return i.cancel = function() {
		clearTimeout(o)
	}, i
}

function C_(e) {
	e || (e = Fn ? navigator.userAgent : ""), e = e.toLowerCase();
	var t = J5(e),
		n = t || e.includes("ipad"),
		r = !n && e.search(/iphone|ipod/) !== -1,
		o = r || n,
		i = o && e.match(/os ([\d_]+) like mac os x/i),
		a = 0,
		c = 0;
	t ? (a = 13, c = 0) : i && (i = i[1].split("_"), a = +i[0], c = +i[1]), i = null;
	var d = a < 13 && !(a === 11 && c < 3),
		f = o && Z5(e),
		m = !1;
	Fn && (m = o && screen.width === 375 && screen.height === 812 && window.devicePixelRatio === 3);
	var _ = e.search(/crios/i) !== -1;
	return {
		isIPad: n,
		isIPhone: r,
		isIOS: o,
		isIPadOS: t,
		iosMajor: a,
		iosMinor: c,
		isWKWebView: f,
		isScrollBasedViewport: d,
		isIPhoneX: m,
		isIOSChrome: _
	}
}
var E_ = C_(),
	X5 = function() {
		return E_.isIOS
	}(),
	Q5 = function() {
		return E_.isIPadOS
	}();

function Z5(e) {
	if (!Fn) return !1;
	var t = window.webkit;
	if (t && t.messageHandlers) return !0;
	var n = /constructor/i.test(String(window.HTMLElement)),
		r = !!window.indexedDB;
	if (!(e.includes("safari") && e.includes("version") && !navigator.standalone)) {
		if (!(!r && n || !(window.statusbar && window.statusbar.visible))) {
			if (!n || r) return !0
		}
	}
	return !1
}

function J5(e) {
	if (!Fn) return !1;
	var t = !/ipPad|iPhone|iPod/i.test(e),
		n = /Mac OS/i.test(e);
	return t && n && "ontouchend" in document
}
var A_ = function() {
		var e = {
			hasMouse: !1,
			hasTouchEvents: !1,
			hasHover: !1,
			hasTouch: !1
		};
		if (!Fn) return e;
		if (X5 && !Q5) e.hasMouse = !1, e.hasHover = !1, e.hasTouchEvents = !0, e.hasTouch = !0;
		else if (e.hasTouchEvents = "ontouchstart" in document, e.hasTouch = e.hasTouchEvents || "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0, e.hasTouch) {
			var t = !/android|mobile|tablet/i.test(navigator.userAgent);
			e.hasMouse = typeof window.matchMedia == "function" && window.matchMedia("(pointer)").matches ? matchMedia("(pointer: fine)").matches : t, e.hasHover = e.hasMouse && (typeof window.matchMedia == "function" && window.matchMedia("(hover)").matches ? matchMedia("(hover: hover)").matches : t)
		} else e.hasMouse = !0, e.hasHover = !0;
		return e
	}(),
	Gh = function() {
		return A_.hasMouse
	}(),
	e8 = function() {
		return A_.hasHover
	}();

function t8(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e
}

function I_(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object")
		if (Array.isArray(e)) {
			var o = e.length;
			for (t = 0; t < o; t++) e[t] && (n = I_(e[t])) && (r && (r += " "), r += n)
		} else
			for (n in e) e[n] && (r && (r += " "), r += n);
	return r
}

function te() {
	for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = I_(e)) && (r && (r += " "), r += t);
	return r
}
var Ie = function() {};

function Nz(e) {
	return (typeof e > "u" ? "undefined" : cu(e)) === "object" && e !== null
}

function n8(e) {
	return typeof e == "function"
}

function ti(e, t) {
	return t != null && typeof Symbol < "u" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
}

function Tr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] != null ? arguments[t] : {},
			r = Object.keys(n);
		typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(o) {
			return Object.getOwnPropertyDescriptor(n, o).enumerable
		}))), r.forEach(function(o) {
			t8(e, o, n[o])
		})
	}
	return e
}

function et(e) {
	return e !== void 0 && e !== !1 && e !== null && e !== ""
}

function Ef(e) {
	return typeof e == "string" || typeof e == "number"
}
const P_ = ["a[href]", "area[href]", 'input:not([disabled]):not([hidden]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([hidden]):not([aria-hidden])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "audio", "video", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'],
	Ve = {
		ENTER: "Enter",
		SPACE: "Space",
		TAB: "Tab",
		ESCAPE: "Escape",
		HOME: "Home",
		END: "End",
		DELETE: "Delete",
		BACKSPACE: "Backspace",
		ARROW_LEFT: "ArrowLeft",
		ARROW_RIGHT: "ArrowRight",
		ARROW_UP: "ArrowUp",
		ARROW_DOWN: "ArrowDown",
		PAGE_UP: "PageUp",
		PAGE_DOWN: "PageDown"
	},
	r8 = new Map([
		["Enter", Ve.ENTER],
		["Space", Ve.SPACE],
		["Spacebar", Ve.SPACE],
		[" ", Ve.SPACE],
		["Tab", Ve.TAB],
		["Escape", Ve.ESCAPE],
		["Delete", Ve.DELETE],
		["Backspace", Ve.BACKSPACE],
		["Home", Ve.HOME],
		["End", Ve.END],
		["ArrowLeft", Ve.ARROW_LEFT],
		["ArrowRight", Ve.ARROW_RIGHT],
		["ArrowUp", Ve.ARROW_UP],
		["ArrowDown", Ve.ARROW_DOWN],
		["PageUp", Ve.PAGE_UP],
		["PageDown", Ve.PAGE_DOWN]
	]);

function Qi(e) {
	const t = r8.get(e.key);
	return t || null
}
const o8 = new Set([Ve.TAB, Ve.ARROW_LEFT, Ve.ARROW_RIGHT, Ve.ARROW_UP, Ve.ARROW_DOWN, Ve.BACKSPACE, Ve.DELETE]);

function i8(e) {
	return o8.has(e.key)
}

function s8(e) {
	const t = e.target,
		{
			tagName: n
		} = t,
		r = t.getAttribute("role"),
		o = t.isContentEditable !== !0 && n !== "INPUT" && n !== "TEXTAREA" && (r === "button" || r === "link" || r === "menuitem"),
		i = n === "A" && t.hasAttribute("href"),
		a = Qi(e);
	return o && (a === Ve.SPACE && r === "button" || a === Ve.ENTER && !i)
}
const Lz = e => {
	switch (e) {
		case Ve.ARROW_UP:
		case Ve.ARROW_LEFT:
			return "prev";
		case Ve.ARROW_DOWN:
		case Ve.ARROW_RIGHT:
			return "next";
		case Ve.HOME:
			return "first";
		case Ve.END:
			return "last"
	}
};

function a8(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		n.push.apply(n, r)
	}
	return n
}

function Ri(e, t) {
	return t = t ?? {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a8(Object(t)).forEach(function(n) {
		Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
	}), e
}

function l8(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.getOwnPropertyNames(e),
		o, i;
	for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
	return n
}

function k1(e, t) {
	if (e == null) return {};
	var n = {},
		r, o, i;
	if (typeof Reflect < "u" && Reflect.ownKeys) {
		for (r = Reflect.ownKeys(Object(e)), i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
		return n
	}
	if (n = l8(e, t), Object.getOwnPropertySymbols)
		for (r = Object.getOwnPropertySymbols(e), i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
	return n
}
const O_ = ["top", "right", "bottom", "left"],
	n2 = ["start", "end"],
	r2 = O_.reduce((e, t) => e.concat(t, t + "-" + n2[0], t + "-" + n2[1]), []),
	ni = Math.min,
	Nn = Math.max,
	bu = Math.round,
	zc = Math.floor,
	Dr = e => ({
		x: e,
		y: e
	}),
	c8 = {
		left: "right",
		right: "left",
		bottom: "top",
		top: "bottom"
	};

function b1(e, t, n) {
	return Nn(e, ni(t, n))
}

function ui(e, t) {
	return typeof e == "function" ? e(t) : e
}

function Hr(e) {
	return e.split("-")[0]
}

function hr(e) {
	return e.split("-")[1]
}

function M_(e) {
	return e === "x" ? "y" : "x"
}

function Xh(e) {
	return e === "y" ? "height" : "width"
}

function io(e) {
	const t = e[0];
	return t === "t" || t === "b" ? "y" : "x"
}

function Qh(e) {
	return M_(io(e))
}

function j_(e, t, n) {
	n === void 0 && (n = !1);
	const r = hr(e),
		o = Qh(e),
		i = Xh(o);
	let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[i] > t.floating[i] && (a = Eu(a)), [a, Eu(a)]
}

function u8(e) {
	const t = Eu(e);
	return [Cu(e), t, Cu(t)]
}

function Cu(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
}
const o2 = ["left", "right"],
	i2 = ["right", "left"],
	d8 = ["top", "bottom"],
	f8 = ["bottom", "top"];

function h8(e, t, n) {
	switch (e) {
		case "top":
		case "bottom":
			return n ? t ? i2 : o2 : t ? o2 : i2;
		case "left":
		case "right":
			return t ? d8 : f8;
		default:
			return []
	}
}

function p8(e, t, n, r) {
	const o = hr(e);
	let i = h8(Hr(e), n === "start", r);
	return o && (i = i.map(a => a + "-" + o), t && (i = i.concat(i.map(Cu)))), i
}

function Eu(e) {
	const t = Hr(e);
	return c8[t] + e.slice(t.length)
}

function m8(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	}
}

function T_(e) {
	return typeof e != "number" ? m8(e) : {
		top: e,
		right: e,
		bottom: e,
		left: e
	}
}

function da(e) {
	const {
		x: t,
		y: n,
		width: r,
		height: o
	} = e;
	return {
		width: r,
		height: o,
		top: n,
		left: t,
		right: t + r,
		bottom: n + o,
		x: t,
		y: n
	}
}

function md() {
	return typeof window < "u"
}

function R_(e) {
	return N_(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function rr(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function v8(e) {
	var t;
	return (t = (N_(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function N_(e) {
	return md() ? ti(e, Node) || ti(e, rr(e).Node) : !1
}

function L_(e) {
	return md() ? ti(e, Element) || ti(e, rr(e).Element) : !1
}

function Zi(e) {
	return md() ? ti(e, HTMLElement) || ti(e, rr(e).HTMLElement) : !1
}

function s2(e) {
	return !md() || typeof ShadowRoot > "u" ? !1 : ti(e, ShadowRoot) || ti(e, rr(e).ShadowRoot)
}
var _8 = new Set(["inline", "contents"]);

function g8(e) {
	var t = x8(e),
		n = t.overflow,
		r = t.overflowX,
		o = t.overflowY,
		i = t.display;
	return /auto|scroll|overlay|hidden|clip/.test(n + o + r) && !_8.has(i)
}
var y8 = new Set(["html", "body", "#document"]);

function w8(e) {
	return y8.has(R_(e))
}

function x8(e) {
	return rr(e).getComputedStyle(e)
}

function Dz(e) {
	return L_(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	}
}

function S8(e) {
	if (R_(e) === "html") return e;
	var t = e.assignedSlot || e.parentNode || s2(e) && e.host || v8(e);
	return s2(t) ? t.host : t
}
const k8 = () => ({
		window: Fn ? window : void 0,
		document: Fn ? document : void 0
	}),
	b8 = P.createContext(k8()),
	_n = () => P.useContext(b8),
	D_ = e => e != null && "navigator" in e,
	C8 = e => e != null && "tagName" in e && e.tagName === "HTML";

function a2(e) {
	e && e.activeElement && e.activeElement.blur()
}
const E8 = ["none", "initial", "inherit", "unset"],
	A8 = ["auto", "initial", "inherit", "unset"];

function I8(e) {
	let t = e.parentNode;
	for (; t !== null;) {
		if (Zi(t)) {
			let {
				transform: n,
				willChange: r
			} = getComputedStyle(t);
			if (n === "" && (n = "unset"), r === "" && (r = "unset"), !E8.includes(n) || !A8.includes(r)) {
				const {
					x: o,
					y: i
				} = t.getBoundingClientRect();
				return {
					x: o,
					y: i
				}
			}
		}
		t = t.parentNode
	}
	return {
		x: 0,
		y: 0
	}
}
const C1 = (e, t = !1) => {
		const n = D_(e) ? e.document.documentElement : e,
			r = n.getBoundingClientRect();
		C8(n) && (r.height = n.clientHeight);
		let o = 0,
			i = 0;
		if (t) {
			const {
				x: a,
				y: c
			} = I8(n);
			o = a, i = c
		}
		return da({
			x: r.left - o,
			y: r.top - i,
			width: r.width,
			height: r.height
		})
	},
	P8 = (e, t) => {
		const n = C1(e),
			r = C1(t);
		return da({
			x: r.left - n.left,
			y: r.top - n.top,
			width: r.width,
			height: r.height
		})
	};

function B_(e, t) {
	const n = S8(e);
	return t === n ? null : w8(n) ? rr(n) : Zi(n) && g8(n) ? n : B_(n, t)
}
const Bz = e => D_(e) ? e.document.documentElement.scrollHeight : e.scrollHeight,
	zz = e => {
		const t = L_(e) ? rr(e) : e,
			n = C1(e),
			r = t.scrollY + n.top,
			o = r + n.height;
		return {
			relative: n,
			edges: {
				y: [r, o]
			}
		}
	},
	O8 = e => rr(e).document.body,
	Au = e => e ? e.ownerDocument.activeElement : null,
	M8 = (e, t) => e && t ? e.contains(t) : !1,
	l2 = e => {
		let t = function() {
			switch (e.type) {
				case "touchend":
					return e.changedTouches[0];
				case "touchstart":
				case "touchmove":
				case "touchcancel":
					return e.touches[0];
				case "mousedown":
				case "mousemove":
				case "mouseup":
				case "mouseleave":
					return e;
				default:
					return {
						screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0
					}
			}
		}();
		return {
			screenX: t.screenX || 0,
			screenY: t.screenY || 0,
			clientX: t.clientX || 0,
			clientY: t.clientY || 0,
			pageX: t.pageX || 0,
			pageY: t.pageY || 0
		}
	},
	j8 = {
		button: !0,
		submit: !0,
		reset: !0,
		color: !0,
		file: !0,
		image: !0,
		checkbox: !0,
		radio: !0
	},
	T8 = e => e === null ? !1 : e.tagName === "INPUT" ? !j8[e.type] : e.tagName === "TEXTAREA" || e.closest("[contenteditable=true]") !== null;

function c2(e) {
	const t = {
		offsetTop: 0,
		offsetLeft: 0,
		width: 0,
		height: 0
	};
	if (e.visualViewport) {
		const {
			offsetTop: n,
			offsetLeft: r,
			width: o,
			height: i
		} = e.visualViewport;
		return t.offsetTop = Math.round(n), t.offsetLeft = r, t.width = o, t.height = Math.round(i), t
	}
	return t.offsetTop = e.pageYOffset, t.offsetLeft = e.pageXOffset, t.width = e.innerWidth, t.height = e.innerHeight, t
}
const R8 = e => {
	const t = rr(e).getSelection();
	return t ? t.type === "Range" : !1
};

function N8(e) {
	return Fn ? e instanceof SVGElement || e instanceof rr(e).SVGElement : !1
}
const Je = Fn ? P.useLayoutEffect : P.useEffect,
	u2 = "enableKeyboardInput",
	d2 = "disableKeyboardInput",
	kr = {
		passive: !0,
		capture: !0
	};

function L8() {
	const {
		document: e
	} = _n(), t = P.useRef(!1);
	return Je(() => {
		if (!e) return;
		const n = i => {
				i8(i) && (t.current = !0)
			},
			r = () => {
				t.current = !0
			},
			o = () => {
				t.current = !1
			};
		return e.addEventListener("keydown", n, kr), e.addEventListener(u2, r, kr), e.addEventListener(d2, o, kr), e.addEventListener("mousedown", o, kr), e.addEventListener("touchstart", o, kr), () => {
			e.removeEventListener("keydown", n, kr), e.removeEventListener(u2, r, kr), e.removeEventListener(d2, o, kr), e.removeEventListener("mousedown", o, kr), e.removeEventListener("touchstart", o, kr)
		}
	}, [e]), t
}
const D8 = {
	card: "vkui--layout-card",
	plain: "vkui--layout-plain"
};

function B8({
	appRootRef: e,
	mode: t,
	enable: n,
	layout: r
}) {
	Je(() => {
		var d, f;
		if (!n) return;
		const o = (d = e.current) == null ? void 0 : d.ownerDocument.documentElement,
			i = ((f = e.current) == null ? void 0 : f.parentElement) ?? null,
			a = ["vkui"],
			c = ["vkui__root"];
		return t === "embedded" && c.push("vkui__root--embedded"), t === "full" && (r && a.push(D8[r]), o == null || o.classList.add(...a)), i == null || i.classList.add(...c), () => {
			t === "full" && (o == null || o.classList.remove(...a)), i == null || i.classList.remove(...c)
		}
	}, [t, n, r])
}
const Af = {};

function z8(e = "") {
	if (Af[e]) return Af[e];
	const t = {
			userAgent: e,
			system: "",
			systemVersion: null
		},
		{
			isIOS: n,
			iosMajor: r,
			iosMinor: o
		} = C_(e);
	return n && (t.system = "ios", t.systemVersion = {
		major: r,
		minor: o
	}), Af[e] = t, t
}

function $8(e) {
	return {
		matches: !1,
		media: e,
		onchange: Ie,
		addListener: Ie,
		removeListener: Ie,
		addEventListener: Ie,
		removeEventListener: Ie,
		dispatchEvent() {
			return !1
		}
	}
}
const Dn = {
	ANDROID: "android",
	IOS: "ios",
	VKCOM: "vkcom"
};

function F8(e) {
	return e || (e = z8()), e.system === "ios" ? "ios" : "android"
}
const z_ = {
		android: {
			light: "vkui--vkBase--light",
			dark: "vkui--vkBase--dark"
		},
		ios: {
			light: "vkui--vkIOS--light",
			dark: "vkui--vkIOS--dark"
		},
		vkcom: {
			light: "vkui--vkCom--light",
			dark: "vkui--vkCom--dark"
		}
	},
	vd = P.createContext({
		hasCustomPanelHeaderAfter: !1,
		customPanelHeaderAfterMinWidth: 90,
		isWebView: !1,
		transitionMotionEnabled: !0,
		platform: F8(),
		colorScheme: void 0,
		tokensClassNames: z_,
		locale: "ru",
		direction: void 0
	}),
	go = () => P.useContext(vd);

function $_(e) {
	const {
		isWebView: t,
		hasCustomPanelHeaderAfter: n,
		customPanelHeaderAfterMinWidth: r,
		colorScheme: o,
		transitionMotionEnabled: i,
		platform: a,
		tokensClassNames: c,
		locale: d,
		direction: f
	} = e;
	return P.useMemo(() => ({
		isWebView: t,
		hasCustomPanelHeaderAfter: n,
		customPanelHeaderAfterMinWidth: r,
		colorScheme: o,
		transitionMotionEnabled: i,
		platform: a,
		tokensClassNames: c,
		locale: d,
		direction: f
	}), [t, n, r, o, i, a, c, d, f])
}
const F_ = "light",
	If = {
		DARK: "dark",
		LIGHT: "light"
	},
	V8 = e => Dn.ANDROID in e || Dn.IOS in e || Dn.VKCOM in e,
	H8 = (e, t) => t ? t[e] : void 0,
	W8 = (e, t) => t ? t[e] : void 0,
	Zh = () => {
		const {
			platform: e,
			colorScheme: t = F_,
			tokensClassNames: n
		} = P.useContext(vd), r = V8(n) ? W8(e, n) : n, o = H8(t, r);
		return o || z_[e][t]
	};

function K8({
	appRootRef: e,
	enable: t
}) {
	const n = Zh();
	Je(() => {
		var o;
		if (!t) return;
		const r = (o = e.current) == null ? void 0 : o.ownerDocument.documentElement;
		return r == null || r.classList.add(n), () => {
			r == null || r.classList.remove(n)
		}
	}, [n])
}
const U8 = {
		appRoot: P.createRef(),
		mode: "full",
		portalRoot: null,
		safeAreaInsets: void 0,
		embedded: !1,
		keyboardInput: !1,
		disablePortal: !1
	},
	ri = P.createContext(U8),
	rc = P.createContext({}),
	Et = () => P.useContext(rc);

function fo(e, t) {
	return e && t ? {
		...e,
		...t
	} : e || t
}
const Y8 = "_host_8wshc_1",
	q8 = "_hidden_8wshc_2",
	f2 = {
		host: Y8,
		hidden: q8
	},
	We = ({
		Component: e = "div",
		baseClassName: t,
		className: n,
		baseStyle: r,
		style: o,
		getRootRef: i,
		...a
	}) => u.jsx(e, {
		ref: i,
		className: te(n, t, f2.host, a.hidden === !0 && f2.hidden),
		style: fo(r, o),
		...a
	}),
	Iu = e => typeof e == "object" && e !== null && e.hasOwnProperty("current"),
	G8 = "_host_1dphl_8",
	X8 = "_sizeYCompact_1dphl_16",
	Q8 = "_sizeYNone_1dphl_20",
	Z8 = "_userSelectNone_1dphl_24",
	J8 = "_pointerNone_1dphl_39",
	e6 = "_embedded_1dphl_51",
	Ho = {
		host: G8,
		sizeYCompact: X8,
		sizeYNone: Q8,
		userSelectNone: Z8,
		pointerNone: J8,
		embedded: e6
	},
	t6 = "--vkui_internal--safe_area_inset_";

function n6(e) {
	const {
		top: t,
		right: n,
		bottom: r,
		left: o
	} = e ?? {};
	return P.useMemo(() => ({
		top: t,
		right: n,
		bottom: r,
		left: o
	}), [t, n, r, o])
}

function r6(e) {
	if (!e) return {};
	const t = {};
	for (const n in e)
		if (e.hasOwnProperty(n) && typeof e[n] == "number") {
			const r = `${t6}${n}`,
				o = e[n];
			t[r] = `${o}px`
		} return t
}

function o6({
	userSelectMode: e,
	isWebView: t,
	hasPointer: n
}) {
	switch (e) {
		case "enabled-with-pointer":
			return n ? null : n === void 0 ? Ho.pointerNone : Ho.userSelectNone;
		case "disabled":
			return Ho.userSelectNone;
		case "enabled":
			return null;
		default:
			return t ? Ho.userSelectNone : null
	}
}
const i6 = {
	none: Ho.sizeYNone,
	compact: Ho.sizeYCompact
};

function s6() {
	const {
		safeAreaInsets: e,
		mode: t,
		userSelectMode: n
	} = P.useContext(ri), {
		hasPointer: r,
		sizeY: o = "none"
	} = Et(), {
		isWebView: i
	} = go(), a = o6({
		userSelectMode: n,
		isWebView: i,
		hasPointer: r
	}), c = Zh();
	return {
		style: e ? r6(e) : void 0,
		className: te(Ho.host, t === "embedded" && Ho.embedded, o !== "regular" && i6[o], a, c)
	}
}

function V_(e) {
	const {
		style: t,
		className: n
	} = s6();
	return u.jsx(We, {
		baseClassName: n,
		baseStyle: t,
		...e
	})
}
const fa = (e, t, n) => Math.max(t, Math.min(e, n));

function a6(e) {
	if (Math.abs(e) < 1) {
		const n = e.toExponential().split("e-"),
			r = n[0].split(".")[1];
		return (r ? r.length : 0) + parseInt(n[1], 10)
	}
	const t = e.toString().split(".")[1];
	return t ? t.length : 0
}

function l6(e, t, n) {
	const r = Math.round((e - n) / t) * t + n;
	return Number(r.toFixed(a6(t)))
}

function c6(e, t, n, r) {
	if (r == null || r <= 0) return fa(e, t, n);
	const o = l6(e, r, t);
	return fa(o, t, n)
}

function $z(e, t, n, r = {}) {
	const o = (e - t[0]) / (t[1] - t[0]) * (n[1] - n[0]) + n[0];
	return c6(o, n[0], n[1], r.step)
}
const H_ = e => {
		Object.assign(e.style, {
			position: "",
			top: "",
			left: "",
			right: "",
			overscrollBehavior: "",
			overflowY: "",
			overflowX: ""
		})
	},
	u6 = (e, t) => {
		const n = e.document.documentElement.clientHeight - e.innerHeight;
		return t - n
	},
	Jh = P.createContext({
		getScroll: () => ({
			x: 0,
			y: 0
		}),
		scrollTo: Ie,
		incrementScrollLockCounter: Ie,
		decrementScrollLockCounter: Ie
	}),
	W_ = () => P.useContext(Jh);

function K_(e, t) {
	const n = P.useRef(0),
		r = P.useCallback(() => {
			n.current > 0 ? e() : t()
		}, [e, t]),
		o = P.useCallback(() => {
			n.current += 1, r()
		}, [r]),
		i = P.useCallback(() => {
			n.current -= 1, r()
		}, [r]);
	return [o, i]
}
const U_ = ({
		x: e,
		y: t,
		scrollWidth: n,
		clientWidth: r,
		scrollHeight: o,
		clientHeight: i,
		scrollLockEnabled: a,
		lockedElement: c,
		elementToScroll: d
	}) => {
		const f = e ? fa(e, 0, n - r) : 0,
			m = t ? fa(t, 0, o - i) : 0;
		a ? Object.assign(c.style, {
			left: `-${f}px`,
			top: `-${m}px`
		}) : d.scrollTo({
			left: f,
			top: m
		})
	},
	Y_ = ({
		xOffset: e,
		yOffset: t,
		element: n,
		scrollLockEnabled: r,
		customCalcY: o = i => i
	}) => {
		const i = n.style,
			[a, c] = r ? [-parseFloat(i.left || "0"), -parseFloat(i.top || "0")] : [e, t];
		return {
			x: a || 0,
			y: o(c) || 0
		}
	},
	d6 = ({
		children: e
	}) => {
		const {
			window: t,
			document: n
		} = _n(), r = P.useRef(new Set), o = P.useRef(!1), i = P.useCallback((v = {
			compensateKeyboardHeight: !0
		}) => !t || !n ? {
			x: 0,
			y: 0
		} : Y_({
			xOffset: t.pageXOffset,
			yOffset: t.pageYOffset,
			element: n.documentElement,
			scrollLockEnabled: o.current,
			customCalcY: x => v.compensateKeyboardHeight ? u6(t, x) : x
		}), [n, t]), a = P.useCallback((v = 0, x = 0) => {
			!t || !n || U_({
				x: v,
				y: x,
				scrollWidth: n.body.scrollWidth,
				clientWidth: t.innerWidth,
				scrollHeight: n.body.scrollHeight,
				clientHeight: t.innerHeight,
				scrollLockEnabled: o.current,
				lockedElement: n.documentElement,
				elementToScroll: t
			})
		}, [n, t]), c = P.useCallback(() => {
			r.current.forEach(C => {
				C()
			});
			const {
				x: v,
				y: x
			} = i({
				compensateKeyboardHeight: !1
			}), k = t.innerWidth > n.documentElement.clientWidth ? "scroll" : "", A = t.innerHeight > n.documentElement.clientHeight ? "scroll" : "";
			Object.assign(n.documentElement.style, {
				position: "fixed",
				top: `-${x}px`,
				left: `-${v}px`,
				right: "0",
				overscrollBehavior: "none",
				overflowY: k,
				overflowX: A
			}), o.current = !0
		}, [n, i, t]), d = P.useCallback(() => {
			const v = i({
				compensateKeyboardHeight: !1
			});
			H_(n.documentElement), o.current = !1, a(v.x, v.y)
		}, [n, i, a]), [f, m] = K_(c, d), _ = P.useMemo(() => ({
			getScroll: i,
			scrollTo: a,
			incrementScrollLockCounter: f,
			decrementScrollLockCounter: m,
			beforeScrollLockFnSetRef: r
		}), [i, a, f, m]);
		return u.jsx(Jh.Provider, {
			value: _,
			children: e
		})
	},
	f6 = ({
		elRef: e,
		children: t
	}) => {
		const n = P.useRef(new Set),
			r = P.useRef(!1),
			o = P.useCallback(() => {
				const _ = e.current;
				return _ ? Y_({
					xOffset: _.scrollLeft,
					yOffset: _.scrollTop,
					element: _,
					scrollLockEnabled: r.current
				}) : {
					x: 0,
					y: 0
				}
			}, [e]),
			i = P.useCallback((_ = 0, v = 0) => {
				const x = e.current;
				x && U_({
					x: _,
					y: v,
					scrollWidth: x.scrollWidth,
					clientWidth: x.clientWidth,
					scrollHeight: x.scrollHeight,
					clientHeight: x.clientHeight,
					scrollLockEnabled: r.current,
					lockedElement: x,
					elementToScroll: x
				})
			}, [e]),
			a = P.useCallback(() => {
				const _ = e.current;
				if (!_) return;
				n.current.forEach(C => {
					C()
				});
				const {
					x: v,
					y: x
				} = o(), k = _.scrollWidth > _.clientWidth ? "scroll" : "", A = _.scrollHeight > _.clientHeight ? "scroll" : "";
				Object.assign(_.style, {
					position: "absolute",
					right: "0",
					top: `-${x}px`,
					left: `-${v}px`,
					overflowY: k,
					overflowX: A
				}), r.current = !0
			}, [e, o]),
			c = P.useCallback(() => {
				const _ = e.current;
				if (!_) return;
				const v = o();
				H_(_), r.current = !1, i(v.x, v.y)
			}, [e, o, i]),
			[d, f] = K_(a, c),
			m = P.useMemo(() => ({
				getScroll: o,
				scrollTo: i,
				incrementScrollLockCounter: d,
				decrementScrollLockCounter: f,
				beforeScrollLockFnSetRef: n
			}), [o, i, d, f]);
		return u.jsx(Jh.Provider, {
			value: m,
			children: t
		})
	},
	oc = (e = !0) => {
		const {
			incrementScrollLockCounter: t,
			decrementScrollLockCounter: n
		} = W_();
		P.useEffect(() => e ? (t(), n) : Ie, [e, t, n])
	},
	h6 = "_host_1sdmp_1",
	p6 = "_layoutCard_1sdmp_10",
	m6 = "_layoutPlain_1sdmp_14",
	v6 = "_transformForPositionFixedElements_1sdmp_18",
	Pu = {
		host: h6,
		layoutCard: p6,
		layoutPlain: m6,
		transformForPositionFixedElements: v6
	},
	_6 = {
		card: Pu.layoutCard,
		plain: Pu.layoutPlain
	},
	g6 = ({
		children: e,
		mode: t = "full",
		scroll: n = "global",
		portalRoot: r,
		disablePortal: o = !1,
		disableParentTransformForPositionFixedElements: i,
		safeAreaInsets: a,
		layout: c,
		userSelectMode: d,
		disableSettingVKUIClassesInRuntime: f,
		className: m,
		..._
	}) => {
		const v = P.useRef(null),
			x = L8(),
			k = n6(a),
			A = P.useMemo(() => ({
				appRoot: v,
				portalRoot: r,
				safeAreaInsets: k,
				embedded: t === "embedded",
				mode: t,
				disablePortal: o,
				layout: c,
				get keyboardInput() {
					return x.current
				},
				userSelectMode: d
			}), [r, o, x, c, t, k, d]);
		K8({
			appRootRef: v,
			enable: t === "full"
		}), B8({
			appRootRef: v,
			mode: t,
			layout: c,
			enable: t !== "partial" && !f
		});
		const C = P.useMemo(() => n === "contain" ? f6 : d6, [n]);
		return t === "partial" ? u.jsx(ri.Provider, {
			value: A,
			children: u.jsx(C, {
				elRef: v,
				children: e
			})
		}) : u.jsx(ri.Provider, {
			value: A,
			children: u.jsx(V_, {
				getRootRef: v,
				className: te(m, Pu.host, c && _6[c], t === "embedded" && !i ? Pu.transformForPositionFixedElements : void 0),
				..._,
				children: u.jsx(C, {
					elRef: v,
					children: e
				})
			})
		})
	};

function q_() {
	const {
		colorScheme: e
	} = go();
	return e ?? F_
}
var G_ = {
		exports: {}
	},
	Wn = {},
	X_ = {
		exports: {}
	},
	Q_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
	function t(z, W) {
		var K = z.length;
		z.push(W);
		e: for (; 0 < K;) {
			var ie = K - 1 >>> 1,
				le = z[ie];
			if (0 < o(le, W)) z[ie] = W, z[K] = le, K = ie;
			else break e
		}
	}

	function n(z) {
		return z.length === 0 ? null : z[0]
	}

	function r(z) {
		if (z.length === 0) return null;
		var W = z[0],
			K = z.pop();
		if (K !== W) {
			z[0] = K;
			e: for (var ie = 0, le = z.length, _e = le >>> 1; ie < _e;) {
				var Ee = 2 * (ie + 1) - 1,
					Re = z[Ee],
					Oe = Ee + 1,
					Ae = z[Oe];
				if (0 > o(Re, K)) Oe < le && 0 > o(Ae, Re) ? (z[ie] = Ae, z[Oe] = K, ie = Oe) : (z[ie] = Re, z[Ee] = K, ie = Ee);
				else if (Oe < le && 0 > o(Ae, K)) z[ie] = Ae, z[Oe] = K, ie = Oe;
				else break e
			}
		}
		return W
	}

	function o(z, W) {
		var K = z.sortIndex - W.sortIndex;
		return K !== 0 ? K : z.id - W.id
	}
	if (typeof performance == "object" && typeof performance.now == "function") {
		var i = performance;
		e.unstable_now = function() {
			return i.now()
		}
	} else {
		var a = Date,
			c = a.now();
		e.unstable_now = function() {
			return a.now() - c
		}
	}
	var d = [],
		f = [],
		m = 1,
		_ = null,
		v = 3,
		x = !1,
		k = !1,
		A = !1,
		C = typeof setTimeout == "function" ? setTimeout : null,
		y = typeof clearTimeout == "function" ? clearTimeout : null,
		w = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

	function b(z) {
		for (var W = n(f); W !== null;) {
			if (W.callback === null) r(f);
			else if (W.startTime <= z) r(f), W.sortIndex = W.expirationTime, t(d, W);
			else break;
			W = n(f)
		}
	}

	function O(z) {
		if (A = !1, b(z), !k)
			if (n(d) !== null) k = !0, X(L);
			else {
				var W = n(f);
				W !== null && re(O, W.startTime - z)
			}
	}

	function L(z, W) {
		k = !1, A && (A = !1, y(q), q = -1), x = !0;
		var K = v;
		try {
			for (b(W), _ = n(d); _ !== null && (!(_.expirationTime > W) || z && !oe());) {
				var ie = _.callback;
				if (typeof ie == "function") {
					_.callback = null, v = _.priorityLevel;
					var le = ie(_.expirationTime <= W);
					W = e.unstable_now(), typeof le == "function" ? _.callback = le : _ === n(d) && r(d), b(W)
				} else r(d);
				_ = n(d)
			}
			if (_ !== null) var _e = !0;
			else {
				var Ee = n(f);
				Ee !== null && re(O, Ee.startTime - W), _e = !1
			}
			return _e
		} finally {
			_ = null, v = K, x = !1
		}
	}
	var $ = !1,
		H = null,
		q = -1,
		ne = 5,
		G = -1;

	function oe() {
		return !(e.unstable_now() - G < ne)
	}

	function fe() {
		if (H !== null) {
			var z = e.unstable_now();
			G = z;
			var W = !0;
			try {
				W = H(!0, z)
			} finally {
				W ? me() : ($ = !1, H = null)
			}
		} else $ = !1
	}
	var me;
	if (typeof w == "function") me = function() {
		w(fe)
	};
	else if (typeof MessageChannel < "u") {
		var Z = new MessageChannel,
			J = Z.port2;
		Z.port1.onmessage = fe, me = function() {
			J.postMessage(null)
		}
	} else me = function() {
		C(fe, 0)
	};

	function X(z) {
		H = z, $ || ($ = !0, me())
	}

	function re(z, W) {
		q = C(function() {
			z(e.unstable_now())
		}, W)
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(z) {
		z.callback = null
	}, e.unstable_continueExecution = function() {
		k || x || (k = !0, X(L))
	}, e.unstable_forceFrameRate = function(z) {
		0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ne = 0 < z ? Math.floor(1e3 / z) : 5
	}, e.unstable_getCurrentPriorityLevel = function() {
		return v
	}, e.unstable_getFirstCallbackNode = function() {
		return n(d)
	}, e.unstable_next = function(z) {
		switch (v) {
			case 1:
			case 2:
			case 3:
				var W = 3;
				break;
			default:
				W = v
		}
		var K = v;
		v = W;
		try {
			return z()
		} finally {
			v = K
		}
	}, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(z, W) {
		switch (z) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break;
			default:
				z = 3
		}
		var K = v;
		v = z;
		try {
			return W()
		} finally {
			v = K
		}
	}, e.unstable_scheduleCallback = function(z, W, K) {
		var ie = e.unstable_now();
		switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ie + K : ie) : K = ie, z) {
			case 1:
				var le = -1;
				break;
			case 2:
				le = 250;
				break;
			case 5:
				le = 1073741823;
				break;
			case 4:
				le = 1e4;
				break;
			default:
				le = 5e3
		}
		return le = K + le, z = {
			id: m++,
			callback: W,
			priorityLevel: z,
			startTime: K,
			expirationTime: le,
			sortIndex: -1
		}, K > ie ? (z.sortIndex = K, t(f, z), n(d) === null && z === n(f) && (A ? (y(q), q = -1) : A = !0, re(O, K - ie))) : (z.sortIndex = le, t(d, z), k || x || (k = !0, X(L))), z
	}, e.unstable_shouldYield = oe, e.unstable_wrapCallback = function(z) {
		var W = v;
		return function() {
			var K = v;
			v = W;
			try {
				return z.apply(this, arguments)
			} finally {
				v = K
			}
		}
	}
})(Q_);
X_.exports = Q_;
var y6 = X_.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w6 = P,
	Vn = y6;

function ce(e) {
	for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
	return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Z_ = new Set,
	Al = {};

function as(e, t) {
	ha(e, t), ha(e + "Capture", t)
}

function ha(e, t) {
	for (Al[e] = t, e = 0; e < t.length; e++) Z_.add(t[e])
}
var ho = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
	E1 = Object.prototype.hasOwnProperty,
	x6 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	h2 = {},
	p2 = {};

function S6(e) {
	return E1.call(p2, e) ? !0 : E1.call(h2, e) ? !1 : x6.test(e) ? p2[e] = !0 : (h2[e] = !0, !1)
}

function k6(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
		default:
			return !1
	}
}

function b6(e, t, n, r) {
	if (t === null || typeof t > "u" || k6(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null) switch (n.type) {
		case 3:
			return !t;
		case 4:
			return t === !1;
		case 5:
			return isNaN(t);
		case 6:
			return isNaN(t) || 1 > t
	}
	return !1
}

function gn(e, t, n, r, o, i, a) {
	this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
}
var qt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
	qt[e] = new gn(e, 0, !1, e, null, !1, !1)
});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function(e) {
	var t = e[0];
	qt[t] = new gn(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
	qt[e] = new gn(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
	qt[e] = new gn(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
	qt[e] = new gn(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
	qt[e] = new gn(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
	qt[e] = new gn(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
	qt[e] = new gn(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
	qt[e] = new gn(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var e0 = /[\-:]([a-z])/g;

function t0(e) {
	return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
	var t = e.replace(e0, t0);
	qt[t] = new gn(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
	var t = e.replace(e0, t0);
	qt[t] = new gn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
	var t = e.replace(e0, t0);
	qt[t] = new gn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
	qt[e] = new gn(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
qt.xlinkHref = new gn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
	qt[e] = new gn(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function n0(e, t, n, r) {
	var o = qt.hasOwnProperty(t) ? qt[t] : null;
	(o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b6(t, n, o, r) && (n = null), r || o === null ? S6(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var yo = w6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	$c = Symbol.for("react.element"),
	Is = Symbol.for("react.portal"),
	Ps = Symbol.for("react.fragment"),
	r0 = Symbol.for("react.strict_mode"),
	A1 = Symbol.for("react.profiler"),
	J_ = Symbol.for("react.provider"),
	eg = Symbol.for("react.context"),
	o0 = Symbol.for("react.forward_ref"),
	I1 = Symbol.for("react.suspense"),
	P1 = Symbol.for("react.suspense_list"),
	i0 = Symbol.for("react.memo"),
	jo = Symbol.for("react.lazy"),
	tg = Symbol.for("react.offscreen"),
	m2 = Symbol.iterator;

function Ha(e) {
	return e === null || typeof e != "object" ? null : (e = m2 && e[m2] || e["@@iterator"], typeof e == "function" ? e : null)
}
var _t = Object.assign,
	Pf;

function ol(e) {
	if (Pf === void 0) try {
		throw Error()
	} catch (n) {
		var t = n.stack.trim().match(/\n( *(at )?)/);
		Pf = t && t[1] || ""
	}
	return `
` + Pf + e
}
var Of = !1;

function Mf(e, t) {
	if (!e || Of) return "";
	Of = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (t = function() {
					throw Error()
				}, Object.defineProperty(t.prototype, "props", {
					set: function() {
						throw Error()
					}
				}), typeof Reflect == "object" && Reflect.construct) {
				try {
					Reflect.construct(t, [])
				} catch (f) {
					var r = f
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (f) {
					r = f
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (f) {
				r = f
			}
			e()
		}
	} catch (f) {
		if (f && r && typeof f.stack == "string") {
			for (var o = f.stack.split(`
`), i = r.stack.split(`
`), a = o.length - 1, c = i.length - 1; 1 <= a && 0 <= c && o[a] !== i[c];) c--;
			for (; 1 <= a && 0 <= c; a--, c--)
				if (o[a] !== i[c]) {
					if (a !== 1 || c !== 1)
						do
							if (a--, c--, 0 > c || o[a] !== i[c]) {
								var d = `
` + o[a].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d
							} while (1 <= a && 0 <= c);
					break
				}
		}
	} finally {
		Of = !1, Error.prepareStackTrace = n
	}
	return (e = e ? e.displayName || e.name : "") ? ol(e) : ""
}

function C6(e) {
	switch (e.tag) {
		case 5:
			return ol(e.type);
		case 16:
			return ol("Lazy");
		case 13:
			return ol("Suspense");
		case 19:
			return ol("SuspenseList");
		case 0:
		case 2:
		case 15:
			return e = Mf(e.type, !1), e;
		case 11:
			return e = Mf(e.type.render, !1), e;
		case 1:
			return e = Mf(e.type, !0), e;
		default:
			return ""
	}
}

function O1(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Ps:
			return "Fragment";
		case Is:
			return "Portal";
		case A1:
			return "Profiler";
		case r0:
			return "StrictMode";
		case I1:
			return "Suspense";
		case P1:
			return "SuspenseList"
	}
	if (typeof e == "object") switch (e.$$typeof) {
		case eg:
			return (e.displayName || "Context") + ".Consumer";
		case J_:
			return (e._context.displayName || "Context") + ".Provider";
		case o0:
			var t = e.render;
			return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
		case i0:
			return t = e.displayName || null, t !== null ? t : O1(e.type) || "Memo";
		case jo:
			t = e._payload, e = e._init;
			try {
				return O1(e(t))
			} catch {}
	}
	return null
}

function E6(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return O1(t);
		case 8:
			return t === r0 ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t
	}
	return null
}

function oi(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return ""
	}
}

function ng(e) {
	var t = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function A6(e) {
	var t = ng(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
		var o = n.get,
			i = n.set;
		return Object.defineProperty(e, t, {
			configurable: !0,
			get: function() {
				return o.call(this)
			},
			set: function(a) {
				r = "" + a, i.call(this, a)
			}
		}), Object.defineProperty(e, t, {
			enumerable: n.enumerable
		}), {
			getValue: function() {
				return r
			},
			setValue: function(a) {
				r = "" + a
			},
			stopTracking: function() {
				e._valueTracker = null, delete e[t]
			}
		}
	}
}

function Fc(e) {
	e._valueTracker || (e._valueTracker = A6(e))
}

function rg(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return e && (r = ng(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ou(e) {
	if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}

function M1(e, t) {
	var n = t.checked;
	return _t({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked
	})
}

function v2(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	n = oi(t.value != null ? t.value : n), e._wrapperState = {
		initialChecked: r,
		initialValue: n,
		controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
	}
}

function og(e, t) {
	t = t.checked, t != null && n0(e, "checked", t, !1)
}

function j1(e, t) {
	og(e, t);
	var n = oi(t.value),
		r = t.type;
	if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return
	}
	t.hasOwnProperty("value") ? T1(e, t.type, n) : t.hasOwnProperty("defaultValue") && T1(e, t.type, oi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function _2(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
		t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
	}
	n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function T1(e, t, n) {
	(t !== "number" || Ou(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var il = Array.isArray;

function Ws(e, t, n, r) {
	if (e = e.options, t) {
		t = {};
		for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
		for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
	} else {
		for (n = "" + oi(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				e[o].selected = !0, r && (e[o].defaultSelected = !0);
				return
			}
			t !== null || e[o].disabled || (t = e[o])
		}
		t !== null && (t.selected = !0)
	}
}

function R1(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(ce(91));
	return _t({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	})
}

function g2(e, t) {
	var n = t.value;
	if (n == null) {
		if (n = t.children, t = t.defaultValue, n != null) {
			if (t != null) throw Error(ce(92));
			if (il(n)) {
				if (1 < n.length) throw Error(ce(93));
				n = n[0]
			}
			t = n
		}
		t == null && (t = ""), n = t
	}
	e._wrapperState = {
		initialValue: oi(n)
	}
}

function ig(e, t) {
	var n = oi(t.value),
		r = oi(t.defaultValue);
	n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function y2(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function sg(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml"
	}
}

function N1(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml" ? sg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Vc, ag = function(e) {
	return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
		MSApp.execUnsafeLocalFunction(function() {
			return e(t, n, r, o)
		})
	} : e
}(function(e, t) {
	if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
	else {
		for (Vc = Vc || document.createElement("div"), Vc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Vc.firstChild; e.firstChild;) e.removeChild(e.firstChild);
		for (; t.firstChild;) e.appendChild(t.firstChild)
	}
});

function Il(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return
		}
	}
	e.textContent = t
}
var pl = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0
	},
	I6 = ["Webkit", "ms", "Moz", "O"];
Object.keys(pl).forEach(function(e) {
	I6.forEach(function(t) {
		t = t + e.charAt(0).toUpperCase() + e.substring(1), pl[t] = pl[e]
	})
});

function lg(e, t, n) {
	return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || pl.hasOwnProperty(e) && pl[e] ? ("" + t).trim() : t + "px"
}

function cg(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				o = lg(n, t[n], r);
			n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
		}
}
var P6 = _t({
	menuitem: !0
}, {
	area: !0,
	base: !0,
	br: !0,
	col: !0,
	embed: !0,
	hr: !0,
	img: !0,
	input: !0,
	keygen: !0,
	link: !0,
	meta: !0,
	param: !0,
	source: !0,
	track: !0,
	wbr: !0
});

function L1(e, t) {
	if (t) {
		if (P6[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(ce(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(ce(60));
			if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(ce(61))
		}
		if (t.style != null && typeof t.style != "object") throw Error(ce(62))
	}
}

function D1(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0
	}
}
var B1 = null;

function s0(e) {
	return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var z1 = null,
	Ks = null,
	Us = null;

function w2(e) {
	if (e = ac(e)) {
		if (typeof z1 != "function") throw Error(ce(280));
		var t = e.stateNode;
		t && (t = xd(t), z1(e.stateNode, e.type, t))
	}
}

function ug(e) {
	Ks ? Us ? Us.push(e) : Us = [e] : Ks = e
}

function dg() {
	if (Ks) {
		var e = Ks,
			t = Us;
		if (Us = Ks = null, w2(e), t)
			for (e = 0; e < t.length; e++) w2(t[e])
	}
}

function fg(e, t) {
	return e(t)
}

function hg() {}
var jf = !1;

function pg(e, t, n) {
	if (jf) return e(t, n);
	jf = !0;
	try {
		return fg(e, t, n)
	} finally {
		jf = !1, (Ks !== null || Us !== null) && (hg(), dg())
	}
}

function Pl(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = xd(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
			break e;
		default:
			e = !1
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(ce(231, t, typeof n));
	return n
}
var $1 = !1;
if (ho) try {
	var Wa = {};
	Object.defineProperty(Wa, "passive", {
		get: function() {
			$1 = !0
		}
	}), window.addEventListener("test", Wa, Wa), window.removeEventListener("test", Wa, Wa)
} catch {
	$1 = !1
}

function O6(e, t, n, r, o, i, a, c, d) {
	var f = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, f)
	} catch (m) {
		this.onError(m)
	}
}
var ml = !1,
	Mu = null,
	ju = !1,
	F1 = null,
	M6 = {
		onError: function(e) {
			ml = !0, Mu = e
		}
	};

function j6(e, t, n, r, o, i, a, c, d) {
	ml = !1, Mu = null, O6.apply(M6, arguments)
}

function T6(e, t, n, r, o, i, a, c, d) {
	if (j6.apply(this, arguments), ml) {
		if (ml) {
			var f = Mu;
			ml = !1, Mu = null
		} else throw Error(ce(198));
		ju || (ju = !0, F1 = f)
	}
}

function ls(e) {
	var t = e,
		n = e;
	if (e.alternate)
		for (; t.return;) t = t.return;
	else {
		e = t;
		do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
	}
	return t.tag === 3 ? n : null
}

function mg(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
	}
	return null
}

function x2(e) {
	if (ls(e) !== e) throw Error(ce(188))
}

function R6(e) {
	var t = e.alternate;
	if (!t) {
		if (t = ls(e), t === null) throw Error(ce(188));
		return t !== e ? null : e
	}
	for (var n = e, r = t;;) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (r = o.return, r !== null) {
				n = r;
				continue
			}
			break
		}
		if (o.child === i.child) {
			for (i = o.child; i;) {
				if (i === n) return x2(o), e;
				if (i === r) return x2(o), t;
				i = i.sibling
			}
			throw Error(ce(188))
		}
		if (n.return !== r.return) n = o, r = i;
		else {
			for (var a = !1, c = o.child; c;) {
				if (c === n) {
					a = !0, n = o, r = i;
					break
				}
				if (c === r) {
					a = !0, r = o, n = i;
					break
				}
				c = c.sibling
			}
			if (!a) {
				for (c = i.child; c;) {
					if (c === n) {
						a = !0, n = i, r = o;
						break
					}
					if (c === r) {
						a = !0, r = i, n = o;
						break
					}
					c = c.sibling
				}
				if (!a) throw Error(ce(189))
			}
		}
		if (n.alternate !== r) throw Error(ce(190))
	}
	if (n.tag !== 3) throw Error(ce(188));
	return n.stateNode.current === n ? e : t
}

function vg(e) {
	return e = R6(e), e !== null ? _g(e) : null
}

function _g(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null;) {
		var t = _g(e);
		if (t !== null) return t;
		e = e.sibling
	}
	return null
}
var gg = Vn.unstable_scheduleCallback,
	S2 = Vn.unstable_cancelCallback,
	N6 = Vn.unstable_shouldYield,
	L6 = Vn.unstable_requestPaint,
	Ct = Vn.unstable_now,
	D6 = Vn.unstable_getCurrentPriorityLevel,
	a0 = Vn.unstable_ImmediatePriority,
	yg = Vn.unstable_UserBlockingPriority,
	Tu = Vn.unstable_NormalPriority,
	B6 = Vn.unstable_LowPriority,
	wg = Vn.unstable_IdlePriority,
	_d = null,
	Br = null;

function z6(e) {
	if (Br && typeof Br.onCommitFiberRoot == "function") try {
		Br.onCommitFiberRoot(_d, e, void 0, (e.current.flags & 128) === 128)
	} catch {}
}
var pr = Math.clz32 ? Math.clz32 : V6,
	$6 = Math.log,
	F6 = Math.LN2;

function V6(e) {
	return e >>>= 0, e === 0 ? 32 : 31 - ($6(e) / F6 | 0) | 0
}
var Hc = 64,
	Wc = 4194304;

function sl(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e
	}
}

function Ru(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		a = n & 268435455;
	if (a !== 0) {
		var c = a & ~o;
		c !== 0 ? r = sl(c) : (i &= a, i !== 0 && (r = sl(i)))
	} else a = n & ~o, a !== 0 ? r = sl(a) : i !== 0 && (r = sl(i));
	if (r === 0) return 0;
	if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
	if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
		for (e = e.entanglements, t &= r; 0 < t;) n = 31 - pr(t), o = 1 << n, r |= e[n], t &= ~o;
	return r
}

function H6(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1
	}
}

function W6(e, t) {
	for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
		var a = 31 - pr(i),
			c = 1 << a,
			d = o[a];
		d === -1 ? (!(c & n) || c & r) && (o[a] = H6(c, t)) : d <= t && (e.expiredLanes |= c), i &= ~c
	}
}

function V1(e) {
	return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function xg() {
	var e = Hc;
	return Hc <<= 1, !(Hc & 4194240) && (Hc = 64), e
}

function Tf(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t
}

function ic(e, t, n) {
	e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pr(t), e[t] = n
}

function K6(e, t) {
	var n = e.pendingLanes & ~t;
	e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n;) {
		var o = 31 - pr(n),
			i = 1 << o;
		t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
	}
}

function l0(e, t) {
	var n = e.entangledLanes |= t;
	for (e = e.entanglements; n;) {
		var r = 31 - pr(n),
			o = 1 << r;
		o & t | e[r] & t && (e[r] |= t), n &= ~o
	}
}
var nt = 0;

function Sg(e) {
	return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var kg, c0, bg, Cg, Eg, H1 = !1,
	Kc = [],
	Uo = null,
	Yo = null,
	qo = null,
	Ol = new Map,
	Ml = new Map,
	Ro = [],
	U6 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function k2(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			Uo = null;
			break;
		case "dragenter":
		case "dragleave":
			Yo = null;
			break;
		case "mouseover":
		case "mouseout":
			qo = null;
			break;
		case "pointerover":
		case "pointerout":
			Ol.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Ml.delete(t.pointerId)
	}
}

function Ka(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i ? (e = {
		blockedOn: t,
		domEventName: n,
		eventSystemFlags: r,
		nativeEvent: i,
		targetContainers: [o]
	}, t !== null && (t = ac(t), t !== null && c0(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Y6(e, t, n, r, o) {
	switch (t) {
		case "focusin":
			return Uo = Ka(Uo, e, t, n, r, o), !0;
		case "dragenter":
			return Yo = Ka(Yo, e, t, n, r, o), !0;
		case "mouseover":
			return qo = Ka(qo, e, t, n, r, o), !0;
		case "pointerover":
			var i = o.pointerId;
			return Ol.set(i, Ka(Ol.get(i) || null, e, t, n, r, o)), !0;
		case "gotpointercapture":
			return i = o.pointerId, Ml.set(i, Ka(Ml.get(i) || null, e, t, n, r, o)), !0
	}
	return !1
}

function Ag(e) {
	var t = Ni(e.target);
	if (t !== null) {
		var n = ls(t);
		if (n !== null) {
			if (t = n.tag, t === 13) {
				if (t = mg(n), t !== null) {
					e.blockedOn = t, Eg(e.priority, function() {
						bg(n)
					});
					return
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return
			}
		}
	}
	e.blockedOn = null
}

function uu(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length;) {
		var n = W1(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			B1 = r, n.target.dispatchEvent(r), B1 = null
		} else return t = ac(n), t !== null && c0(t), e.blockedOn = n, !1;
		t.shift()
	}
	return !0
}

function b2(e, t, n) {
	uu(e) && n.delete(t)
}

function q6() {
	H1 = !1, Uo !== null && uu(Uo) && (Uo = null), Yo !== null && uu(Yo) && (Yo = null), qo !== null && uu(qo) && (qo = null), Ol.forEach(b2), Ml.forEach(b2)
}

function Ua(e, t) {
	e.blockedOn === t && (e.blockedOn = null, H1 || (H1 = !0, Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority, q6)))
}

function jl(e) {
	function t(o) {
		return Ua(o, e)
	}
	if (0 < Kc.length) {
		Ua(Kc[0], e);
		for (var n = 1; n < Kc.length; n++) {
			var r = Kc[n];
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (Uo !== null && Ua(Uo, e), Yo !== null && Ua(Yo, e), qo !== null && Ua(qo, e), Ol.forEach(t), Ml.forEach(t), n = 0; n < Ro.length; n++) r = Ro[n], r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Ro.length && (n = Ro[0], n.blockedOn === null);) Ag(n), n.blockedOn === null && Ro.shift()
}
var Ys = yo.ReactCurrentBatchConfig,
	Nu = !0;

function G6(e, t, n, r) {
	var o = nt,
		i = Ys.transition;
	Ys.transition = null;
	try {
		nt = 1, u0(e, t, n, r)
	} finally {
		nt = o, Ys.transition = i
	}
}

function X6(e, t, n, r) {
	var o = nt,
		i = Ys.transition;
	Ys.transition = null;
	try {
		nt = 4, u0(e, t, n, r)
	} finally {
		nt = o, Ys.transition = i
	}
}

function u0(e, t, n, r) {
	if (Nu) {
		var o = W1(e, t, n, r);
		if (o === null) Hf(e, t, r, Lu, n), k2(e, r);
		else if (Y6(o, e, t, n, r)) r.stopPropagation();
		else if (k2(e, r), t & 4 && -1 < U6.indexOf(e)) {
			for (; o !== null;) {
				var i = ac(o);
				if (i !== null && kg(i), i = W1(e, t, n, r), i === null && Hf(e, t, r, Lu, n), i === o) break;
				o = i
			}
			o !== null && r.stopPropagation()
		} else Hf(e, t, r, null, n)
	}
}
var Lu = null;

function W1(e, t, n, r) {
	if (Lu = null, e = s0(r), e = Ni(e), e !== null)
		if (t = ls(e), t === null) e = null;
		else if (n = t.tag, n === 13) {
		if (e = mg(t), e !== null) return e;
		e = null
	} else if (n === 3) {
		if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
		e = null
	} else t !== e && (e = null);
	return Lu = e, null
}

function Ig(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (D6()) {
				case a0:
					return 1;
				case yg:
					return 4;
				case Tu:
				case B6:
					return 16;
				case wg:
					return 536870912;
				default:
					return 16
			}
		default:
			return 16
	}
}
var Wo = null,
	d0 = null,
	du = null;

function Pg() {
	if (du) return du;
	var e, t = d0,
		n = t.length,
		r, o = "value" in Wo ? Wo.value : Wo.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var a = n - e;
	for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
	return du = o.slice(e, 1 < r ? 1 - r : void 0)
}

function fu(e) {
	var t = e.keyCode;
	return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Uc() {
	return !0
}

function C2() {
	return !1
}

function Kn(e) {
	function t(n, r, o, i, a) {
		this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null;
		for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(i) : i[c]);
		return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Uc : C2, this.isPropagationStopped = C2, this
	}
	return _t(t.prototype, {
		preventDefault: function() {
			this.defaultPrevented = !0;
			var n = this.nativeEvent;
			n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Uc)
		},
		stopPropagation: function() {
			var n = this.nativeEvent;
			n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Uc)
		},
		persist: function() {},
		isPersistent: Uc
	}), t
}
var Ia = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	f0 = Kn(Ia),
	sc = _t({}, Ia, {
		view: 0,
		detail: 0
	}),
	Q6 = Kn(sc),
	Rf, Nf, Ya, gd = _t({}, sc, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: h0,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Ya && (Ya && e.type === "mousemove" ? (Rf = e.screenX - Ya.screenX, Nf = e.screenY - Ya.screenY) : Nf = Rf = 0, Ya = e), Rf)
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Nf
		}
	}),
	E2 = Kn(gd),
	Z6 = _t({}, gd, {
		dataTransfer: 0
	}),
	J6 = Kn(Z6),
	e7 = _t({}, sc, {
		relatedTarget: 0
	}),
	Lf = Kn(e7),
	t7 = _t({}, Ia, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	n7 = Kn(t7),
	r7 = _t({}, Ia, {
		clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData
		}
	}),
	o7 = Kn(r7),
	i7 = _t({}, Ia, {
		data: 0
	}),
	A2 = Kn(i7),
	s7 = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	},
	a7 = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	},
	l7 = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};

function c7(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = l7[e]) ? !!t[e] : !1
}

function h0() {
	return c7
}
var u7 = _t({}, sc, {
		key: function(e) {
			if (e.key) {
				var t = s7[e.key] || e.key;
				if (t !== "Unidentified") return t
			}
			return e.type === "keypress" ? (e = fu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? a7[e.keyCode] || "Unidentified" : ""
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: h0,
		charCode: function(e) {
			return e.type === "keypress" ? fu(e) : 0
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		},
		which: function(e) {
			return e.type === "keypress" ? fu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
		}
	}),
	d7 = Kn(u7),
	f7 = _t({}, gd, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	I2 = Kn(f7),
	h7 = _t({}, sc, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: h0
	}),
	p7 = Kn(h7),
	m7 = _t({}, Ia, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	}),
	v7 = Kn(m7),
	_7 = _t({}, gd, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
		},
		deltaZ: 0,
		deltaMode: 0
	}),
	g7 = Kn(_7),
	y7 = [9, 13, 27, 32],
	p0 = ho && "CompositionEvent" in window,
	vl = null;
ho && "documentMode" in document && (vl = document.documentMode);
var w7 = ho && "TextEvent" in window && !vl,
	Og = ho && (!p0 || vl && 8 < vl && 11 >= vl),
	P2 = " ",
	O2 = !1;

function Mg(e, t) {
	switch (e) {
		case "keyup":
			return y7.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1
	}
}

function jg(e) {
	return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Os = !1;

function x7(e, t) {
	switch (e) {
		case "compositionend":
			return jg(t);
		case "keypress":
			return t.which !== 32 ? null : (O2 = !0, P2);
		case "textInput":
			return e = t.data, e === P2 && O2 ? null : e;
		default:
			return null
	}
}

function S7(e, t) {
	if (Os) return e === "compositionend" || !p0 && Mg(e, t) ? (e = Pg(), du = d0 = Wo = null, Os = !1, e) : null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which)
			}
			return null;
		case "compositionend":
			return Og && t.locale !== "ko" ? null : t.data;
		default:
			return null
	}
}
var k7 = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0
};

function M2(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!k7[e.type] : t === "textarea"
}

function Tg(e, t, n, r) {
	ug(r), t = Du(t, "onChange"), 0 < t.length && (n = new f0("onChange", "change", null, n, r), e.push({
		event: n,
		listeners: t
	}))
}
var _l = null,
	Tl = null;

function b7(e) {
	Wg(e, 0)
}

function yd(e) {
	var t = Ts(e);
	if (rg(t)) return e
}

function C7(e, t) {
	if (e === "change") return t
}
var Rg = !1;
if (ho) {
	var Df;
	if (ho) {
		var Bf = "oninput" in document;
		if (!Bf) {
			var j2 = document.createElement("div");
			j2.setAttribute("oninput", "return;"), Bf = typeof j2.oninput == "function"
		}
		Df = Bf
	} else Df = !1;
	Rg = Df && (!document.documentMode || 9 < document.documentMode)
}

function T2() {
	_l && (_l.detachEvent("onpropertychange", Ng), Tl = _l = null)
}

function Ng(e) {
	if (e.propertyName === "value" && yd(Tl)) {
		var t = [];
		Tg(t, Tl, e, s0(e)), pg(b7, t)
	}
}

function E7(e, t, n) {
	e === "focusin" ? (T2(), _l = t, Tl = n, _l.attachEvent("onpropertychange", Ng)) : e === "focusout" && T2()
}

function A7(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return yd(Tl)
}

function I7(e, t) {
	if (e === "click") return yd(t)
}

function P7(e, t) {
	if (e === "input" || e === "change") return yd(t)
}

function O7(e, t) {
	return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var vr = typeof Object.is == "function" ? Object.is : O7;

function Rl(e, t) {
	if (vr(e, t)) return !0;
	if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!E1.call(t, o) || !vr(e[o], t[o])) return !1
	}
	return !0
}

function R2(e) {
	for (; e && e.firstChild;) e = e.firstChild;
	return e
}

function N2(e, t) {
	var n = R2(e);
	e = 0;
	for (var r; n;) {
		if (n.nodeType === 3) {
			if (r = e + n.textContent.length, e <= t && r >= t) return {
				node: n,
				offset: t - e
			};
			e = r
		}
		e: {
			for (; n;) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = R2(n)
	}
}

function Lg(e, t) {
	return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Dg() {
	for (var e = window, t = Ou(); t instanceof e.HTMLIFrameElement;) {
		try {
			var n = typeof t.contentWindow.location.href == "string"
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ou(e.document)
	}
	return t
}

function m0(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function M7(e) {
	var t = Dg(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (t !== n && n && n.ownerDocument && Lg(n.ownerDocument.documentElement, n)) {
		if (r !== null && m0(n)) {
			if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
			else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = N2(n, i);
				var a = N2(n, r);
				o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
			element: e,
			left: e.scrollLeft,
			top: e.scrollTop
		});
		for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
	}
}
var j7 = ho && "documentMode" in document && 11 >= document.documentMode,
	Ms = null,
	K1 = null,
	gl = null,
	U1 = !1;

function L2(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	U1 || Ms == null || Ms !== Ou(r) || (r = Ms, "selectionStart" in r && m0(r) ? r = {
		start: r.selectionStart,
		end: r.selectionEnd
	} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
		anchorNode: r.anchorNode,
		anchorOffset: r.anchorOffset,
		focusNode: r.focusNode,
		focusOffset: r.focusOffset
	}), gl && Rl(gl, r) || (gl = r, r = Du(K1, "onSelect"), 0 < r.length && (t = new f0("onSelect", "select", null, t, n), e.push({
		event: t,
		listeners: r
	}), t.target = Ms)))
}

function Yc(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var js = {
		animationend: Yc("Animation", "AnimationEnd"),
		animationiteration: Yc("Animation", "AnimationIteration"),
		animationstart: Yc("Animation", "AnimationStart"),
		transitionend: Yc("Transition", "TransitionEnd")
	},
	zf = {},
	Bg = {};
ho && (Bg = document.createElement("div").style, "AnimationEvent" in window || (delete js.animationend.animation, delete js.animationiteration.animation, delete js.animationstart.animation), "TransitionEvent" in window || delete js.transitionend.transition);

function wd(e) {
	if (zf[e]) return zf[e];
	if (!js[e]) return e;
	var t = js[e],
		n;
	for (n in t)
		if (t.hasOwnProperty(n) && n in Bg) return zf[e] = t[n];
	return e
}
var zg = wd("animationend"),
	$g = wd("animationiteration"),
	Fg = wd("animationstart"),
	Vg = wd("transitionend"),
	Hg = new Map,
	D2 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function di(e, t) {
	Hg.set(e, t), as(t, [e])
}
for (var $f = 0; $f < D2.length; $f++) {
	var Ff = D2[$f],
		T7 = Ff.toLowerCase(),
		R7 = Ff[0].toUpperCase() + Ff.slice(1);
	di(T7, "on" + R7)
}
di(zg, "onAnimationEnd");
di($g, "onAnimationIteration");
di(Fg, "onAnimationStart");
di("dblclick", "onDoubleClick");
di("focusin", "onFocus");
di("focusout", "onBlur");
di(Vg, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
as("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
as("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
as("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
as("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
as("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
as("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var al = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
	N7 = new Set("cancel close invalid load scroll toggle".split(" ").concat(al));

function B2(e, t, n) {
	var r = e.type || "unknown-event";
	e.currentTarget = n, T6(r, t, void 0, e), e.currentTarget = null
}

function Wg(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var a = r.length - 1; 0 <= a; a--) {
					var c = r[a],
						d = c.instance,
						f = c.currentTarget;
					if (c = c.listener, d !== i && o.isPropagationStopped()) break e;
					B2(o, c, f), i = d
				} else
					for (a = 0; a < r.length; a++) {
						if (c = r[a], d = c.instance, f = c.currentTarget, c = c.listener, d !== i && o.isPropagationStopped()) break e;
						B2(o, c, f), i = d
					}
		}
	}
	if (ju) throw e = F1, ju = !1, F1 = null, e
}

function lt(e, t) {
	var n = t[Q1];
	n === void 0 && (n = t[Q1] = new Set);
	var r = e + "__bubble";
	n.has(r) || (Kg(t, e, 2, !1), n.add(r))
}

function Vf(e, t, n) {
	var r = 0;
	t && (r |= 4), Kg(n, e, r, t)
}
var qc = "_reactListening" + Math.random().toString(36).slice(2);

function Nl(e) {
	if (!e[qc]) {
		e[qc] = !0, Z_.forEach(function(n) {
			n !== "selectionchange" && (N7.has(n) || Vf(n, !1, e), Vf(n, !0, e))
		});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[qc] || (t[qc] = !0, Vf("selectionchange", !1, t))
	}
}

function Kg(e, t, n, r) {
	switch (Ig(t)) {
		case 1:
			var o = G6;
			break;
		case 4:
			o = X6;
			break;
		default:
			o = u0
	}
	n = o.bind(null, t, n, e), o = void 0, !$1 || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
		capture: !0,
		passive: o
	}) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
		passive: o
	}) : e.addEventListener(t, n, !1)
}

function Hf(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
		if (r === null) return;
		var a = r.tag;
		if (a === 3 || a === 4) {
			var c = r.stateNode.containerInfo;
			if (c === o || c.nodeType === 8 && c.parentNode === o) break;
			if (a === 4)
				for (a = r.return; a !== null;) {
					var d = a.tag;
					if ((d === 3 || d === 4) && (d = a.stateNode.containerInfo, d === o || d.nodeType === 8 && d.parentNode === o)) return;
					a = a.return
				}
			for (; c !== null;) {
				if (a = Ni(c), a === null) return;
				if (d = a.tag, d === 5 || d === 6) {
					r = i = a;
					continue e
				}
				c = c.parentNode
			}
		}
		r = r.return
	}
	pg(function() {
		var f = i,
			m = s0(n),
			_ = [];
		e: {
			var v = Hg.get(e);
			if (v !== void 0) {
				var x = f0,
					k = e;
				switch (e) {
					case "keypress":
						if (fu(n) === 0) break e;
					case "keydown":
					case "keyup":
						x = d7;
						break;
					case "focusin":
						k = "focus", x = Lf;
						break;
					case "focusout":
						k = "blur", x = Lf;
						break;
					case "beforeblur":
					case "afterblur":
						x = Lf;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						x = E2;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						x = J6;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						x = p7;
						break;
					case zg:
					case $g:
					case Fg:
						x = n7;
						break;
					case Vg:
						x = v7;
						break;
					case "scroll":
						x = Q6;
						break;
					case "wheel":
						x = g7;
						break;
					case "copy":
					case "cut":
					case "paste":
						x = o7;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						x = I2
				}
				var A = (t & 4) !== 0,
					C = !A && e === "scroll",
					y = A ? v !== null ? v + "Capture" : null : v;
				A = [];
				for (var w = f, b; w !== null;) {
					b = w;
					var O = b.stateNode;
					if (b.tag === 5 && O !== null && (b = O, y !== null && (O = Pl(w, y), O != null && A.push(Ll(w, O, b)))), C) break;
					w = w.return
				}
				0 < A.length && (v = new x(v, k, null, n, m), _.push({
					event: v,
					listeners: A
				}))
			}
		}
		if (!(t & 7)) {
			e: {
				if (v = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", v && n !== B1 && (k = n.relatedTarget || n.fromElement) && (Ni(k) || k[po])) break e;
				if ((x || v) && (v = m.window === m ? m : (v = m.ownerDocument) ? v.defaultView || v.parentWindow : window, x ? (k = n.relatedTarget || n.toElement, x = f, k = k ? Ni(k) : null, k !== null && (C = ls(k), k !== C || k.tag !== 5 && k.tag !== 6) && (k = null)) : (x = null, k = f), x !== k)) {
					if (A = E2, O = "onMouseLeave", y = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (A = I2, O = "onPointerLeave", y = "onPointerEnter", w = "pointer"), C = x == null ? v : Ts(x), b = k == null ? v : Ts(k), v = new A(O, w + "leave", x, n, m), v.target = C, v.relatedTarget = b, O = null, Ni(m) === f && (A = new A(y, w + "enter", k, n, m), A.target = b, A.relatedTarget = C, O = A), C = O, x && k) t: {
						for (A = x, y = k, w = 0, b = A; b; b = Ss(b)) w++;
						for (b = 0, O = y; O; O = Ss(O)) b++;
						for (; 0 < w - b;) A = Ss(A),
						w--;
						for (; 0 < b - w;) y = Ss(y),
						b--;
						for (; w--;) {
							if (A === y || y !== null && A === y.alternate) break t;
							A = Ss(A), y = Ss(y)
						}
						A = null
					}
					else A = null;
					x !== null && z2(_, v, x, A, !1), k !== null && C !== null && z2(_, C, k, A, !0)
				}
			}
			e: {
				if (v = f ? Ts(f) : window, x = v.nodeName && v.nodeName.toLowerCase(), x === "select" || x === "input" && v.type === "file") var L = C7;
				else if (M2(v))
					if (Rg) L = P7;
					else {
						L = A7;
						var $ = E7
					}
				else(x = v.nodeName) && x.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (L = I7);
				if (L && (L = L(e, f))) {
					Tg(_, L, n, m);
					break e
				}
				$ && $(e, v, f),
				e === "focusout" && ($ = v._wrapperState) && $.controlled && v.type === "number" && T1(v, "number", v.value)
			}
			switch ($ = f ? Ts(f) : window, e) {
				case "focusin":
					(M2($) || $.contentEditable === "true") && (Ms = $, K1 = f, gl = null);
					break;
				case "focusout":
					gl = K1 = Ms = null;
					break;
				case "mousedown":
					U1 = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					U1 = !1, L2(_, n, m);
					break;
				case "selectionchange":
					if (j7) break;
				case "keydown":
				case "keyup":
					L2(_, n, m)
			}
			var H;
			if (p0) e: {
				switch (e) {
					case "compositionstart":
						var q = "onCompositionStart";
						break e;
					case "compositionend":
						q = "onCompositionEnd";
						break e;
					case "compositionupdate":
						q = "onCompositionUpdate";
						break e
				}
				q = void 0
			}
			else Os ? Mg(e, n) && (q = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (q = "onCompositionStart");q && (Og && n.locale !== "ko" && (Os || q !== "onCompositionStart" ? q === "onCompositionEnd" && Os && (H = Pg()) : (Wo = m, d0 = "value" in Wo ? Wo.value : Wo.textContent, Os = !0)), $ = Du(f, q), 0 < $.length && (q = new A2(q, e, null, n, m), _.push({
				event: q,
				listeners: $
			}), H ? q.data = H : (H = jg(n), H !== null && (q.data = H)))),
			(H = w7 ? x7(e, n) : S7(e, n)) && (f = Du(f, "onBeforeInput"), 0 < f.length && (m = new A2("onBeforeInput", "beforeinput", null, n, m), _.push({
				event: m,
				listeners: f
			}), m.data = H))
		}
		Wg(_, t)
	})
}

function Ll(e, t, n) {
	return {
		instance: e,
		listener: t,
		currentTarget: n
	}
}

function Du(e, t) {
	for (var n = t + "Capture", r = []; e !== null;) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 && i !== null && (o = i, i = Pl(e, n), i != null && r.unshift(Ll(e, i, o)), i = Pl(e, t), i != null && r.push(Ll(e, i, o))), e = e.return
	}
	return r
}

function Ss(e) {
	if (e === null) return null;
	do e = e.return; while (e && e.tag !== 5);
	return e || null
}

function z2(e, t, n, r, o) {
	for (var i = t._reactName, a = []; n !== null && n !== r;) {
		var c = n,
			d = c.alternate,
			f = c.stateNode;
		if (d !== null && d === r) break;
		c.tag === 5 && f !== null && (c = f, o ? (d = Pl(n, i), d != null && a.unshift(Ll(n, d, c))) : o || (d = Pl(n, i), d != null && a.push(Ll(n, d, c)))), n = n.return
	}
	a.length !== 0 && e.push({
		event: t,
		listeners: a
	})
}
var L7 = /\r\n?/g,
	D7 = /\u0000|\uFFFD/g;

function $2(e) {
	return (typeof e == "string" ? e : "" + e).replace(L7, `
`).replace(D7, "")
}

function Gc(e, t, n) {
	if (t = $2(t), $2(e) !== t && n) throw Error(ce(425))
}

function Bu() {}
var Y1 = null,
	q1 = null;

function G1(e, t) {
	return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var X1 = typeof setTimeout == "function" ? setTimeout : void 0,
	B7 = typeof clearTimeout == "function" ? clearTimeout : void 0,
	F2 = typeof Promise == "function" ? Promise : void 0,
	z7 = typeof queueMicrotask == "function" ? queueMicrotask : typeof F2 < "u" ? function(e) {
		return F2.resolve(null).then(e).catch($7)
	} : X1;

function $7(e) {
	setTimeout(function() {
		throw e
	})
}

function Wf(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if (e.removeChild(n), o && o.nodeType === 8)
			if (n = o.data, n === "/$") {
				if (r === 0) {
					e.removeChild(o), jl(t);
					return
				}
				r--
			} else n !== "$" && n !== "$?" && n !== "$!" || r++;
		n = o
	} while (n);
	jl(t)
}

function Go(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
			if (t === "/$") return null
		}
	}
	return e
}

function V2(e) {
	e = e.previousSibling;
	for (var t = 0; e;) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--
			} else n === "/$" && t++
		}
		e = e.previousSibling
	}
	return null
}
var Pa = Math.random().toString(36).slice(2),
	Rr = "__reactFiber$" + Pa,
	Dl = "__reactProps$" + Pa,
	po = "__reactContainer$" + Pa,
	Q1 = "__reactEvents$" + Pa,
	F7 = "__reactListeners$" + Pa,
	V7 = "__reactHandles$" + Pa;

function Ni(e) {
	var t = e[Rr];
	if (t) return t;
	for (var n = e.parentNode; n;) {
		if (t = n[po] || n[Rr]) {
			if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
				for (e = V2(e); e !== null;) {
					if (n = e[Rr]) return n;
					e = V2(e)
				}
			return t
		}
		e = n, n = e.parentNode
	}
	return null
}

function ac(e) {
	return e = e[Rr] || e[po], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Ts(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(ce(33))
}

function xd(e) {
	return e[Dl] || null
}
var Z1 = [],
	Rs = -1;

function fi(e) {
	return {
		current: e
	}
}

function ut(e) {
	0 > Rs || (e.current = Z1[Rs], Z1[Rs] = null, Rs--)
}

function st(e, t) {
	Rs++, Z1[Rs] = e.current, e.current = t
}
var ii = {},
	an = fi(ii),
	En = fi(!1),
	Ji = ii;

function pa(e, t) {
	var n = e.type.contextTypes;
	if (!n) return ii;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function An(e) {
	return e = e.childContextTypes, e != null
}

function zu() {
	ut(En), ut(an)
}

function H2(e, t, n) {
	if (an.current !== ii) throw Error(ce(168));
	st(an, t), st(En, n)
}

function Ug(e, t, n) {
	var r = e.stateNode;
	if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
	r = r.getChildContext();
	for (var o in r)
		if (!(o in t)) throw Error(ce(108, E6(e) || "Unknown", o));
	return _t({}, n, r)
}

function $u(e) {
	return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ii, Ji = an.current, st(an, e), st(En, En.current), !0
}

function W2(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(ce(169));
	n ? (e = Ug(e, t, Ji), r.__reactInternalMemoizedMergedChildContext = e, ut(En), ut(an), st(an, e)) : ut(En), st(En, n)
}
var ro = null,
	Sd = !1,
	Kf = !1;

function Yg(e) {
	ro === null ? ro = [e] : ro.push(e)
}

function H7(e) {
	Sd = !0, Yg(e)
}

function hi() {
	if (!Kf && ro !== null) {
		Kf = !0;
		var e = 0,
			t = nt;
		try {
			var n = ro;
			for (nt = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0); while (r !== null)
			}
			ro = null, Sd = !1
		} catch (o) {
			throw ro !== null && (ro = ro.slice(e + 1)), gg(a0, hi), o
		} finally {
			nt = t, Kf = !1
		}
	}
	return null
}
var Ns = [],
	Ls = 0,
	Fu = null,
	Vu = 0,
	Gn = [],
	Xn = 0,
	es = null,
	so = 1,
	ao = "";

function Mi(e, t) {
	Ns[Ls++] = Vu, Ns[Ls++] = Fu, Fu = e, Vu = t
}

function qg(e, t, n) {
	Gn[Xn++] = so, Gn[Xn++] = ao, Gn[Xn++] = es, es = e;
	var r = so;
	e = ao;
	var o = 32 - pr(r) - 1;
	r &= ~(1 << o), n += 1;
	var i = 32 - pr(t) + o;
	if (30 < i) {
		var a = o - o % 5;
		i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, so = 1 << 32 - pr(t) + o | n << o | r, ao = i + e
	} else so = 1 << i | n << o | r, ao = e
}

function v0(e) {
	e.return !== null && (Mi(e, 1), qg(e, 1, 0))
}

function _0(e) {
	for (; e === Fu;) Fu = Ns[--Ls], Ns[Ls] = null, Vu = Ns[--Ls], Ns[Ls] = null;
	for (; e === es;) es = Gn[--Xn], Gn[Xn] = null, ao = Gn[--Xn], Gn[Xn] = null, so = Gn[--Xn], Gn[Xn] = null
}
var Bn = null,
	Ln = null,
	ht = !1,
	ur = null;

function Gg(e, t) {
	var n = Jn(5, null, null, 0);
	n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function K2(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Bn = e, Ln = Go(t.firstChild), !0) : !1;
		case 6:
			return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Bn = e, Ln = null, !0) : !1;
		case 13:
			return t = t.nodeType !== 8 ? null : t, t !== null ? (n = es !== null ? {
				id: so,
				overflow: ao
			} : null, e.memoizedState = {
				dehydrated: t,
				treeContext: n,
				retryLane: 1073741824
			}, n = Jn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Bn = e, Ln = null, !0) : !1;
		default:
			return !1
	}
}

function J1(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function eh(e) {
	if (ht) {
		var t = Ln;
		if (t) {
			var n = t;
			if (!K2(e, t)) {
				if (J1(e)) throw Error(ce(418));
				t = Go(n.nextSibling);
				var r = Bn;
				t && K2(e, t) ? Gg(r, n) : (e.flags = e.flags & -4097 | 2, ht = !1, Bn = e)
			}
		} else {
			if (J1(e)) throw Error(ce(418));
			e.flags = e.flags & -4097 | 2, ht = !1, Bn = e
		}
	}
}

function U2(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
	Bn = e
}

function Xc(e) {
	if (e !== Bn) return !1;
	if (!ht) return U2(e), ht = !0, !1;
	var t;
	if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !G1(e.type, e.memoizedProps)), t && (t = Ln)) {
		if (J1(e)) throw Xg(), Error(ce(418));
		for (; t;) Gg(e, t), t = Go(t.nextSibling)
	}
	if (U2(e), e.tag === 13) {
		if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(ce(317));
		e: {
			for (e = e.nextSibling, t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Ln = Go(e.nextSibling);
							break e
						}
						t--
					} else n !== "$" && n !== "$!" && n !== "$?" || t++
				}
				e = e.nextSibling
			}
			Ln = null
		}
	} else Ln = Bn ? Go(e.stateNode.nextSibling) : null;
	return !0
}

function Xg() {
	for (var e = Ln; e;) e = Go(e.nextSibling)
}

function ma() {
	Ln = Bn = null, ht = !1
}

function g0(e) {
	ur === null ? ur = [e] : ur.push(e)
}
var W7 = yo.ReactCurrentBatchConfig;

function qa(e, t, n) {
	if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
		if (n._owner) {
			if (n = n._owner, n) {
				if (n.tag !== 1) throw Error(ce(309));
				var r = n.stateNode
			}
			if (!r) throw Error(ce(147, e));
			var o = r,
				i = "" + e;
			return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
				var c = o.refs;
				a === null ? delete c[i] : c[i] = a
			}, t._stringRef = i, t)
		}
		if (typeof e != "string") throw Error(ce(284));
		if (!n._owner) throw Error(ce(290, e))
	}
	return e
}

function Qc(e, t) {
	throw e = Object.prototype.toString.call(t), Error(ce(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Y2(e) {
	var t = e._init;
	return t(e._payload)
}

function Qg(e) {
	function t(y, w) {
		if (e) {
			var b = y.deletions;
			b === null ? (y.deletions = [w], y.flags |= 16) : b.push(w)
		}
	}

	function n(y, w) {
		if (!e) return null;
		for (; w !== null;) t(y, w), w = w.sibling;
		return null
	}

	function r(y, w) {
		for (y = new Map; w !== null;) w.key !== null ? y.set(w.key, w) : y.set(w.index, w), w = w.sibling;
		return y
	}

	function o(y, w) {
		return y = Jo(y, w), y.index = 0, y.sibling = null, y
	}

	function i(y, w, b) {
		return y.index = b, e ? (b = y.alternate, b !== null ? (b = b.index, b < w ? (y.flags |= 2, w) : b) : (y.flags |= 2, w)) : (y.flags |= 1048576, w)
	}

	function a(y) {
		return e && y.alternate === null && (y.flags |= 2), y
	}

	function c(y, w, b, O) {
		return w === null || w.tag !== 6 ? (w = Zf(b, y.mode, O), w.return = y, w) : (w = o(w, b), w.return = y, w)
	}

	function d(y, w, b, O) {
		var L = b.type;
		return L === Ps ? m(y, w, b.props.children, O, b.key) : w !== null && (w.elementType === L || typeof L == "object" && L !== null && L.$$typeof === jo && Y2(L) === w.type) ? (O = o(w, b.props), O.ref = qa(y, w, b), O.return = y, O) : (O = yu(b.type, b.key, b.props, null, y.mode, O), O.ref = qa(y, w, b), O.return = y, O)
	}

	function f(y, w, b, O) {
		return w === null || w.tag !== 4 || w.stateNode.containerInfo !== b.containerInfo || w.stateNode.implementation !== b.implementation ? (w = Jf(b, y.mode, O), w.return = y, w) : (w = o(w, b.children || []), w.return = y, w)
	}

	function m(y, w, b, O, L) {
		return w === null || w.tag !== 7 ? (w = qi(b, y.mode, O, L), w.return = y, w) : (w = o(w, b), w.return = y, w)
	}

	function _(y, w, b) {
		if (typeof w == "string" && w !== "" || typeof w == "number") return w = Zf("" + w, y.mode, b), w.return = y, w;
		if (typeof w == "object" && w !== null) {
			switch (w.$$typeof) {
				case $c:
					return b = yu(w.type, w.key, w.props, null, y.mode, b), b.ref = qa(y, null, w), b.return = y, b;
				case Is:
					return w = Jf(w, y.mode, b), w.return = y, w;
				case jo:
					var O = w._init;
					return _(y, O(w._payload), b)
			}
			if (il(w) || Ha(w)) return w = qi(w, y.mode, b, null), w.return = y, w;
			Qc(y, w)
		}
		return null
	}

	function v(y, w, b, O) {
		var L = w !== null ? w.key : null;
		if (typeof b == "string" && b !== "" || typeof b == "number") return L !== null ? null : c(y, w, "" + b, O);
		if (typeof b == "object" && b !== null) {
			switch (b.$$typeof) {
				case $c:
					return b.key === L ? d(y, w, b, O) : null;
				case Is:
					return b.key === L ? f(y, w, b, O) : null;
				case jo:
					return L = b._init, v(y, w, L(b._payload), O)
			}
			if (il(b) || Ha(b)) return L !== null ? null : m(y, w, b, O, null);
			Qc(y, b)
		}
		return null
	}

	function x(y, w, b, O, L) {
		if (typeof O == "string" && O !== "" || typeof O == "number") return y = y.get(b) || null, c(w, y, "" + O, L);
		if (typeof O == "object" && O !== null) {
			switch (O.$$typeof) {
				case $c:
					return y = y.get(O.key === null ? b : O.key) || null, d(w, y, O, L);
				case Is:
					return y = y.get(O.key === null ? b : O.key) || null, f(w, y, O, L);
				case jo:
					var $ = O._init;
					return x(y, w, b, $(O._payload), L)
			}
			if (il(O) || Ha(O)) return y = y.get(b) || null, m(w, y, O, L, null);
			Qc(w, O)
		}
		return null
	}

	function k(y, w, b, O) {
		for (var L = null, $ = null, H = w, q = w = 0, ne = null; H !== null && q < b.length; q++) {
			H.index > q ? (ne = H, H = null) : ne = H.sibling;
			var G = v(y, H, b[q], O);
			if (G === null) {
				H === null && (H = ne);
				break
			}
			e && H && G.alternate === null && t(y, H), w = i(G, w, q), $ === null ? L = G : $.sibling = G, $ = G, H = ne
		}
		if (q === b.length) return n(y, H), ht && Mi(y, q), L;
		if (H === null) {
			for (; q < b.length; q++) H = _(y, b[q], O), H !== null && (w = i(H, w, q), $ === null ? L = H : $.sibling = H, $ = H);
			return ht && Mi(y, q), L
		}
		for (H = r(y, H); q < b.length; q++) ne = x(H, y, q, b[q], O), ne !== null && (e && ne.alternate !== null && H.delete(ne.key === null ? q : ne.key), w = i(ne, w, q), $ === null ? L = ne : $.sibling = ne, $ = ne);
		return e && H.forEach(function(oe) {
			return t(y, oe)
		}), ht && Mi(y, q), L
	}

	function A(y, w, b, O) {
		var L = Ha(b);
		if (typeof L != "function") throw Error(ce(150));
		if (b = L.call(b), b == null) throw Error(ce(151));
		for (var $ = L = null, H = w, q = w = 0, ne = null, G = b.next(); H !== null && !G.done; q++, G = b.next()) {
			H.index > q ? (ne = H, H = null) : ne = H.sibling;
			var oe = v(y, H, G.value, O);
			if (oe === null) {
				H === null && (H = ne);
				break
			}
			e && H && oe.alternate === null && t(y, H), w = i(oe, w, q), $ === null ? L = oe : $.sibling = oe, $ = oe, H = ne
		}
		if (G.done) return n(y, H), ht && Mi(y, q), L;
		if (H === null) {
			for (; !G.done; q++, G = b.next()) G = _(y, G.value, O), G !== null && (w = i(G, w, q), $ === null ? L = G : $.sibling = G, $ = G);
			return ht && Mi(y, q), L
		}
		for (H = r(y, H); !G.done; q++, G = b.next()) G = x(H, y, q, G.value, O), G !== null && (e && G.alternate !== null && H.delete(G.key === null ? q : G.key), w = i(G, w, q), $ === null ? L = G : $.sibling = G, $ = G);
		return e && H.forEach(function(fe) {
			return t(y, fe)
		}), ht && Mi(y, q), L
	}

	function C(y, w, b, O) {
		if (typeof b == "object" && b !== null && b.type === Ps && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
			switch (b.$$typeof) {
				case $c:
					e: {
						for (var L = b.key, $ = w; $ !== null;) {
							if ($.key === L) {
								if (L = b.type, L === Ps) {
									if ($.tag === 7) {
										n(y, $.sibling), w = o($, b.props.children), w.return = y, y = w;
										break e
									}
								} else if ($.elementType === L || typeof L == "object" && L !== null && L.$$typeof === jo && Y2(L) === $.type) {
									n(y, $.sibling), w = o($, b.props), w.ref = qa(y, $, b), w.return = y, y = w;
									break e
								}
								n(y, $);
								break
							} else t(y, $);
							$ = $.sibling
						}
						b.type === Ps ? (w = qi(b.props.children, y.mode, O, b.key), w.return = y, y = w) : (O = yu(b.type, b.key, b.props, null, y.mode, O), O.ref = qa(y, w, b), O.return = y, y = O)
					}
					return a(y);
				case Is:
					e: {
						for ($ = b.key; w !== null;) {
							if (w.key === $)
								if (w.tag === 4 && w.stateNode.containerInfo === b.containerInfo && w.stateNode.implementation === b.implementation) {
									n(y, w.sibling), w = o(w, b.children || []), w.return = y, y = w;
									break e
								} else {
									n(y, w);
									break
								}
							else t(y, w);
							w = w.sibling
						}
						w = Jf(b, y.mode, O),
						w.return = y,
						y = w
					}
					return a(y);
				case jo:
					return $ = b._init, C(y, w, $(b._payload), O)
			}
			if (il(b)) return k(y, w, b, O);
			if (Ha(b)) return A(y, w, b, O);
			Qc(y, b)
		}
		return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, w !== null && w.tag === 6 ? (n(y, w.sibling), w = o(w, b), w.return = y, y = w) : (n(y, w), w = Zf(b, y.mode, O), w.return = y, y = w), a(y)) : n(y, w)
	}
	return C
}
var va = Qg(!0),
	Zg = Qg(!1),
	Hu = fi(null),
	Wu = null,
	Ds = null,
	y0 = null;

function w0() {
	y0 = Ds = Wu = null
}

function x0(e) {
	var t = Hu.current;
	ut(Hu), e._currentValue = t
}

function th(e, t, n) {
	for (; e !== null;) {
		var r = e.alternate;
		if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
		e = e.return
	}
}

function qs(e, t) {
	Wu = e, y0 = Ds = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (bn = !0), e.firstContext = null)
}

function tr(e) {
	var t = e._currentValue;
	if (y0 !== e)
		if (e = {
				context: e,
				memoizedValue: t,
				next: null
			}, Ds === null) {
			if (Wu === null) throw Error(ce(308));
			Ds = e, Wu.dependencies = {
				lanes: 0,
				firstContext: e
			}
		} else Ds = Ds.next = e;
	return t
}
var Li = null;

function S0(e) {
	Li === null ? Li = [e] : Li.push(e)
}

function Jg(e, t, n, r) {
	var o = t.interleaved;
	return o === null ? (n.next = n, S0(t)) : (n.next = o.next, o.next = n), t.interleaved = n, mo(e, r)
}

function mo(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
	return n.tag === 3 ? n.stateNode : null
}
var To = !1;

function k0(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: {
			pending: null,
			interleaved: null,
			lanes: 0
		},
		effects: null
	}
}

function e3(e, t) {
	e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
		baseState: e.baseState,
		firstBaseUpdate: e.firstBaseUpdate,
		lastBaseUpdate: e.lastBaseUpdate,
		shared: e.shared,
		effects: e.effects
	})
}

function uo(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null
	}
}

function Xo(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (r = r.shared, Ge & 2) {
		var o = r.pending;
		return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, mo(e, n)
	}
	return o = r.interleaved, o === null ? (t.next = t, S0(r)) : (t.next = o.next, o.next = t), r.interleaved = t, mo(e, n)
}

function hu(e, t, n) {
	if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, l0(e, n)
	}
}

function q2(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && (r = r.updateQueue, n === r)) {
		var o = null,
			i = null;
		if (n = n.firstBaseUpdate, n !== null) {
			do {
				var a = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null
				};
				i === null ? o = i = a : i = i.next = a, n = n.next
			} while (n !== null);
			i === null ? o = i = t : i = i.next = t
		} else o = i = t;
		n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects
		}, e.updateQueue = n;
		return
	}
	e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Ku(e, t, n, r) {
	var o = e.updateQueue;
	To = !1;
	var i = o.firstBaseUpdate,
		a = o.lastBaseUpdate,
		c = o.shared.pending;
	if (c !== null) {
		o.shared.pending = null;
		var d = c,
			f = d.next;
		d.next = null, a === null ? i = f : a.next = f, a = d;
		var m = e.alternate;
		m !== null && (m = m.updateQueue, c = m.lastBaseUpdate, c !== a && (c === null ? m.firstBaseUpdate = f : c.next = f, m.lastBaseUpdate = d))
	}
	if (i !== null) {
		var _ = o.baseState;
		a = 0, m = f = d = null, c = i;
		do {
			var v = c.lane,
				x = c.eventTime;
			if ((r & v) === v) {
				m !== null && (m = m.next = {
					eventTime: x,
					lane: 0,
					tag: c.tag,
					payload: c.payload,
					callback: c.callback,
					next: null
				});
				e: {
					var k = e,
						A = c;
					switch (v = t, x = n, A.tag) {
						case 1:
							if (k = A.payload, typeof k == "function") {
								_ = k.call(x, _, v);
								break e
							}
							_ = k;
							break e;
						case 3:
							k.flags = k.flags & -65537 | 128;
						case 0:
							if (k = A.payload, v = typeof k == "function" ? k.call(x, _, v) : k, v == null) break e;
							_ = _t({}, _, v);
							break e;
						case 2:
							To = !0
					}
				}
				c.callback !== null && c.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [c] : v.push(c))
			} else x = {
				eventTime: x,
				lane: v,
				tag: c.tag,
				payload: c.payload,
				callback: c.callback,
				next: null
			}, m === null ? (f = m = x, d = _) : m = m.next = x, a |= v;
			if (c = c.next, c === null) {
				if (c = o.shared.pending, c === null) break;
				v = c, c = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null
			}
		} while (!0);
		if (m === null && (d = _), o.baseState = d, o.firstBaseUpdate = f, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
			o = t;
			do a |= o.lane, o = o.next; while (o !== t)
		} else i === null && (o.shared.lanes = 0);
		ns |= a, e.lanes = a, e.memoizedState = _
	}
}

function G2(e, t, n) {
	if (e = t.effects, t.effects = null, e !== null)
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (r.callback = null, r = n, typeof o != "function") throw Error(ce(191, o));
				o.call(r)
			}
		}
}
var lc = {},
	zr = fi(lc),
	Bl = fi(lc),
	zl = fi(lc);

function Di(e) {
	if (e === lc) throw Error(ce(174));
	return e
}

function b0(e, t) {
	switch (st(zl, t), st(Bl, e), st(zr, lc), e = t.nodeType, e) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : N1(null, "");
			break;
		default:
			e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = N1(t, e)
	}
	ut(zr), st(zr, t)
}

function _a() {
	ut(zr), ut(Bl), ut(zl)
}

function t3(e) {
	Di(zl.current);
	var t = Di(zr.current),
		n = N1(t, e.type);
	t !== n && (st(Bl, e), st(zr, n))
}

function C0(e) {
	Bl.current === e && (ut(zr), ut(Bl))
}
var mt = fi(0);

function Uu(e) {
	for (var t = e; t !== null;) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			t.child.return = t, t = t.child;
			continue
		}
		if (t === e) break;
		for (; t.sibling === null;) {
			if (t.return === null || t.return === e) return null;
			t = t.return
		}
		t.sibling.return = t.return, t = t.sibling
	}
	return null
}
var Uf = [];

function E0() {
	for (var e = 0; e < Uf.length; e++) Uf[e]._workInProgressVersionPrimary = null;
	Uf.length = 0
}
var pu = yo.ReactCurrentDispatcher,
	Yf = yo.ReactCurrentBatchConfig,
	ts = 0,
	vt = null,
	jt = null,
	zt = null,
	Yu = !1,
	yl = !1,
	$l = 0,
	K7 = 0;

function Jt() {
	throw Error(ce(321))
}

function A0(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!vr(e[n], t[n])) return !1;
	return !0
}

function I0(e, t, n, r, o, i) {
	if (ts = i, vt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pu.current = e === null || e.memoizedState === null ? G7 : X7, e = n(r, o), yl) {
		i = 0;
		do {
			if (yl = !1, $l = 0, 25 <= i) throw Error(ce(301));
			i += 1, zt = jt = null, t.updateQueue = null, pu.current = Q7, e = n(r, o)
		} while (yl)
	}
	if (pu.current = qu, t = jt !== null && jt.next !== null, ts = 0, zt = jt = vt = null, Yu = !1, t) throw Error(ce(300));
	return e
}

function P0() {
	var e = $l !== 0;
	return $l = 0, e
}

function Ar() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null
	};
	return zt === null ? vt.memoizedState = zt = e : zt = zt.next = e, zt
}

function nr() {
	if (jt === null) {
		var e = vt.alternate;
		e = e !== null ? e.memoizedState : null
	} else e = jt.next;
	var t = zt === null ? vt.memoizedState : zt.next;
	if (t !== null) zt = t, jt = e;
	else {
		if (e === null) throw Error(ce(310));
		jt = e, e = {
			memoizedState: jt.memoizedState,
			baseState: jt.baseState,
			baseQueue: jt.baseQueue,
			queue: jt.queue,
			next: null
		}, zt === null ? vt.memoizedState = zt = e : zt = zt.next = e
	}
	return zt
}

function Fl(e, t) {
	return typeof t == "function" ? t(e) : t
}

function qf(e) {
	var t = nr(),
		n = t.queue;
	if (n === null) throw Error(ce(311));
	n.lastRenderedReducer = e;
	var r = jt,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var a = o.next;
			o.next = i.next, i.next = a
		}
		r.baseQueue = o = i, n.pending = null
	}
	if (o !== null) {
		i = o.next, r = r.baseState;
		var c = a = null,
			d = null,
			f = i;
		do {
			var m = f.lane;
			if ((ts & m) === m) d !== null && (d = d.next = {
				lane: 0,
				action: f.action,
				hasEagerState: f.hasEagerState,
				eagerState: f.eagerState,
				next: null
			}), r = f.hasEagerState ? f.eagerState : e(r, f.action);
			else {
				var _ = {
					lane: m,
					action: f.action,
					hasEagerState: f.hasEagerState,
					eagerState: f.eagerState,
					next: null
				};
				d === null ? (c = d = _, a = r) : d = d.next = _, vt.lanes |= m, ns |= m
			}
			f = f.next
		} while (f !== null && f !== i);
		d === null ? a = r : d.next = c, vr(r, t.memoizedState) || (bn = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = d, n.lastRenderedState = r
	}
	if (e = n.interleaved, e !== null) {
		o = e;
		do i = o.lane, vt.lanes |= i, ns |= i, o = o.next; while (o !== e)
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch]
}

function Gf(e) {
	var t = nr(),
		n = t.queue;
	if (n === null) throw Error(ce(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var a = o = o.next;
		do i = e(i, a.action), a = a.next; while (a !== o);
		vr(i, t.memoizedState) || (bn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
	}
	return [i, r]
}

function n3() {}

function r3(e, t) {
	var n = vt,
		r = nr(),
		o = t(),
		i = !vr(r.memoizedState, o);
	if (i && (r.memoizedState = o, bn = !0), r = r.queue, O0(s3.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || zt !== null && zt.memoizedState.tag & 1) {
		if (n.flags |= 2048, Vl(9, i3.bind(null, n, r, o, t), void 0, null), Vt === null) throw Error(ce(349));
		ts & 30 || o3(n, t, o)
	}
	return o
}

function o3(e, t, n) {
	e.flags |= 16384, e = {
		getSnapshot: t,
		value: n
	}, t = vt.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, vt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function i3(e, t, n, r) {
	t.value = n, t.getSnapshot = r, a3(t) && l3(e)
}

function s3(e, t, n) {
	return n(function() {
		a3(t) && l3(e)
	})
}

function a3(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !vr(e, n)
	} catch {
		return !0
	}
}

function l3(e) {
	var t = mo(e, 1);
	t !== null && mr(t, e, 1, -1)
}

function X2(e) {
	var t = Ar();
	return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
		pending: null,
		interleaved: null,
		lanes: 0,
		dispatch: null,
		lastRenderedReducer: Fl,
		lastRenderedState: e
	}, t.queue = e, e = e.dispatch = q7.bind(null, vt, e), [t.memoizedState, e]
}

function Vl(e, t, n, r) {
	return e = {
		tag: e,
		create: t,
		destroy: n,
		deps: r,
		next: null
	}, t = vt.updateQueue, t === null ? (t = {
		lastEffect: null,
		stores: null
	}, vt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function c3() {
	return nr().memoizedState
}

function mu(e, t, n, r) {
	var o = Ar();
	vt.flags |= e, o.memoizedState = Vl(1 | t, n, void 0, r === void 0 ? null : r)
}

function kd(e, t, n, r) {
	var o = nr();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (jt !== null) {
		var a = jt.memoizedState;
		if (i = a.destroy, r !== null && A0(r, a.deps)) {
			o.memoizedState = Vl(t, n, i, r);
			return
		}
	}
	vt.flags |= e, o.memoizedState = Vl(1 | t, n, i, r)
}

function Q2(e, t) {
	return mu(8390656, 8, e, t)
}

function O0(e, t) {
	return kd(2048, 8, e, t)
}

function u3(e, t) {
	return kd(4, 2, e, t)
}

function d3(e, t) {
	return kd(4, 4, e, t)
}

function f3(e, t) {
	if (typeof t == "function") return e = e(), t(e),
		function() {
			t(null)
		};
	if (t != null) return e = e(), t.current = e,
		function() {
			t.current = null
		}
}

function h3(e, t, n) {
	return n = n != null ? n.concat([e]) : null, kd(4, 4, f3.bind(null, t, e), n)
}

function M0() {}

function p3(e, t) {
	var n = nr();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && A0(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function m3(e, t) {
	var n = nr();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && A0(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function v3(e, t, n) {
	return ts & 21 ? (vr(n, t) || (n = xg(), vt.lanes |= n, ns |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, bn = !0), e.memoizedState = n)
}

function U7(e, t) {
	var n = nt;
	nt = n !== 0 && 4 > n ? n : 4, e(!0);
	var r = Yf.transition;
	Yf.transition = {};
	try {
		e(!1), t()
	} finally {
		nt = n, Yf.transition = r
	}
}

function _3() {
	return nr().memoizedState
}

function Y7(e, t, n) {
	var r = Zo(e);
	if (n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, g3(e)) y3(t, n);
	else if (n = Jg(e, t, n, r), n !== null) {
		var o = mn();
		mr(n, e, r, o), w3(n, t, r)
	}
}

function q7(e, t, n) {
	var r = Zo(e),
		o = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
	if (g3(e)) y3(t, o);
	else {
		var i = e.alternate;
		if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
			var a = t.lastRenderedState,
				c = i(a, n);
			if (o.hasEagerState = !0, o.eagerState = c, vr(c, a)) {
				var d = t.interleaved;
				d === null ? (o.next = o, S0(t)) : (o.next = d.next, d.next = o), t.interleaved = o;
				return
			}
		} catch {} finally {}
		n = Jg(e, t, o, r), n !== null && (o = mn(), mr(n, e, r, o), w3(n, t, r))
	}
}

function g3(e) {
	var t = e.alternate;
	return e === vt || t !== null && t === vt
}

function y3(e, t) {
	yl = Yu = !0;
	var n = e.pending;
	n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function w3(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		r &= e.pendingLanes, n |= r, t.lanes = n, l0(e, n)
	}
}
var qu = {
		readContext: tr,
		useCallback: Jt,
		useContext: Jt,
		useEffect: Jt,
		useImperativeHandle: Jt,
		useInsertionEffect: Jt,
		useLayoutEffect: Jt,
		useMemo: Jt,
		useReducer: Jt,
		useRef: Jt,
		useState: Jt,
		useDebugValue: Jt,
		useDeferredValue: Jt,
		useTransition: Jt,
		useMutableSource: Jt,
		useSyncExternalStore: Jt,
		useId: Jt,
		unstable_isNewReconciler: !1
	},
	G7 = {
		readContext: tr,
		useCallback: function(e, t) {
			return Ar().memoizedState = [e, t === void 0 ? null : t], e
		},
		useContext: tr,
		useEffect: Q2,
		useImperativeHandle: function(e, t, n) {
			return n = n != null ? n.concat([e]) : null, mu(4194308, 4, f3.bind(null, t, e), n)
		},
		useLayoutEffect: function(e, t) {
			return mu(4194308, 4, e, t)
		},
		useInsertionEffect: function(e, t) {
			return mu(4, 2, e, t)
		},
		useMemo: function(e, t) {
			var n = Ar();
			return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
		},
		useReducer: function(e, t, n) {
			var r = Ar();
			return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: t
			}, r.queue = e, e = e.dispatch = Y7.bind(null, vt, e), [r.memoizedState, e]
		},
		useRef: function(e) {
			var t = Ar();
			return e = {
				current: e
			}, t.memoizedState = e
		},
		useState: X2,
		useDebugValue: M0,
		useDeferredValue: function(e) {
			return Ar().memoizedState = e
		},
		useTransition: function() {
			var e = X2(!1),
				t = e[0];
			return e = U7.bind(null, e[1]), Ar().memoizedState = e, [t, e]
		},
		useMutableSource: function() {},
		useSyncExternalStore: function(e, t, n) {
			var r = vt,
				o = Ar();
			if (ht) {
				if (n === void 0) throw Error(ce(407));
				n = n()
			} else {
				if (n = t(), Vt === null) throw Error(ce(349));
				ts & 30 || o3(r, t, n)
			}
			o.memoizedState = n;
			var i = {
				value: n,
				getSnapshot: t
			};
			return o.queue = i, Q2(s3.bind(null, r, i, e), [e]), r.flags |= 2048, Vl(9, i3.bind(null, r, i, n, t), void 0, null), n
		},
		useId: function() {
			var e = Ar(),
				t = Vt.identifierPrefix;
			if (ht) {
				var n = ao,
					r = so;
				n = (r & ~(1 << 32 - pr(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $l++, 0 < n && (t += "H" + n.toString(32)), t += ":"
			} else n = K7++, t = ":" + t + "r" + n.toString(32) + ":";
			return e.memoizedState = t
		},
		unstable_isNewReconciler: !1
	},
	X7 = {
		readContext: tr,
		useCallback: p3,
		useContext: tr,
		useEffect: O0,
		useImperativeHandle: h3,
		useInsertionEffect: u3,
		useLayoutEffect: d3,
		useMemo: m3,
		useReducer: qf,
		useRef: c3,
		useState: function() {
			return qf(Fl)
		},
		useDebugValue: M0,
		useDeferredValue: function(e) {
			var t = nr();
			return v3(t, jt.memoizedState, e)
		},
		useTransition: function() {
			var e = qf(Fl)[0],
				t = nr().memoizedState;
			return [e, t]
		},
		useMutableSource: n3,
		useSyncExternalStore: r3,
		useId: _3,
		unstable_isNewReconciler: !1
	},
	Q7 = {
		readContext: tr,
		useCallback: p3,
		useContext: tr,
		useEffect: O0,
		useImperativeHandle: h3,
		useInsertionEffect: u3,
		useLayoutEffect: d3,
		useMemo: m3,
		useReducer: Gf,
		useRef: c3,
		useState: function() {
			return Gf(Fl)
		},
		useDebugValue: M0,
		useDeferredValue: function(e) {
			var t = nr();
			return jt === null ? t.memoizedState = e : v3(t, jt.memoizedState, e)
		},
		useTransition: function() {
			var e = Gf(Fl)[0],
				t = nr().memoizedState;
			return [e, t]
		},
		useMutableSource: n3,
		useSyncExternalStore: r3,
		useId: _3,
		unstable_isNewReconciler: !1
	};

function ir(e, t) {
	if (e && e.defaultProps) {
		t = _t({}, t), e = e.defaultProps;
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t
	}
	return t
}

function nh(e, t, n, r) {
	t = e.memoizedState, n = n(r, t), n = n == null ? t : _t({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var bd = {
	isMounted: function(e) {
		return (e = e._reactInternals) ? ls(e) === e : !1
	},
	enqueueSetState: function(e, t, n) {
		e = e._reactInternals;
		var r = mn(),
			o = Zo(e),
			i = uo(r, o);
		i.payload = t, n != null && (i.callback = n), t = Xo(e, i, o), t !== null && (mr(t, e, o, r), hu(t, e, o))
	},
	enqueueReplaceState: function(e, t, n) {
		e = e._reactInternals;
		var r = mn(),
			o = Zo(e),
			i = uo(r, o);
		i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Xo(e, i, o), t !== null && (mr(t, e, o, r), hu(t, e, o))
	},
	enqueueForceUpdate: function(e, t) {
		e = e._reactInternals;
		var n = mn(),
			r = Zo(e),
			o = uo(n, r);
		o.tag = 2, t != null && (o.callback = t), t = Xo(e, o, r), t !== null && (mr(t, e, r, n), hu(t, e, r))
	}
};

function Z2(e, t, n, r, o, i, a) {
	return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Rl(n, r) || !Rl(o, i) : !0
}

function x3(e, t, n) {
	var r = !1,
		o = ii,
		i = t.contextType;
	return typeof i == "object" && i !== null ? i = tr(i) : (o = An(t) ? Ji : an.current, r = t.contextTypes, i = (r = r != null) ? pa(e, o) : ii), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bd, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function J2(e, t, n, r) {
	e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bd.enqueueReplaceState(t, t.state, null)
}

function rh(e, t, n, r) {
	var o = e.stateNode;
	o.props = n, o.state = e.memoizedState, o.refs = {}, k0(e);
	var i = t.contextType;
	typeof i == "object" && i !== null ? o.context = tr(i) : (i = An(t) ? Ji : an.current, o.context = pa(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (nh(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && bd.enqueueReplaceState(o, o.state, null), Ku(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function ga(e, t) {
	try {
		var n = "",
			r = t;
		do n += C6(r), r = r.return; while (r);
		var o = n
	} catch (i) {
		o = `
Error generating stack: ` + i.message + `
` + i.stack
	}
	return {
		value: e,
		source: t,
		stack: o,
		digest: null
	}
}

function Xf(e, t, n) {
	return {
		value: e,
		source: null,
		stack: n ?? null,
		digest: t ?? null
	}
}

function oh(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function() {
			throw n
		})
	}
}
var Z7 = typeof WeakMap == "function" ? WeakMap : Map;

function S3(e, t, n) {
	n = uo(-1, n), n.tag = 3, n.payload = {
		element: null
	};
	var r = t.value;
	return n.callback = function() {
		Xu || (Xu = !0, ph = r), oh(e, t)
	}, n
}

function k3(e, t, n) {
	n = uo(-1, n), n.tag = 3;
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var o = t.value;
		n.payload = function() {
			return r(o)
		}, n.callback = function() {
			oh(e, t)
		}
	}
	var i = e.stateNode;
	return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
		oh(e, t), typeof r != "function" && (Qo === null ? Qo = new Set([this]) : Qo.add(this));
		var a = t.stack;
		this.componentDidCatch(t.value, {
			componentStack: a !== null ? a : ""
		})
	}), n
}

function em(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Z7;
		var o = new Set;
		r.set(t, o)
	} else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
	o.has(n) || (o.add(n), e = fw.bind(null, e, t, n), t.then(e, e))
}

function tm(e) {
	do {
		var t;
		if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
		e = e.return
	} while (e !== null);
	return null
}

function nm(e, t, n, r, o) {
	return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = uo(-1, 1), t.tag = 2, Xo(n, t, 1))), n.lanes |= 1), e)
}
var J7 = yo.ReactCurrentOwner,
	bn = !1;

function un(e, t, n, r) {
	t.child = e === null ? Zg(t, null, n, r) : va(t, e.child, n, r)
}

function rm(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return qs(t, o), r = I0(e, t, n, r, i, o), n = P0(), e !== null && !bn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, vo(e, t, o)) : (ht && n && v0(t), t.flags |= 1, un(e, t, r, o), t.child)
}

function om(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == "function" && !z0(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, b3(e, t, i, r, o)) : (e = yu(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
	}
	if (i = e.child, !(e.lanes & o)) {
		var a = i.memoizedProps;
		if (n = n.compare, n = n !== null ? n : Rl, n(a, r) && e.ref === t.ref) return vo(e, t, o)
	}
	return t.flags |= 1, e = Jo(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function b3(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (Rl(i, r) && e.ref === t.ref)
			if (bn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (bn = !0);
			else return t.lanes = e.lanes, vo(e, t, o)
	}
	return ih(e, t, n, r, o)
}

function C3(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1)) t.memoizedState = {
			baseLanes: 0,
			cachePool: null,
			transitions: null
		}, st(zs, Tn), Tn |= n;
		else {
			if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
				baseLanes: e,
				cachePool: null,
				transitions: null
			}, t.updateQueue = null, st(zs, Tn), Tn |= e, null;
			t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, r = i !== null ? i.baseLanes : n, st(zs, Tn), Tn |= r
		}
	else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, st(zs, Tn), Tn |= r;
	return un(e, t, o, n), t.child
}

function E3(e, t) {
	var n = t.ref;
	(e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ih(e, t, n, r, o) {
	var i = An(n) ? Ji : an.current;
	return i = pa(t, i), qs(t, o), n = I0(e, t, n, r, i, o), r = P0(), e !== null && !bn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, vo(e, t, o)) : (ht && r && v0(t), t.flags |= 1, un(e, t, n, o), t.child)
}

function im(e, t, n, r, o) {
	if (An(n)) {
		var i = !0;
		$u(t)
	} else i = !1;
	if (qs(t, o), t.stateNode === null) vu(e, t), x3(t, n, r), rh(t, n, r, o), r = !0;
	else if (e === null) {
		var a = t.stateNode,
			c = t.memoizedProps;
		a.props = c;
		var d = a.context,
			f = n.contextType;
		typeof f == "object" && f !== null ? f = tr(f) : (f = An(n) ? Ji : an.current, f = pa(t, f));
		var m = n.getDerivedStateFromProps,
			_ = typeof m == "function" || typeof a.getSnapshotBeforeUpdate == "function";
		_ || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== r || d !== f) && J2(t, a, r, f), To = !1;
		var v = t.memoizedState;
		a.state = v, Ku(t, r, a, o), d = t.memoizedState, c !== r || v !== d || En.current || To ? (typeof m == "function" && (nh(t, n, m, r), d = t.memoizedState), (c = To || Z2(t, n, c, r, v, d, f)) ? (_ || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), a.props = r, a.state = d, a.context = f, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
	} else {
		a = t.stateNode, e3(e, t), c = t.memoizedProps, f = t.type === t.elementType ? c : ir(t.type, c), a.props = f, _ = t.pendingProps, v = a.context, d = n.contextType, typeof d == "object" && d !== null ? d = tr(d) : (d = An(n) ? Ji : an.current, d = pa(t, d));
		var x = n.getDerivedStateFromProps;
		(m = typeof x == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (c !== _ || v !== d) && J2(t, a, r, d), To = !1, v = t.memoizedState, a.state = v, Ku(t, r, a, o);
		var k = t.memoizedState;
		c !== _ || v !== k || En.current || To ? (typeof x == "function" && (nh(t, n, x, r), k = t.memoizedState), (f = To || Z2(t, n, f, r, v, k, d) || !1) ? (m || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, k, d), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, k, d)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), a.props = r, a.state = k, a.context = d, r = f) : (typeof a.componentDidUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
	}
	return sh(e, t, n, r, i, o)
}

function sh(e, t, n, r, o, i) {
	E3(e, t);
	var a = (t.flags & 128) !== 0;
	if (!r && !a) return o && W2(t, n, !1), vo(e, t, i);
	r = t.stateNode, J7.current = t;
	var c = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
	return t.flags |= 1, e !== null && a ? (t.child = va(t, e.child, null, i), t.child = va(t, null, c, i)) : un(e, t, c, i), t.memoizedState = r.state, o && W2(t, n, !0), t.child
}

function A3(e) {
	var t = e.stateNode;
	t.pendingContext ? H2(e, t.pendingContext, t.pendingContext !== t.context) : t.context && H2(e, t.context, !1), b0(e, t.containerInfo)
}

function sm(e, t, n, r, o) {
	return ma(), g0(o), t.flags |= 256, un(e, t, n, r), t.child
}
var ah = {
	dehydrated: null,
	treeContext: null,
	retryLane: 0
};

function lh(e) {
	return {
		baseLanes: e,
		cachePool: null,
		transitions: null
	}
}

function I3(e, t, n) {
	var r = t.pendingProps,
		o = mt.current,
		i = !1,
		a = (t.flags & 128) !== 0,
		c;
	if ((c = a) || (c = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), c ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), st(mt, o & 1), e === null) return eh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = {
		mode: "hidden",
		children: a
	}, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Ad(a, r, 0, null), e = qi(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = lh(n), t.memoizedState = ah, e) : j0(t, a));
	if (o = e.memoizedState, o !== null && (c = o.dehydrated, c !== null)) return ew(e, t, a, r, c, o, n);
	if (i) {
		i = r.fallback, a = t.mode, o = e.child, c = o.sibling;
		var d = {
			mode: "hidden",
			children: r.children
		};
		return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = Jo(o, d), r.subtreeFlags = o.subtreeFlags & 14680064), c !== null ? i = Jo(c, i) : (i = qi(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? lh(n) : {
			baseLanes: a.baseLanes | n,
			cachePool: null,
			transitions: a.transitions
		}, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = ah, r
	}
	return i = e.child, e = i.sibling, r = Jo(i, {
		mode: "visible",
		children: r.children
	}), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function j0(e, t) {
	return t = Ad({
		mode: "visible",
		children: t
	}, e.mode, 0, null), t.return = e, e.child = t
}

function Zc(e, t, n, r) {
	return r !== null && g0(r), va(t, e.child, null, n), e = j0(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function ew(e, t, n, r, o, i, a) {
	if (n) return t.flags & 256 ? (t.flags &= -257, r = Xf(Error(ce(422))), Zc(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Ad({
		mode: "visible",
		children: r.children
	}, o, 0, null), i = qi(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && va(t, e.child, null, a), t.child.memoizedState = lh(a), t.memoizedState = ah, i);
	if (!(t.mode & 1)) return Zc(e, t, a, null);
	if (o.data === "$!") {
		if (r = o.nextSibling && o.nextSibling.dataset, r) var c = r.dgst;
		return r = c, i = Error(ce(419)), r = Xf(i, r, void 0), Zc(e, t, a, r)
	}
	if (c = (a & e.childLanes) !== 0, bn || c) {
		if (r = Vt, r !== null) {
			switch (a & -a) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0
			}
			o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, mo(e, o), mr(r, e, o, -1))
		}
		return B0(), r = Xf(Error(ce(421))), Zc(e, t, a, r)
	}
	return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hw.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ln = Go(o.nextSibling), Bn = t, ht = !0, ur = null, e !== null && (Gn[Xn++] = so, Gn[Xn++] = ao, Gn[Xn++] = es, so = e.id, ao = e.overflow, es = t), t = j0(t, r.children), t.flags |= 4096, t)
}

function am(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), th(e.return, t, n)
}

function Qf(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null ? e.memoizedState = {
		isBackwards: t,
		rendering: null,
		renderingStartTime: 0,
		last: r,
		tail: n,
		tailMode: o
	} : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function P3(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if (un(e, t, r.children, n), r = mt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
	else {
		if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && am(e, n, t);
			else if (e.tag === 19) am(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue
			}
			if (e === t) break e;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break e;
				e = e.return
			}
			e.sibling.return = e.return, e = e.sibling
		}
		r &= 1
	}
	if (st(mt, r), !(t.mode & 1)) t.memoizedState = null;
	else switch (o) {
		case "forwards":
			for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && Uu(e) === null && (o = n), n = n.sibling;
			n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Qf(t, !1, o, n, i);
			break;
		case "backwards":
			for (n = null, o = t.child, t.child = null; o !== null;) {
				if (e = o.alternate, e !== null && Uu(e) === null) {
					t.child = o;
					break
				}
				e = o.sibling, o.sibling = n, n = o, o = e
			}
			Qf(t, !0, n, null, i);
			break;
		case "together":
			Qf(t, !1, null, null, void 0);
			break;
		default:
			t.memoizedState = null
	}
	return t.child
}

function vu(e, t) {
	!(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function vo(e, t, n) {
	if (e !== null && (t.dependencies = e.dependencies), ns |= t.lanes, !(n & t.childLanes)) return null;
	if (e !== null && t.child !== e.child) throw Error(ce(153));
	if (t.child !== null) {
		for (e = t.child, n = Jo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Jo(e, e.pendingProps), n.return = t;
		n.sibling = null
	}
	return t.child
}

function tw(e, t, n) {
	switch (t.tag) {
		case 3:
			A3(t), ma();
			break;
		case 5:
			t3(t);
			break;
		case 1:
			An(t.type) && $u(t);
			break;
		case 4:
			b0(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			st(Hu, r._currentValue), r._currentValue = o;
			break;
		case 13:
			if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (st(mt, mt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? I3(e, t, n) : (st(mt, mt.current & 1), e = vo(e, t, n), e !== null ? e.sibling : null);
			st(mt, mt.current & 1);
			break;
		case 19:
			if (r = (n & t.childLanes) !== 0, e.flags & 128) {
				if (r) return P3(e, t, n);
				t.flags |= 128
			}
			if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), st(mt, mt.current), r) break;
			return null;
		case 22:
		case 23:
			return t.lanes = 0, C3(e, t, n)
	}
	return vo(e, t, n)
}
var O3, ch, M3, j3;
O3 = function(e, t) {
	for (var n = t.child; n !== null;) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			n.child.return = n, n = n.child;
			continue
		}
		if (n === t) break;
		for (; n.sibling === null;) {
			if (n.return === null || n.return === t) return;
			n = n.return
		}
		n.sibling.return = n.return, n = n.sibling
	}
};
ch = function() {};
M3 = function(e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		e = t.stateNode, Di(zr.current);
		var i = null;
		switch (n) {
			case "input":
				o = M1(e, o), r = M1(e, r), i = [];
				break;
			case "select":
				o = _t({}, o, {
					value: void 0
				}), r = _t({}, r, {
					value: void 0
				}), i = [];
				break;
			case "textarea":
				o = R1(e, o), r = R1(e, r), i = [];
				break;
			default:
				typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Bu)
		}
		L1(n, r);
		var a;
		n = null;
		for (f in o)
			if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && o[f] != null)
				if (f === "style") {
					var c = o[f];
					for (a in c) c.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
				} else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Al.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
		for (f in r) {
			var d = r[f];
			if (c = o != null ? o[f] : void 0, r.hasOwnProperty(f) && d !== c && (d != null || c != null))
				if (f === "style")
					if (c) {
						for (a in c) !c.hasOwnProperty(a) || d && d.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
						for (a in d) d.hasOwnProperty(a) && c[a] !== d[a] && (n || (n = {}), n[a] = d[a])
					} else n || (i || (i = []), i.push(f, n)), n = d;
			else f === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, c = c ? c.__html : void 0, d != null && c !== d && (i = i || []).push(f, d)) : f === "children" ? typeof d != "string" && typeof d != "number" || (i = i || []).push(f, "" + d) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Al.hasOwnProperty(f) ? (d != null && f === "onScroll" && lt("scroll", e), i || c === d || (i = [])) : (i = i || []).push(f, d))
		}
		n && (i = i || []).push("style", n);
		var f = i;
		(t.updateQueue = f) && (t.flags |= 4)
	}
};
j3 = function(e, t, n, r) {
	n !== r && (t.flags |= 4)
};

function Ga(e, t) {
	if (!ht) switch (e.tailMode) {
		case "hidden":
			t = e.tail;
			for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
			n === null ? e.tail = null : n.sibling = null;
			break;
		case "collapsed":
			n = e.tail;
			for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
			r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
	}
}

function en(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
	else
		for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
	return e.subtreeFlags |= r, e.childLanes = n, t
}

function nw(e, t, n) {
	var r = t.pendingProps;
	switch (_0(t), t.tag) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return en(t), null;
		case 1:
			return An(t.type) && zu(), en(t), null;
		case 3:
			return r = t.stateNode, _a(), ut(En), ut(an), E0(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xc(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ur !== null && (_h(ur), ur = null))), ch(e, t), en(t), null;
		case 5:
			C0(t);
			var o = Di(zl.current);
			if (n = t.type, e !== null && t.stateNode != null) M3(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(ce(166));
					return en(t), null
				}
				if (e = Di(zr.current), Xc(t)) {
					r = t.stateNode, n = t.type;
					var i = t.memoizedProps;
					switch (r[Rr] = t, r[Dl] = i, e = (t.mode & 1) !== 0, n) {
						case "dialog":
							lt("cancel", r), lt("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							lt("load", r);
							break;
						case "video":
						case "audio":
							for (o = 0; o < al.length; o++) lt(al[o], r);
							break;
						case "source":
							lt("error", r);
							break;
						case "img":
						case "image":
						case "link":
							lt("error", r), lt("load", r);
							break;
						case "details":
							lt("toggle", r);
							break;
						case "input":
							v2(r, i), lt("invalid", r);
							break;
						case "select":
							r._wrapperState = {
								wasMultiple: !!i.multiple
							}, lt("invalid", r);
							break;
						case "textarea":
							g2(r, i), lt("invalid", r)
					}
					L1(n, i), o = null;
					for (var a in i)
						if (i.hasOwnProperty(a)) {
							var c = i[a];
							a === "children" ? typeof c == "string" ? r.textContent !== c && (i.suppressHydrationWarning !== !0 && Gc(r.textContent, c, e), o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (i.suppressHydrationWarning !== !0 && Gc(r.textContent, c, e), o = ["children", "" + c]) : Al.hasOwnProperty(a) && c != null && a === "onScroll" && lt("scroll", r)
						} switch (n) {
						case "input":
							Fc(r), _2(r, i, !0);
							break;
						case "textarea":
							Fc(r), y2(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof i.onClick == "function" && (r.onclick = Bu)
					}
					r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
				} else {
					a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
						is: r.is
					}) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[Rr] = t, e[Dl] = r, O3(e, t, !1, !1), t.stateNode = e;
					e: {
						switch (a = D1(n, r), n) {
							case "dialog":
								lt("cancel", e), lt("close", e), o = r;
								break;
							case "iframe":
							case "object":
							case "embed":
								lt("load", e), o = r;
								break;
							case "video":
							case "audio":
								for (o = 0; o < al.length; o++) lt(al[o], e);
								o = r;
								break;
							case "source":
								lt("error", e), o = r;
								break;
							case "img":
							case "image":
							case "link":
								lt("error", e), lt("load", e), o = r;
								break;
							case "details":
								lt("toggle", e), o = r;
								break;
							case "input":
								v2(e, r), o = M1(e, r), lt("invalid", e);
								break;
							case "option":
								o = r;
								break;
							case "select":
								e._wrapperState = {
									wasMultiple: !!r.multiple
								}, o = _t({}, r, {
									value: void 0
								}), lt("invalid", e);
								break;
							case "textarea":
								g2(e, r), o = R1(e, r), lt("invalid", e);
								break;
							default:
								o = r
						}
						L1(n, o),
						c = o;
						for (i in c)
							if (c.hasOwnProperty(i)) {
								var d = c[i];
								i === "style" ? cg(e, d) : i === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && ag(e, d)) : i === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && Il(e, d) : typeof d == "number" && Il(e, "" + d) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Al.hasOwnProperty(i) ? d != null && i === "onScroll" && lt("scroll", e) : d != null && n0(e, i, d, a))
							} switch (n) {
							case "input":
								Fc(e), _2(e, r, !1);
								break;
							case "textarea":
								Fc(e), y2(e);
								break;
							case "option":
								r.value != null && e.setAttribute("value", "" + oi(r.value));
								break;
							case "select":
								e.multiple = !!r.multiple, i = r.value, i != null ? Ws(e, !!r.multiple, i, !1) : r.defaultValue != null && Ws(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof o.onClick == "function" && (e.onclick = Bu)
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
			}
			return en(t), null;
		case 6:
			if (e && t.stateNode != null) j3(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null) throw Error(ce(166));
				if (n = Di(zl.current), Di(zr.current), Xc(t)) {
					if (r = t.stateNode, n = t.memoizedProps, r[Rr] = t, (i = r.nodeValue !== n) && (e = Bn, e !== null)) switch (e.tag) {
						case 3:
							Gc(r.nodeValue, n, (e.mode & 1) !== 0);
							break;
						case 5:
							e.memoizedProps.suppressHydrationWarning !== !0 && Gc(r.nodeValue, n, (e.mode & 1) !== 0)
					}
					i && (t.flags |= 4)
				} else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Rr] = t, t.stateNode = r
			}
			return en(t), null;
		case 13:
			if (ut(mt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
				if (ht && Ln !== null && t.mode & 1 && !(t.flags & 128)) Xg(), ma(), t.flags |= 98560, i = !1;
				else if (i = Xc(t), r !== null && r.dehydrated !== null) {
					if (e === null) {
						if (!i) throw Error(ce(318));
						if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(ce(317));
						i[Rr] = t
					} else ma(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
					en(t), i = !1
				} else ur !== null && (_h(ur), ur = null), i = !0;
				if (!i) return t.flags & 65536 ? t : null
			}
			return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || mt.current & 1 ? Rt === 0 && (Rt = 3) : B0())), t.updateQueue !== null && (t.flags |= 4), en(t), null);
		case 4:
			return _a(), ch(e, t), e === null && Nl(t.stateNode.containerInfo), en(t), null;
		case 10:
			return x0(t.type._context), en(t), null;
		case 17:
			return An(t.type) && zu(), en(t), null;
		case 19:
			if (ut(mt), i = t.memoizedState, i === null) return en(t), null;
			if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
				if (r) Ga(i, !1);
				else {
					if (Rt !== 0 || e !== null && e.flags & 128)
						for (e = t.child; e !== null;) {
							if (a = Uu(e), a !== null) {
								for (t.flags |= 128, Ga(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
									lanes: e.lanes,
									firstContext: e.firstContext
								}), n = n.sibling;
								return st(mt, mt.current & 1 | 2), t.child
							}
							e = e.sibling
						}
					i.tail !== null && Ct() > ya && (t.flags |= 128, r = !0, Ga(i, !1), t.lanes = 4194304)
				}
			else {
				if (!r)
					if (e = Uu(a), e !== null) {
						if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ga(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !ht) return en(t), null
					} else 2 * Ct() - i.renderingStartTime > ya && n !== 1073741824 && (t.flags |= 128, r = !0, Ga(i, !1), t.lanes = 4194304);
				i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a)
			}
			return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ct(), t.sibling = null, n = mt.current, st(mt, r ? n & 1 | 2 : n & 1), t) : (en(t), null);
		case 22:
		case 23:
			return D0(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tn & 1073741824 && (en(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : en(t), null;
		case 24:
			return null;
		case 25:
			return null
	}
	throw Error(ce(156, t.tag))
}

function rw(e, t) {
	switch (_0(t), t.tag) {
		case 1:
			return An(t.type) && zu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 3:
			return _a(), ut(En), ut(an), E0(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
		case 5:
			return C0(t), null;
		case 13:
			if (ut(mt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
				if (t.alternate === null) throw Error(ce(340));
				ma()
			}
			return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
		case 19:
			return ut(mt), null;
		case 4:
			return _a(), null;
		case 10:
			return x0(t.type._context), null;
		case 22:
		case 23:
			return D0(), null;
		case 24:
			return null;
		default:
			return null
	}
}
var Jc = !1,
	rn = !1,
	ow = typeof WeakSet == "function" ? WeakSet : Set,
	be = null;

function Bs(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function") try {
			n(null)
		} catch (r) {
			xt(e, t, r)
		} else n.current = null
}

function uh(e, t, n) {
	try {
		n()
	} catch (r) {
		xt(e, t, r)
	}
}
var lm = !1;

function iw(e, t) {
	if (Y1 = Nu, e = Dg(), m0(e)) {
		if ("selectionStart" in e) var n = {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		else e: {
			n = (n = e.ownerDocument) && n.defaultView || window;
			var r = n.getSelection && n.getSelection();
			if (r && r.rangeCount !== 0) {
				n = r.anchorNode;
				var o = r.anchorOffset,
					i = r.focusNode;
				r = r.focusOffset;
				try {
					n.nodeType, i.nodeType
				} catch {
					n = null;
					break e
				}
				var a = 0,
					c = -1,
					d = -1,
					f = 0,
					m = 0,
					_ = e,
					v = null;
				t: for (;;) {
					for (var x; _ !== n || o !== 0 && _.nodeType !== 3 || (c = a + o), _ !== i || r !== 0 && _.nodeType !== 3 || (d = a + r), _.nodeType === 3 && (a += _.nodeValue.length), (x = _.firstChild) !== null;) v = _, _ = x;
					for (;;) {
						if (_ === e) break t;
						if (v === n && ++f === o && (c = a), v === i && ++m === r && (d = a), (x = _.nextSibling) !== null) break;
						_ = v, v = _.parentNode
					}
					_ = x
				}
				n = c === -1 || d === -1 ? null : {
					start: c,
					end: d
				}
			} else n = null
		}
		n = n || {
			start: 0,
			end: 0
		}
	} else n = null;
	for (q1 = {
			focusedElem: e,
			selectionRange: n
		}, Nu = !1, be = t; be !== null;)
		if (t = be, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, be = e;
		else
			for (; be !== null;) {
				t = be;
				try {
					var k = t.alternate;
					if (t.flags & 1024) switch (t.tag) {
						case 0:
						case 11:
						case 15:
							break;
						case 1:
							if (k !== null) {
								var A = k.memoizedProps,
									C = k.memoizedState,
									y = t.stateNode,
									w = y.getSnapshotBeforeUpdate(t.elementType === t.type ? A : ir(t.type, A), C);
								y.__reactInternalSnapshotBeforeUpdate = w
							}
							break;
						case 3:
							var b = t.stateNode.containerInfo;
							b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17:
							break;
						default:
							throw Error(ce(163))
					}
				} catch (O) {
					xt(t, t.return, O)
				}
				if (e = t.sibling, e !== null) {
					e.return = t.return, be = e;
					break
				}
				be = t.return
			}
	return k = lm, lm = !1, k
}

function wl(e, t, n) {
	var r = t.updateQueue;
	if (r = r !== null ? r.lastEffect : null, r !== null) {
		var o = r = r.next;
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				o.destroy = void 0, i !== void 0 && uh(t, n, i)
			}
			o = o.next
		} while (o !== r)
	}
}

function Cd(e, t) {
	if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
		var n = t = t.next;
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}

function dh(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n
		}
		typeof t == "function" ? t(e) : t.current = e
	}
}

function T3(e) {
	var t = e.alternate;
	t !== null && (e.alternate = null, T3(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Rr], delete t[Dl], delete t[Q1], delete t[F7], delete t[V7])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function R3(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function cm(e) {
	e: for (;;) {
		for (; e.sibling === null;) {
			if (e.return === null || R3(e.return)) return null;
			e = e.return
		}
		for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			e.child.return = e, e = e.child
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}

function fh(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Bu));
	else if (r !== 4 && (e = e.child, e !== null))
		for (fh(e, t, n), e = e.sibling; e !== null;) fh(e, t, n), e = e.sibling
}

function hh(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && (e = e.child, e !== null))
		for (hh(e, t, n), e = e.sibling; e !== null;) hh(e, t, n), e = e.sibling
}
var Ht = null,
	cr = !1;

function Io(e, t, n) {
	for (n = n.child; n !== null;) N3(e, t, n), n = n.sibling
}

function N3(e, t, n) {
	if (Br && typeof Br.onCommitFiberUnmount == "function") try {
		Br.onCommitFiberUnmount(_d, n)
	} catch {}
	switch (n.tag) {
		case 5:
			rn || Bs(n, t);
		case 6:
			var r = Ht,
				o = cr;
			Ht = null, Io(e, t, n), Ht = r, cr = o, Ht !== null && (cr ? (e = Ht, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ht.removeChild(n.stateNode));
			break;
		case 18:
			Ht !== null && (cr ? (e = Ht, n = n.stateNode, e.nodeType === 8 ? Wf(e.parentNode, n) : e.nodeType === 1 && Wf(e, n), jl(e)) : Wf(Ht, n.stateNode));
			break;
		case 4:
			r = Ht, o = cr, Ht = n.stateNode.containerInfo, cr = !0, Io(e, t, n), Ht = r, cr = o;
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (!rn && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
				o = r = r.next;
				do {
					var i = o,
						a = i.destroy;
					i = i.tag, a !== void 0 && (i & 2 || i & 4) && uh(n, t, a), o = o.next
				} while (o !== r)
			}
			Io(e, t, n);
			break;
		case 1:
			if (!rn && (Bs(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
				r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
			} catch (c) {
				xt(n, t, c)
			}
			Io(e, t, n);
			break;
		case 21:
			Io(e, t, n);
			break;
		case 22:
			n.mode & 1 ? (rn = (r = rn) || n.memoizedState !== null, Io(e, t, n), rn = r) : Io(e, t, n);
			break;
		default:
			Io(e, t, n)
	}
}

function um(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new ow), t.forEach(function(r) {
			var o = pw.bind(null, e, r);
			n.has(r) || (n.add(r), r.then(o, o))
		})
	}
}

function or(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					a = t,
					c = a;
				e: for (; c !== null;) {
					switch (c.tag) {
						case 5:
							Ht = c.stateNode, cr = !1;
							break e;
						case 3:
							Ht = c.stateNode.containerInfo, cr = !0;
							break e;
						case 4:
							Ht = c.stateNode.containerInfo, cr = !0;
							break e
					}
					c = c.return
				}
				if (Ht === null) throw Error(ce(160));
				N3(i, a, o), Ht = null, cr = !1;
				var d = o.alternate;
				d !== null && (d.return = null), o.return = null
			} catch (f) {
				xt(o, t, f)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null;) L3(t, e), t = t.sibling
}

function L3(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if (or(t, e), br(e), r & 4) {
				try {
					wl(3, e, e.return), Cd(3, e)
				} catch (A) {
					xt(e, e.return, A)
				}
				try {
					wl(5, e, e.return)
				} catch (A) {
					xt(e, e.return, A)
				}
			}
			break;
		case 1:
			or(t, e), br(e), r & 512 && n !== null && Bs(n, n.return);
			break;
		case 5:
			if (or(t, e), br(e), r & 512 && n !== null && Bs(n, n.return), e.flags & 32) {
				var o = e.stateNode;
				try {
					Il(o, "")
				} catch (A) {
					xt(e, e.return, A)
				}
			}
			if (r & 4 && (o = e.stateNode, o != null)) {
				var i = e.memoizedProps,
					a = n !== null ? n.memoizedProps : i,
					c = e.type,
					d = e.updateQueue;
				if (e.updateQueue = null, d !== null) try {
					c === "input" && i.type === "radio" && i.name != null && og(o, i), D1(c, a);
					var f = D1(c, i);
					for (a = 0; a < d.length; a += 2) {
						var m = d[a],
							_ = d[a + 1];
						m === "style" ? cg(o, _) : m === "dangerouslySetInnerHTML" ? ag(o, _) : m === "children" ? Il(o, _) : n0(o, m, _, f)
					}
					switch (c) {
						case "input":
							j1(o, i);
							break;
						case "textarea":
							ig(o, i);
							break;
						case "select":
							var v = o._wrapperState.wasMultiple;
							o._wrapperState.wasMultiple = !!i.multiple;
							var x = i.value;
							x != null ? Ws(o, !!i.multiple, x, !1) : v !== !!i.multiple && (i.defaultValue != null ? Ws(o, !!i.multiple, i.defaultValue, !0) : Ws(o, !!i.multiple, i.multiple ? [] : "", !1))
					}
					o[Dl] = i
				} catch (A) {
					xt(e, e.return, A)
				}
			}
			break;
		case 6:
			if (or(t, e), br(e), r & 4) {
				if (e.stateNode === null) throw Error(ce(162));
				o = e.stateNode, i = e.memoizedProps;
				try {
					o.nodeValue = i
				} catch (A) {
					xt(e, e.return, A)
				}
			}
			break;
		case 3:
			if (or(t, e), br(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
				jl(t.containerInfo)
			} catch (A) {
				xt(e, e.return, A)
			}
			break;
		case 4:
			or(t, e), br(e);
			break;
		case 13:
			or(t, e), br(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (N0 = Ct())), r & 4 && um(e);
			break;
		case 22:
			if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (rn = (f = rn) || m, or(t, e), rn = f) : or(t, e), br(e), r & 8192) {
				if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !m && e.mode & 1)
					for (be = e, m = e.child; m !== null;) {
						for (_ = be = m; be !== null;) {
							switch (v = be, x = v.child, v.tag) {
								case 0:
								case 11:
								case 14:
								case 15:
									wl(4, v, v.return);
									break;
								case 1:
									Bs(v, v.return);
									var k = v.stateNode;
									if (typeof k.componentWillUnmount == "function") {
										r = v, n = v.return;
										try {
											t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount()
										} catch (A) {
											xt(r, n, A)
										}
									}
									break;
								case 5:
									Bs(v, v.return);
									break;
								case 22:
									if (v.memoizedState !== null) {
										fm(_);
										continue
									}
							}
							x !== null ? (x.return = v, be = x) : fm(_)
						}
						m = m.sibling
					}
				e: for (m = null, _ = e;;) {
					if (_.tag === 5) {
						if (m === null) {
							m = _;
							try {
								o = _.stateNode, f ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (c = _.stateNode, d = _.memoizedProps.style, a = d != null && d.hasOwnProperty("display") ? d.display : null, c.style.display = lg("display", a))
							} catch (A) {
								xt(e, e.return, A)
							}
						}
					} else if (_.tag === 6) {
						if (m === null) try {
							_.stateNode.nodeValue = f ? "" : _.memoizedProps
						} catch (A) {
							xt(e, e.return, A)
						}
					} else if ((_.tag !== 22 && _.tag !== 23 || _.memoizedState === null || _ === e) && _.child !== null) {
						_.child.return = _, _ = _.child;
						continue
					}
					if (_ === e) break e;
					for (; _.sibling === null;) {
						if (_.return === null || _.return === e) break e;
						m === _ && (m = null), _ = _.return
					}
					m === _ && (m = null), _.sibling.return = _.return, _ = _.sibling
				}
			}
			break;
		case 19:
			or(t, e), br(e), r & 4 && um(e);
			break;
		case 21:
			break;
		default:
			or(t, e), br(e)
	}
}

function br(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null;) {
					if (R3(n)) {
						var r = n;
						break e
					}
					n = n.return
				}
				throw Error(ce(160))
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (Il(o, ""), r.flags &= -33);
					var i = cm(e);
					hh(e, i, o);
					break;
				case 3:
				case 4:
					var a = r.stateNode.containerInfo,
						c = cm(e);
					fh(e, c, a);
					break;
				default:
					throw Error(ce(161))
			}
		}
		catch (d) {
			xt(e, e.return, d)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}

function sw(e, t, n) {
	be = e, D3(e)
}

function D3(e, t, n) {
	for (var r = (e.mode & 1) !== 0; be !== null;) {
		var o = be,
			i = o.child;
		if (o.tag === 22 && r) {
			var a = o.memoizedState !== null || Jc;
			if (!a) {
				var c = o.alternate,
					d = c !== null && c.memoizedState !== null || rn;
				c = Jc;
				var f = rn;
				if (Jc = a, (rn = d) && !f)
					for (be = o; be !== null;) a = be, d = a.child, a.tag === 22 && a.memoizedState !== null ? hm(o) : d !== null ? (d.return = a, be = d) : hm(o);
				for (; i !== null;) be = i, D3(i), i = i.sibling;
				be = o, Jc = c, rn = f
			}
			dm(e)
		} else o.subtreeFlags & 8772 && i !== null ? (i.return = o, be = i) : dm(e)
	}
}

function dm(e) {
	for (; be !== null;) {
		var t = be;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						rn || Cd(5, t);
						break;
					case 1:
						var r = t.stateNode;
						if (t.flags & 4 && !rn)
							if (n === null) r.componentDidMount();
							else {
								var o = t.elementType === t.type ? n.memoizedProps : ir(t.type, n.memoizedProps);
								r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
							} var i = t.updateQueue;
						i !== null && G2(t, i, r);
						break;
					case 3:
						var a = t.updateQueue;
						if (a !== null) {
							if (n = null, t.child !== null) switch (t.child.tag) {
								case 5:
									n = t.child.stateNode;
									break;
								case 1:
									n = t.child.stateNode
							}
							G2(t, a, n)
						}
						break;
					case 5:
						var c = t.stateNode;
						if (n === null && t.flags & 4) {
							n = c;
							var d = t.memoizedProps;
							switch (t.type) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									d.autoFocus && n.focus();
									break;
								case "img":
									d.src && (n.src = d.src)
							}
						}
						break;
					case 6:
						break;
					case 4:
						break;
					case 12:
						break;
					case 13:
						if (t.memoizedState === null) {
							var f = t.alternate;
							if (f !== null) {
								var m = f.memoizedState;
								if (m !== null) {
									var _ = m.dehydrated;
									_ !== null && jl(_)
								}
							}
						}
						break;
					case 19:
					case 17:
					case 21:
					case 22:
					case 23:
					case 25:
						break;
					default:
						throw Error(ce(163))
				}
				rn || t.flags & 512 && dh(t)
			} catch (v) {
				xt(t, t.return, v)
			}
		}
		if (t === e) {
			be = null;
			break
		}
		if (n = t.sibling, n !== null) {
			n.return = t.return, be = n;
			break
		}
		be = t.return
	}
}

function fm(e) {
	for (; be !== null;) {
		var t = be;
		if (t === e) {
			be = null;
			break
		}
		var n = t.sibling;
		if (n !== null) {
			n.return = t.return, be = n;
			break
		}
		be = t.return
	}
}

function hm(e) {
	for (; be !== null;) {
		var t = be;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Cd(4, t)
					} catch (d) {
						xt(t, n, d)
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var o = t.return;
						try {
							r.componentDidMount()
						} catch (d) {
							xt(t, o, d)
						}
					}
					var i = t.return;
					try {
						dh(t)
					} catch (d) {
						xt(t, i, d)
					}
					break;
				case 5:
					var a = t.return;
					try {
						dh(t)
					} catch (d) {
						xt(t, a, d)
					}
			}
		} catch (d) {
			xt(t, t.return, d)
		}
		if (t === e) {
			be = null;
			break
		}
		var c = t.sibling;
		if (c !== null) {
			c.return = t.return, be = c;
			break
		}
		be = t.return
	}
}
var aw = Math.ceil,
	Gu = yo.ReactCurrentDispatcher,
	T0 = yo.ReactCurrentOwner,
	er = yo.ReactCurrentBatchConfig,
	Ge = 0,
	Vt = null,
	Pt = null,
	Yt = 0,
	Tn = 0,
	zs = fi(0),
	Rt = 0,
	Hl = null,
	ns = 0,
	Ed = 0,
	R0 = 0,
	xl = null,
	Sn = null,
	N0 = 0,
	ya = 1 / 0,
	no = null,
	Xu = !1,
	ph = null,
	Qo = null,
	eu = !1,
	Ko = null,
	Qu = 0,
	Sl = 0,
	mh = null,
	_u = -1,
	gu = 0;

function mn() {
	return Ge & 6 ? Ct() : _u !== -1 ? _u : _u = Ct()
}

function Zo(e) {
	return e.mode & 1 ? Ge & 2 && Yt !== 0 ? Yt & -Yt : W7.transition !== null ? (gu === 0 && (gu = xg()), gu) : (e = nt, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ig(e.type)), e) : 1
}

function mr(e, t, n, r) {
	if (50 < Sl) throw Sl = 0, mh = null, Error(ce(185));
	ic(e, n, r), (!(Ge & 2) || e !== Vt) && (e === Vt && (!(Ge & 2) && (Ed |= n), Rt === 4 && No(e, Yt)), In(e, r), n === 1 && Ge === 0 && !(t.mode & 1) && (ya = Ct() + 500, Sd && hi()))
}

function In(e, t) {
	var n = e.callbackNode;
	W6(e, t);
	var r = Ru(e, e === Vt ? Yt : 0);
	if (r === 0) n !== null && S2(n), e.callbackNode = null, e.callbackPriority = 0;
	else if (t = r & -r, e.callbackPriority !== t) {
		if (n != null && S2(n), t === 1) e.tag === 0 ? H7(pm.bind(null, e)) : Yg(pm.bind(null, e)), z7(function() {
			!(Ge & 6) && hi()
		}), n = null;
		else {
			switch (Sg(r)) {
				case 1:
					n = a0;
					break;
				case 4:
					n = yg;
					break;
				case 16:
					n = Tu;
					break;
				case 536870912:
					n = wg;
					break;
				default:
					n = Tu
			}
			n = K3(n, B3.bind(null, e))
		}
		e.callbackPriority = t, e.callbackNode = n
	}
}

function B3(e, t) {
	if (_u = -1, gu = 0, Ge & 6) throw Error(ce(327));
	var n = e.callbackNode;
	if (Gs() && e.callbackNode !== n) return null;
	var r = Ru(e, e === Vt ? Yt : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Zu(e, r);
	else {
		t = r;
		var o = Ge;
		Ge |= 2;
		var i = $3();
		(Vt !== e || Yt !== t) && (no = null, ya = Ct() + 500, Yi(e, t));
		do try {
			uw();
			break
		} catch (c) {
			z3(e, c)
		}
		while (!0);
		w0(), Gu.current = i, Ge = o, Pt !== null ? t = 0 : (Vt = null, Yt = 0, t = Rt)
	}
	if (t !== 0) {
		if (t === 2 && (o = V1(e), o !== 0 && (r = o, t = vh(e, o))), t === 1) throw n = Hl, Yi(e, 0), No(e, r), In(e, Ct()), n;
		if (t === 6) No(e, r);
		else {
			if (o = e.current.alternate, !(r & 30) && !lw(o) && (t = Zu(e, r), t === 2 && (i = V1(e), i !== 0 && (r = i, t = vh(e, i))), t === 1)) throw n = Hl, Yi(e, 0), No(e, r), In(e, Ct()), n;
			switch (e.finishedWork = o, e.finishedLanes = r, t) {
				case 0:
				case 1:
					throw Error(ce(345));
				case 2:
					ji(e, Sn, no);
					break;
				case 3:
					if (No(e, r), (r & 130023424) === r && (t = N0 + 500 - Ct(), 10 < t)) {
						if (Ru(e, 0) !== 0) break;
						if (o = e.suspendedLanes, (o & r) !== r) {
							mn(), e.pingedLanes |= e.suspendedLanes & o;
							break
						}
						e.timeoutHandle = X1(ji.bind(null, e, Sn, no), t);
						break
					}
					ji(e, Sn, no);
					break;
				case 4:
					if (No(e, r), (r & 4194240) === r) break;
					for (t = e.eventTimes, o = -1; 0 < r;) {
						var a = 31 - pr(r);
						i = 1 << a, a = t[a], a > o && (o = a), r &= ~i
					}
					if (r = o, r = Ct() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * aw(r / 1960)) - r, 10 < r) {
						e.timeoutHandle = X1(ji.bind(null, e, Sn, no), r);
						break
					}
					ji(e, Sn, no);
					break;
				case 5:
					ji(e, Sn, no);
					break;
				default:
					throw Error(ce(329))
			}
		}
	}
	return In(e, Ct()), e.callbackNode === n ? B3.bind(null, e) : null
}

function vh(e, t) {
	var n = xl;
	return e.current.memoizedState.isDehydrated && (Yi(e, t).flags |= 256), e = Zu(e, t), e !== 2 && (t = Sn, Sn = n, t !== null && _h(t)), e
}

function _h(e) {
	Sn === null ? Sn = e : Sn.push.apply(Sn, e)
}

function lw(e) {
	for (var t = e;;) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && (n = n.stores, n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!vr(i(), o)) return !1
					} catch {
						return !1
					}
				}
		}
		if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
		else {
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return !0;
				t = t.return
			}
			t.sibling.return = t.return, t = t.sibling
		}
	}
	return !0
}

function No(e, t) {
	for (t &= ~R0, t &= ~Ed, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
		var n = 31 - pr(t),
			r = 1 << n;
		e[n] = -1, t &= ~r
	}
}

function pm(e) {
	if (Ge & 6) throw Error(ce(327));
	Gs();
	var t = Ru(e, 0);
	if (!(t & 1)) return In(e, Ct()), null;
	var n = Zu(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = V1(e);
		r !== 0 && (t = r, n = vh(e, r))
	}
	if (n === 1) throw n = Hl, Yi(e, 0), No(e, t), In(e, Ct()), n;
	if (n === 6) throw Error(ce(345));
	return e.finishedWork = e.current.alternate, e.finishedLanes = t, ji(e, Sn, no), In(e, Ct()), null
}

function L0(e, t) {
	var n = Ge;
	Ge |= 1;
	try {
		return e(t)
	} finally {
		Ge = n, Ge === 0 && (ya = Ct() + 500, Sd && hi())
	}
}

function rs(e) {
	Ko !== null && Ko.tag === 0 && !(Ge & 6) && Gs();
	var t = Ge;
	Ge |= 1;
	var n = er.transition,
		r = nt;
	try {
		if (er.transition = null, nt = 1, e) return e()
	} finally {
		nt = r, er.transition = n, Ge = t, !(Ge & 6) && hi()
	}
}

function D0() {
	Tn = zs.current, ut(zs)
}

function Yi(e, t) {
	e.finishedWork = null, e.finishedLanes = 0;
	var n = e.timeoutHandle;
	if (n !== -1 && (e.timeoutHandle = -1, B7(n)), Pt !== null)
		for (n = Pt.return; n !== null;) {
			var r = n;
			switch (_0(r), r.tag) {
				case 1:
					r = r.type.childContextTypes, r != null && zu();
					break;
				case 3:
					_a(), ut(En), ut(an), E0();
					break;
				case 5:
					C0(r);
					break;
				case 4:
					_a();
					break;
				case 13:
					ut(mt);
					break;
				case 19:
					ut(mt);
					break;
				case 10:
					x0(r.type._context);
					break;
				case 22:
				case 23:
					D0()
			}
			n = n.return
		}
	if (Vt = e, Pt = e = Jo(e.current, null), Yt = Tn = t, Rt = 0, Hl = null, R0 = Ed = ns = 0, Sn = xl = null, Li !== null) {
		for (t = 0; t < Li.length; t++)
			if (n = Li[t], r = n.interleaved, r !== null) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var a = i.next;
					i.next = o, r.next = a
				}
				n.pending = r
			} Li = null
	}
	return e
}

function z3(e, t) {
	do {
		var n = Pt;
		try {
			if (w0(), pu.current = qu, Yu) {
				for (var r = vt.memoizedState; r !== null;) {
					var o = r.queue;
					o !== null && (o.pending = null), r = r.next
				}
				Yu = !1
			}
			if (ts = 0, zt = jt = vt = null, yl = !1, $l = 0, T0.current = null, n === null || n.return === null) {
				Rt = 1, Hl = t, Pt = null;
				break
			}
			e: {
				var i = e,
					a = n.return,
					c = n,
					d = t;
				if (t = Yt, c.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
					var f = d,
						m = c,
						_ = m.tag;
					if (!(m.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
						var v = m.alternate;
						v ? (m.updateQueue = v.updateQueue, m.memoizedState = v.memoizedState, m.lanes = v.lanes) : (m.updateQueue = null, m.memoizedState = null)
					}
					var x = tm(a);
					if (x !== null) {
						x.flags &= -257, nm(x, a, c, i, t), x.mode & 1 && em(i, f, t), t = x, d = f;
						var k = t.updateQueue;
						if (k === null) {
							var A = new Set;
							A.add(d), t.updateQueue = A
						} else k.add(d);
						break e
					} else {
						if (!(t & 1)) {
							em(i, f, t), B0();
							break e
						}
						d = Error(ce(426))
					}
				} else if (ht && c.mode & 1) {
					var C = tm(a);
					if (C !== null) {
						!(C.flags & 65536) && (C.flags |= 256), nm(C, a, c, i, t), g0(ga(d, c));
						break e
					}
				}
				i = d = ga(d, c),
				Rt !== 4 && (Rt = 2),
				xl === null ? xl = [i] : xl.push(i),
				i = a;do {
					switch (i.tag) {
						case 3:
							i.flags |= 65536, t &= -t, i.lanes |= t;
							var y = S3(i, d, t);
							q2(i, y);
							break e;
						case 1:
							c = d;
							var w = i.type,
								b = i.stateNode;
							if (!(i.flags & 128) && (typeof w.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Qo === null || !Qo.has(b)))) {
								i.flags |= 65536, t &= -t, i.lanes |= t;
								var O = k3(i, c, t);
								q2(i, O);
								break e
							}
					}
					i = i.return
				} while (i !== null)
			}
			V3(n)
		} catch (L) {
			t = L, Pt === n && n !== null && (Pt = n = n.return);
			continue
		}
		break
	} while (!0)
}

function $3() {
	var e = Gu.current;
	return Gu.current = qu, e === null ? qu : e
}

function B0() {
	(Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4), Vt === null || !(ns & 268435455) && !(Ed & 268435455) || No(Vt, Yt)
}

function Zu(e, t) {
	var n = Ge;
	Ge |= 2;
	var r = $3();
	(Vt !== e || Yt !== t) && (no = null, Yi(e, t));
	do try {
		cw();
		break
	} catch (o) {
		z3(e, o)
	}
	while (!0);
	if (w0(), Ge = n, Gu.current = r, Pt !== null) throw Error(ce(261));
	return Vt = null, Yt = 0, Rt
}

function cw() {
	for (; Pt !== null;) F3(Pt)
}

function uw() {
	for (; Pt !== null && !N6();) F3(Pt)
}

function F3(e) {
	var t = W3(e.alternate, e, Tn);
	e.memoizedProps = e.pendingProps, t === null ? V3(e) : Pt = t, T0.current = null
}

function V3(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (e = t.return, t.flags & 32768) {
			if (n = rw(n, t), n !== null) {
				n.flags &= 32767, Pt = n;
				return
			}
			if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
			else {
				Rt = 6, Pt = null;
				return
			}
		} else if (n = nw(n, t, Tn), n !== null) {
			Pt = n;
			return
		}
		if (t = t.sibling, t !== null) {
			Pt = t;
			return
		}
		Pt = t = e
	} while (t !== null);
	Rt === 0 && (Rt = 5)
}

function ji(e, t, n) {
	var r = nt,
		o = er.transition;
	try {
		er.transition = null, nt = 1, dw(e, t, n, r)
	} finally {
		er.transition = o, nt = r
	}
	return null
}

function dw(e, t, n, r) {
	do Gs(); while (Ko !== null);
	if (Ge & 6) throw Error(ce(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(ce(177));
	e.callbackNode = null, e.callbackPriority = 0;
	var i = n.lanes | n.childLanes;
	if (K6(e, i), e === Vt && (Pt = Vt = null, Yt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || eu || (eu = !0, K3(Tu, function() {
			return Gs(), null
		})), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
		i = er.transition, er.transition = null;
		var a = nt;
		nt = 1;
		var c = Ge;
		Ge |= 4, T0.current = null, iw(e, n), L3(n, e), M7(q1), Nu = !!Y1, q1 = Y1 = null, e.current = n, sw(n), L6(), Ge = c, nt = a, er.transition = i
	} else e.current = n;
	if (eu && (eu = !1, Ko = e, Qu = o), i = e.pendingLanes, i === 0 && (Qo = null), z6(n.stateNode), In(e, Ct()), t !== null)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
			componentStack: o.stack,
			digest: o.digest
		});
	if (Xu) throw Xu = !1, e = ph, ph = null, e;
	return Qu & 1 && e.tag !== 0 && Gs(), i = e.pendingLanes, i & 1 ? e === mh ? Sl++ : (Sl = 0, mh = e) : Sl = 0, hi(), null
}

function Gs() {
	if (Ko !== null) {
		var e = Sg(Qu),
			t = er.transition,
			n = nt;
		try {
			if (er.transition = null, nt = 16 > e ? 16 : e, Ko === null) var r = !1;
			else {
				if (e = Ko, Ko = null, Qu = 0, Ge & 6) throw Error(ce(331));
				var o = Ge;
				for (Ge |= 4, be = e.current; be !== null;) {
					var i = be,
						a = i.child;
					if (be.flags & 16) {
						var c = i.deletions;
						if (c !== null) {
							for (var d = 0; d < c.length; d++) {
								var f = c[d];
								for (be = f; be !== null;) {
									var m = be;
									switch (m.tag) {
										case 0:
										case 11:
										case 15:
											wl(8, m, i)
									}
									var _ = m.child;
									if (_ !== null) _.return = m, be = _;
									else
										for (; be !== null;) {
											m = be;
											var v = m.sibling,
												x = m.return;
											if (T3(m), m === f) {
												be = null;
												break
											}
											if (v !== null) {
												v.return = x, be = v;
												break
											}
											be = x
										}
								}
							}
							var k = i.alternate;
							if (k !== null) {
								var A = k.child;
								if (A !== null) {
									k.child = null;
									do {
										var C = A.sibling;
										A.sibling = null, A = C
									} while (A !== null)
								}
							}
							be = i
						}
					}
					if (i.subtreeFlags & 2064 && a !== null) a.return = i, be = a;
					else e: for (; be !== null;) {
						if (i = be, i.flags & 2048) switch (i.tag) {
							case 0:
							case 11:
							case 15:
								wl(9, i, i.return)
						}
						var y = i.sibling;
						if (y !== null) {
							y.return = i.return, be = y;
							break e
						}
						be = i.return
					}
				}
				var w = e.current;
				for (be = w; be !== null;) {
					a = be;
					var b = a.child;
					if (a.subtreeFlags & 2064 && b !== null) b.return = a, be = b;
					else e: for (a = w; be !== null;) {
						if (c = be, c.flags & 2048) try {
							switch (c.tag) {
								case 0:
								case 11:
								case 15:
									Cd(9, c)
							}
						} catch (L) {
							xt(c, c.return, L)
						}
						if (c === a) {
							be = null;
							break e
						}
						var O = c.sibling;
						if (O !== null) {
							O.return = c.return, be = O;
							break e
						}
						be = c.return
					}
				}
				if (Ge = o, hi(), Br && typeof Br.onPostCommitFiberRoot == "function") try {
					Br.onPostCommitFiberRoot(_d, e)
				} catch {}
				r = !0
			}
			return r
		} finally {
			nt = n, er.transition = t
		}
	}
	return !1
}

function mm(e, t, n) {
	t = ga(n, t), t = S3(e, t, 1), e = Xo(e, t, 1), t = mn(), e !== null && (ic(e, 1, t), In(e, t))
}

function xt(e, t, n) {
	if (e.tag === 3) mm(e, e, n);
	else
		for (; t !== null;) {
			if (t.tag === 3) {
				mm(t, e, n);
				break
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qo === null || !Qo.has(r))) {
					e = ga(n, e), e = k3(t, e, 1), t = Xo(t, e, 1), e = mn(), t !== null && (ic(t, 1, e), In(t, e));
					break
				}
			}
			t = t.return
		}
}

function fw(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t), t = mn(), e.pingedLanes |= e.suspendedLanes & n, Vt === e && (Yt & n) === n && (Rt === 4 || Rt === 3 && (Yt & 130023424) === Yt && 500 > Ct() - N0 ? Yi(e, 0) : R0 |= n), In(e, t)
}

function H3(e, t) {
	t === 0 && (e.mode & 1 ? (t = Wc, Wc <<= 1, !(Wc & 130023424) && (Wc = 4194304)) : t = 1);
	var n = mn();
	e = mo(e, t), e !== null && (ic(e, t, n), In(e, n))
}

function hw(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), H3(e, n)
}

function pw(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(ce(314))
	}
	r !== null && r.delete(t), H3(e, n)
}
var W3;
W3 = function(e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || En.current) bn = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return bn = !1, tw(e, t, n);
			bn = !!(e.flags & 131072)
		}
	else bn = !1, ht && t.flags & 1048576 && qg(t, Vu, t.index);
	switch (t.lanes = 0, t.tag) {
		case 2:
			var r = t.type;
			vu(e, t), e = t.pendingProps;
			var o = pa(t, an.current);
			qs(t, n), o = I0(null, t, r, e, o, n);
			var i = P0();
			return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, An(r) ? (i = !0, $u(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, k0(t), o.updater = bd, t.stateNode = o, o._reactInternals = t, rh(t, r, e, n), t = sh(null, t, r, !0, i, n)) : (t.tag = 0, ht && i && v0(t), un(null, t, o, n), t = t.child), t;
		case 16:
			r = t.elementType;
			e: {
				switch (vu(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = vw(r), e = ir(r, e), o) {
					case 0:
						t = ih(null, t, r, e, n);
						break e;
					case 1:
						t = im(null, t, r, e, n);
						break e;
					case 11:
						t = rm(null, t, r, e, n);
						break e;
					case 14:
						t = om(null, t, r, ir(r.type, e), n);
						break e
				}
				throw Error(ce(306, r, ""))
			}
			return t;
		case 0:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ir(r, o), ih(e, t, r, o, n);
		case 1:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ir(r, o), im(e, t, r, o, n);
		case 3:
			e: {
				if (A3(t), e === null) throw Error(ce(387));r = t.pendingProps,
				i = t.memoizedState,
				o = i.element,
				e3(e, t),
				Ku(t, r, null, n);
				var a = t.memoizedState;
				if (r = a.element, i.isDehydrated)
					if (i = {
							element: r,
							isDehydrated: !1,
							cache: a.cache,
							pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
							transitions: a.transitions
						}, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
						o = ga(Error(ce(423)), t), t = sm(e, t, r, n, o);
						break e
					} else if (r !== o) {
					o = ga(Error(ce(424)), t), t = sm(e, t, r, n, o);
					break e
				} else
					for (Ln = Go(t.stateNode.containerInfo.firstChild), Bn = t, ht = !0, ur = null, n = Zg(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
				else {
					if (ma(), r === o) {
						t = vo(e, t, n);
						break e
					}
					un(e, t, r, n)
				}
				t = t.child
			}
			return t;
		case 5:
			return t3(t), e === null && eh(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, G1(r, o) ? a = null : i !== null && G1(r, i) && (t.flags |= 32), E3(e, t), un(e, t, a, n), t.child;
		case 6:
			return e === null && eh(t), null;
		case 13:
			return I3(e, t, n);
		case 4:
			return b0(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = va(t, null, r, n) : un(e, t, r, n), t.child;
		case 11:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ir(r, o), rm(e, t, r, o, n);
		case 7:
			return un(e, t, t.pendingProps, n), t.child;
		case 8:
			return un(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return un(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, st(Hu, r._currentValue), r._currentValue = a, i !== null)
					if (vr(i.value, a)) {
						if (i.children === o.children && !En.current) {
							t = vo(e, t, n);
							break e
						}
					} else
						for (i = t.child, i !== null && (i.return = t); i !== null;) {
							var c = i.dependencies;
							if (c !== null) {
								a = i.child;
								for (var d = c.firstContext; d !== null;) {
									if (d.context === r) {
										if (i.tag === 1) {
											d = uo(-1, n & -n), d.tag = 2;
											var f = i.updateQueue;
											if (f !== null) {
												f = f.shared;
												var m = f.pending;
												m === null ? d.next = d : (d.next = m.next, m.next = d), f.pending = d
											}
										}
										i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), th(i.return, n, t), c.lanes |= n;
										break
									}
									d = d.next
								}
							} else if (i.tag === 10) a = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (a = i.return, a === null) throw Error(ce(341));
								a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), th(a, n, t), a = i.sibling
							} else a = i.child;
							if (a !== null) a.return = i;
							else
								for (a = i; a !== null;) {
									if (a === t) {
										a = null;
										break
									}
									if (i = a.sibling, i !== null) {
										i.return = a.return, a = i;
										break
									}
									a = a.return
								}
							i = a
						}
				un(e, t, o.children, n),
				t = t.child
			}
			return t;
		case 9:
			return o = t.type, r = t.pendingProps.children, qs(t, n), o = tr(o), r = r(o), t.flags |= 1, un(e, t, r, n), t.child;
		case 14:
			return r = t.type, o = ir(r, t.pendingProps), o = ir(r.type, o), om(e, t, r, o, n);
		case 15:
			return b3(e, t, t.type, t.pendingProps, n);
		case 17:
			return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ir(r, o), vu(e, t), t.tag = 1, An(r) ? (e = !0, $u(t)) : e = !1, qs(t, n), x3(t, r, o), rh(t, r, o, n), sh(null, t, r, !0, e, n);
		case 19:
			return P3(e, t, n);
		case 22:
			return C3(e, t, n)
	}
	throw Error(ce(156, t.tag))
};

function K3(e, t) {
	return gg(e, t)
}

function mw(e, t, n, r) {
	this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Jn(e, t, n, r) {
	return new mw(e, t, n, r)
}

function z0(e) {
	return e = e.prototype, !(!e || !e.isReactComponent)
}

function vw(e) {
	if (typeof e == "function") return z0(e) ? 1 : 0;
	if (e != null) {
		if (e = e.$$typeof, e === o0) return 11;
		if (e === i0) return 14
	}
	return 2
}

function Jo(e, t) {
	var n = e.alternate;
	return n === null ? (n = Jn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
		lanes: t.lanes,
		firstContext: t.firstContext
	}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function yu(e, t, n, r, o, i) {
	var a = 2;
	if (r = e, typeof e == "function") z0(e) && (a = 1);
	else if (typeof e == "string") a = 5;
	else e: switch (e) {
		case Ps:
			return qi(n.children, o, i, t);
		case r0:
			a = 8, o |= 8;
			break;
		case A1:
			return e = Jn(12, n, t, o | 2), e.elementType = A1, e.lanes = i, e;
		case I1:
			return e = Jn(13, n, t, o), e.elementType = I1, e.lanes = i, e;
		case P1:
			return e = Jn(19, n, t, o), e.elementType = P1, e.lanes = i, e;
		case tg:
			return Ad(n, o, i, t);
		default:
			if (typeof e == "object" && e !== null) switch (e.$$typeof) {
				case J_:
					a = 10;
					break e;
				case eg:
					a = 9;
					break e;
				case o0:
					a = 11;
					break e;
				case i0:
					a = 14;
					break e;
				case jo:
					a = 16, r = null;
					break e
			}
			throw Error(ce(130, e == null ? e : typeof e, ""))
	}
	return t = Jn(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function qi(e, t, n, r) {
	return e = Jn(7, e, r, t), e.lanes = n, e
}

function Ad(e, t, n, r) {
	return e = Jn(22, e, r, t), e.elementType = tg, e.lanes = n, e.stateNode = {
		isHidden: !1
	}, e
}

function Zf(e, t, n) {
	return e = Jn(6, e, null, t), e.lanes = n, e
}

function Jf(e, t, n) {
	return t = Jn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
		containerInfo: e.containerInfo,
		pendingChildren: null,
		implementation: e.implementation
	}, t
}

function _w(e, t, n, r, o) {
	this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tf(0), this.expirationTimes = Tf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tf(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function $0(e, t, n, r, o, i, a, c, d) {
	return e = new _w(e, t, n, c, d), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Jn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
		element: r,
		isDehydrated: n,
		cache: null,
		transitions: null,
		pendingSuspenseBoundaries: null
	}, k0(i), e
}

function gw(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Is,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n
	}
}

function U3(e) {
	if (!e) return ii;
	e = e._reactInternals;
	e: {
		if (ls(e) !== e || e.tag !== 1) throw Error(ce(170));
		var t = e;do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (An(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e
					}
			}
			t = t.return
		} while (t !== null);
		throw Error(ce(171))
	}
	if (e.tag === 1) {
		var n = e.type;
		if (An(n)) return Ug(e, n, t)
	}
	return t
}

function Y3(e, t, n, r, o, i, a, c, d) {
	return e = $0(n, r, !0, e, o, i, a, c, d), e.context = U3(null), n = e.current, r = mn(), o = Zo(n), i = uo(r, o), i.callback = t ?? null, Xo(n, i, o), e.current.lanes = o, ic(e, o, r), In(e, r), e
}

function Id(e, t, n, r) {
	var o = t.current,
		i = mn(),
		a = Zo(o);
	return n = U3(n), t.context === null ? t.context = n : t.pendingContext = n, t = uo(i, a), t.payload = {
		element: e
	}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xo(o, t, a), e !== null && (mr(e, o, a, i), hu(e, o, a)), a
}

function Ju(e) {
	if (e = e.current, !e.child) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode
	}
}

function vm(e, t) {
	if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t
	}
}

function F0(e, t) {
	vm(e, t), (e = e.alternate) && vm(e, t)
}

function yw() {
	return null
}
var q3 = typeof reportError == "function" ? reportError : function(e) {
	console.error(e)
};

function V0(e) {
	this._internalRoot = e
}
Pd.prototype.render = V0.prototype.render = function(e) {
	var t = this._internalRoot;
	if (t === null) throw Error(ce(409));
	Id(e, t, null, null)
};
Pd.prototype.unmount = V0.prototype.unmount = function() {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		rs(function() {
			Id(null, e, null, null)
		}), t[po] = null
	}
};

function Pd(e) {
	this._internalRoot = e
}
Pd.prototype.unstable_scheduleHydration = function(e) {
	if (e) {
		var t = Cg();
		e = {
			blockedOn: null,
			target: e,
			priority: t
		};
		for (var n = 0; n < Ro.length && t !== 0 && t < Ro[n].priority; n++);
		Ro.splice(n, 0, e), n === 0 && Ag(e)
	}
};

function H0(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Od(e) {
	return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function _m() {}

function ww(e, t, n, r, o) {
	if (o) {
		if (typeof r == "function") {
			var i = r;
			r = function() {
				var f = Ju(a);
				i.call(f)
			}
		}
		var a = Y3(t, r, e, 0, null, !1, !1, "", _m);
		return e._reactRootContainer = a, e[po] = a.current, Nl(e.nodeType === 8 ? e.parentNode : e), rs(), a
	}
	for (; o = e.lastChild;) e.removeChild(o);
	if (typeof r == "function") {
		var c = r;
		r = function() {
			var f = Ju(d);
			c.call(f)
		}
	}
	var d = $0(e, 0, !1, null, null, !1, !1, "", _m);
	return e._reactRootContainer = d, e[po] = d.current, Nl(e.nodeType === 8 ? e.parentNode : e), rs(function() {
		Id(t, d, n, r)
	}), d
}

function Md(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var a = i;
		if (typeof o == "function") {
			var c = o;
			o = function() {
				var d = Ju(a);
				c.call(d)
			}
		}
		Id(t, a, e, o)
	} else a = ww(n, t, e, o, r);
	return Ju(a)
}
kg = function(e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = sl(t.pendingLanes);
				n !== 0 && (l0(t, n | 1), In(t, Ct()), !(Ge & 6) && (ya = Ct() + 500, hi()))
			}
			break;
		case 13:
			rs(function() {
				var r = mo(e, 1);
				if (r !== null) {
					var o = mn();
					mr(r, e, 1, o)
				}
			}), F0(e, 1)
	}
};
c0 = function(e) {
	if (e.tag === 13) {
		var t = mo(e, 134217728);
		if (t !== null) {
			var n = mn();
			mr(t, e, 134217728, n)
		}
		F0(e, 134217728)
	}
};
bg = function(e) {
	if (e.tag === 13) {
		var t = Zo(e),
			n = mo(e, t);
		if (n !== null) {
			var r = mn();
			mr(n, e, t, r)
		}
		F0(e, t)
	}
};
Cg = function() {
	return nt
};
Eg = function(e, t) {
	var n = nt;
	try {
		return nt = e, t()
	} finally {
		nt = n
	}
};
z1 = function(e, t, n) {
	switch (t) {
		case "input":
			if (j1(e, n), t = n.name, n.type === "radio" && t != null) {
				for (n = e; n.parentNode;) n = n.parentNode;
				for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = xd(r);
						if (!o) throw Error(ce(90));
						rg(r), j1(r, o)
					}
				}
			}
			break;
		case "textarea":
			ig(e, n);
			break;
		case "select":
			t = n.value, t != null && Ws(e, !!n.multiple, t, !1)
	}
};
fg = L0;
hg = rs;
var xw = {
		usingClientEntryPoint: !1,
		Events: [ac, Ts, xd, ug, dg, L0]
	},
	Xa = {
		findFiberByHostInstance: Ni,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom"
	},
	Sw = {
		bundleType: Xa.bundleType,
		version: Xa.version,
		rendererPackageName: Xa.rendererPackageName,
		rendererConfig: Xa.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: yo.ReactCurrentDispatcher,
		findHostInstanceByFiber: function(e) {
			return e = vg(e), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Xa.findFiberByHostInstance || yw,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var tu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!tu.isDisabled && tu.supportsFiber) try {
		_d = tu.inject(Sw), Br = tu
	} catch {}
}
Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xw;
Wn.createPortal = function(e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!H0(t)) throw Error(ce(200));
	return gw(e, t, null, n)
};
Wn.createRoot = function(e, t) {
	if (!H0(e)) throw Error(ce(299));
	var n = !1,
		r = "",
		o = q3;
	return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = $0(e, 1, !1, null, null, n, !1, r, o), e[po] = t.current, Nl(e.nodeType === 8 ? e.parentNode : e), new V0(t)
};
Wn.findDOMNode = function(e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0) throw typeof e.render == "function" ? Error(ce(188)) : (e = Object.keys(e).join(","), Error(ce(268, e)));
	return e = vg(t), e = e === null ? null : e.stateNode, e
};
Wn.flushSync = function(e) {
	return rs(e)
};
Wn.hydrate = function(e, t, n) {
	if (!Od(t)) throw Error(ce(200));
	return Md(null, e, t, !0, n)
};
Wn.hydrateRoot = function(e, t, n) {
	if (!H0(e)) throw Error(ce(405));
	var r = n != null && n.hydratedSources || null,
		o = !1,
		i = "",
		a = q3;
	if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = Y3(t, null, e, 1, n ?? null, o, !1, i, a), e[po] = t.current, Nl(e), r)
		for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
	return new Pd(t)
};
Wn.render = function(e, t, n) {
	if (!Od(t)) throw Error(ce(200));
	return Md(null, e, t, !1, n)
};
Wn.unmountComponentAtNode = function(e) {
	if (!Od(e)) throw Error(ce(40));
	return e._reactRootContainer ? (rs(function() {
		Md(null, null, e, !1, function() {
			e._reactRootContainer = null, e[po] = null
		})
	}), !0) : !1
};
Wn.unstable_batchedUpdates = L0;
Wn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
	if (!Od(n)) throw Error(ce(200));
	if (e == null || e._reactInternals === void 0) throw Error(ce(38));
	return Md(e, t, n, !1, r)
};
Wn.version = "18.3.1-next-f1338f8080-20240426";

function G3() {
	if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
		__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G3)
	} catch (e) {
		console.error(e)
	}
}
G3(), G_.exports = Wn;
var W0 = G_.exports;
const kw = (e, t, n) => {
		const r = t || O8();
		return r && W0.createPortal(e, r, n)
	},
	bw = P.createContext("light"),
	X3 = bw.Provider;

function Cw(...e) {
	return e.filter(t => t).join(" ")
}

function Ew(e) {
	let {
		width: t = 0,
		height: n = 0,
		display: r = "block",
		"aria-hidden": o = !0,
		className: i,
		baseClassName: a,
		getRootRef: c,
		style: d,
		title: f,
		children: m
	} = e, _ = k1(e, ["width", "height", "display", "aria-hidden", "className", "baseClassName", "getRootRef", "style", "title", "children"]);
	const v = Math.max(t, n);
	return u.jsxs("svg", Ri(Tr({
		"aria-hidden": o,
		display: r,
		className: Cw(i, "vkuiIcon", `vkuiIcon--${v}`, `vkuiIcon--w-${t}`, `vkuiIcon--h-${n}`, a),
		width: t,
		height: n,
		style: Tr({
			width: t,
			height: n
		}, d),
		ref: c
	}, _), {
		children: [f && u.jsx("title", {
			children: f
		}), m]
	}))
}

function we(e) {
	let {
		vkuiIconId: t,
		vkuiAttrs: n,
		children: r,
		vkuiProps: o,
		width: i,
		height: a,
		viewBox: c
	} = e, d = k1(e, ["vkuiIconId", "vkuiAttrs", "children", "vkuiProps", "width", "height", "viewBox"]);
	const {
		width: f,
		height: m,
		viewBox: _
	} = o, v = k1(o, ["width", "height", "viewBox"]);
	return u.jsxs(Ew, Ri(Tr(Ri(Tr({
		baseClassName: `vkuiIcon--${t}`,
		width: f || i,
		height: m || a,
		viewBox: _ || c
	}, d, v), {
		style: o.fill ? Tr({
			color: o.fill
		}, o.style) : o.style
	}), n), {
		children: [o.children, r]
	}))
}
const Aw = e => u.jsx(we, {
		viewBox: "0 0 12 12",
		width: 12,
		height: 12,
		vkuiIconId: "circle_12",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
		})
	}),
	Iw = e => u.jsx(we, {
		viewBox: "0 0 8 12",
		width: 8,
		height: 12,
		vkuiIconId: "online_mobile_12",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.5.5 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.5.5 0 0 0 .502-.502V3.503A.5.5 0 0 0 5.997 3"
		})
	}),
	Pw = e => u.jsx(we, {
		viewBox: "0 0 12 16",
		width: 12,
		height: 16,
		vkuiIconId: "chevron_16",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272z"
		})
	}),
	Wl = e => u.jsx(we, {
		viewBox: "0 0 20 20",
		width: 20,
		height: 20,
		vkuiIconId: "cancel_20",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M4.72 4.72a.75.75 0 0 1 1.06 0L10 8.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L11.06 10l4.22 4.22a.75.75 0 1 1-1.06 1.06L10 11.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L8.94 10 4.72 5.78a.75.75 0 0 1 0-1.06",
			clipRule: "evenodd"
		})
	}),
	Ow = e => u.jsx(we, {
		viewBox: "0 0 20 20",
		width: 20,
		height: 20,
		vkuiIconId: "check_circle_on_20",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10m5.35-12.72a.75.75 0 1 0-1.062-1.06l-5.955 5.968L5.81 9.66a.75.75 0 1 0-1.062 1.06l3.054 3.06a.75.75 0 0 0 1.062 0z",
			clipRule: "evenodd"
		})
	}),
	Mw = e => u.jsx(we, {
		viewBox: "0 0 24 24",
		width: 24,
		height: 24,
		vkuiIconId: "cancel_24",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			d: "M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z"
		})
	}),
	jw = e => u.jsx(we, {
		viewBox: "0 0 24 24",
		width: 24,
		height: 24,
		vkuiIconId: "check_circle_on_24",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m6.207-14.793a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z",
			clipRule: "evenodd"
		})
	}),
	Tw = e => u.jsx(we, {
		viewBox: "0 0 16 24",
		width: 16,
		height: 24,
		vkuiIconId: "chevron_compact_right_24",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a1 1 0 0 1 0 1.416l-5.084 5.084a1 1 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z"
		})
	}),
	Rw = e => u.jsx(we, {
		viewBox: "0 0 24 24",
		width: 24,
		height: 24,
		vkuiIconId: "dismiss_24",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "currentColor",
			children: [u.jsx("path", {
				d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12",
				opacity: ".12"
			}), u.jsx("path", {
				d: "M16.736 7.264a.9.9 0 0 1 0 1.272L13.273 12l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L12 13.273l-3.464 3.463a.9.9 0 1 1-1.272-1.272L10.727 12 7.264 8.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L12 10.727l3.464-3.463a.9.9 0 0 1 1.272 0"
			})]
		})
	}),
	Nw = "_defaultColor_bi38q_1",
	Lw = {
		defaultColor: Nw
	},
	Dw = ({
		children: e
	}) => {
		const t = Zh();
		return P.cloneElement(e, {
			className: te(t, Lw.defaultColor, e.props.className)
		})
	},
	Q3 = ({
		children: e
	}) => P.Children.map(e, t => P.isValidElement(t) ? u.jsx(Dw, {
		children: t
	}) : t);

function Bw({
	children: e,
	...t
}) {
	const n = go(),
		r = $_({
			...n,
			...t
		});
	return u.jsx(vd.Provider, {
		value: r,
		children: e
	})
}
const zw = ({
		value: e,
		children: t
	}) => u.jsx(Bw, {
		colorScheme: e,
		children: u.jsx(X3, {
			value: e,
			children: u.jsx(Q3, {
				children: t
			})
		})
	}),
	cc = ({
		children: e,
		usePortal: t,
		className: n
	}) => {
		const {
			mode: r,
			disablePortal: o
		} = P.useContext(ri), i = q_(), a = $w(t, r, !!o), c = Fw(t);
		return a && c ? kw(u.jsx(zw, {
			value: i,
			children: u.jsx(V_, {
				className: n,
				children: e
			})
		}), c) : e
	};

function $w(e, t, n) {
	return e === void 0 ? n === !1 && t !== "full" : typeof e != "boolean" ? !0 : n === !1 && e === !0
}

function Fw(e) {
	const {
		portalRoot: t
	} = P.useContext(ri), {
		document: n
	} = _n();
	return e && typeof e != "boolean" ? Iu(e) ? e.current : e : (Iu(t) ? t.current : t) || (n == null ? void 0 : n.body) || null
}
const Vw = "_normalize_1i1si_1",
	Hw = "_inline_1i1si_7",
	Ww = "_weight1_1i1si_13",
	Kw = "_accent_1i1si_17",
	Uw = "_weight2_1i1si_21",
	Yw = "_weight3_1i1si_29",
	qw = "_host_1i1si_39",
	Gw = "_alignStart_1i1si_49",
	Xw = "_alignCenter_1i1si_53",
	Qw = "_alignEnd_1i1si_57",
	$r = {
		normalize: Vw,
		inline: Hw,
		weight1: Ww,
		accent: Kw,
		weight2: Uw,
		weight3: Yw,
		host: qw,
		alignStart: Gw,
		alignCenter: Xw,
		alignEnd: Qw
	},
	Zw = {
		1: $r.weight1,
		2: $r.weight2,
		3: $r.weight3
	},
	Jw = {
		start: $r.alignStart,
		center: $r.alignCenter,
		end: $r.alignEnd
	};

function ex(e, t = !1) {
	return e ? te(Zw[e], t && $r.accent) : ""
}
const cs = ({
		weight: e,
		useAccentWeight: t,
		Component: n = "span",
		normalize: r,
		inline: o,
		align: i,
		...a
	}) => u.jsx(We, {
		Component: n,
		baseClassName: te($r.host, r && $r.normalize, o && $r.inline, ex(e, t), i && Jw[i]),
		...a
	}),
	tx = "_level1_1tuh3_1",
	nx = "_sizeYCompact_1tuh3_8",
	rx = "_sizeYNone_1tuh3_28",
	ox = "_level2_1tuh3_48",
	ix = "_level3_1tuh3_95",
	kl = {
		level1: tx,
		sizeYCompact: nx,
		sizeYNone: rx,
		level2: ox,
		level3: ix
	},
	sx = {
		1: kl.level1,
		2: kl.level2,
		3: kl.level3
	},
	ax = {
		none: kl.sizeYNone,
		compact: kl.sizeYCompact
	},
	wa = ({
		className: e,
		level: t = "1",
		Component: n = "span",
		normalize: r = !0,
		inline: o = !1,
		...i
	}) => {
		const {
			sizeY: a = "none"
		} = Et();
		return u.jsx(cs, {
			Component: n,
			normalize: r,
			inline: o,
			className: te(e, a !== "regular" && ax[a], sx[t]),
			...i
		})
	},
	lx = "_level1_16vog_1",
	cx = "_sizeYCompact_16vog_8",
	ux = "_sizeYNone_16vog_24",
	dx = "_level2_16vog_40",
	ed = {
		level1: lx,
		sizeYCompact: cx,
		sizeYNone: ux,
		level2: dx
	},
	fx = {
		1: ed.level1,
		2: ed.level2
	},
	hx = {
		none: ed.sizeYNone,
		compact: ed.sizeYCompact
	},
	gh = ({
		className: e,
		level: t = "1",
		Component: n = "span",
		normalize: r = !0,
		inline: o = !1,
		...i
	}) => {
		const {
			sizeY: a = "none"
		} = Et();
		return u.jsx(cs, {
			Component: n,
			normalize: r,
			inline: o,
			className: te(e, a !== "regular" && hx[a], fx[t]),
			...i
		})
	},
	px = "_host_1ajl5_1",
	mx = "_sizeYCompact_1ajl5_8",
	vx = "_sizeYNone_1ajl5_25",
	yh = {
		host: px,
		sizeYCompact: mx,
		sizeYNone: vx
	},
	_x = {
		none: yh.sizeYNone,
		compact: yh.sizeYCompact
	},
	xa = ({
		className: e,
		Component: t = "span",
		normalize: n = !0,
		inline: r = !1,
		...o
	}) => {
		const {
			sizeY: i = "none"
		} = Et();
		return u.jsx(cs, {
			Component: t,
			normalize: n,
			inline: r,
			className: te(e, yh.host, i !== "regular" && _x[i]),
			...o
		})
	},
	gx = "_host_jif0d_1",
	yx = "_sizeYCompact_jif0d_8",
	wx = "_sizeYNone_jif0d_28",
	wh = {
		host: gx,
		sizeYCompact: yx,
		sizeYNone: wx
	},
	xx = {
		none: wh.sizeYNone,
		compact: wh.sizeYCompact
	},
	Sx = ({
		className: e,
		Component: t = "span",
		normalize: n = !1,
		inline: r = !1,
		...o
	}) => {
		const {
			sizeY: i = "none"
		} = Et();
		return u.jsx(cs, {
			Component: t,
			normalize: n,
			inline: r,
			className: te(e, wh.host, i !== "regular" && xx[i]),
			...o
		})
	},
	kx = "_host_1qu9x_1",
	bx = "_sizeYCompact_1qu9x_8",
	Cx = "_sizeYNone_1qu9x_28",
	xh = {
		host: kx,
		sizeYCompact: bx,
		sizeYNone: Cx
	},
	Ex = {
		none: xh.sizeYNone,
		compact: xh.sizeYCompact
	},
	Sa = ({
		className: e,
		Component: t = "span",
		normalize: n = !0,
		inline: r = !1,
		...o
	}) => {
		const {
			sizeY: i = "none"
		} = Et();
		return u.jsx(cs, {
			Component: t,
			normalize: n,
			inline: r,
			className: te(e, xh.host, i !== "regular" && Ex[i]),
			...o
		})
	},
	Ax = "_host_bp2az_1",
	Ix = "_sizeYCompact_bp2az_8",
	Px = "_sizeYNone_bp2az_28",
	Ox = "_caps_bp2az_48",
	td = {
		host: Ax,
		sizeYCompact: Ix,
		sizeYNone: Px,
		caps: Ox
	},
	Mx = {
		none: td.sizeYNone,
		compact: td.sizeYCompact
	};

function jx(e, t = !1) {
	return te(td.host, e !== "regular" && Mx[e], t && td.caps)
}
const si = ({
		className: e,
		caps: t,
		Component: n = "span",
		normalize: r = !0,
		inline: o = !1,
		...i
	}) => {
		const {
			sizeY: a = "none"
		} = Et();
		return u.jsx(cs, {
			Component: n,
			normalize: r,
			inline: o,
			className: te(e, jx(a, t)),
			...i
		})
	},
	Tx = "_caps_1szf9_1",
	Rx = "_level1_1szf9_5",
	Nx = "_sizeYCompact_1szf9_12",
	Lx = "_sizeYNone_1szf9_32",
	Dx = "_level2_1szf9_99",
	Bx = "_level3_1szf9_193",
	Xs = {
		caps: Tx,
		level1: Rx,
		sizeYCompact: Nx,
		sizeYNone: Lx,
		level2: Dx,
		level3: Bx
	},
	zx = {
		1: Xs.level1,
		2: Xs.level2,
		3: Xs.level3
	},
	$x = {
		none: Xs.sizeYNone,
		compact: Xs.sizeYCompact
	};

function Fx(e, t = "1", n = !1) {
	return te(e !== "regular" && $x[e], n && Xs.caps, zx[t])
}
const Vx = ({
		className: e,
		level: t = "1",
		caps: n,
		Component: r = "span",
		normalize: o = !0,
		inline: i = !1,
		...a
	}) => {
		const {
			sizeY: c = "none"
		} = Et();
		return u.jsx(cs, {
			Component: r,
			normalize: o,
			inline: i,
			className: te(e, Fx(c, t, n)),
			...a
		})
	},
	Tt = {
		SMALL_MOBILE: 1,
		MOBILE: 2,
		SMALL_TABLET: 3,
		TABLET: 4,
		DESKTOP: 5
	},
	bl = {
		EXTRA_SMALL: 1,
		SMALL: 2,
		MEDIUM: 3
	},
	Hx = {
		REGULAR: "regular"
	},
	Wx = {
		[Tt.SMALL_MOBILE]: "smallMobileMinus",
		[Tt.MOBILE]: "mobile",
		[Tt.SMALL_TABLET]: "smallTablet",
		[Tt.TABLET]: "tablet",
		[Tt.DESKTOP]: "desktopPlus"
	},
	Cr = {
		DESKTOP: 1280,
		TABLET: 1024,
		SMALL_TABLET: 768,
		MOBILE: 320,
		MOBILE_LANDSCAPE_HEIGHT: 415,
		MEDIUM_HEIGHT: 720
	};

function Sh(e) {
	return `(min-width: ${e}px)`
}

function Kx(e) {
	return `(max-width: ${e-.1}px)`
}

function e1(e, t) {
	return `${Sh(e)} and ${Kx(t)}`
}

function gm(e) {
	return `(min-height: ${e}px)`
}
const Ci = {
	DESKTOP_PLUS: Sh(Cr.DESKTOP),
	TABLET: e1(Cr.TABLET, Cr.DESKTOP),
	SMALL_TABLET_PLUS: Sh(Cr.SMALL_TABLET),
	SMALL_TABLET: e1(Cr.SMALL_TABLET, Cr.TABLET),
	MOBILE: e1(Cr.MOBILE, Cr.SMALL_TABLET),
	MEDIUM_HEIGHT: gm(Cr.MEDIUM_HEIGHT),
	MOBILE_LANDSCAPE_HEIGHT: gm(Cr.MOBILE_LANDSCAPE_HEIGHT)
};

function ym(e) {
	return e.desktopPlus.matches ? Tt.DESKTOP : e.tablet.matches ? Tt.TABLET : e.smallTablet.matches ? Tt.SMALL_TABLET : e.mobile.matches ? Tt.MOBILE : Tt.SMALL_MOBILE
}

function wm(e) {
	return e.mediumHeight.matches ? bl.MEDIUM : e.mobileLandscapeHeight.matches ? bl.SMALL : bl.EXTRA_SMALL
}

function Z3(e) {
	return e <= Tt.MOBILE ? "compact" : "regular"
}

function J3(e, t) {
	return e !== void 0 && e >= Tt.SMALL_TABLET && t
}

function e4(e) {
	return e !== void 0 && e <= bl.EXTRA_SMALL
}

function Ux(e, t, n) {
	return J3(e, n) || e4(t) ? "compact" : "regular"
}

function t4(e, t, n, r) {
	const o = r === "vkcom";
	if ((e === void 0 || n === void 0) && (e === void 0 || t === void 0) || n === void 0 && t === void 0) return o ? !0 : null;
	const i = e >= Tt.SMALL_TABLET,
		a = n || (t !== void 0 ? t >= bl.MEDIUM : !1);
	return i && a || o
}

function Yx(e, t = "none") {
	if (t === "none") return e.hasOwnProperty("none") ? e.none : null;
	const n = [],
		r = Wx[t];
	return e.hasOwnProperty(r) && n.push(e[r]), t >= Tt.MOBILE && e.hasOwnProperty("mobilePlus") && n.push(e.mobilePlus), t >= Tt.SMALL_TABLET ? e.hasOwnProperty("smallTabletPlus") && n.push(e.smallTabletPlus) : e.hasOwnProperty("smallTabletMinus") && n.push(e.smallTabletMinus), t >= Tt.TABLET ? e.hasOwnProperty("tabletPlus") && n.push(e.tabletPlus) : e.hasOwnProperty("tabletMinus") && n.push(e.tabletMinus), n.length > 0 ? n.join(" ") : null
}
const qx = (...e) => (...t) => e.filter(n => typeof n == "function").forEach(n => n(...t));

function jd(...e) {
	const t = e.reduce((n, r) => (Object.entries(r).forEach(([o, i]) => {
		n.hasOwnProperty(o) || (n[o] = []), n[o].push(i)
	}), n), {});
	return Object.entries(t).reduce((n, [r, o]) => (n[r] = qx(...o), n), {})
}

function n4() {
	const [e, t] = P.useState(!1), {
		keyboardInput: n
	} = P.useContext(ri), r = P.useCallback(a => {
		a.stopPropagation(), t(!0)
	}, [t]), o = P.useCallback(a => {
		a.stopPropagation(), t(!1)
	}, [t]);
	return {
		focusVisible: n && e,
		onFocus: r,
		onBlur: o
	}
}
const Gx = {
		inside: ku["-focus-visible--mode-inside"],
		outside: ku["-focus-visible--mode-outside"]
	},
	Xx = e => e === "inside" || e === "outside";

function r4({
	focusVisible: e = !1,
	mode: t = "inside"
}) {
	const n = Xx(t) ? Gx[t] : t;
	return te(ku["-focus-visible"], e && ku["-focus-visible--focused"], e && n)
}

function Qs(e, t) {
	t && (typeof t == "function" ? t(e) : t.current = e)
}
const K0 = e => e.stopPropagation(),
	Fz = e => e.preventDefault(),
	Qx = e => {
		const t = {};
		for (const n in e) e.hasOwnProperty(n) && e[n] !== void 0 && (t[n] = e[n]);
		return t
	};

function Zx(e) {
	return P.version.startsWith("19") ? {
		fetchPriority: e
	} : {
		fetchpriority: e
	}
}

function U0(e) {
	var t, n;
	!Zi(e.target) || !s8(e) || (e.preventDefault(), (n = (t = e.target).click) == null || n.call(t))
}

function Jx(e, t = 0, n = Ie) {
	const [r, o] = P.useState(e), i = P.useRef(void 0), a = P.useCallback(d => {
		n8(d) ? o(f => {
			const m = d(f);
			return n(m), m
		}) : (o(d), n(d))
	}, [n]), c = P.useCallback((d, f = t) => {
		if (clearTimeout(i.current), f === 0) {
			a(d);
			return
		}
		i.current = setTimeout(() => a(d), f)
	}, [t, a]);
	return [r, c]
}
const e9 = 600,
	t9 = 70;

function n9({
	hovered: e,
	hasHover: t = !0,
	lockState: n = !1,
	setParentStateLock: r = Ie
} = {}) {
	const [o, i] = P.useState(!1), a = P.useRef(void 0), c = P.useCallback(_ => {
		i(_);
		const v = e ?? kh({
			hasState: t,
			isLocked: n,
			stateValueLocal: _
		});
		v !== a.current && (a.current = v, r(v))
	}, [r, t, e, n]), d = _ => {
		_.pointerType !== "touch" && c(!0)
	}, f = () => {
		c(!1)
	};
	return {
		isHovered: e ?? kh({
			hasState: t,
			isLocked: n,
			stateValueLocal: o
		}),
		onPointerEnter: t ? d : Ie,
		onPointerLeave: t ? f : Ie
	}
}

function r9({
	activated: e,
	activeEffectDelay: t,
	hasActive: n = !0,
	lockStateRef: r,
	setParentStateLock: o
}) {
	const [i, a] = Jx(!1, 0, o), c = P.useMemo(() => new Set, []), d = () => {
		r.current || (a(!0, t9), o(!0))
	}, f = v => {
		if (c.has(v.pointerId)) {
			c.delete(v.pointerId);
			return
		}
		a(!1)
	}, m = v => {
		c.add(v.pointerId), !r.current && (a(!0), a(!1, t))
	};
	return {
		isActivated: e ?? kh({
			hasState: n,
			isLocked: r.current,
			stateValueLocal: i
		}),
		onPointerLeave: n ? f : Ie,
		onPointerDown: n ? d : Ie,
		onPointerCancel: n ? f : Ie,
		onPointerUp: n ? m : Ie
	}
}
const o4 = P.createContext({
	lockHoverStateBubbling: void 0,
	lockActiveStateBubbling: void 0
});

function o9(e) {
	const [t, n] = P.useState(!1), r = P.useCallback(o => {
		n(o), e(o)
	}, [e]);
	return [t, e, r]
}

function i9(e) {
	const t = P.useRef(!1),
		n = P.useCallback(r => {
			t.current = r, e(r)
		}, [e]);
	return [t, e, n]
}

function s9({
	hovered: e,
	hasHover: t,
	activated: n,
	hasActive: r,
	activeEffectDelay: o,
	unlockParentHover: i,
	hoverClassName: a,
	activeClassName: c
}) {
	const {
		lockHoverStateBubbling: d = Ie,
		lockActiveStateBubbling: f = Ie
	} = P.useContext(o4), [m, _, v] = o9(i ? Ie : d), [x, k, A] = i9(f), {
		isHovered: C,
		...y
	} = n9({
		hasHover: t,
		hovered: e,
		lockState: m,
		setParentStateLock: _
	}), {
		isActivated: w,
		...b
	} = r9({
		activated: n,
		hasActive: r,
		activeEffectDelay: o,
		lockStateRef: x,
		setParentStateLock: k
	}), O = te(C && a, w && c), L = jd(y, b);
	return {
		stateClassName: O,
		setLockHoverBubblingImmediate: v,
		setLockActiveBubblingImmediate: A,
		...L
	}
}

function kh({
	hasState: e,
	isLocked: t,
	stateValueLocal: n
}) {
	return e && !t && n
}
const a9 = "_realClickable_19rn9_1",
	l9 = "_host_19rn9_28",
	i4 = {
		realClickable: a9,
		host: l9
	};

function c9({
	href: e,
	onClick: t,
	onClickCapture: n,
	activeClassName: r,
	hoverClassName: o,
	hasActive: i,
	hasHover: a,
	hovered: c,
	unlockParentHover: d,
	activated: f,
	activeEffectDelay: m,
	focusVisibleMode: _,
	DefaultComponent: v,
	Component: x,
	...k
}) {
	return {
		Component: x || v,
		...k,
		lockStateContextValue: {
			lockHoverStateBubbling: void 0,
			lockActiveStateBubbling: void 0
		}
	}
}

function u9({
	baseClassName: e,
	focusVisibleMode: t = "inside",
	activeClassName: n,
	hoverClassName: r,
	activeEffectDelay: o = e9,
	hasHover: i = !0,
	hasActive: a = !0,
	hovered: c,
	activated: d,
	hasHoverWithChildren: f,
	unlockParentHover: m,
	onPointerEnter: _,
	onPointerLeave: v,
	onPointerDown: x,
	onPointerCancel: k,
	onPointerUp: A,
	onBlur: C,
	onFocus: y,
	onKeyDown: w,
	DefaultComponent: b,
	...O
}) {
	const {
		focusVisible: L,
		...$
	} = n4(), H = r4({
		focusVisible: L,
		mode: t
	}), {
		stateClassName: q,
		setLockHoverBubblingImmediate: ne,
		setLockActiveBubblingImmediate: G,
		...oe
	} = s9({
		activeClassName: n,
		hoverClassName: r,
		activeEffectDelay: o,
		hasHover: i,
		hasActive: a,
		hovered: c,
		activated: d,
		unlockParentHover: m
	}), fe = jd($, oe, {
		onKeyDown: U0
	}, {
		onPointerEnter: _,
		onPointerLeave: v,
		onPointerDown: x,
		onPointerCancel: k,
		onPointerUp: A,
		onBlur: C,
		onFocus: y,
		onKeyDown: w
	}), me = P.useMemo(() => ({
		lockHoverStateBubbling: f ? Ie : ne,
		lockActiveStateBubbling: G
	}), [ne, G, f]);
	return {
		baseClassName: te(e, i4.realClickable, H, q),
		...fe,
		...O,
		lockStateContextValue: me
	}
}

function d9(e) {
	const t = f9(e),
		n = s4(e),
		{
			baseClassName: r,
			disabled: o,
			Component: i,
			...a
		} = e,
		c = {
			baseClassName: te(r, i4.host),
			...t,
			...a
		},
		d = u9(c);
	return n ? d : c9(c)
}

function s4(e) {
	return (e.href !== void 0 || e.onClick !== void 0 || e.onClickCapture !== void 0 || e.Component === "a" || e.Component === "button" || e.Component === "label" || e.Component === "input") && !e.disabled
}

function f9({
	Component: e,
	DefaultComponent: t = "div",
	onClick: n,
	onClickCapture: r,
	href: o,
	disabled: i
}) {
	return e !== void 0 ? {
		Component: e,
		disabled: i
	} : o !== void 0 ? {
		Component: "a",
		...i && {
			"aria-disabled": !0,
			role: "link"
		}
	} : n !== void 0 || r !== void 0 ? {
		Component: t,
		role: "button",
		...i ? {
			"aria-disabled": !0
		} : {
			tabIndex: 0
		}
	} : {}
}
const a4 = e => {
	const {
		lockStateContextValue: t,
		children: n,
		...r
	} = d9(e);
	return u.jsx(We, {
		...r,
		children: u.jsx(o4.Provider, {
			value: t,
			children: n
		})
	})
};

function rt() {
	const {
		platform: e
	} = go();
	return e
}

function h9(e) {
	const t = e == null ? void 0 : e.getBoundingClientRect();
	return {
		top: t == null ? void 0 : t.top,
		left: t == null ? void 0 : t.left,
		width: e == null ? void 0 : e.offsetWidth,
		height: e == null ? void 0 : e.offsetHeight
	}
}
const p9 = "_host_70kgc_1",
	m9 = "_sizeXCompact_70kgc_28",
	v9 = "_sizeXNone_70kgc_33",
	_9 = "_borderRadiusInherit_70kgc_38",
	g9 = "_stateLayer_70kgc_46",
	y9 = "_hasPointerFalse_70kgc_59",
	w9 = "_ripple_70kgc_59",
	x9 = "_hasPointerNone_70kgc_64",
	S9 = "_hoveredBackground_70kgc_69",
	k9 = "_activatedBackground_70kgc_73",
	b9 = "_hoveredOpacity_70kgc_77",
	C9 = "_activatedOpacity_70kgc_78",
	E9 = "_wave_70kgc_90",
	zn = {
		host: p9,
		sizeXCompact: m9,
		sizeXNone: v9,
		borderRadiusInherit: _9,
		stateLayer: g9,
		hasPointerFalse: y9,
		ripple: w9,
		hasPointerNone: x9,
		hoveredBackground: S9,
		activatedBackground: k9,
		hoveredOpacity: b9,
		activatedOpacity: C9,
		wave: E9
	},
	A9 = (e, t) => rt() === "android" && !t && e === "background",
	I9 = 70,
	xm = 225,
	P9 = (e, t) => {
		const [n, r] = P.useState([]), o = P.useMemo(() => new Map, []);
		P.useEffect(function() {
			const m = n.length > 0 ? setTimeout(() => r([]), xm) : null;
			return function() {
				m && clearTimeout(m)
			}
		}, [n]);

		function i(f, m, _) {
			const v = Date.now(),
				x = n.filter(k => k.id + xm > v);
			r([...x, {
				x: f,
				y: m,
				id: v,
				pointerId: _
			}]), o.delete(_)
		}
		const a = f => {
				const {
					top: m,
					left: _
				} = h9(f.currentTarget), v = f.clientX - (_ ?? 0), x = f.clientY - (m ?? 0);
				o.set(f.pointerId, setTimeout(() => i(v, x, f.pointerId), I9))
			},
			c = f => {
				const m = o.get(f.pointerId);
				clearTimeout(m), o.delete(f.pointerId)
			},
			d = (!Gh || t === !1) && e;
		return {
			clicks: n,
			onPointerDown: d ? a : Ie,
			onPointerCancel: d ? c : Ie
		}
	},
	O9 = ({
		needRipple: e = !0,
		clicks: t
	}) => u.jsx("span", {
		"aria-hidden": !0,
		className: te(zn.stateLayer, e && zn.ripple),
		children: t.map(n => u.jsx("span", {
			className: zn.wave,
			style: {
				top: n.y,
				left: n.x
			}
		}, n.id))
	}),
	nd = "background",
	M9 = {
		background: zn.hoveredBackground,
		opacity: zn.hoveredOpacity,
		none: ""
	};

function j9(e = nd) {
	const t = M9[e];
	return t !== void 0 ? t : e
}
const T9 = {
	background: zn.activatedBackground,
	opacity: zn.activatedOpacity,
	none: ""
};

function R9(e = nd) {
	const t = T9[e];
	return t !== void 0 ? t : e
}
const N9 = {
	none: zn.sizeXNone,
	compact: zn.sizeXCompact
};

function L9(e) {
	switch (e) {
		case void 0:
			return zn.hasPointerNone;
		case !1:
			return zn.hasPointerFalse
	}
}
const Wr = ({
		baseClassName: e,
		borderRadiusMode: t = "auto",
		children: n,
		hoverMode: r = nd,
		activeMode: o = nd,
		onPointerDown: i,
		onPointerCancel: a,
		...c
	}) => {
		const d = s4(c),
			{
				sizeX: f = "none",
				hasPointer: m
			} = Et(),
			_ = A9(o, m),
			{
				clicks: v,
				...x
			} = P9(_, m),
			k = jd(x, {
				onPointerDown: i,
				onPointerCancel: a
			}),
			A = c.Component === "button" ? {
				type: "button"
			} : {};
		return u.jsxs(a4, {
			baseClassName: te("vkuiInternalTappable", e, zn.host, f !== Hx.REGULAR && N9[f], t === "inherit" && zn.borderRadiusInherit, L9(m)),
			hoverClassName: j9(r),
			activeClassName: R9(o),
			...A,
			...k,
			...c,
			children: [n, d && (r === "background" || o === "background") && u.jsx(O9, {
				needRipple: _,
				clicks: v
			})]
		})
	},
	D9 = {
		position: "absolute",
		left: "0",
		top: "0",
		zIndex: "-1",
		width: "100%",
		height: "100%",
		pointerEvents: "none",
		opacity: "0",
		border: "0"
	};
class bh {
	constructor(t) {
		qe(this, "records", []);
		qe(this, "mutationObserverFallback", null);
		qe(this, "updateFunction");
		this.updateFunction = t
	}
	observe(t) {
		return B9(t) ? this.observeUsingIframe(t) : this.observeUsingMutationObserver(t)
	}
	appendToTheDOM() {
		for (let t of this.records) t.target.appendChild(t.iframe);
		for (let t of this.records) t.iframe.contentWindow && t.iframe.contentWindow.addEventListener("resize", this.updateFunction)
	}
	observeUsingIframe(t) {
		const n = t.ownerDocument.createElement("iframe");
		n.ariaHidden = "true", n.tabIndex = -1, Object.assign(n.style, D9), this.records.push({
			target: t,
			iframe: n
		})
	}
	observeUsingMutationObserver(t) {
		this.mutationObserverFallback || (this.mutationObserverFallback = new MutationObserver(this.updateFunction)), this.mutationObserverFallback.observe(t, {
			childList: !0,
			subtree: !0
		})
	}
	disconnect() {
		this.records.map(({
			target: t,
			iframe: n
		}) => {
			n.contentWindow && n.contentWindow.removeEventListener("resize", this.updateFunction), t.removeChild(n)
		}), this.records = [], this.mutationObserverFallback && this.mutationObserverFallback.disconnect(), this.mutationObserverFallback = null
	}
}

function B9(e) {
	return getComputedStyle(e).position !== "static"
}

function Kt(e) {
	const t = P.useRef(e);
	return Je(() => {
		t.current = e
	}), P.useCallback((...n) => (0, t.current)(...n), [])
}

function Sm(e, t) {
	const n = Kt(t),
		{
			window: r
		} = _n();
	P.useEffect(function() {
		if (!e || !r) return;
		if (e === r) {
			const f = () => n(e);
			return e.addEventListener("resize", f), () => e.removeEventListener("resize", f)
		}
		if (!Iu(e) || !e.current) return;
		const i = e.current,
			a = "ResizeObserver" in r && r.ResizeObserver !== void 0,
			c = () => n(i),
			d = a ? new ResizeObserver(c) : new bh(c);
		return d.observe(i), d instanceof bh && d.appendToTheDOM(), () => d.disconnect()
	}, [e, n, r])
}
const z9 = "data-onboarding-tooltip-container",
	Y0 = P.forwardRef(({
		fixed: e = !1,
		Component: t = "div",
		...n
	}, r) => {
		const o = {
			[z9]: e ? "fixed" : "true"
		};
		return u.jsx(t, {
			...o,
			...n,
			ref: r
		})
	}),
	q0 = P.createContext({
		colRef: null,
		animate: !0
	}),
	$9 = () => P.useContext(q0),
	F9 = "_host_rwnii_1",
	V9 = "_filled_rwnii_20",
	H9 = "_verticalTop_rwnii_24",
	W9 = "_verticalBottom_rwnii_29",
	rd = {
		host: F9,
		filled: V9,
		verticalTop: H9,
		verticalBottom: W9
	},
	K9 = {
		top: rd.verticalTop,
		bottom: te(rd.verticalBottom, "vkuiInternalFixedLayout--vertical-bottom")
	},
	Ch = ({
		children: e,
		style: t,
		vertical: n,
		getRootRef: r,
		filled: o,
		className: i,
		useParentWidth: a,
		...c
	}) => {
		const d = rt(),
			f = P.useRef(null),
			[m, _] = P.useState(void 0),
			{
				window: v
			} = _n(),
			{
				colRef: x
			} = P.useContext(q0),
			k = P.useRef(null),
			A = P.useCallback(y => {
				y && (Qs(y, r), Qs(y, f), Qs(y.parentElement, k))
			}, [r]),
			C = () => {
				if (a && k.current) {
					const y = k.current.getBoundingClientRect().width;
					_(y ? `${y}px` : void 0)
				} else if (x != null && x.current) {
					const y = getComputedStyle(x.current);
					_(`${x.current.clientWidth-parseFloat(y.paddingLeft||"0")-parseFloat(y.paddingRight||"0")}px`)
				} else _(void 0)
			};
		return P.useEffect(C, [x, d, f, a]), Sm(v, C), Sm(a ? k : x, C), u.jsx(Y0, {
			...c,
			fixed: !0,
			ref: A,
			className: te(rd.host, d === "ios" && "vkuiInternalFixedLayout--ios", o && rd.filled, n && K9[n], i),
			style: {
				width: m,
				...t
			},
			children: e
		})
	};
var ta, zi;
class U9 {
	constructor(t = []) {
		$e(this, ta, null);
		$e(this, zi, new Set);
		t.forEach(n => {
			n && Q(this, zi).add(n)
		})
	}
	updateExternRefs(t) {
		t.forEach(n => {
			!n || Q(this, zi).has(n) || (Qs(Q(this, ta), n), Q(this, zi).add(n))
		})
	}
	get current() {
		return Q(this, ta)
	}
	set current(t) {
		je(this, ta, t), Q(this, zi).forEach(n => Qs(t, n))
	}
	hasOwnProperty(t) {
		return t === "current"
	}
}
ta = new WeakMap, zi = new WeakMap;

function Hn(...e) {
	const t = P.useRef(null);
	return t.current === null ? t.current = new U9(e) : t.current.updateExternRefs(e), t.current
}
const km = (e, t) => typeof e[t] == "function",
	Y9 = (e, t) => {
		const n = {};
		for (const r in e) e.hasOwnProperty(r) && t.hasOwnProperty(r) && km(e, r) && km(t, r) && (n[r] = function(...i) {
			t[r].apply(this, i), e[r].apply(this, i)
		});
		return n
	};

function q9(e, t) {
	return Object.entries(e).reduce((n, [r, o]) => (t(o, r) && Object.assign(n, {
		[r]: o
	}), n), {})
}
const bm = e => q9(e, t => t !== void 0),
	Kl = (e, t) => {
		const n = e.getRootRef,
			r = t == null ? void 0 : t.getRootRef,
			o = Hn(n, r);
		if (!t) return bm(e);
		const {
			className: i,
			style: a,
			...c
		} = t || {}, {
			className: d,
			style: f,
			...m
		} = e, _ = d || i ? te(d, i) : void 0, v = f || a ? fo(f, a) : void 0, x = Y9(m, c), k = {
			...m,
			...c,
			...x
		};
		return _ && (k.className = _), v && (k.style = v), (r || n) && (k.getRootRef = o), bm(k)
	};

function G9(e) {
	return e !== void 0
}

function X9(e, t, n) {
	const r = t.filter(G9);
	return r.length ? e(...r) : n
}

function Q9(e, t) {
	return X9(Math.min, e, t)
}

function l4(e) {
	const t = new Set;
	return (n, r = "warn") => {
		if (!t.has(n)) {
			t.add(n);
			const o = `%c[VKUI/${e}] ${n}`,
				i = r === "log" ? "color: steelblue; font-style: italic" : void 0;
			console[r](o, i)
		}
	}
}
const uc = P.createContext({
	size: 0,
	onMouseOverHandlers: [],
	onMouseOutHandlers: []
});

function G0(e) {
	return e <= 36 ? 12 : e > 36 && e <= 48 ? 16 : e > 48 && e <= 64 ? 20 : G0.MAX_SIZE
}
G0.MAX_SIZE = 24;
const Z9 = "_host_3ugbq_1",
	J9 = "_backgroundStroke_3ugbq_13",
	eS = "_backgroundShadow_3ugbq_18",
	Eh = {
		host: Z9,
		backgroundStroke: J9,
		backgroundShadow: eS
	},
	tS = {
		stroke: Eh.backgroundStroke,
		shadow: Eh.backgroundShadow
	},
	nS = ({
		background: e = "shadow",
		...t
	}) => u.jsxs(u.Fragment, {
		children: [u.jsx(We, {
			...t,
			baseClassName: te(Eh.host, tS[e])
		}), !1]
	});

function rS(e) {
	return e === "2xs" || e === "xs" || e === "s" || e === "m" || e === "l" || e === "xl" || e === "2xl" || e === "3xl" || e === "4xl"
}

function oS(e) {
	if (!rS(e)) return typeof e == "string" ? e : `${e}px`
}
const Cm = (e, t, n) => {
		if (!e) return [void 0, void 0];
		const r = oS(e);
		return r ? [{
			[t]: r
		}, void 0] : [void 0, n[e]]
	},
	Em = (e, t) => {
		e.splice(e.indexOf(t), 1)
	},
	iS = "_host_ljrvl_1",
	sS = "_inlineIndent2xs_ljrvl_10",
	aS = "_inlineIndentXs_ljrvl_14",
	lS = "_inlineIndentS_ljrvl_18",
	cS = "_inlineIndentM_ljrvl_22",
	uS = "_inlineIndentL_ljrvl_26",
	dS = "_inlineIndentXl_ljrvl_30",
	fS = "_inlineIndent2xl_ljrvl_34",
	hS = "_inlineIndent3xl_ljrvl_38",
	pS = "_inlineIndent4xl_ljrvl_42",
	mS = "_blockIndent2xs_ljrvl_46",
	vS = "_blockIndentXs_ljrvl_50",
	_S = "_blockIndentS_ljrvl_54",
	gS = "_blockIndentM_ljrvl_58",
	yS = "_blockIndentL_ljrvl_62",
	wS = "_blockIndentXl_ljrvl_66",
	xS = "_blockIndent2xl_ljrvl_70",
	SS = "_blockIndent3xl_ljrvl_74",
	kS = "_blockIndent4xl_ljrvl_78",
	bS = "_hidden_ljrvl_82",
	CS = "_placementTopStart_ljrvl_86",
	ES = "_placementTop_ljrvl_86",
	AS = "_placementTopEnd_ljrvl_97",
	IS = "_placementBottomStart_ljrvl_102",
	PS = "_placementBottom_ljrvl_102",
	OS = "_placementBottomEnd_ljrvl_113",
	MS = "_placementMiddleStart_ljrvl_118",
	jS = "_placementMiddle_ljrvl_118",
	TS = "_placementMiddleEnd_ljrvl_130",
	tt = {
		host: iS,
		inlineIndent2xs: sS,
		inlineIndentXs: aS,
		inlineIndentS: lS,
		inlineIndentM: cS,
		inlineIndentL: uS,
		inlineIndentXl: dS,
		inlineIndent2xl: fS,
		inlineIndent3xl: hS,
		inlineIndent4xl: pS,
		blockIndent2xs: mS,
		blockIndentXs: vS,
		blockIndentS: _S,
		blockIndentM: gS,
		blockIndentL: yS,
		blockIndentXl: wS,
		blockIndent2xl: xS,
		blockIndent3xl: SS,
		blockIndent4xl: kS,
		hidden: bS,
		placementTopStart: CS,
		placementTop: ES,
		placementTopEnd: AS,
		placementBottomStart: IS,
		placementBottom: PS,
		placementBottomEnd: OS,
		placementMiddleStart: MS,
		placementMiddle: jS,
		placementMiddleEnd: TS
	},
	RS = {
		"top-start": tt.placementTopStart,
		top: tt.placementTop,
		"top-end": tt.placementTopEnd,
		"bottom-start": tt.placementBottomStart,
		bottom: tt.placementBottom,
		"bottom-end": tt.placementBottomEnd,
		"middle-start": tt.placementMiddleStart,
		middle: tt.placementMiddle,
		"middle-end": tt.placementMiddleEnd
	},
	NS = {
		"2xs": tt.inlineIndent2xs,
		xs: tt.inlineIndentXs,
		s: tt.inlineIndentS,
		m: tt.inlineIndentM,
		l: tt.inlineIndentL,
		xl: tt.inlineIndentXl,
		"2xl": tt.inlineIndent2xl,
		"3xl": tt.inlineIndent3xl,
		"4xl": tt.inlineIndent4xl
	},
	LS = {
		"2xs": tt.blockIndent2xs,
		xs: tt.blockIndentXs,
		s: tt.blockIndentS,
		m: tt.blockIndentM,
		l: tt.blockIndentL,
		xl: tt.blockIndentXl,
		"2xl": tt.blockIndent2xl,
		"3xl": tt.blockIndent3xl,
		"4xl": tt.blockIndent4xl
	},
	DS = ({
		placement: e,
		visibility: t = "always",
		style: n,
		className: r,
		inlineIndent: o,
		blockIndent: i,
		...a
	}) => {
		const [c, d] = P.useState(t !== "always"), {
			onMouseOverHandlers: f,
			onMouseOutHandlers: m
		} = P.useContext(uc);
		Je(function() {
			d(t === "on-hover")
		}, [t]), Je(function() {
			if (t === "on-hover") {
				const C = () => d(!1),
					y = () => d(!0);
				return f.push(C), m.push(y), () => {
					Em(f, C), Em(m, y)
				}
			}
		}, [t]);
		const [_, v, x, k] = P.useMemo(() => {
			const [A, C] = Cm(o, "--vkui_internal--FloatElement_horizontal_indent", NS), [y, w] = Cm(i, "--vkui_internal--FloatElement_vertical_indent", LS);
			return [A, y, C, w]
		}, [o, i]);
		return u.jsx(We, {
			...a,
			style: {
				...n,
				..._,
				...v
			},
			className: te(tt.host, c && tt.hidden, RS[e], x, k, r)
		})
	},
	Am = (e, t) => e.contains(t.activeElement);

function c4(e) {
	const {
		document: t
	} = _n(), [n, r] = P.useState(() => e.current && t ? Am(e.current, t) : !1);
	return Je(function() {
		if (!t) return;
		const i = () => {
			e.current && r(Am(e.current, t))
		};
		return i(), t.addEventListener("focus", i, {
			capture: !0
		}), t.addEventListener("blur", i, {
			capture: !0
		}), () => {
			t.removeEventListener("focus", i, {
				capture: !0
			}), t.removeEventListener("blur", i, {
				capture: !0
			})
		}
	}, []), n
}

function BS(e = !1) {
	const [t, n] = P.useState(e);
	return Je(() => {
		n(!0)
	}, []), t
}

function zS(e) {
	const t = c4(e),
		[n, r] = P.useState(!1);

	function o(i) {
		i.detail > 0 && r(!1)
	}
	return Je(() => {
		r(t)
	}, [t]), {
		shown: n && t,
		onClick: o
	}
}

function $S() {
	const {
		hasPointer: e
	} = Et();
	return !BS(!(e === void 0)) && e === void 0 || (e ?? Gh) ? "on-hover" : "always"
}
const FS = "_host_x9iq9_1",
	VS = "_visible_x9iq9_19",
	HS = "_clickable_x9iq9_29",
	WS = "_themeLight_x9iq9_33",
	KS = "_themeDark_x9iq9_38",
	Zs = {
		host: FS,
		visible: VS,
		clickable: HS,
		themeLight: WS,
		themeDark: KS
	},
	US = ({
		children: e,
		className: t,
		getRootRef: n,
		overlayShown: r,
		...o
	}) => {
		const {
			focusVisible: i,
			...a
		} = n4(), c = r4({
			focusVisible: i,
			mode: "inside"
		});
		return u.jsxs(u.Fragment, {
			children: [u.jsx("div", {
				...o,
				tabIndex: 0,
				role: "button",
				className: te(Zs.clickable, (i || r) && Zs.visible, c, t),
				ref: n,
				onKeyDown: U0,
				...a,
				children: e
			}), !1]
		})
	},
	YS = ({
		className: e,
		getRootRef: t,
		overlayShown: n,
		...r
	}) => {
		const o = Hn(t),
			{
				shown: i,
				onClick: a
			} = zS(o);
		return u.jsx("div", {
			...r,
			ref: o,
			className: te((i || n) && Zs.visible, e),
			onClick: a
		})
	},
	u4 = ({
		className: e,
		theme: t,
		visibility: n,
		...r
	}) => {
		const o = q_(),
			i = t ?? o,
			a = te(Zs.host, i === "light" && Zs.themeLight, i === "dark" && Zs.themeDark, e),
			c = $S(),
			f = {
				className: a,
				overlayShown: (n ?? c) === "always"
			};
		return r.onClick ? u.jsx(US, {
			...r,
			...f
		}) : u.jsx(YS, {
			...r,
			...f
		})
	},
	qS = "_host_1me9p_1",
	GS = "_loaded_1me9p_14",
	XS = "_transparentBackground_1me9p_15",
	QS = "_children_1me9p_19",
	ZS = "_border_1me9p_20",
	JS = "_img_1me9p_44",
	ek = "_imgKeepRatio_1me9p_59",
	tk = "_imgObjectFitContain_1me9p_64",
	nk = "_imgObjectFitCover_1me9p_68",
	rk = "_imgObjectFitNone_1me9p_72",
	ok = "_imgObjectFitScaleDown_1me9p_76",
	ik = "_withObjectPosition_1me9p_80",
	sk = "_withFilter_1me9p_89",
	ak = "_imgHiddenAlt_1me9p_52",
	lk = "_fallback_1me9p_102",
	cn = {
		host: qS,
		loaded: GS,
		transparentBackground: XS,
		children: QS,
		border: ZS,
		img: JS,
		imgKeepRatio: ek,
		imgObjectFitContain: tk,
		imgObjectFitCover: nk,
		imgObjectFitNone: rk,
		imgObjectFitScaleDown: ok,
		withObjectPosition: ik,
		withFilter: sk,
		imgHiddenAlt: ak,
		fallback: lk
	},
	ck = 24,
	uk = e => {
		switch (e) {
			case "contain":
				return cn.imgObjectFitContain;
			case "cover":
				return cn.imgObjectFitCover;
			case "none":
				return cn.imgObjectFitNone;
			case "scale-down":
				return cn.imgObjectFitScaleDown
		}
	},
	dk = e => {
		if (e.endsWith("px")) return parseInt(e)
	},
	Im = e => typeof e == "string" ? dk(e) : e,
	Kr = ({
		alt: e,
		crossOrigin: t,
		decoding: n,
		loading: r,
		referrerPolicy: o,
		sizes: i,
		src: a,
		srcSet: c,
		useMap: d,
		fetchPriority: f,
		getRef: m,
		size: _,
		width: v,
		height: x,
		widthSize: k,
		heightSize: A,
		noBorder: C = !1,
		fallbackIcon: y,
		children: w,
		onLoad: b,
		onError: O,
		withTransparentBackground: L,
		objectFit: $ = "cover",
		objectPosition: H,
		filter: q,
		keepAspectRatio: ne = !1,
		getRootRef: G,
		elementTiming: oe,
		slotProps: fe,
		...me
	}) => {
		const Z = _ ?? Q9([Im(k), Im(A)], ck),
			J = Hn(G),
			X = k ?? (ne ? void 0 : Z),
			re = A ?? (ne ? void 0 : Z),
			[z, W] = P.useState(!1),
			[K, ie] = P.useState(!1),
			le = P.useRef([]),
			_e = P.useRef([]),
			Ee = a || c,
			Re = K || !Ee ? y : null,
			Oe = At => {
				z || (W(!0), ie(!1), b == null || b(At))
			},
			Ae = At => {
				W(!1), ie(!0), O == null || O(At)
			},
			{
				getRootRef: Le,
				fetchPriority: Ue,
				...ue
			} = Kl(Ee ? {
				loading: r,
				getRootRef: m,
				alt: e,
				className: te(cn.img, uk($), H && cn.withObjectPosition, q && cn.withFilter, ne && cn.imgKeepRatio, K && cn.imgHiddenAlt),
				crossOrigin: t,
				decoding: n,
				referrerPolicy: o,
				style: fo(ne ? {
					width: v || X,
					height: x || re
				} : void 0, H || q ? {
					"--vkui_internal--ImageBase_object_position": H,
					"--vkui_internal--ImageBase_object_filter": q
				} : void 0),
				sizes: i,
				src: a,
				srcSet: c,
				useMap: d,
				width: X,
				height: re,
				onLoad: Oe,
				onError: Ae,
				fetchPriority: f,
				elementtiming: oe
			} : {}, Ee ? fe == null ? void 0 : fe.img : void 0),
			Fe = Hn(Le),
			Me = P.useRef(!1);
		P.useEffect(function() {
			if (!Me.current && (Me.current = !0, Fe.current && Fe.current.complete && !z)) {
				const On = new Event("load");
				Fe.current.dispatchEvent(On)
			}
		}, [Fe, z]);
		const St = () => {
				le.current.forEach(At => At())
			},
			yn = () => {
				_e.current.forEach(At => At())
			},
			Ot = P.useMemo(() => ({
				size: Z,
				onMouseOverHandlers: le.current,
				onMouseOutHandlers: _e.current
			}), [Z]);
		return u.jsx(uc.Provider, {
			value: Ot,
			children: u.jsxs(a4, {
				baseStyle: {
					width: X,
					height: re
				},
				baseClassName: te(cn.host, Ee && z && cn.loaded, L && cn.transparentBackground),
				getRootRef: J,
				onMouseOver: St,
				onMouseOut: yn,
				...me,
				children: [Ee && u.jsx("img", {
					ref: Fe,
					...ue,
					...Zx(Ue)
				}), Re && u.jsx("div", {
					className: cn.fallback,
					children: Re
				}), w && u.jsx("div", {
					className: cn.children,
					children: w
				}), !C && u.jsx("div", {
					"aria-hidden": !0,
					className: cn.border
				})]
			})
		})
	};
Kr.Badge = nS;
Kr.Overlay = u4;
Kr.FloatElement = DS;

function fk(e) {
	if (e !== void 0) return {
		"--vkui_internal--animation_delay_visibility": `${e}ms`
	}
}
const hk = "_host_r40r0_2",
	pk = "_focusableInput_r40r0_20",
	Pm = {
		host: hk,
		focusableInput: pk
	},
	Lr = ({
		Component: e = "span",
		baseClassName: t,
		...n
	}) => u.jsx(We, {
		Component: e,
		...n,
		baseClassName: te(t, Pm.host, e === "input" && Pm.focusableInput)
	}),
	X0 = (e, {
		onEnter: t,
		onEntering: n,
		onEntered: r,
		onExit: o,
		onExiting: i,
		onExited: a
	} = {}, c = !1) => {
		const [d, f] = P.useState(() => c ? e === "enter" ? "entered" : "exited" : e), m = P.useRef(void 0);
		P.useEffect(() => {
			m.current = e
		});
		const _ = () => {
				d === "enter" ? (f("entering"), n && n()) : d === "exit" && (f("exiting"), i && i())
			},
			v = () => {
				d === "entering" ? (f("entered"), r && r()) : d === "exiting" && (f("exited"), a && a())
			},
			x = Kt(t || Ie),
			k = Kt(o || Ie);
		return Je(function() {
			if (m.current !== e) switch (e) {
				case "enter":
					if (d === "entering" || d === "entered") break;
					f("enter"), x();
					break;
				case "exit":
					if (d === "exiting" || d === "exited") break;
					f("exit"), k();
					break
			}
		}, [d, e, x, k]), [d, {
			onAnimationStart: _,
			onAnimationEnd: v
		}]
	};

function Ul(e, t) {
	e.addEventListener ? e.addEventListener("change", t) : e.addListener(t)
}

function Td(e, t) {
	e.removeEventListener ? e.removeEventListener("change", t) : e.removeListener(t)
}
const mk = "screen and (prefers-reduced-motion: reduce)",
	vk = () => {
		const {
			window: e
		} = _n(), [t, n] = P.useState(void 0);
		return Je(() => {
			if (!e) return;
			const r = e.matchMedia(mk);
			n(r.matches);
			const o = i => {
				n(i.matches)
			};
			return Ul(r, o), () => Td(r, o)
		}, [e]), t
	};

function Om(e, t, n) {
	return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e, n * 5) : e * t * n / (t + n * e)
}

function Ti(e, t, n, r = .15) {
	return r === 0 ? fa(e, t, n) : e < t ? -Om(t - e, n - t, r) + t : e > n ? +Om(e - n, n - t, r) + n : e
}
const _k = {},
	ll = {};

function Bi(e, t) {
	try {
		var n, r;
		const i = ((n = _k)[r = e] || (n[r] = new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format))(t).split("GMT")[1];
		return i in ll ? ll[i] : Mm(i, i.split(":"))
	} catch {
		if (e in ll) return ll[e];
		const i = e == null ? void 0 : e.match(gk);
		return i ? Mm(e, i.slice(1)) : NaN
	}
}
const gk = /([+-]\d\d):?(\d\d)?/;

function Mm(e, t) {
	const n = +(t[0] || 0),
		r = +(t[1] || 0),
		o = +(t[2] || 0) / 60;
	return ll[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o
}
class fr extends Date {
	static tz(t, ...n) {
		return n.length ? new fr(...n, t) : new fr(Date.now(), t)
	}
	withTimeZone(t) {
		return new fr(+this, t)
	}
	getTimezoneOffset() {
		const t = -Bi(this.timeZone, this);
		return t > 0 ? Math.floor(t) : Math.ceil(t)
	}
	setTime(t) {
		return Date.prototype.setTime.apply(this, arguments), Ah(this), +this
	} [Symbol.for("constructDateFrom")](t) {
		return new fr(+new Date(t), this.timeZone)
	}
	constructor(...t) {
		super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = new Date, isNaN(Bi(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), d4(this), Ah(this)) : this.setTime(Date.now())
	}
}
const jm = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach(e => {
	if (!jm.test(e)) return;
	const t = e.replace(jm, "$1UTC");
	fr.prototype[t] && (e.startsWith("get") ? fr.prototype[e] = function() {
		return this.internal[t]()
	} : (fr.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), yk(this), +this
	}, fr.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), Ah(this), +this
	}))
});

function Ah(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Bi(e.timeZone, e) * 60))
}

function yk(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), d4(e)
}

function d4(e) {
	const t = Bi(e.timeZone, e),
		n = t > 0 ? Math.floor(t) : Math.ceil(t),
		r = new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	const o = -new Date(+e).getTimezoneOffset(),
		i = -new Date(+r).getTimezoneOffset(),
		a = o - i,
		c = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	a && c && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
	const d = o - n;
	d && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + d);
	const f = new Date(+e);
	f.setUTCSeconds(0);
	const m = o > 0 ? f.getSeconds() : (f.getSeconds() - 60) % 60,
		_ = Math.round(-(Bi(e.timeZone, e) * 60)) % 60;
	(_ || m) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + _), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + _ + m));
	const v = Bi(e.timeZone, e),
		x = v > 0 ? Math.floor(v) : Math.ceil(v),
		A = -new Date(+e).getTimezoneOffset() - x,
		C = x !== n,
		y = A - d;
	if (C && y) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + y);
		const w = Bi(e.timeZone, e),
			b = w > 0 ? Math.floor(w) : Math.ceil(w),
			O = x - b;
		O && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + O), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + O))
	}
}

function wk(e, t, n = new Date) {
	const r = /^\d\d/,
		i = [
			["yyyy", /^\d{4}/, x => ["Y", +x, !0]],
			["MM", r, x => {
				const k = +x,
					A = k > 0 && k <= 12;
				return ["M", k - 1, A]
			}],
			["dd", r, x => ["D", +x, !0]],
			["HH", r, x => {
				const k = parseInt(x, 10),
					A = k >= 0 && k < 24;
				return ["h", k, A]
			}],
			["mm", r, x => {
				const k = parseInt(x, 10),
					A = k >= 0 && k < 60;
				return ["m", k, A]
			}]
		],
		a = new RegExp(i.map(x => x[0]).join("|"), "g"),
		c = {
			y: n.getFullYear(),
			M: n.getMonth(),
			d: n.getDate(),
			h: n.getHours(),
			m: n.getMinutes(),
			s: n.getSeconds(),
			ms: n.getMilliseconds()
		};
	let d = 0,
		f = "",
		m = 0,
		_ = !1;
	for (;;) {
		const x = a.exec(t);
		if (!x) break;
		const k = x[0].length,
			A = a.lastIndex - k,
			C = i.find(L => L[0] === x[0]);
		if (f = t.slice(m, A), m = a.lastIndex, e.slice(d, d + f.length) !== f) return new Date("");
		const y = e.slice(d + f.length).match(C[1]);
		if (!y) return new Date("");
		d = d + f.length + y[0].length;
		const [w, b, O] = C[2](y[0]);
		if (!O) return new Date("");
		c[w] = b, _ = !0
	}
	if (!_) return new Date("");
	const v = new Date(c.Y, c.M, c.D, c.h, c.m, c.s, c.ms);
	return v.getMonth() !== c.M || v.getDate() !== c.D ? new Date("") : v
}
const Vz = (e, t) => t ? e === null ? null : e ? fr.tz(t, e) : void 0 : e,
	Hz = (e, t) => {
		if (!t) return e;
		if (e === null) return null;
		const n = Intl.DateTimeFormat().resolvedOptions().timeZone;
		return e ? fr.tz(n, e) : void 0
	},
	f4 = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	},
	Wz = new Intl.DateTimeFormat("ru-RU", f4);
class xk extends Intl.DateTimeFormat {
	constructor() {
		super("ru-RU", {
			...f4,
			hour: "2-digit",
			minute: "2-digit"
		})
	}
	format(t) {
		return super.format(t).replace(",", "")
	}
}
const Kz = new xk;

function Uz(e) {
	const t = new Date(e);
	return t.setDate(1), t.setHours(0, 0, 0, 0), t
}

function Sk(e) {
	const t = new Date(e),
		n = t.getMonth();
	return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
}
const h4 = 1;

function Yz(e, {
	weekStartsOn: t = h4
} = {}) {
	const n = new Date(e),
		r = n.getDay(),
		o = (r < t ? 7 : 0) + r - t;
	return n.setDate(n.getDate() - o), n.setHours(0, 0, 0, 0), n
}

function qz(e, {
	weekStartsOn: t = h4
} = {}) {
	const n = new Date(e),
		r = n.getDay(),
		o = (r < t ? -7 : 0) + 6 - (r - t);
	return n.setDate(n.getDate() + o), n.setHours(23, 59, 59, 999), n
}

function Gz(e) {
	const t = new Date(e);
	return t.setHours(0, 0, 0, 0), t
}

function kk(e) {
	const t = new Date(e);
	return t.setHours(23, 59, 59, 999), t
}

function Xz() {
	const e = new Date,
		t = e.getDate();
	return e.setDate(t + 1), e.setHours(0, 0, 0, 0), e
}

function Qz(e) {
	const t = new Date(e);
	return t.setSeconds(0, 0), t
}

function Zz(e, t, {
	step: n = 1
} = {}) {
	let r = +e > +t;
	const o = r ? +e : +t,
		i = new Date(r ? t : e);
	if (i.setHours(0, 0, 0, 0), !n) return [];
	n < 0 && (n = -n, r = !r);
	const a = [];
	for (; + i <= o;) a.push(new Date(i)), i.setDate(i.getDate() + 1), i.setHours(0, 0, 0, 0);
	return r ? a.reverse() : a
}

function Jz(e, t) {
	return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
}

function e$(e) {
	return +kk(e) == +Sk(e)
}

function t$(e, t) {
	return !isNaN(+wk(e, t))
}
const Q0 = 1e3;

function p4(e, t) {
	const n = new Date(e);
	return t && n.setDate(n.getDate() + t), n
}

function n$(e, t) {
	return p4(e, -1)
}

function bk(e, t) {
	return p4(e, t * 7)
}

function r$(e, t) {
	return bk(e, -1)
}

function Ck(e, t) {
	const n = new Date(e);
	if (!t) return n;
	const r = n.getDate(),
		o = new Date(e);
	o.setMonth(n.getMonth() + t + 1, 0);
	const i = o.getDate();
	return r >= i ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), r), n)
}

function o$(e, t) {
	return Ck(e, -1)
}

function i$(e, t) {
	const n = new Date(e);
	return n.setFullYear(t), n
}

function Ek(e) {
	const t = new Date(e),
		n = new Date(t);
	return n.setFullYear(t.getFullYear(), t.getMonth() + 1, 0), n.setHours(0, 0, 0, 0), n.getDate()
}

function s$(e, t) {
	const n = new Date(e),
		r = n.getFullYear(),
		o = n.getDate(),
		i = new Date(e);
	i.setFullYear(r, t, 15), i.setHours(0, 0, 0, 0);
	const a = Ek(i);
	return n.setMonth(t, Math.min(o, a)), n
}

function a$(e, t) {
	const n = new Date(e);
	return n.setHours(t), n
}

function l$(e, t) {
	const n = new Date(e);
	return n.setMinutes(t), n
}
const t1 = e => void(e == null ? void 0 : e.scrollTop),
	Ak = 100,
	Z0 = (e, {
		enableAppear: t = !1,
		enableEnter: n = !0,
		enableExit: r = !0,
		onEnter: o,
		onEntering: i,
		onEntered: a,
		onExit: c,
		onExiting: d,
		onExited: f
	} = {}) => {
		const m = Kt(o || Ie),
			_ = Kt(i || Ie),
			v = Kt(a || Ie),
			x = Kt(c || Ie),
			k = Kt(d || Ie),
			A = Kt(f || Ie),
			C = P.useRef(null),
			y = P.useRef(null),
			[w, b] = P.useState(() => e ? t ? (m(!0), "appear") : "entered" : "exited"),
			O = () => {
				C.current && (clearTimeout(C.current), C.current = null)
			};
		Je(function() {
			if (e) switch (w) {
				case "appear":
					t1(y.current), b("appearing"), _(!0);
					break;
				case "enter":
					t1(y.current), b("entering"), _();
					break;
				case "exiting":
					if (n) {
						b("entering"), _();
						break
					}
					b("entered"), v();
					break;
				case "exited":
					if (n) {
						b("enter"), m();
						break
					}
					b("entered"), v();
					break
			} else switch (w) {
				case "exit":
					t1(y.current), b("exiting"), k();
					break;
				case "appearing":
				case "entering":
					if (r) {
						b("exiting"), k();
						break
					}
					b("exited"), A();
					break;
				case "appeared":
				case "entered":
					if (r) {
						b("exit"), x();
						break
					}
					b("exited"), A();
					break
			}
		}, [e, w, t, n, m, _, v, r, x, k, A]);
		const L = Kt($ => {
			switch (O(), w) {
				case "appearing":
					b("appeared"), v($ == null ? void 0 : $.propertyName, !0);
					break;
				case "entering":
					b("entered"), v($ == null ? void 0 : $.propertyName);
					break;
				case "exiting":
					b("exited"), A($ == null ? void 0 : $.propertyName);
					break
			}
		});
		return Je(function() {
			const H = y.current;
			if (H && (w === "appearing" || w === "entering" || w === "exiting")) {
				const q = getComputedStyle(H),
					ne = oe => oe.includes("ms") ? parseFloat(oe) : parseFloat(oe) * Q0,
					G = Math.max(...q.transitionDuration.split(",").map(ne)) + Math.max(...q.transitionDelay.split(",").map(ne));
				if (G <= 0) {
					L();
					return
				}
				return C.current = setTimeout(L, G + Ak), O
			}
		}, [L, w]), [w, {
			ref: y,
			onTransitionEnd: w !== "appeared" && w !== "entered" && w !== "exited" ? L : void 0
		}]
	};

function Ik({
	size: e = "m"
}) {
	const t = vk();
	if (t === void 0) return null;
	if (t) return u.jsx("animate", {
		attributeName: "opacity",
		keyTimes: "0; 0.5; 1",
		values: "1; 0.1; 1",
		begin: "0s",
		dur: "2s",
		repeatCount: "indefinite"
	});
	const n = {
		s: 8,
		m: 12,
		l: 16,
		xl: 22
	} [e];
	return u.jsx("animateTransform", {
		attributeType: "XML",
		attributeName: "transform",
		type: "rotate",
		from: `0 ${n} ${n}`,
		to: `360 ${n} ${n}`,
		dur: "0.7s",
		repeatCount: "indefinite"
	})
}

function Rd(e) {
	return `vkuiIcon vkuiIcon--${e} vkuiIcon--w-${e} vkuiIcon--h-${e}`
}

function Pk({
	children: e
}) {
	return u.jsx("svg", {
		className: Rd(16),
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z",
			children: e
		})
	})
}

function Ok({
	children: e
}) {
	return u.jsx("svg", {
		className: Rd(24),
		"aria-hidden": "true",
		width: "24",
		height: "24",
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123",
			children: e
		})
	})
}

function Mk({
	children: e
}) {
	return u.jsx("svg", {
		className: Rd(32),
		"aria-hidden": "true",
		width: "32",
		height: "32",
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 16 16 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16",
			children: e
		})
	})
}

function jk({
	children: e
}) {
	return u.jsx("svg", {
		className: Rd(44),
		"aria-hidden": "true",
		width: "44",
		height: "44",
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A22 22 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22",
			children: e
		})
	})
}
const Tk = "_host_1yt6x_1",
	Rk = "_noColor_1yt6x_10",
	Tm = {
		host: Tk,
		noColor: Rk
	},
	Nk = "_visibilityDelay_17sja_1",
	m4 = {
		visibilityDelay: Nk
	},
	Lk = {
		s: Pk,
		m: Ok,
		l: Mk,
		xl: jk
	},
	od = P.memo(({
		size: e = "m",
		children: t = "Загружается...",
		disableAnimation: n = !1,
		noColor: r = !1,
		visibilityDelay: o,
		...i
	}) => {
		const a = Lk[e];
		return u.jsxs(We, {
			Component: "span",
			role: "status",
			...i,
			baseClassName: te(Tm.host, r && Tm.noColor, o && m4.visibilityDelay),
			baseStyle: fk(o),
			children: [u.jsx(a, {
				children: n ? null : u.jsx(Ik, {
					size: e
				})
			}), et(t) && u.jsx(Lr, {
				children: t
			})]
		})
	}),
	Dk = "_host_hx55j_1",
	Bk = "_rounded_hx55j_17",
	zk = "_loading_hx55j_21",
	$k = "_disabled_hx55j_21",
	Fk = "_singleIcon_hx55j_26",
	Vk = "_sizeYRegular_hx55j_31",
	Hk = "_sizeYNone_hx55j_36",
	Wk = "_stretched_hx55j_41",
	Kk = "_alignLeft_hx55j_58",
	Uk = "_alignRight_hx55j_63",
	Yk = "_modePrimary_hx55j_72",
	qk = "_appearanceOverlay_hx55j_72",
	Gk = "_appearanceNegative_hx55j_72",
	Xk = "_appearancePositive_hx55j_72",
	Qk = "_modeSecondary_hx55j_73",
	Zk = "_modeTertiary_hx55j_74",
	Jk = "_modeOutline_hx55j_75",
	eb = "_content_hx55j_79",
	tb = "_sizeS_hx55j_86",
	nb = "_sizeM_hx55j_96",
	rb = "_sizeL_hx55j_106",
	ob = "_before_hx55j_116",
	ib = "_after_hx55j_131",
	sb = "_modeLink_hx55j_214",
	ab = "_spinner_hx55j_228",
	lb = "_appearanceAccent_hx55j_241",
	cb = "_hover_hx55j_245",
	ub = "_active_hx55j_249",
	db = "_appearanceNeutral_hx55j_277",
	fb = "_appearanceAccentInvariable_hx55j_289",
	hb = "_ios_hx55j_586",
	Ze = {
		host: Dk,
		rounded: Bk,
		loading: zk,
		disabled: $k,
		singleIcon: Fk,
		sizeYRegular: Vk,
		sizeYNone: Hk,
		stretched: Wk,
		in: "_in_hx55j_48",
		alignLeft: Kk,
		alignRight: Uk,
		modePrimary: Yk,
		appearanceOverlay: qk,
		appearanceNegative: Gk,
		appearancePositive: Xk,
		modeSecondary: Qk,
		modeTertiary: Zk,
		modeOutline: Jk,
		content: eb,
		sizeS: tb,
		sizeM: nb,
		sizeL: rb,
		before: ob,
		after: ib,
		modeLink: sb,
		spinner: ab,
		appearanceAccent: lb,
		hover: cb,
		active: ub,
		appearanceNeutral: db,
		appearanceAccentInvariable: fb,
		ios: hb
	},
	pb = {
		s: Ze.sizeS,
		m: Ze.sizeM,
		l: Ze.sizeL
	},
	mb = {
		primary: Ze.modePrimary,
		secondary: Ze.modeSecondary,
		tertiary: Ze.modeTertiary,
		outline: Ze.modeOutline,
		link: Ze.modeLink
	},
	vb = {
		accent: Ze.appearanceAccent,
		positive: Ze.appearancePositive,
		negative: Ze.appearanceNegative,
		neutral: Ze.appearanceNeutral,
		overlay: Ze.appearanceOverlay,
		"accent-invariable": Ze.appearanceAccentInvariable
	},
	_b = {
		left: Ze.alignLeft,
		right: Ze.alignRight
	},
	gb = {
		none: Ze.sizeYNone,
		regular: Ze.sizeYRegular
	},
	ka = ({
		size: e = "s",
		mode: t = "primary",
		appearance: n = "accent",
		stretched: r = !1,
		align: o = "center",
		children: i,
		before: a,
		after: c,
		getRootRef: d,
		loading: f,
		onClick: m,
		disableSpinnerAnimation: _,
		rounded: v,
		disabled: x,
		...k
	}) => {
		const A = !i && !!c != !!a,
			{
				sizeY: C = "none"
			} = Et(),
			y = rt();
		return u.jsxs(Wr, {
			hoverMode: Ze.hover,
			activeMode: Ze.active,
			...k.href === void 0 && {
				Component: "button"
			},
			focusVisibleMode: "outside",
			disabled: f || x,
			...k,
			onClick: f ? void 0 : m,
			baseClassName: te(Ze.host, pb[e], mb[t], vb[n], o !== "center" && _b[o], C !== "compact" && gb[C], y === "ios" && Ze.ios, r && Ze.stretched, A && !r && Ze.singleIcon, f && Ze.loading, v && Ze.rounded, x && Ze.disabled),
			getRootRef: d,
			children: [f && u.jsx(od, {
				size: "s",
				className: Ze.spinner,
				disableAnimation: _,
				noColor: !0
			}), u.jsxs("span", {
				className: Ze.in,
				children: [et(a) && u.jsx("span", {
					className: Ze.before,
					role: "presentation",
					"data-testid": void 0,
					children: a
				}), et(i) && u.jsx("span", {
					className: Ze.content,
					"data-testid": void 0,
					children: i
				}), et(c) && u.jsx("span", {
					className: Ze.after,
					role: "presentation",
					"data-testid": void 0,
					children: c
				})]
			})]
		})
	},
	yb = "_host_aa9cl_1",
	wb = "_sizeYCompact_aa9cl_31",
	xb = "_ios_aa9cl_39",
	Sb = "_sizeYNone_aa9cl_89",
	id = {
		host: yb,
		sizeYCompact: wb,
		ios: xb,
		sizeYNone: Sb
	},
	kb = {
		none: id.sizeYNone,
		compact: id.sizeYCompact
	},
	sd = ({
		label: e,
		children: t,
		...n
	}) => {
		const r = rt(),
			{
				sizeY: o = "none"
			} = Et();
		return u.jsxs(Wr, {
			activeEffectDelay: 200,
			activeMode: "background",
			Component: n.href ? "a" : "button",
			...n,
			baseClassName: te(id.host, o !== "regular" && kb[o], r === "ios" && id.ios),
			children: [e && u.jsx(Lr, {
				children: e
			}), t]
		})
	},
	ba = {
		className: ""
	},
	bb = {
		className: ei["-sizeX--compact-mq"]
	},
	Cb = {
		className: ei["-sizeX--regular-mq"]
	},
	Eb = {
		className: ei["-sizeY--compact-mq"]
	},
	Ab = {
		className: ei["-sizeY--regular-mq"]
	},
	Ib = {
		tabletMinus: {
			className: ei["-viewWidth--tabletMinus-mq"]
		},
		tabletPlus: {
			className: ei["-viewWidth--tabletPlus-mq"]
		}
	},
	Pb = {
		mobile: {
			className: ei["-deviceType--mobile-mq"]
		},
		desktop: {
			className: ei["-deviceType--desktop-mq"]
		}
	},
	Rm = (e, t, n) => ({
		compact: e === void 0 ? t : e === "compact" ? ba : !1,
		regular: e === void 0 ? n : e === "regular" ? ba : !1
	}),
	Ob = (e, t) => ({
		tabletMinus: e === void 0 ? t.tabletMinus : e < Tt.TABLET ? ba : !1,
		tabletPlus: e === void 0 ? t.tabletPlus : e >= Tt.TABLET ? ba : !1
	}),
	Mb = (e, t, n, r, o) => {
		const i = t4(e, t, n, r);
		return i === null ? {
			mobile: o.mobile,
			desktop: o.desktop
		} : i ? {
			mobile: !1,
			desktop: ba
		} : {
			mobile: ba,
			desktop: !1
		}
	},
	v4 = () => {
		const {
			sizeX: e,
			sizeY: t,
			viewWidth: n,
			viewHeight: r,
			hasPointer: o
		} = P.useContext(rc), i = rt();
		return P.useMemo(() => {
			const a = Rm(e, bb, Cb),
				c = Rm(t, Eb, Ab),
				d = Ob(n, Ib),
				f = Mb(n, r, o, i, Pb);
			return {
				sizeX: a,
				sizeY: c,
				viewWidth: d,
				deviceType: f
			}
		}, [e, t, n, r, o, i])
	},
	jb = ({
		IconCompact: e,
		IconRegular: t
	}) => {
		const {
			sizeY: n
		} = v4();
		return u.jsxs(P.Fragment, {
			children: [n.compact && u.jsx(e, {
				className: n.compact.className
			}), n.regular && u.jsx(t, {
				className: n.regular.className
			})]
		})
	};

function cl(e, t) {
	return e.nav || e.id
}
const _4 = P.createContext({
		entering: !1
	}),
	Tb = () => P.useContext(_4),
	Rb = ({
		children: e,
		entering: t
	}) => {
		const n = Tb(),
			r = P.useMemo(() => ({
				entering: n.entering || t
			}), [t, n.entering]);
		return u.jsx(_4.Provider, {
			value: r,
			children: e
		})
	},
	Nm = P.createContext(void 0),
	Nb = ({
		children: e,
		isBack: t
	}) => {
		const n = P.useContext(Nm),
			r = t !== void 0 ? t : n,
			[o] = P.useState(r);
		return u.jsx(Nm.Provider, {
			value: o,
			children: e
		})
	};

function Ei(e) {
	const t = P.useRef(void 0);
	return P.useEffect(() => {
		t.current = e
	}), t.current
}
const Lb = P.createContext(void 0),
	Db = P.createContext(void 0),
	Lm = e => "clientX" in e ? e.clientX : e.changedTouches && e.changedTouches[0].clientX,
	Dm = e => "clientY" in e ? e.clientY : e.changedTouches && e.changedTouches[0].clientY,
	Bb = () => Fn && "ontouchstart" in window,
	n1 = 0;
class g4 {
	constructor() {
		qe(this, "initialTime", n1);
		qe(this, "x1", 0);
		qe(this, "y1", 0);
		qe(this, "x2", 0);
		qe(this, "y2", 0)
	}
	setInitialTimeOnce() {
		this.initialTime === n1 && (this.initialTime = Date.now())
	}
	setStartCoords(t) {
		const {
			clientX: n,
			clientY: r
		} = l2(t);
		this.x1 = n, this.y1 = r
	}
	setEndCoords(t) {
		const {
			clientX: n,
			clientY: r
		} = l2(t);
		this.x2 = n, this.y2 = r
	}
	delta() {
		return {
			x: this.x2 - this.x1,
			y: this.y2 - this.y1
		}
	}
	distance() {
		const {
			x: t,
			y: n
		} = this.delta();
		return Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2))
	}
	velocity() {
		const t = (Date.now() - this.initialTime) / Q0;
		if (t <= 0) return {
			x: 0,
			y: 0
		};
		const {
			x: n,
			y: r
		} = this.delta();
		return {
			x: n / t,
			y: r / t
		}
	}
	angle() {
		const t = this.x2 - this.x1,
			n = this.y2 - this.y1,
			o = Math.atan2(n, t) * 180 / Math.PI;
		return o < 0 ? 360 + o : o
	}
	direction() {
		const {
			x: t,
			y: n
		} = this.delta();
		return Math.abs(t) > Math.abs(n) ? {
			axis: "x",
			direction: t > 0 ? 1 : t < 0 ? -1 : null
		} : {
			axis: "y",
			direction: n > 0 ? 1 : n < 0 ? -1 : null
		}
	}
	reset() {
		this.initialTime = n1, this.x1 = this.y1 = 0, this.x2 = this.y2 = 0
	}
}

function ad(e) {
	return e.type.startsWith("touch")
}

function zb() {
	const e = P.useRef(!1),
		t = P.useRef(void 0),
		n = P.useCallback(o => !ad(o) && e.current === !0, []),
		r = P.useCallback(o => {
			ad(o) && (e.current = !0, clearTimeout(t.current), t.current = setTimeout(() => {
				e.current = !1
			}, 1e3))
		}, []);
	return P.useEffect(() => () => clearTimeout(t.current), []), [n, r]
}
const y4 = ({
	onStart: e,
	onStartX: t,
	onStartY: n,
	onMove: r,
	onMoveX: o,
	onMoveY: i,
	onEnter: a,
	onLeave: c,
	onEnd: d,
	onEndX: f,
	onEndY: m,
	onClickCapture: _,
	usePointerHover: v,
	slideThreshold: x = 5,
	useCapture: k = !1,
	Component: A = "div",
	getRootRef: C,
	noSlideClick: y = !1,
	stopPropagation: w = !1,
	...b
}) => {
	const O = Hn(C),
		[L] = P.useState(Bb),
		$ = P.useRef(null),
		H = P.useRef(!1),
		q = P.useRef(null),
		[ne, G] = zb(),
		oe = () => {
			$.current = null, q.current && (q.current(), q.current = null)
		};
	P.useEffect(() => oe, []);
	const fe = Kt(W => {
			const K = $.current;
			K && (K.isPressed && r1(W, K, [d, f, m], w), ad(W) ? (K.isSlide && (H.current = !1), c && c(W)) : H.current = !!K.isSlide, oe())
		}),
		me = Kt(W => {
			const K = $.current;
			if (!K) return;
			const ie = Lm(W),
				le = Dm(W),
				_e = ie - K.startX,
				Ee = le - K.startY,
				Re = Math.abs(_e),
				Oe = Math.abs(Ee);
			if ("touches" in W && W.touches.length > 1) return fe(W);
			if (!K.isX && !K.isY) {
				const Ae = Re >= x && Re > Oe,
					Le = Oe >= x && Oe > Re,
					Ue = Ae && (!!o || !!r),
					ue = Le && (!!i || !!r);
				K.isY = Le, K.isX = Ae, K.isSlideX = Ue, K.isSlideY = ue, K.isSlide = Ue || ue
			}
			K.isSlide && (K.clientX = ie, K.clientY = le, K.shiftX = _e, K.shiftY = Ee, K.shiftXAbs = Re, K.shiftYAbs = Oe, r1(W, K, [r, o, i], w))
		}),
		Z = Kt(W => {
			if (ne(W) || (G(W), $.current !== null)) return;
			const K = "nativeEvent" in W ? W.nativeEvent : W;
			$.current = $b(Lm(K), Dm(K)), r1(W, $.current, [e, t, n], w, !1);
			const le = {
				capture: k,
				passive: !1
			};
			if (ad(K)) {
				if (Zi(W.target) || N8(W.target)) {
					const _e = W.target;
					_e.addEventListener("touchmove", me, le), _e.addEventListener("touchend", fe, le), _e.addEventListener("touchcancel", fe, le), q.current = () => {
						_e.removeEventListener("touchmove", me, le), _e.removeEventListener("touchend", fe, le), _e.removeEventListener("touchcancel", fe, le)
					}
				}
			} else {
				const _e = rr(W.currentTarget).document;
				_e.addEventListener("mousemove", me, le), _e.addEventListener("mouseup", fe, le), _e.addEventListener("mouseleave", fe, le), q.current = () => {
					_e.removeEventListener("mousemove", me, le), _e.removeEventListener("mouseup", fe, le), _e.removeEventListener("mouseleave", fe, le)
				}
			}
		}),
		J = a ? W => a(W.nativeEvent) : void 0,
		X = c ? W => c(W.nativeEvent) : void 0,
		re = W => {
			const K = W.target;
			(K.tagName === "A" || K.tagName === "IMG") && W.preventDefault()
		},
		z = W => {
			if (!H.current) return _ && _(W);
			y ? (W.stopPropagation(), W.preventDefault()) : _ && _(W), H.current = !1
		};
	return Je(function() {
		const K = O.current;
		if (!K || !L) return;
		const ie = {
			capture: k,
			passive: !1
		};
		return K.addEventListener("touchstart", Z, ie), () => {
			K.removeEventListener("touchstart", Z, ie)
		}
	}, [O, L, k, Z]), u.jsx(A, {
		...b,
		ref: O,
		onDragStart: re,
		onClickCapture: z,
		onPointerEnter: v ? J : void 0,
		onMouseEnter: v ? void 0 : J,
		onPointerLeave: v ? X : void 0,
		onMouseLeave: v ? void 0 : X,
		onMouseDownCapture: k ? Z : void 0,
		onMouseDown: k ? void 0 : Z
	})
};

function $b(e, t) {
	return {
		startX: e,
		startY: t,
		startT: new Date,
		duration: 0,
		isPressed: !0,
		isY: !1,
		isX: !1,
		isSlideX: !1,
		isSlideY: !1,
		isSlide: !1,
		clientX: 0,
		clientY: 0,
		shiftX: 0,
		shiftY: 0,
		shiftXAbs: 0,
		shiftYAbs: 0
	}
}

function r1(e, t, [n, r, o], i, a = !0) {
	i && e.stopPropagation();
	const c = {
		...t,
		originalEvent: e,
		duration: Date.now() - t.startT.getTime()
	};
	n && n(c), r && (a ? t.isSlideX && r(c) : r(c)), o && (a ? t.isSlideY && o(c) : o(c))
}

function Fb() {
	const [e] = P.useState(() => []);
	return Je(() => {
		for (; e.length > 0;) e.pop()()
	}), P.useCallback(n => e.push(n), [e])
}

function Vb(e) {
	return !e.startsWith("auto")
}

function Hb(e) {
	const t = e.replace(/auto-|auto/, "");
	return t === "start" || t === "end" ? t : null
}

function Wb({
	strategy: e,
	x: t,
	y: n,
	initialWidth: r = "max-content",
	middlewareData: o
}) {
	const i = {
		position: e,
		top: n,
		right: "auto",
		bottom: "auto",
		left: t
	};
	if (r !== null && (i.width = r), o) {
		const a = o.hide;
		a && a.referenceHidden && (i.visibility = "hidden")
	}
	return i
}

function Kb(e) {
	if (Array.isArray(e)) return e
}

function Ub(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r = [],
			o = !0,
			i = !1,
			a, c;
		try {
			for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t)); o = !0);
		} catch (d) {
			i = !0, c = d
		} finally {
			try {
				!o && n.return != null && n.return()
			} finally {
				if (i) throw c
			}
		}
		return r
	}
}

function Yb() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function nu(e, t) {
	return Kb(e) || Ub(e, t) || Y5(e, t) || Yb()
}

function Bm(e, t, n) {
	let {
		reference: r,
		floating: o
	} = e;
	const i = io(t),
		a = Qh(t),
		c = Xh(a),
		d = Hr(t),
		f = i === "y",
		m = r.x + r.width / 2 - o.width / 2,
		_ = r.y + r.height / 2 - o.height / 2,
		v = r[c] / 2 - o[c] / 2;
	let x;
	switch (d) {
		case "top":
			x = {
				x: m,
				y: r.y - o.height
			};
			break;
		case "bottom":
			x = {
				x: m,
				y: r.y + r.height
			};
			break;
		case "right":
			x = {
				x: r.x + r.width,
				y: _
			};
			break;
		case "left":
			x = {
				x: r.x - o.width,
				y: _
			};
			break;
		default:
			x = {
				x: r.x,
				y: r.y
			}
	}
	switch (hr(t)) {
		case "start":
			x[a] -= v * (n && f ? -1 : 1);
			break;
		case "end":
			x[a] += v * (n && f ? -1 : 1);
			break
	}
	return x
}
async function qb(e, t) {
	var n;
	t === void 0 && (t = {});
	const {
		x: r,
		y: o,
		platform: i,
		rects: a,
		elements: c,
		strategy: d
	} = e, {
		boundary: f = "clippingAncestors",
		rootBoundary: m = "viewport",
		elementContext: _ = "floating",
		altBoundary: v = !1,
		padding: x = 0
	} = ui(t, e), k = T_(x), C = c[v ? _ === "floating" ? "reference" : "floating" : _], y = da(await i.getClippingRect({
		element: (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null || n ? C : C.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating)),
		boundary: f,
		rootBoundary: m,
		strategy: d
	})), w = _ === "floating" ? {
		x: r,
		y: o,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)), O = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
		x: 1,
		y: 1
	} : {
		x: 1,
		y: 1
	}, L = da(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: c,
		rect: w,
		offsetParent: b,
		strategy: d
	}) : w);
	return {
		top: (y.top - L.top + k.top) / O.y,
		bottom: (L.bottom - y.bottom + k.bottom) / O.y,
		left: (y.left - L.left + k.left) / O.x,
		right: (L.right - y.right + k.right) / O.x
	}
}
const Gb = 50,
	Xb = async (e, t, n) => {
		const {
			placement: r = "bottom",
			strategy: o = "absolute",
			middleware: i = [],
			platform: a
		} = n, c = a.detectOverflow ? a : {
			...a,
			detectOverflow: qb
		}, d = await (a.isRTL == null ? void 0 : a.isRTL(t));
		let f = await a.getElementRects({
				reference: e,
				floating: t,
				strategy: o
			}),
			{
				x: m,
				y: _
			} = Bm(f, r, d),
			v = r,
			x = 0;
		const k = {};
		for (let A = 0; A < i.length; A++) {
			const C = i[A];
			if (!C) continue;
			const {
				name: y,
				fn: w
			} = C, {
				x: b,
				y: O,
				data: L,
				reset: $
			} = await w({
				x: m,
				y: _,
				initialPlacement: r,
				placement: v,
				strategy: o,
				middlewareData: k,
				rects: f,
				platform: c,
				elements: {
					reference: e,
					floating: t
				}
			});
			m = b ?? m, _ = O ?? _, k[y] = {
				...k[y],
				...L
			}, $ && x < Gb && (x++, typeof $ == "object" && ($.placement && (v = $.placement), $.rects && (f = $.rects === !0 ? await a.getElementRects({
				reference: e,
				floating: t,
				strategy: o
			}) : $.rects), {
				x: m,
				y: _
			} = Bm(f, v, d)), A = -1)
		}
		return {
			x: m,
			y: _,
			placement: v,
			strategy: o,
			middlewareData: k
		}
	}, Qb = e => ({
		name: "arrow",
		options: e,
		async fn(t) {
			const {
				x: n,
				y: r,
				placement: o,
				rects: i,
				platform: a,
				elements: c,
				middlewareData: d
			} = t, {
				element: f,
				padding: m = 0
			} = ui(e, t) || {};
			if (f == null) return {};
			const _ = T_(m),
				v = {
					x: n,
					y: r
				},
				x = Qh(o),
				k = Xh(x),
				A = await a.getDimensions(f),
				C = x === "y",
				y = C ? "top" : "left",
				w = C ? "bottom" : "right",
				b = C ? "clientHeight" : "clientWidth",
				O = i.reference[k] + i.reference[x] - v[x] - i.floating[k],
				L = v[x] - i.reference[x],
				$ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(f));
			let H = $ ? $[b] : 0;
			(!H || !await (a.isElement == null ? void 0 : a.isElement($))) && (H = c.floating[b] || i.floating[k]);
			const q = O / 2 - L / 2,
				ne = H / 2 - A[k] / 2 - 1,
				G = ni(_[y], ne),
				oe = ni(_[w], ne),
				fe = G,
				me = H - A[k] - oe,
				Z = H / 2 - A[k] / 2 + q,
				J = b1(fe, Z, me),
				X = !d.arrow && hr(o) != null && Z !== J && i.reference[k] / 2 - (Z < fe ? G : oe) - A[k] / 2 < 0,
				re = X ? Z < fe ? Z - fe : Z - me : 0;
			return {
				[x]: v[x] + re,
				data: {
					[x]: J,
					centerOffset: Z - J - re,
					...X && {
						alignmentOffset: re
					}
				},
				reset: X
			}
		}
	});

function Zb(e, t, n) {
	return (e ? [...n.filter(o => hr(o) === e), ...n.filter(o => hr(o) !== e)] : n.filter(o => Hr(o) === o)).filter(o => e ? hr(o) === e || (t ? Cu(o) !== o : !1) : !0)
}
const Jb = function(e) {
		return e === void 0 && (e = {}), {
			name: "autoPlacement",
			options: e,
			async fn(t) {
				var n, r, o;
				const {
					rects: i,
					middlewareData: a,
					placement: c,
					platform: d,
					elements: f
				} = t, {
					crossAxis: m = !1,
					alignment: _,
					allowedPlacements: v = r2,
					autoAlignment: x = !0,
					...k
				} = ui(e, t), A = _ !== void 0 || v === r2 ? Zb(_ || null, x, v) : v, C = await d.detectOverflow(t, k), y = ((n = a.autoPlacement) == null ? void 0 : n.index) || 0, w = A[y];
				if (w == null) return {};
				const b = j_(w, i, await (d.isRTL == null ? void 0 : d.isRTL(f.floating)));
				if (c !== w) return {
					reset: {
						placement: A[0]
					}
				};
				const O = [C[Hr(w)], C[b[0]], C[b[1]]],
					L = [...((r = a.autoPlacement) == null ? void 0 : r.overflows) || [], {
						placement: w,
						overflows: O
					}],
					$ = A[y + 1];
				if ($) return {
					data: {
						index: y + 1,
						overflows: L
					},
					reset: {
						placement: $
					}
				};
				const H = L.map(G => {
						const oe = hr(G.placement);
						return [G.placement, oe && m ? G.overflows.slice(0, 2).reduce((fe, me) => fe + me, 0) : G.overflows[0], G.overflows]
					}).sort((G, oe) => G[1] - oe[1]),
					ne = ((o = H.filter(G => G[2].slice(0, hr(G[0]) ? 2 : 3).every(oe => oe <= 0))[0]) == null ? void 0 : o[0]) || H[0][0];
				return ne !== c ? {
					data: {
						index: y + 1,
						overflows: L
					},
					reset: {
						placement: ne
					}
				} : {}
			}
		}
	},
	eC = function(e) {
		return e === void 0 && (e = {}), {
			name: "flip",
			options: e,
			async fn(t) {
				var n, r;
				const {
					placement: o,
					middlewareData: i,
					rects: a,
					initialPlacement: c,
					platform: d,
					elements: f
				} = t, {
					mainAxis: m = !0,
					crossAxis: _ = !0,
					fallbackPlacements: v,
					fallbackStrategy: x = "bestFit",
					fallbackAxisSideDirection: k = "none",
					flipAlignment: A = !0,
					...C
				} = ui(e, t);
				if ((n = i.arrow) != null && n.alignmentOffset) return {};
				const y = Hr(o),
					w = io(c),
					b = Hr(c) === c,
					O = await (d.isRTL == null ? void 0 : d.isRTL(f.floating)),
					L = v || (b || !A ? [Eu(c)] : u8(c)),
					$ = k !== "none";
				!v && $ && L.push(...p8(c, A, k, O));
				const H = [c, ...L],
					q = await d.detectOverflow(t, C),
					ne = [];
				let G = ((r = i.flip) == null ? void 0 : r.overflows) || [];
				if (m && ne.push(q[y]), _) {
					const Z = j_(o, a, O);
					ne.push(q[Z[0]], q[Z[1]])
				}
				if (G = [...G, {
						placement: o,
						overflows: ne
					}], !ne.every(Z => Z <= 0)) {
					var oe, fe;
					const Z = (((oe = i.flip) == null ? void 0 : oe.index) || 0) + 1,
						J = H[Z];
					if (J && (!(_ === "alignment" ? w !== io(J) : !1) || G.every(z => io(z.placement) === w ? z.overflows[0] > 0 : !0))) return {
						data: {
							index: Z,
							overflows: G
						},
						reset: {
							placement: J
						}
					};
					let X = (fe = G.filter(re => re.overflows[0] <= 0).sort((re, z) => re.overflows[1] - z.overflows[1])[0]) == null ? void 0 : fe.placement;
					if (!X) switch (x) {
						case "bestFit": {
							var me;
							const re = (me = G.filter(z => {
								if ($) {
									const W = io(z.placement);
									return W === w || W === "y"
								}
								return !0
							}).map(z => [z.placement, z.overflows.filter(W => W > 0).reduce((W, K) => W + K, 0)]).sort((z, W) => z[1] - W[1])[0]) == null ? void 0 : me[0];
							re && (X = re);
							break
						}
						case "initialPlacement":
							X = c;
							break
					}
					if (o !== X) return {
						reset: {
							placement: X
						}
					}
				}
				return {}
			}
		}
	};

function zm(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	}
}

function $m(e) {
	return O_.some(t => e[t] >= 0)
}
const tC = function(e) {
		return e === void 0 && (e = {}), {
			name: "hide",
			options: e,
			async fn(t) {
				const {
					rects: n,
					platform: r
				} = t, {
					strategy: o = "referenceHidden",
					...i
				} = ui(e, t);
				switch (o) {
					case "referenceHidden": {
						const a = await r.detectOverflow(t, {
								...i,
								elementContext: "reference"
							}),
							c = zm(a, n.reference);
						return {
							data: {
								referenceHiddenOffsets: c,
								referenceHidden: $m(c)
							}
						}
					}
					case "escaped": {
						const a = await r.detectOverflow(t, {
								...i,
								altBoundary: !0
							}),
							c = zm(a, n.floating);
						return {
							data: {
								escapedOffsets: c,
								escaped: $m(c)
							}
						}
					}
					default:
						return {}
				}
			}
		}
	},
	nC = new Set(["left", "top"]);
async function rC(e, t) {
	const {
		placement: n,
		platform: r,
		elements: o
	} = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Hr(n), c = hr(n), d = io(n) === "y", f = nC.has(a) ? -1 : 1, m = i && d ? -1 : 1, _ = ui(t, e);
	let {
		mainAxis: v,
		crossAxis: x,
		alignmentAxis: k
	} = typeof _ == "number" ? {
		mainAxis: _,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: _.mainAxis || 0,
		crossAxis: _.crossAxis || 0,
		alignmentAxis: _.alignmentAxis
	};
	return c && typeof k == "number" && (x = c === "end" ? k * -1 : k), d ? {
		x: x * m,
		y: v * f
	} : {
		x: v * f,
		y: x * m
	}
}
const oC = function(e) {
		return e === void 0 && (e = 0), {
			name: "offset",
			options: e,
			async fn(t) {
				var n, r;
				const {
					x: o,
					y: i,
					placement: a,
					middlewareData: c
				} = t, d = await rC(t, e);
				return a === ((n = c.offset) == null ? void 0 : n.placement) && (r = c.arrow) != null && r.alignmentOffset ? {} : {
					x: o + d.x,
					y: i + d.y,
					data: {
						...d,
						placement: a
					}
				}
			}
		}
	},
	iC = function(e) {
		return e === void 0 && (e = {}), {
			name: "shift",
			options: e,
			async fn(t) {
				const {
					x: n,
					y: r,
					placement: o,
					platform: i
				} = t, {
					mainAxis: a = !0,
					crossAxis: c = !1,
					limiter: d = {
						fn: y => {
							let {
								x: w,
								y: b
							} = y;
							return {
								x: w,
								y: b
							}
						}
					},
					...f
				} = ui(e, t), m = {
					x: n,
					y: r
				}, _ = await i.detectOverflow(t, f), v = io(Hr(o)), x = M_(v);
				let k = m[x],
					A = m[v];
				if (a) {
					const y = x === "y" ? "top" : "left",
						w = x === "y" ? "bottom" : "right",
						b = k + _[y],
						O = k - _[w];
					k = b1(b, k, O)
				}
				if (c) {
					const y = v === "y" ? "top" : "left",
						w = v === "y" ? "bottom" : "right",
						b = A + _[y],
						O = A - _[w];
					A = b1(b, A, O)
				}
				const C = d.fn({
					...t,
					[x]: k,
					[v]: A
				});
				return {
					...C,
					data: {
						x: C.x - n,
						y: C.y - r,
						enabled: {
							[x]: a,
							[v]: c
						}
					}
				}
			}
		}
	},
	sC = function(e) {
		return e === void 0 && (e = {}), {
			name: "size",
			options: e,
			async fn(t) {
				var n, r;
				const {
					placement: o,
					rects: i,
					platform: a,
					elements: c
				} = t, {
					apply: d = () => {},
					...f
				} = ui(e, t), m = await a.detectOverflow(t, f), _ = Hr(o), v = hr(o), x = io(o) === "y", {
					width: k,
					height: A
				} = i.floating;
				let C, y;
				_ === "top" || _ === "bottom" ? (C = _, y = v === (await (a.isRTL == null ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (y = _, C = v === "end" ? "top" : "bottom");
				const w = A - m.top - m.bottom,
					b = k - m.left - m.right,
					O = ni(A - m[C], w),
					L = ni(k - m[y], b),
					$ = !t.middlewareData.shift;
				let H = O,
					q = L;
				if ((n = t.middlewareData.shift) != null && n.enabled.x && (q = b), (r = t.middlewareData.shift) != null && r.enabled.y && (H = w), $ && !v) {
					const G = Nn(m.left, 0),
						oe = Nn(m.right, 0),
						fe = Nn(m.top, 0),
						me = Nn(m.bottom, 0);
					x ? q = k - 2 * (G !== 0 || oe !== 0 ? G + oe : Nn(m.left, m.right)) : H = A - 2 * (fe !== 0 || me !== 0 ? fe + me : Nn(m.top, m.bottom))
				}
				await d({
					...t,
					availableWidth: q,
					availableHeight: H
				});
				const ne = await a.getDimensions(c.floating);
				return k !== ne.width || A !== ne.height ? {
					reset: {
						rects: !0
					}
				} : {}
			}
		}
	};

function Nd() {
	return typeof window < "u"
}

function Oa(e) {
	return w4(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function $n(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function Ur(e) {
	var t;
	return (t = (w4(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function w4(e) {
	return Nd() ? e instanceof Node || e instanceof $n(e).Node : !1
}

function _r(e) {
	return Nd() ? e instanceof Element || e instanceof $n(e).Element : !1
}

function wo(e) {
	return Nd() ? e instanceof HTMLElement || e instanceof $n(e).HTMLElement : !1
}

function Fm(e) {
	return !Nd() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $n(e).ShadowRoot
}

function dc(e) {
	const {
		overflow: t,
		overflowX: n,
		overflowY: r,
		display: o
	} = gr(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents"
}

function aC(e) {
	return /^(table|td|th)$/.test(Oa(e))
}

function Ld(e) {
	try {
		if (e.matches(":popover-open")) return !0
	} catch {}
	try {
		return e.matches(":modal")
	} catch {
		return !1
	}
}
const lC = /transform|translate|scale|rotate|perspective|filter/,
	cC = /paint|layout|strict|content/,
	Ai = e => !!e && e !== "none";
let o1;

function J0(e) {
	const t = _r(e) ? gr(e) : e;
	return Ai(t.transform) || Ai(t.translate) || Ai(t.scale) || Ai(t.rotate) || Ai(t.perspective) || !ep() && (Ai(t.backdropFilter) || Ai(t.filter)) || lC.test(t.willChange || "") || cC.test(t.contain || "")
}

function uC(e) {
	let t = ai(e);
	for (; wo(t) && !Ca(t);) {
		if (J0(t)) return t;
		if (Ld(t)) return null;
		t = ai(t)
	}
	return null
}

function ep() {
	return o1 == null && (o1 = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), o1
}

function Ca(e) {
	return /^(html|body|#document)$/.test(Oa(e))
}

function gr(e) {
	return $n(e).getComputedStyle(e)
}

function Dd(e) {
	return _r(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	}
}

function ai(e) {
	if (Oa(e) === "html") return e;
	const t = e.assignedSlot || e.parentNode || Fm(e) && e.host || Ur(e);
	return Fm(t) ? t.host : t
}

function x4(e) {
	const t = ai(e);
	return Ca(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wo(t) && dc(t) ? t : x4(t)
}

function Ea(e, t, n) {
	var r;
	t === void 0 && (t = []), n === void 0 && (n = !0);
	const o = x4(e),
		i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
		a = $n(o);
	if (i) {
		const c = Ih(a);
		return t.concat(a, a.visualViewport || [], dc(o) ? o : [], c && n ? Ea(c) : [])
	} else return t.concat(o, Ea(o, [], n))
}

function Ih(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function S4(e) {
	const t = gr(e);
	let n = parseFloat(t.width) || 0,
		r = parseFloat(t.height) || 0;
	const o = wo(e),
		i = o ? e.offsetWidth : n,
		a = o ? e.offsetHeight : r,
		c = bu(n) !== i || bu(r) !== a;
	return c && (n = i, r = a), {
		width: n,
		height: r,
		$: c
	}
}

function tp(e) {
	return _r(e) ? e : e.contextElement
}

function Js(e) {
	const t = tp(e);
	if (!wo(t)) return Dr(1);
	const n = t.getBoundingClientRect(),
		{
			width: r,
			height: o,
			$: i
		} = S4(t);
	let a = (i ? bu(n.width) : n.width) / r,
		c = (i ? bu(n.height) : n.height) / o;
	return (!a || !Number.isFinite(a)) && (a = 1), (!c || !Number.isFinite(c)) && (c = 1), {
		x: a,
		y: c
	}
}
const dC = Dr(0);

function k4(e) {
	const t = $n(e);
	return !ep() || !t.visualViewport ? dC : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	}
}

function fC(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== $n(e) ? !1 : t
}

function os(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	const o = e.getBoundingClientRect(),
		i = tp(e);
	let a = Dr(1);
	t && (r ? _r(r) && (a = Js(r)) : a = Js(e));
	const c = fC(i, n, r) ? k4(i) : Dr(0);
	let d = (o.left + c.x) / a.x,
		f = (o.top + c.y) / a.y,
		m = o.width / a.x,
		_ = o.height / a.y;
	if (i) {
		const v = $n(i),
			x = r && _r(r) ? $n(r) : r;
		let k = v,
			A = Ih(k);
		for (; A && r && x !== k;) {
			const C = Js(A),
				y = A.getBoundingClientRect(),
				w = gr(A),
				b = y.left + (A.clientLeft + parseFloat(w.paddingLeft)) * C.x,
				O = y.top + (A.clientTop + parseFloat(w.paddingTop)) * C.y;
			d *= C.x, f *= C.y, m *= C.x, _ *= C.y, d += b, f += O, k = $n(A), A = Ih(k)
		}
	}
	return da({
		width: m,
		height: _,
		x: d,
		y: f
	})
}

function Bd(e, t) {
	const n = Dd(e).scrollLeft;
	return t ? t.left + n : os(Ur(e)).left + n
}

function b4(e, t) {
	const n = e.getBoundingClientRect(),
		r = n.left + t.scrollLeft - Bd(e, n),
		o = n.top + t.scrollTop;
	return {
		x: r,
		y: o
	}
}

function hC(e) {
	let {
		elements: t,
		rect: n,
		offsetParent: r,
		strategy: o
	} = e;
	const i = o === "fixed",
		a = Ur(r),
		c = t ? Ld(t.floating) : !1;
	if (r === a || c && i) return n;
	let d = {
			scrollLeft: 0,
			scrollTop: 0
		},
		f = Dr(1);
	const m = Dr(0),
		_ = wo(r);
	if ((_ || !_ && !i) && ((Oa(r) !== "body" || dc(a)) && (d = Dd(r)), _)) {
		const x = os(r);
		f = Js(r), m.x = x.x + r.clientLeft, m.y = x.y + r.clientTop
	}
	const v = a && !_ && !i ? b4(a, d) : Dr(0);
	return {
		width: n.width * f.x,
		height: n.height * f.y,
		x: n.x * f.x - d.scrollLeft * f.x + m.x + v.x,
		y: n.y * f.y - d.scrollTop * f.y + m.y + v.y
	}
}

function pC(e) {
	return Array.from(e.getClientRects())
}

function mC(e) {
	const t = Ur(e),
		n = Dd(e),
		r = e.ownerDocument.body,
		o = Nn(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
		i = Nn(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
	let a = -n.scrollLeft + Bd(e);
	const c = -n.scrollTop;
	return gr(r).direction === "rtl" && (a += Nn(t.clientWidth, r.clientWidth) - o), {
		width: o,
		height: i,
		x: a,
		y: c
	}
}
const Vm = 25;

function vC(e, t) {
	const n = $n(e),
		r = Ur(e),
		o = n.visualViewport;
	let i = r.clientWidth,
		a = r.clientHeight,
		c = 0,
		d = 0;
	if (o) {
		i = o.width, a = o.height;
		const m = ep();
		(!m || m && t === "fixed") && (c = o.offsetLeft, d = o.offsetTop)
	}
	const f = Bd(r);
	if (f <= 0) {
		const m = r.ownerDocument,
			_ = m.body,
			v = getComputedStyle(_),
			x = m.compatMode === "CSS1Compat" && parseFloat(v.marginLeft) + parseFloat(v.marginRight) || 0,
			k = Math.abs(r.clientWidth - _.clientWidth - x);
		k <= Vm && (i -= k)
	} else f <= Vm && (i += f);
	return {
		width: i,
		height: a,
		x: c,
		y: d
	}
}

function _C(e, t) {
	const n = os(e, !0, t === "fixed"),
		r = n.top + e.clientTop,
		o = n.left + e.clientLeft,
		i = wo(e) ? Js(e) : Dr(1),
		a = e.clientWidth * i.x,
		c = e.clientHeight * i.y,
		d = o * i.x,
		f = r * i.y;
	return {
		width: a,
		height: c,
		x: d,
		y: f
	}
}

function Hm(e, t, n) {
	let r;
	if (t === "viewport") r = vC(e, n);
	else if (t === "document") r = mC(Ur(e));
	else if (_r(t)) r = _C(t, n);
	else {
		const o = k4(e);
		r = {
			x: t.x - o.x,
			y: t.y - o.y,
			width: t.width,
			height: t.height
		}
	}
	return da(r)
}

function C4(e, t) {
	const n = ai(e);
	return n === t || !_r(n) || Ca(n) ? !1 : gr(n).position === "fixed" || C4(n, t)
}

function gC(e, t) {
	const n = t.get(e);
	if (n) return n;
	let r = Ea(e, [], !1).filter(c => _r(c) && Oa(c) !== "body"),
		o = null;
	const i = gr(e).position === "fixed";
	let a = i ? ai(e) : e;
	for (; _r(a) && !Ca(a);) {
		const c = gr(a),
			d = J0(a);
		!d && c.position === "fixed" && (o = null), (i ? !d && !o : !d && c.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || dc(a) && !d && C4(e, a)) ? r = r.filter(m => m !== a) : o = c, a = ai(a)
	}
	return t.set(e, r), r
}

function yC(e) {
	let {
		element: t,
		boundary: n,
		rootBoundary: r,
		strategy: o
	} = e;
	const a = [...n === "clippingAncestors" ? Ld(t) ? [] : gC(t, this._c) : [].concat(n), r],
		c = Hm(t, a[0], o);
	let d = c.top,
		f = c.right,
		m = c.bottom,
		_ = c.left;
	for (let v = 1; v < a.length; v++) {
		const x = Hm(t, a[v], o);
		d = Nn(x.top, d), f = ni(x.right, f), m = ni(x.bottom, m), _ = Nn(x.left, _)
	}
	return {
		width: f - _,
		height: m - d,
		x: _,
		y: d
	}
}

function wC(e) {
	const {
		width: t,
		height: n
	} = S4(e);
	return {
		width: t,
		height: n
	}
}

function xC(e, t, n) {
	const r = wo(t),
		o = Ur(t),
		i = n === "fixed",
		a = os(e, !0, i, t);
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const d = Dr(0);

	function f() {
		d.x = Bd(o)
	}
	if (r || !r && !i)
		if ((Oa(t) !== "body" || dc(o)) && (c = Dd(t)), r) {
			const x = os(t, !0, i, t);
			d.x = x.x + t.clientLeft, d.y = x.y + t.clientTop
		} else o && f();
	i && !r && o && f();
	const m = o && !r && !i ? b4(o, c) : Dr(0),
		_ = a.left + c.scrollLeft - d.x - m.x,
		v = a.top + c.scrollTop - d.y - m.y;
	return {
		x: _,
		y: v,
		width: a.width,
		height: a.height
	}
}

function i1(e) {
	return gr(e).position === "static"
}

function Wm(e, t) {
	if (!wo(e) || gr(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Ur(e) === n && (n = n.ownerDocument.body), n
}

function E4(e, t) {
	const n = $n(e);
	if (Ld(e)) return n;
	if (!wo(e)) {
		let o = ai(e);
		for (; o && !Ca(o);) {
			if (_r(o) && !i1(o)) return o;
			o = ai(o)
		}
		return n
	}
	let r = Wm(e, t);
	for (; r && aC(r) && i1(r);) r = Wm(r, t);
	return r && Ca(r) && i1(r) && !J0(r) ? n : r || uC(e) || n
}
const SC = async function(e) {
	const t = this.getOffsetParent || E4,
		n = this.getDimensions,
		r = await n(e.floating);
	return {
		reference: xC(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	}
};

function kC(e) {
	return gr(e).direction === "rtl"
}
const bC = {
	convertOffsetParentRelativeRectToViewportRelativeRect: hC,
	getDocumentElement: Ur,
	getClippingRect: yC,
	getOffsetParent: E4,
	getElementRects: SC,
	getClientRects: pC,
	getDimensions: wC,
	getScale: Js,
	isElement: _r,
	isRTL: kC
};

function A4(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function CC(e, t) {
	let n = null,
		r;
	const o = Ur(e);

	function i() {
		var c;
		clearTimeout(r), (c = n) == null || c.disconnect(), n = null
	}

	function a(c, d) {
		c === void 0 && (c = !1), d === void 0 && (d = 1), i();
		const f = e.getBoundingClientRect(),
			{
				left: m,
				top: _,
				width: v,
				height: x
			} = f;
		if (c || t(), !v || !x) return;
		const k = zc(_),
			A = zc(o.clientWidth - (m + v)),
			C = zc(o.clientHeight - (_ + x)),
			y = zc(m),
			b = {
				rootMargin: -k + "px " + -A + "px " + -C + "px " + -y + "px",
				threshold: Nn(0, ni(1, d)) || 1
			};
		let O = !0;

		function L($) {
			const H = $[0].intersectionRatio;
			if (H !== d) {
				if (!O) return a();
				H ? a(!1, H) : r = setTimeout(() => {
					a(!1, 1e-7)
				}, 1e3)
			}
			H === 1 && !A4(f, e.getBoundingClientRect()) && a(), O = !1
		}
		try {
			n = new IntersectionObserver(L, {
				...b,
				root: o.ownerDocument
			})
		} catch {
			n = new IntersectionObserver(L, b)
		}
		n.observe(e)
	}
	return a(!0), i
}

function EC(e, t, n, r) {
	r === void 0 && (r = {});
	const {
		ancestorScroll: o = !0,
		ancestorResize: i = !0,
		elementResize: a = typeof ResizeObserver == "function",
		layoutShift: c = typeof IntersectionObserver == "function",
		animationFrame: d = !1
	} = r, f = tp(e), m = o || i ? [...f ? Ea(f) : [], ...t ? Ea(t) : []] : [];
	m.forEach(y => {
		o && y.addEventListener("scroll", n, {
			passive: !0
		}), i && y.addEventListener("resize", n)
	});
	const _ = f && c ? CC(f, n) : null;
	let v = -1,
		x = null;
	a && (x = new ResizeObserver(y => {
		let [w] = y;
		w && w.target === f && x && t && (x.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
			var b;
			(b = x) == null || b.observe(t)
		})), n()
	}), f && !d && x.observe(f), t && x.observe(t));
	let k, A = d ? os(e) : null;
	d && C();

	function C() {
		const y = os(e);
		A && !A4(A, y) && n(), A = y, k = requestAnimationFrame(C)
	}
	return n(), () => {
		var y;
		m.forEach(w => {
			o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n)
		}), _ == null || _(), (y = x) == null || y.disconnect(), x = null, d && cancelAnimationFrame(k)
	}
}
const AC = oC,
	IC = Jb,
	PC = iC,
	OC = eC,
	MC = sC,
	jC = tC,
	Km = Qb,
	TC = (e, t, n) => {
		const r = new Map,
			o = {
				platform: bC,
				...n
			},
			i = {
				...o.platform,
				_c: r
			};
		return Xb(e, t, {
			...o,
			platform: i
		})
	};
var RC = typeof document < "u",
	NC = function() {},
	wu = RC ? P.useLayoutEffect : NC;

function ld(e, t) {
	if (e === t) return !0;
	if ((typeof e > "u" ? "undefined" : cu(e)) !== (typeof t > "u" ? "undefined" : cu(t))) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	var n, r, o;
	if (e && t && (typeof e > "u" ? "undefined" : cu(e)) === "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;)
				if (!ld(e[r], t[r])) return !1;
			return !0
		}
		if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;)
			if (!{}.hasOwnProperty.call(t, o[r])) return !1;
		for (r = n; r-- !== 0;) {
			var i = o[r];
			if (!(i === "_owner" && e.$$typeof) && !ld(e[i], t[i])) return !1
		}
		return !0
	}
	return e !== e && t !== t
}

function I4(e) {
	if (typeof window > "u") return 1;
	var t = e.ownerDocument.defaultView || window;
	return t.devicePixelRatio || 1
}

function Um(e, t) {
	var n = I4(e);
	return Math.round(t * n) / n
}

function s1(e) {
	var t = P.useRef(e);
	return wu(function() {
		t.current = e
	}), t
}

function LC(e) {
	e === void 0 && (e = {});
	var t = e.placement,
		n = t === void 0 ? "bottom" : t,
		r = e.strategy,
		o = r === void 0 ? "absolute" : r,
		i = e.middleware,
		a = i === void 0 ? [] : i,
		c = e.platform,
		d = e.elements,
		f = d === void 0 ? {} : d,
		m = f.reference,
		_ = f.floating,
		v = e.transform,
		x = v === void 0 ? !0 : v,
		k = e.whileElementsMounted,
		A = e.open,
		C = nu(P.useState({
			x: 0,
			y: 0,
			strategy: o,
			placement: n,
			middlewareData: {},
			isPositioned: !1
		}), 2),
		y = C[0],
		w = C[1],
		b = nu(P.useState(a), 2),
		O = b[0],
		L = b[1];
	ld(O, a) || L(a);
	var $ = nu(P.useState(null), 2),
		H = $[0],
		q = $[1],
		ne = nu(P.useState(null), 2),
		G = ne[0],
		oe = ne[1],
		fe = P.useCallback(function(Le) {
			Le !== X.current && (X.current = Le, q(Le))
		}, []),
		me = P.useCallback(function(Le) {
			Le !== re.current && (re.current = Le, oe(Le))
		}, []),
		Z = m || H,
		J = _ || G,
		X = P.useRef(null),
		re = P.useRef(null),
		z = P.useRef(y),
		W = k != null,
		K = s1(k),
		ie = s1(c),
		le = s1(A),
		_e = P.useCallback(function() {
			if (!(!X.current || !re.current)) {
				var Le = {
					placement: n,
					strategy: o,
					middleware: O
				};
				ie.current && (Le.platform = ie.current), TC(X.current, re.current, Le).then(function(Ue) {
					var ue = Ri(Tr({}, Ue), {
						isPositioned: le.current !== !1
					});
					Ee.current && !ld(z.current, ue) && (z.current = ue, W0.flushSync(function() {
						w(ue)
					}))
				})
			}
		}, [O, n, o, ie, le]);
	wu(function() {
		A === !1 && z.current.isPositioned && (z.current.isPositioned = !1, w(function(Le) {
			return Ri(Tr({}, Le), {
				isPositioned: !1
			})
		}))
	}, [A]);
	var Ee = P.useRef(!1);
	wu(function() {
		return Ee.current = !0,
			function() {
				Ee.current = !1
			}
	}, []), wu(function() {
		if (Z && (X.current = Z), J && (re.current = J), Z && J) {
			if (K.current) return K.current(Z, J, _e);
			_e()
		}
	}, [Z, J, _e, K, W]);
	var Re = P.useMemo(function() {
			return {
				reference: X,
				floating: re,
				setReference: fe,
				setFloating: me
			}
		}, [fe, me]),
		Oe = P.useMemo(function() {
			return {
				reference: Z,
				floating: J
			}
		}, [Z, J]),
		Ae = P.useMemo(function() {
			var Le = {
				position: o,
				left: 0,
				top: 0
			};
			if (!Oe.floating) return Le;
			var Ue = Um(Oe.floating, y.x),
				ue = Um(Oe.floating, y.y);
			return x ? Tr(Ri(Tr({}, Le), {
				transform: "translate(" + Ue + "px, " + ue + "px)"
			}), I4(Oe.floating) >= 1.5 && {
				willChange: "transform"
			}) : {
				position: o,
				left: Ue,
				top: ue
			}
		}, [o, x, Oe.floating, y.x, y.y]);
	return P.useMemo(function() {
		return Ri(Tr({}, y), {
			update: _e,
			refs: Re,
			elements: Oe,
			floatingStyles: Ae
		})
	}, [y, _e, Re, Oe, Ae])
}
var DC = function(t) {
		var n = function(o) {
			return {}.hasOwnProperty.call(o, "current")
		};
		return {
			name: "arrow",
			options: t,
			fn: function(o) {
				var i = typeof t == "function" ? t(o) : t,
					a = i.element,
					c = i.padding;
				return a && n(a) ? a.current != null ? Km({
					element: a.current,
					padding: c
				}).fn(o) : {} : a ? Km({
					element: a,
					padding: c
				}).fn(o) : {}
			}
		}
	},
	BC = function(t, n) {
		var r = AC(t);
		return {
			name: r.name,
			fn: r.fn,
			options: [t, n]
		}
	},
	zC = function(t, n) {
		var r = PC(t);
		return {
			name: r.name,
			fn: r.fn,
			options: [t, n]
		}
	},
	$C = function(t, n) {
		var r = OC(t);
		return {
			name: r.name,
			fn: r.fn,
			options: [t, n]
		}
	},
	FC = function(t, n) {
		var r = MC(t);
		return {
			name: r.name,
			fn: r.fn,
			options: [t, n]
		}
	},
	VC = function(t, n) {
		var r = IC(t);
		return {
			name: r.name,
			fn: r.fn,
			options: [t, n]
		}
	},
	HC = function(t, n) {
		var r = jC(t);
		return {
			name: r.name,
			fn: r.fn,
			options: [t, n]
		}
	},
	WC = function(t, n) {
		var r = DC(t);
		return {
			name: r.name,
			fn: r.fn,
			options: [t, n]
		}
	};
const KC = {
	ancestorScroll: !0,
	ancestorResize: !0,
	elementResize: !1,
	animationFrame: !1
};

function UC(e, t, n, r = KC) {
	const {
		elementResize: o = !1,
		...i
	} = r, a = window.ResizeObserver !== void 0, c = EC(e, t, n, {
		...i,
		elementResize: o && a
	});
	let d = null;
	return o && !a && (d = new bh(n), Zi(e) && d.observe(e), d.observe(t), d.appendToTheDOM()), () => {
		d && (d.disconnect(), d = null), c()
	}
}
const YC = ({
	placement: e = "bottom-start",
	arrowRef: t = null,
	arrow: n,
	arrowHeight: r,
	arrowPadding: o,
	sameWidth: i,
	offsetByMainAxis: a = 0,
	offsetByCrossAxis: c = 0,
	customMiddlewares: d,
	hideWhenReferenceHidden: f,
	disableFlipMiddleware: m = !1,
	disableShiftMiddleware: _ = !1,
	flipMiddlewareFallbackAxisSideDirection: v = "end",
	overflowPadding: x
}) => P.useMemo(() => {
	const k = !Vb(e),
		A = [BC({
			crossAxis: c,
			mainAxis: n && r ? a + r : a
		})],
		C = _ ? null : zC({
			padding: x
		});
	if (k) A.push(VC({
		alignment: Hb(e)
	})), C && A.push(C);
	else if (m) C && A.push(C);
	else {
		const y = $C({
			crossAxis: "alignment",
			fallbackAxisSideDirection: v
		});
		e.includes("-") ? (A.push(y), C && A.push(C)) : (C && A.push(C), A.push(y))
	}
	return i && A.push(FC({
		apply({
			rects: y,
			elements: w
		}) {
			Object.assign(w.floating.style, {
				width: `${y.reference.width}px`
			})
		}
	})), d && A.push(...d), n && A.push(WC({
		element: t,
		padding: o
	})), f && A.push(HC()), {
		middlewares: A,
		strictPlacement: k ? void 0 : e
	}
}, [e, c, n, r, a, m, _, v, i, d, f, t, o, x]);

function qC(e, t, n) {
	const r = P.useRef(void 0);
	P.useEffect(() => {
		r.current = t
	}), Je(() => {
		if (!n) return;
		const o = r.current;
		(o === void 0 && e !== t || o !== void 0 && o !== t) && n(t)
	}, [e, t, n])
}
const GC = "input, textarea, [data-vkui-swipe-back=false]";

function XC(e) {
	var n;
	const t = e.originalEvent.target;
	return !!((n = t == null ? void 0 : t.closest) != null && n.call(t, GC))
}

function QC(e) {
	return Ea(e).some(t => "scrollLeft" in t ? t.scrollLeft > 0 : !1)
}
const Ym = 20,
	ZC = 10,
	qm = (e, t, n) => {
		const r = t < 0,
			o = t >= ZC,
			i = e <= Ym,
			a = e >= n - Ym;
		return {
			swipedToOpposite: r,
			swipeBackTriggered: o,
			viewportStartEdgeTouched: i,
			viewportEndEdgeTouched: a
		}
	},
	JC = "_host_lrnq2_1",
	eE = "_animated_lrnq2_16",
	tE = "_swipingBack_lrnq2_17",
	nE = "_panelOverlay_lrnq2_21",
	rE = "_panelPrev_lrnq2_33",
	oE = "_panelNext_lrnq2_38",
	iE = "_panelActive_lrnq2_43",
	sE = "_panelSwipeBackNext_lrnq2_49",
	aE = "_panelSwipeBackSuccess_lrnq2_53",
	lE = "_panelSwipeBackFailed_lrnq2_54",
	cE = "_panels_lrnq2_66",
	uE = "_panelIn_lrnq2_71",
	dE = "_panel_lrnq2_21",
	fE = "_ios_lrnq2_102",
	hE = "_panelSwipeBackPrev_lrnq2_102",
	pE = "_noMotion_lrnq2_171",
	tn = {
		host: JC,
		animated: eE,
		swipingBack: tE,
		panelOverlay: nE,
		panelPrev: rE,
		panelNext: oE,
		panelActive: iE,
		panelSwipeBackNext: sE,
		panelSwipeBackSuccess: aE,
		panelSwipeBackFailed: lE,
		panels: cE,
		panelIn: uE,
		panel: dE,
		ios: fE,
		panelSwipeBackPrev: hE,
		noMotion: pE
	};
let Gm = {};
const mE = ({
		activePanel: e,
		history: t,
		nav: n,
		onTransition: r,
		onSwipeBack: o,
		onSwipeBackStart: i,
		onSwipeBackCancel: a,
		children: c,
		className: d,
		...f
	}) => {
		const m = cl({
				nav: n,
				id: f.id
			}),
			_ = P.useRef(Gm[m] || {}),
			v = Fb();
		P.useEffect(() => () => {
			m && (Gm[m] = _.current)
		});
		const x = P.useRef({}),
			{
				window: k,
				document: A
			} = _n(),
			C = W_(),
			y = go(),
			w = $9(),
			b = rt(),
			[O, L] = P.useState(!1),
			[$, H] = P.useState([e]),
			[q, ne] = P.useState(e),
			[G, oe] = P.useState(void 0),
			[fe, me] = P.useState(null),
			[Z, J] = P.useState(null),
			X = P.useRef(!1),
			[re, z] = P.useState(void 0),
			[W, K] = P.useState(0),
			[ie, le] = P.useState(0),
			[_e, Ee] = P.useState(null),
			[Re, Oe] = P.useState(null),
			[Ae, Le] = P.useState(null),
			[Ue, ue] = P.useState(!1),
			Fe = Ei(e),
			Me = Ei(re),
			St = Ei(Ue),
			yn = Ei(Ae),
			Ot = Ei(ie),
			At = Ei(Re),
			On = Ei(r),
			wr = P.Children.toArray(c).filter(De => {
				const Be = cl(De.props);
				return Be !== void 0 && $.includes(Be) || Be === Re || Be === _e
			}),
			wn = !y.transitionMotionEnabled || !w.animate || b === "vkcom",
			pi = !wn && b === "ios" && y.isWebView && !!o,
			xn = P.useCallback((De, Be) => {
				Be && (_.current[De] = 0), me(null), J(null), H([e]), ne(e), L(!1), oe(Be), v(() => {
					C == null || C.scrollTo(0, Be ? _.current[e] : 0), r && r({
						isBack: Be,
						from: De,
						to: e
					})
				})
			}, [e, v, r, C]),
			pc = () => {
				fe !== null && xn(fe, !!G)
			},
			Yr = P.useCallback(() => {
				o && o()
			}, [o]),
			us = P.useCallback(() => {
				a && a(), Oe(null), Ee(null), z(!1), Le(null), K(0), le(0)
			}, [a]),
			mi = P.useCallback(() => {
				switch (Ae) {
					case "fail":
						us();
						break;
					case "success":
						Yr()
				}
			}, [us, Yr, Ae]),
			ln = De => {
				if (Ue) return;
				const {
					swipeBackTriggered: Be,
					viewportStartEdgeTouched: Gt,
					viewportEndEdgeTouched: Xt
				} = qm(De.startX, De.shiftX, k.innerWidth);
				(Gt || Xt) && Be && ue(!0)
			},
			qr = De => {
				if (X.current || XC(De)) return;
				const {
					swipedToOpposite: Be,
					swipeBackTriggered: Gt,
					viewportStartEdgeTouched: Xt
				} = qm(De.startX, De.shiftX, k.innerWidth);
				if (!(O && Gt)) {
					if (!re && t && t.length > 1) {
						if (Be) {
							X.current = !0;
							return
						}
						if (!Gt) return;
						if (!Xt && QC(De.originalEvent.target)) {
							X.current = !0;
							return
						}
						if (i && i(q) === "prevent") {
							X.current = !0;
							return
						}
						q !== null && (a2(A), _.current[q] = C == null ? void 0 : C.getScroll().y), z(!0), K(De.startX), Oe(q), Ee(t.slice(-2)[0])
					}
					re && (De.shiftX < 0 ? le(0) : De.shiftX > k.innerWidth - W ? le(k.innerWidth) : le(De.shiftX))
				}
			},
			ja = De => {
				if (X.current = !1, re) {
					const Be = ie / De.duration * Q0;
					ie === 0 ? us() : ie >= (k.innerWidth ?? 0) ? Yr() : Be > 250 || ie >= k.innerWidth / 2 ? Le("success") : Le("fail")
				}
			},
			vi = (De, Be) => !De && !Be || Ae ? {} : Be ? k ? {
				transform: `translate3d(${-50+ie*100/k.innerWidth/2}%, 0, 0)`
			} : {} : De ? {
				transform: `translate3d(${ie}px, 0, 0)`
			} : {},
			Ta = De => {
				if (!k || !De) return {};
				const Be = Ae === "success" ? 0 : Ae === "fail" ? 1 : null;
				return {
					display: "block",
					opacity: Be === null ? 1 - ie / k.innerWidth : Be
				}
			},
			ds = De => {
				De.propertyName.includes("transform") && mi()
			};
		return P.useEffect(() => {
			if (Fe && Fe !== e && !Me && !St) {
				const Be = P.Children.toArray(c).map(Gt => cl(Gt.props)).find(Gt => Gt === Fe || Gt === e) === e;
				_.current[Fe] = C == null ? void 0 : C.getScroll({
					compensateKeyboardHeight: !1
				}).y, wn ? xn(Fe, Be) : (a2(A), H([Fe, e]), me(Fe), J(e), ne(null), L(!0), oe(Be))
			}
			if (Fe && Fe !== e && Me) {
				const De = e,
					Be = Fe;
				At && (_.current[At] = 0), Oe(null), Ee(null), z(!1), Le(null), K(0), le(0), ne(De), H([De]), oe(!0), v(() => {
					De !== null && (C == null || C.scrollTo(0, _.current[De])), On && On({
						isBack: !0,
						from: Be,
						to: De
					})
				})
			}
			Fe !== e && Ue && (ue(!1), J(null), me(null), L(!1), H([e]), ne(e))
		}, [e, q, Ue, c, wn, A, xn, Fe, St, On, At, yn, Me, C, _e, Ae, v]), P.useEffect(function() {
			(yn === "fail" && !Ae || Me && !re && Ot === 0) && q !== null && (C == null || C.scrollTo(0, _.current[q]))
		}, [yn, Ae, Me, re, Ot, q, C]), u.jsx(Lb.Provider, {
			value: m,
			children: u.jsx(y4, {
				Component: "section",
				...f,
				className: te(tn.host, b === "ios" && te(tn.ios, "vkuiInternalView--ios"), !wn && O && tn.animated, !wn && re && tn.swipingBack, wn && tn.noMotion, d),
				onMoveX: pi ? qr : b === "ios" ? ln : void 0,
				onEnd: pi ? ja : void 0,
				children: u.jsx("div", {
					className: tn.panels,
					children: wr.map(De => {
						const Be = cl(De.props),
							Gt = Be === q,
							Xt = Be === fe,
							Ce = Be === Z,
							_i = O && (G ? Xt : Ce),
							Un = Be === Re,
							Gr = Be === _e,
							ve = Ae && Un;
						let fs;
						if (Xt || Ce && G || Un || Gr) {
							const gi = _.current[Be];
							gi !== void 0 && (fs = {
								marginTop: -1 * gi
							})
						}
						return u.jsxs("div", {
							className: te(tn.panel, Gt && tn.panelActive, Xt && tn.panelPrev, Ce && tn.panelNext, Un && tn.panelSwipeBackPrev, Gr && tn.panelSwipeBackNext, Ae === "success" && tn.panelSwipeBackSuccess, Ae === "fail" && tn.panelSwipeBackFailed),
							onTransitionEnd: ve ? ds : void 0,
							onAnimationEnd: _i ? pc : void 0,
							ref: gi => {
								Be !== void 0 && (x.current[Be] = gi)
							},
							style: vi(Un, Gr),
							children: [b === "ios" && u.jsx("div", {
								className: tn.panelOverlay,
								style: Ta(Gr)
							}), u.jsx("div", {
								className: tn.panelIn,
								style: fs,
								children: u.jsx(Nb, {
									isBack: re || G,
									children: u.jsx(Rb, {
										entering: Be === Z || Be === _e,
										children: De
									})
								})
							})]
						}, Be)
					})
				})
			})
		})
	},
	vE = "_host_3h97y_1",
	_E = "_centered_3h97y_16",
	gE = "_sizeXCompact_3h97y_36",
	yE = "_sizeXNone_3h97y_43",
	wE = "_sizeXRegular_3h97y_51",
	xE = "_inBefore_3h97y_99",
	SE = "_inAfter_3h97y_105",
	kE = "_modeNone_3h97y_111",
	bE = "_modePlain_3h97y_112",
	CE = "_modeCard_3h97y_116",
	EE = "_disableBackground_3h97y_126",
	Qn = {
		host: vE,
		in: "_in_3h97y_7",
		centered: _E,
		sizeXCompact: gE,
		sizeXNone: yE,
		sizeXRegular: wE,
		inBefore: xE,
		inAfter: SE,
		modeNone: kE,
		modePlain: bE,
		modeCard: CE,
		disableBackground: EE
	},
	AE = {
		none: Qn.sizeXNone,
		compact: Qn.sizeXCompact,
		regular: Qn.sizeXRegular
	},
	IE = {
		none: Qn.modeNone,
		plain: Qn.modePlain,
		card: Qn.modeCard
	},
	PE = ({
		centered: e = !1,
		children: t,
		nav: n,
		mode: r,
		disableBackground: o,
		...i
	}) => {
		const {
			sizeX: a = "none"
		} = Et(), c = OE(r, a);
		return u.jsx(Db.Provider, {
			value: i.id || n,
			children: u.jsx(We, {
				...i,
				baseClassName: te(Qn.host, AE[a], e && "vkuiInternalPanel--centered", o && Qn.disableBackground, IE[c]),
				children: u.jsxs(y4, {
					Component: Y0,
					className: te(Qn.in, "vkuiInternalPanel__in"),
					children: [u.jsx("div", {
						className: Qn.inBefore
					}), e ? u.jsx("div", {
						className: Qn.centered,
						children: t
					}) : t, u.jsx("div", {
						className: Qn.inAfter
					})]
				})
			})
		})
	};

function OE(e, t) {
	const {
		layout: n
	} = P.useContext(ri);
	return e || n || (t !== "none" ? t === "regular" ? "card" : "plain" : "none")
}
const ME = "_host_1f418_1",
	jE = "_primitive_1f418_25",
	TE = "_ios_1f418_44",
	RE = "_android_1f418_79",
	NE = "_notPrimitive_1f418_79",
	LE = "_vkcom_1f418_95",
	DE = "_hover_1f418_114",
	BE = "_active_1f418_116",
	zE = "_label_1f418_142",
	lo = {
		host: ME,
		primitive: jE,
		ios: TE,
		android: RE,
		notPrimitive: NE,
		vkcom: LE,
		hover: DE,
		active: BE,
		label: zE
	},
	a1 = {
		ios: lo.ios,
		android: lo.android,
		vkcom: lo.vkcom
	},
	$E = {
		ios: "background",
		android: "background",
		vkcom: lo.hover
	},
	FE = {
		ios: "opacity",
		android: "background",
		vkcom: lo.active
	},
	Xm = ({
		primary: e,
		children: t
	}) => {
		const n = rt();
		return n === "ios" ? u.jsx(wa, {
			Component: "span",
			level: "3",
			weight: e ? "1" : "3",
			children: t
		}) : u.jsx(xa, {
			weight: n === "vkcom" ? void 0 : "2",
			children: t
		})
	},
	l1 = ({
		children: e,
		primary: t = !1,
		label: n,
		activeEffectDelay: r = 200,
		hoverMode: o,
		activeMode: i,
		...a
	}) => {
		const c = Ef(e),
			d = Ef(n),
			f = rt(),
			m = [n, e].filter(v => !!v),
			_ = m.length === 1 && Ef(m[0]);
		return u.jsxs(Wr, {
			Component: a.href ? "a" : "button",
			activeEffectDelay: r,
			hoverMode: o || $E[f],
			activeMode: i || FE[f],
			...a,
			baseClassName: te(lo.host, a1.hasOwnProperty(f) ? a1[f] : a1.android, _ && lo.primitive, !c && !d && lo.notPrimitive),
			children: [c ? u.jsx(Xm, {
				primary: t,
				children: e
			}) : e, d ? u.jsx(Xm, {
				primary: t,
				className: lo.label,
				children: n
			}) : n]
		})
	},
	np = P.createContext(null),
	rp = () => {
		const e = P.useContext(np);
		return e === null ? {
			id: e
		} : {
			id: e,
			labelId: `${e}-label`
		}
	},
	VE = {
		"2xs": Bt["-column-gap--2xs"],
		xs: Bt["-column-gap--xs"],
		s: Bt["-column-gap--s"],
		m: Bt["-column-gap--m"],
		l: Bt["-column-gap--l"],
		xl: Bt["-column-gap--xl"],
		"2xl": Bt["-column-gap--2xl"],
		"3xl": Bt["-column-gap--3xl"],
		"4xl": Bt["-column-gap--4xl"]
	},
	HE = {
		"2xs": Bt["-row-gap--2xs"],
		xs: Bt["-row-gap--xs"],
		s: Bt["-row-gap--s"],
		m: Bt["-row-gap--m"],
		l: Bt["-row-gap--l"],
		xl: Bt["-row-gap--xl"],
		"2xl": Bt["-row-gap--2xl"],
		"3xl": Bt["-row-gap--3xl"],
		"4xl": Bt["-row-gap--4xl"]
	};

function WE(e) {
	return typeof e == "number" || typeof e == "string" ? [e, e] : e
}

function KE(e, t) {
	return `vkui-${e}-${t}`
}

function UE(e) {
	return `vkui-${e}`
}

function YE(e) {
	return `--vkui_internal--${e}`
}
const P4 = ["2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
	qE = ["auto", "max-content", "min-content", "fit-content"],
	fc = ["inherit", "initial", "unset"],
	op = [...qE, ...fc],
	Ii = [...P4, ...fc],
	Qm = op,
	ru = [...op.filter(e => e !== "auto")],
	Zm = fc,
	GE = [...op, "content"],
	Pi = [...P4, ...fc, "auto"],
	XE = ["static", "relative", "absolute", "fixed"],
	c1 = ["visible", "hidden", "clip", "scroll", "auto", ...fc],
	Jm = {
		padding: Ii,
		paddingInline: Ii,
		paddingBlock: Ii,
		paddingInlineStart: Ii,
		paddingInlineEnd: Ii,
		paddingBlockStart: Ii,
		paddingBlockEnd: Ii,
		inlineSize: Qm,
		minInlineSize: ru,
		maxInlineSize: ru,
		blockSize: Qm,
		minBlockSize: ru,
		maxBlockSize: ru,
		inset: Pi,
		insetInline: Pi,
		insetBlock: Pi,
		insetInlineStart: Pi,
		insetInlineEnd: Pi,
		insetBlockStart: Pi,
		insetBlockEnd: Pi,
		position: XE,
		flexGrow: Zm,
		flexShrink: Zm,
		flexBasis: GE,
		overflow: c1,
		overflowBlock: c1,
		overflowInline: c1
	};

function O4(e) {
	const t = {
		...e
	};
	let n, r;
	for (const o in Jm)
		if (o in t && t[o] !== void 0) {
			const i = Jm[o],
				a = t[o],
				c = o.replace(/([A-Z])/g, "-$1").toLowerCase();
			typeof a == "string" && i.includes(a) ? n = te(n, KE(c, a)) : o !== "position" && !o.startsWith("overflow") && (n = te(n, UE(c)), r = fo(r, {
				[YE(c)]: typeof a == "number" && o !== "flexGrow" && o !== "flexShrink" ? `${a}px` : a
			})), delete t[o]
		} return t.className = te(n, t.className), t.style = fo(r, t.style), t
}
const Zr = {
		"-spacing--2xs": "_-spacing--2xs_179cl_1",
		"-spacing--xs": "_-spacing--xs_179cl_5",
		"-spacing--s": "_-spacing--s_179cl_9",
		"-spacing--m": "_-spacing--m_179cl_13",
		"-spacing--l": "_-spacing--l_179cl_17",
		"-spacing--xl": "_-spacing--xl_179cl_21",
		"-spacing--2xl": "_-spacing--2xl_179cl_25",
		"-spacing--3xl": "_-spacing--3xl_179cl_29",
		"-spacing--4xl": "_-spacing--4xl_179cl_33"
	},
	QE = {
		"2xs": Zr["-spacing--2xs"],
		xs: Zr["-spacing--xs"],
		s: Zr["-spacing--s"],
		m: Zr["-spacing--m"],
		l: Zr["-spacing--l"],
		xl: Zr["-spacing--xl"],
		"2xl": Zr["-spacing--2xl"],
		"3xl": Zr["-spacing--3xl"],
		"4xl": Zr["-spacing--4xl"]
	};

function M4(e, t) {
	return typeof t == "string" ? t.startsWith("--") ? [void 0, {
		[e]: `var(${t})`
	}] : [QE[t], void 0] : [void 0, typeof t == "number" ? {
		[e]: `${t}px`
	} : void 0]
}
const ZE = "_appearancePrimary_1kn98_1",
	JE = "_appearanceSecondary_1kn98_5",
	eA = "_appearancePrimaryAlpha_1kn98_9",
	tA = "_alignStart_1kn98_13",
	nA = "_alignEnd_1kn98_17",
	rA = "_directionVertical_1kn98_21",
	oA = "_sized_1kn98_26",
	iA = "_directionHorizontal_1kn98_26",
	sA = "_padded_1kn98_56",
	Fr = {
		appearancePrimary: ZE,
		appearanceSecondary: JE,
		appearancePrimaryAlpha: eA,
		alignStart: tA,
		alignEnd: nA,
		directionVertical: rA,
		sized: oA,
		directionHorizontal: iA,
		in: "_in_1kn98_37",
		padded: sA
	},
	aA = "--vkui_internal--spacing_size",
	lA = {
		primary: Fr.appearancePrimary,
		secondary: Fr.appearanceSecondary,
		"primary-alpha": Fr.appearancePrimaryAlpha
	},
	cA = {
		horizontal: Fr.directionHorizontal,
		vertical: Fr.directionVertical
	},
	uA = {
		start: Fr.alignStart,
		end: Fr.alignEnd
	},
	Ph = ({
		padding: e = !1,
		appearance: t = "primary",
		direction: n = "horizontal",
		align: r = "center",
		size: o,
		...i
	}) => {
		const [a, c] = M4(aA, o), d = O4(i);
		return u.jsx(We, {
			...d,
			baseClassName: te(e && Fr.padded, lA[t], cA[n], o !== void 0 && Fr.sized, r !== "center" && uA[r], a),
			baseStyle: c,
			children: u.jsx("hr", {
				className: Fr.in
			})
		})
	},
	dA = "_host_1eoph_1",
	fA = {
		host: dA
	},
	hA = "--vkui_internal--spacing_size",
	zd = ({
		size: e = "m",
		...t
	}) => {
		const [n, r] = M4(hA, e);
		return u.jsx(We, {
			...t,
			baseStyle: r,
			baseClassName: te(fA.host, n)
		})
	},
	pA = "_host_1x91a_1",
	mA = "_hasFixed_1x91a_5",
	vA = "_fixed_1x91a_16",
	_A = "_trnsp_1x91a_29",
	gA = "_sizeXRegular_1x91a_33",
	yA = "_shadow_1x91a_33",
	wA = "_sizeXNone_1x91a_38",
	xA = "_before_1x91a_43",
	SA = "_content_1x91a_50",
	kA = "_contentIn_1x91a_62",
	bA = "_after_1x91a_75",
	CA = "_ios_1x91a_94",
	EA = "_noBefore_1x91a_128",
	AA = "_noAfter_1x91a_135",
	IA = "_android_1x91a_159",
	PA = "_sizeYCompact_1x91a_187",
	OA = "_vkcom_1x91a_187",
	MA = "_sizeYNone_1x91a_192",
	jA = "_sep_1x91a_283",
	TA = "_separator_1x91a_342",
	wt = {
		host: pA,
		static: "_static_1x91a_5",
		hasFixed: mA,
		fixed: vA,
		in: "_in_1x91a_20",
		trnsp: _A,
		sizeXRegular: gA,
		shadow: yA,
		sizeXNone: wA,
		before: xA,
		content: SA,
		contentIn: kA,
		after: bA,
		ios: CA,
		noBefore: EA,
		noAfter: AA,
		android: IA,
		sizeYCompact: PA,
		vkcom: OA,
		sizeYNone: MA,
		sep: jA,
		separator: TA
	},
	u1 = {
		ios: wt.ios,
		android: wt.android,
		vkcom: te(wt.vkcom, "vkuiInternalPanelHeader--vkcom")
	},
	RA = {
		none: wt.sizeXNone,
		regular: wt.sizeXRegular
	},
	NA = {
		none: wt.sizeYNone,
		compact: wt.sizeYCompact
	},
	ev = ({
		before: e,
		after: t,
		children: n,
		typographyProps: r = {}
	}) => {
		const {
			Component: o = "span",
			...i
		} = r, {
			hasCustomPanelHeaderAfter: a,
			customPanelHeaderAfterMinWidth: c
		} = go(), d = rp().id !== null, f = rt(), m = !a || d ? {
			children: t
		} : {
			style: {
				minWidth: c
			}
		}, _ = f === "vkcom" ? u.jsx(xa, {
			weight: "2",
			Component: o,
			...i,
			children: n
		}) : u.jsx(o, {
			className: wt.contentIn,
			...i,
			children: n
		});
		return u.jsxs(Y0, {
			fixed: !0,
			className: wt.in,
			children: [u.jsx("div", {
				className: te(wt.before, "vkuiInternalPanelHeader__before"),
				children: e
			}), u.jsx("div", {
				className: wt.content,
				children: _
			}), u.jsx("div", {
				className: te(wt.after, "vkuiInternalPanelHeader__after"),
				...m
			})]
		})
	},
	j4 = ({
		before: e,
		children: t,
		after: n,
		float: r = !1,
		transparent: o = !1,
		delimiter: i = "auto",
		shadow: a,
		getRef: c,
		getRootRef: d,
		fixed: f,
		typographyProps: m,
		..._
	}) => {
		const v = rt(),
			{
				sizeX: x = "none",
				sizeY: k = "none"
			} = Et(),
			{
				sizeX: A
			} = v4(),
			C = v === "vkcom",
			y = f !== void 0 ? f : !C,
			w = i === "auto" || i === "separator",
			b = !r && w,
			O = !r && (i === "auto" || i === "spacing");
		return u.jsxs(We, {
			..._,
			baseClassName: te(wt.host, "vkuiInternalPanelHeader", u1.hasOwnProperty(v) ? u1[v] : u1.android, o && wt.trnsp, a && wt.shadow, !r && te(wt.static, "vkuiInternalPanelHeader--static"), b && te(wt.sep, "vkuiInternalPanelHeader--sep"), !e && te(wt.noBefore, "vkuiInternalPanelHeader--no-before"), !n && wt.noAfter, y && wt.hasFixed, x !== "compact" && RA[x], k !== "regular" && NA[k]),
			getRootRef: y ? d : c,
			children: [y ? u.jsx(Ch, {
				className: te(wt.fixed, "vkuiInternalPanelHeader__fixed"),
				vertical: "top",
				getRootRef: c,
				children: u.jsx(ev, {
					before: e,
					after: n,
					typographyProps: m,
					children: t
				})
			}) : u.jsx(ev, {
				before: e,
				after: n,
				typographyProps: m,
				children: t
			}), !C && u.jsxs(u.Fragment, {
				children: [b && A.compact && u.jsx(Ph, {
					className: A.compact.className,
					padding: !0
				}), O && A.regular && u.jsx(zd, {
					className: A.regular.className,
					size: 16
				})]
			}), w && C && u.jsx(Ph, {
				className: wt.separator
			})]
		})
	},
	LA = "_host_o3n4t_1",
	DA = "_before_o3n4t_12",
	BA = "_subtitle_o3n4t_28",
	zA = "_childrenIn_o3n4t_29",
	$A = "_childrenText_o3n4t_30",
	FA = "_children_o3n4t_29",
	VA = "_aside_o3n4t_55",
	HA = "_width_o3n4t_64",
	WA = "_inCentered_o3n4t_68",
	KA = "_ios_o3n4t_76",
	UA = "_android_o3n4t_87",
	YA = "_vkcom_o3n4t_100",
	qA = "_sizeYCompact_o3n4t_109",
	GA = "_sizeYNone_o3n4t_114",
	dn = {
		host: LA,
		before: DA,
		in: "_in_o3n4t_18",
		subtitle: BA,
		childrenIn: zA,
		childrenText: $A,
		children: FA,
		aside: VA,
		width: HA,
		inCentered: WA,
		ios: KA,
		android: UA,
		vkcom: YA,
		sizeYCompact: qA,
		sizeYNone: GA
	},
	d1 = {
		ios: dn.ios,
		android: dn.android,
		vkcom: dn.vkcom
	},
	XA = {
		none: dn.sizeYNone,
		compact: dn.sizeYCompact
	},
	QA = ({
		hasSubtitle: e,
		hasBefore: t,
		children: n
	}) => {
		const r = rt();
		return e || t ? u.jsx(xa, {
			className: dn.childrenText,
			Component: "div",
			weight: r === "vkcom" ? "2" : void 0,
			children: n
		}) : u.jsx("div", {
			className: dn.childrenIn,
			children: n
		})
	},
	ZA = ({
		aside: e,
		subtitle: t,
		before: n,
		children: r,
		onClick: o,
		...i
	}) => {
		const {
			sizeY: a = "none"
		} = Et(), c = o ? Wr : "div", d = o ? {} : i, f = rt(), m = o ? {
			...i,
			onClick: o,
			activeEffectDelay: 200,
			hasActive: f === "ios",
			activeMode: "opacity"
		} : {};
		return u.jsxs(We, {
			...d,
			baseClassName: te(dn.host, d1.hasOwnProperty(f) ? d1[f] : d1.android, a !== "regular" && XA[a]),
			children: [et(n) && u.jsx("div", {
				className: dn.before,
				children: n
			}), u.jsxs(c, {
				...m,
				className: te(dn.in, !n && f !== "android" && dn.inCentered),
				children: [et(t) && u.jsx(si, {
					className: dn.subtitle,
					children: t
				}), u.jsxs("div", {
					className: dn.children,
					children: [u.jsx(QA, {
						hasSubtitle: et(t),
						hasBefore: et(n),
						children: r
					}), et(e) && u.jsx("div", {
						className: dn.aside,
						children: e
					})]
				}), et(n) && u.jsx("div", {
					className: dn.width
				})]
			})]
		})
	},
	JA = "_host_mmg6k_1",
	eI = "_inner_mmg6k_7",
	tI = "_innerHeader_mmg6k_17",
	nI = "_ios_mmg6k_30",
	rI = "_innerCenter_mmg6k_41",
	Qa = {
		host: JA,
		inner: eI,
		innerHeader: tI,
		ios: nI,
		innerCenter: rI
	},
	oI = ({
		header: e,
		children: t,
		getRootRef: n,
		getRef: r,
		className: o,
		center: i,
		modal: a,
		popout: c,
		slotProps: d,
		...f
	}) => {
		const m = Kl({
				getRootRef: n
			}, d == null ? void 0 : d.root),
			_ = Kl({
				getRootRef: r,
				className: o,
				...f
			}, d == null ? void 0 : d.content),
			v = rt();
		return u.jsxs(We, {
			baseClassName: te(Qa.host, v === "ios" && Qa.ios),
			...m,
			children: [e, u.jsxs(We, {
				baseClassName: te(Qa.inner, !!e && Qa.innerHeader, i && Qa.innerCenter),
				..._,
				children: [t, a, c]
			})]
		})
	},
	tv = new WeakMap;

function nv(e) {
	return {
		desktopPlus: e(Ci.DESKTOP_PLUS),
		smallTabletPlus: e(Ci.SMALL_TABLET_PLUS),
		tablet: e(Ci.TABLET),
		smallTablet: e(Ci.SMALL_TABLET),
		mobile: e(Ci.MOBILE),
		mediumHeight: e(Ci.MEDIUM_HEIGHT),
		mobileLandscapeHeight: e(Ci.MOBILE_LANDSCAPE_HEIGHT)
	}
}
const ip = () => {
		const {
			window: e
		} = _n();
		return P.useMemo(function() {
			if (!e) return nv($8);
			const n = tv.get(e);
			if (n) return n;
			const r = nv(e.matchMedia.bind(e));
			return tv.set(e, r), r
		}, [e])
	},
	iI = "_host_p4vve_1",
	sI = "_viewWidthSmallTabletPlus_p4vve_9",
	aI = "_spacedAuto_p4vve_9",
	lI = "_viewWidthNone_p4vve_15",
	cI = "_viewWidthTabletMinus_p4vve_21",
	uI = "_stretchedOnMobile_p4vve_21",
	dI = "_fixed_p4vve_37",
	fI = "_fixedInner_p4vve_44",
	Lo = {
		host: iI,
		viewWidthSmallTabletPlus: sI,
		spacedAuto: aI,
		viewWidthNone: lI,
		viewWidthTabletMinus: cI,
		stretchedOnMobile: uI,
		fixed: dI,
		fixedInner: fI
	},
	hI = {
		none: te(Lo.viewWidthNone, "vkuiInternalSplitCol--viewWidth-none"),
		tabletMinus: Lo.viewWidthTabletMinus,
		smallTabletPlus: Lo.viewWidthSmallTabletPlus,
		tabletPlus: "vkuiInternalSplitCol--viewWidth-tabletPlus"
	};

function pI(e) {
	const {
		viewWidth: t
	} = Et(), [n, r] = P.useState(!!e), o = ip();
	return P.useEffect(() => {
		if (e !== void 0) {
			r(e);
			return
		}
		if (t !== void 0) {
			r(t < Tt.TABLET);
			return
		}
		const i = () => r(!o.smallTabletPlus.matches);
		return i(), Ul(o.smallTabletPlus, i), () => {
			Td(o.smallTabletPlus, i)
		}
	}, [e, t, o]), n
}
const mI = e => {
	const {
		children: t,
		width: n,
		maxWidth: r,
		minWidth: o,
		animate: i,
		fixed: a,
		autoSpaced: c,
		stretchedOnMobile: d,
		getRootRef: f,
		...m
	} = e, _ = Hn(f), {
		viewWidth: v
	} = Et(), x = pI(i), k = P.useMemo(() => ({
		colRef: _,
		animate: x
	}), [x, _]);
	return u.jsx(We, {
		...m,
		baseStyle: {
			width: n,
			maxWidth: r,
			minWidth: o
		},
		getRootRef: _,
		baseClassName: te(Lo.host, Yx(hI, v), c && te(Lo.spacedAuto, "vkuiInternalSplitCol--spaced-auto"), a && Lo.fixed, d && Lo.stretchedOnMobile),
		children: u.jsx(q0.Provider, {
			value: k,
			children: a ? u.jsx("div", {
				className: Lo.fixedInner,
				children: t
			}) : t
		})
	})
};

function T4() {
	const {
		direction: e
	} = go();
	return e || "ltr"
}
const vI = "_flexGrow_1m2ny_3",
	_I = "_flexShrink_1m2ny_7",
	gI = "_flexContent_1m2ny_11",
	yI = "_flexFixed_1m2ny_15",
	wI = "_alignSelfStart_1m2ny_21",
	xI = "_alignSelfEnd_1m2ny_25",
	SI = "_alignSelfCenter_1m2ny_29",
	kI = "_alignSelfBaseline_1m2ny_33",
	bI = "_alignSelfStretch_1m2ny_37",
	kn = {
		flexGrow: vI,
		flexShrink: _I,
		flexContent: gI,
		flexFixed: yI,
		alignSelfStart: wI,
		alignSelfEnd: xI,
		alignSelfCenter: SI,
		alignSelfBaseline: kI,
		alignSelfStretch: bI
	},
	CI = {
		grow: kn.flexGrow,
		shrink: kn.flexShrink,
		content: kn.flexContent,
		fixed: kn.flexFixed
	},
	EI = {
		start: kn.alignSelfStart,
		end: kn.alignSelfEnd,
		center: kn.alignSelfCenter,
		baseline: kn.alignSelfBaseline,
		stretch: kn.alignSelfStretch
	},
	AI = ({
		children: e,
		alignSelf: t,
		flex: n,
		flexBasis: r,
		...o
	}) => u.jsx(We, {
		...o,
		baseStyle: {
			flexBasis: r
		},
		baseClassName: te(t && EI[t], n && CI[n]),
		children: e
	}),
	II = "_host_1yiy0_1",
	PI = "_displayNone_1yiy0_8",
	OI = "_displayInlineFlex_1yiy0_12",
	MI = "_marginAuto_1yiy0_16",
	jI = "_directionColumn_1yiy0_78",
	TI = "_reverse_1yiy0_82",
	RI = "_wrap_1yiy0_90",
	NI = "_justifyStart_1yiy0_96",
	LI = "_justifyEnd_1yiy0_100",
	DI = "_justifyCenter_1yiy0_104",
	BI = "_justifySpaceAround_1yiy0_108",
	zI = "_justifySpaceBetween_1yiy0_112",
	$I = "_justifySpaceEvenly_1yiy0_116",
	FI = "_alignStart_1yiy0_122",
	VI = "_alignEnd_1yiy0_126",
	HI = "_alignCenter_1yiy0_130",
	WI = "_alignStretch_1yiy0_134",
	KI = "_alignBaseline_1yiy0_138",
	$t = {
		host: II,
		displayNone: PI,
		displayInlineFlex: OI,
		marginAuto: MI,
		directionColumn: jI,
		reverse: TI,
		wrap: RI,
		justifyStart: NI,
		justifyEnd: LI,
		justifyCenter: DI,
		justifySpaceAround: BI,
		justifySpaceBetween: zI,
		justifySpaceEvenly: $I,
		alignStart: FI,
		alignEnd: VI,
		alignCenter: HI,
		alignStretch: WI,
		alignBaseline: KI
	},
	UI = {
		start: $t.justifyStart,
		end: $t.justifyEnd,
		center: $t.justifyCenter,
		"space-around": $t.justifySpaceAround,
		"space-between": $t.justifySpaceBetween,
		"space-evenly": $t.justifySpaceEvenly
	},
	YI = {
		start: $t.alignStart,
		end: $t.alignEnd,
		center: $t.alignCenter,
		stretch: $t.alignStretch,
		baseline: $t.alignBaseline
	},
	qI = {
		start: kn.alignSelfStart,
		end: kn.alignSelfEnd,
		center: kn.alignSelfCenter,
		baseline: kn.alignSelfBaseline,
		stretch: kn.alignSelfStretch
	},
	GI = {
		none: $t.displayNone,
		"inline-flex": $t.displayInlineFlex
	},
	R4 = ({
		gap: e = 0,
		align: t,
		justify: n,
		margin: r = "none",
		noWrap: o = !1,
		direction: i = "row",
		reverse: a = !1,
		children: c,
		alignSelf: d,
		display: f = "flex",
		...m
	}) => {
		const [_, v] = WE(e), x = O4(m);
		return u.jsx(We, {
			...x,
			baseClassName: te($t.host, !o && $t.wrap, a && $t.reverse, i !== "row" && $t.directionColumn, r !== "none" && $t.marginAuto, t && YI[t], d && qI[d], n && UI[n], XI(_, v), f !== "flex" && GI[f]),
			baseStyle: QI(_, v),
			children: c
		})
	};

function XI(e, t) {
	return te(typeof e == "string" && HE[e], typeof t == "string" && VE[t])
}

function QI(e, t) {
	const n = {};
	return typeof e == "number" && (n["--vkui_internal--row_gap"] = `${e}px`), typeof t == "number" && (n["--vkui_internal--column_gap"] = `${t}px`), n
}
R4.Item = AI;
const ZI = "_host_r9ejv_1",
	JI = "_opened_r9ejv_10",
	eP = "_closing_r9ejv_14",
	tP = "_fixed_r9ejv_18",
	nP = "_absolute_r9ejv_22",
	rP = "_overlay_r9ejv_26",
	oP = "_masked_r9ejv_45",
	iP = "_container_r9ejv_54",
	sP = "_content_r9ejv_62",
	aP = "_alignYCenter_r9ejv_76",
	lP = "_alignYBottom_r9ejv_80",
	cP = "_alignYTop_r9ejv_84",
	uP = "_alignXCenter_r9ejv_88",
	dP = "_alignXLeft_r9ejv_92",
	fP = "_alignXRight_r9ejv_96",
	fn = {
		host: ZI,
		opened: JI,
		closing: eP,
		fixed: tP,
		absolute: nP,
		overlay: rP,
		masked: oP,
		container: iP,
		content: sP,
		alignYCenter: aP,
		alignYBottom: lP,
		alignYTop: cP,
		alignXCenter: uP,
		alignXLeft: dP,
		alignXRight: fP
	},
	hP = {
		center: fn.alignXCenter,
		left: fn.alignXLeft,
		right: fn.alignXRight
	},
	pP = {
		center: fn.alignYCenter,
		top: fn.alignYTop,
		bottom: fn.alignYBottom
	},
	mP = {
		fixed: fn.fixed,
		absolute: fn.absolute,
		none: void 0
	},
	sp = ({
		alignY: e = "center",
		alignX: t = "center",
		closing: n = !1,
		noBackground: r = !1,
		strategy: o,
		fixed: i = !0,
		children: a,
		onClick: c,
		zIndex: d = "var(--vkui--z_index_popout)",
		...f
	}) => {
		const m = o || (i ? "fixed" : "none");
		return u.jsx(We, {
			...f,
			baseClassName: te(fn.host, pP[e], hP[t], n ? fn.closing : fn.opened, mP[m], !r && fn.masked),
			baseStyle: {
				zIndex: d
			},
			children: u.jsxs("div", {
				className: fn.container,
				children: [u.jsx("div", {
					className: fn.overlay,
					onClick: c
				}), u.jsx("div", {
					className: fn.content,
					children: a
				})]
			})
		})
	};

function Er(e, t) {
	return e ?? t
}
const vP = l4("useAdaptivityWithJSMediaQueries"),
	xo = () => {
		Fn || vP(`Похоже, вы пытаетесь использовать хук вне браузера.

Постарайтесь этого избегать, чтобы не было ошибок при гидратации: при SSR нет информации о размерах экрана.

Используйте CSS Media Query или библиотеку по типу https://github.com/artsy/fresnel.`, "error");
		const {
			viewWidth: e,
			viewHeight: t,
			sizeX: n,
			sizeY: r,
			hasPointer: o,
			hasHover: i
		} = P.useContext(rc), a = rt(), c = ip(), [
			[d, f], m
		] = P.useState(() => [Er(e, ym(c)), Er(t, wm(c))]), _ = P.useMemo(() => {
			const v = Er(o, Gh),
				x = Er(i, e8),
				k = Er(e, d),
				A = Er(t, f),
				C = Er(n, Z3(k)),
				y = Er(r, Ux(k, A, v)),
				w = t4(k, A, v, a);
			return {
				viewWidth: k,
				viewHeight: A,
				sizeX: C,
				sizeY: y,
				hasPointer: v,
				hasHover: x,
				isDesktop: w
			}
		}, [d, f, e, t, n, r, o, i, a]);
		return P.useEffect(() => {
			const v = () => {
				m(x => {
					const k = Er(e, ym(c)),
						A = Er(t, wm(c)),
						[C, y] = x;
					return C !== k || y !== A ? [k, A] : x
				})
			};
			return e || [c.desktopPlus, c.tablet, c.smallTablet, c.mobile].forEach(x => Ul(x, v)), t || [c.mediumHeight, c.mobileLandscapeHeight].forEach(x => Ul(x, v)), () => {
				[c.desktopPlus, c.tablet, c.smallTablet, c.mobile, c.mediumHeight, c.mobileLandscapeHeight].forEach(x => Td(x, v))
			}
		}, [c, e, t]), _
	};

function _P(e, t) {
	return e.length !== t.length ? !1 : e.every((n, r) => n === t[r])
}
const N4 = {
		subtree: !0,
		childList: !0
	},
	gP = (e, t, n = N4) => {
		const r = Kt(t);
		Je(() => {
			if (!e || !e.current) return;
			const o = new MutationObserver(r);
			return o.observe(e.current, n), () => o.disconnect()
		}, [e, r])
	};

function yP(e) {
	return P_.some(t => e.matches(t))
}
const wP = ({
		restoreFocus: e,
		timeout: t,
		mount: n,
		ref: r
	}) => {
		const o = P.useRef(e);
		o.current = e;
		const [i, a] = P.useState(null), c = Kt(() => {
			var m;
			const d = typeof o.current == "function" ? o.current() : o.current;
			if (!d) return;
			const f = Au(r.current);
			f && !((m = r.current) != null && m.contains(f)) && yP(f) || setTimeout(() => {
				const _ = Zi(d) && d || Zi(i) && i || null;
				_ && (_.focus(), a(null))
			}, t)
		});
		Je(function() {
			if (!r.current || !o.current || !n) {
				a(null);
				return
			}
			a(Au(r.current))
		}, [r, n]), Je(function() {
			return () => {
				c()
			}
		}, [c]), Je(function() {
			n || c()
		}, [n, c])
	},
	xP = P_.join(),
	L4 = (e, {
		mount: t = !0,
		disabled: n = !1,
		autoFocus: r = !0,
		restoreFocus: o = !0,
		timeout: i = 0,
		onClose: a,
		captureEscapeKeyboardEvent: c = !0,
		mutationObserverOptions: d
	}) => {
		const {
			document: f
		} = _n(), m = P.useRef([]), _ = k => {
			const A = m.current[k];
			A && A.focus({
				preventScroll: !0
			})
		};
		wP({
			restoreFocus: o,
			mount: t,
			timeout: i,
			ref: e
		});
		const v = k => {
				const A = k.querySelectorAll(xP),
					C = [];
				A.forEach(y => {
					const {
						display: w,
						visibility: b
					} = getComputedStyle(y);
					w !== "none" && b !== "hidden" && C.push(y)
				}), C.length === 0 && C.push(k), m.current = C
			},
			x = k => {
				const A = [...m.current];
				if (v(k), !(n || !r || _P(A, m.current)) && f) {
					const C = f.activeElement,
						y = Math.max(f.activeElement ? m.current.indexOf(C) : -1, 0);
					_(y)
				}
			};
		gP(e, () => e.current && x(e.current), d), Je(() => {
			e.current && v(e.current)
		}, [e]), Je(function() {
			if (!e.current || !r || n) return;
			const C = setTimeout(() => {
				var w;
				if (!e.current || !m.current.length) return;
				const y = Au(e.current);
				M8(e.current, y) || (r === "root" ? (w = e.current) == null || w.focus() : m.current[0].focus())
			}, i);
			return () => {
				clearTimeout(C)
			}
		}, [r, i, n]), Je(function() {
			if (!e.current) return;
			const A = w => {
					if (n) return;
					switch (Qi(w)) {
						case Ve.TAB: {
							if (!m.current.length) return !1;
							const O = m.current.length - 1,
								L = m.current.findIndex(H => H === w.target),
								$ = L === -1 || L === O && !w.shiftKey;
							if ($ || L === 0 && w.shiftKey) {
								w.preventDefault();
								const H = m.current[$ ? 0 : O];
								return H !== Au(H) && H.focus(), !1
							}
							break
						}
					}
					return !0
				},
				C = w => n ? void 0 : (Qi(w) === Ve.ESCAPE && a && (w.preventDefault(), a()), !0),
				y = rr(e.current).document;
			return y.addEventListener("keydown", A, {
				capture: !0
			}), y.addEventListener("keydown", C, {
				capture: c
			}), () => {
				y.removeEventListener("keydown", A, !0), y.removeEventListener("keydown", C, c)
			}
		}, [a, e, n])
	},
	$d = ({
		Component: e = "div",
		onClose: t,
		autoFocus: n = !0,
		restoreFocus: r = !0,
		disabled: o = !1,
		mount: i = !0,
		timeout: a = 0,
		getRootRef: c,
		children: d,
		captureEscapeKeyboardEvent: f = !0,
		mutationObserverOptions: m = N4,
		..._
	}) => {
		const v = Hn(c);
		return L4(v, {
			autoFocus: n,
			restoreFocus: r,
			disabled: o,
			mount: i,
			timeout: a,
			onClose: t,
			captureEscapeKeyboardEvent: f,
			mutationObserverOptions: m
		}), u.jsx(e, {
			tabIndex: -1,
			ref: v,
			..._,
			children: d
		})
	},
	SP = "_host_eqrnq_1",
	kP = "_hover_eqrnq_25",
	bP = "_active_eqrnq_29",
	f1 = {
		host: SP,
		hover: kP,
		active: bP
	},
	ap = ({
		children: e,
		"aria-label": t,
		...n
	}) => u.jsxs(Wr, {
		baseClassName: f1.host,
		activeMode: f1.active,
		hoverMode: f1.hover,
		...n,
		children: [t && u.jsx(Lr, {
			children: t
		}), e]
	}),
	CP = "_host_sxbvb_1",
	EP = {
		host: CP
	},
	AP = ({
		children: e = "Закрыть",
		className: t,
		...n
	}) => u.jsxs(ap, {
		className: te(EP.host, t),
		...n,
		children: [e && u.jsx(Lr, {
			children: e
		}), u.jsx(Wl, {})]
	}),
	IP = "_host_18fft_1",
	PP = "_desktop_18fft_17",
	OP = "_opening_18fft_21",
	MP = "_closing_18fft_26",
	jP = "_content_18fft_43",
	TP = "_contentWithButton_18fft_49",
	RP = "_action_18fft_54",
	NP = "_actions_18fft_59",
	LP = "_title_18fft_67",
	DP = "_description_18fft_72",
	BP = "_actionsDirectionHorizontal_18fft_81",
	zP = "_actionsDirectionVertical_18fft_85",
	$P = "_actionsAlignLeft_18fft_96",
	FP = "_actionsAlignCenter_18fft_101",
	VP = "_actionsAlignRight_18fft_106",
	HP = "_ios_18fft_115",
	WP = "_actionModeCancel_18fft_254",
	KP = "_actionModeDestructive_18fft_258",
	UP = "_vkcom_18fft_266",
	YP = "_button_18fft_283",
	qP = "_buttonModeCancel_18fft_287",
	GP = "_dismiss_18fft_291",
	ct = {
		host: IP,
		desktop: PP,
		opening: OP,
		closing: MP,
		content: jP,
		contentWithButton: TP,
		action: RP,
		actions: NP,
		title: LP,
		description: DP,
		actionsDirectionHorizontal: BP,
		actionsDirectionVertical: zP,
		actionsAlignLeft: $P,
		actionsAlignCenter: FP,
		actionsAlignRight: VP,
		ios: HP,
		actionModeCancel: WP,
		actionModeDestructive: KP,
		vkcom: UP,
		button: YP,
		buttonModeCancel: qP,
		dismiss: GP
	},
	XP = ({
		mode: e,
		...t
	}) => u.jsx(Wr, {
		Component: t.href ? "a" : "button",
		baseClassName: te(ct.action, e === "destructive" && ct.actionModeDestructive, e === "cancel" && ct.actionModeCancel),
		...t
	}),
	QP = ({
		mode: e,
		...t
	}) => {
		const n = rt();
		let r = "tertiary";
		return n === "vkcom" && (r = e === "cancel" ? "secondary" : "primary"), u.jsx(ka, {
			className: te(ct.button, e === "cancel" && ct.buttonModeCancel),
			mode: r,
			size: "m",
			...t
		})
	},
	ZP = e => rt() === "ios" ? u.jsx(XP, {
		...e
	}) : u.jsx(QP, {
		...e
	}),
	JP = {
		left: ct.actionsAlignLeft,
		center: ct.actionsAlignCenter,
		right: ct.actionsAlignRight
	},
	eO = {
		vertical: ct.actionsDirectionVertical,
		horizontal: ct.actionsDirectionHorizontal
	},
	tO = ({
		actions: e = [],
		renderAction: t = i => u.jsx(ZP, {
			...i
		}),
		onItemClick: n,
		actionsAlign: r,
		actionsLayout: o
	}) => {
		const a = rt() === "vkcom" ? "horizontal" : o;
		return u.jsx("div", {
			className: te(ct.actions, r && JP[r], a && eO[a]),
			children: e.map((c, d) => {
				const {
					title: f,
					action: m,
					autoCloseDisabled: _,
					...v
				} = c;
				return u.jsx(P.Fragment, {
					children: t({
						children: f,
						onClick: () => n(c),
						...v
					})
				}, d)
			})
		})
	},
	nO = e => {
		switch (rt()) {
			case "ios":
				return u.jsx(wa, {
					className: ct.title,
					weight: "1",
					level: "3",
					...e
				});
			default:
				return u.jsx(wa, {
					className: ct.title,
					weight: "2",
					level: "2",
					...e
				})
		}
	},
	rO = e => {
		switch (rt()) {
			case "vkcom":
				return u.jsx(si, {
					className: ct.description,
					...e
				});
			case "ios":
				return u.jsx(Vx, {
					className: ct.description,
					...e
				});
			default:
				return u.jsx(xa, {
					Component: "span",
					className: ct.description,
					weight: "3",
					...e
				})
		}
	},
	oO = ({
		actions: e,
		actionsLayout: t = "horizontal",
		children: n,
		title: r,
		description: o,
		onClose: i,
		dismissLabel: a = "Закрыть предупреждение",
		renderAction: c,
		actionsAlign: d,
		dismissButtonMode: f = "outside",
		dismissButtonTestId: m,
		onClick: _,
		allowClickPropagation: v = !1,
		titleTestId: x,
		descriptionTestId: k,
		closing: A,
		setClosing: C,
		...y
	}) => {
		const w = P.useId(),
			b = `vkui-alert-${w}-title`,
			O = `vkui-alert-${w}-description`,
			L = rt(),
			{
				isDesktop: $
			} = xo(),
			H = P.useRef(Ie),
			[q, ne] = X0(A ? "exit" : "enter", {
				onExited() {
					H.current(), H.current = Ie, i()
				}
			}),
			G = $ && L !== "ios",
			oe = P.useRef(null),
			fe = P.useCallback(() => {
				C == null || C(!0)
			}, [C]),
			me = P.useCallback(J => {
				const {
					action: X,
					autoCloseDisabled: re = !1
				} = J;
				re ? X && X({
					close: fe
				}) : (X && (H.current = X), C == null || C(!0))
			}, [fe, C]),
			Z = v ? _ : J => {
				K0(J), _ == null || _(J)
			};
		return u.jsxs($d, {
			...ne,
			onClick: Z,
			getRootRef: oe,
			onClose: fe,
			autoFocus: q === "entered",
			className: te(ct.host, L === "ios" && ct.ios, L === "vkcom" && ct.vkcom, A ? ct.closing : ct.opening, $ && ct.desktop),
			role: "alertdialog",
			"aria-modal": !0,
			"aria-labelledby": b,
			"aria-describedby": O,
			...y,
			children: [u.jsxs("div", {
				className: te(ct.content, f === "inside" && ct.contentWithButton),
				children: [et(r) && u.jsx(nO, {
					"data-testid": x,
					id: b,
					children: r
				}), et(o) && u.jsx(rO, {
					"data-testid": k,
					id: O,
					children: o
				}), n, G && f === "inside" && u.jsx(sd, {
					label: a,
					className: te(ct.dismiss, "vkuiInternalAlert__dismiss"),
					onClick: fe,
					hoverMode: "opacity",
					activeMode: "opacity",
					"data-testid": m,
					children: u.jsx(Wl, {})
				})]
			}), G && f === "outside" && u.jsx(AP, {
				onClick: fe,
				"data-testid": m,
				children: a
			}), u.jsx(tO, {
				actions: e,
				actionsAlign: d,
				actionsLayout: t,
				renderAction: c,
				onItemClick: me
			})]
		})
	},
	iO = ({
		usePortal: e,
		style: t,
		className: n,
		getRootRef: r,
		...o
	}) => {
		const [i, a] = P.useState(!1), c = P.useCallback(() => {
			a(!0)
		}, []);
		return oc(), u.jsx(cc, {
			usePortal: e,
			children: u.jsx(sp, {
				className: n,
				closing: i,
				style: t,
				onClick: c,
				getRootRef: r,
				strategy: "fixed",
				children: u.jsx(oO, {
					...o,
					closing: i,
					setClosing: a
				})
			})
		})
	},
	D4 = P.createContext({}),
	sO = e => e.type === "click" && e.clientX !== 0 && e.clientY !== 0,
	aO = "_input_lq24v_2",
	lO = {
		input: aO
	},
	cO = u.jsx(jb, {
		IconCompact: Ow,
		IconRegular: jw
	}),
	uO = ({
		children: e = cO,
		getRootRef: t,
		getRef: n,
		className: r,
		style: o,
		...i
	}) => u.jsxs(We, {
		getRootRef: t,
		className: r,
		style: o,
		children: [u.jsx(Lr, {
			Component: "input",
			getRootRef: n,
			type: "radio",
			className: lO.input,
			...i
		}), e]
	}),
	dO = "_host_j0hve_1",
	fO = "_container_j0hve_14",
	hO = "_before_j0hve_15",
	pO = "_after_j0hve_16",
	mO = "_ellipsis_j0hve_32",
	vO = "_content_j0hve_37",
	_O = "_children_j0hve_48",
	gO = "_subtitle_j0hve_54",
	yO = "_meta_j0hve_62",
	wO = "_menu_j0hve_75",
	xO = "_ios_j0hve_80",
	SO = "_modeDestructive_j0hve_86",
	kO = "_rich_j0hve_121",
	bO = "_modeCancel_j0hve_165",
	CO = "_active_j0hve_169",
	EO = "_centered_j0hve_179",
	AO = "_disabled_j0hve_201",
	IO = "_sizeYCompact_j0hve_216",
	Mt = {
		host: dO,
		container: fO,
		before: hO,
		after: pO,
		ellipsis: mO,
		content: vO,
		children: _O,
		subtitle: gO,
		meta: yO,
		menu: wO,
		ios: xO,
		modeDestructive: SO,
		rich: kO,
		modeCancel: bO,
		active: CO,
		centered: EO,
		disabled: AO,
		sizeYCompact: IO
	},
	Oh = ({
		children: e,
		autoCloseDisabled: t = !1,
		mode: n = "default",
		meta: r,
		subtitle: o,
		before: i,
		after: a,
		selectable: c,
		value: d,
		name: f,
		checked: m,
		defaultChecked: _,
		onChange: v,
		onClick: x,
		onImmediateClick: k,
		multiline: A = !1,
		iconChecked: C,
		isCancelItem: y,
		...w
	}) => {
		const b = rt(),
			{
				onItemClick: O = () => Ie,
				mode: L,
				onClose: $
			} = P.useContext(D4),
			{
				sizeY: H
			} = xo(),
			q = c ? "label" : void 0,
			ne = o || r || c,
			G = !ne && !i && b === "ios",
			oe = P.useCallback(Z => {
				var J;
				(J = O({
					action: x,
					immediateAction: k,
					autoClose: !t,
					isCancelItem: !!y
				})) == null || J(Z)
			}, [t, y, x, k, O]),
			fe = P.useCallback(Z => {
				Qi(Z) === Ve.ENTER && ($ == null || $())
			}, [$]),
			me = P.useCallback(Z => {
				c ? sO(Z) && oe(Z) : oe(Z)
			}, [oe, c]);
		return u.jsxs(Wr, {
			...q && {
				Component: q
			},
			...w,
			onClick: me,
			activeMode: b === "ios" ? Mt.active : void 0,
			baseClassName: te(Mt.host, b === "ios" && Mt.ios, n === "cancel" && Mt.modeCancel, n === "destructive" && Mt.modeDestructive, H === "compact" && Mt.sizeYCompact, ne && Mt.rich, L === "menu" && Mt.menu, w.disabled && Mt.disabled),
			onKeyDown: fe,
			children: [i && u.jsx("div", {
				className: Mt.before,
				children: i
			}), u.jsxs("div", {
				className: te(Mt.container, !A && Mt.ellipsis),
				children: [u.jsxs("div", {
					className: te(Mt.content, G && Mt.centered),
					children: [b === "ios" ? u.jsx(wa, {
						className: Mt.children,
						weight: n === "cancel" ? "2" : "3",
						level: G ? "2" : "3",
						children: e
					}) : u.jsx(xa, {
						className: Mt.children,
						children: e
					}), r && u.jsx(xa, {
						className: Mt.meta,
						children: r
					})]
				}), o && u.jsx(Sa, {
					className: Mt.subtitle,
					children: o
				})]
			}), (c || a) && u.jsxs("div", {
				className: Mt.after,
				children: [a, c && u.jsx(uO, {
					name: f,
					value: d,
					onChange: v,
					defaultChecked: _,
					checked: m,
					disabled: w.disabled,
					children: C
				})]
			})]
		})
	},
	PO = ({
		children: e = "Отмена",
		...t
	}) => u.jsx(Oh, {
		mode: "cancel",
		isCancelItem: !0,
		...t,
		children: e
	});
var $i, Zl;
class OO {
	constructor(t, n, r) {
		qe(this, "callback", Ie);
		qe(this, "options");
		qe(this, "eventType");
		$e(this, $i, null);
		$e(this, Zl, t => {
			this.callback(t)
		});
		qe(this, "add", t => {
			Fn && (this.remove(), t && (t.addEventListener(this.eventType, Q(this, Zl), this.options), je(this, $i, t)))
		});
		qe(this, "remove", () => {
			!Fn || !Q(this, $i) || (Q(this, $i).removeEventListener(this.eventType, Q(this, Zl), this.options), je(this, $i, null))
		});
		this.options = r, this.eventType = t, n && (this.callback = n)
	}
}
$i = new WeakMap, Zl = new WeakMap;

function MO(e, t, n) {
	const r = P.useRef(null);
	return r.current === null ? r.current = new OO(e, t, n) : (r.current.eventType = e, r.current.options = n, t && (r.current.callback = t)), P.useEffect(() => {
		var i;
		return (i = r.current) == null ? void 0 : i.remove.bind(r.current)
	}, []), r.current
}

function jO(e, t) {
	const n = P.useRef(e == null ? void 0 : e.referenceHidden);
	P.useEffect(() => {
		n.current = e == null ? void 0 : e.referenceHidden
	}), Je(function() {
		t && (e == null ? void 0 : e.referenceHidden) !== n.current && t((e == null ? void 0 : e.referenceHidden) || !1)
	}, [e == null ? void 0 : e.referenceHidden, t])
}
const rv = 20,
	B4 = 8,
	TO = 10,
	RO = 1,
	ov = B4 + RO,
	z4 = e => u.jsx("svg", {
		width: rv,
		height: ov,
		viewBox: `0 0 ${rv} ${ov}`,
		xmlns: "http://www.w3.org/2000/svg",
		...e,
		children: u.jsx("path", {
			d: "M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z",
			fill: "currentColor"
		})
	}),
	NO = "_host_sqlyh_1",
	LO = "_placementRight_sqlyh_13",
	DO = "_placementBottom_sqlyh_18",
	BO = "_placementLeft_sqlyh_22",
	Cl = {
		host: NO,
		in: "_in_sqlyh_5",
		placementRight: LO,
		placementBottom: DO,
		placementLeft: BO
	},
	zO = {
		right: Cl.placementRight,
		bottom: Cl.placementBottom,
		left: Cl.placementLeft
	},
	$O = ({
		offset: e,
		isStaticOffset: t,
		coords: n,
		iconStyle: r,
		iconClassName: o,
		placement: i = "bottom",
		Icon: a = z4,
		...c
	}) => {
		const [d, f] = FO(i, n, e, t);
		return u.jsx(We, {
			baseStyle: f,
			baseClassName: te(Cl.host, d && zO[d]),
			...c,
			children: u.jsx(a, {
				className: te(Cl.in, o),
				style: r
			})
		})
	};

function FO(e, t = {
	x: 0,
	y: 0
}, n = 0, r = !1) {
	const o = i => {
		const a = {
			x: t.x || 0,
			y: t.y || 0
		};
		return i ? r ? n : a.y + n : r ? n : a.x + n
	};
	return e.startsWith("top") ? ["bottom", {
		top: "100%",
		[iv(e, r)]: o(!1)
	}] : e.startsWith("right") ? ["left", {
		[sv(e, r)]: o(!0),
		left: 0
	}] : e.startsWith("bottom") ? [void 0, {
		bottom: "100%",
		[iv(e, r)]: o(!1)
	}] : ["right", {
		[sv(e, r)]: o(!0),
		right: 0
	}]
}

function iv(e, t) {
	return e.endsWith("end") && t ? "right" : "left"
}

function sv(e, t) {
	return e.endsWith("end") && t ? "bottom" : "top"
}
const VO = "_host_4xycg_14",
	HO = {
		host: VO
	},
	WO = ({
		placement: e = "bottom-start",
		sameWidth: t,
		hideWhenReferenceHidden: n,
		offsetByMainAxis: r = 8,
		offsetByCrossAxis: o = 0,
		arrow: i,
		arrowHeight: a = B4,
		arrowPadding: c = TO,
		customMiddlewares: d,
		disableFlipMiddleware: f = !1,
		disableShiftMiddleware: m = !1,
		flipMiddlewareFallbackAxisSideDirection: _,
		overflowPadding: v,
		autoUpdateOnTargetResize: x = !1,
		autoUpdateOnAnimationFrame: k = !1,
		strategy: A,
		arrowProps: C,
		ArrowIcon: y = z4,
		targetRef: w,
		getRootRef: b,
		children: O,
		usePortal: L = !0,
		onPlacementChange: $,
		onReferenceHiddenChange: H,
		zIndex: q,
		style: ne,
		...G
	}) => {
		const [oe, fe] = P.useState(null), {
			strictPlacement: me,
			middlewares: Z
		} = YC({
			placement: e,
			sameWidth: t,
			arrow: i,
			arrowRef: oe,
			arrowHeight: a,
			arrowPadding: c,
			offsetByMainAxis: r,
			offsetByCrossAxis: o,
			hideWhenReferenceHidden: n,
			customMiddlewares: d,
			disableFlipMiddleware: f,
			disableShiftMiddleware: m,
			flipMiddlewareFallbackAxisSideDirection: _,
			overflowPadding: v
		}), {
			x: J,
			y: X,
			strategy: re,
			placement: z,
			refs: W,
			middlewareData: K
		} = LC({
			placement: me,
			strategy: A,
			middleware: Z,
			whileElementsMounted(...Re) {
				return UC(...Re, {
					elementResize: x,
					animationFrame: k
				})
			}
		});
		qC(e, z, $), jO(K.hide, H);
		const {
			arrow: ie
		} = K, le = Hn(W.setFloating, b);
		Je(() => {
			W.setReference("current" in w ? w.current : w)
		}, [W.setReference, w]);
		const _e = typeof q < "u" ? {
				zIndex: q
			} : void 0,
			Ee = u.jsxs(We, {
				...G,
				style: fo(_e, ne),
				baseClassName: HO.host,
				getRootRef: le,
				baseStyle: Wb({
					strategy: re,
					x: J,
					y: X,
					initialWidth: t ? null : void 0,
					middlewareData: K
				}),
				children: [i && u.jsx($O, {
					...C,
					coords: ie,
					placement: z,
					getRootRef: fe,
					Icon: y
				}), O]
			});
		return u.jsx(cc, {
			usePortal: L,
			children: Ee
		})
	},
	KO = "_host_5vl6k_1",
	UO = "_contentWrapper_5vl6k_18",
	YO = "_header_5vl6k_27",
	qO = "_opening_5vl6k_33",
	GO = "_closing_5vl6k_38",
	XO = "_title_5vl6k_44",
	QO = "_description_5vl6k_44",
	ZO = "_ios_5vl6k_53",
	JO = "_closeItemWrapperIos_5vl6k_63",
	eM = "_sizeYCompact_5vl6k_102",
	tM = "_menu_5vl6k_110",
	on = {
		host: KO,
		contentWrapper: UO,
		header: YO,
		opening: qO,
		closing: GO,
		title: XO,
		description: QO,
		ios: ZO,
		closeItemWrapperIos: JO,
		sizeYCompact: eM,
		menu: tM
	},
	nM = ({
		children: e,
		toggleRef: t,
		closing: n,
		onClose: r,
		className: o,
		style: i,
		popupOffsetDistance: a = 0,
		placement: c,
		onAnimationStart: d,
		onAnimationEnd: f,
		allowClickPropagation: m = !1,
		onClick: _,
		...v
	}) => {
		const {
			document: x
		} = _n(), k = rt(), {
			sizeY: A
		} = xo(), C = P.useRef(null), y = MO("click", O => {
			const L = C == null ? void 0 : C.current;
			L && !L.contains(O.target) && (r == null || r())
		});
		P.useEffect(() => {
			setTimeout(() => {
				y.add(x.body)
			})
		}, [y, x]);
		const w = P.useMemo(() => Iu(t) ? t : {
				current: t
			}, [t]),
			b = m ? _ : O => {
				K0(O), _ == null || _(O)
			};
		return u.jsx(WO, {
			targetRef: w,
			offsetByMainAxis: a,
			placement: c,
			className: te(on.host, k === "ios" && on.ios, on.menu, n ? on.closing : on.opening, A === "compact" && on.sizeYCompact, o),
			style: i,
			getRootRef: C,
			usePortal: !1,
			onAnimationStart: d,
			onAnimationEnd: f,
			children: u.jsx($d, {
				onClose: r,
				...v,
				onClick: b,
				children: e
			})
		})
	},
	rM = ({
		children: e,
		closing: t,
		toggleRef: n,
		className: r,
		onClick: o,
		allowClickPropagation: i = !1,
		...a
	}) => {
		const {
			sizeY: c
		} = xo(), d = rt(), f = i ? o : m => {
			K0(m), o == null || o(m)
		};
		return u.jsx($d, {
			...a,
			onClick: f,
			className: te(on.host, d === "ios" && on.ios, t ? on.closing : on.opening, c === "compact" && on.sizeYCompact, r),
			children: e
		})
	},
	oM = ({
		children: e,
		className: t,
		title: n,
		description: r,
		style: o,
		iosCloseItem: i,
		popupOffsetDistance: a,
		placement: c,
		mode: d,
		onClose: f,
		...m
	}) => {
		const _ = rt(),
			[v, x] = P.useState(void 0),
			k = P.useCallback(() => x("other"), []),
			A = P.useRef(Ie),
			[C, y] = X0(v !== void 0 ? "exit" : "enter", {
				onExited() {
					f({
						closedBy: v || "other"
					}), A.current(), A.current = Ie
				}
			}),
			{
				isDesktop: w
			} = xo(),
			b = d ?? (w ? "menu" : "sheet");
		oc(b === "sheet");
		const O = P.useCallback(({
				action: ne,
				immediateAction: G,
				autoClose: oe,
				isCancelItem: fe
			}) => me => {
				me.persist(), G && G(me), oe ? (ne && (A.current = () => ne(me)), x(fe ? "cancel-item" : "action-item")) : ne && ne(me)
			}, []),
			L = P.useMemo(() => ({
				onItemClick: O,
				mode: b,
				onClose: k
			}), [b, k, O]),
			$ = b === "menu" ? nM : rM,
			H = b === "menu" ? Object.assign(m, {
				popupOffsetDistance: a,
				placement: c
			}) : m,
			q = u.jsx(D4.Provider, {
				value: L,
				children: u.jsxs($, {
					closing: !!v,
					role: "dialog",
					"aria-modal": "true",
					autoFocus: C === "entered",
					...H,
					...y,
					onClose: k,
					className: b === "menu" ? t : void 0,
					style: b === "menu" ? o : void 0,
					children: [u.jsxs("div", {
						className: on.contentWrapper,
						children: [(n || r) && u.jsxs("div", {
							className: on.header,
							children: [n && u.jsx(si, {
								weight: "2",
								className: on.title,
								children: n
							}), r && u.jsx(si, {
								className: on.description,
								children: r
							})]
						}), e]
					}), _ === "ios" && b === "sheet" && u.jsx("div", {
						className: on.closeItemWrapperIos,
						children: i ?? u.jsx(PO, {})
					})]
				})
			});
		return u.jsx(cc, {
			children: u.jsx(sp, {
				noBackground: b === "menu",
				closing: !!v,
				alignY: "bottom",
				className: t,
				style: o,
				onClick: k,
				strategy: "fixed",
				children: q
			})
		})
	},
	lp = P.createContext({
		state: "loading",
		label: void 0,
		customIcon: void 0
	}),
	iM = "_host_104fm_1",
	sM = "_hasLabel_104fm_12",
	aM = "_modeShadow_104fm_26",
	lM = "_modeOverlay_104fm_32",
	cM = "_label_104fm_37",
	uM = "_spinner_104fm_48",
	dM = "_spinnerTransition_104fm_52",
	fM = "_stateDone_104fm_56",
	hM = "_stateError_104fm_57",
	pM = "_stateCustom_104fm_58",
	mM = "_iconSlot_104fm_62",
	vM = "_icon_104fm_62",
	_M = "_stateCancelable_104fm_81",
	Cn = {
		host: iM,
		hasLabel: sM,
		modeShadow: aM,
		modeOverlay: lM,
		label: cM,
		spinner: uM,
		spinnerTransition: dM,
		stateDone: fM,
		stateError: hM,
		stateCustom: pM,
		iconSlot: mM,
		icon: vM,
		stateCancelable: _M
	},
	gM = {
		cancelable: Cn.stateCancelable,
		done: Cn.stateDone,
		error: Cn.stateError,
		custom: Cn.stateCustom
	},
	yM = {
		shadow: Cn.modeShadow,
		overlay: Cn.modeOverlay
	},
	$4 = ({
		state: e = "loading",
		mode: t = "shadow",
		customIcon: n,
		label: r,
		children: o,
		visibilityDelay: i,
		...a
	}) => u.jsx(lp.Provider, {
		value: {
			state: e,
			label: r,
			customIcon: n
		},
		children: u.jsxs(We, {
			baseClassName: te(Cn.host, yM[t], e !== "loading" && gM[e], et(r) && Cn.hasLabel, i && m4.visibilityDelay),
			...a,
			children: [u.jsx("div", {
				className: Cn.iconSlot,
				children: o
			}), et(r) && u.jsx(si, {
				className: Cn.label,
				"aria-hidden": !0,
				children: r
			})]
		})
	}),
	F4 = ({
		children: e,
		...t
	}) => {
		const {
			label: n
		} = P.useContext(lp), r = e ?? n;
		return u.jsx(od, {
			className: te(Cn.spinner, !n && Cn.spinnerTransition),
			size: "xl",
			noColor: !0,
			...t,
			children: r
		})
	},
	wM = e => u.jsx("svg", {
		className: "vkuiIcon",
		width: "48",
		height: "48",
		viewBox: "0 0 48 48",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M40 24c0 8.837-7.163 16-16 16S8 32.837 8 24 15.163 8 24 8s16 7.163 16 16Zm-10.08-4.33a1.125 1.125 0 0 0-1.59-1.59L24 22.409l-4.33-4.33a1.125 1.125 0 0 0-1.59 0l-.101.116a1.125 1.125 0 0 0 .1 1.476L22.41 24l-4.33 4.33a1.125 1.125 0 0 0 1.591 1.59L24 25.591l4.33 4.33c.439.439 1.151.439 1.59 0l.101-.116a1.125 1.125 0 0 0-.1-1.476L25.59 24l4.33-4.33Z",
			fill: "currentColor"
		})
	}),
	xM = e => u.jsx("svg", {
		className: "vkuiIcon",
		width: "48",
		height: "48",
		viewBox: "0 0 48 48",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...e,
		children: u.jsx("path", {
			d: "M9 24L19 34L39 14",
			stroke: "currentColor",
			strokeWidth: "3.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	}),
	SM = ({
		onKeyDown: e,
		"aria-label": t = "Отменить",
		...n
	}) => {
		let o = {
			...jd({
				onKeyDown: U0
			}, {
				onKeyDown: e
			}),
			tabIndex: 0,
			role: "button",
			"aria-label": t
		};
		return u.jsx(We, {
			baseClassName: Cn.icon,
			...o,
			...n,
			children: u.jsx(Mw, {})
		})
	},
	V4 = ({
		cancelLabel: e,
		...t
	}) => {
		const {
			state: n,
			customIcon: r
		} = P.useContext(lp);
		if (n === "cancelable") return u.jsx(SM, {
			"aria-label": e,
			...t
		});
		const o = () => {
			if (n === "custom") return r;
			const i = {
				loading: () => null,
				done: xM,
				error: wM
			} [n];
			return u.jsx(i, {})
		};
		return u.jsx(We, {
			baseClassName: Cn.icon,
			...t,
			children: o()
		})
	},
	Fd = ({
		style: e,
		className: t,
		state: n = "loading",
		onClick: r,
		cancelLabel: o,
		mode: i,
		label: a,
		customIcon: c,
		usePortal: d,
		visibilityDelay: f,
		...m
	}) => (oc(), u.jsx(cc, {
		usePortal: d,
		children: u.jsx(sp, {
			className: t,
			style: e,
			noBackground: !0,
			strategy: "fixed",
			children: u.jsxs($4, {
				state: n,
				mode: i,
				label: a,
				customIcon: c,
				visibilityDelay: f,
				children: [u.jsx(F4, {
					...m
				}), u.jsx(V4, {
					onClick: r,
					cancelLabel: o
				})]
			})
		})
	}));
Fd.Container = $4;
Fd.Loader = F4;
Fd.SwapIcon = V4;
const av = {
		passive: !0,
		capture: !0
	},
	kM = (e, t) => {
		const {
			document: n
		} = _n();
		Je(() => {
			if (!n || !e || !t) return;
			const r = o => {
				Qi(o) === Ve.ESCAPE && t(o)
			};
			return n.addEventListener("keydown", r, av), () => {
				n.removeEventListener("keydown", r, av)
			}
		}, [e, n, t])
	},
	bM = "_body_5s4cl_1",
	CM = "_sizeYRegular_5s4cl_21",
	EM = "_sizeYNone_5s4cl_33",
	AM = "_modeDark_5s4cl_45",
	IM = "_before_5s4cl_49",
	PM = "_after_5s4cl_54",
	OM = "_content_5s4cl_59",
	MM = "_contentText_5s4cl_66",
	jM = "_contentSubtitle_5s4cl_76",
	TM = "_layoutHorizontal_5s4cl_88",
	RM = "_action_5s4cl_88",
	NM = "_layoutVertical_5s4cl_94",
	LM = "_layoutNone_5s4cl_108",
	Rn = {
		body: bM,
		sizeYRegular: CM,
		sizeYNone: EM,
		modeDark: AM,
		before: IM,
		after: PM,
		content: OM,
		contentText: MM,
		contentSubtitle: jM,
		layoutHorizontal: TM,
		action: RM,
		layoutVertical: NM,
		layoutNone: LM
	},
	DM = {
		none: Rn.layoutNone,
		vertical: Rn.layoutVertical,
		horizontal: Rn.layoutHorizontal
	},
	BM = {
		none: Rn.sizeYNone,
		regular: Rn.sizeYRegular
	};

function H4({
	layout: e,
	action: t,
	after: n,
	before: r,
	mode: o,
	subtitle: i,
	children: a,
	...c
}) {
	const {
		sizeY: d = "none"
	} = Et(), f = n || i ? "vertical" : "none";
	return u.jsxs(We, {
		...c,
		baseClassName: te(Rn.body, DM[e || f], d !== "compact" && BM[d], o === "dark" && Rn.modeDark),
		children: [r && u.jsx("div", {
			className: Rn.before,
			children: r
		}), u.jsxs("div", {
			className: Rn.content,
			children: [u.jsx(Sx, {
				className: Rn.contentText,
				children: a
			}), i && !t && u.jsx(Sa, {
				className: Rn.contentSubtitle,
				children: i
			}), t && !i && u.jsx("div", {
				className: Rn.action,
				children: t
			})]
		}), n && u.jsx("div", {
			className: Rn.after,
			children: n
		})]
	})
}

function zM(e, t) {
	if (t !== void 0) switch (e) {
		case "top-start":
		case "top":
		case "top-end":
			return {
				top: t
			};
		case "bottom-start":
		case "bottom":
		case "bottom-end":
			return {
				bottom: t
			}
	}
}

function Po(e, t) {
	return t ? -1 * e : e
}

function $M(e, t, n) {
	return {
		shifted: !1,
		direction: null,
		isDesktop: n.smallTabletPlus.matches,
		x: 0,
		y: 0,
		width: e,
		height: t
	}
}

function FM(e, t, n, r = !1) {
	if (t.isDesktop) e.endsWith("start") ? t.x = r ? Ti(n.x, 0, t.width) : Ti(n.x, -t.width, 0) : e.endsWith("end") && (t.x = r ? Ti(n.x, -t.width, 0) : Ti(n.x, 0, t.width)), e.startsWith("bottom") && (t.y = Ti(n.y, 0, t.height));
	else if (e.startsWith("bottom")) {
		t.x = n.x;
		const o = n.x < 0 ? -1 : null,
			i = n.x > 0 ? 1 : null;
		t.direction = o || i
	}
	return e.startsWith("top") && (t.y = Ti(n.y, -t.height, 0)), t.shifted = !0, t
}
const ks = 200;

function VM(e, t, n, r, o = !1) {
	if (!t.shifted) return !1;
	const i = {
			x: !1,
			y: !1
		},
		a = {
			x: !1,
			y: !1
		};
	return t.isDesktop ? (e.endsWith("start") ? (i.x = Po(n.x, o) < -n.width / 2, a.x = Po(n.x, o) < 0 ? Po(r.x, o) < Po(-ks, o) : !1) : e.endsWith("end") && (i.x = Po(n.x, o) > n.width / 2, a.x = Po(n.x, o) > 0 ? Po(r.x, o) > Po(ks, o) : !1), e.startsWith("bottom") && (i.y = n.y > n.height / 2, a.y = n.y > 0 ? r.y > ks : !1)) : e.startsWith("bottom") && (i.x = n.x < -n.width / 2 || n.x > n.width / 2, a.x = n.x < 0 && r.x < -ks || n.x > 0 && r.x > ks), e.startsWith("top") && (i.y = n.y < -n.height / 2, a.y = n.y < 0 ? r.y < -ks : !1), i.x || a.x || i.y || a.y
}
const HM = "_host_q5svo_1",
	WM = "_ios_q5svo_21",
	KM = "_rtl_q5svo_25",
	UM = "_placementTopStart_q5svo_29",
	YM = "_placementTop_q5svo_29",
	qM = "_placementTopEnd_q5svo_31",
	GM = "_placementBottomStart_q5svo_38",
	XM = "_placementBottomEnd_q5svo_45",
	QM = "_placementBottom_q5svo_38",
	ZM = "_stateEnter_q5svo_156",
	JM = "_stateEntering_q5svo_157",
	ej = "_stateEntered_q5svo_168",
	tj = "_touched_q5svo_174",
	nj = "_stateExit_q5svo_178",
	rj = "_stateExiting_q5svo_179",
	sn = {
		host: HM,
		ios: WM,
		rtl: KM,
		placementTopStart: UM,
		placementTop: YM,
		placementTopEnd: qM,
		placementBottomStart: GM,
		placementBottomEnd: XM,
		placementBottom: QM,
		in: "_in_q5svo_120",
		stateEnter: ZM,
		stateEntering: JM,
		stateEntered: ej,
		touched: tj,
		stateExit: nj,
		stateExiting: rj
	},
	oj = {
		"top-start": sn.placementTopStart,
		top: sn.placementTop,
		"top-end": sn.placementTopEnd,
		"bottom-start": sn.placementBottomStart,
		bottom: sn.placementBottom,
		"bottom-end": sn.placementBottomEnd
	},
	ij = {
		enter: sn.stateEnter,
		entering: sn.stateEntering,
		entered: sn.stateEntered,
		exit: sn.stateExit,
		exiting: sn.stateExiting,
		exited: void 0
	},
	W4 = ({
		placement: e = "bottom-start",
		children: t,
		layout: n,
		action: r,
		before: o,
		after: i,
		duration: a = 4e3,
		onActionClick: c,
		onClose: d,
		mode: f = "default",
		subtitle: m,
		offsetY: _,
		getRootRef: v,
		slotProps: x,
		...k
	}) => {
		const {
			getRootRef: A,
			...C
		} = Kl({
			getRootRef: v,
			...k
		}, x == null ? void 0 : x.root), {
			onClick: y,
			...w
		} = Kl({
			onClick: c
		}, x == null ? void 0 : x.action), b = rt(), [O, L] = P.useState(!0), [$, H] = P.useState(!1), ne = T4() === "rtl", G = Hn(A), oe = c4(G), fe = P.useRef(null), me = P.useRef(null), Z = P.useRef(null), J = P.useRef(null), X = P.useRef(void 0), re = ip(), [z, W] = X0(O ? "enter" : "exit", {
			onExited: d
		}), K = P.useCallback(() => {
			J.current !== null && (cancelAnimationFrame(J.current), J.current = null)
		}, []), ie = P.useCallback((Ae, Le, Ue) => {
			J.current = requestAnimationFrame(() => {
				G.current && (Ae === null ? G.current.style.removeProperty("--vkui_internal--snackbar_shift_x") : G.current.style.setProperty("--vkui_internal--snackbar_shift_x", `${Ae}px`), Le === null ? G.current.style.removeProperty("--vkui_internal--snackbar_shift_y") : G.current.style.setProperty("--vkui_internal--snackbar_shift_y", `${Le}px`), Ue === null ? G.current.style.removeProperty("--vkui_internal--snackbar_direction") : G.current.style.setProperty("--vkui_internal--snackbar_direction", `${Ue}`))
			})
		}, [G]), le = P.useCallback(() => {
			L(!1)
		}, []), _e = Ae => {
			le(), r && (y == null || y(Ae))
		}, Ee = Ae => {
			me.current = new g4, me.current.setStartCoords(Ae.nativeEvent), Z.current = $M(G.current.offsetWidth, G.current.offsetHeight, re), H(!0)
		}, Re = Ae => {
			Z.current && me.current && (me.current.setInitialTimeOnce(), me.current.setEndCoords(Ae.nativeEvent), Z.current = FM(e, Z.current, me.current.delta(), ne), Z.current.shifted && ie(Z.current.x, Z.current.y, Z.current.direction))
		}, Oe = () => {
			$ && Z.current && me.current && VM(e, Z.current, P8(G.current, fe.current), me.current.velocity(), ne) && le(), H(!1)
		};
		return Je(function() {
			if (!(!O || oe || $ || z !== "entered")) return X.current = setTimeout(le, a),
				function() {
					clearTimeout(X.current)
				}
		}, [O, oe, $, z, le, a]), Je(function() {
			$ || (K(), Z.current = null, me.current = null, O && ie(null, null, null))
		}, [$, O, ie, K]), P.useEffect(() => K, [K]), kM(O, le), z === "exited" ? null : u.jsx(We, {
			role: "presentation",
			baseClassName: te(sn.host, b === "ios" && sn.ios, $ && sn.touched, oj[e], ij[z], ne && sn.rtl),
			baseStyle: zM(e, _),
			getRootRef: G,
			...C,
			children: u.jsx("div", {
				role: "alert",
				className: sn.in,
				ref: fe,
				onTouchStart: Ee,
				onTouchMove: Re,
				onTouchEnd: Oe,
				onMouseDown: Ee,
				onMouseMove: Re,
				onMouseUp: Oe,
				onMouseLeave: Oe,
				...W,
				children: u.jsx(H4, {
					mode: f,
					layout: n,
					before: o,
					after: i,
					subtitle: m,
					action: r && u.jsx(ka, {
						align: "left",
						mode: "link",
						appearance: f === "dark" ? "overlay" : "accent",
						size: "s",
						onClick: _e,
						...w,
						children: r
					}),
					children: t
				})
			})
		})
	};
W4.Basic = H4;
const sj = "_host_1bfvr_1",
	aj = "_nonInteractive_1bfvr_12",
	lj = "_hostPositionAbsolute_1bfvr_17",
	cj = "_hostPositionFixed_1bfvr_21",
	uj = "_hostStateEnter_1bfvr_26",
	dj = "_hostStateEntering_1bfvr_31",
	fj = "_hostStateEntered_1bfvr_35",
	hj = "_hostStateExit_1bfvr_39",
	pj = "_hostStateExiting_1bfvr_44",
	mj = "_hostStateExited_1bfvr_48",
	jn = {
		host: sj,
		nonInteractive: aj,
		hostPositionAbsolute: lj,
		hostPositionFixed: cj,
		hostStateEnter: uj,
		hostStateEntering: dj,
		hostStateEntered: fj,
		hostStateExit: hj,
		hostStateExiting: pj,
		hostStateExited: mj
	},
	vj = {
		absolute: jn.hostPositionAbsolute,
		fixed: jn.hostPositionFixed
	},
	_j = {
		appear: jn.hostStateEnter,
		appearing: jn.hostStateEntering,
		appeared: jn.hostStateEntered,
		enter: jn.hostStateEnter,
		entering: jn.hostStateEntering,
		entered: jn.hostStateEntered,
		exit: jn.hostStateExit,
		exiting: jn.hostStateExiting,
		exited: jn.hostStateExited
	},
	Vd = ({
		visible: e = !1,
		position: t = "absolute",
		getRootRef: n,
		onClick: r,
		disableOpenAnimation: o,
		disableCloseAnimation: i,
		...a
	}) => {
		const [c, {
			ref: d,
			onTransitionEnd: f
		}] = Z0(e, {
			enableAppear: !o,
			enableEnter: !o,
			enableExit: !i
		}), m = Hn(n, d);
		return u.jsx("div", {
			...a,
			ref: m,
			"aria-hidden": "true",
			hidden: c === "exited",
			className: te(jn.host, r === void 0 && jn.nonInteractive, vj[t], _j[c]),
			onClick: r,
			onTransitionEnd: f
		})
	},
	K4 = P.createContext({
		current: null
	}),
	U4 = P.createContext({
		updateModalHeight: Ie,
		registerModal: Ie,
		isInsideModal: !1
	}),
	gj = ({
		activeModal: e,
		children: t,
		modalOverlayTestId: n,
		noFocusToDialog: r,
		disableModalOverlay: o,
		usePortal: i,
		onOpen: a,
		onOpened: c,
		onClose: d,
		onClosed: f
	}) => {
		const m = P.useMemo(() => ({
				isInsideModal: !0,
				activeModal: e,
				modalOverlayTestId: n,
				noFocusToDialog: r,
				disableModalOverlay: o,
				onOpen: a,
				onOpened: c,
				onClose: d,
				onClosed: f,
				updateModalHeight: Ie,
				registerModal: Ie
			}), [e, o, n, r, d, f, a, c]),
			_ = P.useRef(null);
		return u.jsx(cc, {
			usePortal: i,
			children: u.jsx(U4.Provider, {
				value: m,
				children: u.jsxs(K4.Provider, {
					value: _,
					children: [!o && u.jsx(Vd, {
						position: "fixed",
						visible: typeof e == "string",
						getRootRef: _
					}), t]
				})
			})
		})
	},
	yj = "_host_ztjfl_1",
	wj = "_scrollbarHidden_ztjfl_14",
	xj = "_overscrollBehaviorContain_ztjfl_60",
	Sj = "_overscrollBehaviorNone_ztjfl_64",
	kj = "_scrollBehaviorSmooth_ztjfl_68",
	bj = "_horizontalScrollEnabled_ztjfl_72",
	ea = {
		host: yj,
		scrollbarHidden: wj,
		overscrollBehaviorContain: xj,
		overscrollBehaviorNone: Sj,
		scrollBehaviorSmooth: kj,
		horizontalScrollEnabled: bj
	},
	Cj = {
		auto: void 0,
		contain: ea.overscrollBehaviorContain,
		none: ea.overscrollBehaviorNone
	},
	Ej = {
		auto: void 0,
		smooth: ea.scrollBehaviorSmooth
	},
	Aj = ({
		className: e,
		children: t,
		enableHorizontalScroll: n = !1,
		onScroll: r,
		getRootRef: o,
		overscrollBehavior: i = "auto",
		scrollBehavior: a = "auto",
		scrollbarHidden: c = !1,
		...d
	}) => u.jsx("div", {
		className: te(e, ea.host, n && ea.horizontalScrollEnabled, Cj[i], Ej[a], c && ea.scrollbarHidden),
		ref: o,
		onScroll: r,
		...d,
		children: t
	}),
	Ij = "_host_1eoj5_1",
	Pj = {
		host: Ij
	},
	Oj = ({
		children: e,
		className: t,
		getRootRef: n,
		...r
	}) => u.jsx(Aj, {
		className: te(t, Pj.host),
		getRootRef: n,
		...r,
		children: e
	});

function Mj(e, t, n) {
	return e >= t && e <= n
}
const Y4 = "data-vkui-block-sheet-behavior",
	jj = {
		[Y4]: !0
	},
	lv = {
		DISTANCE_FOR_MOVING_START: 12,
		VELOCITY: 500
	},
	h1 = {
		LOWER: 25,
		HIGHEST: 90
	},
	jr = {
		MIN: 0,
		LARGE: 100
	},
	p1 = {
		IDLE_POINT_VALUE: 0,
		COMPUTED_INDEX: 1
	};
class $s {
	constructor(t, {
		sheetScrollEl: n,
		sheetTransitionController: r,
		backdropTransitionController: o,
		onSnapPointChange: i,
		onDismiss: a
	}) {
		qe(this, "sheetEl");
		qe(this, "isInitialized", !1);
		qe(this, "panState", "idle");
		qe(this, "pannedEl", null);
		qe(this, "sheetHeight", 0);
		qe(this, "rafId", null);
		qe(this, "currentSnapPoint", 0);
		qe(this, "nextSnapPoint", 0);
		qe(this, "snapPointDetents", [0, 0]);
		qe(this, "unit", "%");
		qe(this, "disableVerticalScrollBouncingDispose", Ie);
		qe(this, "sheetScrollEl");
		qe(this, "sheetTransitionController");
		qe(this, "backdropTransitionController");
		qe(this, "panGestureRecognizer");
		qe(this, "onSnapPointChange");
		qe(this, "onDismiss");
		this.sheetEl = t, this.onSnapPointChange = i, this.onDismiss = a, this.panGestureRecognizer = new g4, this.sheetScrollEl = n, this.sheetTransitionController = r, this.backdropTransitionController = o
	}
	init(t) {
		this.isInitialized = !0, t === "auto" ? (this.unit = "px", this.currentSnapPoint = p1.IDLE_POINT_VALUE, this.snapPointDetents = [jr.MIN, p1.IDLE_POINT_VALUE]) : (this.unit = "%", this.currentSnapPoint = t.initial, this.snapPointDetents = t.detents)
	}
	destroy() {
		var t;
		this.isInitialized = !1, this.pannedEl = null, this.sheetTransitionController.cleanup(), (t = this.backdropTransitionController) == null || t.cleanup(), this.disableVerticalScrollBouncingDispose(), this.disableVerticalScrollBouncingDispose = Ie
	}
	panStart(t) {
		!this.isInitialized || this.panState !== "idle" || R8(t.target) || (this.panState = "start", this.pannedEl = t.target, this.panGestureRecognizer.setStartCoords(t))
	}
	panMove(t) {
		switch (this.panState) {
			case "start":
				if (this.panGestureRecognizer.setInitialTimeOnce(), this.panGestureRecognizer.setEndCoords(t), this.preventUntilPanGestureBecomesExpected()) return;
				if (this.preventImmediatelyIfPannedElIsNotValid()) {
					this.panState = "idle";
					return
				}
				if (this.preventUntilVerticalScrollingOnSheetScrollElBecomesExpected()) return;
				if (this.preventImmediatelyIfVerticalScrollingOnPannedElIsScrolled()) {
					this.panState = "idle";
					return
				}
				this.panState = "moving", this.panGestureRecognizer.setStartCoords(t), this.sheetHeight = this.sheetEl.offsetHeight, this.disableVerticalScrollBouncingDispose = $s.disableVerticalScrollBouncingIfNeeded(this.sheetScrollEl, this.pannedEl), this.isDynamicSnapPoint && (this.currentSnapPoint = this.sheetHeight, this.snapPointDetents[p1.COMPUTED_INDEX] = this.sheetHeight);
				break;
			case "moving":
				this.panGestureRecognizer.setEndCoords(t);
				const {
					y1: n, y2: r
				} = this.panGestureRecognizer;
				this.nextSnapPoint = Ti(this.currentSnapPoint - (r - n) / this.sheetHeight * this.currentSnapPoint, jr.MIN, this.isDynamicSnapPoint ? this.sheetHeight : jr.LARGE), this.calculateSnapPoint(this.nextSnapPoint, !0);
				break
		}
	}
	panEnd() {
		switch (this.panState) {
			case "moving":
				const t = this.currentSnapPoint;
				this.currentSnapPoint = this.getSnapPointTo(this.nextSnapPoint), t !== this.currentSnapPoint && this.currentSnapPoint > jr.MIN && this.onSnapPointChange(this.currentSnapPoint), this.calculateSnapPoint(this.currentSnapPoint);
				break
		}
		this.panState = "idle", this.panGestureRecognizer.reset(), this.disableVerticalScrollBouncingDispose(), this.disableVerticalScrollBouncingDispose = Ie
	}
	get isDynamicSnapPoint() {
		return this.unit === "px"
	}
	calculateSnapPoint(t, n = !1) {
		var o;
		if (this.rafId !== null && cancelAnimationFrame(this.rafId), t <= jr.MIN) {
			this.sheetTransitionController.enableTransition(), (o = this.backdropTransitionController) == null || o.enableTransition(), this.panState = "idle", this.onDismiss();
			return
		}
		const r = fa(this.isDynamicSnapPoint ? t / this.sheetHeight : t * 2 / jr.LARGE, 0, 1);
		this.rafId = requestAnimationFrame(() => {
			var i, a;
			if (n) {
				(i = this.backdropTransitionController) == null || i.disableTransition().set(r), this.sheetTransitionController.disableTransition().set(`${t}${this.unit}`);
				return
			}
			this.isDynamicSnapPoint && this.sheetTransitionController.cleanupOnTransitionEnd(), (a = this.backdropTransitionController) == null || a.unset(), this.sheetTransitionController.enableTransition().set(`${this.currentSnapPoint}${this.unit}`)
		})
	}
	getSnapPointTo(t) {
		const n = $s.getClosestSnapPoint(this.snapPointDetents, t);
		if (n !== this.currentSnapPoint) return n;
		const r = this.panGestureRecognizer.direction();
		if (r.axis !== "y" || r.direction === null) return this.currentSnapPoint;
		const o = this.panGestureRecognizer.velocity();
		return Math.abs(o.y) < lv.VELOCITY ? this.currentSnapPoint : $s.getClosestSnapPointByDirection(this.snapPointDetents, n, r.direction)
	}
	preventUntilPanGestureBecomesExpected() {
		return this.panGestureRecognizer.direction().axis === "x" || this.panGestureRecognizer.distance() < lv.DISTANCE_FOR_MOVING_START
	}
	preventImmediatelyIfPannedElIsNotValid() {
		return this.pannedEl === null || this.pannedEl.closest(`[${Y4}=true]`) !== null || !this.sheetEl.contains(this.pannedEl)
	}
	preventUntilVerticalScrollingOnSheetScrollElBecomesExpected() {
		return this.sheetScrollEl === null || !this.sheetScrollEl.contains(this.pannedEl) || this.sheetScrollEl.scrollHeight <= this.sheetScrollEl.clientHeight ? !1 : this.sheetScrollEl.scrollTop === 0 ? this.panGestureRecognizer.direction().direction === -1 && $s.isLastSnapPointDetents(this.snapPointDetents, this.currentSnapPoint) : !0
	}
	preventImmediatelyIfVerticalScrollingOnPannedElIsScrolled() {
		if (this.pannedEl === null || this.pannedEl === this.sheetEl || this.pannedEl === this.sheetScrollEl) return !1;
		const t = B_(this.pannedEl, this.sheetEl);
		return t === null || this.sheetScrollEl === t || t.scrollHeight <= t.clientHeight ? !1 : t.scrollTop !== 0 || this.panGestureRecognizer.direction().direction === -1
	}
	static disableVerticalScrollBouncingIfNeeded(t, n) {
		if (t !== null && t.scrollTop <= 0 && t.contains(n) && t.scrollHeight > t.clientHeight) {
			const r = t.offsetWidth - t.clientWidth;
			return Object.assign(t.style, {
					paddingInlineEnd: `${r}px`,
					overflowY: "hidden",
					boxSizing: "border-box"
				}),
				function() {
					Object.assign(t.style, {
						paddingInlineEnd: "",
						overflowY: "",
						boxSizing: ""
					})
				}
		}
		return Ie
	}
	static isLastSnapPointDetents(t, n) {
		return n === t[t.length - 1]
	}
	static getClosestSnapPointByDirection(t, n, r) {
		const o = t.indexOf(n);
		switch (r) {
			case -1:
				return t[o + 1] ?? t[t.length - 1];
			case 1:
				return t[o - 1] ?? t[0]
		}
	}
	static getClosestSnapPoint(t, n) {
		let r = t[0],
			o = Math.abs(t[0] - n);
		for (let i = 1; i < t.length; i += 1) {
			const a = Math.abs(t[i] - n);
			a < o && (r = t[i], o = a)
		}
		return r
	}
}
class cv {
	constructor(t, n) {
		qe(this, "el");
		qe(this, "property");
		qe(this, "handleTransitionEnd", () => (this.cleanup(), this));
		this.el = t, this.property = n
	}
	set(t) {
		return this.el.style.setProperty(this.property, `${t}`), this
	}
	unset() {
		return this.cleanup()
	}
	enableTransition() {
		return this.el.style.removeProperty("transition"), this
	}
	disableTransition() {
		return this.el.style.setProperty("transition", "none"), this
	}
	cleanup() {
		return this.el.removeEventListener("transitionend", this.handleTransitionEnd), this.el.style.removeProperty("transition"), this.el.style.removeProperty(this.property), this
	}
	cleanupOnTransitionEnd() {
		return this.el.addEventListener("transitionend", this.handleTransitionEnd, {
			once: !0
		}), this
	}
}
const q4 = (e, {
		blocked: t,
		snapPoint: n,
		sheetCSSProperty: r,
		backdropCSSProperty: o,
		onSnapPointChange: i,
		onDismiss: a
	}) => {
		const [c, d] = P.useState(null), [f, m] = P.useState(null), [_, v] = P.useState(null), x = P.useMemo(() => e && n !== "auto" ? {
			[r]: `${n.initial}%`
		} : void 0, [e, n, r]), k = Kt(i || Ie), A = Kt(a || Ie), C = P.useMemo(() => !e || f === null ? null : new $s(f, {
			sheetScrollEl: c || null,
			sheetTransitionController: new cv(f, r),
			backdropTransitionController: _ ? new cv(_, o) : null,
			onSnapPointChange: k,
			onDismiss: A
		}), [e, f, r, c, _, o, k, A]), y = function(L) {
			t || C.panStart(L.nativeEvent)
		}, w = function(L) {
			C.panMove(L.nativeEvent)
		}, b = function() {
			C.panEnd()
		};
		return Je(function() {
			C && C.init(n)
		}, [n, C]), Je(() => function() {
			C && C.destroy()
		}, [C]), [{
			initialStyle: x,
			setSheetEl: m,
			setSheetScrollEl: d,
			setBackdropEl: v
		}, C !== null ? {
			onTouchStart: y,
			onTouchMove: w,
			onTouchEnd: b,
			onTouchCancel: b,
			onMouseDown: y,
			onMouseMove: w,
			onMouseUp: b,
			onMouseLeave: b
		} : void 0]
	},
	Tj = "_host_1fpg2_1",
	Rj = {
		host: Tj
	},
	Nj = ({
		visible: e,
		position: t,
		getRootRef: n,
		disableOpenAnimation: r,
		disableCloseAnimation: o,
		...i
	}) => {
		const a = P.useContext(K4);
		return u.jsx("div", {
			...i,
			"aria-hidden": "true",
			className: Rj.host,
			ref: function() {
				Qs(a.current, n)
			}
		})
	},
	Lj = l4("useModalManager"),
	G4 = ({
		id: e,
		open: t,
		keepMounted: n,
		modalOverlayTestId: r,
		noFocusToDialog: o,
		disableModalOverlay: i,
		onOpen: a,
		onOpened: c,
		onClose: d,
		onClosed: f
	}) => {
		const m = P.useContext(U4),
			_ = P.useId(),
			v = cl({
				nav: e
			}, m.isInsideModal ? Lj : void 0) || _,
			x = m.isInsideModal ? m.activeModal === v : t,
			k = m.isInsideModal ? m.activeModal !== null : !1,
			[A, C] = P.useState(n ? !1 : !x);
		return Je(function() {
			!n && x && C(w => w && !1)
		}, [x, n]), A ? {
			mounted: !1,
			shouldPreserveSnapPoint: k,
			id: v
		} : {
			id: v,
			mounted: !0,
			open: x,
			shouldPreserveSnapPoint: k,
			noFocusToDialog: o || m.noFocusToDialog,
			modalOverlayTestId: r || m.modalOverlayTestId,
			disableModalOverlay: i || m.disableModalOverlay,
			ModalOverlay: m.isInsideModal ? Nj : Vd,
			onOpen: a || m1(v, m.onOpen),
			onOpened: c || m1(v, m.onOpened),
			onClose: d || m1(v, m.onClose),
			onClosed: function(...w) {
				var b;
				n || C(!0), f ? f(...w) : (b = m.onClosed) == null || b.call(m, v)
			}
		}
	};

function m1(e, t) {
	return t ? () => t(e) : void 0
}

function X4(e = !0) {
	const {
		window: t,
		document: n
	} = _n(), [r, o] = P.useState(null), [i, a] = P.useState(!1), c = P.useRef(null);
	return P.useEffect(function() {
		if (!e || !t || !n) return;
		const f = _ => {
			const v = _ === !0 ? n.activeElement : _.target;
			if (T8(v)) switch ((_ === !0 ? {
					type: "focusin"
				} : _).type) {
				case "focusin":
					c.current = c2(t), o(v);
					break;
				case "focusout":
					c.current = null, a(!1), o(null);
					break
			}
		};
		f(!0);
		const m = {
			passive: !0,
			capture: !1
		};
		return n.addEventListener("focusin", f, m), n.addEventListener("focusout", f, m), () => {
			c.current = null, n.removeEventListener("focusin", f, m), n.removeEventListener("focusout", f, m)
		}
	}, [e, t, n]), P.useEffect(function() {
		if (!r || !t) return;
		const f = q5(() => {
			if (c.current === null) return;
			const m = c2(t),
				{
					offsetTop: _,
					height: v
				} = c.current,
				{
					offsetTop: x,
					height: k
				} = m;
			(_ !== x || v !== k) && (a(!0), c.current = m)
		}, 100);
		return t.visualViewport ? t.visualViewport.addEventListener("resize", f) : t.addEventListener("resize", f),
			function() {
				t.visualViewport ? t.visualViewport.removeEventListener("resize", f) : t.removeEventListener("resize", f)
			}
	}, [r, t]), P.useEffect(function() {
		if (!i || !t) return;
		const f = G5(() => {
			c.current && t.scrollTo(0, c.current.offsetTop)
		}, 100);
		return t.addEventListener("scroll", f, {
				passive: !0
			}),
			function() {
				t.removeEventListener("scroll", f)
			}
	}, [i, t]), {
		opened: i
	}
}
const Dj = "_host_1h0bh_1",
	Bj = "_disableModalOverlay_1h0bh_9",
	zj = "_hostDesktop_1h0bh_15",
	v1 = {
		host: Dj,
		disableModalOverlay: Bj,
		hostDesktop: zj
	},
	Q4 = ({
		className: e,
		hidden: t,
		isDesktop: n,
		children: r,
		getRootRef: o,
		disableModalOverlay: i,
		...a
	}) => u.jsx("div", {
		ref: o,
		className: te(e, v1.host, n && v1.hostDesktop, i && v1.disableModalOverlay),
		hidden: t,
		"aria-hidden": t,
		...a,
		children: r
	}),
	$j = "_host_1f6eo_1",
	Fj = {
		host: $j
	},
	Z4 = ({
		className: e,
		children: t,
		...n
	}) => u.jsx(R4, {
		direction: "column",
		className: te(Fj.host, e),
		...n,
		children: t
	}),
	Vj = "_host_1leac_1",
	Hj = "_hostMobile_1leac_12",
	Wj = "_hostMobileSafeAreaInsetTop_1leac_23",
	Kj = "_hostMobileSafeAreaInsetTopWithCustomOffset_1leac_27",
	Uj = "_hostDesktop_1leac_36",
	Yj = "_hostDesktopMaxWidthS_1leac_48",
	qj = "_hostDesktopMaxWidthM_1leac_52",
	Gj = "_hostDesktopMaxWidthL_1leac_56",
	Xj = "_document_1leac_60",
	Qj = "_documentMobile_1leac_74",
	Zj = "_documentStateEnter_1leac_91",
	Jj = "_documentStateEntering_1leac_95",
	eT = "_documentStateExiting_1leac_100",
	tT = "_documentStateExited_1leac_105",
	nT = "_documentDesktop_1leac_111",
	rT = "_children_1leac_134",
	oT = "_childrenMobile_1leac_154",
	iT = "_childrenDesktop_1leac_161",
	It = {
		host: Vj,
		hostMobile: Hj,
		hostMobileSafeAreaInsetTop: Wj,
		hostMobileSafeAreaInsetTopWithCustomOffset: Kj,
		hostDesktop: Uj,
		hostDesktopMaxWidthS: Yj,
		hostDesktopMaxWidthM: qj,
		hostDesktopMaxWidthL: Gj,
		document: Xj,
		documentMobile: Qj,
		documentStateEnter: Zj,
		documentStateEntering: Jj,
		documentStateExiting: eT,
		documentStateExited: tT,
		documentDesktop: nT,
		children: rT,
		childrenMobile: oT,
		childrenDesktop: iT
	},
	sT = ({
		isDesktop: e,
		getRef: t,
		disableContentPanningGesture: n,
		header: r,
		children: o,
		footer: i,
		outsideButtons: a,
		modalContentTestId: c,
		modalDismissButtonTestId: d,
		modalDismissButtonLabel: f,
		hideCloseButton: m,
		closable: _,
		onClose: v = Ie,
		...x
	}) => {
		const k = n ? jj : void 0,
			A = m || !e ? null : u.jsx(ap, {
				"data-testid": d,
				onClick: _ ? function(y) {
					v("click-close-button", y)
				} : Ie,
				"aria-label": f,
				children: u.jsx(Wl, {})
			});
		return u.jsxs(We, {
			role: "document",
			baseClassName: It.document,
			...x,
			children: [u.jsxs("div", {
				className: te(It.children, e ? It.childrenDesktop : It.childrenMobile),
				children: [et(r) && r, u.jsx(Oj, {
					getRootRef: t,
					"data-testid": c,
					...k,
					children: o
				}), et(i) && i]
			}), e && (A || a) && u.jsxs(Z4, {
				children: [A, a]
			})]
		})
	},
	aT = {
		appear: It.documentStateEnter,
		appearing: It.documentStateEntering,
		enter: It.documentStateEnter,
		entering: It.documentStateEntering,
		exiting: It.documentStateExiting,
		exited: It.documentStateExited
	},
	lT = ({
		open: e,
		header: t,
		footer: n,
		size: r,
		height: o,
		children: i,
		className: a,
		style: c,
		snapPoint: d,
		onSnapPointChange: f,
		getModalContentRef: m,
		ModalOverlay: _ = Vd,
		modalOverlayTestId: v,
		modalContentTestId: x,
		modalDismissButtonTestId: k,
		modalDismissButtonLabel: A = "Закрыть",
		outsideButtons: C,
		noFocusToDialog: y,
		hideCloseButton: w,
		preventClose: b,
		disableContentPanningGesture: O,
		restoreFocus: L,
		onOpen: $,
		onOpened: H,
		onClose: q = Ie,
		onClosed: ne,
		disableFocusTrap: G,
		disableModalOverlay: oe,
		disableOpenAnimation: fe = !1,
		disableCloseAnimation: me = !1,
		...Z
	}) => {
		const {
			hasCustomPanelHeaderAfter: J
		} = go(), [X, {
			ref: re,
			onTransitionEnd: z
		}] = Z0(e, {
			enableAppear: !fe,
			enableEnter: !fe,
			enableExit: !me,
			onEnter() {
				$ == null || $()
			},
			onEntered() {
				H == null || H()
			},
			onExited() {
				ne == null || ne()
			}
		}), W = X === "appeared" || X === "entered", K = X === "exited", ie = !b && W, {
			sizeX: le,
			isDesktop: _e
		} = xo(), Ee = !_e && !b && X !== "exited", {
			opened: Re
		} = X4(Ee), [{
			initialStyle: Oe,
			setSheetEl: Ae,
			setSheetScrollEl: Le,
			setBackdropEl: Ue
		}, ue] = q4(Ee, {
			blocked: Re,
			snapPoint: d,
			sheetCSSProperty: "--vkui_internal_ModalPageDocument--snapPoint",
			backdropCSSProperty: "--vkui_internal--modal-overlay--opacity",
			onSnapPointChange: f,
			onDismiss() {
				q("swipe-down")
			}
		}), Fe = Re ? {
			"--vkui_internal_ModalPageDocument--safeAreaInsetBottom": "0px",
			...Oe
		} : Oe, Me = Hn(Ae, re), St = Hn(Le, m), [yn, Ot] = _e ? cT(r) : [void 0, void 0], At = !oe && u.jsx(_, {
			getRootRef: Ue,
			"data-testid": v,
			visible: e,
			disableOpenAnimation: fe,
			disableCloseAnimation: me,
			onClick: ie ? function(wn) {
				q("click-overlay", wn)
			} : void 0
		}), On = P.useCallback(wr => {
			ie && Qi(wr) === Ve.ESCAPE && q("escape-key")
		}, [ie, q]);
		return oc(!K), u.jsxs(Q4, {
			hidden: K,
			isDesktop: _e,
			onKeyDown: On,
			disableModalOverlay: oe,
			children: [At, u.jsx($d, {
				...Z,
				autoFocus: !y,
				restoreFocus: L,
				role: "dialog",
				"aria-modal": "true",
				disabled: !W || K || G,
				className: te(a, It.host, _e ? It.hostDesktop : It.hostMobile, !_e && (J ? It.hostMobileSafeAreaInsetTopWithCustomOffset : It.hostMobileSafeAreaInsetTop), yn, le === "regular" && "vkuiInternalModalPage--sizeX-regular"),
				style: fo(fo(Ot, uT(o)), c),
				children: u.jsx(sT, {
					...ue,
					getRootRef: Me,
					getRef: St,
					style: Fe,
					className: te(_e ? It.documentDesktop : It.documentMobile, aT[X]),
					onTransitionEnd: z,
					isDesktop: _e,
					disableContentPanningGesture: O,
					header: t,
					footer: n,
					outsideButtons: C,
					modalContentTestId: x,
					modalDismissButtonTestId: k,
					modalDismissButtonLabel: A,
					hideCloseButton: w,
					closable: ie,
					onClose: q,
					children: i
				})
			})]
		})
	},
	uv = {
		s: It.hostDesktopMaxWidthS,
		m: It.hostDesktopMaxWidthM,
		l: It.hostDesktopMaxWidthL
	};

function cT(e = "s") {
	return typeof e == "number" ? [void 0, {
		"--vkui_internal_ModalPage--desktopMaxWidth": `${e}px`
	}] : uv.hasOwnProperty(e) ? [uv[e], void 0] : [void 0, {
		"--vkui_internal_ModalPage--desktopMaxWidth": e
	}]
}

function uT(e) {
	return e !== void 0 ? {
		"--vkui_internal_ModalPage--userHeight": typeof e == "number" ? `${e}px` : e
	} : void 0
}
const Za = new Map,
	cp = ({
		id: e,
		nav: t,
		open: n = !1,
		modalOverlayTestId: r,
		noFocusToDialog: o,
		onOpen: i,
		onOpened: a,
		onClose: c,
		onClosed: d,
		size: f = "s",
		settlingHeight: m = 50,
		dynamicContentHeight: _,
		disableModalOverlay: v,
		keepMounted: x = !1,
		...k
	}) => {
		const {
			mounted: A,
			shouldPreserveSnapPoint: C,
			id: y,
			...w
		} = G4({
			id: t || e,
			open: n,
			keepMounted: x,
			modalOverlayTestId: r,
			disableModalOverlay: v,
			noFocusToDialog: o,
			onOpen: i,
			onOpened: a,
			onClose: c,
			onClosed: d
		}), b = P.useMemo(() => {
			if (_) return "auto";
			if (C) {
				const O = Za.get(y);
				if (O) return O;
				const L = dv(m);
				return Za.set(y, L), L
			} else Za.delete(y);
			return dv(m)
		}, [y, C, _, m]);
		return A ? u.jsx(np.Provider, {
			value: y,
			children: u.jsx(lT, {
				id: y,
				size: f,
				"aria-labelledby": `${y}-label`,
				snapPoint: b,
				onSnapPointChange: b !== "auto" && C ? O => {
					const L = Za.get(y);
					L && (L.initial = O, Za.set(y, L))
				} : void 0,
				...w,
				...k
			})
		}) : null
	};

function dv(e) {
	const t = Math.min(Math.max(e, h1.LOWER), jr.LARGE);
	return {
		initial: t,
		detents: Mj(t, h1.LOWER, h1.HIGHEST) ? [jr.MIN, t, jr.LARGE] : [jr.MIN, t]
	}
}
const dT = "_host_ejjwr_1",
	fT = "_hostWithGaps_ejjwr_10",
	hT = "_hostDesktop_ejjwr_14",
	_1 = {
		host: dT,
		hostWithGaps: fT,
		hostDesktop: hT
	},
	Mh = ({
		children: e,
		noSeparator: t = !1,
		getRootRef: n,
		className: r,
		typographyProps: o,
		...i
	}) => {
		const a = rt(),
			{
				isDesktop: c,
				sizeX: d
			} = xo(),
			f = rp();
		return u.jsxs(u.Fragment, {
			children: [u.jsx("div", {
				className: te(_1.host, a !== "vkcom" && _1.hostWithGaps, c && _1.hostDesktop),
				ref: n,
				children: u.jsx(j4, {
					className: te("vkuiInternalModalPageHeader__in", r),
					typographyProps: {
						Component: "h2",
						id: f.labelId,
						...o
					},
					...i,
					fixed: !1,
					delimiter: "none",
					transparent: !0,
					children: e
				})
			}), !t && u.jsx(Ph, {
				padding: d !== "regular"
			})]
		})
	},
	pT = "_container_1eilp_1",
	mT = "_withSafeZone_1eilp_20",
	vT = "_title_1eilp_38",
	_T = "_description_1eilp_39",
	gT = "_icon_1eilp_55",
	yT = "_actions_1eilp_61",
	wT = "_dismiss_1eilp_66",
	xT = "_ios_1eilp_78",
	ST = "_desktop_1eilp_90",
	Jr = {
		container: pT,
		withSafeZone: mT,
		title: vT,
		description: _T,
		icon: gT,
		actions: yT,
		dismiss: wT,
		ios: xT,
		desktop: ST
	},
	kT = ({
		icon: e,
		title: t,
		titleComponent: n = "span",
		description: r,
		descriptionComponent: o = "span",
		children: i,
		actions: a,
		onClose: c,
		dismissLabel: d = "Закрыть",
		size: f,
		modalDismissButtonTestId: m,
		dismissButtonMode: _ = "outside",
		preventClose: v,
		outsideButtons: x,
		titleId: k,
		...A
	}) => {
		const C = rt(),
			{
				isDesktop: y
			} = xo(),
			w = y ? f : void 0,
			b = !e && (_ === "inside" || C === "ios" && !y && _ !== "none"),
			O = et(t),
			L = et(r);
		return u.jsx(We, {
			...A,
			baseClassName: te("vkuiInternalModalCardBase", C === "ios" && Jr.ios, y && Jr.desktop, b && Jr.withSafeZone),
			baseStyle: {
				maxWidth: w
			},
			children: u.jsxs("div", {
				className: Jr.container,
				children: [et(e) && u.jsx("div", {
					className: Jr.icon,
					children: e
				}), et(t) && u.jsx(wa, {
					id: k,
					level: "2",
					weight: "2",
					className: Jr.title,
					Component: n,
					children: t
				}), O && L && u.jsx(zd, {
					size: 8
				}), L && u.jsx(rc.Provider, {
					value: {
						sizeY: "regular"
					},
					children: u.jsx(Sa, {
						className: Jr.description,
						Component: o,
						children: r
					})
				}), i, et(a) && u.jsx("div", {
					className: Jr.actions,
					children: a
				}), y && (_ === "outside" || x) && u.jsxs(Z4, {
					children: [_ === "outside" && u.jsx(ap, {
						"aria-label": d,
						"data-testid": m,
						onClick: c,
						children: u.jsx(Wl, {})
					}), x]
				}), (_ === "inside" || C === "ios" && !y && _ !== "none") && u.jsxs(Wr, {
					className: Jr.dismiss,
					onClick: c,
					hoverMode: "opacity",
					activeMode: "opacity",
					"data-testid": m,
					children: [u.jsx(Lr, {
						children: d
					}), C === "ios" ? u.jsx(Rw, {}) : u.jsx(Wl, {})]
				})]
			})
		})
	},
	bT = "_host_1i0sh_1",
	CT = "_hostMaxWidthS_1i0sh_9",
	ET = "_hostMaxWidthM_1i0sh_13",
	AT = "_hostMaxWidthL_1i0sh_17",
	IT = "_hostMobile_1i0sh_23",
	PT = "_hostStateEnter_1i0sh_44",
	OT = "_hostStateEntering_1i0sh_49",
	MT = "_hostStateExiting_1i0sh_53",
	jT = "_hostStateExited_1i0sh_58",
	TT = "_hostDesktop_1i0sh_65",
	Zn = {
		host: bT,
		hostMaxWidthS: CT,
		hostMaxWidthM: ET,
		hostMaxWidthL: AT,
		hostMobile: IT,
		hostStateEnter: PT,
		hostStateEntering: OT,
		hostStateExiting: MT,
		hostStateExited: jT,
		hostDesktop: TT
	},
	RT = {
		vkcom: Zn.hostMaxWidthS,
		ios: Zn.hostMaxWidthM,
		android: Zn.hostMaxWidthL
	},
	NT = {
		appear: Zn.hostStateEnter,
		appearing: Zn.hostStateEntering,
		enter: Zn.hostStateEnter,
		entering: Zn.hostStateEntering,
		exiting: Zn.hostStateExiting,
		exited: Zn.hostStateExited
	},
	LT = ({
		icon: e,
		title: t,
		titleComponent: n,
		description: r,
		descriptionComponent: o,
		children: i,
		actions: a,
		size: c,
		open: d,
		style: f,
		className: m,
		preventClose: _,
		ModalOverlay: v = Vd,
		modalOverlayTestId: x,
		modalDismissButtonTestId: k,
		getRootRef: A,
		dismissButtonMode: C,
		dismissLabel: y,
		noFocusToDialog: w,
		restoreFocus: b,
		onOpen: O,
		onOpened: L,
		onClose: $ = Ie,
		onClosed: H,
		disableFocusTrap: q,
		disableModalOverlay: ne,
		disableOpenAnimation: G,
		disableCloseAnimation: oe,
		...fe
	}) => {
		const me = rt(),
			[Z, {
				ref: J,
				onTransitionEnd: X
			}] = Z0(d, {
				enableAppear: !G,
				enableEnter: !G,
				enableExit: !oe,
				onEnter() {
					O == null || O()
				},
				onEntered() {
					L == null || L()
				},
				onExited() {
					H == null || H()
				}
			}),
			re = Z === "appeared" || Z === "entered",
			z = Z === "exited",
			W = !_ && re,
			{
				isDesktop: K
			} = xo(),
			ie = !K && !_ && Z !== "exited",
			{
				opened: le
			} = X4(ie),
			[{
				setSheetEl: _e,
				setBackdropEl: Ee
			}, Re] = q4(ie, {
				blocked: le,
				snapPoint: "auto",
				sheetCSSProperty: "--vkui_internal_ModalCard--translateY",
				backdropCSSProperty: "--vkui_internal--modal-overlay--opacity",
				onDismiss() {
					$ == null || $("swipe-down")
				}
			}),
			Oe = Hn(_e, J, A),
			Ae = le ? {
				...f,
				"--vkui_internal_ModalCard--safeAreaInsetBottom": "0px"
			} : f,
			Le = !ne && u.jsx(v, {
				getRootRef: Ee,
				"data-testid": x,
				visible: d,
				disableOpenAnimation: G,
				disableCloseAnimation: oe,
				onClick: W ? function(Fe) {
					$("click-overlay", Fe)
				} : void 0
			}),
			Ue = P.useCallback(ue => {
				W && Qi(ue) === Ve.ESCAPE && $("escape-key")
			}, [W, $]);
		return oc(!z), L4(J, {
			autoFocus: !w,
			disabled: !re || z || q,
			restoreFocus: b
		}), u.jsxs(Q4, {
			hidden: z,
			isDesktop: K,
			onKeyDown: Ue,
			disableModalOverlay: ne,
			children: [Le, u.jsx(kT, {
				...fe,
				tabIndex: -1,
				role: "dialog",
				"aria-modal": "true",
				getRootRef: Oe,
				style: Ae,
				className: te(Zn.host, K ? Zn.hostDesktop : Zn.hostMobile, RT[me], NT[Z], m),
				onTransitionEnd: X,
				...Re,
				icon: e,
				title: t,
				titleComponent: n,
				description: r,
				descriptionComponent: o,
				actions: a,
				onClose: () => $("click-close-button"),
				size: c,
				modalDismissButtonTestId: k,
				dismissButtonMode: C,
				dismissLabel: y,
				children: i
			})]
		})
	},
	DT = ({
		id: e,
		nav: t,
		open: n = !1,
		modalOverlayTestId: r,
		noFocusToDialog: o,
		onOpen: i,
		onOpened: a,
		onClose: c,
		onClosed: d,
		keepMounted: f = !1,
		disableModalOverlay: m,
		..._
	}) => {
		const {
			mounted: v,
			shouldPreserveSnapPoint: x,
			id: k,
			...A
		} = G4({
			id: t || e,
			open: n,
			keepMounted: f,
			modalOverlayTestId: r,
			noFocusToDialog: o,
			disableModalOverlay: m,
			onOpen: i,
			onOpened: a,
			onClose: c,
			onClosed: d
		});
		return v === !1 ? null : u.jsx(np.Provider, {
			value: k,
			children: u.jsx(LT, {
				id: k,
				"aria-labelledby": `${k}-label`,
				titleId: `${k}-label`,
				...A,
				..._
			})
		})
	},
	BT = "_host_14910_1",
	zT = "_stretched_14910_6",
	$T = "_modeVertical_14910_11",
	FT = "_modeHorizontal_14910_15",
	VT = "_gapSpace_14910_29",
	HT = "_gapS_14910_29",
	WT = "_gapM_14910_39",
	KT = "_alignLeft_14910_75",
	UT = "_alignCenter_14910_79",
	YT = "_alignRight_14910_83",
	Vr = {
		host: BT,
		stretched: zT,
		modeVertical: $T,
		modeHorizontal: FT,
		gapSpace: VT,
		gapS: HT,
		gapM: WT,
		alignLeft: KT,
		alignCenter: UT,
		alignRight: YT
	},
	qT = {
		vertical: Vr.modeVertical,
		horizontal: Vr.modeHorizontal
	},
	GT = {
		space: Vr.gapSpace,
		s: Vr.gapS,
		m: Vr.gapM
	},
	XT = {
		left: Vr.alignLeft,
		center: Vr.alignCenter,
		right: Vr.alignRight
	},
	QT = ({
		mode: e = "horizontal",
		gap: t = "m",
		stretched: n = !1,
		align: r = "left",
		...o
	}) => u.jsx(We, {
		baseClassName: te(Vr.host, qT[e], t !== "none" && GT[t], n && Vr.stretched, XT[r]),
		role: "group",
		...o
	}),
	ZT = "_host_pcq4d_10",
	JT = "_paddingS_pcq4d_20",
	eR = "_paddingM_pcq4d_24",
	tR = "_modeCard_pcq4d_30",
	nR = "_sizeXRegular_pcq4d_31",
	rR = "_modeNone_pcq4d_31",
	oR = "_sizeXNone_pcq4d_41",
	iR = "_sizeXCompact_pcq4d_51",
	sR = "_header_pcq4d_130",
	aR = "_modePlain_pcq4d_134",
	lR = "_description_pcq4d_164",
	cR = "_separatorSibling_pcq4d_177",
	uR = "_separatorSiblingForced_pcq4d_212",
	dR = "_modePlainInsideModal_pcq4d_256",
	fR = "_expandedContentInline_pcq4d_297",
	hR = "_expandedContentBlock_pcq4d_301",
	Ut = {
		host: ZT,
		paddingS: JT,
		paddingM: eR,
		modeCard: tR,
		sizeXRegular: nR,
		modeNone: rR,
		sizeXNone: oR,
		sizeXCompact: iR,
		header: sR,
		modePlain: aR,
		description: lR,
		separatorSibling: cR,
		separatorSiblingForced: uR,
		modePlainInsideModal: dR,
		expandedContentInline: fR,
		expandedContentBlock: hR
	},
	pR = {
		none: te(Ut.sizeXNone, "vkuiInternalGroup--sizeX-none"),
		regular: Ut.sizeXRegular,
		compact: Ut.sizeXCompact
	},
	mR = {
		none: te(Ut.modeNone, "vkuiInternalGroup--mode-none"),
		plain: te(Ut.modePlain, "vkuiInternalGroup--mode-plain"),
		card: te(Ut.modeCard, "vkuiInternalGroup--mode-card")
	},
	vR = {
		s: Ut.paddingS,
		m: Ut.paddingM
	};

function _R(e, t, n) {
	const {
		layout: r
	} = P.useContext(ri);
	return e || (n ? "plain" : r || (t !== "none" ? t === "regular" ? "card" : "plain" : "none"))
}
const J4 = ({
		children: e,
		separator: t = "auto",
		mode: n,
		padding: r = "m",
		tabIndex: o,
		...i
	}) => {
		const a = rp().id !== null,
			{
				sizeX: c = "none"
			} = Et(),
			d = _R(n, c, a),
			m = i.role === "tabpanel" && o === void 0 ? 0 : o;
		let _ = null;
		switch (t) {
			case "auto":
				_ = u.jsx("div", {
					className: Ut.separatorSibling
				});
				break;
			case "show":
				_ = u.jsx("div", {
					className: te(Ut.separatorSibling, d === "plain" || d === "none" ? Ut.separatorSiblingForced : void 0)
				});
				break
		}
		return u.jsxs(u.Fragment, {
			children: [u.jsx(We, {
				Component: "section",
				...i,
				tabIndex: m,
				baseClassName: te("vkuiInternalGroup", Ut.host, pR[c], d === "plain" && a && Ut.modePlainInsideModal, mR[d], vR[r]),
				children: e
			}), _]
		})
	},
	ey = ({
		className: e,
		...t
	}) => u.jsx(si, {
		className: te(e, Ut.description),
		...t
	}),
	gR = {
		inline: Ut.expandedContentInline,
		block: Ut.expandedContentBlock
	},
	yR = ({
		direction: e = "inline",
		...t
	}) => u.jsx(We, {
		Component: "div",
		...t,
		baseClassName: gR[e]
	}),
	ty = ({
		className: e,
		...t
	}) => u.jsx("div", {
		className: te(e, Ut.header),
		...t
	}),
	is = ({
		header: e,
		description: t,
		children: n,
		...r
	}) => u.jsxs(J4, {
		...r,
		children: [et(e) && u.jsx(ty, {
			children: e
		}), n, et(t) && u.jsx(ey, {
			children: t
		})]
	});
is.Container = J4;
is.Header = ty;
is.Description = ey;
is.ExpandedContent = yR;
const wR = {
		s: Pw,
		m: Tw
	},
	xR = ({
		size: e = "m",
		...t
	}) => {
		const n = wR[e];
		return u.jsx(n, {
			...t
		})
	},
	SR = "_host_plr3t_1",
	kR = "_mult_plr3t_13",
	bR = "_children_plr3t_17",
	CR = "_disabled_plr3t_21",
	ER = "_before_plr3t_25",
	AR = "_beforeIos_plr3t_45",
	IR = "_middle_plr3t_54",
	PR = "_overTitle_plr3t_72",
	OR = "_text_plr3t_76",
	MR = "_subtitle_plr3t_81",
	jR = "_extraSubtitle_plr3t_82",
	TR = "_content_plr3t_86",
	RR = "_badge_plr3t_106",
	NR = "_indicator_plr3t_120",
	LR = "_after_plr3t_131",
	DR = "_chevronIcon_plr3t_156",
	BR = "_sizeYCompact_plr3t_169",
	zR = "_sizeYNone_plr3t_178",
	ft = {
		host: SR,
		mult: kR,
		children: bR,
		disabled: CR,
		before: ER,
		beforeIos: AR,
		middle: IR,
		overTitle: PR,
		text: OR,
		subtitle: MR,
		extraSubtitle: jR,
		content: TR,
		badge: RR,
		indicator: NR,
		after: LR,
		chevronIcon: DR,
		sizeYCompact: BR,
		sizeYNone: zR
	},
	$R = {
		none: ft.sizeYNone,
		compact: ft.sizeYCompact
	},
	dr = ({
		badgeBeforeTitle: e,
		badgeAfterTitle: t,
		badgeBeforeSubtitle: n,
		badgeAfterSubtitle: r,
		before: o,
		indicator: i,
		children: a,
		after: c,
		chevron: d,
		multiline: f,
		overTitle: m,
		subtitle: _,
		extraSubtitle: v,
		chevronSize: x = "m",
		...k
	}) => {
		const A = rt(),
			C = d === "always" || d === "auto" && A === "ios",
			y = et(c) || C,
			{
				sizeY: w = "none"
			} = Et();
		return u.jsxs(Wr, {
			...k,
			baseClassName: te(ft.host, k.disabled && ft.disabled, w !== "regular" && $R[w], f && ft.mult),
			children: [u.jsx("div", {
				className: te(ft.before, A === "ios" && ft.beforeIos),
				children: o
			}), u.jsxs("div", {
				className: ft.middle,
				children: [m && u.jsxs(Sa, {
					Component: "span",
					className: te(ft.text, ft.overTitle),
					children: [m, u.jsx(Lr, {
						children: " "
					})]
				}), u.jsxs("div", {
					className: ft.content,
					children: [e && u.jsx("span", {
						className: ft.badge,
						children: e
					}), u.jsxs(gh, {
						Component: "span",
						className: ft.children,
						weight: "3",
						children: [a, u.jsx(Lr, {
							children: " "
						})]
					}), et(t) && u.jsx("span", {
						className: ft.badge,
						children: t
					})]
				}), _ && u.jsxs("div", {
					className: ft.content,
					children: [n && u.jsx("span", {
						className: ft.badge,
						children: n
					}), u.jsxs(si, {
						normalize: !1,
						className: te(ft.text, ft.subtitle),
						children: [_, u.jsx(Lr, {
							children: " "
						})]
					}), r && u.jsx("span", {
						className: ft.badge,
						children: r
					})]
				}), v && u.jsxs(si, {
					className: te(ft.text, ft.extraSubtitle),
					children: [v, u.jsx(Lr, {
						children: " "
					})]
				})]
			}), et(i) && u.jsx(gh, {
				Component: "span",
				weight: "3",
				className: ft.indicator,
				children: i
			}), y && u.jsxs("div", {
				className: te(ft.after, "vkuiInternalSimpleCell__after"),
				children: [c, C && u.jsx(xR, {
					size: x,
					className: ft.chevronIcon
				})]
			})]
		})
	},
	FR = "_host_19kgp_1",
	VR = {
		host: FR
	},
	HR = e => u.jsx(We, {
		baseClassName: VR.host,
		...e
	}),
	WR = "_host_fgurb_1",
	KR = "_sizeYCompact_fgurb_12",
	UR = "_sizeYNone_fgurb_17",
	YR = "_before_fgurb_22",
	qR = "_withAfter_fgurb_36",
	GR = "_alignAfterStart_fgurb_36",
	XR = "_contentAlignStart_fgurb_36",
	QR = "_contentAlignEnd_fgurb_41",
	ZR = "_content_fgurb_36",
	JR = "_contentBefore_fgurb_51",
	eN = "_contentAlignCenter_fgurb_62",
	tN = "_contentAfter_fgurb_70",
	nN = "_alignBeforeStart_fgurb_80",
	rN = "_alignBeforeCenter_fgurb_85",
	oN = "_alignAfterCenter_fgurb_86",
	iN = "_alignBeforeEnd_fgurb_90",
	sN = "_alignAfterEnd_fgurb_91",
	aN = "_afterChildren_fgurb_95",
	lN = "_afterCaption_fgurb_99",
	cN = "_overTitle_fgurb_119",
	uN = "_extraSubtitle_fgurb_123",
	dN = "_children_fgurb_129",
	fN = "_textEllipsis_fgurb_133",
	hN = "_subtitle_fgurb_135",
	pN = "_bottom_fgurb_143",
	mN = "_actions_fgurb_148",
	ot = {
		host: WR,
		sizeYCompact: KR,
		sizeYNone: UR,
		before: YR,
		in: "_in_fgurb_27",
		withAfter: qR,
		alignAfterStart: GR,
		contentAlignStart: XR,
		contentAlignEnd: QR,
		content: ZR,
		contentBefore: JR,
		contentAlignCenter: eN,
		contentAfter: tN,
		alignBeforeStart: nN,
		alignBeforeCenter: rN,
		alignAfterCenter: oN,
		alignBeforeEnd: iN,
		alignAfterEnd: sN,
		afterChildren: aN,
		afterCaption: lN,
		overTitle: cN,
		extraSubtitle: uN,
		children: dN,
		textEllipsis: fN,
		subtitle: hN,
		bottom: pN,
		actions: mN
	},
	vN = {
		none: ot.sizeYNone,
		compact: ot.sizeYCompact
	},
	_N = {
		start: ot.alignAfterStart,
		center: ot.alignAfterCenter,
		end: ot.alignAfterEnd
	},
	gN = {
		start: ot.alignBeforeStart,
		center: ot.alignBeforeCenter,
		end: ot.alignBeforeEnd
	},
	yN = {
		start: ot.contentAlignStart,
		center: ot.contentAlignCenter,
		end: ot.contentAlignEnd
	},
	ny = ({
		overTitle: e,
		children: t,
		subtitle: n,
		extraSubtitle: r,
		before: o,
		after: i,
		afterCaption: a,
		bottom: c,
		actions: d,
		multiline: f,
		beforeAlign: m = "start",
		contentAlign: _ = "start",
		afterAlign: v = "start",
		...x
	}) => {
		const {
			sizeY: k = "none"
		} = Et(), A = i || a, C = () => {
			if (A) return u.jsxs("div", {
				className: ot.contentAfter,
				children: [i && u.jsx("div", {
					className: ot.afterChildren,
					children: i
				}), a && u.jsx("div", {
					className: ot.afterCaption,
					children: a
				})]
			})
		};
		return u.jsxs(Wr, {
			...x,
			baseClassName: te(ot.host, !f && ot.textEllipsis, k !== "regular" && vN[k], A && ot.withAfter, A && _N[v], o && gN[m], yN[_]),
			children: [o && u.jsx("div", {
				className: ot.before,
				children: o
			}), u.jsxs("div", {
				className: ot.in,
				children: [u.jsxs("div", {
					className: ot.content,
					children: [u.jsxs("div", {
						className: ot.contentBefore,
						children: [e && u.jsx(Sa, {
							Component: "div",
							className: ot.overTitle,
							children: e
						}), u.jsx("div", {
							className: ot.children,
							children: t
						}), n && u.jsx("div", {
							className: ot.subtitle,
							children: n
						}), r && u.jsx(Sa, {
							Component: "div",
							className: ot.extraSubtitle,
							children: r
						})]
					}), v === "start" && C()]
				}), c && u.jsx("div", {
					className: ot.bottom,
					children: c
				}), d && u.jsx("div", {
					className: ot.actions,
					children: d
				})]
			}), v !== "start" && C()]
		})
	};
ny.Icon = HR;
const wN = "_host_1m50d_1",
	xN = "_shifted_1m50d_6",
	SN = "_presetOnline_1m50d_11",
	kN = "_presetOnlineMobile_1m50d_12",
	bN = "_rtl_1m50d_19",
	Fs = {
		host: wN,
		shifted: xN,
		presetOnline: SN,
		presetOnlineMobile: kN,
		rtl: bN
	},
	CN = ({
		className: e,
		...t
	}) => {
		const {
			size: n
		} = P.useContext(uc);
		return u.jsx(Kr.Badge, {
			...t,
			className: te(Fs.host, n < 96 && Fs.shifted, e)
		})
	},
	EN = ({
		width: e,
		height: t,
		...n
	}) => u.jsx(Aw, {
		...n,
		width: e >= 24 ? 15 : 12,
		height: t >= 24 ? 15 : 12
	}),
	AN = ({
		width: e,
		height: t,
		...n
	}) => u.jsx(Iw, {
		...n,
		width: e >= 24 ? 9 : 8,
		height: t >= 24 ? 15 : 12
	}),
	IN = ({
		preset: e = "online",
		className: t,
		...n
	}) => {
		const o = T4() === "rtl",
			{
				size: i
			} = P.useContext(uc),
			a = G0(i),
			c = e === "online",
			d = c ? Fs.presetOnline : Fs.presetOnlineMobile,
			f = c ? EN : AN;
		return u.jsx(Kr.Badge, {
			background: "stroke",
			className: te(Fs.host, o && Fs.rtl, d, t),
			...n,
			children: u.jsx(f, {
				width: a,
				height: a
			})
		})
	},
	ry = 30,
	oy = 96,
	PN = ry / oy,
	iy = e => {
		if (e <= 16) return 5;
		if (e <= 24) return 8;
		if (e <= 32) return 10;
		if (e <= 36) return 13;
		if (e <= 44) return 14;
		if (e <= 48) return 17;
		if (e < 56) return 18;
		if (e <= 64) return 21;
		if (e <= 88) return 26;
		if (e <= oy) return ry;
		const t = Math.ceil(e * PN),
			n = t % 2;
		return t + n
	},
	ON = "_host_4mx39_1",
	MN = "_hasGradient_4mx39_5",
	jN = "_gradientRed_4mx39_9",
	TN = "_gradientOrange_4mx39_19",
	RN = "_gradientYellow_4mx39_24",
	NN = "_gradientGreen_4mx39_29",
	LN = "_gradientLBlue_4mx39_34",
	DN = "_gradientBlue_4mx39_39",
	BN = "_gradientViolet_4mx39_44",
	zN = "_initials_4mx39_49",
	Ir = {
		host: ON,
		hasGradient: MN,
		gradientRed: jN,
		gradientOrange: TN,
		gradientYellow: RN,
		gradientGreen: NN,
		gradientLBlue: LN,
		gradientBlue: DN,
		gradientViolet: BN,
		initials: zN
	},
	$N = 48,
	FN = {
		1: "red",
		2: "orange",
		3: "yellow",
		4: "green",
		5: "l-blue",
		6: "violet"
	},
	VN = {
		red: Ir.gradientRed,
		orange: Ir.gradientOrange,
		yellow: Ir.gradientYellow,
		green: Ir.gradientGreen,
		blue: Ir.gradientBlue,
		"l-blue": Ir.gradientLBlue,
		violet: Ir.gradientViolet
	},
	li = ({
		size: e = $N,
		className: t,
		gradientColor: n,
		initials: r,
		fallbackIcon: o,
		children: i,
		...a
	}) => {
		const c = typeof n == "number" ? FN[n] : n,
			d = c && c !== "custom",
			f = r ? u.jsx("div", {
				className: Ir.initials,
				style: {
					fontSize: iy(e)
				},
				children: r
			}) : o;
		return u.jsx(Kr, {
			...a,
			size: e,
			fallbackIcon: f,
			className: te(Ir.host, c && Ir.hasGradient, d && VN[c], t),
			children: i
		})
	};
li.Badge = CN;
li.BadgeWithPreset = IN;
li.Overlay = u4;
li.getInitialsFontSize = iy;
const HN = "_host_1v6o1_1",
	WN = "_shifted_1v6o1_7",
	fv = {
		host: HN,
		shifted: WN
	},
	KN = ({
		className: e,
		...t
	}) => {
		const {
			size: n
		} = P.useContext(uc);
		return u.jsx(Kr.Badge, {
			...t,
			className: te(fv.host, n < 96 && fv.shifted, e)
		})
	},
	UN = "_host_pq4tk_1",
	YN = "_borderStartStartRadius_pq4tk_5",
	qN = "_borderStartEndRadius_pq4tk_9",
	GN = "_borderEndStartRadius_pq4tk_13",
	XN = "_borderEndEndRadius_pq4tk_17",
	Ja = {
		host: UN,
		borderStartStartRadius: YN,
		borderStartEndRadius: qN,
		borderEndStartRadius: GN,
		borderEndEndRadius: XN
	},
	QN = 48,
	ZN = (e, t) => {
		switch (t) {
			case "s":
				return e <= 32 ? 2 : e <= 56 ? 3 : 4;
			case "m":
				return e <= 32 ? 3 : e <= 48 ? 4 : e <= 72 ? 6 : e <= 80 ? 8 : 10;
			case "l":
				return e <= 16 ? 4 : e <= 20 ? 5 : e <= 32 ? 6 : e <= 40 ? 8 : e <= 48 ? 10 : e <= 56 ? 12 : e <= 64 ? 14 : 16
		}
	},
	el = (e, t) => {
		if (t) return `${ZN(e,t)}px`
	},
	Hd = ({
		size: e = QN,
		borderRadius: t = "m",
		borderStartStartRadius: n,
		borderStartEndRadius: r,
		borderEndStartRadius: o,
		borderEndEndRadius: i,
		style: a,
		className: c,
		objectFit: d = "cover",
		...f
	}) => {
		const m = P.useMemo(() => ({
			"--vkui_internal--Image_border_radius": el(e, t),
			"--vkui_internal--Image_border_start_start_radius": el(e, n),
			"--vkui_internal--Image_border_start_end_radius": el(e, r),
			"--vkui_internal--Image_border_end_start_radius": el(e, o),
			"--vkui_internal--Image_border_end_end_radius": el(e, i)
		}), [t, n, r, o, i, e]);
		return u.jsx(Kr, {
			...f,
			objectFit: d,
			size: e,
			style: fo(m, a),
			className: te(c, Ja.host, n && Ja.borderStartStartRadius, r && Ja.borderStartEndRadius, o && Ja.borderEndStartRadius, i && Ja.borderEndEndRadius)
		})
	};
Hd.Badge = KN;
Hd.Overlay = Kr.Overlay;
Hd.FloatElement = Kr.FloatElement;
const JN = "_host_1uo32_1",
	eL = "_withPadding_1uo32_10",
	tL = "_stretched_1uo32_15",
	nL = "_icon_1uo32_20",
	rL = "_title_1uo32_28",
	oL = "_description_1uo32_32",
	iL = "_action_1uo32_41",
	Gi = {
		host: JN,
		withPadding: eL,
		stretched: tL,
		icon: nL,
		title: rL,
		description: oL,
		action: iL
	},
	sy = ({
		stretched: e,
		noPadding: t = !1,
		...n
	}) => u.jsx(We, {
		baseClassName: te(Gi.host, e && Gi.stretched, !t && Gi.withPadding),
		...n
	}),
	ay = e => u.jsx(We, {
		baseClassName: Gi.icon,
		...e
	}),
	ly = ({
		className: e,
		...t
	}) => u.jsx(wa, {
		level: "2",
		weight: "2",
		className: te(e, Gi.title),
		...t
	}),
	cy = ({
		className: e,
		...t
	}) => u.jsx(gh, {
		weight: "3",
		className: te(e, Gi.description),
		...t
	}),
	uy = e => u.jsx(We, {
		baseClassName: Gi.action,
		...e
	}),
	yr = ({
		icon: e,
		title: t,
		children: n,
		action: r,
		noPadding: o = !1,
		...i
	}) => u.jsxs(sy, {
		noPadding: o,
		...i,
		children: [et(e) && u.jsx(ay, {
			children: e
		}), et(t) && u.jsx(ly, {
			children: t
		}), et(n) && u.jsx(cy, {
			children: n
		}), et(r) && u.jsx(uy, {
			children: r
		})]
	});
yr.Container = sy;
yr.Icon = ay;
yr.Title = ly;
yr.Description = cy;
yr.Actions = uy;
const dy = ({
		viewWidth: e,
		viewHeight: t,
		sizeX: n,
		sizeY: r,
		hasPointer: o,
		hasHover: i,
		children: a
	}) => {
		const c = P.useMemo(() => {
			const d = {
				viewWidth: e,
				viewHeight: t,
				sizeX: n,
				sizeY: r,
				hasPointer: o,
				hasHover: i
			};
			return n === void 0 && e !== void 0 && (d.sizeX = Z3(e)), r === void 0 && (J3(e, o) || e4(t) ? d.sizeY = "compact" : (e !== void 0 || t !== void 0) && (d.sizeY = "regular")), d
		}, [e, t, n, r, o, i]);
		return u.jsx(rc.Provider, {
			value: c,
			children: a
		})
	},
	sL = "_host_1jauu_1",
	aL = {
		host: sL
	},
	ul = e => u.jsx(We, {
		baseClassName: aL.host,
		...e
	}),
	lL = e => {
		const {
			window: t
		} = _n(), [n, r] = P.useState(e || If.LIGHT);
		return Je(() => {
			if (e) return r(e), Ie;
			const o = t ? t.matchMedia("(prefers-color-scheme: dark)") : void 0;
			if (!o) return Ie;
			const i = a => {
				r(a.matches ? If.DARK : If.LIGHT)
			};
			return i(o), Ul(o, i), () => Td(o, i)
		}, [t, e]), n
	},
	cL = e => {
		const {
			window: t,
			document: n
		} = _n();
		return P.useMemo(() => e || (!t || !n ? "ltr" : t.getComputedStyle(n.body).direction || "ltr"), [e, n, t])
	},
	fy = e => {
		const t = Qx(e),
			r = {
				...go(),
				...t
			},
			o = lL(r.colorScheme),
			i = cL(r.direction),
			a = $_({
				...r,
				colorScheme: o,
				direction: i
			});
		return u.jsx(vd.Provider, {
			value: a,
			children: u.jsx(X3, {
				value: o,
				children: u.jsx(Q3, {
					children: r.children
				})
			})
		})
	};
var hy = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(pn, function() {
		var n = 1e3,
			r = 6e4,
			o = 36e5,
			i = "millisecond",
			a = "second",
			c = "minute",
			d = "hour",
			f = "day",
			m = "week",
			_ = "month",
			v = "quarter",
			x = "year",
			k = "date",
			A = "Invalid Date",
			C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
			y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
			w = {
				name: "en",
				weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				ordinal: function(Z) {
					var J = ["th", "st", "nd", "rd"],
						X = Z % 100;
					return "[" + Z + (J[(X - 20) % 10] || J[X] || J[0]) + "]"
				}
			},
			b = function(Z, J, X) {
				var re = String(Z);
				return !re || re.length >= J ? Z : "" + Array(J + 1 - re.length).join(X) + Z
			},
			O = {
				s: b,
				z: function(Z) {
					var J = -Z.utcOffset(),
						X = Math.abs(J),
						re = Math.floor(X / 60),
						z = X % 60;
					return (J <= 0 ? "+" : "-") + b(re, 2, "0") + ":" + b(z, 2, "0")
				},
				m: function Z(J, X) {
					if (J.date() < X.date()) return -Z(X, J);
					var re = 12 * (X.year() - J.year()) + (X.month() - J.month()),
						z = J.clone().add(re, _),
						W = X - z < 0,
						K = J.clone().add(re + (W ? -1 : 1), _);
					return +(-(re + (X - z) / (W ? z - K : K - z)) || 0)
				},
				a: function(Z) {
					return Z < 0 ? Math.ceil(Z) || 0 : Math.floor(Z)
				},
				p: function(Z) {
					return {
						M: _,
						y: x,
						w: m,
						d: f,
						D: k,
						h: d,
						m: c,
						s: a,
						ms: i,
						Q: v
					} [Z] || String(Z || "").toLowerCase().replace(/s$/, "")
				},
				u: function(Z) {
					return Z === void 0
				}
			},
			L = "en",
			$ = {};
		$[L] = w;
		var H = "$isDayjsObject",
			q = function(Z) {
				return Z instanceof fe || !(!Z || !Z[H])
			},
			ne = function Z(J, X, re) {
				var z;
				if (!J) return L;
				if (typeof J == "string") {
					var W = J.toLowerCase();
					$[W] && (z = W), X && ($[W] = X, z = W);
					var K = J.split("-");
					if (!z && K.length > 1) return Z(K[0])
				} else {
					var ie = J.name;
					$[ie] = J, z = ie
				}
				return !re && z && (L = z), z || !re && L
			},
			G = function(Z, J) {
				if (q(Z)) return Z.clone();
				var X = typeof J == "object" ? J : {};
				return X.date = Z, X.args = arguments, new fe(X)
			},
			oe = O;
		oe.l = ne, oe.i = q, oe.w = function(Z, J) {
			return G(Z, {
				locale: J.$L,
				utc: J.$u,
				x: J.$x,
				$offset: J.$offset
			})
		};
		var fe = function() {
				function Z(X) {
					this.$L = ne(X.locale, null, !0), this.parse(X), this.$x = this.$x || X.x || {}, this[H] = !0
				}
				var J = Z.prototype;
				return J.parse = function(X) {
					this.$d = function(re) {
						var z = re.date,
							W = re.utc;
						if (z === null) return new Date(NaN);
						if (oe.u(z)) return new Date;
						if (z instanceof Date) return new Date(z);
						if (typeof z == "string" && !/Z$/i.test(z)) {
							var K = z.match(C);
							if (K) {
								var ie = K[2] - 1 || 0,
									le = (K[7] || "0").substring(0, 3);
								return W ? new Date(Date.UTC(K[1], ie, K[3] || 1, K[4] || 0, K[5] || 0, K[6] || 0, le)) : new Date(K[1], ie, K[3] || 1, K[4] || 0, K[5] || 0, K[6] || 0, le)
							}
						}
						return new Date(z)
					}(X), this.init()
				}, J.init = function() {
					var X = this.$d;
					this.$y = X.getFullYear(), this.$M = X.getMonth(), this.$D = X.getDate(), this.$W = X.getDay(), this.$H = X.getHours(), this.$m = X.getMinutes(), this.$s = X.getSeconds(), this.$ms = X.getMilliseconds()
				}, J.$utils = function() {
					return oe
				}, J.isValid = function() {
					return this.$d.toString() !== A
				}, J.isSame = function(X, re) {
					var z = G(X);
					return this.startOf(re) <= z && z <= this.endOf(re)
				}, J.isAfter = function(X, re) {
					return G(X) < this.startOf(re)
				}, J.isBefore = function(X, re) {
					return this.endOf(re) < G(X)
				}, J.$g = function(X, re, z) {
					return oe.u(X) ? this[re] : this.set(z, X)
				}, J.unix = function() {
					return Math.floor(this.valueOf() / 1e3)
				}, J.valueOf = function() {
					return this.$d.getTime()
				}, J.startOf = function(X, re) {
					var z = this,
						W = !!oe.u(re) || re,
						K = oe.p(X),
						ie = function(Ue, ue) {
							var Fe = oe.w(z.$u ? Date.UTC(z.$y, ue, Ue) : new Date(z.$y, ue, Ue), z);
							return W ? Fe : Fe.endOf(f)
						},
						le = function(Ue, ue) {
							return oe.w(z.toDate()[Ue].apply(z.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), z)
						},
						_e = this.$W,
						Ee = this.$M,
						Re = this.$D,
						Oe = "set" + (this.$u ? "UTC" : "");
					switch (K) {
						case x:
							return W ? ie(1, 0) : ie(31, 11);
						case _:
							return W ? ie(1, Ee) : ie(0, Ee + 1);
						case m:
							var Ae = this.$locale().weekStart || 0,
								Le = (_e < Ae ? _e + 7 : _e) - Ae;
							return ie(W ? Re - Le : Re + (6 - Le), Ee);
						case f:
						case k:
							return le(Oe + "Hours", 0);
						case d:
							return le(Oe + "Minutes", 1);
						case c:
							return le(Oe + "Seconds", 2);
						case a:
							return le(Oe + "Milliseconds", 3);
						default:
							return this.clone()
					}
				}, J.endOf = function(X) {
					return this.startOf(X, !1)
				}, J.$set = function(X, re) {
					var z, W = oe.p(X),
						K = "set" + (this.$u ? "UTC" : ""),
						ie = (z = {}, z[f] = K + "Date", z[k] = K + "Date", z[_] = K + "Month", z[x] = K + "FullYear", z[d] = K + "Hours", z[c] = K + "Minutes", z[a] = K + "Seconds", z[i] = K + "Milliseconds", z)[W],
						le = W === f ? this.$D + (re - this.$W) : re;
					if (W === _ || W === x) {
						var _e = this.clone().set(k, 1);
						_e.$d[ie](le), _e.init(), this.$d = _e.set(k, Math.min(this.$D, _e.daysInMonth())).$d
					} else ie && this.$d[ie](le);
					return this.init(), this
				}, J.set = function(X, re) {
					return this.clone().$set(X, re)
				}, J.get = function(X) {
					return this[oe.p(X)]()
				}, J.add = function(X, re) {
					var z, W = this;
					X = Number(X);
					var K = oe.p(re),
						ie = function(Ee) {
							var Re = G(W);
							return oe.w(Re.date(Re.date() + Math.round(Ee * X)), W)
						};
					if (K === _) return this.set(_, this.$M + X);
					if (K === x) return this.set(x, this.$y + X);
					if (K === f) return ie(1);
					if (K === m) return ie(7);
					var le = (z = {}, z[c] = r, z[d] = o, z[a] = n, z)[K] || 1,
						_e = this.$d.getTime() + X * le;
					return oe.w(_e, this)
				}, J.subtract = function(X, re) {
					return this.add(-1 * X, re)
				}, J.format = function(X) {
					var re = this,
						z = this.$locale();
					if (!this.isValid()) return z.invalidDate || A;
					var W = X || "YYYY-MM-DDTHH:mm:ssZ",
						K = oe.z(this),
						ie = this.$H,
						le = this.$m,
						_e = this.$M,
						Ee = z.weekdays,
						Re = z.months,
						Oe = z.meridiem,
						Ae = function(ue, Fe, Me, St) {
							return ue && (ue[Fe] || ue(re, W)) || Me[Fe].slice(0, St)
						},
						Le = function(ue) {
							return oe.s(ie % 12 || 12, ue, "0")
						},
						Ue = Oe || function(ue, Fe, Me) {
							var St = ue < 12 ? "AM" : "PM";
							return Me ? St.toLowerCase() : St
						};
					return W.replace(y, function(ue, Fe) {
						return Fe || function(Me) {
							switch (Me) {
								case "YY":
									return String(re.$y).slice(-2);
								case "YYYY":
									return oe.s(re.$y, 4, "0");
								case "M":
									return _e + 1;
								case "MM":
									return oe.s(_e + 1, 2, "0");
								case "MMM":
									return Ae(z.monthsShort, _e, Re, 3);
								case "MMMM":
									return Ae(Re, _e);
								case "D":
									return re.$D;
								case "DD":
									return oe.s(re.$D, 2, "0");
								case "d":
									return String(re.$W);
								case "dd":
									return Ae(z.weekdaysMin, re.$W, Ee, 2);
								case "ddd":
									return Ae(z.weekdaysShort, re.$W, Ee, 3);
								case "dddd":
									return Ee[re.$W];
								case "H":
									return String(ie);
								case "HH":
									return oe.s(ie, 2, "0");
								case "h":
									return Le(1);
								case "hh":
									return Le(2);
								case "a":
									return Ue(ie, le, !0);
								case "A":
									return Ue(ie, le, !1);
								case "m":
									return String(le);
								case "mm":
									return oe.s(le, 2, "0");
								case "s":
									return String(re.$s);
								case "ss":
									return oe.s(re.$s, 2, "0");
								case "SSS":
									return oe.s(re.$ms, 3, "0");
								case "Z":
									return K
							}
							return null
						}(ue) || K.replace(":", "")
					})
				}, J.utcOffset = function() {
					return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
				}, J.diff = function(X, re, z) {
					var W, K = this,
						ie = oe.p(re),
						le = G(X),
						_e = (le.utcOffset() - this.utcOffset()) * r,
						Ee = this - le,
						Re = function() {
							return oe.m(K, le)
						};
					switch (ie) {
						case x:
							W = Re() / 12;
							break;
						case _:
							W = Re();
							break;
						case v:
							W = Re() / 3;
							break;
						case m:
							W = (Ee - _e) / 6048e5;
							break;
						case f:
							W = (Ee - _e) / 864e5;
							break;
						case d:
							W = Ee / o;
							break;
						case c:
							W = Ee / r;
							break;
						case a:
							W = Ee / n;
							break;
						default:
							W = Ee
					}
					return z ? W : oe.a(W)
				}, J.daysInMonth = function() {
					return this.endOf(_).$D
				}, J.$locale = function() {
					return $[this.$L]
				}, J.locale = function(X, re) {
					if (!X) return this.$L;
					var z = this.clone(),
						W = ne(X, re, !0);
					return W && (z.$L = W), z
				}, J.clone = function() {
					return oe.w(this.$d, this)
				}, J.toDate = function() {
					return new Date(this.valueOf())
				}, J.toJSON = function() {
					return this.isValid() ? this.toISOString() : null
				}, J.toISOString = function() {
					return this.$d.toISOString()
				}, J.toString = function() {
					return this.$d.toUTCString()
				}, Z
			}(),
			me = fe.prototype;
		return G.prototype = me, [
			["$ms", i],
			["$s", a],
			["$m", c],
			["$H", d],
			["$W", f],
			["$M", _],
			["$y", x],
			["$D", k]
		].forEach(function(Z) {
			me[Z[1]] = function(J) {
				return this.$g(J, Z[0], Z[1])
			}
		}), G.extend = function(Z, J) {
			return Z.$i || (Z(J, fe, G), Z.$i = !0), G
		}, G.locale = ne, G.isDayjs = q, G.unix = function(Z) {
			return G(1e3 * Z)
		}, G.en = $[L], G.Ls = $, G.p = {}, G
	})
})(hy);
var py = hy.exports;
const Ma = ci(py);
var my = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(pn, function() {
		var n = {
				LTS: "h:mm:ss A",
				LT: "h:mm A",
				L: "MM/DD/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
			o = /\d/,
			i = /\d\d/,
			a = /\d\d?/,
			c = /\d*[^-_:/,()\s\d]+/,
			d = {},
			f = function(C) {
				return (C = +C) + (C > 68 ? 1900 : 2e3)
			},
			m = function(C) {
				return function(y) {
					this[C] = +y
				}
			},
			_ = [/[+-]\d\d:?(\d\d)?|Z/, function(C) {
				(this.zone || (this.zone = {})).offset = function(y) {
					if (!y || y === "Z") return 0;
					var w = y.match(/([+-]|\d\d)/g),
						b = 60 * w[1] + (+w[2] || 0);
					return b === 0 ? 0 : w[0] === "+" ? -b : b
				}(C)
			}],
			v = function(C) {
				var y = d[C];
				return y && (y.indexOf ? y : y.s.concat(y.f))
			},
			x = function(C, y) {
				var w, b = d.meridiem;
				if (b) {
					for (var O = 1; O <= 24; O += 1)
						if (C.indexOf(b(O, 0, y)) > -1) {
							w = O > 12;
							break
						}
				} else w = C === (y ? "pm" : "PM");
				return w
			},
			k = {
				A: [c, function(C) {
					this.afternoon = x(C, !1)
				}],
				a: [c, function(C) {
					this.afternoon = x(C, !0)
				}],
				Q: [o, function(C) {
					this.month = 3 * (C - 1) + 1
				}],
				S: [o, function(C) {
					this.milliseconds = 100 * +C
				}],
				SS: [i, function(C) {
					this.milliseconds = 10 * +C
				}],
				SSS: [/\d{3}/, function(C) {
					this.milliseconds = +C
				}],
				s: [a, m("seconds")],
				ss: [a, m("seconds")],
				m: [a, m("minutes")],
				mm: [a, m("minutes")],
				H: [a, m("hours")],
				h: [a, m("hours")],
				HH: [a, m("hours")],
				hh: [a, m("hours")],
				D: [a, m("day")],
				DD: [i, m("day")],
				Do: [c, function(C) {
					var y = d.ordinal,
						w = C.match(/\d+/);
					if (this.day = w[0], y)
						for (var b = 1; b <= 31; b += 1) y(b).replace(/\[|\]/g, "") === C && (this.day = b)
				}],
				w: [a, m("week")],
				ww: [i, m("week")],
				M: [a, m("month")],
				MM: [i, m("month")],
				MMM: [c, function(C) {
					var y = v("months"),
						w = (v("monthsShort") || y.map(function(b) {
							return b.slice(0, 3)
						})).indexOf(C) + 1;
					if (w < 1) throw new Error;
					this.month = w % 12 || w
				}],
				MMMM: [c, function(C) {
					var y = v("months").indexOf(C) + 1;
					if (y < 1) throw new Error;
					this.month = y % 12 || y
				}],
				Y: [/[+-]?\d+/, m("year")],
				YY: [i, function(C) {
					this.year = f(C)
				}],
				YYYY: [/\d{4}/, m("year")],
				Z: _,
				ZZ: _
			};

		function A(C) {
			var y, w;
			y = C, w = d && d.formats;
			for (var b = (C = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(G, oe, fe) {
					var me = fe && fe.toUpperCase();
					return oe || w[fe] || n[fe] || w[me].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(Z, J, X) {
						return J || X.slice(1)
					})
				})).match(r), O = b.length, L = 0; L < O; L += 1) {
				var $ = b[L],
					H = k[$],
					q = H && H[0],
					ne = H && H[1];
				b[L] = ne ? {
					regex: q,
					parser: ne
				} : $.replace(/^\[|\]$/g, "")
			}
			return function(G) {
				for (var oe = {}, fe = 0, me = 0; fe < O; fe += 1) {
					var Z = b[fe];
					if (typeof Z == "string") me += Z.length;
					else {
						var J = Z.regex,
							X = Z.parser,
							re = G.slice(me),
							z = J.exec(re)[0];
						X.call(oe, z), G = G.replace(z, "")
					}
				}
				return function(W) {
					var K = W.afternoon;
					if (K !== void 0) {
						var ie = W.hours;
						K ? ie < 12 && (W.hours += 12) : ie === 12 && (W.hours = 0), delete W.afternoon
					}
				}(oe), oe
			}
		}
		return function(C, y, w) {
			w.p.customParseFormat = !0, C && C.parseTwoDigitYear && (f = C.parseTwoDigitYear);
			var b = y.prototype,
				O = b.parse;
			b.parse = function(L) {
				var $ = L.date,
					H = L.utc,
					q = L.args;
				this.$u = H;
				var ne = q[1];
				if (typeof ne == "string") {
					var G = q[2] === !0,
						oe = q[3] === !0,
						fe = G || oe,
						me = q[2];
					oe && (me = q[2]), d = this.$locale(), !G && me && (d = w.Ls[me]), this.$d = function(re, z, W, K) {
						try {
							if (["x", "X"].indexOf(z) > -1) return new Date((z === "X" ? 1e3 : 1) * re);
							var ie = A(z)(re),
								le = ie.year,
								_e = ie.month,
								Ee = ie.day,
								Re = ie.hours,
								Oe = ie.minutes,
								Ae = ie.seconds,
								Le = ie.milliseconds,
								Ue = ie.zone,
								ue = ie.week,
								Fe = new Date,
								Me = Ee || (le || _e ? 1 : Fe.getDate()),
								St = le || Fe.getFullYear(),
								yn = 0;
							le && !_e || (yn = _e > 0 ? _e - 1 : Fe.getMonth());
							var Ot, At = Re || 0,
								On = Oe || 0,
								wr = Ae || 0,
								wn = Le || 0;
							return Ue ? new Date(Date.UTC(St, yn, Me, At, On, wr, wn + 60 * Ue.offset * 1e3)) : W ? new Date(Date.UTC(St, yn, Me, At, On, wr, wn)) : (Ot = new Date(St, yn, Me, At, On, wr, wn), ue && (Ot = K(Ot).week(ue).toDate()), Ot)
						} catch {
							return new Date("")
						}
					}($, ne, H, w), this.init(), me && me !== !0 && (this.$L = this.locale(me).$L), fe && $ != this.format(ne) && (this.$d = new Date("")), d = {}
				} else if (ne instanceof Array)
					for (var Z = ne.length, J = 1; J <= Z; J += 1) {
						q[1] = ne[J - 1];
						var X = w.apply(this, q);
						if (X.isValid()) {
							this.$d = X.$d, this.$L = X.$L, this.init();
							break
						}
						J === Z && (this.$d = new Date(""))
					} else O.call(this, L)
			}
		}
	})
})(my);
var uL = my.exports;
const dL = ci(uL);
var vy = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(pn, function() {
		var n = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		};
		return function(r, o, i) {
			var a = o.prototype,
				c = a.format;
			i.en.formats = n, a.format = function(d) {
				d === void 0 && (d = "YYYY-MM-DDTHH:mm:ssZ");
				var f = this.$locale().formats,
					m = function(_, v) {
						return _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(x, k, A) {
							var C = A && A.toUpperCase();
							return k || v[A] || n[A] || v[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, w, b) {
								return w || b.slice(1)
							})
						})
					}(d, f === void 0 ? {} : f);
				return c.call(this, m)
			}
		}
	})
})(vy);
var fL = vy.exports;
const hL = ci(fL);
var _y = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(pn, function() {
		var n = "month",
			r = "quarter";
		return function(o, i) {
			var a = i.prototype;
			a.quarter = function(f) {
				return this.$utils().u(f) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (f - 1))
			};
			var c = a.add;
			a.add = function(f, m) {
				return f = Number(f), this.$utils().p(m) === r ? this.add(3 * f, n) : c.bind(this)(f, m)
			};
			var d = a.startOf;
			a.startOf = function(f, m) {
				var _ = this.$utils(),
					v = !!_.u(m) || m;
				if (_.p(f) === r) {
					var x = this.quarter() - 1;
					return v ? this.month(3 * x).startOf(n).startOf("day") : this.month(3 * x + 2).endOf(n).endOf("day")
				}
				return d.bind(this)(f, m)
			}
		}
	})
})(_y);
var pL = _y.exports;
const mL = ci(pL);
var gy = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(pn, function() {
		return function(n, r, o) {
			n = n || {};
			var i = r.prototype,
				a = {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				};

			function c(f, m, _, v) {
				return i.fromToBase(f, m, _, v)
			}
			o.en.relativeTime = a, i.fromToBase = function(f, m, _, v, x) {
				for (var k, A, C, y = _.$locale().relativeTime || a, w = n.thresholds || [{
						l: "s",
						r: 44,
						d: "second"
					}, {
						l: "m",
						r: 89
					}, {
						l: "mm",
						r: 44,
						d: "minute"
					}, {
						l: "h",
						r: 89
					}, {
						l: "hh",
						r: 21,
						d: "hour"
					}, {
						l: "d",
						r: 35
					}, {
						l: "dd",
						r: 25,
						d: "day"
					}, {
						l: "M",
						r: 45
					}, {
						l: "MM",
						r: 10,
						d: "month"
					}, {
						l: "y",
						r: 17
					}, {
						l: "yy",
						d: "year"
					}], b = w.length, O = 0; O < b; O += 1) {
					var L = w[O];
					L.d && (k = v ? o(f).diff(_, L.d, !0) : _.diff(f, L.d, !0));
					var $ = (n.rounding || Math.round)(Math.abs(k));
					if (C = k > 0, $ <= L.r || !L.r) {
						$ <= 1 && O > 0 && (L = w[O - 1]);
						var H = y[L.l];
						x && ($ = x("" + $)), A = typeof H == "string" ? H.replace("%d", $) : H($, m, L.l, C);
						break
					}
				}
				if (m) return A;
				var q = C ? y.future : y.past;
				return typeof q == "function" ? q(A) : q.replace("%s", A)
			}, i.to = function(f, m) {
				return c(f, m, this, !0)
			}, i.from = function(f, m) {
				return c(f, m, this)
			};
			var d = function(f) {
				return f.$u ? o.utc() : o()
			};
			i.toNow = function(f) {
				return this.to(d(this), f)
			}, i.fromNow = function(f) {
				return this.from(d(this), f)
			}
		}
	})
})(gy);
var vL = gy.exports;
const _L = ci(vL);
var yy = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(pn, function() {
		return function(n, r) {
			r.prototype.toObject = function() {
				return {
					years: this.$y,
					months: this.$M,
					date: this.$D,
					hours: this.$H,
					minutes: this.$m,
					seconds: this.$s,
					milliseconds: this.$ms
				}
			}
		}
	})
})(yy);
var gL = yy.exports;
const yL = ci(gL);
var cd = function() {
	return cd = Object.assign || function(t) {
		for (var n, r = 1, o = arguments.length; r < o; r++) {
			n = arguments[r];
			for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
		}
		return t
	}, cd.apply(this, arguments)
};

function wL(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
	return n
}

function xL(e, t, n, r) {
	function o(i) {
		return i instanceof n ? i : new n(function(a) {
			a(i)
		})
	}
	return new(n || (n = Promise))(function(i, a) {
		function c(m) {
			try {
				f(r.next(m))
			} catch (_) {
				a(_)
			}
		}

		function d(m) {
			try {
				f(r.throw(m))
			} catch (_) {
				a(_)
			}
		}

		function f(m) {
			m.done ? i(m.value) : o(m.value).then(c, d)
		}
		f((r = r.apply(e, [])).next())
	})
}

function SL(e, t) {
	var n = {
			label: 0,
			sent: function() {
				if (i[0] & 1) throw i[1];
				return i[1]
			},
			trys: [],
			ops: []
		},
		r, o, i, a;
	return a = {
		next: c(0),
		throw: c(1),
		return: c(2)
	}, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
		return this
	}), a;

	function c(f) {
		return function(m) {
			return d([f, m])
		}
	}

	function d(f) {
		if (r) throw new TypeError("Generator is already executing.");
		for (; a && (a = 0, f[0] && (n = 0)), n;) try {
			if (r = 1, o && (i = f[0] & 2 ? o.return : f[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, f[1])).done) return i;
			switch (o = 0, i && (f = [f[0] & 2, i.value]), f[0]) {
				case 0:
				case 1:
					i = f;
					break;
				case 4:
					return n.label++, {
						value: f[1],
						done: !1
					};
				case 5:
					n.label++, o = f[1], f = [0];
					continue;
				case 7:
					f = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (f[0] === 6 || f[0] === 2)) {
						n = 0;
						continue
					}
					if (f[0] === 3 && (!i || f[1] > i[0] && f[1] < i[3])) {
						n.label = f[1];
						break
					}
					if (f[0] === 6 && n.label < i[1]) {
						n.label = i[1], i = f;
						break
					}
					if (i && n.label < i[2]) {
						n.label = i[2], n.ops.push(f);
						break
					}
					i[2] && n.ops.pop(), n.trys.pop();
					continue
			}
			f = t.call(e, n)
		} catch (m) {
			f = [6, m], o = 0
		} finally {
			r = i = 0
		}
		if (f[0] & 5) throw f[1];
		return {
			value: f[0] ? f[1] : void 0,
			done: !0
		}
	}
}

function jh(e, t, n) {
	for (var r = 0, o = t.length, i; r < o; r++)(i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
	return e.concat(i || Array.prototype.slice.call(t))
}

function kL() {
	return {
		current: 0,
		next: function() {
			return ++this.current
		}
	}
}

function bL(e) {
	var t = kL(),
		n = {};
	return {
		add: function(r, o) {
			var i = o ?? "".concat(t.next(), "_").concat(e);
			return n[i] = r, i
		},
		resolve: function(r, o, i) {
			var a = n[r];
			a && (i(o) ? a.resolve(o) : a.reject(o), n[r] = null)
		}
	}
}

function CL(e, t, n) {
	var r = bL(n);
	return t(function(o) {
			if (!(!o.detail || !o.detail.data || typeof o.detail.data != "object") && "request_id" in o.detail.data) {
				var i = o.detail.data,
					a = i.request_id,
					c = wL(i, ["request_id"]);
				a && r.resolve(a, c, function(d) {
					return !("error_type" in d)
				})
			}
		}),
		function(i, a) {
			return a === void 0 && (a = {}), new Promise(function(c, d) {
				var f = r.add({
					resolve: c,
					reject: d
				}, a.request_id);
				e(i, cd(cd({}, a), {
					request_id: f
				}))
			})
		}
}

function EL() {
	var e = 36,
		t = 2,
		n = 3;
	return Math.random().toString(e).substring(t, t + n)
}
var hc = typeof window < "u",
	dl = !!(hc && window.AndroidBridge),
	Vs = !!(hc && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.VKWebAppClose),
	g1 = !!(hc && window.ReactNativeWebView && typeof window.ReactNativeWebView.postMessage == "function"),
	Xi = hc && !dl && !Vs,
	AL = Xi && /(^\?|&)vk_platform=mobile_web(&|$)/.test(location.search),
	IL = Xi && !AL,
	hv = Xi ? "message" : "VKWebAppEvent",
	PL = jh(["VKWebAppInit", "VKWebAppGetCommunityAuthToken", "VKWebAppAddToCommunity", "VKWebAppAddToHomeScreenInfo", "VKWebAppClose", "VKWebAppCopyText", "VKWebAppCreateHash", "VKWebAppGetUserInfo", "VKWebAppSetLocation", "VKWebAppSendToClient", "VKWebAppGetClientVersion", "VKWebAppGetPhoneNumber", "VKWebAppGetEmail", "VKWebAppGetGroupInfo", "VKWebAppGetGeodata", "VKWebAppGetCommunityToken", "VKWebAppGetConfig", "VKWebAppGetLaunchParams", "VKWebAppSetTitle", "VKWebAppGetAuthToken", "VKWebAppCallAPIMethod", "VKWebAppJoinGroup", "VKWebAppLeaveGroup", "VKWebAppAllowMessagesFromGroup", "VKWebAppDenyNotifications", "VKWebAppAllowNotifications", "VKWebAppOpenPayForm", "VKWebAppOpenApp", "VKWebAppShare", "VKWebAppShowWallPostBox", "VKWebAppScroll", "VKWebAppShowOrderBox", "VKWebAppShowLeaderBoardBox", "VKWebAppShowInviteBox", "VKWebAppShowRequestBox", "VKWebAppAddToFavorites", "VKWebAppShowStoryBox", "VKWebAppStorageGet", "VKWebAppStorageGetKeys", "VKWebAppStorageSet", "VKWebAppFlashGetInfo", "VKWebAppSubscribeStoryApp", "VKWebAppOpenWallPost", "VKWebAppCheckAllowedScopes", "VKWebAppCheckBannerAd", "VKWebAppHideBannerAd", "VKWebAppShowBannerAd", "VKWebAppCheckNativeAds", "VKWebAppShowNativeAds", "VKWebAppRetargetingPixel", "VKWebAppConversionHit", "VKWebAppShowSubscriptionBox", "VKWebAppCheckSurvey", "VKWebAppShowSurvey", "VKWebAppScrollTop", "VKWebAppScrollTopStart", "VKWebAppScrollTopStop", "VKWebAppShowSlidesSheet", "VKWebAppTranslate", "VKWebAppRecommend", "VKWebAppAddToProfile", "VKWebAppGetFriends"], IL ? ["VKWebAppResizeWindow", "VKWebAppAddToMenu", "VKWebAppShowInstallPushBox", "VKWebAppShowCommunityWidgetPreviewBox", "VKWebAppCallStart", "VKWebAppCallJoin", "VKWebAppCallGetStatus"] : ["VKWebAppShowImages"]),
	bs, tl = hc ? window.AndroidBridge : void 0,
	Oi = Vs ? window.webkit.messageHandlers : void 0,
	y1 = Xi ? parent : void 0;

function OL(e) {
	var t = void 0,
		n = [],
		r = EL();

	function o(C, y) {
		tl && tl[C] ? tl[C](JSON.stringify(y)) : Oi && Oi[C] && typeof Oi[C].postMessage == "function" ? Oi[C].postMessage(y) : g1 ? window.ReactNativeWebView.postMessage(JSON.stringify({
			handler: C,
			params: y
		})) : y1 && typeof y1.postMessage == "function" && y1.postMessage({
			handler: C,
			params: y,
			type: "vk-connect",
			webFrameId: t,
			connectVersion: e
		}, "*")
	}

	function i(C) {
		n.push(C)
	}

	function a(C) {
		var y = n.indexOf(C);
		y > -1 && n.splice(y, 1)
	}

	function c(C) {
		return dl ? !!(tl && typeof tl[C] == "function") : Vs ? !!(Oi && Oi[C] && typeof Oi[C].postMessage == "function") : Xi ? PL.includes(C) : !1
	}

	function d(C) {
		return console.warn("bridge.supports method is deprecated. Use bridge.supportsAsync instead."), c(C)
	}

	function f() {
		return Vs || dl
	}

	function m() {
		return Xi && window.parent !== window
	}

	function _() {
		return f() || m()
	}

	function v() {
		return !_()
	}

	function x(C) {
		if (Vs || dl) return jh([], n).map(function(L) {
			return L.call(null, C)
		});
		var y = C == null ? void 0 : C.data;
		if (!(!Xi || !y)) {
			if (g1 && typeof y == "string") try {
				y = JSON.parse(y)
			} catch {}
			var w = y.type,
				b = y.data,
				O = y.frameId;
			if (w) {
				if (w === "VKWebAppSettings") {
					t = O;
					return
				}
				jh([], n).map(function(L) {
					return L({
						detail: {
							type: w,
							data: b
						}
					})
				})
			}
		}
	}
	g1 && /(android)/i.test(navigator.userAgent) ? document.addEventListener(hv, x) : typeof window < "u" && "addEventListener" in window && window.addEventListener(hv, x);
	var k = CL(o, i, r);

	function A(C) {
		return xL(this, void 0, void 0, function() {
			var y;
			return SL(this, function(w) {
				switch (w.label) {
					case 0:
						if (dl || Vs) return [2, c(C)];
						if (bs) return [2, bs.has(C)];
						w.label = 1;
					case 1:
						return w.trys.push([1, 3, , 4]), [4, k("SetSupportedHandlers")];
					case 2:
						return y = w.sent(), bs = new Set(y.supportedHandlers), [3, 4];
					case 3:
						return w.sent(), bs = new Set(["VKWebAppInit"]), [3, 4];
					case 4:
						return [2, bs.has(C)]
				}
			})
		})
	}
	return i(function(C) {
		if (C.detail) switch (C.detail.type) {
			case "SetSupportedHandlers":
				bs = new Set(C.detail.data.supportedHandlers)
		}
	}), {
		send: k,
		sendPromise: k,
		subscribe: i,
		unsubscribe: a,
		supports: d,
		supportsAsync: A,
		isWebView: f,
		isIframe: m,
		isEmbedded: _,
		isStandalone: v
	}
}
var ML = "2.15.11",
	pv;
(function(e) {
	e.REWARD = "reward", e.INTERSTITIAL = "interstitial"
})(pv || (pv = {}));
var mv;
(function(e) {
	e.RESIZE = "resize", e.OVERLAY = "overlay"
})(mv || (mv = {}));
var vv;
(function(e) {
	e.TOP = "top", e.BOTTOM = "bottom"
})(vv || (vv = {}));
var _v;
(function(e) {
	e.LEFT = "left", e.RIGHT = "right", e.CENTER = "center"
})(_v || (_v = {}));
var gv;
(function(e) {
	e.COMPACT = "compact", e.REGULAR = "regular"
})(gv || (gv = {}));
var yv;
(function(e) {
	e.HORIZONTAL = "horizontal", e.VERTICAL = "vertical"
})(yv || (yv = {}));
var wv;
(function(e) {
	e.CAMERA = "camera", e.LOCATION = "location", e.PHOTO = "photo"
})(wv || (wv = {}));
var xv;
(function(e) {
	e.RU = "ru", e.UK = "uk", e.UA = "ua", e.EN = "en", e.BE = "be", e.KZ = "kz", e.PT = "pt", e.ES = "es"
})(xv || (xv = {}));
var Sv;
(function(e) {
	e.ADMIN = "admin", e.EDITOR = "editor", e.MEMBER = "member", e.MODER = "moder", e.NONE = "none"
})(Sv || (Sv = {}));
var kv;
(function(e) {
	e.DESKTOP_WEB = "desktop_web", e.DESKTOP_WEB_MESSENGER = "desktop_web_messenger", e.DESKTOP_APP_MESSENGER = "desktop_app_messenger", e.MOBILE_WEB = "mobile_web", e.MOBILE_ANDROID = "mobile_android", e.MOBILE_ANDROID_MESSENGER = "mobile_android_messenger", e.MOBILE_IPHONE = "mobile_iphone", e.MOBILE_IPHONE_MESSENGER = "mobile_iphone_messenger", e.MOBILE_IPAD = "mobile_ipad"
})(kv || (kv = {}));
var up = OL(ML);
const jL = {
		account: {
			block_name: "Профиль",
			functions: {
				reg_date: "Дата регистрации",
				blacklists: "Добавившие в черный список",
				id: "Узнать id страницы",
				blacklist_clean: "Очистка черного списка",
				gifts_stat: "Статистика подарков",
				stickers_stat: "Статистика стикеров",
				votes_stat: "Статистика голосов",
				docs_clean: "Очистка документов"
			}
		},
		friends: {
			block_name: "Друзья",
			functions: {
				clean: "Очистка друзей",
				clean_by_id: "Очистка друзей по id",
				activities_clean: "Очистка неактивных друзей",
				out_clean: "Очистка исходящих заявок",
				lower: "Понизить друга",
				analysis: "Анализ друзей",
				career: "Карьера",
				groups: "Общие сообщества",
				search: "Поиск друзей",
				app: "Друзья в приложении",
				active: "Активность публикаций друзей",
				handshakes: "Знакомства через рукопожатия",
				clean_by_subscriptions: "Очистка друзей по подпискам"
			}
		},
		followers: {
			block_name: "Подписчики",
			functions: {
				add: "Добавление подписчиков",
				clean: "Очистка подписчиков",
				elite: "Элитные подписчики",
				search: "Поиск подписчиков",
				activities_add: "Добавление активных подписчиков"
			}
		},
		wall: {
			block_name: "Стена",
			functions: {
				clean: "Очистка стены",
				clean_no_filters: "Очистка стены без фильтров и предзагрузки",
				analysis: "Анализ стены",
				contest: "Случайные победители",
				check_post: "Анализ записи",
				search_mentions: "Поиск упоминаний",
				clean_snippet_cache: "Очистка кеша сниппета"
			}
		},
		groups: {
			block_name: "Сообщества",
			functions: {
				analysis: "Анализ сообществ",
				followers_clean: "Очистка участников",
				clean: "Чистка сообществ",
				friends: "Популярное среди друзей",
				donut: "Популярное по донатам друзей",
				active: "Активность публикаций в сообществах",
				birthday: "Дни рождения подписчиков",
				blacklist: "Статистика черного списка",
				elite: "Элитные подписчики",
				donut_members: "Анализ платных подписчиков",
				poll: "Анализ опроса",
				followers_search: "Поиск подписчиков",
				followers_donut_search: "Поиск подписчиков VK Donut",
				blacklist_clean: "Очистка черного списка",
				tasks_constructor: "Конструктор заданий",
				activities_clean: "Очистка неактивных",
				sync_donut_groups: "Синхронизация группы по VK Donut"
			}
		},
		stories: {
			block_name: "Истории",
			functions: {
				stat: "Статистика историй",
				viewers_stat: "Статистика зрителей",
				download: "Скачивание историй",
				clean: "Очистка историй"
			}
		},
		photos: {
			block_name: "Фотографии",
			functions: {
				clean: "Очистка фотографий",
				download_album: "Скачать альбом",
				stat: "Статистика фотографий",
				tags: "Автор анонимной отметки",
				tags_clean: "Удаление отметок на фотографиях"
			}
		},
		videos: {
			block_name: "Видео",
			functions: {
				clean: "Очистка видеозаписей"
			}
		},
		vk_donut: {
			block_name: "VK Donut"
		},
		messages: {
			block_name: "Сообщения",
			functions: {
				dialogs_count: "Самые большие диалоги",
				clean: "Очистка диалогов",
				stat: "Статистика сообщений",
				read: "Прочитать сообщения",
				chats_return: "Покинувшие беседы",
				download_attachments: "Скачать вложения"
			}
		}
	},
	TL = {
		profile: "Профиль",
		back: "Назад",
		favorite: "Избранное",
		action: {
			cancel: "Отмена",
			accept: "Подтвердить"
		},
		popout_description: "Уверены, что хотите подтвердить действие?"
	},
	RL = {},
	NL = {
		icons: "Иконка приложения",
		logout: "Выйти из аккаунта",
		clear_session: "Очистить локальные данные",
		ref_title: "Реферальная ссылка",
		channel: "Новости проекта",
		faq_title: "Ответы на вопросы",
		faq_description: "В статье рассмотрены популярные вопросы",
		vk_group: "Сообщество ВКонтакте",
		tg_channel: "Канал в Telegram",
		clear_cache: "Очистить кэш",
		clear_cache_done: "Кэш успешно очищен!",
		clear_cache_images: "Очистить кэш изображений",
		clear_cache_images_done: "Кэш изображений успешно очищен!",
		header_vk: "ВКонтакте",
		clear_cache_description: ["Сохранен {count} ключ", "Сохранено {count} ключа", "Сохранено {count} ключей"],
		clear_cache_images_description: ["Сохранено {count} изображение", "Сохранено {count} изображения", "Сохранено {count} изображений"],
		radiator_springs: "Radiator Springs",
		ref_description: "У вас есть возможность получить вознаграждения за приглашенных новых пользователей в Tool 42. К каждому индивидуальный подход и вознаграждение нужно заранее {link}обсуждать с разработчиком проекта{/link}.",
		ref_copied: "Ссылка скопирована",
		level_name: {
			without_donut: "Без подписки Tool 42 Premium",
			with_donut: "С подпиской Tool 42 Premium",
			with_donut_expiring: "С подпиской Tool 42 Premium, истекает {date}"
		}
	},
	LL = {
		title: "Подписка Tool 42 Premium",
		manage_button: "Настройка VK Donut",
		description: "Открой все возможности проекта и поддержи автора!",
		info: "Возможности",
		get_subscription: "Оформить",
		expiring: "Истекает {date}"
	},
	DL = {
		methods: "Категории",
		sections: "Подборки",
		news_title: "Новости проекта",
		search: "Поиск",
		search_not_found: "Методы не найдены",
		go_home: "Перейти на главную",
		favorites: "Избранное",
		profile: "Открыть настройки",
		documentation: "Документация",
		documentation_description: "Описание методов и ответы на другие вопросы",
		methodsLimitHeader: "Расширенные методы",
		methodsLimitButton: "Снять ограничение",
		methodsLimit: "Использовано {decline} из {limit} в месяц",
		tg_description: "Этот раздел активно разрабатывается и со временем будет пополняться новыми методами. Будем рады вашей обратной связи!",
		tabs: {
			vk: "ВКонтакте",
			telegram: "Telegram"
		},
		methodsLimitDecline: ["бесплатный запуск", "бесплатных запуска", "бесплатных запусков"],
		poll: {
			title: "Опрос",
			description: "Нам важно ваше мнение для улучшения продукта"
		}
	},
	BL = {},
	zL = {
		description: "Не вижу связь с интернетом. Приложение не может работать в автономном режиме."
	},
	$L = {
		rate_limit: "Превышен лимит ВКонтакте изменения списка друзей",
		time_decline: {
			days: ["сутки", "суток", "суток"],
			hours: ["час", "часа", "часов"],
			minutes: ["минута", "минуты", "минут"],
			seconds: ["секунда", "секунды", "секунд"]
		}
	},
	FL = {
		get_friends: "Получаю список друзей",
		get_followers: "Получаю список подписчиков",
		get_requests: "Получаю список заявок",
		approve_request: "Принимаю заявки",
		delete_users: "Удаляю пользователей",
		delete_subscribers: "Удаляю из подписчиков",
		added_users: "Добавляю пользователей",
		ban_users: "Баню пользователей",
		get_posts: "Получаю список записей",
		get_bans: "Получаю список пользователей",
		get_users: "Получаю пользователей",
		get_dialogs: "Получаю диалоги",
		get_chats: "Получаю беседы",
		get_messages: "Получаю сообщения",
		get_videos: "Получаю видеозаписи",
		get_messages_counter: "Расчитываю количество сообщений",
		get_groups: "Получаю сообщества",
		oops: "Упс",
		wtf: "Что-то пошло не так",
		time_decline: {
			days: ["сутки", "суток", "суток"],
			hours: ["час", "часа", "часов"],
			minutes: ["минута", "минуты", "минут"],
			seconds: ["секунда", "секунды", "секунд"]
		},
		deleted_result: "Удалено: {count}.",
		deleted_result_error: "Увы, вы уперлись в лимит ВКонтакте. Можно удалять 10 000 пользователей в сутки. Приходите завтра!",
		get_stories: "Получаю истории",
		no_stories: "Нам не удалось получить ваши последние истории. Возможно, вы ничего не публиковали."
	},
	VL = {
		type: "Тип списка",
		ids: "Список ids",
		links: "Список ссылок",
		mentions: "Список упоминаний",
		without_chats: "без бесед",
		divider: "Разделитель",
		comma: "запятая",
		space: "пробел",
		break: "перенос строки",
		elements: ["элемент", "элемента", "элементов"],
		export: "Экспортировать",
		export_title: "Экспорт списка"
	},
	HL = {
		export_title: "Экспорт CSV",
		export_button: "csv",
		delimiter: "Разделитель",
		headers: "Поля"
	},
	WL = {
		empty_list: "Список пуст",
		previous: "Предыдущие",
		next: "Следующие",
		range: "Отображается диапазон {from}-{to}",
		display: "Отображается {count} {decline}",
		users: ["пользователь", "пользователя", "пользователей"],
		groups: ["сообщество", "сообщества", "сообществ"],
		filters: {
			open_button: "Фильтр для выделения",
			selected: "Выделено",
			close_button: "Закрыть фильтр",
			select_all_button: "Выделить всех",
			deselect_all_button: "Снять выделение со всех",
			women_button: "Снять выделение с девушек",
			men_button: "Снять выделение с парней",
			resize_title: "Уменьшить выделение до N человек"
		}
	},
	KL = {
		not_allowed_link: "Некорректный тип ссылки",
		unknown_link: "Некорректная ссылка",
		access_error: "Ошибка доступа к ссылке",
		album_not_found: "Альбом не найден"
	},
	UL = {
		activity: {
			title: "Активность",
			description: "График отображает активность событий. Боковая шкала — день события, верхняя шкала — время события.",
			min: "Нет активности",
			max: "Максимальная"
		},
		women_men: {
			decline: {
				women: ["девушка", "девушки", "девушек"],
				men: ["парень", "парня", "парней"]
			}
		}
	},
	YL = {
		select_all: "Выбрать весь период",
		period_header: "Период сканирования",
		selected: "Выбранный период",
		no_selected: "ничего не выбрано",
		buttons: {
			today: "Сегодня",
			yesterday: "Вчера",
			week: "Текущая неделя",
			prev_week: "Прошлая неделя",
			month: "Текущий месяц",
			prev_month: "Прошлый месяц",
			quarter: "Текущий квартал",
			year: "Текущий год",
			all: "За весь период"
		}
	},
	qL = {
		empty_total: "Считаем"
	},
	GL = {
		copy: "Скопировать",
		copy_done: "Скопировано!",
		download: "Скачать",
		download_done: "Скачано!",
		to_many_rows: "Слишком много данных для отображения"
	},
	XL = {
		description_list: "Для отображения всего списка необходимо иметь подписку Tool 42 Premium",
		description_method_premium: "Для запуска метода необходимо иметь подписку Tool 42 Premium",
		description_multi_accounts: "Для быстрого переключения между аккаунтами необходимо иметь подписку Tool 42 Premium хотя бы на одном из сохранённых аккаунтов",
		button: "Подписка Tool 42 Premium"
	},
	QL = {
		story_title: "Публикация истории",
		story_description: "На вашей странице будет опубликована история",
		story_button: "Поделиться в истории",
		story_button_done: "Опубликовано в истории",
		publish_button: "Опубликовать"
	},
	ZL = {
		header: "Добавить на главный экран",
		description: "Чтобы быстро открывать приложение, добавьте его на главный экран вашего устройства",
		rows: {
			share_ios: "Нажмите на иконку «Поделиться» в панели браузера",
			share_android: "Нажмите на «три точки» в панели браузера",
			add_ios: "Найдите в списке пункт «На экран “Домой”»",
			add_android: "Найдите в списке пункт «Добавить на главный экран»",
			add_android_yandex: "Найдите в списке пункт «Добавить ярлык на рабочий стол»",
			confirm: "Нажмите «Добавить»"
		}
	},
	JL = {
		done: "Готово",
		error: "Ошибка"
	},
	eD = {
		photo: ["фотография", "фотографии", "фотографий"],
		posted_photo: ["фотография, загруженная напрямую", "фотографии, загруженные напрямую", "фотографий, загруженных напрямую"],
		video: ["видеозапись", "видеозаписи", "видеозаписей"],
		videos: ["видеозапись", "видеозаписи", "видеозаписей"],
		video_playlist: ["плейлист с видео", "плейлиста с видео", "плейлистов с видео"],
		audio: ["аудиозапись", "аудиозаписи", "аудиозаписей"],
		playlist: ["плейлист", "плейлиста", "плейлистов"],
		doc: ["документ", "документа", "документов"],
		graffiti: ["граффити", "граффити", "граффити"],
		link: ["ссылка", "ссылки", "ссылок"],
		note: ["заметка", "заметки", "заметок"],
		app: ["вложение приложений", "вложения приложений", "вложений приложений"],
		poll: ["опрос", "опроса", "опросов"],
		page: ["вики-страница", "вики-страницы", "вики-страниц"],
		album: ["альбом", "альбома", "альбомов"],
		photos: ["фотография", "фотографии", "фотографий"],
		photos_list: ["фотография в списке", "фотографии в списке", "фотографий в списке"],
		market: ["товар", "товара", "товаров"],
		market_album: ["подборка товаров", "подборки товаров", "подборок товаров"],
		sticker: ["стикер", "стикера", "стикеров"],
		pretty_cards: ["карточка карусели", "карточки карусели", "карточек карусели"],
		podcast: ["подкаст", "подкаста", "подкастов"],
		narrative: ["момент", "момента", "моментов"],
		event: ["мероприятие", "мероприятия", "мероприятий"],
		situational_theme: ["ситуативный пост", "ситуативных поста", "ситуативных постов"],
		situational_template: ["шаблон", "шаблона", "шаблонов"],
		textlive: ["репортаж", "репортажа", "репортажей"],
		textpost_publish: ["запись с репортажем", "записи с репортажами", "записей с репортажами"],
		textpost: ["запись из репортажа", "записи из репортажей", "записей из репортажей"],
		wall: ["запись", "записи", "записей"],
		curator: ["карточка куратора", "карточки кураторов", "карточек кураторов"],
		gift: ["подарок", "подарка", "подарков"],
		call: ["звонок", "звонка", "звонков"],
		wall_reply: ["комментарий", "комментария", "комментариев"],
		audio_message: ["голосовое сообщение", "голосовых сообщений", "голосовых сообщений"],
		story: ["история", "истории", "историй"],
		online_booking: ["онлайн-запись", "онлайн-записи", "онлайн-записей"],
		views: ["просмотр", "просмотра", "просмотров"],
		likes: ["лайк", "лайка", "лайков"],
		replies: ["ответ на историю", "ответа на истории", "ответов на истории"],
		answer: ["ответ в личку", "ответа в личку", "ответов в личку"],
		shares: ["раз поделились историей", "раза поделились историей", "раз поделились историей"],
		subscribers: ["новый подписчик", "новых подписчика", "новых подписчиков"],
		bans: ["скрытие истории", "скрытия историй", "скрытий историй"],
		open_link: ["открытие ссылки", "открытия ссылок", "открытий ссылок"],
		hashtag: ["хэштег", "хэштега", "хэштегов"],
		mention: ["упоминание", "упоминания", "упоминаний"],
		place: ["место", "места", "мест"],
		geo: ["место", "места", "мест"],
		question: ["вопрос", "вопроса", "вопросов"],
		text: ["текст", "текста", "текстов"],
		time: ["время", "времени", "времен"],
		emoji: ["эмоджи", "эмоджи", "эмоджи"],
		market_item: ["товар из магазина", "товара из магазина", "товаров из магазина"],
		owner: ["профиль", "профиля", "профилей"],
		post: ["пост", "поста", "постов"],
		story_reply: ["ответ на историю", "ответа на истории", "ответов на истории"],
		clip: ["клип", "клипа", "клипов"]
	},
	tD = {
		DonutModal: {
			header: "Расширенные возможности Tool 42",
			button_about: "Подробнее о подписке",
			button_donut: "Поддержка через VK Donut",
			button_donut_stars: "Поддержать через Telegram Stars",
			banner: {
				title: "Подписка Tool 42 Premium",
				description: "Пользуйся всеми преимуществами сервиса!",
				button: "Узнать подробнее"
			},
			rows: {
				methods: "Доступ ко всем методам"
			}
		}
	},
	nD = {
		AbstractMethod: {
			loading: "Секундочку",
			cancel: "Отменить операцию",
			load_more_owners: "Загрузить ещё",
			finish: "Готово",
			error: "Ошибка",
			profile: "Ваш профиль",
			no_access: "Нет доступа к стене",
			no_turn_on_donut: "Не подключен VK Donut",
			rate_limit_add: "Упс, вы превысили лимит добавления пользователей. В ближайшее время вы не сможете добавлять пользователей, попробуйте повторить попытку через несколько часов. Увы, это ограничение со стороны ВКонтакте, мы никак не можем повлиять на ситуацию.",
			rate_limit_delete: "Упс, вы превысили лимит удаления пользователей. В ближайшее время вы не сможете удалять пользователей, попробуйте повторить попытку через несколько часов. Увы, это ограничение со стороны ВКонтакте, мы никак не можем повлиять на ситуацию.",
			users: ["участник", "участника", "участников"]
		},
		AccountBlacklistClean: {
			blacklist_empty: "Черный список пуст",
			blacklist_title: "В черном списке",
			list_clean: "Очистить список",
			alert_title: "Очистка черного списка",
			alert_approve: "Очистить"
		},
		AccountBlacklists: {
			get_users_info: "Готовлю друзей к анализу",
			get_lists: "Получаю друзей друзей",
			get_users: "Получаю информацию о пользователях",
			nobody_add: "Никто не добавил вас в черный список",
			footer: "Приложение не может показать 100% найденных страниц, которые добавили вас в черный список. Tool 42 отображает информацию, которую может получить на основании данных из профилей ваших друзей.",
			error_zero: "Неведомая ошибка, тут можно показать её только разработчику",
			extra_check_1: "Дополнительная проверка #1",
			extra_check_2: "Дополнительная проверка #2",
			users: ["Вас заблокировал {count} пользователь", "Вас заблокировали {count} пользователя", "Вас заблокировало {count} пользователей"],
			users_ma: ["Вас заблокировал", "Вас заблокировали", "Вас заблокировало"],
			share: {
				title: "Меня добавили в ЧС",
				users: ["человек", "человека", "человек"]
			}
		},
		AccountGiftsStat: {
			loading: "Получаю подарки",
			empty: "У вас нет подарков",
			with_message: "содержит сообщение",
			years: "По годам",
			gifts: "Топ подарков",
			users: "Топ отправителей",
			privacy: {
				header: "Приватность подарков",
				public: "Виден всем",
				owner: "Виден только получателю",
				hide: "Анонимный подарок"
			},
			decline: {
				gifts: ["подарок", "подарка", "подарков"],
				stickers: ["набор стикеров", "набора стикеров", "наборов стикеров"]
			}
		},
		AccountId: {
			button: "Узнать id",
			error: "Некорректный адрес",
			id_copied: "Id скопирован",
			input_placeholder: "Адрес страницы (vk.ru/gro или @tuta)",
			types: {
				application: "Приложение",
				vk_app: "Сервис",
				user: "Пользователь",
				group: "Сообщество",
				page: "Публичная страница",
				event: "Мероприятие"
			}
		},
		AccountRegDate: {
			date: "С {date} года",
			years: ["год", "года", "лет"],
			months: ["месяц", "месяца", "месяцев"],
			days: ["день", "дня", "дней"],
			date_diff: "{date} назад",
			date_zero: "По техническим причинам мы не можем посчитать вам дату регистрации. Простите, что не оправдали ожидания от метода. :(",
			max_users: "К сожалению, мы отображаем дату регистрации только для пользователей, чей id меньше 1 миллиарда.",
			page_button: "Добавить кнопку в профиль",
			title_you: "Вы",
			title_vk: "ВКонтакте",
			friends_title: "Друзья, которые давно сидят ВКонтакте",
			share: {
				title: "Я ВКонтакте"
			}
		},
		AccountStickersStat: {
			loading: "Получаю стикеры",
			all: "Всего ВКонтакте {count_decline}",
			purchased: "У вас есть {count_decline}",
			active: "Вы используете {count_decline}",
			no_stickers: "У вас нет ни одного стикерпака",
			stickers: {
				header: "Стикеры",
				percent_total: "Это {count}% от всех стикеров ВКонтакте",
				percent_purchased: "Это {count}% от всех купленных стикеров",
				years_header: "Добавление стикеров по годам",
				decline: ["стикерпак", "стикерпака", "стикерпаков"]
			},
			styles: {
				header: "Стили",
				percent_total: "Это {count}% от всех стилей ВКонтакте",
				percent_purchased: "Это {count}% от всех купленных стилей",
				years_header: "Добавление стилей по годам",
				decline: ["стиль", "стиля", "стилей"]
			}
		},
		AccountVotesStat: {
			loading: "Получаю историю голосов",
			empty: "История голосов пуста",
			summary: {
				header: "Общая статистика",
				operations: "Всего операций",
				expense: "Потрачено голосов",
				expense_rubles: "Сумма в рублях",
				expense_formula: "Формула: количество голосов × 7"
			},
			types: {
				header: "Типы операций",
				count: "{count_decline}, {amount} голосов"
			},
			payments: {
				header: "Способы пополнения",
				count: "{count_decline}, {amount} голосов",
				unknown: "Неизвестно",
				titles: {
					payment_system: "Платёжная система",
					terminals: "Терминалы",
					cards: "Банковские карты",
					store: "Магазин VK",
					sms: "SMS",
					"VK Pay": "VK Pay",
					"Visa QIWI Wallet": "Visa QIWI Wallet",
					ЮMoney: "ЮMoney",
					"Система Быстрых Платежей": "Система быстрых платежей",
					"Деньги@Mail.Ru": "Деньги@Mail.Ru",
					WebMoney: "WebMoney",
					"Банковская карта + Бонусы VKPay": "Банковская карта + бонусы VK Pay"
				}
			},
			years: {
				header: "По годам",
				count: "{count_decline}, {amount} голосов"
			},
			users: {
				incoming_header: "Топ переводов от пользователей",
				outgoing_header: "Топ переводов пользователям",
				unknown: "Неизвестный пользователь"
			},
			apps: {
				expense_header: "Топ приложений по тратам",
				income_header: "Топ приложений по начислениям",
				unknown: "Неизвестное приложение"
			},
			decline: {
				operations: ["операция", "операции", "операций"],
				votes: ["голос", "голоса", "голосов"]
			},
			record_types: {
				promo_code: "Промокоды",
				refill: "Пополнения",
				gifts: "Подарки",
				stickers_gift: "Стикеры в подарок",
				apps: "Приложения",
				transfer: "Переводы",
				transfer_in: "Переводы от пользователей",
				transfer_out: "Переводы пользователям",
				apps_admin: "Приложения (админ)",
				stickers_pack: "Наборы стикеров",
				bonus: "Бонусы",
				deposit_app: "Пополнения в приложениях",
				live_donation: "Донаты в трансляциях",
				moder: "Модерация",
				offers: "Офферы",
				awards: "Награды",
				gifts_package: "Пакеты подарков"
			}
		},
		FollowersAdd: {
			cancel: "Отмена",
			all: "Все пользователи",
			time: "Недавно заходил",
			friends: "Есть общие друзья",
			avatar: "Есть аватар",
			finish: "Готово",
			followers_info: "Вы можете добавить из подписчиков в друзья {count} {decline}",
			add: "Добавить в друзья",
			users: ["пользователь", "пользователя", "пользователей"]
		},
		FriendsActive: {
			get_wall: "Проверяю стены друзей",
			get_friends_error: "У вас отсутствуют друзья",
			banned: "Профиль заблокирован",
			deleted: "Профиль удален",
			no_posts: "Без записей"
		},
		FriendsAnalysis: {
			no_friends: "У пользователя нет друзей",
			show_all_users: "Показать всех",
			show_all_items: "Показать весь список",
			titles: {
				deactivated: "Заблокированные",
				deactivated_by_country: "Заблокированные в вашей стране",
				deleted: "Удаленные",
				verified: "Верифицированные",
				short_screen_names: "С коротким адресом страницы",
				mode_followers: "Много подписчиков",
				common_friends: "По количеству общих",
				old_online: "По времени захода",
				closed_messages: "Закрыты сообщения",
				trending: "С прометеем",
				no_index: "Скрыли профиль от поисковиков",
				is_closed: "Закрытый профиль",
				career_list: "По месту работы",
				sex: "Разделение по полу",
				years: "Год рождения",
				months: "Месяц рождения",
				countries: "Топ стран",
				cities: "Топ городов",
				langs: "Указанные языки",
				relation: "Семейное положение",
				relatives: "Список родственников",
				political: "Политические предпочтения",
				people_main: "Главное в людях",
				life_main: "Главное в жизни",
				smoking: "Отношение к курению",
				alcohol: "Отношение к алкоголю"
			},
			decline: {
				friends: ["друг", "друга", "друзей"],
				mutual_friends: ["общий друг", "общих друга", "общих друзей"],
				followers: ["подписчик", "подписчика", "подписчиков"]
			},
			miniNames: {
				months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
				political: {
					1: "Коммунистические",
					2: "Социалистические",
					3: "Умеренные",
					4: "Либеральные",
					5: "Консервативные",
					6: "Монархические",
					7: "Ультраконсервативные",
					8: "Индифферентные",
					9: "Либертарианские"
				},
				relation: {
					0: "Не указано",
					1: "Не женат / не замужем",
					2: "Есть друг / есть подруга",
					3: "Помолвлен / помолвлена",
					4: "Женат / замужем",
					5: "Всё сложно",
					6: "В активном поиске",
					7: "Влюблён / влюблена",
					8: "В гражданском браке"
				},
				relatives: {
					sibling: "Брат / сестра",
					parent: "Отец / мать",
					child: "Сын / дочь",
					grandparent: "Дедушка / бабушка",
					grandchild: "Внук / внучка"
				},
				people_main: {
					1: "Ум и креативность",
					2: "Доброта и честность",
					3: "Красота и здоровье",
					4: "Власть и богатство",
					5: "Смелость и упорство",
					6: "Юмор и жизнелюбие"
				},
				life_main: {
					1: "Семья и дети",
					2: "Карьера и деньги",
					3: "Развлечения и отдых",
					4: "Наука и исследования",
					5: "Совершенствование мира",
					6: "Саморазвитие",
					7: "Красота и искусство",
					8: "Слава и влияние"
				},
				smoking: {
					1: "Резко негативное",
					2: "Негативное",
					3: "Компромиссное",
					4: "Нейтральное",
					5: "Положительное"
				},
				alcohol: {
					1: "Резко негативное",
					2: "Негативное",
					3: "Компромиссное",
					4: "Нейтральное",
					5: "Положительное"
				}
			}
		},
		FriendsApp: {
			button: "Проверить приложение",
			other_error: "Неизвестная ошибка",
			not_app: "Данная ссылка принадлежит не приложению",
			address: "Введите адрес приложения",
			nobody: "Никто из друзей не пользуется приложением.",
			friends: "Друзья в приложении",
			last: "Последние проверки",
			members: ["участник", "участника", "участников"]
		},
		FriendsCareer: {
			loading: "Смотрим в трудовые книжки",
			empty: "Все безработные. =(",
			no_info: "Нет информации о работе",
			friends: ["друг", "друга", "друзей"]
		},
		FriendsGroups: {
			loading: "Получаю друзей",
			empty: "У вас нет сообществ",
			empty_friends: "У вас нет общих сообществ с друзьями",
			groups: ["сообщество", "сообщества", "сообществ"]
		},
		FriendsHandshakes: {
			button: "Проверить цепочку",
			suggestions: "Может вам будет интересно",
			title: "Вы знакомы с {name} через {number} {decline}",
			decline: ["рукопожатие", "рукопожатия", "рукопожатий"],
			loadings: {
				three_handshakes: "Проверяем 3 рукопожатие",
				four_handshakes: "Проверяем 4 рукопожатие"
			},
			errors: {
				other_error: "Неизвестная ошибка",
				not_user: "Адрес принадлежит не пользователю",
				address: "Введите адрес пользователя",
				not_found: "Пользователь не найден",
				access_closed: "Профиль закрыт",
				no_friends: "У пользователя нет друзей",
				no_current_friends: "У вас нет друзей",
				myself: "Одинокое рукопожатие с самим собой",
				more_handshakes: "Слишком много рукопожатий. =("
			}
		},
		GroupsAnalysis: {
			no_groups: "У вас нет сообществ",
			show_all_groups: "Показать все",
			donut_from: "от {price}",
			titles: {
				deactivated: "Заблокированные",
				verified: "Верифицированные",
				donut: "Включен VK Donut",
				short_screen_names: "С коротким адресом страницы",
				more_followers: "Много подписчиков",
				closed_wall: "Закрытая стена",
				is_messages_allowed: "Разрешены сообщения",
				has_contacts: "Указаны контакты",
				has_menu: "Есть пункты меню"
			},
			decline: {
				followers: ["подписчик", "подписчика", "подписчиков"],
				rubles: ["рубля", "рублей", "рублей"]
			}
		},
		GroupsActive: {
			get: "Получаю сообщества",
			get_wall: "Проверяю стены сообществ",
			get_groups_error: "У вас отсутствуют сообщества",
			banned: "Забаненное",
			no_posts: "Без записей"
		},
		GroupsBirthday: {
			day: "День",
			month: "Месяц",
			not_selected: "Не выбрано",
			export: "Выгрузить список",
			only_id: "Только id",
			only_id_description: "int",
			link: "Ссылки",
			link_description: "vk.ru/tool42_app",
			mention: "Упоминания",
			mention_description: "[id123|Пользователь]",
			no_members: "Нет подписчиков, у которых день рождения",
			users: ["участник", "участника", "участников"],
			no_groups: "У вас нет администрируемых сообществ",
			buttons: {
				today: "Сегодня",
				tomorrow: "Завтра",
				after_tomorrow: "Послезавтра"
			},
			months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
		},
		GroupsDonut: {
			loading: "Получаю друзей",
			empty: "У вас нет сообществ",
			empty_donut: "Нет сообществ с VK Donut, на которые подписаны друзья",
			empty_friends: "У вас нет общих сообществ с друзьями",
			friends: ["друг", "друга", "друзей"]
		},
		GroupsDonutMembers: {
			get: "Получаю сообщества",
			get_members: "Получаю подписчиков",
			no_groups: "У вас нет администрируемых сообществ",
			no_members: "У вас нет платных подписчиков",
			access_error: "Нет возможности получить подписчиков сообщества",
			users: ["подписчик", "подписчика", "подписчиков"],
			verified: "Пользователи с галочкой",
			gender: "Пол аудитории",
			age: "Возраст аудитории",
			countries: "Топ 10 по странам"
		},
		GroupsElite: {
			with_verify: "С галочкой",
			short_domain: "С коротким адресом",
			more_followers: "Много подписчиков",
			more_followers_descriptions: "Отображаются пользователи, у которых больше 100 000 подписчиков",
			get_groups: "Получаю сообщества",
			get_members: "Получаю подписчиков",
			users: ["участник", "участника", "участников"],
			get_groups_error: "У вас нет администрируемых сообществ",
			no_verify_friends: "У вас отсутствуют друзья с верифицированной страницей",
			no_verify_followers: "У вас отсутствуют подписчики с верифицированной страницей",
			no_more_followers: "У вас нет популярных подписчиков",
			no_short_domain_friends: "У вас отсутствуют друзья, адрес страницы которых составляет менее 5 символов",
			no_short_domain_followers: "У вас отсутствуют подписчики, адрес страницы которых составляет менее 5 символов",
			no_subscribe_followers: "У вас отсутствуют подписчики, у которых более 100 000 подписчиков",
			no_subscribe_friends: "У вас отсутствуют друзья, у которых более 100 000 подписчиков",
			followers: ["подписчик", "подписчика", "подписчиков"]
		},
		GroupsFriends: {
			loading: "Получаю друзей",
			empty: "У вас нет сообществ",
			empty_donut: "Нет сообществ с VK Donut, на которые подписаны друзья",
			empty_friends: "У вас нет общих сообществ с друзьями",
			friends: ["друг", "друга", "друзей"]
		},
		GroupsPoll: {
			check_poll: "Проверить опрос",
			get: "Получаю участников опроса",
			get_members: "Получаю участников сообщества",
			check: "Проверяю участников опроса",
			votes: ["голос", "голоса", "голосов"],
			description: "Всего {total_count} {total_decline}, от участников {group_count} {group_decline}",
			line: "Всего {total} {decline}, {perc}%",
			line_group: "От участников {total} {decline}, {perc}%",
			unvoted_button: "Подготовка к удаление непроголосовавших",
			all_voted: "Все проголосовали",
			remove_users_button: "Удалить из сообщества",
			remove_users_progress: "Удаляю непроголосовавших из сообщества",
			errors: {
				incorrect_link: "Некорректная ссылка на опрос",
				user_poll: "Сканировать можно лишь опросы сообщества",
				private_poll: "Сканировать можно лишь публичные опросы",
				no_answered: "Вы не проголосовали в опросе, у вас нет доступа к ответам"
			}
		},
		PhotosClean: {
			loading_photos: "Получаю фотографии",
			loading_remove: "Удаляем фотографии",
			no_albums: "Кажется, у вас нет альбомов!",
			no_photos: "Нет фотографий для удаления",
			sort_title: "Порядок удаления",
			sort_asc: "От старых к новым",
			sort_desc: "От новых к старым",
			without_likes: "Удалять только фотографии без лайков",
			has_likes: "На всех фотографиях есть лайки",
			photos_count: "Количество фотографий",
			delete_button: "Удалить фотографии"
		},
		PhotosDownloadAlbum: {
			button: "Скачать альбом",
			error: "Некорректная ссылка",
			error_album: "Не удалось получить альбом",
			error_no_photos: "В альбоме нет фотографий",
			progress: {
				get_photos: "Получаю фотографии",
				create_archive: "Упаковываем архив",
				download: "Скачиваю фотографии"
			}
		},
		PhotosStat: {
			loading_photo_ids: "Получаю id фотографий",
			loading_photos: "Получаю фотографии",
			loading_likes: "Получаю лайки",
			loading_albums: "Получаю альбомы",
			no_photos: "Недостаточно фотографий",
			totals_title: "Всего собрано",
			top_albums_title: "Лучшие альбомы",
			top_photos_title: "Лучшие фотографии",
			top_users_tags: "Топ по количеству отметок",
			get_tags: "Получаю отметки",
			tabs: {
				likes: "По лайкам",
				comments: "По комментариям",
				reposts: "По репостам",
				tags: "По отметкам"
			},
			totals: {
				likes: "Лайки",
				comments: "Комментарии",
				reposts: "Поделились с друзьями",
				tags: "Отметки на ваших фото"
			},
			decline: {
				likes: ["лайк", "лайка", "лайков"],
				comments: ["комментарий", "комментария", "комментариев"],
				reposts: ["репост", "репоста", "репостов"],
				tags: ["отметка", "отметки", "отметок"]
			}
		},
		PhotosTags: {
			loading: "Получаю альбомы",
			loading_photos: "Получаю фотографии",
			loading_tags: "Получаю отметки",
			author: "Автор",
			albums: "Альбомы",
			photos: "Фотографии",
			tags: "Отметок",
			no_albums: "У вас отсутствуют личные альбомы",
			no_photos: "В альбоме нет ни одной фотографии с отметками"
		},
		StoriesDownload: {
			progress: "Получаю истории",
			no_stories: "Нам не удалось получить последние истории от ваших подписок."
		},
		StoriesStat: {
			loader: "Получаю истории",
			loader_stat: "Получаю информацию об историях",
			no_stories: "Нам не удалось получить ваши последние истории. Возможно, вы ничего не публиковали.",
			start: "Показаны истории, начиная с {date}",
			top_tabs: {
				views: "Просмотры",
				likes: "Лайки",
				replies: "Ответы на историю",
				answer: "Ответы в личку",
				shares: "Поделились",
				subscribers: "Подписчики",
				bans: "Скрытие историй",
				open_link: "Открытие ссылок"
			},
			share_title: "Статистика историй",
			post: "Узнай статистику своих историй в сервисе vk.ru/tool42",
			titles: {
				count: "Суммарные показатели",
				stickers: "Стикеры в историях",
				top: "Топ популярного"
			}
		},
		StoriesViewersStat: {
			loader: "Получаю истории",
			loader_views: "Получаю зрителей",
			loader_stat: "Считаем",
			no_stories: "Нам не удалось получить ваши последние истории. Возможно, вы ничего не публиковали.",
			start: "Показаны истории, начиная с {date}",
			view: "Просмотры",
			like: "Понравилось",
			views: {
				title: "Лучшие зрители",
				total_views: "Всего просмотров",
				total_users: "Посмотрело человек",
				friends_views: "Всего просмотров от друзей",
				friends_users: "Посмотрело друзей"
			},
			likes: {
				title: "Ценители творчества",
				total_likes: "Всего лайков",
				total_users: "Лайкнуло человек",
				friends_likes: "Всего лайков от друзей",
				friends_users: "Лайкнуло друзей"
			},
			declines: {
				views: ["просмотр", "просмотра", "просмотров"],
				likes: ["лайк", "лайка", "лайков"]
			}
		},
		StoriesClean: {
			no_stories: "Нам не удалось получить ваши последние истории. Возможно, вы ничего не публиковали.",
			loading_stories: "Получаю истории",
			loading_remove: "Удаляем истории",
			delete: "Удалить истории"
		},
		VideosClean: {
			loading: "Получаю видеозаписи",
			loading_clean: "Удаляем видеозаписи",
			videos_empty: "Видеозаписи отсутствуют",
			alert_title: "Очистка видео",
			alert_approve: "Очистить",
			clean: "Очистить"
		},
		WallAnalysis: {
			loading_stat: "Получаю расширенные данные",
			selected_owner: "Выбранная страница",
			select_all: "Выбрать весь период",
			top_comments: "Топ {count} комментариев",
			top_users: "Топ {count} комментаторов",
			title_posts: "Статистика записей",
			post: "Узнай статистику стены в сервисе vk.ru/tool42",
			no_posts: "Записи не найдено",
			tabs: {
				wall: "Записи",
				comments: "Комментарии",
				likes: "Лайки",
				one_pay_donut: "Разовые донаты"
			},
			options: {
				header: "Настройки сканирования",
				wall: "Записи стены",
				comments: "Комментарии",
				likes: "Лайки",
				period_header: "Период сканирования",
				scan: "Начать проверку"
			},
			progress: {
				wall: "Получаю записи",
				comments: "Получаю комментарии",
				likes: "Получаю лайки"
			},
			errors: {
				posts_empty: "За выбранный период записей не найдено",
				no_comments: "На записях нет комментариев",
				no_likes: "На записях нет лайков"
			},
			top_tabs: {
				likes: "Лайки",
				views: "Просмотры",
				comments: "Комментарии",
				reposts: "Репосты",
				attachments: "Вложения",
				er: "Вовлеченность (ER)",
				reach_subscribers: "Охват подписчиков",
				reach_viral: "Виральный охват",
				hide: "Скрытие записей",
				join_group: "Вступления в сообщество",
				links: "Переходы по ссылке",
				report: "Жалобы на записи",
				to_group: "Переходы в сообщество",
				unsubscribe: "Скрытие всех записей",
				one_pay_donut: "Разовые донаты"
			},
			show_all: "Показать все записи",
			collected: "Всего собрано",
			likes: "Отметки «Мне нравится»",
			views: "Просмотры",
			comments: "Комментарии",
			reposts: "Репосты",
			no_text: "[Без текста]",
			attachments_type: "Типы вложений",
			mentions: "Топ упоминаний",
			mentions_decline: ["упоминание", "упоминания", "упоминаний"],
			all_attachments: "Всего вложений",
			top: "Топ",
			er_title: "Коэффициент вовлеченности (ER)",
			er_description: "(likes + comments + reposts) / views * 100%",
			declines: {
				likes: ["лайк", "лайка", "лайков"],
				comments: ["комментарий", "комментария", "комментариев"],
				reposts: ["репост", "репоста", "репостов"],
				views: ["просмотр", "просмотра", "просмотров"],
				attachemnts: ["вложение", "вложения", "вложений"],
				reach_subscribers: ["просмотр", "просмотра", "просмотров"],
				reach_viral: ["просмотр", "просмотра", "просмотров"],
				hide: ["скрытие", "скрытия", "скрытий"],
				join_group: ["вступление в сообщество", "вступления в сообщество", "вступлений в сообщество"],
				links: ["переход по ссылке", "перехода по ссылке", "переходов по ссылке"],
				report: ["жалоба на запись", "жалобы на запись", "жалоб на запись"],
				to_group: ["переход в сообщество", "перехода в сообщество", "переходов в сообщество"],
				unsubscribe: ["скрытие всех записей", "скрытия всех записей", "скрытий всех записей"]
			}
		},
		WallCheckPost: {
			scan_button: "Анализировать",
			not_found: "Запись не найдена",
			deleted_post: "Удаленная запись",
			no_counts: "Нет лайков и комментариев",
			loading_likes: "Получаю лайки",
			loading_comments: "Получаю комментарии",
			loading_followers: "Получаю подписчиков",
			age: "Возраст",
			gender: "Пол",
			users_decline: ["пользователь", "пользователя", "пользователей"],
			new_users_description: "Новые аккаунты, которым меньше 2 недель",
			users_actions: "Всего действий",
			followers_actions: "От подписчиков",
			likes: {
				title: "Лайки",
				count_decline: ["лайк", "лайка", "лайков"]
			},
			comments: {
				title: "Комментарии",
				count_decline: ["комментарий", "комментария", "комментариев"]
			}
		},
		WallClean: {
			filters_title: "Критерии удаления",
			years_title: "За какой год удаляем записи?",
			additional_title: "Дополнительно",
			clean: "Удалить записи",
			no_posts: "Записи не найдены",
			progress_posts: "Удаляем записи",
			progress_photos: "Удаляем фотографии",
			finish: "Записи удалены!",
			wall_disabled: "Записи на стене отключены",
			filters: {
				all: "Все записи без фильтров",
				condition_type: "Работа условий",
				condition_or: "1 или 2 или 3",
				condition_and: "1 и 2 и 3",
				deleted_reposts: "Записи с удаленными репостами",
				less_likes: "Меньше N лайков",
				less_comments: "Меньше N комментариев",
				less_views: "Меньше N просмотров"
			},
			additional: {
				remove_photos: "Удалять фотографии из системного альбома"
			}
		},
		WallCleanNoFilters: {
			description: "После выбора страницы или сообщества записи будут сразу удаляться пачками без предзагрузки и дополнительных фильтров.",
			no_posts: "Записи не найдены",
			progress: "Удаляем записи",
			finish: "Записи удалены!",
			delete_error: "Не удалось удалить записи. Возможно, часть записей недоступна для удаления.",
			wall_disabled: "Записи на стене отключены"
		},
		WallCleanSnippetCache: {
			button: "Очистить кеш",
			button_done: "Готово!"
		},
		WallContest: {
			winners: "Победители",
			button: "Подвести итоги",
			incorrect_link: "Некорректная ссылка",
			no_users: "По заданным критериям не найдено пользователей",
			admins_exclude: "Руководство сообщества будет исключено из возможных победителей",
			options: {
				link: "Ссылка на запись с конкурсом",
				partner: "Ссылка на сообщество-партнера (если нужна подписка)",
				like: "Обязательный лайк",
				comment: "Обязательный комментарий",
				comment_description: "Только комментарии первого уровня",
				repost: "Обязательный репост",
				is_member: "Обязательная подписка на сообщество",
				people_count: "Количество победителей"
			},
			loading: {
				likes: "Получаю лайки",
				comments: "Получаю комментарии",
				reposts: "Получаю репосты",
				is_members: "Проверяем подписку на сообщество",
				partner: "Проверяем подписку на партнера"
			}
		},
		WallSearchMentions: {
			current: "Ваш профиль",
			not_found_users: "Пользователи с таким именем не найдены",
			searching: "Ищем записи",
			found: "Найденные упоминания",
			not_found_posts: "Упоминаний не найдено"
		},
		UsersActivities: {
			loading_posts: "Получение записей",
			loading_likes: "Получение лайков",
			loading_comments: "Получение комментариев",
			no_posts: "У вас нет записей за год",
			no_posts_period: "Нет записей за период",
			no_friends: "У вас нет друзей",
			no_followers: "У вас нет подписчиков",
			choice_period: "Выберите период",
			choice_options: "Критерии активности (или)",
			options_likes: "Лайки на записях",
			options_comments: "Комментарии под записями",
			button_scan: "Начать сканирование",
			all_active_users: "Все пользователи активные",
			no_active_followers: "Нет активных подписчиков",
			delete_friends: "Удалить из друзей",
			delete_followers: "Удалить участников",
			add: "Добавить в друзья",
			friends_list_banner: "Не удаляются друзья, которые есть в каком-либо списке друзей",
			save_title: "Иммунитет",
			save_donut_members: "Не трогать подписчиков VK Donut",
			decline: {
				likes: ["лайк", "лайка", "лайков"],
				comments: ["комментарий", "комментария", "комментариев"],
				posts: ["запись", "записи", "записей"]
			},
			periods: {
				week: "Неделя",
				month: "Месяц",
				six_months: "Полгода",
				year: "Год"
			}
		},
		UsersClean: {
			get_groups: "Получаю сообщества",
			get_members: "Получаю подписчиков",
			check_members: "Проверяю подписчиков",
			get_groups_error: "У вас нет администрируемых сообществ",
			users: ["участник", "участника", "участников"],
			loading: "Секундочку",
			cancel: "Отмена",
			close: "Закрыть",
			deleted: "Удаленные",
			banned: "Забаненные",
			all: "Все пользователи",
			skip_donut_members: "Не трогать подписчиков VK Donut",
			no_avatar: "Без аватара",
			filter: "Не трогать друзей, которые есть в списках",
			time: "Долго не были онлайн ВКонтакте",
			time_description: "Активируйте, чтобы выбрать период",
			month_description: "ВКонтакте скрывает точный последний онлайн больше месяца",
			hidden_online: "Были недавно",
			hidden_online_description: "ВКонтакте для некоторых пользователей скрывает онлайн",
			slice_description: "Сколько участников нужно пропустить",
			period: "Больше",
			delete: "Удалить из друзей",
			delete_subscriber: "Удалить из подписчиков",
			deleted_result: "Удалено: {count}.",
			deleted_result_error: "Увы, вы уперлись в лимит ВКонтакте. Можно удалять 10 000 пользователей в сутки. Приходите завтра!",
			delete_groups: "Удалить из сообщества",
			ban: "Добавить в черный список",
			list_clean: "Очистить список",
			custom_list: "Свой список пользователей",
			finish: "Готово!",
			info_step: "Нажав кнопку ниже, вы перейдете к списку выбранных пользователей.",
			info_clear: "Важно подметить, что ВКонтакте ввел лимит на удаление друзей сторонним разработчикам. Если метод доходит до 100%, но друзья не удаляются — вы в лимите. С этим мы ничего не можем поделать, только запустить метод через некоторое время. Сроки ожидания неизвестны.",
			followers_warning: "Нельзя доставать подписчиков из черного списка раньше, чем через 15 минут.",
			followers_info: "Увы, ВКонтакте не позволит удалить всех подписчиков из-за технических особенностей. Если метод отработал на 100%, а кто-то не удален, то мы бессильны в такой ситуации.",
			friends_out_info: "Данный метод удаляет все исходящие заявки в друзья",
			friends_out_null: "Список исходящих заявок пуст",
			group_info: "ВКонтакте есть лимит на удаление людей из сообществ. Максимум 10 000 человек в сутки.",
			group_info_members: "В сообществе слишком много участников, мы не сможем сделать предзагрузку списка.",
			list_people_info: "id или ссылки на пользователей, каждый пользователь с новой строки",
			blacklist_info: "Данный метод убирает из черного списка всех пользователей",
			blacklist_null: "Ваш черный список пуст",
			blacklist_title: "В черном списке",
			results_title: "Удалено пользователей",
			alert_error_list: "Укажите список пользователей",
			alert_all_title: "Удаление всех",
			alert_all_info: "Вы уверены, что хотите выбрать всех пользователей?",
			alert_friends_out_info: "Вы уверены, что хотите удалить все исходящие заявки?",
			alert_confirm_list: "Вы уверены, что хотите удалить пользователей?",
			no_ast_seen: "Кажется, вы скрыли свой онлайн, поэтому мы не можем получить чужой онлайн.",
			sex_title: "Кого нужно удалить?",
			filters_title: "По какому признаку удаляем?",
			sex: {
				0: "Любой пол",
				1: "Девушек",
				2: "Парней"
			},
			times: {
				"1day": "1-го дня",
				"3days": "3-х дней",
				week: "недели",
				"2weeks": "2-х недель",
				"3weeks": "3-х недель",
				month: "месяца",
				"3month": "3-х месяцев",
				"6month": "полугода",
				year: "года"
			}
		},
		UsersSearch: {
			search_settings: "Настройки поиска",
			change_filter: "Изменить фильтр",
			country: "Страна",
			city: "Город",
			city_any: "Любой город",
			with_avatar: "С аватаром",
			with_verify: "Верифицированная страница",
			banned: "Заблокированная страница",
			deleted: "Удаленная страница",
			apply_filter: "Применить фильтр",
			count_search: "Результаты поиска ({count})",
			no_dons: "В сообществе нет подписчиков VK Donut",
			sex: {
				title: "Пол",
				none: "Любой пол",
				male: "Мужской",
				female: "Женский"
			},
			none: "Любой",
			bdate: "День рождения",
			day: "День",
			month: "Месяц",
			name: "Имя и фамилия",
			years: {
				title: "Возраст",
				from_any: "От любого",
				from: "От {year}",
				to_any: "До любого",
				to: "До {year}"
			},
			relation: {
				title: "Семейное положение",
				options: ["Любое семейное положение", "Не женат/не замужем", "Есть друг/есть подруга", "Помолвлен/помолвлена", "Женат/замужем", "Все сложно", "В активном поиске", "Влюблен/влюблена", "В гражданском браке"]
			},
			online: {
				title: "Онлайн",
				options: ["Без фильтрации по онлайну", "Онлайн скрыт", "Сейчас онлайн", "Был онлайн в течение 15 минут", "Был онлайн в течение 1 часа", "Был онлайн в течение 1 дня", "Был онлайн в течение 1 недели", "Был онлайн в течение 1 месяца", "Был онлайн в течение 1 года", "Был онлайн более 1 года назад"]
			},
			declines: {
				years: ["год", "года", "лет"]
			},
			months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
		},
		AccountDocsClean: {
			loading: "Получаю документы",
			loading_clean: "Удаляем",
			clean: "Начать очистку",
			docs_empty: "У вас нет документов",
			alert_title: "Очистка документов",
			alert_approve: "Очистить",
			types: {
				1: "Текстовые документы",
				2: "Архивы",
				3: "gif",
				4: "Изображения",
				5: "Аудио",
				6: "Видео",
				7: "Электронные книги",
				8: "Неизвестно"
			}
		},
		FriendsLower: {
			get_users: "Получаю пользователей",
			description: "Метод позволяет переместить человека в самый конец списка друзей, изменения вступят в силу в течение суток!",
			alert_info: "Понизить пользователя?",
			alert_button: "Понизить",
			done: "Готово!",
			empty: "Список друзей пуст",
			alert_cancel: "Отмена"
		},
		GroupsClean: {
			get: "Получаю сообщества",
			clean: "Очистить сообщества",
			clean_groups: "Очищаю сообщества",
			leave_groups: "Выхожу из сообществ",
			get_groups_error: "У вас отсутствуют сообщества",
			no_exit_close: "Не выходить из закрытых",
			no_exit_admin: "Не выходить из администрируемых",
			exit_banned: "Выйти из забаненных",
			exit_public: "Выйти из публичных страниц",
			exit_group: "Выйти из групп",
			exit_event: "Выйти из мероприятий"
		},
		GroupsSyncDonutGroups: {
			no_groups_donut: "У вас нет администрируемых сообществ с VK Donut",
			no_groups_closed: "У вас нет закрытых сообществ",
			select_group: "Выберите сообщество",
			select_group_donut_label: "Где проверяем подписку VK Donut?",
			select_group_members_label: "Где проверяем участников?",
			options_header: "Настройки синхронизации",
			check_requests: "Проверить заявки",
			check_requests_description: "Примет пользователей, у которых есть подписка VK Donut",
			check_members: "Проверить участников",
			check_members_description: "Удалит пользователей, у которых нет подписки VK Donut",
			check_button: "Синхронизировать",
			no_members: "У вас нет участников в сообществе",
			no_members_donut: "У вас нет участников с подпиской VK Donut",
			no_requests: "У вас нет заявок в сообществе",
			accept_requests: "Принимаю заявки",
			remove_members: "Удаляю участников"
		},
		FriendsCleanBySubscriptions: {
			get_subscriptions: "Получаю подписки",
			no_friends: "У вас нет друзей",
			not_enough_friends: "Слишком мало друзей для анализа",
			no_subscriptions: "Ваши друзья ни на кого не подписаны",
			min_subscriptions: "Минимально подписок",
			max_subscriptions: "Максимально подписок",
			select_subscriptions: "Выберите количество подписок, начиная с которого друг будет удален",
			button_run: "Проверить друзей",
			button_delete: "Удалить из друзей"
		},
		"messages-dialogs-count": {
			noDialogs: "У вас нет диалогов!",
			allMessages: "Всего сообщений за все время",
			users: "Пользователи",
			chats: "Чаты",
			chatsInfo: "Хочется подметить, что в беседах выводятся все сообщения, даже те, которые были написаны до вашего приглашения.",
			messages: ["сообщение", "сообщения", "сообщений"]
		},
		"messages-clean": {
			loading: "Получаю диалоги",
			loadingRemove: "Удаляем диалоги",
			loadingMessages: "Удаляем сообщения",
			noDialogs: "Кажется, у вас нет диалогов!",
			settings: "Какие диалоги будем удалять?",
			friends: "С друзьями",
			users: "С посторонними пользователями",
			groups: "С сообществами",
			chats: {
				in: "Чаты, в которых состою",
				kicked: "Чаты, из которых кикнули",
				left: "Покинувшие чаты"
			},
			checkbox: "Я осознаю, что диалоги будут удалены окончательно и отменить действие будет нельзя",
			start: "Очистить диалоги"
		},
		"messages-leave": {
			"no-dialogs": "За последнее время нет подходящих диалогов.",
			"dialogs-footer": "Показаны последние диалоги.",
			"get-last-messages": "Получаю последние сообщения",
			"no-users": "Недавно никто не покидал беседу",
			kicked: "Сделали магию!",
			ok: "Супер!"
		},
		"messages-download-attachments": {
			"no-dialogs": "За последнее время нет подходящих диалогов.",
			"dialogs-footer": "Показаны последние диалоги.",
			"get-attachments": "Получаю вложения",
			photos: "Фотографии",
			docs: "Документы",
			button: "Скачать",
			downloading: "Собираем архив",
			empty: "Ничего не выбрано для скачивания"
		},
		"messages-leave-friends": {
			"no-dialogs": "За последнее время нет подходящих диалогов.",
			"dialogs-footer": "Показаны последние диалоги.",
			"get-last-messages": "Получаю последние сообщения",
			"user-not-friend": "Пользователь не ваш друг",
			"no-users": "Недавно никто не покидал беседу",
			kicked: "Сделали магию!",
			ok: "Окей"
		},
		"messages-read": {
			"no-dialogs": "У Вас нет непрочитанных диалогов.",
			"unread-dialogs": "Непрочитанных диалогов",
			"read-all": "Прочитать все",
			loading: "Секундочку",
			finish: "Готово"
		},
		"messages-chats-return": {
			empty: "Список пуст",
			footer: "Отображаются беседы которые вы покинули"
		},
		"messages-friends-chats": {
			noFriends: "У вас нет друзей",
			noDialogs: "У вас нет диалогов",
			loadingMembers: "Получаем участников",
			chats: ["диалог", "диалога", "диалогов"]
		},
		"messages-stat": {
			"no-dialogs": "За последнее время нет подходящих диалогов.",
			"few-messages": "Слишком мало сообщений.",
			"no-get-dialogs": "Не удалось получить диалоги, возможно, сообщения сообщества отключены.",
			selectDialog: "Выберите беседу",
			"select-period": "Выберите период",
			loading: "Секундочку",
			"check-leave": "Не учитывать пользователей, которые покинули беседу",
			"check-flood": "Не учитывать сообщения, написанные подряд",
			"start-stat": "Посчитать статистику",
			"footer-settings": "{count} {decline} начиная с {date}",
			"null-messages": "Вы слишком мало общались",
			stat: "Статистика сообщений",
			"from-date": "Начиная с {date}",
			"send-button": "Отправить в беседу",
			"send-button-success": "Отправлено",
			"non-active": "Неактивные пользователи",
			"remove-all": "Кикнуть всех",
			"get-list": "Получить список",
			"get-list-members": "Получить список участников чата",
			"list-members": "Список участников чата",
			admin: "Администратор",
			alert: {
				title: "Подтверите действие",
				description: "Вы действительно хотите кикнуть неактивных пользователей?",
				confirm: "Подтверждаю",
				cancel: "Отмена"
			},
			"button-profile": "Перейти в профиль",
			"button-days": "Активность по дням",
			call: "Звонки",
			audio: "Аудиосообщения",
			"call-duration": {
				string: "Разговаривали",
				hours: ["час", "часа", "часов"],
				minutes: ["минута", "минуты", "минут"],
				seconds: ["секунда", "секунды", "секунд"]
			},
			total: {
				count: ["{count} сообщение", "{count} сообщения", "{count} сообщений"],
				uniqCount: ["{count} уникальное сообщение", "{count} уникальных сообщения", "{count} уникальных сообщений"],
				moneySendTotal: ["Переведен {count} ₽", "Переведено {count} ₽", "Переведено {count} ₽"],
				attachmentsTotal: ["{count} вложение", "{count} вложения", "{count} вложений"],
				join: ["Пригласили в беседу {count} раз", "Пригласили в беседу {count} раза", "Пригласили в беседу {count} раз"],
				joinByLink: ["Вошел по ссылке {count} пользователь", "Вошли по ссылке {count} пользователя", "Вошли по ссылке {count} пользователей"],
				leave: ["Покинули беседу {count} раз", "Покинули беседу {count} раза", "Покинули беседу {count} раз"],
				kick: ["Кикнули из беседы {count} раз", "Кикнули из беседы {count} раза", "Кикнули из беседы {count} раз"]
			},
			"top-attachments": "Топ вложений",
			"top-stickers": "Топ стикеров",
			"top-users": "Топ пользователей",
			"top-worlds": "Топ слов",
			process: "Делаем расчеты",
			tops: {
				count: "Сообщения",
				uniq: "Уникальные сообщения",
				money: "Денежные переводы",
				attach: "Вложения",
				audio: "Аудиосообщения"
			},
			decline: {
				totalAttachments: ["Всего {count} вложение", "Всего {count} вложения", "Всего {count} вложений"],
				totalStickers: ["Всего {count} стикер", "Всего {count} стикера", "Всего {count} стикеров"]
			},
			attachments: {
				wall: ["запись", "записи", "записей"],
				curator: ["карточка куратора", "карточки кураторов", "карточек кураторов"],
				gift: ["подарок", "подарка", "подарков"],
				call: ["звонок", "звонка", "звонков"],
				wall_reply: ["комментарий", "комментария", "комментариев"],
				photo: ["фотография", "фотографии", "фотографий"],
				audio_message: ["голосовое сообщение", "голосовых сообщений", "голосовых сообщений"],
				video_message: ["видеосообщение", "видеосообщения", "видеосообщений"],
				video: ["видеозапись", "видеозаписи", "видеозаписей"],
				audio: ["аудиозапись", "аудиозаписи", "аудиозаписей"],
				doc: ["документ", "документа", "документов"],
				graffiti: ["граффити", "граффити", "граффити"],
				article: ["статья", "статьи", "статей"],
				link: ["ссылка", "ссылки", "ссылок"],
				mini_app: ["мини-приложение", "мини-приложения", "мини-приложений"],
				poll: ["опрос", "опроса", "опросов"],
				market: ["товар", "товара", "товаров"],
				podcast: ["подкаст", "подкаста", "подкастов"],
				story: ["история", "истории", "историй"]
			},
			messages: ["сообщение", "сообщения", "сообщений"],
			periods: {
				172800: "2 дня",
				604800: "1 неделя",
				1209600: "2 недели",
				2629743: "1 месяц",
				5259486: "2 месяца",
				15778463: "Полгода",
				31536e3: "Год",
				all: "За все время"
			}
		}
	},
	rD = {
		functions: {
			account_reg_date: "Дата регистрации",
			account_blacklists: "Добавившие в черный список",
			friends_analysis: "Анализ друзей",
			friends_handshakes: "Знакомства через рукопожатия",
			wall_analysis: "Анализ стены",
			groups_birthday: "Дни рождения подписчиков",
			groups_analysis: "Анализ сообществ",
			stories_stat: "Статистика историй"
		},
		descriptions: {
			account_reg_date: "Показывает дату регистрации и возраст аккаунта, а также примерные даты регистрации друзей.",
			account_blacklists: "Ищет пользователей, у которых ваш профиль находится в черном списке.",
			friends_analysis: "Показывает статистику по друзьям: пол, география, возраст, активность и статус профиля.",
			friends_handshakes: "Строит цепочку общих друзей между вами и выбранным пользователем.",
			wall_analysis: "Считает статистику постов за период: охваты, лайки, комментарии, вложения и топы.",
			groups_birthday: "Находит подписчиков сообщества по дню и месяцу рождения.",
			groups_analysis: "Показывает срез по сообществам: размер, верификация, контакты, сообщения, меню и VK Donut.",
			stories_stat: "Показывает статистику по историям: просмотры, ответы, реакции, стикеры и длительность."
		}
	},
	oD = {
		menu: jL,
		App: TL,
		Stars: RL,
		Settings: NL,
		DonutBlock: LL,
		Home: DL,
		Method: BL,
		NetworkOffline: zL,
		helpers: $L,
		VKHelpers: FL,
		CopyOwnersList: VL,
		ExportCSV: HL,
		ItemsList: WL,
		InputLink: KL,
		charts: UL,
		SelectPeriod: YL,
		MultiProgress: qL,
		Textarea: GL,
		Permissions: XL,
		Share: QL,
		PWAInstall: ZL,
		FinishBlock: JL,
		Attachments: eD,
		modals: tD,
		methods: nD,
		menu_ma: rD
	};

function dp() {
	return oD
}

function Wd(e) {
	if (e) {
		const t = e.split(".").reduce((n, r) => {
			if (n && typeof n == "object" && r in n) return n[r]
		}, dp());
		return t !== void 0 ? t : e
	}
	return e
}

function fl(e) {
	if (typeof e != "string") throw new Error(`The translation path must be a string. Received: ${typeof e}`);
	const t = e.split(".").reduce((n, r) => {
		if (n && typeof n == "object" && r in n) return n[r]
	}, dp());
	return typeof t == "string" ? t : e
}

function ou(e) {
	if (typeof e != "string") throw new Error(`The translation path must be a string. Received: ${typeof e}`);
	const t = e.split(".").reduce((n, r) => {
		if (n && typeof n == "object" && r in n) return n[r]
	}, dp());
	return Array.isArray(t) ? t : [e, e, e]
}
var wy = {
	exports: {}
};
(function(e, t) {
	((n, r) => {
		e.exports = r()
	})(pn, function() {
		var n = function(s, l) {
				return (n = Object.setPrototypeOf || ({
						__proto__: []
					}
					instanceof Array ? function(h, p) {
						h.__proto__ = p
					} : function(h, p) {
						for (var g in p) Object.prototype.hasOwnProperty.call(p, g) && (h[g] = p[g])
					}))(s, l)
			},
			r = function() {
				return (r = Object.assign || function(s) {
					for (var l, h = 1, p = arguments.length; h < p; h++)
						for (var g in l = arguments[h]) Object.prototype.hasOwnProperty.call(l, g) && (s[g] = l[g]);
					return s
				}).apply(this, arguments)
			};

		function o(s, l, h) {
			for (var p, g = 0, S = l.length; g < S; g++) !p && g in l || ((p = p || Array.prototype.slice.call(l, 0, g))[g] = l[g]);
			return s.concat(p || Array.prototype.slice.call(l))
		}
		var i = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : pn,
			a = Object.keys,
			c = Array.isArray;

		function d(s, l) {
			return typeof l == "object" && a(l).forEach(function(h) {
				s[h] = l[h]
			}), s
		}
		typeof Promise > "u" || i.Promise || (i.Promise = Promise);
		var f = Object.getPrototypeOf,
			m = {}.hasOwnProperty;

		function _(s, l) {
			return m.call(s, l)
		}

		function v(s, l) {
			typeof l == "function" && (l = l(f(s))), (typeof Reflect > "u" ? a : Reflect.ownKeys)(l).forEach(function(h) {
				k(s, h, l[h])
			})
		}
		var x = Object.defineProperty;

		function k(s, l, h, p) {
			x(s, l, d(h && _(h, "get") && typeof h.get == "function" ? {
				get: h.get,
				set: h.set,
				configurable: !0
			} : {
				value: h,
				configurable: !0,
				writable: !0
			}, p))
		}

		function A(s) {
			return {
				from: function(l) {
					return s.prototype = Object.create(l.prototype), k(s.prototype, "constructor", s), {
						extend: v.bind(null, s.prototype)
					}
				}
			}
		}
		var C = Object.getOwnPropertyDescriptor,
			y = [].slice;

		function w(s, l, h) {
			return y.call(s, l, h)
		}

		function b(s, l) {
			return l(s)
		}

		function O(s) {
			if (!s) throw new Error("Assertion Failed")
		}

		function L(s) {
			i.setImmediate ? setImmediate(s) : setTimeout(s, 0)
		}

		function $(s, l) {
			if (typeof l == "string" && _(s, l)) return s[l];
			if (!l) return s;
			if (typeof l != "string") {
				for (var h = [], p = 0, g = l.length; p < g; ++p) {
					var S = $(s, l[p]);
					h.push(S)
				}
				return h
			}
			var E, I = l.indexOf(".");
			return I === -1 || (E = s[l.substr(0, I)]) == null ? void 0 : $(E, l.substr(I + 1))
		}

		function H(s, l, h) {
			if (s && l !== void 0 && !("isFrozen" in Object && Object.isFrozen(s)))
				if (typeof l != "string" && "length" in l) {
					O(typeof h != "string" && "length" in h);
					for (var p = 0, g = l.length; p < g; ++p) H(s, l[p], h[p])
				} else {
					var S, E, I = l.indexOf(".");
					I !== -1 ? (S = l.substr(0, I), (I = l.substr(I + 1)) === "" ? h === void 0 ? c(s) && !isNaN(parseInt(S)) ? s.splice(S, 1) : delete s[S] : s[S] = h : H(E = (E = s[S]) && _(s, S) ? E : s[S] = {}, I, h)) : h === void 0 ? c(s) && !isNaN(parseInt(l)) ? s.splice(l, 1) : delete s[l] : s[l] = h
				}
		}

		function q(s) {
			var l, h = {};
			for (l in s) _(s, l) && (h[l] = s[l]);
			return h
		}
		var ne = [].concat;

		function G(s) {
			return ne.apply([], s)
		}
		var le = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(G([8, 16, 32, 64].map(function(s) {
				return ["Int", "Uint", "Float"].map(function(l) {
					return l + s + "Array"
				})
			}))).filter(function(s) {
				return i[s]
			}),
			oe = new Set(le.map(function(s) {
				return i[s]
			})),
			fe = null;

		function me(s) {
			return fe = new WeakMap, s = function l(h) {
				if (!h || typeof h != "object") return h;
				var p = fe.get(h);
				if (p) return p;
				if (c(h)) {
					p = [], fe.set(h, p);
					for (var g = 0, S = h.length; g < S; ++g) p.push(l(h[g]))
				} else if (oe.has(h.constructor)) p = h;
				else {
					var E, I = f(h);
					for (E in p = I === Object.prototype ? {} : Object.create(I), fe.set(h, p), h) _(h, E) && (p[E] = l(h[E]))
				}
				return p
			}(s), fe = null, s
		}
		var Z = {}.toString;

		function J(s) {
			return Z.call(s).slice(8, -1)
		}
		var X = typeof Symbol < "u" ? Symbol.iterator : "@@iterator",
			re = typeof X == "symbol" ? function(s) {
				var l;
				return s != null && (l = s[X]) && l.apply(s)
			} : function() {
				return null
			};

		function z(s, l) {
			l = s.indexOf(l), 0 <= l && s.splice(l, 1)
		}
		var W = {};

		function K(s) {
			var l, h, p, g;
			if (arguments.length === 1) {
				if (c(s)) return s.slice();
				if (this === W && typeof s == "string") return [s];
				if (g = re(s))
					for (h = []; !(p = g.next()).done;) h.push(p.value);
				else {
					if (s == null) return [s];
					if (typeof(l = s.length) != "number") return [s];
					for (h = new Array(l); l--;) h[l] = s[l]
				}
			} else
				for (l = arguments.length, h = new Array(l); l--;) h[l] = arguments[l];
			return h
		}
		var ie = typeof Symbol < "u" ? function(s) {
				return s[Symbol.toStringTag] === "AsyncFunction"
			} : function() {
				return !1
			},
			le = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"],
			ln = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(le),
			_e = {
				VersionChanged: "Database version changed by other database connection",
				DatabaseClosed: "Database has been closed",
				Abort: "Transaction aborted",
				TransactionInactive: "Transaction has already completed or failed",
				MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
			};

		function Ee(s, l) {
			this.name = s, this.message = l
		}

		function Re(s, l) {
			return s + ". Errors: " + Object.keys(l).map(function(h) {
				return l[h].toString()
			}).filter(function(h, p, g) {
				return g.indexOf(h) === p
			}).join(`
`)
		}

		function Oe(s, l, h, p) {
			this.failures = l, this.failedKeys = p, this.successCount = h, this.message = Re(s, l)
		}

		function Ae(s, l) {
			this.name = "BulkError", this.failures = Object.keys(l).map(function(h) {
				return l[h]
			}), this.failuresByPos = l, this.message = Re(s, this.failures)
		}
		A(Ee).from(Error).extend({
			toString: function() {
				return this.name + ": " + this.message
			}
		}), A(Oe).from(Ee), A(Ae).from(Ee);
		var Le = ln.reduce(function(s, l) {
				return s[l] = l + "Error", s
			}, {}),
			Ue = Ee,
			ue = ln.reduce(function(s, l) {
				var h = l + "Error";

				function p(g, S) {
					this.name = h, g ? typeof g == "string" ? (this.message = "".concat(g).concat(S ? `
 ` + S : ""), this.inner = S || null) : typeof g == "object" && (this.message = "".concat(g.name, " ").concat(g.message), this.inner = g) : (this.message = _e[l] || h, this.inner = null)
				}
				return A(p).from(Ue), s[l] = p, s
			}, {}),
			Fe = (ue.Syntax = SyntaxError, ue.Type = TypeError, ue.Range = RangeError, le.reduce(function(s, l) {
				return s[l + "Error"] = ue[l], s
			}, {}));
		le = ln.reduce(function(s, l) {
			return ["Syntax", "Type", "Range"].indexOf(l) === -1 && (s[l + "Error"] = ue[l]), s
		}, {});

		function Me() {}

		function St(s) {
			return s
		}

		function yn(s, l) {
			return s == null || s === St ? l : function(h) {
				return l(s(h))
			}
		}

		function Ot(s, l) {
			return function() {
				s.apply(this, arguments), l.apply(this, arguments)
			}
		}

		function At(s, l) {
			return s === Me ? l : function() {
				var h = s.apply(this, arguments),
					p = (h !== void 0 && (arguments[0] = h), this.onsuccess),
					g = this.onerror,
					S = (this.onsuccess = null, this.onerror = null, l.apply(this, arguments));
				return p && (this.onsuccess = this.onsuccess ? Ot(p, this.onsuccess) : p), g && (this.onerror = this.onerror ? Ot(g, this.onerror) : g), S !== void 0 ? S : h
			}
		}

		function On(s, l) {
			return s === Me ? l : function() {
				s.apply(this, arguments);
				var h = this.onsuccess,
					p = this.onerror;
				this.onsuccess = this.onerror = null, l.apply(this, arguments), h && (this.onsuccess = this.onsuccess ? Ot(h, this.onsuccess) : h), p && (this.onerror = this.onerror ? Ot(p, this.onerror) : p)
			}
		}

		function wr(s, l) {
			return s === Me ? l : function(g) {
				var p = s.apply(this, arguments),
					g = (d(g, p), this.onsuccess),
					S = this.onerror,
					E = (this.onsuccess = null, this.onerror = null, l.apply(this, arguments));
				return g && (this.onsuccess = this.onsuccess ? Ot(g, this.onsuccess) : g), S && (this.onerror = this.onerror ? Ot(S, this.onerror) : S), p === void 0 ? E === void 0 ? void 0 : E : d(p, E)
			}
		}

		function wn(s, l) {
			return s === Me ? l : function() {
				return l.apply(this, arguments) !== !1 && s.apply(this, arguments)
			}
		}

		function pi(s, l) {
			return s === Me ? l : function() {
				var h = s.apply(this, arguments);
				if (h && typeof h.then == "function") {
					for (var p = this, g = arguments.length, S = new Array(g); g--;) S[g] = arguments[g];
					return h.then(function() {
						return l.apply(p, S)
					})
				}
				return l.apply(this, arguments)
			}
		}
		le.ModifyError = Oe, le.DexieError = Ee, le.BulkError = Ae;
		var xn = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

		function pc(s) {
			xn = s
		}
		var Yr = {},
			us = 100,
			mi = typeof Promise > "u" ? [] : (ln = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [mi = crypto.subtle.digest("SHA-512", new Uint8Array([0])), f(mi), ln] : [ln, f(ln), ln]),
			ln = mi[0],
			ws = mi[1],
			ws = ws && ws.then,
			qr = ln && ln.constructor,
			ja = !!mi[2],
			vi = function(s, l) {
				_i.push([s, l]), ds && (queueMicrotask(e5), ds = !1)
			},
			Ta = !0,
			ds = !0,
			De = [],
			Be = [],
			Gt = St,
			Xt = {
				id: "global",
				global: !0,
				ref: 0,
				unhandleds: [],
				onunhandled: Me,
				pgp: !1,
				env: {},
				finalize: Me
			},
			Ce = Xt,
			_i = [],
			Un = 0,
			Gr = [];

		function ve(s) {
			if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
			this._listeners = [], this._lib = !1;
			var l = this._PSD = Ce;
			if (typeof s != "function") {
				if (s !== Yr) throw new TypeError("Not a function");
				this._state = arguments[1], this._value = arguments[2], this._state === !1 && Yd(this, this._value)
			} else this._state = null, this._value = null, ++l.ref,
				function h(p, g) {
					try {
						g(function(S) {
							if (p._state === null) {
								if (S === p) throw new TypeError("A promise cannot be resolved with itself.");
								var E = p._lib && hs();
								S && typeof S.then == "function" ? h(p, function(I, T) {
									S instanceof ve ? S._then(I, T) : S.then(I, T)
								}) : (p._state = !0, p._value = S, yp(p)), E && ps()
							}
						}, Yd.bind(null, p))
					} catch (S) {
						Yd(p, S)
					}
				}(this, s)
		}
		var fs = {
			get: function() {
				var s = Ce,
					l = gc;

				function h(p, g) {
					var S = this,
						E = !s.global && (s !== Ce || l !== gc),
						I = E && !ko(),
						T = new ve(function(V, R) {
							qd(S, new gi(xp(p, s, E, I), xp(g, s, E, I), V, R, s))
						});
					return this._consoleTask && (T._consoleTask = this._consoleTask), T
				}
				return h.prototype = Yr, h
			},
			set: function(s) {
				k(this, "then", s && s.prototype === Yr ? fs : {
					get: function() {
						return s
					},
					set: fs.set
				})
			}
		};

		function gi(s, l, h, p, g) {
			this.onFulfilled = typeof s == "function" ? s : null, this.onRejected = typeof l == "function" ? l : null, this.resolve = h, this.reject = p, this.psd = g
		}

		function Yd(s, l) {
			var h, p;
			Be.push(l), s._state === null && (h = s._lib && hs(), l = Gt(l), s._state = !1, s._value = l, p = s, De.some(function(g) {
				return g._value === p._value
			}) || De.push(p), yp(s), h) && ps()
		}

		function yp(s) {
			var l = s._listeners;
			s._listeners = [];
			for (var h = 0, p = l.length; h < p; ++h) qd(s, l[h]);
			var g = s._PSD;
			--g.ref || g.finalize(), Un === 0 && (++Un, vi(function() {
				--Un == 0 && Gd()
			}, []))
		}

		function qd(s, l) {
			if (s._state === null) s._listeners.push(l);
			else {
				var h = s._state ? l.onFulfilled : l.onRejected;
				if (h === null) return (s._state ? l.resolve : l.reject)(s._value);
				++l.psd.ref, ++Un, vi(Jy, [h, s, l])
			}
		}

		function Jy(s, l, h) {
			try {
				var p, g = l._value;
				!l._state && Be.length && (Be = []), p = xn && l._consoleTask ? l._consoleTask.run(function() {
					return s(g)
				}) : s(g), l._state || Be.indexOf(g) !== -1 || (S => {
					for (var E = De.length; E;)
						if (De[--E]._value === S._value) return De.splice(E, 1)
				})(l), h.resolve(p)
			} catch (S) {
				h.reject(S)
			} finally {
				--Un == 0 && Gd(), --h.psd.ref || h.psd.finalize()
			}
		}

		function e5() {
			yi(Xt, function() {
				hs() && ps()
			})
		}

		function hs() {
			var s = Ta;
			return ds = Ta = !1, s
		}

		function ps() {
			var s, l, h;
			do
				for (; 0 < _i.length;)
					for (s = _i, _i = [], h = s.length, l = 0; l < h; ++l) {
						var p = s[l];
						p[0].apply(null, p[1])
					}
			while (0 < _i.length);
			ds = Ta = !0
		}

		function Gd() {
			for (var s = De, l = (De = [], s.forEach(function(p) {
					p._PSD.onunhandled.call(null, p._value, p)
				}), Gr.slice(0)), h = l.length; h;) l[--h]()
		}

		function mc(s) {
			return new ve(Yr, !1, s)
		}

		function dt(s, l) {
			var h = Ce;
			return function() {
				var p = hs(),
					g = Ce;
				try {
					return bo(h, !0), s.apply(this, arguments)
				} catch (S) {
					l && l(S)
				} finally {
					bo(g, !1), p && ps()
				}
			}
		}
		v(ve.prototype, {
			then: fs,
			_then: function(s, l) {
				qd(this, new gi(null, null, s, l, Ce))
			},
			catch: function(s) {
				var l, h;
				return arguments.length === 1 ? this.then(null, s) : (l = s, h = arguments[1], typeof l == "function" ? this.then(null, function(p) {
					return (p instanceof l ? h : mc)(p)
				}) : this.then(null, function(p) {
					return (p && p.name === l ? h : mc)(p)
				}))
			},
			finally: function(s) {
				return this.then(function(l) {
					return ve.resolve(s()).then(function() {
						return l
					})
				}, function(l) {
					return ve.resolve(s()).then(function() {
						return mc(l)
					})
				})
			},
			timeout: function(s, l) {
				var h = this;
				return s < 1 / 0 ? new ve(function(p, g) {
					var S = setTimeout(function() {
						return g(new ue.Timeout(l))
					}, s);
					h.then(p, g).finally(clearTimeout.bind(null, S))
				}) : this
			}
		}), typeof Symbol < "u" && Symbol.toStringTag && k(ve.prototype, Symbol.toStringTag, "Dexie.Promise"), Xt.env = wp(), v(ve, {
			all: function() {
				var s = K.apply(null, arguments).map(yc);
				return new ve(function(l, h) {
					s.length === 0 && l([]);
					var p = s.length;
					s.forEach(function(g, S) {
						return ve.resolve(g).then(function(E) {
							s[S] = E, --p || l(s)
						}, h)
					})
				})
			},
			resolve: function(s) {
				return s instanceof ve ? s : s && typeof s.then == "function" ? new ve(function(l, h) {
					s.then(l, h)
				}) : new ve(Yr, !0, s)
			},
			reject: mc,
			race: function() {
				var s = K.apply(null, arguments).map(yc);
				return new ve(function(l, h) {
					s.map(function(p) {
						return ve.resolve(p).then(l, h)
					})
				})
			},
			PSD: {
				get: function() {
					return Ce
				},
				set: function(s) {
					return Ce = s
				}
			},
			totalEchoes: {
				get: function() {
					return gc
				}
			},
			newPSD: So,
			usePSD: yi,
			scheduler: {
				get: function() {
					return vi
				},
				set: function(s) {
					vi = s
				}
			},
			rejectionMapper: {
				get: function() {
					return Gt
				},
				set: function(s) {
					Gt = s
				}
			},
			follow: function(s, l) {
				return new ve(function(h, p) {
					return So(function(g, S) {
						var E = Ce;
						E.unhandleds = [], E.onunhandled = S, E.finalize = Ot(function() {
							var I, T = this;
							I = function() {
								T.unhandleds.length === 0 ? g() : S(T.unhandleds[0])
							}, Gr.push(function V() {
								I(), Gr.splice(Gr.indexOf(V), 1)
							}), ++Un, vi(function() {
								--Un == 0 && Gd()
							}, [])
						}, E.finalize), s()
					}, l, h, p)
				})
			}
		}), qr && (qr.allSettled && k(ve, "allSettled", function() {
			var s = K.apply(null, arguments).map(yc);
			return new ve(function(l) {
				s.length === 0 && l([]);
				var h = s.length,
					p = new Array(h);
				s.forEach(function(g, S) {
					return ve.resolve(g).then(function(E) {
						return p[S] = {
							status: "fulfilled",
							value: E
						}
					}, function(E) {
						return p[S] = {
							status: "rejected",
							reason: E
						}
					}).then(function() {
						return --h || l(p)
					})
				})
			})
		}), qr.any && typeof AggregateError < "u" && k(ve, "any", function() {
			var s = K.apply(null, arguments).map(yc);
			return new ve(function(l, h) {
				s.length === 0 && h(new AggregateError([]));
				var p = s.length,
					g = new Array(p);
				s.forEach(function(S, E) {
					return ve.resolve(S).then(function(I) {
						return l(I)
					}, function(I) {
						g[E] = I, --p || h(new AggregateError(g))
					})
				})
			})
		}), qr.withResolvers) && (ve.withResolvers = qr.withResolvers);
		var Nt = {
				awaits: 0,
				echoes: 0,
				id: 0
			},
			t5 = 0,
			vc = [],
			_c = 0,
			gc = 0,
			n5 = 0;

		function So(s, E, h, p) {
			var g = Ce,
				S = Object.create(g),
				E = (S.parent = g, S.ref = 0, S.global = !1, S.id = ++n5, Xt.env, S.env = ja ? {
					Promise: ve,
					PromiseProp: {
						value: ve,
						configurable: !0,
						writable: !0
					},
					all: ve.all,
					race: ve.race,
					allSettled: ve.allSettled,
					any: ve.any,
					resolve: ve.resolve,
					reject: ve.reject
				} : {}, E && d(S, E), ++g.ref, S.finalize = function() {
					--this.parent.ref || this.parent.finalize()
				}, yi(S, s, h, p));
			return S.ref === 0 && S.finalize(), E
		}

		function ms() {
			return Nt.id || (Nt.id = ++t5), ++Nt.awaits, Nt.echoes += us, Nt.id
		}

		function ko() {
			return !!Nt.awaits && (--Nt.awaits == 0 && (Nt.id = 0), Nt.echoes = Nt.awaits * us, !0)
		}

		function yc(s) {
			return Nt.echoes && s && s.constructor === qr ? (ms(), s.then(function(l) {
				return ko(), l
			}, function(l) {
				return ko(), kt(l)
			})) : s
		}

		function r5() {
			var s = vc[vc.length - 1];
			vc.pop(), bo(s, !1)
		}

		function bo(s, l) {
			var h, p, g = Ce;
			(l ? !Nt.echoes || _c++ && s === Ce : !_c || --_c && s === Ce) || queueMicrotask(l ? (function(S) {
				++gc, Nt.echoes && --Nt.echoes != 0 || (Nt.echoes = Nt.awaits = Nt.id = 0), vc.push(Ce), bo(S, !0)
			}).bind(null, s) : r5), s !== Ce && (Ce = s, g === Xt && (Xt.env = wp()), ja) && (h = Xt.env.Promise, p = s.env, g.global || s.global) && (Object.defineProperty(i, "Promise", p.PromiseProp), h.all = p.all, h.race = p.race, h.resolve = p.resolve, h.reject = p.reject, p.allSettled && (h.allSettled = p.allSettled), p.any) && (h.any = p.any)
		}

		function wp() {
			var s = i.Promise;
			return ja ? {
				Promise: s,
				PromiseProp: Object.getOwnPropertyDescriptor(i, "Promise"),
				all: s.all,
				race: s.race,
				allSettled: s.allSettled,
				any: s.any,
				resolve: s.resolve,
				reject: s.reject
			} : {}
		}

		function yi(s, l, h, p, g) {
			var S = Ce;
			try {
				return bo(s, !0), l(h, p, g)
			} finally {
				bo(S, !1)
			}
		}

		function xp(s, l, h, p) {
			return typeof s != "function" ? s : function() {
				var g = Ce;
				h && ms(), bo(l, !0);
				try {
					return s.apply(this, arguments)
				} finally {
					bo(g, !1), p && queueMicrotask(ko)
				}
			}
		}

		function Xd(s) {
			Promise === qr && Nt.echoes === 0 ? _c === 0 ? s() : enqueueNativeMicroTask(s) : setTimeout(s, 0)
		}("" + ws).indexOf("[native code]") === -1 && (ms = ko = Me);
		var kt = ve.reject,
			wi = "￿",
			Xr = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
			Sp = "String expected.",
			vs = [],
			wc = "__dbnames",
			Qd = "readonly",
			Zd = "readwrite";

		function xi(s, l) {
			return s ? l ? function() {
				return s.apply(this, arguments) && l.apply(this, arguments)
			} : s : l
		}
		var kp = {
			type: 3,
			lower: -1 / 0,
			lowerOpen: !1,
			upper: [
				[]
			],
			upperOpen: !1
		};

		function xc(s) {
			return typeof s != "string" || /\./.test(s) ? function(l) {
				return l
			} : function(l) {
				return l[s] === void 0 && s in l && delete(l = me(l))[s], l
			}
		}

		function bp() {
			throw ue.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")
		}

		function Ke(s, l) {
			try {
				var h = Cp(s),
					p = Cp(l);
				if (h !== p) return h === "Array" ? 1 : p === "Array" ? -1 : h === "binary" ? 1 : p === "binary" ? -1 : h === "string" ? 1 : p === "string" ? -1 : h === "Date" ? 1 : p !== "Date" ? NaN : -1;
				switch (h) {
					case "number":
					case "Date":
					case "string":
						return l < s ? 1 : s < l ? -1 : 0;
					case "binary":
						for (var g = Ep(s), S = Ep(l), E = g.length, I = S.length, T = E < I ? E : I, V = 0; V < T; ++V)
							if (g[V] !== S[V]) return g[V] < S[V] ? -1 : 1;
						return E === I ? 0 : E < I ? -1 : 1;
					case "Array":
						for (var R = s, M = l, D = R.length, B = M.length, N = D < B ? D : B, j = 0; j < N; ++j) {
							var U = Ke(R[j], M[j]);
							if (U !== 0) return U
						}
						return D === B ? 0 : D < B ? -1 : 1
				}
			} catch {}
			return NaN
		}

		function Cp(s) {
			var l = typeof s;
			return l == "object" && (ArrayBuffer.isView(s) || (l = J(s)) === "ArrayBuffer") ? "binary" : l
		}

		function Ep(s) {
			return s instanceof Uint8Array ? s : ArrayBuffer.isView(s) ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : new Uint8Array(s)
		}

		function Sc(s, l, h) {
			var p = s.schema.yProps;
			return p ? (l && 0 < h.numFailures && (l = l.filter(function(g, S) {
				return !h.failures[S]
			})), Promise.all(p.map(function(g) {
				return g = g.updatesTable, l ? s.db.table(g).where("k").anyOf(l).delete() : s.db.table(g).clear()
			})).then(function() {
				return h
			})) : h
		}
		Ap.prototype.execute = function(s) {
			var l = this["@@propmod"];
			if (l.add !== void 0) {
				var h = l.add;
				if (c(h)) return o(o([], c(s) ? s : [], !0), h).sort();
				if (typeof h == "number") return (Number(s) || 0) + h;
				if (typeof h == "bigint") try {
					return BigInt(s) + h
				} catch {
					return BigInt(0) + h
				}
				throw new TypeError("Invalid term ".concat(h))
			}
			if (l.remove !== void 0) {
				var p = l.remove;
				if (c(p)) return c(s) ? s.filter(function(g) {
					return !p.includes(g)
				}).sort() : [];
				if (typeof p == "number") return Number(s) - p;
				if (typeof p == "bigint") try {
					return BigInt(s) - p
				} catch {
					return BigInt(0) - p
				}
				throw new TypeError("Invalid subtrahend ".concat(p))
			}
			return h = (h = l.replacePrefix) == null ? void 0 : h[0], h && typeof s == "string" && s.startsWith(h) ? l.replacePrefix[1] + s.substring(h.length) : s
		};
		var Ra = Ap;

		function Ap(s) {
			this["@@propmod"] = s
		}

		function Ip(s, l) {
			for (var h = a(l), p = h.length, g = !1, S = 0; S < p; ++S) {
				var E = h[S],
					I = l[E],
					T = $(s, E);
				I instanceof Ra ? (H(s, E, I.execute(T)), g = !0) : T !== I && (H(s, E, I), g = !0)
			}
			return g
		}
		it.prototype._trans = function(s, l, h) {
			var p = this._tx || Ce.trans,
				g = this.name,
				S = xn && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(s === "readonly" ? "read" : "write", " ").concat(this.name));

			function E(V, R, M) {
				if (M.schema[g]) return l(M.idbtrans, M);
				throw new ue.NotFound("Table " + g + " not part of transaction")
			}
			var I = hs();
			try {
				var T = p && p.db._novip === this.db._novip ? p === Ce.trans ? p._promise(s, E, h) : So(function() {
					return p._promise(s, E, h)
				}, {
					trans: p,
					transless: Ce.transless || Ce
				}) : function V(R, M, D, B) {
					if (R.idbdb && (R._state.openComplete || Ce.letThrough || R._vip)) {
						var N = R._createTransaction(M, D, R._dbSchema);
						try {
							N.create(), R._state.PR1398_maxLoop = 3
						} catch (j) {
							return j.name === Le.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({
								disableAutoOpen: !1
							}), R.open().then(function() {
								return V(R, M, D, B)
							})) : kt(j)
						}
						return N._promise(M, function(j, U) {
							return So(function() {
								return Ce.trans = N, B(j, U, N)
							})
						}).then(function(j) {
							if (M === "readwrite") try {
								N.idbtrans.commit()
							} catch {}
							return M === "readonly" ? j : N._completion.then(function() {
								return j
							})
						})
					}
					if (R._state.openComplete) return kt(new ue.DatabaseClosed(R._state.dbOpenError));
					if (!R._state.isBeingOpened) {
						if (!R._state.autoOpen) return kt(new ue.DatabaseClosed);
						R.open().catch(Me)
					}
					return R._state.dbReadyPromise.then(function() {
						return V(R, M, D, B)
					})
				}(this.db, s, [this.name], E);
				return S && (T._consoleTask = S, T = T.catch(function(V) {
					return console.trace(V), kt(V)
				})), T
			} finally {
				I && ps()
			}
		}, it.prototype.get = function(s, l) {
			var h = this;
			return s && s.constructor === Object ? this.where(s).first(l) : s == null ? kt(new ue.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(p) {
				return h.core.get({
					trans: p,
					key: s
				}).then(function(g) {
					return h.hook.reading.fire(g)
				})
			}).then(l)
		}, it.prototype.where = function(s) {
			if (typeof s == "string") return new this.db.WhereClause(this, s);
			if (c(s)) return new this.db.WhereClause(this, "[".concat(s.join("+"), "]"));
			var l = a(s);
			if (l.length === 1) return this.where(l[0]).equals(s[l[0]]);
			var h = this.schema.indexes.concat(this.schema.primKey).filter(function(I) {
				if (I.compound && l.every(function(V) {
						return 0 <= I.keyPath.indexOf(V)
					})) {
					for (var T = 0; T < l.length; ++T)
						if (l.indexOf(I.keyPath[T]) === -1) return !1;
					return !0
				}
				return !1
			}).sort(function(I, T) {
				return I.keyPath.length - T.keyPath.length
			})[0];
			if (h && this.db._maxKey !== wi) return E = h.keyPath.slice(0, l.length), this.where(E).equals(E.map(function(I) {
				return s[I]
			}));
			!h && xn && console.warn("The query ".concat(JSON.stringify(s), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(l.join("+"), "]"));
			var p = this.schema.idxByName;

			function g(I, T) {
				return Ke(I, T) === 0
			}
			var E = l.reduce(function(R, T) {
					var V = R[0],
						R = R[1],
						M = p[T],
						D = s[T];
					return [V || M, V || !M ? xi(R, M && M.multi ? function(B) {
						return B = $(B, T), c(B) && B.some(function(N) {
							return g(D, N)
						})
					} : function(B) {
						return g(D, $(B, T))
					}) : R]
				}, [null, null]),
				S = E[0],
				E = E[1];
			return S ? this.where(S.name).equals(s[S.keyPath]).filter(E) : h ? this.filter(E) : this.where(l).equals("")
		}, it.prototype.filter = function(s) {
			return this.toCollection().and(s)
		}, it.prototype.count = function(s) {
			return this.toCollection().count(s)
		}, it.prototype.offset = function(s) {
			return this.toCollection().offset(s)
		}, it.prototype.limit = function(s) {
			return this.toCollection().limit(s)
		}, it.prototype.each = function(s) {
			return this.toCollection().each(s)
		}, it.prototype.toArray = function(s) {
			return this.toCollection().toArray(s)
		}, it.prototype.toCollection = function() {
			return new this.db.Collection(new this.db.WhereClause(this))
		}, it.prototype.orderBy = function(s) {
			return new this.db.Collection(new this.db.WhereClause(this, c(s) ? "[".concat(s.join("+"), "]") : s))
		}, it.prototype.reverse = function() {
			return this.toCollection().reverse()
		}, it.prototype.mapToClass = function(s) {
			for (var l = this.db, h = this.name, p = ((this.schema.mappedClass = s).prototype instanceof bp && (s = (E => {
					var I = R,
						T = E;
					if (typeof T != "function" && T !== null) throw new TypeError("Class extends value " + String(T) + " is not a constructor or null");

					function V() {
						this.constructor = I
					}

					function R() {
						return E !== null && E.apply(this, arguments) || this
					}
					return n(I, T), I.prototype = T === null ? Object.create(T) : (V.prototype = T.prototype, new V), Object.defineProperty(R.prototype, "db", {
						get: function() {
							return l
						},
						enumerable: !1,
						configurable: !0
					}), R.prototype.table = function() {
						return h
					}, R
				})(s)), new Set), g = s.prototype; g; g = f(g)) Object.getOwnPropertyNames(g).forEach(function(E) {
				return p.add(E)
			});

			function S(E) {
				if (!E) return E;
				var I, T = Object.create(s.prototype);
				for (I in E)
					if (!p.has(I)) try {
						T[I] = E[I]
					} catch {}
				return T
			}
			return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = S, this.hook("reading", S), s
		}, it.prototype.defineClass = function() {
			return this.mapToClass(function(s) {
				d(this, s)
			})
		}, it.prototype.add = function(s, l) {
			var h = this,
				p = this.schema.primKey,
				g = p.auto,
				S = p.keyPath,
				E = s;
			return S && g && (E = xc(S)(s)), this._trans("readwrite", function(I) {
				return h.core.mutate({
					trans: I,
					type: "add",
					keys: l != null ? [l] : null,
					values: [E]
				})
			}).then(function(I) {
				return I.numFailures ? ve.reject(I.failures[0]) : I.lastResult
			}).then(function(I) {
				if (S) try {
					H(s, S, I)
				} catch {}
				return I
			})
		}, it.prototype.upsert = function(s, l) {
			var h = this,
				p = this.schema.primKey.keyPath;
			return this._trans("readwrite", function(g) {
				return h.core.get({
					trans: g,
					key: s
				}).then(function(S) {
					var E = S ?? {};
					return Ip(E, l), p && H(E, p, s), h.core.mutate({
						trans: g,
						type: "put",
						values: [E],
						keys: [s],
						upsert: !0,
						updates: {
							keys: [s],
							changeSpecs: [l]
						}
					}).then(function(I) {
						return I.numFailures ? ve.reject(I.failures[0]) : !!S
					})
				})
			})
		}, it.prototype.update = function(s, l) {
			return typeof s != "object" || c(s) ? this.where(":id").equals(s).modify(l) : (s = $(s, this.schema.primKey.keyPath)) === void 0 ? kt(new ue.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(s).modify(l)
		}, it.prototype.put = function(s, l) {
			var h = this,
				p = this.schema.primKey,
				g = p.auto,
				S = p.keyPath,
				E = s;
			return S && g && (E = xc(S)(s)), this._trans("readwrite", function(I) {
				return h.core.mutate({
					trans: I,
					type: "put",
					values: [E],
					keys: l != null ? [l] : null
				})
			}).then(function(I) {
				return I.numFailures ? ve.reject(I.failures[0]) : I.lastResult
			}).then(function(I) {
				if (S) try {
					H(s, S, I)
				} catch {}
				return I
			})
		}, it.prototype.delete = function(s) {
			var l = this;
			return this._trans("readwrite", function(h) {
				return l.core.mutate({
					trans: h,
					type: "delete",
					keys: [s]
				}).then(function(p) {
					return Sc(l, [s], p)
				}).then(function(p) {
					return p.numFailures ? ve.reject(p.failures[0]) : void 0
				})
			})
		}, it.prototype.clear = function() {
			var s = this;
			return this._trans("readwrite", function(l) {
				return s.core.mutate({
					trans: l,
					type: "deleteRange",
					range: kp
				}).then(function(h) {
					return Sc(s, null, h)
				})
			}).then(function(l) {
				return l.numFailures ? ve.reject(l.failures[0]) : void 0
			})
		}, it.prototype.bulkGet = function(s) {
			var l = this;
			return this._trans("readonly", function(h) {
				return l.core.getMany({
					keys: s,
					trans: h
				}).then(function(p) {
					return p.map(function(g) {
						return l.hook.reading.fire(g)
					})
				})
			})
		}, it.prototype.bulkAdd = function(s, l, h) {
			var p = this,
				g = Array.isArray(l) ? l : void 0,
				S = (h = h || (g ? void 0 : l)) ? h.allKeys : void 0;
			return this._trans("readwrite", function(E) {
				var I = p.schema.primKey,
					V = I.auto,
					I = I.keyPath;
				if (I && g) throw new ue.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
				if (g && g.length !== s.length) throw new ue.InvalidArgument("Arguments objects and keys must have the same length");
				var T = s.length,
					V = I && V ? s.map(xc(I)) : s;
				return p.core.mutate({
					trans: E,
					type: "add",
					keys: g,
					values: V,
					wantResults: S
				}).then(function(R) {
					var M = R.numFailures,
						D = R.failures;
					if (M === 0) return S ? R.results : R.lastResult;
					throw new Ae("".concat(p.name, ".bulkAdd(): ").concat(M, " of ").concat(T, " operations failed"), D)
				})
			})
		}, it.prototype.bulkPut = function(s, l, h) {
			var p = this,
				g = Array.isArray(l) ? l : void 0,
				S = (h = h || (g ? void 0 : l)) ? h.allKeys : void 0;
			return this._trans("readwrite", function(E) {
				var I = p.schema.primKey,
					V = I.auto,
					I = I.keyPath;
				if (I && g) throw new ue.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
				if (g && g.length !== s.length) throw new ue.InvalidArgument("Arguments objects and keys must have the same length");
				var T = s.length,
					V = I && V ? s.map(xc(I)) : s;
				return p.core.mutate({
					trans: E,
					type: "put",
					keys: g,
					values: V,
					wantResults: S
				}).then(function(R) {
					var M = R.numFailures,
						D = R.failures;
					if (M === 0) return S ? R.results : R.lastResult;
					throw new Ae("".concat(p.name, ".bulkPut(): ").concat(M, " of ").concat(T, " operations failed"), D)
				})
			})
		}, it.prototype.bulkUpdate = function(s) {
			var l = this,
				h = this.core,
				p = s.map(function(E) {
					return E.key
				}),
				g = s.map(function(E) {
					return E.changes
				}),
				S = [];
			return this._trans("readwrite", function(E) {
				return h.getMany({
					trans: E,
					keys: p,
					cache: "clone"
				}).then(function(I) {
					var T = [],
						V = [],
						R = (s.forEach(function(M, D) {
							var B = M.key,
								N = M.changes,
								j = I[D];
							if (j) {
								for (var U = 0, Y = Object.keys(N); U < Y.length; U++) {
									var F = Y[U],
										ee = N[F];
									if (F === l.schema.primKey.keyPath) {
										if (Ke(ee, B) !== 0) throw new ue.Constraint("Cannot update primary key in bulkUpdate()")
									} else H(j, F, ee)
								}
								S.push(D), T.push(B), V.push(j)
							}
						}), T.length);
					return h.mutate({
						trans: E,
						type: "put",
						keys: T,
						values: V,
						updates: {
							keys: p,
							changeSpecs: g
						}
					}).then(function(M) {
						var D = M.numFailures,
							B = M.failures;
						if (D === 0) return R;
						for (var N = 0, j = Object.keys(B); N < j.length; N++) {
							var U, Y = j[N],
								F = S[Number(Y)];
							F != null && (U = B[Y], delete B[Y], B[F] = U)
						}
						throw new Ae("".concat(l.name, ".bulkUpdate(): ").concat(D, " of ").concat(R, " operations failed"), B)
					})
				})
			})
		}, it.prototype.bulkDelete = function(s) {
			var l = this,
				h = s.length;
			return this._trans("readwrite", function(p) {
				return l.core.mutate({
					trans: p,
					type: "delete",
					keys: s
				}).then(function(g) {
					return Sc(l, s, g)
				})
			}).then(function(p) {
				var g = p.numFailures,
					S = p.failures;
				if (g === 0) return p.lastResult;
				throw new Ae("".concat(l.name, ".bulkDelete(): ").concat(g, " of ").concat(h, " operations failed"), S)
			})
		};
		var Pp = it;

		function it() {}

		function Na(s) {
			function l(E, I) {
				if (I) {
					for (var T = arguments.length, V = new Array(T - 1); --T;) V[T - 1] = arguments[T];
					return h[E].subscribe.apply(null, V), s
				}
				if (typeof E == "string") return h[E]
			}
			var h = {};
			l.addEventType = S;
			for (var p = 1, g = arguments.length; p < g; ++p) S(arguments[p]);
			return l;

			function S(E, I, T) {
				var V, R;
				if (typeof E != "object") return I = I || wn, R = {
					subscribers: [],
					fire: T = T || Me,
					subscribe: function(M) {
						R.subscribers.indexOf(M) === -1 && (R.subscribers.push(M), R.fire = I(R.fire, M))
					},
					unsubscribe: function(M) {
						R.subscribers = R.subscribers.filter(function(D) {
							return D !== M
						}), R.fire = R.subscribers.reduce(I, T)
					}
				}, h[E] = l[E] = R;
				a(V = E).forEach(function(M) {
					var D = V[M];
					if (c(D)) S(M, V[M][0], V[M][1]);
					else {
						if (D !== "asap") throw new ue.InvalidArgument("Invalid event config");
						var B = S(M, St, function() {
							for (var N = arguments.length, j = new Array(N); N--;) j[N] = arguments[N];
							B.subscribers.forEach(function(U) {
								L(function() {
									U.apply(null, j)
								})
							})
						})
					}
				})
			}
		}

		function La(s, l) {
			return A(l).from({
				prototype: s
			}), l
		}

		function _s(s, l) {
			return !(s.filter || s.algorithm || s.or) && (l ? s.justLimit : !s.replayFilter)
		}

		function Jd(s, l) {
			s.filter = xi(s.filter, l)
		}

		function ef(s, l, h) {
			var p = s.replayFilter;
			s.replayFilter = p ? function() {
				return xi(p(), l())
			} : l, s.justLimit = h && !p
		}

		function kc(s, l) {
			if (s.isPrimKey) return l.primaryKey;
			var h = l.getIndexByKeyPath(s.index);
			if (h) return h;
			throw new ue.Schema("KeyPath " + s.index + " on object store " + l.name + " is not indexed")
		}

		function Op(s, l, h) {
			var p = kc(s, l.schema);
			return l.openCursor({
				trans: h,
				values: !s.keysOnly,
				reverse: s.dir === "prev",
				unique: !!s.unique,
				query: {
					index: p,
					range: s.range
				}
			})
		}

		function bc(s, l, h, p) {
			var g, S, E = s.replayFilter ? xi(s.filter, s.replayFilter()) : s.filter;
			return s.or ? (g = {}, S = function(I, T, V) {
				var R, M;
				E && !E(T, V, function(D) {
					return T.stop(D)
				}, function(D) {
					return T.fail(D)
				}) || ((M = "" + (R = T.primaryKey)) == "[object ArrayBuffer]" && (M = "" + new Uint8Array(R)), _(g, M)) || (g[M] = !0, l(I, T, V))
			}, Promise.all([s.or._iterate(S, h), Mp(Op(s, p, h), s.algorithm, S, !s.keysOnly && s.valueMapper)])) : Mp(Op(s, p, h), xi(s.algorithm, E), l, !s.keysOnly && s.valueMapper)
		}

		function Mp(s, l, h, p) {
			var g = dt(p ? function(S, E, I) {
				return h(p(S), E, I)
			} : h);
			return s.then(function(S) {
				if (S) return S.start(function() {
					var E = function() {
						return S.continue()
					};
					l && !l(S, function(I) {
						return E = I
					}, function(I) {
						S.stop(I), E = Me
					}, function(I) {
						S.fail(I), E = Me
					}) || g(S.value, S, function(I) {
						return E = I
					}), E()
				})
			})
		}
		Xe.prototype._read = function(s, l) {
			var h = this._ctx;
			return h.error ? h.table._trans(null, kt.bind(null, h.error)) : h.table._trans("readonly", s).then(l)
		}, Xe.prototype._write = function(s) {
			var l = this._ctx;
			return l.error ? l.table._trans(null, kt.bind(null, l.error)) : l.table._trans("readwrite", s, "locked")
		}, Xe.prototype._addAlgorithm = function(s) {
			var l = this._ctx;
			l.algorithm = xi(l.algorithm, s)
		}, Xe.prototype._iterate = function(s, l) {
			return bc(this._ctx, s, l, this._ctx.table.core)
		}, Xe.prototype.clone = function(s) {
			var l = Object.create(this.constructor.prototype),
				h = Object.create(this._ctx);
			return s && d(h, s), l._ctx = h, l
		}, Xe.prototype.raw = function() {
			return this._ctx.valueMapper = null, this
		}, Xe.prototype.each = function(s) {
			var l = this._ctx;
			return this._read(function(h) {
				return bc(l, s, h, l.table.core)
			})
		}, Xe.prototype.count = function(s) {
			var l = this;
			return this._read(function(h) {
				var p, g = l._ctx,
					S = g.table.core;
				return _s(g, !0) ? S.count({
					trans: h,
					query: {
						index: kc(g, S.schema),
						range: g.range
					}
				}).then(function(E) {
					return Math.min(E, g.limit)
				}) : (p = 0, bc(g, function() {
					return ++p, !1
				}, h, S).then(function() {
					return p
				}))
			}).then(s)
		}, Xe.prototype.sortBy = function(s, l) {
			var h = s.split(".").reverse(),
				p = h[0],
				g = h.length - 1;

			function S(T, V) {
				return V ? S(T[h[V]], V - 1) : T[p]
			}
			var E = this._ctx.dir === "next" ? 1 : -1;

			function I(T, V) {
				return Ke(S(T, g), S(V, g)) * E
			}
			return this.toArray(function(T) {
				return T.sort(I)
			}).then(l)
		}, Xe.prototype.toArray = function(s) {
			var l = this;
			return this._read(function(h) {
				var p, g, S, E = l._ctx;
				return E.dir === "next" && _s(E, !0) && 0 < E.limit ? (p = E.valueMapper, g = kc(E, E.table.core.schema), E.table.core.query({
					trans: h,
					limit: E.limit,
					values: !0,
					query: {
						index: g,
						range: E.range
					}
				}).then(function(I) {
					return I = I.result, p ? I.map(p) : I
				})) : (S = [], bc(E, function(I) {
					return S.push(I)
				}, h, E.table.core).then(function() {
					return S
				}))
			}, s)
		}, Xe.prototype.offset = function(s) {
			var l = this._ctx;
			return s <= 0 || (l.offset += s, _s(l) ? ef(l, function() {
				var h = s;
				return function(p, g) {
					return h === 0 || (h === 1 ? --h : g(function() {
						p.advance(h), h = 0
					}), !1)
				}
			}) : ef(l, function() {
				var h = s;
				return function() {
					return --h < 0
				}
			})), this
		}, Xe.prototype.limit = function(s) {
			return this._ctx.limit = Math.min(this._ctx.limit, s), ef(this._ctx, function() {
				var l = s;
				return function(h, p, g) {
					return --l <= 0 && p(g), 0 <= l
				}
			}, !0), this
		}, Xe.prototype.until = function(s, l) {
			return Jd(this._ctx, function(h, p, g) {
				return !s(h.value) || (p(g), l)
			}), this
		}, Xe.prototype.first = function(s) {
			return this.limit(1).toArray(function(l) {
				return l[0]
			}).then(s)
		}, Xe.prototype.last = function(s) {
			return this.reverse().first(s)
		}, Xe.prototype.filter = function(s) {
			var l;
			return Jd(this._ctx, function(h) {
				return s(h.value)
			}), (l = this._ctx).isMatch = xi(l.isMatch, s), this
		}, Xe.prototype.and = function(s) {
			return this.filter(s)
		}, Xe.prototype.or = function(s) {
			return new this.db.WhereClause(this._ctx.table, s, this)
		}, Xe.prototype.reverse = function() {
			return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this
		}, Xe.prototype.desc = function() {
			return this.reverse()
		}, Xe.prototype.eachKey = function(s) {
			var l = this._ctx;
			return l.keysOnly = !l.isMatch, this.each(function(h, p) {
				s(p.key, p)
			})
		}, Xe.prototype.eachUniqueKey = function(s) {
			return this._ctx.unique = "unique", this.eachKey(s)
		}, Xe.prototype.eachPrimaryKey = function(s) {
			var l = this._ctx;
			return l.keysOnly = !l.isMatch, this.each(function(h, p) {
				s(p.primaryKey, p)
			})
		}, Xe.prototype.keys = function(s) {
			var l = this._ctx,
				h = (l.keysOnly = !l.isMatch, []);
			return this.each(function(p, g) {
				h.push(g.key)
			}).then(function() {
				return h
			}).then(s)
		}, Xe.prototype.primaryKeys = function(s) {
			var l = this._ctx;
			if (l.dir === "next" && _s(l, !0) && 0 < l.limit) return this._read(function(p) {
				var g = kc(l, l.table.core.schema);
				return l.table.core.query({
					trans: p,
					values: !1,
					limit: l.limit,
					query: {
						index: g,
						range: l.range
					}
				})
			}).then(function(p) {
				return p.result
			}).then(s);
			l.keysOnly = !l.isMatch;
			var h = [];
			return this.each(function(p, g) {
				h.push(g.primaryKey)
			}).then(function() {
				return h
			}).then(s)
		}, Xe.prototype.uniqueKeys = function(s) {
			return this._ctx.unique = "unique", this.keys(s)
		}, Xe.prototype.firstKey = function(s) {
			return this.limit(1).keys(function(l) {
				return l[0]
			}).then(s)
		}, Xe.prototype.lastKey = function(s) {
			return this.reverse().firstKey(s)
		}, Xe.prototype.distinct = function() {
			var s, l = this._ctx,
				l = l.index && l.table.schema.idxByName[l.index];
			return l && l.multi && (s = {}, Jd(this._ctx, function(p) {
				var p = p.primaryKey.toString(),
					g = _(s, p);
				return s[p] = !0, !g
			})), this
		}, Xe.prototype.modify = function(s) {
			var l = this,
				h = this._ctx;
			return this._write(function(p) {
				function g(j, U) {
					var Y = U.failures;
					D += j - U.numFailures;
					for (var F = 0, ee = a(Y); F < ee.length; F++) {
						var se = ee[F];
						M.push(Y[se])
					}
				}
				var S = typeof s == "function" ? s : function(j) {
						return Ip(j, s)
					},
					E = h.table.core,
					R = E.schema.primaryKey,
					I = R.outbound,
					T = R.extractKey,
					V = 200,
					R = l.db._options.modifyChunkSize,
					M = (R && (V = typeof R == "object" ? R[E.name] || R["*"] || 200 : R), []),
					D = 0,
					B = [],
					N = s === jp;
				return l.clone().primaryKeys().then(function(j) {
					function U(F) {
						var ee = Math.min(V, j.length - F),
							se = j.slice(F, F + ee);
						return (N ? Promise.resolve([]) : E.getMany({
							trans: p,
							keys: se,
							cache: "immutable"
						})).then(function(he) {
							var pe = [],
								ae = [],
								Se = I ? [] : null,
								ye = N ? se : [];
							if (!N)
								for (var de = 0; de < ee; ++de) {
									var ke = he[de],
										Ye = {
											value: me(ke),
											primKey: j[F + de]
										};
									S.call(Ye, Ye.value, Ye) !== !1 && (Ye.value == null ? ye.push(j[F + de]) : I || Ke(T(ke), T(Ye.value)) === 0 ? (ae.push(Ye.value), I && Se.push(j[F + de])) : (ye.push(j[F + de]), pe.push(Ye.value)))
								}
							return Promise.resolve(0 < pe.length && E.mutate({
								trans: p,
								type: "add",
								values: pe
							}).then(function(Qe) {
								for (var Pe in Qe.failures) ye.splice(parseInt(Pe), 1);
								g(pe.length, Qe)
							})).then(function() {
								return (0 < ae.length || Y && typeof s == "object") && E.mutate({
									trans: p,
									type: "put",
									keys: Se,
									values: ae,
									criteria: Y,
									changeSpec: typeof s != "function" && s,
									isAdditionalChunk: 0 < F
								}).then(function(Qe) {
									return g(ae.length, Qe)
								})
							}).then(function() {
								return (0 < ye.length || Y && N) && E.mutate({
									trans: p,
									type: "delete",
									keys: ye,
									criteria: Y,
									isAdditionalChunk: 0 < F
								}).then(function(Qe) {
									return Sc(h.table, ye, Qe)
								}).then(function(Qe) {
									return g(ye.length, Qe)
								})
							}).then(function() {
								return j.length > F + ee && U(F + V)
							})
						})
					}
					var Y = _s(h) && h.limit === 1 / 0 && (typeof s != "function" || N) && {
						index: h.index,
						range: h.range
					};
					return U(0).then(function() {
						if (0 < M.length) throw new Oe("Error modifying one or more objects", M, D, B);
						return j.length
					})
				})
			})
		}, Xe.prototype.delete = function() {
			var s = this._ctx,
				l = s.range;
			return !_s(s) || s.table.schema.yProps || !s.isPrimKey && l.type !== 3 ? this.modify(jp) : this._write(function(h) {
				var p = s.table.core.schema.primaryKey,
					g = l;
				return s.table.core.count({
					trans: h,
					query: {
						index: p,
						range: g
					}
				}).then(function(S) {
					return s.table.core.mutate({
						trans: h,
						type: "deleteRange",
						range: g
					}).then(function(T) {
						var I = T.failures,
							T = T.numFailures;
						if (T) throw new Oe("Could not delete some values", Object.keys(I).map(function(V) {
							return I[V]
						}), S - T);
						return S - T
					})
				})
			})
		};
		var o5 = Xe;

		function Xe() {}
		var jp = function(s, l) {
			return l.value = null
		};

		function i5(s, l) {
			return s < l ? -1 : s === l ? 0 : 1
		}

		function s5(s, l) {
			return l < s ? -1 : s === l ? 0 : 1
		}

		function Mn(s, l, h) {
			return s = s instanceof Rp ? new s.Collection(s) : s, s._ctx.error = new(h || TypeError)(l), s
		}

		function gs(s) {
			return new s.Collection(s, function() {
				return Tp("")
			}).limit(0)
		}

		function Cc(B, l, h, p) {
			var g, S, E, I, T, V, R, M = h.length;
			if (!h.every(function(j) {
					return typeof j == "string"
				})) return Mn(B, Sp);

			function D(j) {
				g = j === "next" ? function(Y) {
					return Y.toUpperCase()
				} : function(Y) {
					return Y.toLowerCase()
				}, S = j === "next" ? function(Y) {
					return Y.toLowerCase()
				} : function(Y) {
					return Y.toUpperCase()
				}, E = j === "next" ? i5 : s5;
				var U = h.map(function(Y) {
					return {
						lower: S(Y),
						upper: g(Y)
					}
				}).sort(function(Y, F) {
					return E(Y.lower, F.lower)
				});
				I = U.map(function(Y) {
					return Y.upper
				}), T = U.map(function(Y) {
					return Y.lower
				}), R = (V = j) === "next" ? "" : p
			}
			D("next");
			var B = new B.Collection(B, function() {
					return Co(I[0], T[M - 1] + p)
				}),
				N = (B._ondirectionchange = function(j) {
					D(j)
				}, 0);
			return B._addAlgorithm(function(j, U, Y) {
				var F = j.key;
				if (typeof F == "string") {
					var ee = S(F);
					if (l(ee, T, N)) return !0;
					for (var se = null, he = N; he < M; ++he) {
						var pe = ((ae, Se, ye, de, ke, Ye) => {
							for (var Qe = Math.min(ae.length, de.length), Pe = -1, ze = 0; ze < Qe; ++ze) {
								var pt = Se[ze];
								if (pt !== de[ze]) return ke(ae[ze], ye[ze]) < 0 ? ae.substr(0, ze) + ye[ze] + ye.substr(ze + 1) : ke(ae[ze], de[ze]) < 0 ? ae.substr(0, ze) + de[ze] + ye.substr(ze + 1) : 0 <= Pe ? ae.substr(0, Pe) + Se[Pe] + ye.substr(Pe + 1) : null;
								ke(ae[ze], pt) < 0 && (Pe = ze)
							}
							return Qe < de.length && Ye === "next" ? ae + ye.substr(ae.length) : Qe < ae.length && Ye === "prev" ? ae.substr(0, ye.length) : Pe < 0 ? null : ae.substr(0, Pe) + de[Pe] + ye.substr(Pe + 1)
						})(F, ee, I[he], T[he], E, V);
						pe === null && se === null ? N = he + 1 : (se === null || 0 < E(se, pe)) && (se = pe)
					}
					U(se !== null ? function() {
						j.continue(se + R)
					} : Y)
				}
				return !1
			}), B
		}

		function Co(s, l, h, p) {
			return {
				type: 2,
				lower: s,
				upper: l,
				lowerOpen: h,
				upperOpen: p
			}
		}

		function Tp(s) {
			return {
				type: 1,
				lower: s,
				upper: s
			}
		}
		Object.defineProperty(Lt.prototype, "Collection", {
			get: function() {
				return this._ctx.table.db.Collection
			},
			enumerable: !1,
			configurable: !0
		}), Lt.prototype.between = function(s, l, h, p) {
			h = h !== !1, p = p === !0;
			try {
				return 0 < this._cmp(s, l) || this._cmp(s, l) === 0 && (h || p) && (!h || !p) ? gs(this) : new this.Collection(this, function() {
					return Co(s, l, !h, !p)
				})
			} catch {
				return Mn(this, Xr)
			}
		}, Lt.prototype.equals = function(s) {
			return s == null ? Mn(this, Xr) : new this.Collection(this, function() {
				return Tp(s)
			})
		}, Lt.prototype.above = function(s) {
			return s == null ? Mn(this, Xr) : new this.Collection(this, function() {
				return Co(s, void 0, !0)
			})
		}, Lt.prototype.aboveOrEqual = function(s) {
			return s == null ? Mn(this, Xr) : new this.Collection(this, function() {
				return Co(s, void 0, !1)
			})
		}, Lt.prototype.below = function(s) {
			return s == null ? Mn(this, Xr) : new this.Collection(this, function() {
				return Co(void 0, s, !1, !0)
			})
		}, Lt.prototype.belowOrEqual = function(s) {
			return s == null ? Mn(this, Xr) : new this.Collection(this, function() {
				return Co(void 0, s)
			})
		}, Lt.prototype.startsWith = function(s) {
			return typeof s != "string" ? Mn(this, Sp) : this.between(s, s + wi, !0, !0)
		}, Lt.prototype.startsWithIgnoreCase = function(s) {
			return s === "" ? this.startsWith(s) : Cc(this, function(l, h) {
				return l.indexOf(h[0]) === 0
			}, [s], wi)
		}, Lt.prototype.equalsIgnoreCase = function(s) {
			return Cc(this, function(l, h) {
				return l === h[0]
			}, [s], "")
		}, Lt.prototype.anyOfIgnoreCase = function() {
			var s = K.apply(W, arguments);
			return s.length === 0 ? gs(this) : Cc(this, function(l, h) {
				return h.indexOf(l) !== -1
			}, s, "")
		}, Lt.prototype.startsWithAnyOfIgnoreCase = function() {
			var s = K.apply(W, arguments);
			return s.length === 0 ? gs(this) : Cc(this, function(l, h) {
				return h.some(function(p) {
					return l.indexOf(p) === 0
				})
			}, s, wi)
		}, Lt.prototype.anyOf = function() {
			var s, l, h = this,
				p = K.apply(W, arguments),
				g = this._cmp;
			try {
				p.sort(g)
			} catch {
				return Mn(this, Xr)
			}
			return p.length === 0 ? gs(this) : ((s = new this.Collection(this, function() {
				return Co(p[0], p[p.length - 1])
			}))._ondirectionchange = function(S) {
				g = S === "next" ? h._ascending : h._descending, p.sort(g)
			}, l = 0, s._addAlgorithm(function(S, E, I) {
				for (var T = S.key; 0 < g(T, p[l]);)
					if (++l === p.length) return E(I), !1;
				return g(T, p[l]) === 0 || (E(function() {
					S.continue(p[l])
				}), !1)
			}), s)
		}, Lt.prototype.notEqual = function(s) {
			return this.inAnyRange([
				[-1 / 0, s],
				[s, this.db._maxKey]
			], {
				includeLowers: !1,
				includeUppers: !1
			})
		}, Lt.prototype.noneOf = function() {
			var s = K.apply(W, arguments);
			if (s.length === 0) return new this.Collection(this);
			try {
				s.sort(this._ascending)
			} catch {
				return Mn(this, Xr)
			}
			var l = s.reduce(function(h, p) {
				return h ? h.concat([
					[h[h.length - 1][1], p]
				]) : [
					[-1 / 0, p]
				]
			}, null);
			return l.push([s[s.length - 1], this.db._maxKey]), this.inAnyRange(l, {
				includeLowers: !1,
				includeUppers: !1
			})
		}, Lt.prototype.inAnyRange = function(s, Y) {
			var h = this,
				p = this._cmp,
				g = this._ascending,
				S = this._descending,
				E = this._min,
				I = this._max;
			if (s.length === 0) return gs(this);
			if (!s.every(function(F) {
					return F[0] !== void 0 && F[1] !== void 0 && g(F[0], F[1]) <= 0
				})) return Mn(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ue.InvalidArgument);
			var T = !Y || Y.includeLowers !== !1,
				V = Y && Y.includeUppers === !0,
				R, M = g;

			function D(F, ee) {
				return M(F[0], ee[0])
			}
			try {
				(R = s.reduce(function(F, ee) {
					for (var se = 0, he = F.length; se < he; ++se) {
						var pe = F[se];
						if (p(ee[0], pe[1]) < 0 && 0 < p(ee[1], pe[0])) {
							pe[0] = E(pe[0], ee[0]), pe[1] = I(pe[1], ee[1]);
							break
						}
					}
					return se === he && F.push(ee), F
				}, [])).sort(D)
			} catch {
				return Mn(this, Xr)
			}
			var B = 0,
				N = V ? function(F) {
					return 0 < g(F, R[B][1])
				} : function(F) {
					return 0 <= g(F, R[B][1])
				},
				j = T ? function(F) {
					return 0 < S(F, R[B][0])
				} : function(F) {
					return 0 <= S(F, R[B][0])
				},
				U = N,
				Y = new this.Collection(this, function() {
					return Co(R[0][0], R[R.length - 1][1], !T, !V)
				});
			return Y._ondirectionchange = function(F) {
				M = F === "next" ? (U = N, g) : (U = j, S), R.sort(D)
			}, Y._addAlgorithm(function(F, ee, se) {
				for (var he, pe = F.key; U(pe);)
					if (++B === R.length) return ee(se), !1;
				return !N(he = pe) && !j(he) || (h._cmp(pe, R[B][1]) === 0 || h._cmp(pe, R[B][0]) === 0 || ee(function() {
					M === g ? F.continue(R[B][0]) : F.continue(R[B][1])
				}), !1)
			}), Y
		}, Lt.prototype.startsWithAnyOf = function() {
			var s = K.apply(W, arguments);
			return s.every(function(l) {
				return typeof l == "string"
			}) ? s.length === 0 ? gs(this) : this.inAnyRange(s.map(function(l) {
				return [l, l + wi]
			})) : Mn(this, "startsWithAnyOf() only works with strings")
		};
		var Rp = Lt;

		function Lt() {}

		function xr(s) {
			return dt(function(l) {
				return Da(l), s(l.target.error), !1
			})
		}

		function Da(s) {
			s.stopPropagation && s.stopPropagation(), s.preventDefault && s.preventDefault()
		}
		var Ba = "storagemutated",
			tf = "x-storagemutated-1",
			Eo = Na(null, Ba),
			a5 = (Sr.prototype._lock = function() {
				return O(!Ce.global), ++this._reculock, this._reculock !== 1 || Ce.global || (Ce.lockOwnerFor = this), this
			}, Sr.prototype._unlock = function() {
				if (O(!Ce.global), --this._reculock == 0)
					for (Ce.global || (Ce.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
						var s = this._blockedFuncs.shift();
						try {
							yi(s[1], s[0])
						} catch {}
					}
				return this
			}, Sr.prototype._locked = function() {
				return this._reculock && Ce.lockOwnerFor !== this
			}, Sr.prototype.create = function(s) {
				var l = this;
				if (this.mode) {
					var h = this.db.idbdb,
						p = this.db._state.dbOpenError;
					if (O(!this.idbtrans), !s && !h) switch (p && p.name) {
						case "DatabaseClosedError":
							throw new ue.DatabaseClosed(p);
						case "MissingAPIError":
							throw new ue.MissingAPI(p.message, p);
						default:
							throw new ue.OpenFailed(p)
					}
					if (!this.active) throw new ue.TransactionInactive;
					O(this._completion._state === null), (s = this.idbtrans = s || (this.db.core || h).transaction(this.storeNames, this.mode, {
						durability: this.chromeTransactionDurability
					})).onerror = dt(function(g) {
						Da(g), l._reject(s.error)
					}), s.onabort = dt(function(g) {
						Da(g), l.active && l._reject(new ue.Abort(s.error)), l.active = !1, l.on("abort").fire(g)
					}), s.oncomplete = dt(function() {
						l.active = !1, l._resolve(), "mutatedParts" in s && Eo.storagemutated.fire(s.mutatedParts)
					})
				}
				return this
			}, Sr.prototype._promise = function(s, l, h) {
				var p, g = this;
				return s === "readwrite" && this.mode !== "readwrite" ? kt(new ue.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new ve(function(S, E) {
					g._blockedFuncs.push([function() {
						g._promise(s, l, h).then(S, E)
					}, Ce])
				}) : h ? So(function() {
					var S = new ve(function(E, I) {
						g._lock();
						var T = l(E, I, g);
						T && T.then && T.then(E, I)
					});
					return S.finally(function() {
						return g._unlock()
					}), S._lib = !0, S
				}) : ((p = new ve(function(S, E) {
					var I = l(S, E, g);
					I && I.then && I.then(S, E)
				}))._lib = !0, p) : kt(new ue.TransactionInactive)
			}, Sr.prototype._root = function() {
				return this.parent ? this.parent._root() : this
			}, Sr.prototype.waitFor = function(s) {
				var l, h = this._root(),
					p = ve.resolve(s),
					g = (h._waitingFor ? h._waitingFor = h._waitingFor.then(function() {
						return p
					}) : (h._waitingFor = p, h._waitingQueue = [], l = h.idbtrans.objectStore(h.storeNames[0]), function S() {
						for (++h._spinCount; h._waitingQueue.length;) h._waitingQueue.shift()();
						h._waitingFor && (l.get(-1 / 0).onsuccess = S)
					}()), h._waitingFor);
				return new ve(function(S, E) {
					p.then(function(I) {
						return h._waitingQueue.push(dt(S.bind(null, I)))
					}, function(I) {
						return h._waitingQueue.push(dt(E.bind(null, I)))
					}).finally(function() {
						h._waitingFor === g && (h._waitingFor = null)
					})
				})
			}, Sr.prototype.abort = function() {
				this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new ue.Abort))
			}, Sr.prototype.table = function(s) {
				var l = this._memoizedTables || (this._memoizedTables = {});
				if (_(l, s)) return l[s];
				var h = this.schema[s];
				if (h) return (h = new this.db.Table(s, h, this)).core = this.db.core.table(s), l[s] = h;
				throw new ue.NotFound("Table " + s + " not part of transaction")
			}, Sr);

		function Sr() {}

		function nf(s, l, h, p, g, S, E, I) {
			return {
				name: s,
				keyPath: l,
				unique: h,
				multi: p,
				auto: g,
				compound: S,
				src: (h && !E ? "&" : "") + (p ? "*" : "") + (g ? "++" : "") + Np(l),
				type: I
			}
		}

		function Np(s) {
			return typeof s == "string" ? s : s ? "[" + [].join.call(s, "+") + "]" : ""
		}

		function rf(s, l, h) {
			return {
				name: s,
				primKey: l,
				indexes: h,
				mappedClass: null,
				idxByName: (p = function(g) {
					return [g.name, g]
				}, h.reduce(function(g, S, E) {
					return S = p(S, E), S && (g[S[0]] = S[1]), g
				}, {}))
			};
			var p
		}
		var za = function(s) {
			try {
				return s.only([
					[]
				]), za = function() {
					return [
						[]
					]
				}, [
					[]
				]
			} catch {
				return za = function() {
					return wi
				}, wi
			}
		};

		function of(s) {
			return s == null ? function() {} : typeof s == "string" ? (l = s).split(".").length === 1 ? function(h) {
				return h[l]
			} : function(h) {
				return $(h, l)
			} : function(h) {
				return $(h, s)
			};
			var l
		}

		function Lp(s) {
			return [].slice.call(s)
		}
		var l5 = 0;

		function $a(s) {
			return s == null ? ":id" : typeof s == "string" ? s : "[".concat(s.join("+"), "]")
		}

		function c5(s, l, T) {
			function p(N) {
				if (N.type === 3) return null;
				if (N.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
				var M = N.lower,
					D = N.upper,
					B = N.lowerOpen,
					N = N.upperOpen;
				return M === void 0 ? D === void 0 ? null : l.upperBound(D, !!N) : D === void 0 ? l.lowerBound(M, !!B) : l.bound(M, D, !!B, !!N)
			}

			function g(R) {
				var M, D = R.name;
				return {
					name: D,
					schema: R,
					mutate: function(B) {
						var N = B.trans,
							j = B.type,
							U = B.keys,
							Y = B.values,
							F = B.range;
						return new Promise(function(ee, se) {
							ee = dt(ee);
							var he = N.objectStore(D),
								pe = he.keyPath == null,
								ae = j === "put" || j === "add";
							if (!ae && j !== "delete" && j !== "deleteRange") throw new Error("Invalid operation type: " + j);
							var Se, ye = (U || Y || {
								length: 1
							}).length;
							if (U && Y && U.length !== Y.length) throw new Error("Given keys array must have same length as given values array.");
							if (ye === 0) return ee({
								numFailures: 0,
								failures: {},
								results: [],
								lastResult: void 0
							});

							function de(gt) {
								++Qe, Da(gt)
							}
							var ke = [],
								Ye = [],
								Qe = 0;
							if (j === "deleteRange") {
								if (F.type === 4) return ee({
									numFailures: Qe,
									failures: Ye,
									results: [],
									lastResult: void 0
								});
								F.type === 3 ? ke.push(Se = he.clear()) : ke.push(Se = he.delete(p(F)))
							} else {
								var pe = ae ? pe ? [Y, U] : [Y, null] : [U, null],
									Pe = pe[0],
									ze = pe[1];
								if (ae)
									for (var pt = 0; pt < ye; ++pt) ke.push(Se = ze && ze[pt] !== void 0 ? he[j](Pe[pt], ze[pt]) : he[j](Pe[pt])), Se.onerror = de;
								else
									for (pt = 0; pt < ye; ++pt) ke.push(Se = he[j](Pe[pt])), Se.onerror = de
							}

							function Yn(gt) {
								gt = gt.target.result, ke.forEach(function(bi, kf) {
									return bi.error != null && (Ye[kf] = bi.error)
								}), ee({
									numFailures: Qe,
									failures: Ye,
									results: j === "delete" ? U : ke.map(function(bi) {
										return bi.result
									}),
									lastResult: gt
								})
							}
							Se.onerror = function(gt) {
								de(gt), Yn(gt)
							}, Se.onsuccess = Yn
						})
					},
					getMany: function(B) {
						var N = B.trans,
							j = B.keys;
						return new Promise(function(U, Y) {
							U = dt(U);
							for (var F, ee = N.objectStore(D), se = j.length, he = new Array(se), pe = 0, ae = 0, Se = function(ke) {
									ke = ke.target, he[ke._pos] = ke.result, ++ae === pe && U(he)
								}, ye = xr(Y), de = 0; de < se; ++de) j[de] != null && ((F = ee.get(j[de]))._pos = de, F.onsuccess = Se, F.onerror = ye, ++pe);
							pe === 0 && U(he)
						})
					},
					get: function(B) {
						var N = B.trans,
							j = B.key;
						return new Promise(function(U, Y) {
							U = dt(U);
							var F = N.objectStore(D).get(j);
							F.onsuccess = function(ee) {
								return U(ee.target.result)
							}, F.onerror = xr(Y)
						})
					},
					query: (M = I, function(B) {
						return new Promise(function(N, j) {
							N = dt(N);
							var U, Y, F, ae = B.trans,
								ee = B.values,
								se = B.limit,
								pe = B.query,
								he = se === 1 / 0 ? void 0 : se,
								Se = pe.index,
								pe = pe.range,
								ae = ae.objectStore(D),
								ae = Se.isPrimaryKey ? ae : ae.index(Se.name),
								Se = p(pe);
							if (se === 0) return N({
								result: []
							});
							M ? ((pe = ee ? ae.getAll(Se, he) : ae.getAllKeys(Se, he)).onsuccess = function(ye) {
								return N({
									result: ye.target.result
								})
							}, pe.onerror = xr(j)) : (U = 0, Y = !ee && "openKeyCursor" in ae ? ae.openKeyCursor(Se) : ae.openCursor(Se), F = [], Y.onsuccess = function(ye) {
								var de = Y.result;
								return !de || (F.push(ee ? de.value : de.primaryKey), ++U === se) ? N({
									result: F
								}) : void de.continue()
							}, Y.onerror = xr(j))
						})
					}),
					openCursor: function(B) {
						var N = B.trans,
							j = B.values,
							U = B.query,
							Y = B.reverse,
							F = B.unique;
						return new Promise(function(ee, se) {
							ee = dt(ee);
							var ae = U.index,
								he = U.range,
								pe = N.objectStore(D),
								pe = ae.isPrimaryKey ? pe : pe.index(ae.name),
								ae = Y ? F ? "prevunique" : "prev" : F ? "nextunique" : "next",
								Se = !j && "openKeyCursor" in pe ? pe.openKeyCursor(p(he), ae) : pe.openCursor(p(he), ae);
							Se.onerror = xr(se), Se.onsuccess = dt(function(ye) {
								var de, ke, Ye, Qe, Pe = Se.result;
								Pe ? (Pe.___id = ++l5, Pe.done = !1, de = Pe.continue.bind(Pe), ke = (ke = Pe.continuePrimaryKey) && ke.bind(Pe), Ye = Pe.advance.bind(Pe), Qe = function() {
									throw new Error("Cursor not stopped")
								}, Pe.trans = N, Pe.stop = Pe.continue = Pe.continuePrimaryKey = Pe.advance = function() {
									throw new Error("Cursor not started")
								}, Pe.fail = dt(se), Pe.next = function() {
									var ze = this,
										pt = 1;
									return this.start(function() {
										return pt-- ? ze.continue() : ze.stop()
									}).then(function() {
										return ze
									})
								}, Pe.start = function(ze) {
									function pt() {
										if (Se.result) try {
											ze()
										} catch (gt) {
											Pe.fail(gt)
										} else Pe.done = !0, Pe.start = function() {
											throw new Error("Cursor behind last entry")
										}, Pe.stop()
									}
									var Yn = new Promise(function(gt, bi) {
										gt = dt(gt), Se.onerror = xr(bi), Pe.fail = bi, Pe.stop = function(kf) {
											Pe.stop = Pe.continue = Pe.continuePrimaryKey = Pe.advance = Qe, gt(kf)
										}
									});
									return Se.onsuccess = dt(function(gt) {
										Se.onsuccess = pt, pt()
									}), Pe.continue = de, Pe.continuePrimaryKey = ke, Pe.advance = Ye, pt(), Yn
								}, ee(Pe)) : ee(null)
							}, se)
						})
					},
					count: function(B) {
						var N = B.query,
							j = B.trans,
							U = N.index,
							Y = N.range;
						return new Promise(function(F, ee) {
							var se = j.objectStore(D),
								se = U.isPrimaryKey ? se : se.index(U.name),
								he = p(Y),
								he = he ? se.count(he) : se.count();
							he.onsuccess = dt(function(pe) {
								return F(pe.target.result)
							}), he.onerror = xr(ee)
						})
					}
				}
			}
			S = T, E = Lp((T = s).objectStoreNames);
			var S, T = {
					schema: {
						name: T.name,
						tables: E.map(function(R) {
							return S.objectStore(R)
						}).map(function(R) {
							var M = R.keyPath,
								D = R.autoIncrement,
								N = c(M),
								B = {},
								N = {
									name: R.name,
									primaryKey: {
										name: null,
										isPrimaryKey: !0,
										outbound: M == null,
										compound: N,
										keyPath: M,
										autoIncrement: D,
										unique: !0,
										extractKey: of(M)
									},
									indexes: Lp(R.indexNames).map(function(j) {
										return R.index(j)
									}).map(function(F) {
										var ee = F.name,
											U = F.unique,
											Y = F.multiEntry,
											F = F.keyPath,
											ee = {
												name: ee,
												compound: c(F),
												keyPath: F,
												unique: U,
												multiEntry: Y,
												extractKey: of(F)
											};
										return B[$a(F)] = ee
									}),
									getIndexByKeyPath: function(j) {
										return B[$a(j)]
									}
								};
							return B[":id"] = N.primaryKey, M != null && (B[$a(M)] = N.primaryKey), N
						})
					},
					hasGetAll: 0 < E.length && "getAll" in S.objectStore(E[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
				},
				E = T.schema,
				I = T.hasGetAll,
				T = E.tables.map(g),
				V = {};
			return T.forEach(function(R) {
				return V[R.name] = R
			}), {
				stack: "dbcore",
				transaction: s.transaction.bind(s),
				table: function(R) {
					if (V[R]) return V[R];
					throw new Error("Table '".concat(R, "' not found"))
				},
				MIN_KEY: -1 / 0,
				MAX_KEY: za(l),
				schema: E
			}
		}

		function u5(s, l, h, p) {
			return h = h.IDBKeyRange, l = c5(l, h, p), {
				dbcore: s.dbcore.reduce(function(g, S) {
					return S = S.create, r(r({}, g), S(g))
				}, l)
			}
		}

		function Ec(s, l) {
			var h = l.db,
				h = u5(s._middlewares, h, s._deps, l);
			s.core = h.dbcore, s.tables.forEach(function(p) {
				var g = p.name;
				s.core.schema.tables.some(function(S) {
					return S.name === g
				}) && (p.core = s.core.table(g), s[g] instanceof s.Table) && (s[g].core = p.core)
			})
		}

		function Ac(s, l, h, p) {
			h.forEach(function(g) {
				var S = p[g];
				l.forEach(function(E) {
					var I = function T(V, R) {
						return C(V, R) || (V = f(V)) && T(V, R)
					}(E, g);
					(!I || "value" in I && I.value === void 0) && (E === s.Transaction.prototype || E instanceof s.Transaction ? k(E, g, {
						get: function() {
							return this.table(g)
						},
						set: function(T) {
							x(this, g, {
								value: T,
								writable: !0,
								configurable: !0,
								enumerable: !0
							})
						}
					}) : E[g] = new s.Table(g, S))
				})
			})
		}

		function sf(s, l) {
			l.forEach(function(h) {
				for (var p in h) h[p] instanceof s.Table && delete h[p]
			})
		}

		function d5(s, l) {
			return s._cfg.version - l._cfg.version
		}

		function f5(s, l, h, p) {
			var g = s._dbSchema,
				S = (h.objectStoreNames.contains("$meta") && !g.$meta && (g.$meta = rf("$meta", Bp("")[0], []), s._storeNames.push("$meta")), s._createTransaction("readwrite", s._storeNames, g)),
				E = (S.create(h), S._completion.catch(p), S._reject.bind(S)),
				I = Ce.transless || Ce;
			So(function() {
				if (Ce.trans = S, Ce.transless = I, l !== 0) return Ec(s, h), V = l, ((T = S).storeNames.includes("$meta") ? T.table("$meta").get("version").then(function(R) {
					return R ?? V
				}) : ve.resolve(V)).then(function(U) {
					var M = s,
						D = U,
						B = S,
						N = h,
						j = [],
						U = M._versions,
						Y = M._dbSchema = Pc(0, M.idbdb, N);
					return (U = U.filter(function(F) {
						return F._cfg.version >= D
					})).length === 0 ? ve.resolve() : (U.forEach(function(F) {
						j.push(function() {
							var ee, se, he, pe = Y,
								ae = F._cfg.dbschema,
								Se = (Oc(M, pe, N), Oc(M, ae, N), Y = M._dbSchema = ae, af(pe, ae)),
								ye = (Se.add.forEach(function(de) {
									lf(N, de[0], de[1].primKey, de[1].indexes)
								}), Se.change.forEach(function(de) {
									if (de.recreate) throw new ue.Upgrade("Not yet support for changing primary key");
									var ke = N.objectStore(de.name);
									de.add.forEach(function(Ye) {
										return Ic(ke, Ye)
									}), de.change.forEach(function(Ye) {
										ke.deleteIndex(Ye.name), Ic(ke, Ye)
									}), de.del.forEach(function(Ye) {
										return ke.deleteIndex(Ye)
									})
								}), F._cfg.contentUpgrade);
							if (ye && F._cfg.version > D) return Ec(M, N), B._memoizedTables = {}, ee = q(ae), Se.del.forEach(function(de) {
								ee[de] = pe[de]
							}), sf(M, [M.Transaction.prototype]), Ac(M, [M.Transaction.prototype], a(ee), ee), B.schema = ee, (se = ie(ye)) && ms(), ae = ve.follow(function() {
								var de;
								(he = ye(B)) && se && (de = ko.bind(null, null), he.then(de, de))
							}), he && typeof he.then == "function" ? ve.resolve(he) : ae.then(function() {
								return he
							})
						}), j.push(function(ee) {
							var se, he, pe = F._cfg.dbschema;
							se = pe, he = ee, [].slice.call(he.db.objectStoreNames).forEach(function(ae) {
								return se[ae] == null && he.db.deleteObjectStore(ae)
							}), sf(M, [M.Transaction.prototype]), Ac(M, [M.Transaction.prototype], M._storeNames, M._dbSchema), B.schema = M._dbSchema
						}), j.push(function(ee) {
							M.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(M.idbdb.version / 10) === F._cfg.version ? (M.idbdb.deleteObjectStore("$meta"), delete M._dbSchema.$meta, M._storeNames = M._storeNames.filter(function(se) {
								return se !== "$meta"
							})) : ee.objectStore("$meta").put(F._cfg.version, "version"))
						})
					}), function F() {
						return j.length ? ve.resolve(j.shift()(B.idbtrans)).then(F) : ve.resolve()
					}().then(function() {
						Dp(Y, N)
					}))
				}).catch(E);
				var T, V;
				a(g).forEach(function(R) {
					lf(h, R, g[R].primKey, g[R].indexes)
				}), Ec(s, h), ve.follow(function() {
					return s.on.populate.fire(S)
				}).catch(E)
			})
		}

		function h5(s, l) {
			Dp(s._dbSchema, l), l.db.version % 10 != 0 || l.objectStoreNames.contains("$meta") || l.db.createObjectStore("$meta").add(Math.ceil(l.db.version / 10 - 1), "version");
			var h = Pc(0, s.idbdb, l);
			Oc(s, s._dbSchema, l);
			for (var p = 0, g = af(h, s._dbSchema).change; p < g.length; p++) {
				var S = (E => {
					if (E.change.length || E.recreate) return console.warn("Unable to patch indexes of table ".concat(E.name, " because it has changes on the type of index or primary key.")), {
						value: void 0
					};
					var I = l.objectStore(E.name);
					E.add.forEach(function(T) {
						xn && console.debug("Dexie upgrade patch: Creating missing index ".concat(E.name, ".").concat(T.src)), Ic(I, T)
					})
				})(g[p]);
				if (typeof S == "object") return S.value
			}
		}

		function af(s, l) {
			var h, p = {
				del: [],
				add: [],
				change: []
			};
			for (h in s) l[h] || p.del.push(h);
			for (h in l) {
				var g = s[h],
					S = l[h];
				if (g) {
					var E = {
						name: h,
						def: S,
						recreate: !1,
						del: [],
						add: [],
						change: []
					};
					if ("" + (g.primKey.keyPath || "") != "" + (S.primKey.keyPath || "") || g.primKey.auto !== S.primKey.auto) E.recreate = !0, p.change.push(E);
					else {
						var I = g.idxByName,
							T = S.idxByName,
							V = void 0;
						for (V in I) T[V] || E.del.push(V);
						for (V in T) {
							var R = I[V],
								M = T[V];
							R ? R.src !== M.src && E.change.push(M) : E.add.push(M)
						}(0 < E.del.length || 0 < E.add.length || 0 < E.change.length) && p.change.push(E)
					}
				} else p.add.push([h, S])
			}
			return p
		}

		function lf(s, l, h, p) {
			var g = s.db.createObjectStore(l, h.keyPath ? {
				keyPath: h.keyPath,
				autoIncrement: h.auto
			} : {
				autoIncrement: h.auto
			});
			p.forEach(function(S) {
				return Ic(g, S)
			})
		}

		function Dp(s, l) {
			a(s).forEach(function(h) {
				l.db.objectStoreNames.contains(h) || (xn && console.debug("Dexie: Creating missing table", h), lf(l, h, s[h].primKey, s[h].indexes))
			})
		}

		function Ic(s, l) {
			s.createIndex(l.name, l.keyPath, {
				unique: l.unique,
				multiEntry: l.multi
			})
		}

		function Pc(s, l, h) {
			var p = {};
			return w(l.objectStoreNames, 0).forEach(function(g) {
				for (var S = h.objectStore(g), E = nf(Np(V = S.keyPath), V || "", !0, !1, !!S.autoIncrement, V && typeof V != "string", !0), I = [], T = 0; T < S.indexNames.length; ++T) {
					var R = S.index(S.indexNames[T]),
						V = R.keyPath,
						R = nf(R.name, V, !!R.unique, !!R.multiEntry, !1, V && typeof V != "string", !1);
					I.push(R)
				}
				p[g] = rf(g, E, I)
			}), p
		}

		function Oc(s, l, h) {
			for (var p = h.db.objectStoreNames, g = 0; g < p.length; ++g) {
				var S = p[g],
					E = h.objectStore(S);
				s._hasGetAll = "getAll" in E;
				for (var I = 0; I < E.indexNames.length; ++I) {
					var T, V = E.indexNames[I],
						R = E.index(V).keyPath,
						R = typeof R == "string" ? R : "[" + w(R).join("+") + "]";
					l[S] && (T = l[S].idxByName[R]) && (T.name = V, delete l[S].idxByName[R], l[S].idxByName[V] = T)
				}
			}
			typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && i.WorkerGlobalScope && i instanceof i.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (s._hasGetAll = !1)
		}

		function Bp(s) {
			return s.split(",").map(function(l, h) {
				var g = l.split(":"),
					p = (p = g[1]) == null ? void 0 : p.trim(),
					g = (l = g[0].trim()).replace(/([&*]|\+\+)/g, ""),
					S = /^\[/.test(g) ? g.match(/^\[(.*)\]$/)[1].split("+") : g;
				return nf(g, S || null, /\&/.test(l), /\*/.test(l), /\+\+/.test(l), c(S), h === 0, p)
			})
		}
		ys.prototype._createTableSchema = rf, ys.prototype._parseIndexSyntax = Bp, ys.prototype._parseStoresSpec = function(s, l) {
			var h = this;
			a(s).forEach(function(p) {
				if (s[p] !== null) {
					var g = h._parseIndexSyntax(s[p]),
						S = g.shift();
					if (!S) throw new ue.Schema("Invalid schema for table " + p + ": " + s[p]);
					if (S.unique = !0, S.multi) throw new ue.Schema("Primary key cannot be multiEntry*");
					g.forEach(function(E) {
						if (E.auto) throw new ue.Schema("Only primary key can be marked as autoIncrement (++)");
						if (!E.keyPath) throw new ue.Schema("Index must have a name and cannot be an empty string")
					}), S = h._createTableSchema(p, S, g), l[p] = S
				}
			})
		}, ys.prototype.stores = function(h) {
			var l = this.db,
				h = (this._cfg.storesSource = this._cfg.storesSource ? d(this._cfg.storesSource, h) : h, l._versions),
				p = {},
				g = {};
			return h.forEach(function(S) {
				d(p, S._cfg.storesSource), g = S._cfg.dbschema = {}, S._parseStoresSpec(p, g)
			}), l._dbSchema = g, sf(l, [l._allTables, l, l.Transaction.prototype]), Ac(l, [l._allTables, l, l.Transaction.prototype, this._cfg.tables], a(g), g), l._storeNames = a(g), this
		}, ys.prototype.upgrade = function(s) {
			return this._cfg.contentUpgrade = pi(this._cfg.contentUpgrade || Me, s), this
		};
		var p5 = ys;

		function ys() {}

		function cf(s, l) {
			var h = s._dbNamesDB;
			return h || (h = s._dbNamesDB = new Qr(wc, {
				addons: [],
				indexedDB: s,
				IDBKeyRange: l
			})).version(1).stores({
				dbnames: "name"
			}), h.table("dbnames")
		}

		function uf(s) {
			return s && typeof s.databases == "function"
		}

		function df(s) {
			return So(function() {
				return Ce.letThrough = !0, s()
			})
		}

		function ff(s) {
			return !("from" in s)
		}
		var Qt = function(s, l) {
			var h;
			if (!this) return h = new Qt, s && "d" in s && d(h, s), h;
			d(this, arguments.length ? {
				d: 1,
				from: s,
				to: 1 < arguments.length ? l : s
			} : {
				d: 0
			})
		};

		function Fa(s, l, h) {
			var p = Ke(l, h);
			if (!isNaN(p)) {
				if (0 < p) throw RangeError();
				if (ff(s)) return d(s, {
					from: l,
					to: h,
					d: 1
				});
				var p = s.l,
					g = s.r;
				if (Ke(h, s.from) < 0) return p ? Fa(p, l, h) : s.l = {
					from: l,
					to: h,
					d: 1,
					l: null,
					r: null
				}, $p(s);
				if (0 < Ke(l, s.to)) return g ? Fa(g, l, h) : s.r = {
					from: l,
					to: h,
					d: 1,
					l: null,
					r: null
				}, $p(s);
				Ke(l, s.from) < 0 && (s.from = l, s.l = null, s.d = g ? g.d + 1 : 1), 0 < Ke(h, s.to) && (s.to = h, s.r = null, s.d = s.l ? s.l.d + 1 : 1), l = !s.r, p && !s.l && Va(s, p), g && l && Va(s, g)
			}
		}

		function Va(s, l) {
			ff(l) || function h(p, g) {
				var S = g.from,
					E = g.l,
					I = g.r;
				Fa(p, S, g.to), E && h(p, E), I && h(p, I)
			}(s, l)
		}

		function zp(s, l) {
			var h = Mc(l),
				p = h.next();
			if (!p.done)
				for (var g = p.value, S = Mc(s), E = S.next(g.from), I = E.value; !p.done && !E.done;) {
					if (Ke(I.from, g.to) <= 0 && 0 <= Ke(I.to, g.from)) return !0;
					Ke(g.from, I.from) < 0 ? g = (p = h.next(I.from)).value : I = (E = S.next(g.from)).value
				}
			return !1
		}

		function Mc(s) {
			var l = ff(s) ? null : {
				s: 0,
				n: s
			};
			return {
				next: function(h) {
					for (var p = 0 < arguments.length; l;) switch (l.s) {
						case 0:
							if (l.s = 1, p)
								for (; l.n.l && Ke(h, l.n.from) < 0;) l = {
									up: l,
									n: l.n.l,
									s: 1
								};
							else
								for (; l.n.l;) l = {
									up: l,
									n: l.n.l,
									s: 1
								};
						case 1:
							if (l.s = 2, !p || Ke(h, l.n.to) <= 0) return {
								value: l.n,
								done: !1
							};
						case 2:
							if (l.n.r) {
								l.s = 3, l = {
									up: l,
									n: l.n.r,
									s: 0
								};
								continue
							}
						case 3:
							l = l.up
					}
					return {
						done: !0
					}
				}
			}
		}

		function $p(s) {
			var l, h, p, g = (((g = s.r) == null ? void 0 : g.d) || 0) - (((g = s.l) == null ? void 0 : g.d) || 0),
				g = 1 < g ? "r" : g < -1 ? "l" : "";
			g && (l = g == "r" ? "l" : "r", h = r({}, s), p = s[g], s.from = p.from, s.to = p.to, s[g] = p[g], h[g] = p[l], (s[l] = h).d = Fp(h)), s.d = Fp(s)
		}

		function Fp(h) {
			var l = h.r,
				h = h.l;
			return (l ? h ? Math.max(l.d, h.d) : l.d : h ? h.d : 0) + 1
		}

		function jc(s, l) {
			return a(l).forEach(function(h) {
				s[h] ? Va(s[h], l[h]) : s[h] = function p(g) {
					var S, E, I = {};
					for (S in g) _(g, S) && (E = g[S], I[S] = !E || typeof E != "object" || oe.has(E.constructor) ? E : p(E));
					return I
				}(l[h])
			}), s
		}

		function hf(s, l) {
			return s.all || l.all || Object.keys(s).some(function(h) {
				return l[h] && zp(l[h], s[h])
			})
		}
		v(Qt.prototype, ((ln = {
			add: function(s) {
				return Va(this, s), this
			},
			addKey: function(s) {
				return Fa(this, s, s), this
			},
			addKeys: function(s) {
				var l = this;
				return s.forEach(function(h) {
					return Fa(l, h, h)
				}), this
			},
			hasKey: function(s) {
				var l = Mc(this).next(s).value;
				return l && Ke(l.from, s) <= 0 && 0 <= Ke(l.to, s)
			}
		})[X] = function() {
			return Mc(this)
		}, ln));
		var Si = {},
			pf = {},
			mf = !1;

		function Tc(s) {
			jc(pf, s), mf || (mf = !0, setTimeout(function() {
				mf = !1, vf(pf, !(pf = {}))
			}, 0))
		}

		function vf(s, l) {
			l === void 0 && (l = !1);
			var h = new Set;
			if (s.all)
				for (var p = 0, g = Object.values(Si); p < g.length; p++) Vp(I = g[p], s, h, l);
			else
				for (var S in s) {
					var E, I, S = /^idb\:\/\/(.*)\/(.*)\//.exec(S);
					S && (E = S[1], S = S[2], I = Si["idb://".concat(E, "/").concat(S)]) && Vp(I, s, h, l)
				}
			h.forEach(function(T) {
				return T()
			})
		}

		function Vp(s, l, h, p) {
			for (var g = [], S = 0, E = Object.entries(s.queries.query); S < E.length; S++) {
				for (var I = E[S], T = I[0], V = [], R = 0, M = I[1]; R < M.length; R++) {
					var D = M[R];
					hf(l, D.obsSet) ? D.subscribers.forEach(function(U) {
						return h.add(U)
					}) : p && V.push(D)
				}
				p && g.push([T, V])
			}
			if (p)
				for (var B = 0, N = g; B < N.length; B++) {
					var j = N[B],
						T = j[0],
						V = j[1];
					s.queries.query[T] = V
				}
		}

		function m5(s) {
			var l = s._state,
				h = s._deps.indexedDB;
			if (l.isBeingOpened || s.idbdb) return l.dbReadyPromise.then(function() {
				return l.dbOpenError ? kt(l.dbOpenError) : s
			});
			l.isBeingOpened = !0, l.dbOpenError = null, l.openComplete = !1;
			var p = l.openCanceller,
				g = Math.round(10 * s.verno),
				S = !1;

			function E() {
				if (l.openCanceller !== p) throw new ue.DatabaseClosed("db.open() was cancelled")
			}

			function I() {
				return new ve(function(D, B) {
					if (E(), !h) throw new ue.MissingAPI;
					var N = s.name,
						j = l.autoSchema || !g ? h.open(N) : h.open(N, g);
					if (!j) throw new ue.MissingAPI;
					j.onerror = xr(B), j.onblocked = dt(s._fireOnBlocked), j.onupgradeneeded = dt(function(U) {
						var Y;
						R = j.transaction, l.autoSchema && !s._options.allowEmptyDB ? (j.onerror = Da, R.abort(), j.result.close(), (Y = h.deleteDatabase(N)).onsuccess = Y.onerror = dt(function() {
							B(new ue.NoSuchDatabase("Database ".concat(N, " doesnt exist")))
						})) : (R.onerror = xr(B), Y = U.oldVersion > Math.pow(2, 62) ? 0 : U.oldVersion, M = Y < 1, s.idbdb = j.result, S && h5(s, R), f5(s, Y / 10, R, B))
					}, B), j.onsuccess = dt(function() {
						R = null;
						var U, Y, F, ee, se, he, pe = s.idbdb = j.result,
							ae = w(pe.objectStoreNames);
						if (0 < ae.length) try {
							var Se = pe.transaction((se = ae).length === 1 ? se[0] : se, "readonly");
							if (l.autoSchema) he = pe, ee = Se, (F = s).verno = he.version / 10, ee = F._dbSchema = Pc(0, he, ee), F._storeNames = w(he.objectStoreNames, 0), Ac(F, [F._allTables], a(ee), ee);
							else if (Oc(s, s._dbSchema, Se), Y = Se, ((Y = af(Pc(0, (U = s).idbdb, Y), U._dbSchema)).add.length || Y.change.some(function(ye) {
									return ye.add.length || ye.change.length
								})) && !S) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), pe.close(), g = pe.version + 1, S = !0, D(I());
							Ec(s, Se)
						} catch {}
						vs.push(s), pe.onversionchange = dt(function(ye) {
							l.vcFired = !0, s.on("versionchange").fire(ye)
						}), pe.onclose = dt(function() {
							s.close({
								disableAutoOpen: !1
							})
						}), M && (ae = s._deps, se = N, uf(he = ae.indexedDB) || se === wc || cf(he, ae.IDBKeyRange).put({
							name: se
						}).catch(Me)), D()
					}, B)
				}).catch(function(D) {
					switch (D == null ? void 0 : D.name) {
						case "UnknownError":
							if (0 < l.PR1398_maxLoop) return l.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), I();
							break;
						case "VersionError":
							if (0 < g) return g = 0, I()
					}
					return ve.reject(D)
				})
			}
			var T, V = l.dbReadyResolve,
				R = null,
				M = !1;
			return ve.race([p, (typeof navigator > "u" ? ve.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(D) {
				function B() {
					return indexedDB.databases().finally(D)
				}
				T = setInterval(B, 100), B()
			}).finally(function() {
				return clearInterval(T)
			}) : Promise.resolve()).then(I)]).then(function() {
				return E(), l.onReadyBeingFired = [], ve.resolve(df(function() {
					return s.on.ready.fire(s.vip)
				})).then(function D() {
					var B;
					if (0 < l.onReadyBeingFired.length) return B = l.onReadyBeingFired.reduce(pi, Me), l.onReadyBeingFired = [], ve.resolve(df(function() {
						return B(s.vip)
					})).then(D)
				})
			}).finally(function() {
				l.openCanceller === p && (l.onReadyBeingFired = null, l.isBeingOpened = !1)
			}).catch(function(D) {
				l.dbOpenError = D;
				try {
					R && R.abort()
				} catch {}
				return p === l.openCanceller && s._close(), kt(D)
			}).finally(function() {
				l.openComplete = !0, V()
			}).then(function() {
				var D;
				return M && (D = {}, s.tables.forEach(function(B) {
					B.schema.indexes.forEach(function(N) {
						N.name && (D["idb://".concat(s.name, "/").concat(B.name, "/").concat(N.name)] = new Qt(-1 / 0, [
							[
								[]
							]
						]))
					}), D["idb://".concat(s.name, "/").concat(B.name, "/")] = D["idb://".concat(s.name, "/").concat(B.name, "/:dels")] = new Qt(-1 / 0, [
						[
							[]
						]
					])
				}), Eo(Ba).fire(D), vf(D, !0)), s
			})
		}

		function _f(s) {
			function l(S) {
				return s.next(S)
			}
			var h = g(l),
				p = g(function(S) {
					return s.throw(S)
				});

			function g(S) {
				return function(I) {
					var I = S(I),
						T = I.value;
					return I.done ? T : T && typeof T.then == "function" ? T.then(h, p) : c(T) ? Promise.all(T).then(h, p) : h(T)
				}
			}
			return g(l)()
		}

		function Rc(s, l, h) {
			for (var p = c(s) ? s.slice() : [s], g = 0; g < h; ++g) p.push(l);
			return p
		}
		var v5 = {
			stack: "dbcore",
			name: "VirtualIndexMiddleware",
			level: 1,
			create: function(s) {
				return r(r({}, s), {
					table: function(p) {
						var h = s.table(p),
							p = h.schema,
							g = {},
							S = [];

						function E(D, B, N) {
							var F = $a(D),
								j = g[F] = g[F] || [],
								U = D == null ? 0 : typeof D == "string" ? 1 : D.length,
								Y = 0 < B,
								F = r(r({}, N), {
									name: Y ? "".concat(F, "(virtual-from:").concat(N.name, ")") : N.name,
									lowLevelIndex: N,
									isVirtual: Y,
									keyTail: B,
									keyLength: U,
									extractKey: of(D),
									unique: !Y && N.unique
								});
							return j.push(F), F.isPrimaryKey || S.push(F), 1 < U && E(U === 2 ? D[0] : D.slice(0, U - 1), B + 1, N), j.sort(function(ee, se) {
								return ee.keyTail - se.keyTail
							}), F
						}
						var I = E(p.primaryKey.keyPath, 0, p.primaryKey);
						g[":id"] = [I];
						for (var T = 0, V = p.indexes; T < V.length; T++) {
							var R = V[T];
							E(R.keyPath, 0, R)
						}

						function M(D) {
							var B, N = D.query.index;
							return N.isVirtual ? r(r({}, D), {
								query: {
									index: N.lowLevelIndex,
									range: (B = D.query.range, N = N.keyTail, {
										type: B.type === 1 ? 2 : B.type,
										lower: Rc(B.lower, B.lowerOpen ? s.MAX_KEY : s.MIN_KEY, N),
										lowerOpen: !0,
										upper: Rc(B.upper, B.upperOpen ? s.MIN_KEY : s.MAX_KEY, N),
										upperOpen: !0
									})
								}
							}) : D
						}
						return r(r({}, h), {
							schema: r(r({}, p), {
								primaryKey: I,
								indexes: S,
								getIndexByKeyPath: function(D) {
									return (D = g[$a(D)]) && D[0]
								}
							}),
							count: function(D) {
								return h.count(M(D))
							},
							query: function(D) {
								return h.query(M(D))
							},
							openCursor: function(D) {
								var B = D.query.index,
									N = B.keyTail,
									j = B.keyLength;
								return B.isVirtual ? h.openCursor(M(D)).then(function(Y) {
									return Y && U(Y)
								}) : h.openCursor(D);

								function U(Y) {
									return Object.create(Y, {
										continue: {
											value: function(F) {
												F != null ? Y.continue(Rc(F, D.reverse ? s.MAX_KEY : s.MIN_KEY, N)) : D.unique ? Y.continue(Y.key.slice(0, j).concat(D.reverse ? s.MIN_KEY : s.MAX_KEY, N)) : Y.continue()
											}
										},
										continuePrimaryKey: {
											value: function(F, ee) {
												Y.continuePrimaryKey(Rc(F, s.MAX_KEY, N), ee)
											}
										},
										primaryKey: {
											get: function() {
												return Y.primaryKey
											}
										},
										key: {
											get: function() {
												var F = Y.key;
												return j === 1 ? F[0] : F.slice(0, j)
											}
										},
										value: {
											get: function() {
												return Y.value
											}
										}
									})
								}
							}
						})
					}
				})
			}
		};

		function gf(s, l, h, p) {
			return h = h || {}, p = p || "", a(s).forEach(function(g) {
				var S, E, I;
				_(l, g) ? (S = s[g], E = l[g], typeof S == "object" && typeof E == "object" && S && E ? (I = J(S)) !== J(E) ? h[p + g] = l[g] : I === "Object" ? gf(S, E, h, p + g + ".") : S !== E && (h[p + g] = l[g]) : S !== E && (h[p + g] = l[g])) : h[p + g] = void 0
			}), a(l).forEach(function(g) {
				_(s, g) || (h[p + g] = l[g])
			}), h
		}

		function yf(s, l) {
			return l.type === "delete" ? l.keys : l.keys || l.values.map(s.extractKey)
		}
		var _5 = {
			stack: "dbcore",
			name: "HooksMiddleware",
			level: 2,
			create: function(s) {
				return r(r({}, s), {
					table: function(l) {
						var h = s.table(l),
							p = h.schema.primaryKey;
						return r(r({}, h), {
							mutate: function(g) {
								var S = Ce.trans,
									E = S.table(l).hook,
									I = E.deleting,
									T = E.creating,
									V = E.updating;
								switch (g.type) {
									case "add":
										if (T.fire === Me) break;
										return S._promise("readwrite", function() {
											return R(g)
										}, !0);
									case "put":
										if (T.fire === Me && V.fire === Me) break;
										return S._promise("readwrite", function() {
											return R(g)
										}, !0);
									case "delete":
										if (I.fire === Me) break;
										return S._promise("readwrite", function() {
											return R(g)
										}, !0);
									case "deleteRange":
										if (I.fire === Me) break;
										return S._promise("readwrite", function() {
											return function M(D, B, N) {
												return h.query({
													trans: D,
													values: !1,
													query: {
														index: p,
														range: B
													},
													limit: N
												}).then(function(j) {
													var U = j.result;
													return R({
														type: "delete",
														keys: U,
														trans: D
													}).then(function(Y) {
														return 0 < Y.numFailures ? Promise.reject(Y.failures[0]) : U.length < N ? {
															failures: [],
															numFailures: 0,
															lastResult: void 0
														} : M(D, r(r({}, B), {
															lower: U[U.length - 1],
															lowerOpen: !0
														}), N)
													})
												})
											}(g.trans, g.range, 1e4)
										}, !0)
								}
								return h.mutate(g);

								function R(M) {
									var D, B, N, j = Ce.trans,
										U = M.keys || yf(p, M);
									if (U) return (M = M.type === "add" || M.type === "put" ? r(r({}, M), {
										keys: U
									}) : r({}, M)).type !== "delete" && (M.values = o([], M.values)), M.keys && (M.keys = o([], M.keys)), D = h, N = U, ((B = M).type === "add" ? Promise.resolve([]) : D.getMany({
										trans: B.trans,
										keys: N,
										cache: "immutable"
									})).then(function(Y) {
										var F = U.map(function(ee, se) {
											var he, pe, ae, Se = Y[se],
												ye = {
													onerror: null,
													onsuccess: null
												};
											return M.type === "delete" ? I.fire.call(ye, ee, Se, j) : M.type === "add" || Se === void 0 ? (he = T.fire.call(ye, ee, M.values[se], j), ee == null && he != null && (M.keys[se] = ee = he, p.outbound || H(M.values[se], p.keyPath, ee))) : (he = gf(Se, M.values[se]), (pe = V.fire.call(ye, he, ee, Se, j)) && (ae = M.values[se], Object.keys(pe).forEach(function(de) {
												_(ae, de) ? ae[de] = pe[de] : H(ae, de, pe[de])
											}))), ye
										});
										return h.mutate(M).then(function(ee) {
											for (var se = ee.failures, he = ee.results, pe = ee.numFailures, ee = ee.lastResult, ae = 0; ae < U.length; ++ae) {
												var Se = (he || U)[ae],
													ye = F[ae];
												Se == null ? ye.onerror && ye.onerror(se[ae]) : ye.onsuccess && ye.onsuccess(M.type === "put" && Y[ae] ? M.values[ae] : Se)
											}
											return {
												failures: se,
												results: he,
												numFailures: pe,
												lastResult: ee
											}
										}).catch(function(ee) {
											return F.forEach(function(se) {
												return se.onerror && se.onerror(ee)
											}), Promise.reject(ee)
										})
									});
									throw new Error("Keys missing")
								}
							}
						})
					}
				})
			}
		};

		function Hp(s, l, h) {
			try {
				if (!l || l.keys.length < s.length) return null;
				for (var p = [], g = 0, S = 0; g < l.keys.length && S < s.length; ++g) Ke(l.keys[g], s[S]) === 0 && (p.push(h ? me(l.values[g]) : l.values[g]), ++S);
				return p.length === s.length ? p : null
			} catch {
				return null
			}
		}
		var g5 = {
			stack: "dbcore",
			level: -1,
			create: function(s) {
				return {
					table: function(l) {
						var h = s.table(l);
						return r(r({}, h), {
							getMany: function(p) {
								var g;
								return p.cache ? (g = Hp(p.keys, p.trans._cache, p.cache === "clone")) ? ve.resolve(g) : h.getMany(p).then(function(S) {
									return p.trans._cache = {
										keys: p.keys,
										values: p.cache === "clone" ? me(S) : S
									}, S
								}) : h.getMany(p)
							},
							mutate: function(p) {
								return p.type !== "add" && (p.trans._cache = null), h.mutate(p)
							}
						})
					}
				}
			}
		};

		function Wp(s, l) {
			return s.trans.mode === "readonly" && !!s.subscr && !s.trans.explicit && s.trans.db._options.cache !== "disabled" && !l.schema.primaryKey.outbound
		}

		function Kp(s, l) {
			switch (s) {
				case "query":
					return l.values && !l.unique;
				case "get":
				case "getMany":
				case "count":
				case "openCursor":
					return !1
			}
		}
		var y5 = {
			stack: "dbcore",
			level: 0,
			name: "Observability",
			create: function(s) {
				var l = s.schema.name,
					h = new Qt(s.MIN_KEY, s.MAX_KEY);
				return r(r({}, s), {
					transaction: function(p, g, S) {
						if (Ce.subscr && g !== "readonly") throw new ue.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ce.querier));
						return s.transaction(p, g, S)
					},
					table: function(p) {
						function g(U) {
							var j, U = U.query;
							return [j = U.index, new Qt((j = (U = U.range).lower) != null ? j : s.MIN_KEY, (j = U.upper) != null ? j : s.MAX_KEY)]
						}
						var S = s.table(p),
							E = S.schema,
							I = E.primaryKey,
							T = E.indexes,
							V = I.extractKey,
							R = I.outbound,
							M = I.autoIncrement && T.filter(function(N) {
								return N.compound && N.keyPath.includes(I.keyPath)
							}),
							D = r(r({}, S), {
								mutate: function(N) {
									function j(ke) {
										return ke = "idb://".concat(l, "/").concat(p, "/").concat(ke), se[ke] || (se[ke] = new Qt)
									}
									var U, Y, F, ee = N.trans,
										se = N.mutatedParts || (N.mutatedParts = {}),
										he = j(""),
										pe = j(":dels"),
										ae = N.type,
										ye = N.type === "deleteRange" ? [N.range] : N.type === "delete" ? [N.keys] : N.values.length < 50 ? [yf(I, N).filter(function(ke) {
											return ke
										}), N.values] : [],
										Se = ye[0],
										ye = ye[1],
										de = N.trans._cache;
									return c(Se) ? (he.addKeys(Se), (ae = ae === "delete" || Se.length === ye.length ? Hp(Se, de) : null) || pe.addKeys(Se), (ae || ye) && (U = j, Y = ae, F = ye, E.indexes.forEach(function(ke) {
										var Ye = U(ke.name || "");

										function Qe(ze) {
											return ze != null ? ke.extractKey(ze) : null
										}

										function Pe(ze) {
											ke.multiEntry && c(ze) ? ze.forEach(function(pt) {
												return Ye.addKey(pt)
											}) : Ye.addKey(ze)
										}(Y || F).forEach(function(ze, gt) {
											var Yn = Y && Qe(Y[gt]),
												gt = F && Qe(F[gt]);
											Ke(Yn, gt) !== 0 && (Yn != null && Pe(Yn), gt != null) && Pe(gt)
										})
									}))) : Se ? (ye = {
										from: (de = Se.lower) != null ? de : s.MIN_KEY,
										to: (ae = Se.upper) != null ? ae : s.MAX_KEY
									}, pe.add(ye), he.add(ye)) : (he.add(h), pe.add(h), E.indexes.forEach(function(ke) {
										return j(ke.name).add(h)
									})), S.mutate(N).then(function(ke) {
										return !Se || N.type !== "add" && N.type !== "put" || (he.addKeys(ke.results), M && M.forEach(function(Ye) {
											for (var Qe = N.values.map(function(Yn) {
													return Ye.extractKey(Yn)
												}), Pe = Ye.keyPath.findIndex(function(Yn) {
													return Yn === I.keyPath
												}), ze = 0, pt = ke.results.length; ze < pt; ++ze) Qe[ze][Pe] = ke.results[ze];
											j(Ye.name).addKeys(Qe)
										})), ee.mutatedParts = jc(ee.mutatedParts || {}, se), ke
									})
								}
							}),
							B = {
								get: function(N) {
									return [I, new Qt(N.key)]
								},
								getMany: function(N) {
									return [I, new Qt().addKeys(N.keys)]
								},
								count: g,
								query: g,
								openCursor: g
							};
						return a(B).forEach(function(N) {
							D[N] = function(j) {
								var U = Ce.subscr,
									Y = !!U,
									F = Wp(Ce, S) && Kp(N, j) ? j.obsSet = {} : U;
								if (Y) {
									var ee, U = function(ye) {
											return ye = "idb://".concat(l, "/").concat(p, "/").concat(ye), F[ye] || (F[ye] = new Qt)
										},
										se = U(""),
										he = U(":dels"),
										Y = B[N](j),
										pe = Y[0],
										Y = Y[1];
									if ((N === "query" && pe.isPrimaryKey && !j.values ? he : U(pe.name || "")).add(Y), !pe.isPrimaryKey) {
										if (N !== "count") return ee = N === "query" && R && j.values && S.query(r(r({}, j), {
											values: !1
										})), S[N].apply(this, arguments).then(function(ye) {
											if (N === "query") {
												if (R && j.values) return ee.then(function(Qe) {
													return Qe = Qe.result, se.addKeys(Qe), ye
												});
												var de = j.values ? ye.result.map(V) : ye.result;
												(j.values ? se : he).addKeys(de)
											} else {
												var ke, Ye;
												if (N === "openCursor") return Ye = j.values, (ke = ye) && Object.create(ke, {
													key: {
														get: function() {
															return he.addKey(ke.primaryKey), ke.key
														}
													},
													primaryKey: {
														get: function() {
															var Qe = ke.primaryKey;
															return he.addKey(Qe), Qe
														}
													},
													value: {
														get: function() {
															return Ye && se.addKey(ke.primaryKey), ke.value
														}
													}
												})
											}
											return ye
										});
										he.add(h)
									}
								}
								return S[N].apply(this, arguments)
							}
						}), D
					}
				})
			}
		};

		function Up(s, l, h) {
			var p;
			return h.numFailures === 0 ? l : l.type === "deleteRange" || (p = l.keys ? l.keys.length : "values" in l && l.values ? l.values.length : 1, h.numFailures === p) ? null : (p = r({}, l), c(p.keys) && (p.keys = p.keys.filter(function(g, S) {
				return !(S in h.failures)
			})), "values" in p && c(p.values) && (p.values = p.values.filter(function(g, S) {
				return !(S in h.failures)
			})), p)
		}

		function wf(s, l) {
			return h = s, ((p = l).lower === void 0 || (p.lowerOpen ? 0 < Ke(h, p.lower) : 0 <= Ke(h, p.lower))) && (h = s, (p = l).upper === void 0 || (p.upperOpen ? Ke(h, p.upper) < 0 : Ke(h, p.upper) <= 0));
			var h, p
		}

		function Yp(s, l, h, p, g, S) {
			var E, I, T, V, R, M;
			return !h || h.length === 0 || (E = l.query.index, I = E.multiEntry, T = l.query.range, V = p.schema.primaryKey.extractKey, R = E.extractKey, M = (E.lowLevelIndex || E).extractKey, (p = h.reduce(function(D, B) {
				var N = D,
					j = [];
				if (B.type === "add" || B.type === "put")
					for (var U = new Qt, Y = B.values.length - 1; 0 <= Y; --Y) {
						var F, ee = B.values[Y],
							se = V(ee);
						!U.hasKey(se) && (F = R(ee), I && c(F) ? F.some(function(ye) {
							return wf(ye, T)
						}) : wf(F, T)) && (U.addKey(se), j.push(ee))
					}
				switch (B.type) {
					case "add":
						var he = new Qt().addKeys(l.values ? D.map(function(de) {
								return V(de)
							}) : D),
							N = D.concat(l.values ? j.filter(function(de) {
								return de = V(de), !he.hasKey(de) && (he.addKey(de), !0)
							}) : j.map(function(de) {
								return V(de)
							}).filter(function(de) {
								return !he.hasKey(de) && (he.addKey(de), !0)
							}));
						break;
					case "put":
						var pe = new Qt().addKeys(B.values.map(function(de) {
							return V(de)
						}));
						N = D.filter(function(de) {
							return !pe.hasKey(l.values ? V(de) : de)
						}).concat(l.values ? j : j.map(function(de) {
							return V(de)
						}));
						break;
					case "delete":
						var ae = new Qt().addKeys(B.keys);
						N = D.filter(function(de) {
							return !ae.hasKey(l.values ? V(de) : de)
						});
						break;
					case "deleteRange":
						var Se = B.range;
						N = D.filter(function(de) {
							return !wf(V(de), Se)
						})
				}
				return N
			}, s)) === s) ? s : (p.sort(function(D, B) {
				return Ke(M(D), M(B)) || Ke(V(D), V(B))
			}), l.limit && l.limit < 1 / 0 && (p.length > l.limit ? p.length = l.limit : s.length === l.limit && p.length < l.limit && (g.dirty = !0)), S ? Object.freeze(p) : p)
		}

		function qp(s, l) {
			return Ke(s.lower, l.lower) === 0 && Ke(s.upper, l.upper) === 0 && !!s.lowerOpen == !!l.lowerOpen && !!s.upperOpen == !!l.upperOpen
		}

		function w5(s, l) {
			return ((h, p, g, S) => {
				if (h === void 0) return p !== void 0 ? -1 : 0;
				if (p === void 0) return 1;
				if ((h = Ke(h, p)) === 0) {
					if (g && S) return 0;
					if (g) return 1;
					if (S) return -1
				}
				return h
			})(s.lower, l.lower, s.lowerOpen, l.lowerOpen) <= 0 && 0 <= ((h, p, g, S) => {
				if (h === void 0) return p !== void 0 ? 1 : 0;
				if (p === void 0) return -1;
				if ((h = Ke(h, p)) === 0) {
					if (g && S) return 0;
					if (g) return -1;
					if (S) return 1
				}
				return h
			})(s.upper, l.upper, s.upperOpen, l.upperOpen)
		}

		function x5(s, l, h, p) {
			s.subscribers.add(h), p.addEventListener("abort", function() {
				var g, S;
				s.subscribers.delete(h), s.subscribers.size === 0 && (g = s, S = l, setTimeout(function() {
					g.subscribers.size === 0 && z(S, g)
				}, 3e3))
			})
		}
		var S5 = {
			stack: "dbcore",
			level: 0,
			name: "Cache",
			create: function(s) {
				var l = s.schema.name;
				return r(r({}, s), {
					transaction: function(h, p, g) {
						var S, E, I = s.transaction(h, p, g);
						return p === "readwrite" && (g = (S = new AbortController).signal, I.addEventListener("abort", (E = function(T) {
							return function() {
								if (S.abort(), p === "readwrite") {
									for (var V = new Set, R = 0, M = h; R < M.length; R++) {
										var D = M[R],
											B = Si["idb://".concat(l, "/").concat(D)];
										if (B) {
											var N = s.table(D),
												j = B.optimisticOps.filter(function(ke) {
													return ke.trans === I
												});
											if (I._explicit && T && I.mutatedParts)
												for (var U = 0, Y = Object.values(B.queries.query); U < Y.length; U++)
													for (var F = 0, ee = (pe = Y[U]).slice(); F < ee.length; F++) hf((ae = ee[F]).obsSet, I.mutatedParts) && (z(pe, ae), ae.subscribers.forEach(function(ke) {
														return V.add(ke)
													}));
											else if (0 < j.length) {
												B.optimisticOps = B.optimisticOps.filter(function(ke) {
													return ke.trans !== I
												});
												for (var se = 0, he = Object.values(B.queries.query); se < he.length; se++)
													for (var pe, ae, Se, ye = 0, de = (pe = he[se]).slice(); ye < de.length; ye++)(ae = de[ye]).res != null && I.mutatedParts && (T && !ae.dirty ? (Se = Object.isFrozen(ae.res), Se = Yp(ae.res, ae.req, j, N, ae, Se), ae.dirty ? (z(pe, ae), ae.subscribers.forEach(function(ke) {
														return V.add(ke)
													})) : Se !== ae.res && (ae.res = Se, ae.promise = ve.resolve({
														result: Se
													}))) : (ae.dirty && z(pe, ae), ae.subscribers.forEach(function(ke) {
														return V.add(ke)
													})))
											}
										}
									}
									V.forEach(function(ke) {
										return ke()
									})
								}
							}
						})(!1), {
							signal: g
						}), I.addEventListener("error", E(!1), {
							signal: g
						}), I.addEventListener("complete", E(!0), {
							signal: g
						})), I
					},
					table: function(h) {
						var p = s.table(h),
							g = p.schema.primaryKey;
						return r(r({}, p), {
							mutate: function(S) {
								var E, I = Ce.trans;
								return !g.outbound && I.db._options.cache !== "disabled" && !I.explicit && I.idbtrans.mode === "readwrite" && (E = Si["idb://".concat(l, "/").concat(h)]) ? (I = p.mutate(S), S.type !== "add" && S.type !== "put" || !(50 <= S.values.length || yf(g, S).some(function(T) {
									return T == null
								})) ? (E.optimisticOps.push(S), S.mutatedParts && Tc(S.mutatedParts), I.then(function(T) {
									0 < T.numFailures && (z(E.optimisticOps, S), (T = Up(0, S, T)) && E.optimisticOps.push(T), S.mutatedParts) && Tc(S.mutatedParts)
								}), I.catch(function() {
									z(E.optimisticOps, S), S.mutatedParts && Tc(S.mutatedParts)
								})) : I.then(function(T) {
									var V = Up(0, r(r({}, S), {
										values: S.values.map(function(R, M) {
											var D;
											return T.failures[M] ? R : (H(D = (D = g.keyPath) != null && D.includes(".") ? me(R) : r({}, R), g.keyPath, T.results[M]), D)
										})
									}), T);
									E.optimisticOps.push(V), queueMicrotask(function() {
										return S.mutatedParts && Tc(S.mutatedParts)
									})
								}), I) : p.mutate(S)
							},
							query: function(S) {
								var E, I, T, V, R, M, D;
								return Wp(Ce, p) && Kp("query", S) ? (E = ((T = Ce.trans) == null ? void 0 : T.db._options.cache) === "immutable", I = (T = Ce).requery, T = T.signal, M = ((B, N, j, U) => {
									var Y = Si["idb://".concat(B, "/").concat(N)];
									if (!Y) return [];
									if (!(B = Y.queries[j])) return [null, !1, Y, null];
									var F = B[(U.query ? U.query.index.name : null) || ""];
									if (!F) return [null, !1, Y, null];
									switch (j) {
										case "query":
											var ee = F.find(function(se) {
												return se.req.limit === U.limit && se.req.values === U.values && qp(se.req.query.range, U.query.range)
											});
											return ee ? [ee, !0, Y, F] : [F.find(function(se) {
												return ("limit" in se.req ? se.req.limit : 1 / 0) >= U.limit && (!U.values || se.req.values) && w5(se.req.query.range, U.query.range)
											}), !1, Y, F];
										case "count":
											return ee = F.find(function(se) {
												return qp(se.req.query.range, U.query.range)
											}), [ee, !!ee, Y, F]
									}
								})(l, h, "query", S), D = M[0], V = M[2], R = M[3], D && M[1] ? D.obsSet = S.obsSet : (M = p.query(S).then(function(B) {
									var N = B.result;
									if (D && (D.res = N), E) {
										for (var j = 0, U = N.length; j < U; ++j) Object.freeze(N[j]);
										Object.freeze(N)
									} else B.result = me(N);
									return B
								}).catch(function(B) {
									return R && D && z(R, D), Promise.reject(B)
								}), D = {
									obsSet: S.obsSet,
									promise: M,
									subscribers: new Set,
									type: "query",
									req: S,
									dirty: !1
								}, R ? R.push(D) : (R = [D], (V = V || (Si["idb://".concat(l, "/").concat(h)] = {
									queries: {
										query: {},
										count: {}
									},
									objs: new Map,
									optimisticOps: [],
									unsignaledParts: {}
								})).queries.query[S.query.index.name || ""] = R)), x5(D, R, I, T), D.promise.then(function(B) {
									return {
										result: Yp(B.result, S, V == null ? void 0 : V.optimisticOps, p, D, E)
									}
								})) : p.query(S)
							}
						})
					}
				})
			}
		};

		function Nc(s, l) {
			return new Proxy(s, {
				get: function(h, p, g) {
					return p === "db" ? l : Reflect.get(h, p, g)
				}
			})
		}
		bt.prototype.version = function(s) {
			if (isNaN(s) || s < .1) throw new ue.Type("Given version is not a positive number");
			if (s = Math.round(10 * s) / 10, this.idbdb || this._state.isBeingOpened) throw new ue.Schema("Cannot add version when database is open");
			this.verno = Math.max(this.verno, s);
			var l = this._versions,
				h = l.filter(function(p) {
					return p._cfg.version === s
				})[0];
			return h || (h = new this.Version(s), l.push(h), l.sort(d5), h.stores({}), this._state.autoSchema = !1), h
		}, bt.prototype._whenReady = function(s) {
			var l = this;
			return this.idbdb && (this._state.openComplete || Ce.letThrough || this._vip) ? s() : new ve(function(h, p) {
				if (l._state.openComplete) return p(new ue.DatabaseClosed(l._state.dbOpenError));
				if (!l._state.isBeingOpened) {
					if (!l._state.autoOpen) return void p(new ue.DatabaseClosed);
					l.open().catch(Me)
				}
				l._state.dbReadyPromise.then(h, p)
			}).then(s)
		}, bt.prototype.use = function(g) {
			var l = g.stack,
				h = g.create,
				p = g.level,
				g = g.name,
				S = (g && this.unuse({
					stack: l,
					name: g
				}), this._middlewares[l] || (this._middlewares[l] = []));
			return S.push({
				stack: l,
				create: h,
				level: p ?? 10,
				name: g
			}), S.sort(function(E, I) {
				return E.level - I.level
			}), this
		}, bt.prototype.unuse = function(s) {
			var l = s.stack,
				h = s.name,
				p = s.create;
			return l && this._middlewares[l] && (this._middlewares[l] = this._middlewares[l].filter(function(g) {
				return p ? g.create !== p : !!h && g.name !== h
			})), this
		}, bt.prototype.open = function() {
			var s = this;
			return yi(Xt, function() {
				return m5(s)
			})
		}, bt.prototype._close = function() {
			this.on.close.fire(new CustomEvent("close"));
			var s = this._state,
				l = vs.indexOf(this);
			if (0 <= l && vs.splice(l, 1), this.idbdb) {
				try {
					this.idbdb.close()
				} catch {}
				this.idbdb = null
			}
			s.isBeingOpened || (s.dbReadyPromise = new ve(function(h) {
				s.dbReadyResolve = h
			}), s.openCanceller = new ve(function(h, p) {
				s.cancelOpen = p
			}))
		}, bt.prototype.close = function(l) {
			var l = (l === void 0 ? {
					disableAutoOpen: !0
				} : l).disableAutoOpen,
				h = this._state;
			l ? (h.isBeingOpened && h.cancelOpen(new ue.DatabaseClosed), this._close(), h.autoOpen = !1, h.dbOpenError = new ue.DatabaseClosed) : (this._close(), h.autoOpen = this._options.autoOpen || h.isBeingOpened, h.openComplete = !1, h.dbOpenError = null)
		}, bt.prototype.delete = function(s) {
			var l = this,
				h = (s === void 0 && (s = {
					disableAutoOpen: !0
				}), 0 < arguments.length && typeof arguments[0] != "object"),
				p = this._state;
			return new ve(function(g, S) {
				function E() {
					l.close(s);
					var I = l._deps.indexedDB.deleteDatabase(l.name);
					I.onsuccess = dt(function() {
						var T, V, R;
						T = l._deps, V = l.name, uf(R = T.indexedDB) || V === wc || cf(R, T.IDBKeyRange).delete(V).catch(Me), g()
					}), I.onerror = xr(S), I.onblocked = l._fireOnBlocked
				}
				if (h) throw new ue.InvalidArgument("Invalid closeOptions argument to db.delete()");
				p.isBeingOpened ? p.dbReadyPromise.then(E) : E()
			})
		}, bt.prototype.backendDB = function() {
			return this.idbdb
		}, bt.prototype.isOpen = function() {
			return this.idbdb !== null
		}, bt.prototype.hasBeenClosed = function() {
			var s = this._state.dbOpenError;
			return s && s.name === "DatabaseClosed"
		}, bt.prototype.hasFailed = function() {
			return this._state.dbOpenError !== null
		}, bt.prototype.dynamicallyOpened = function() {
			return this._state.autoSchema
		}, Object.defineProperty(bt.prototype, "tables", {
			get: function() {
				var s = this;
				return a(this._allTables).map(function(l) {
					return s._allTables[l]
				})
			},
			enumerable: !1,
			configurable: !0
		}), bt.prototype.transaction = function() {
			var s = (function(l, h, p) {
				var g = arguments.length;
				if (g < 2) throw new ue.InvalidArgument("Too few arguments");
				for (var S = new Array(g - 1); --g;) S[g - 1] = arguments[g];
				return p = S.pop(), [l, G(S), p]
			}).apply(this, arguments);
			return this._transaction.apply(this, s)
		}, bt.prototype._transaction = function(s, l, h) {
			var p, g, S = this,
				E = Ce.trans,
				I = (E && E.db === this && s.indexOf("!") === -1 || (E = null), s.indexOf("?") !== -1);
			s = s.replace("!", "").replace("?", "");
			try {
				if (g = l.map(function(V) {
						if (V = V instanceof S.Table ? V.name : V, typeof V != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
						return V
					}), s == "r" || s === Qd) p = Qd;
				else {
					if (s != "rw" && s != Zd) throw new ue.InvalidArgument("Invalid transaction mode: " + s);
					p = Zd
				}
				if (E) {
					if (E.mode === Qd && p === Zd) {
						if (!I) throw new ue.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
						E = null
					}
					E && g.forEach(function(V) {
						if (E && E.storeNames.indexOf(V) === -1) {
							if (!I) throw new ue.SubTransaction("Table " + V + " not included in parent transaction.");
							E = null
						}
					}), I && E && !E.active && (E = null)
				}
			} catch (V) {
				return E ? E._promise(null, function(R, M) {
					M(V)
				}) : kt(V)
			}
			var T = (function V(R, M, D, B, N) {
				return ve.resolve().then(function() {
					var F = Ce.transless || Ce,
						j = R._createTransaction(M, D, R._dbSchema, B),
						F = (j.explicit = !0, {
							trans: j,
							transless: F
						});
					if (B) j.idbtrans = B.idbtrans;
					else try {
						j.create(), j.idbtrans._explicit = !0, R._state.PR1398_maxLoop = 3
					} catch (ee) {
						return ee.name === Le.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({
							disableAutoOpen: !1
						}), R.open().then(function() {
							return V(R, M, D, null, N)
						})) : kt(ee)
					}
					var U, Y = ie(N),
						F = (Y && ms(), ve.follow(function() {
							var ee;
							(U = N.call(j, j)) && (Y ? (ee = ko.bind(null, null), U.then(ee, ee)) : typeof U.next == "function" && typeof U.throw == "function" && (U = _f(U)))
						}, F));
					return (U && typeof U.then == "function" ? ve.resolve(U).then(function(ee) {
						return j.active ? ee : kt(new ue.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
					}) : F.then(function() {
						return U
					})).then(function(ee) {
						return B && j._resolve(), j._completion.then(function() {
							return ee
						})
					}).catch(function(ee) {
						return j._reject(ee), kt(ee)
					})
				})
			}).bind(null, this, p, g, E, h);
			return E ? E._promise(p, T, "lock") : Ce.trans ? yi(Ce.transless, function() {
				return S._whenReady(T)
			}) : this._whenReady(T)
		}, bt.prototype.table = function(s) {
			if (_(this._allTables, s)) return this._allTables[s];
			throw new ue.InvalidTable("Table ".concat(s, " does not exist"))
		};
		var Qr = bt;

		function bt(s, l) {
			var h, p, g, S, E, I = this,
				T = (this._middlewares = {}, this.verno = 0, bt.dependencies),
				T = (this._options = l = r({
					addons: bt.addons,
					autoOpen: !0,
					indexedDB: T.indexedDB,
					IDBKeyRange: T.IDBKeyRange,
					cache: "cloned"
				}, l), this._deps = {
					indexedDB: l.indexedDB,
					IDBKeyRange: l.IDBKeyRange
				}, l.addons),
				V = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, {
					dbOpenError: null,
					isBeingOpened: !1,
					onReadyBeingFired: null,
					openComplete: !1,
					dbReadyResolve: Me,
					dbReadyPromise: null,
					cancelOpen: Me,
					openCanceller: null,
					autoSchema: !0,
					PR1398_maxLoop: 3,
					autoOpen: l.autoOpen
				}),
				R = (V.dbReadyPromise = new ve(function(M) {
					V.dbReadyResolve = M
				}), V.openCanceller = new ve(function(M, D) {
					V.cancelOpen = D
				}), this._state = V, this.name = s, this.on = Na(this, "populate", "blocked", "versionchange", "close", {
					ready: [pi, Me]
				}), this.once = function(M, D) {
					var B = function() {
						for (var N = [], j = 0; j < arguments.length; j++) N[j] = arguments[j];
						I.on(M).unsubscribe(B), D.apply(I, N)
					};
					return I.on(M, B)
				}, this.on.ready.subscribe = b(this.on.ready.subscribe, function(M) {
					return function(D, B) {
						bt.vip(function() {
							var N, j = I._state;
							j.openComplete ? (j.dbOpenError || ve.resolve().then(D), B && M(D)) : j.onReadyBeingFired ? (j.onReadyBeingFired.push(D), B && M(D)) : (M(D), N = I, B || M(function U() {
								N.on.ready.unsubscribe(D), N.on.ready.unsubscribe(U)
							}))
						})
					}
				}), this.Collection = (h = this, La(o5.prototype, function(U, j) {
					this.db = h;
					var B = kp,
						N = null;
					if (j) try {
						B = j()
					} catch (F) {
						N = F
					}
					var j = U._ctx,
						U = j.table,
						Y = U.hook.reading.fire;
					this._ctx = {
						table: U,
						index: j.index,
						isPrimKey: !j.index || U.schema.primKey.keyPath && j.index === U.schema.primKey.name,
						range: B,
						keysOnly: !1,
						dir: "next",
						unique: "",
						algorithm: null,
						filter: null,
						replayFilter: null,
						justLimit: !0,
						isMatch: null,
						offset: 0,
						limit: 1 / 0,
						error: N,
						or: j.or,
						valueMapper: Y !== St ? Y : null
					}
				})), this.Table = (p = this, La(Pp.prototype, function(M, D, B) {
					this.db = p, this._tx = B, this.name = M, this.schema = D, this.hook = p._allTables[M] ? p._allTables[M].hook : Na(null, {
						creating: [At, Me],
						reading: [yn, St],
						updating: [wr, Me],
						deleting: [On, Me]
					})
				})), this.Transaction = (g = this, La(a5.prototype, function(M, D, B, N, j) {
					var U = this;
					M !== "readonly" && D.forEach(function(Y) {
						Y = (Y = B[Y]) == null ? void 0 : Y.yProps, Y && (D = D.concat(Y.map(function(F) {
							return F.updatesTable
						})))
					}), this.db = g, this.mode = M, this.storeNames = D, this.schema = B, this.chromeTransactionDurability = N, this.idbtrans = null, this.on = Na(this, "complete", "error", "abort"), this.parent = j || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ve(function(Y, F) {
						U._resolve = Y, U._reject = F
					}), this._completion.then(function() {
						U.active = !1, U.on.complete.fire()
					}, function(Y) {
						var F = U.active;
						return U.active = !1, U.on.error.fire(Y), U.parent ? U.parent._reject(Y) : F && U.idbtrans && U.idbtrans.abort(), kt(Y)
					})
				})), this.Version = (S = this, La(p5.prototype, function(M) {
					this.db = S, this._cfg = {
						version: M,
						storesSource: null,
						dbschema: {},
						tables: {},
						contentUpgrade: null
					}
				})), this.WhereClause = (E = this, La(Rp.prototype, function(M, D, B) {
					if (this.db = E, this._ctx = {
							table: M,
							index: D === ":id" ? null : D,
							or: B
						}, this._cmp = this._ascending = Ke, this._descending = function(N, j) {
							return Ke(j, N)
						}, this._max = function(N, j) {
							return 0 < Ke(N, j) ? N : j
						}, this._min = function(N, j) {
							return Ke(N, j) < 0 ? N : j
						}, this._IDBKeyRange = E._deps.IDBKeyRange, !this._IDBKeyRange) throw new ue.MissingAPI
				})), this.on("versionchange", function(M) {
					0 < M.newVersion ? console.warn("Another connection wants to upgrade database '".concat(I.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(I.name, "'. Closing db now to resume the delete request.")), I.close({
						disableAutoOpen: !1
					})
				}), this.on("blocked", function(M) {
					!M.newVersion || M.newVersion < M.oldVersion ? console.warn("Dexie.delete('".concat(I.name, "') was blocked")) : console.warn("Upgrade '".concat(I.name, "' blocked by other connection holding version ").concat(M.oldVersion / 10))
				}), this._maxKey = za(l.IDBKeyRange), this._createTransaction = function(M, D, B, N) {
					return new I.Transaction(M, D, B, I._options.chromeTransactionDurability, N)
				}, this._fireOnBlocked = function(M) {
					I.on("blocked").fire(M), vs.filter(function(D) {
						return D.name === I.name && D !== I && !D._state.vcFired
					}).map(function(D) {
						return D.on("versionchange").fire(M)
					})
				}, this.use(g5), this.use(S5), this.use(y5), this.use(v5), this.use(_5), new Proxy(this, {
					get: function(M, D, B) {
						var N;
						return D === "_vip" || (D === "table" ? function(j) {
							return Nc(I.table(j), R)
						} : (N = Reflect.get(M, D, B)) instanceof Pp ? Nc(N, R) : D === "tables" ? N.map(function(j) {
							return Nc(j, R)
						}) : D === "_createTransaction" ? function() {
							return Nc(N.apply(this, arguments), R)
						} : N)
					}
				}));
			this.vip = R, T.forEach(function(M) {
				return M(I)
			})
		}
		var Lc, ws = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable",
			k5 = (xf.prototype.subscribe = function(s, l, h) {
				return this._subscribe(s && typeof s != "function" ? s : {
					next: s,
					error: l,
					complete: h
				})
			}, xf.prototype[ws] = function() {
				return this
			}, xf);

		function xf(s) {
			this._subscribe = s
		}
		try {
			Lc = {
				indexedDB: i.indexedDB || i.mozIndexedDB || i.webkitIndexedDB || i.msIndexedDB,
				IDBKeyRange: i.IDBKeyRange || i.webkitIDBKeyRange
			}
		} catch {
			Lc = {
				indexedDB: null,
				IDBKeyRange: null
			}
		}

		function Gp(s) {
			var l, h = !1,
				p = new k5(function(g) {
					var S = ie(s),
						E, I = !1,
						T = {},
						V = {},
						R = {
							get closed() {
								return I
							},
							unsubscribe: function() {
								I || (I = !0, E && E.abort(), M && Eo.storagemutated.unsubscribe(B))
							}
						},
						M = (g.start && g.start(R), !1),
						D = function() {
							return Xd(N)
						},
						B = function(j) {
							jc(T, j), hf(V, T) && D()
						},
						N = function() {
							var j, U, Y;
							!I && Lc.indexedDB && (T = {}, j = {}, E && E.abort(), E = new AbortController, Y = (F => {
								var ee = hs();
								try {
									S && ms();
									var se = So(s, F);
									return se = S ? se.finally(ko) : se
								} finally {
									ee && ps()
								}
							})(U = {
								subscr: j,
								signal: E.signal,
								requery: D,
								querier: s,
								trans: null
							}), Promise.resolve(Y).then(function(F) {
								h = !0, l = F, I || U.signal.aborted || (T = {}, (ee => {
									for (var se in ee)
										if (_(ee, se)) return;
									return 1
								})(V = j) || M || (Eo(Ba, B), M = !0), Xd(function() {
									return !I && g.next && g.next(F)
								}))
							}, function(F) {
								h = !1, ["DatabaseClosedError", "AbortError"].includes(F == null ? void 0 : F.name) || I || Xd(function() {
									I || g.error && g.error(F)
								})
							}))
						};
					return setTimeout(D, 0), R
				});
			return p.hasValue = function() {
				return h
			}, p.getValue = function() {
				return l
			}, p
		}
		var ki = Qr;

		function Sf(s) {
			var l = Ao;
			try {
				Ao = !0, Eo.storagemutated.fire(s), vf(s, !0)
			} finally {
				Ao = l
			}
		}
		v(ki, r(r({}, le), {
			delete: function(s) {
				return new ki(s, {
					addons: []
				}).delete()
			},
			exists: function(s) {
				return new ki(s, {
					addons: []
				}).open().then(function(l) {
					return l.close(), !0
				}).catch("NoSuchDatabaseError", function() {
					return !1
				})
			},
			getDatabaseNames: function(s) {
				try {
					return l = ki.dependencies, h = l.indexedDB, l = l.IDBKeyRange, (uf(h) ? Promise.resolve(h.databases()).then(function(p) {
						return p.map(function(g) {
							return g.name
						}).filter(function(g) {
							return g !== wc
						})
					}) : cf(h, l).toCollection().primaryKeys()).then(s)
				} catch {
					return kt(new ue.MissingAPI)
				}
				var l, h
			},
			defineClass: function() {
				return function(s) {
					d(this, s)
				}
			},
			ignoreTransaction: function(s) {
				return Ce.trans ? yi(Ce.transless, s) : s()
			},
			vip: df,
			async: function(s) {
				return function() {
					try {
						var l = _f(s.apply(this, arguments));
						return l && typeof l.then == "function" ? l : ve.resolve(l)
					} catch (h) {
						return kt(h)
					}
				}
			},
			spawn: function(s, l, h) {
				try {
					var p = _f(s.apply(h, l || []));
					return p && typeof p.then == "function" ? p : ve.resolve(p)
				} catch (g) {
					return kt(g)
				}
			},
			currentTransaction: {
				get: function() {
					return Ce.trans || null
				}
			},
			waitFor: function(s, l) {
				return s = ve.resolve(typeof s == "function" ? ki.ignoreTransaction(s) : s).timeout(l || 6e4), Ce.trans ? Ce.trans.waitFor(s) : s
			},
			Promise: ve,
			debug: {
				get: function() {
					return xn
				},
				set: function(s) {
					pc(s)
				}
			},
			derive: A,
			extend: d,
			props: v,
			override: b,
			Events: Na,
			on: Eo,
			liveQuery: Gp,
			extendObservabilitySet: jc,
			getByKeyPath: $,
			setByKeyPath: H,
			delByKeyPath: function(s, l) {
				typeof l == "string" ? H(s, l, void 0) : "length" in l && [].map.call(l, function(h) {
					H(s, h, void 0)
				})
			},
			shallowClone: q,
			deepClone: me,
			getObjectDiff: gf,
			cmp: Ke,
			asap: L,
			minKey: -1 / 0,
			addons: [],
			connections: vs,
			errnames: Le,
			dependencies: Lc,
			cache: Si,
			semVer: "4.3.0",
			version: "4.3.0".split(".").map(function(s) {
				return parseInt(s)
			}).reduce(function(s, l, h) {
				return s + l / Math.pow(10, 2 * h)
			})
		})), ki.maxKey = za(ki.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Eo(Ba, function(s) {
			Ao || (s = new CustomEvent(tf, {
				detail: s
			}), Ao = !0, dispatchEvent(s), Ao = !1)
		}), addEventListener(tf, function(s) {
			s = s.detail, Ao || Sf(s)
		}));
		var xs, Ao = !1,
			Xp = function() {};
		return typeof BroadcastChannel < "u" && ((Xp = function() {
			(xs = new BroadcastChannel(tf)).onmessage = function(s) {
				return s.data && Sf(s.data)
			}
		})(), typeof xs.unref == "function" && xs.unref(), Eo(Ba, function(s) {
			Ao || xs.postMessage(s)
		})), typeof addEventListener < "u" && (addEventListener("pagehide", function(s) {
			if (!Qr.disableBfCache && s.persisted) {
				xn && console.debug("Dexie: handling persisted pagehide"), xs != null && xs.close();
				for (var l = 0, h = vs; l < h.length; l++) h[l].close({
					disableAutoOpen: !1
				})
			}
		}), addEventListener("pageshow", function(s) {
			!Qr.disableBfCache && s.persisted && (xn && console.debug("Dexie: handling persisted pageshow"), Xp(), Sf({
				all: new Qt(-1 / 0, [
					[]
				])
			}))
		})), ve.rejectionMapper = function(s, l) {
			return !s || s instanceof Ee || s instanceof TypeError || s instanceof SyntaxError || !s.name || !Fe[s.name] ? s : (l = new Fe[s.name](l || s.message, s), "stack" in s && k(l, "stack", {
				get: function() {
					return this.inner.stack
				}
			}), l)
		}, pc(xn), r(Qr, Object.freeze({
			__proto__: null,
			Dexie: Qr,
			Entity: bp,
			PropModification: Ra,
			RangeSet: Qt,
			add: function(s) {
				return new Ra({
					add: s
				})
			},
			cmp: Ke,
			default: Qr,
			liveQuery: Gp,
			mergeRanges: Va,
			rangesOverlap: zp,
			remove: function(s) {
				return new Ra({
					remove: s
				})
			},
			replacePrefix: function(s, l) {
				return new Ra({
					replacePrefix: [s, l]
				})
			}
		}), {
			default: Qr
		}), Qr
	})
})(wy);
var iD = wy.exports;
const Th = ci(iD),
	bv = Symbol.for("Dexie"),
	ud = globalThis[bv] || (globalThis[bv] = Th);
if (Th.semVer !== ud.semVer) throw new Error(`Two different versions of Dexie loaded in the same app: ${Th.semVer} and ${ud.semVer}`);
const {
	liveQuery: c$,
	mergeRanges: u$,
	rangesOverlap: d$,
	RangeSet: f$,
	cmp: h$,
	Entity: p$,
	PropModification: m$,
	replacePrefix: v$,
	add: _$,
	remove: g$,
	DexieYProvider: y$
} = ud;
class sD extends ud {
	constructor() {
		super("Tool42Database"), this.version(1).stores({
			cache: "key,timestamp",
			storage: "key",
			images: "url,timestamp",
			donutEvents: "++id,groupId",
			multiAccounts: "accountId"
		})
	}
}
const Wt = new sD;
class w1 {
	static async set(t, n) {
		Ne("AppStorage.set", t, n), await Wt.storage.put({
			key: t,
			value: n
		})
	}
	static async get(t) {
		Ne("AppStorage.get", t);
		const n = await Wt.storage.get(t);
		return Ne("AppStorage.get data", n), n ? n.value : null
	}
	static async delete(t) {
		Ne("AppStorage.delete", t), await Wt.storage.delete(t)
	}
}
class x1 {
	static async set(t, n) {
		Ne("VKStorage.set", t, n), Ft ? await Nr("VKWebAppStorageSet", {
			key: t,
			value: JSON.stringify(n)
		}) : Ty(`vk-storage:${t}`, JSON.stringify(n))
	}
	static async get(t) {
		if (Ne("VKStorage.get", t), Ft) try {
			const {
				keys: [{
					value: n
				}]
			} = await Nr("VKWebAppStorageGet", {
				keys: [t]
			});
			if (Ne("VKStorage.get value", n), n !== "") return JSON.parse(n)
		} catch (n) {
			Ne("VKStorage.get error", n == null ? void 0 : n.toString())
		} else try {
			const n = mp(`vk-storage:${t}`);
			if (Ne("VKStorage.get value", n), typeof n == "string" && n !== "") return JSON.parse(n)
		} catch (n) {
			Ne("VKStorage.get error", n == null ? void 0 : n.toString())
		}
		return null
	}
}
class As {
	static set(t, n) {
		const r = [];
		if (Array.isArray(n)) r.push(...n);
		else {
			const o = n.split(",").filter(Boolean);
			r.push(...o)
		}
		return Ne("setAccessToken", {
			scopesToSet: r
		}), w1.set("accessToken", {
			accessToken: t,
			scopes: r
		})
	}
	static get() {
		return w1.get("accessToken")
	}
	static delete() {
		return w1.delete("accessToken")
	}
}
class El {
	static set(t, n, r) {
		return Ne("CacheStorage.set", t, n), Wt.cache.put({
			key: t,
			timestamp: r * 60 + Gl(),
			data: n
		})
	}
	static async get(t) {
		Ne("CacheStorage.get", t);
		const n = await Wt.cache.get(t);
		return n ? n.data : null
	}
	static getAll() {
		return Wt.cache.toArray()
	}
	static deleteAll() {
		return Wt.cache.clear()
	}
	static async deleteOld() {
		(await Wt.cache.where("timestamp").below(Gl()).toArray()).forEach(({
			key: n
		}) => {
			Ne("Cache — remove old", n), Wt.cache.delete(n)
		})
	}
	static async deleteByPattern(t) {
		(await Wt.cache.filter(r => r.key.includes(t)).toArray()).forEach(({
			key: r
		}) => {
			Ne("Cache — remove by pattern", r), Wt.cache.delete(r)
		})
	}
}
class aD {
	static async get(t) {
		const n = await Wt.images.get(t);
		if (n) return n.data;
		const r = await fetch(t).then(o => o.blob()).then(o => new Promise((i, a) => {
			const c = new FileReader;
			c.onloadend = () => i(c.result), c.onerror = a, c.readAsDataURL(o)
		}));
		return await Wt.images.put({
			url: t,
			data: r,
			timestamp: 24 * 60 + Gl()
		}), r
	}
	static getAll() {
		return Wt.images.toArray()
	}
	static deleteAll() {
		return Wt.images.clear()
	}
	static async deleteOld() {
		(await Wt.images.where("timestamp").below(Gl()).toArray()).forEach(({
			url: n
		}) => {
			Ne("Images — remove old", n), Wt.images.delete(n)
		})
	}
}
const lD = () => !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches),
	cD = new URLSearchParams(window.location.search),
	Pn = Object.fromEntries(cD.entries()),
	xy = ["desktop_web", "web_external"].includes(Pn.vk_platform),
	Sy = ["mobile_web", "mvk_external", "mkv_external"].includes(Pn.vk_platform),
	ky = ["desktop_web_messenger"].includes(Pn.vk_platform),
	fp = ["mobile_ipad", "ipad_external"].includes(Pn.vk_platform),
	Yl = fp || ["mobile_iphone", "mobile_iphone_messenger", "iphone_external"].includes(Pn.vk_platform),
	hp = ["mobile_android", "mobile_android_messenger", "android_external"].includes(Pn.vk_platform),
	Ft = xy || Sy || fp || Yl || hp || ky || !!Pn.vk_platform,
	co = location.protocol === "chrome-extension:",
	by = !Ft && ["localhost", "tool42.app", "tool42.vercel.app", "tool42.hro.sh", "tool42.website.yandexcloud.net"].includes(location.hostname);

function Cy() {
	return Pn.vk_platform ? Pn.vk_platform : "site"
}

function _o() {
	return /iPad|iPhone|iPod/.test(navigator.userAgent) ? Dn.IOS : /android/i.test(navigator.userAgent) ? Dn.ANDROID : Dn.VKCOM
}
const uD = _o() === Dn.VKCOM;

function Nr(e, t = {}) {
	return Ft ? up.send(e, t) : !1
}

function Ey() {
	const e = document.createAttribute("platform");
	e.value = Cy(), document.body.attributes.setNamedItem(e)
}

function hl(e) {
	const t = document.createAttribute("scheme");
	if (t.value = e === "dark" ? "space_gray" : "bright_light", document.body.attributes.setNamedItem(t), window.setAppearance(e), Yl || hp) {
		const n = e === "light";
		Nr("VKWebAppSetViewSettings", {
			status_bar_style: n ? "dark" : "light",
			action_bar_color: n ? "#ffffff" : "#19191a",
			navigation_bar_color: n ? "#ffffff" : "#19191a"
		})
	}
}

function dd(e = 350) {
	return new Promise(t => {
		setTimeout(t, e)
	})
}

function Ay(e) {
	let r = e.replace(/( |^)\/\/.*$/gm, "").replace(/\n/g, " ");
	for (; r.includes("  ");) r = r.replace(/ {2}/g, " ");
	return r.trim()
}

function Cv(e) {
	if (e instanceof Error) return e.stack || e.message;
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e)
	} catch {
		return String(e)
	}
}

function pp(e, t) {
	if (Ne({
			error: e,
			executeErrors: t
		}), e) try {
		if (typeof e.error_msg == "string") return e.error_text || e.error_msg
	} catch (n) {
		Ne("Error get error text try 1", n == null ? void 0 : n.toString())
	}
	if (t) try {
		if (!!t.find(o => o.error_code === 29)) return fl("helpers.rate_limit");
		const r = t[t.length - 1];
		return r.error_text || r.error_msg
	} catch (n) {
		Ne("Error get error text try 2", n == null ? void 0 : n.toString())
	}
	return "Hmm... some error!"
}

function dD(e, t) {
	if (typeof(e == null ? void 0 : e.error_code) == "number") return e.error_code;
	const n = t == null ? void 0 : t[t.length - 1];
	return n == null ? void 0 : n.error_code
}

function Iy(e) {
	const t = e.toLowerCase();
	return ["api request failed", "vk page bridge timeout", "chrome runtime error", "network error", "failed to fetch", "timeout"].some(n => t.includes(n))
}

function Py(e) {
	const n = ["owner_id", "domain", "peer_id", "user_id", "group_id", "offset", "count", "filter"].filter(r => r in e).map(r => `${r}=${e[r]}`);
	return n.length ? ` (${n.join(", ")})` : ""
}
const Oy = 3;

function Ev(e, t, n, r) {
	const o = pp(n, r),
		i = dD(n, r),
		a = i ? `Ошибка VK API ${i}` : "Ошибка VK API",
		c = Py(t);
	return Iy(o) ? `${e}${c}: ${o}` : `${e}${c}: ${a}. ${o}`
}

function Av(e, t, n, r, o = 0) {
	const i = e === "wall.get",
		a = typeof t.offset == "number" ? t.offset : Number(t.offset || 0),
		c = i ? Math.min(3e3, 1e3 + Math.floor(a / 500) * 250) : 0;
	if (n != null && n.error_code && [6].includes(n.error_code) || r != null && r.some(f => f.error_code === 6)) return {
		shouldRetry: !0,
		delay: Math.max(350, c)
	};
	if (o >= Oy) return {
		shouldRetry: !1,
		delay: 0
	};
	const d = pp(n, r);
	return Iy(d) ? {
		shouldRetry: !0,
		delay: Math.max(1e3, c)
	} : {
		shouldRetry: !1,
		delay: 0
	}
}

function Iv(e, t, n, r, o, i) {
	const a = pp(o, i),
		c = Py(t),
		d = (r / 1e3).toFixed(r % 1e3 === 0 ? 0 : 1);
	window.showSnackbar(`Повторная попытка ${n}/${Oy}: ${e}${c}. ${a}. Ждем ${d} сек.`, !1)
}

function fD() {
	const e = new Date().getTime();
	return {
		stop: async () => {
			const n = new Date().getTime() - e;
			Ne("Time process", n);
			const r = 350 - n;
			r > 0 && (Ne("Sleep", r), await dd(r))
		}
	}
}
async function hD(e, t) {
	var r;
	const n = globalThis.chrome;
	if (!((r = n == null ? void 0 : n.runtime) != null && r.sendMessage)) throw new Error("Chrome runtime is not available");
	return await new Promise((o, i) => {
		var c;
		const a = (c = n.runtime) == null ? void 0 : c.sendMessage;
		if (!a) {
			i(new Error("Chrome runtime sendMessage is not available"));
			return
		}
		a({
			type: "tool42-vk-api-call",
			method: e,
			params: t
		}, d => {
			var m;
			const f = (m = n.runtime) == null ? void 0 : m.lastError;
			if (f) {
				i(new Error(f.message || "Chrome runtime error"));
				return
			}
			o(d)
		})
	})
}
async function ql(e, t = {}, {
	withoutError: n = !1,
	cacheTime: r = 0
} = {}, o = 0) {
	const i = {
		...t
	};
	if (t.lang = "ru", t.v || (t.v = 5.201), !co && !t.access_token) {
		const v = await As.get();
		v && (t.access_token = v.accessToken)
	}
	if (e === "execute" && (t.code = Ay(String(t.code))), Ne("API REQUEST", e, {
			...t,
			access_token: "TOKEN"
		}), window.blockAPISend) throw Ne("BLOCK API REQUEST", e), new Error("Block API request");
	const a = `API:${e}:${await Ry(t)}`;
	if (r) {
		const v = await El.get(a);
		if (v) return Ne("API CACHE RESPONSE", e, v), v
	}
	const c = fD();
	if (Ft) return await Nr("VKWebAppCallAPIMethod", {
		method: e,
		params: t
	}).then(async v => {
		Ne("API RESULT", e, v.response || v), await c.stop();
		const k = v && typeof v == "object" && "response" in v ? v.response : v;
		return r && k !== void 0 && !(v && typeof v == "object" && "error" in v) && El.set(a, k, r), k ?? v
	}).catch(async v => {
		Ne("API ERROR", e, v), await c.stop();
		try {
			const x = Av(e, i, v.error, v.execute_errors, o);
			if (x.shouldRetry) return Iv(e, i, o + 1, x.delay, v.error, v.execute_errors), await dd(x.delay), await ql(e, i, {
				withoutError: n,
				cacheTime: r
			}, o + 1);
			if (v.error || v.execute_errors) {
				const k = Ev(e, i, v.error, v.execute_errors);
				n || window.showSnackbar(k, !1), Pv(v.error, v.execute_errors, e, t), Nh({
					method: e,
					error: k,
					params: i,
					rawError: v.error,
					executeErrors: v.execute_errors,
					retryCount: o
				})
			}
		} catch (x) {
			Ne("API SNACKBAR ERROR", e, Cv(x))
		}
		throw v.error ?? v.execute_errors ?? v
	});
	let d = null;
	if (co) d = await hD(e, t), await c.stop();
	else throw new Error("Unsupported VK transport for current environment");
	const f = d && typeof d == "object" ? d : {},
		_ = d && typeof d == "object" && "response" in d ? f.response : d;
	r && _ !== void 0 && !f.error && El.set(a, _, r), Ne("API RESPONSE", e, _ ?? d);
	try {
		const v = Av(e, i, f.error, f.execute_errors, o);
		if (v.shouldRetry) return Iv(e, i, o + 1, v.delay, f.error, f.execute_errors), await dd(v.delay), await ql(e, i, {
			withoutError: n,
			cacheTime: r
		}, o + 1);
		if (f.error || f.execute_errors) {
			if (e === "execute" && f.response !== void 0) return _;
			const k = Ev(e, i, f.error, f.execute_errors);
			throw n || window.showSnackbar(k, !1), Pv(f.error, f.execute_errors, e, t), Nh({
				method: e,
				error: k,
				params: i,
				rawError: f.error,
				executeErrors: f.execute_errors,
				retryCount: o
			}), f.error ?? {
				execute_errors: f.execute_errors
			}
		}
	} catch (v) {
		throw Ne("API SNACKBAR ERROR", e, Cv(v)), v
	}
	return _ ?? d
}

function Pv(e, t, n, r) {
	const o = () => {
		({
			...r
		})
	};
	e && o(), Array.isArray(t) && t.forEach(o)
}

function Rh(e) {
	return e ? {
		href: e,
		target: "_blank"
	} : null
}

function Ov(e) {
	const t = ["access_token", "accessToken", "id_token", "refresh_token", "refreshToken", "deviceId", "userHash", "code", "sign", "hash"];
	for (const n of t) {
		const r = n.replace(/[A-Z]/g, o => "_" + o).toUpperCase();
		e = e.replace(new RegExp(`"${n}":"([\\w.-]+)"`, "gm"), `"${n}":"${r}"`), e = e.replace(new RegExp(`${n}=([\\w.-]+)`, "gm"), `${n}=${r}`)
	}
	return e.replace(/"checkHash":"(\d+)\/(\d+)\/\w+"/gm, '"checkHash":"HASH"')
}

function Ne(...e) {
	const t = [],
		n = Object.keys(e).map(r => {
			const o = e[r];
			if (o === void 0) return "undefined";
			if (typeof o == "string") {
				const a = Ov(o);
				return t.push(a), a
			}
			const i = Ov(JSON.stringify(o));
			return t.push(JSON.parse(i)), i
		}).join(" ");
	window.logs.push(n), console.log(...t)
}

function My(e, t = !1) {
	return e === null ? 0 : `${e}`.replace(/(\d)(?=(\d{3})+$)/g, t ? "$1 " : "$1 ")
}

function Hs(e, t) {
	const n = [2, 0, 1, 1, 1, 2];
	return t[e % 100 > 4 && e % 100 < 20 ? 2 : n[e % 10 < 5 ? e % 10 : 5]]
}

function pD(e, t) {
	return `${My(e)} ${Hs(e,t)}`
}

function mD(e, t) {
	if (t === 0) return 0;
	const n = Math.round(100 * e / t);
	return n > 100 ? 100 : n
}

function vD(e) {
	return e && typeof e == "object" && "execute_errors" in e && Array.isArray(e.execute_errors) ? !!e.execute_errors.find(t => t.error_code === 29) : !1
}

function Mv(e) {
	var t, n;
	return (t = e.online_info) != null && t.visible && e.online_info.last_seen ? e.online_info.last_seen : (n = e.last_seen) == null ? void 0 : n.time
}

function _D(e) {
	const t = ["recently", "last_week", "last_month", "long_ago"];
	return e.filter(n => {
		var r, o;
		return ((r = n.online_info) == null ? void 0 : r.visible) === !1 && typeof((o = n.online_info) == null ? void 0 : o.status) == "string" && t.includes(n.online_info.status)
	})
}

function gD(e) {
	const t = e.filter(m => m.online_info && m.online_info.visible === !1),
		n = e.filter(m => {
			var _;
			return ((_ = m.online_info) == null ? void 0 : _.status) === "recently" && m.can_access_closed === !0
		}),
		r = e.filter(m => {
			var _;
			return ((_ = m.online_info) == null ? void 0 : _.status) === "not_show" && m.can_access_closed === !0
		}),
		o = t.reduce((m, _) => {
			var x;
			const v = ((x = _.online_info) == null ? void 0 : x.status) || "unknown";
			return m[v] = (m[v] || 0) + 1, m
		}, {}),
		i = e.filter(m => !Mv(m));
	Ne("Users with hidden online_info", t), Ne("Users with online_info.status = recently and can_access_closed = true", n), Ne("Users with online_info.status = not_show and can_access_closed = true", r), Ne("Hidden online_info statuses", o), Ne("Users without visible activity time", i);
	const a = Math.floor(Number(new Date) / 1e3),
		c = 86400,
		d = e.filter(m => {
			var _, v;
			return ((_ = m.online_info) == null ? void 0 : _.visible) === !1 && ((v = m.online_info) == null ? void 0 : v.status) === "not_show"
		});
	return [{
		key: "1day",
		period: c
	}, {
		key: "3days",
		period: c * 3
	}, {
		key: "week",
		period: c * 7
	}, {
		key: "2weeks",
		period: c * 14
	}, {
		key: "3weeks",
		period: c * 21
	}, {
		key: "month",
		period: c * 30
	}].map(({
		key: m,
		period: _
	}) => {
		const v = e.filter(x => {
			const k = Mv(x);
			return k && a - k > _ ? !0 : d.includes(x)
		});
		return {
			period: _,
			key: m,
			users: v
		}
	})
}

function yD(e) {
	const t = e.filter(n => !!n.last_seen);
	return !!(e.length && t.length === 0)
}

function wD(e, t) {
	Object.keys(t).forEach(n => {
		e[n] = t[n]
	})
}

function xD(e, t) {
	return Math.floor(100 * Number(e) / Number(t))
}

function jy(e) {
	const t = Math.floor(e / 3600),
		n = e % 3600,
		r = Math.floor(n / 60),
		o = n % 60,
		i = Math.floor(t / 24),
		a = t % 24;
	return {
		days: i,
		hours: a,
		minutes: r,
		seconds: o
	}
}

function SD(e, t = !1) {
	const n = jy(e),
		r = [];
	return n.days && r.push(`${n.days} ${Hs(n.days,ou("helpers.time_decline.days"))}`), n.hours && r.push(`${n.hours} ${Hs(n.hours,ou("helpers.time_decline.hours"))}`), n.minutes && r.push(`${n.minutes} ${Hs(n.minutes,ou("helpers.time_decline.minutes"))}`), n.seconds && r.push(`${n.seconds} ${Hs(n.seconds,ou("helpers.time_decline.seconds"))}`), t ? r : r.join(" ")
}

function kD(e, t = 25) {
	const n = [];
	for (; e.length;) n.push(e.splice(0, t));
	return n
}

function bD(e) {
	const t = "fourtwo";
	let n = 0;
	const r = e.split("");
	for (let o = 0; o < r.length; o++) r[o] !== " " && (r[o] === r[o].toUpperCase() ? r[o] = t[n].toUpperCase() : r[o] = t[n], n++, n === t.length && (n = 0));
	return r.join("")
}

function CD() {
	return !!(!Ft || Pn.vk_has_profile_button === "1" || Pn.vk_profile_button_forbidden === "1" || mp("buttonInstalled"))
}

function ED(e) {
	Ft ? up.send("VKWebAppCopyText", {
		text: e
	}) : navigator.clipboard.writeText(e)
}

function Ty(e, t) {
	window.isLocalStorageAvailable ? localStorage.setItem(e, t) : window.incognitoStorage[e] = t
}

function mp(e) {
	return window.isLocalStorageAvailable ? localStorage.getItem(e) : window.incognitoStorage[e]
}

function AD(e) {
	window.isLocalStorageAvailable ? localStorage.removeItem(e) : delete window.incognitoStorage[e]
}

function ID(e, t) {
	return new Promise((n, r) => {
		let i = 0,
			a = 0;
		const c = [];

		function d(m, _, v) {
			i++, m().then(x => {
				c[_] = x, i--, f()
			}).catch(x => {
				v > 0 ? (Ne(`Retrying task ${_}, attempts left: ${v}`), d(m, _, v - 1)) : r(`Task ${_} failed after 3 retries: ${x}`), i--, f()
			})
		}

		function f() {
			if (a >= e.length && i === 0) {
				n(c);
				return
			}
			if (!(i >= t) && a < e.length) {
				const m = a,
					_ = e[m];
				a++, d(_, m, 3), f()
			}
		}
		f()
	})
}
async function Ry(e) {
	const t = JSON.stringify(e),
		r = new TextEncoder().encode(t),
		o = await crypto.subtle.digest("SHA-256", r);
	return Array.from(new Uint8Array(o)).map(a => a.toString(16).padStart(2, "0")).join("")
}

function Gl() {
	const e = Date.now();
	return Math.floor(e / 1e3)
}

function PD(e) {
	document.body.scrollTo({
		top: e,
		behavior: "smooth"
	})
}

function OD() {
	document.querySelectorAll(".vkuiInternalHorizontalScroll > div").forEach(t => {
		t.scrollTo(0, 0)
	})
}

function Nh(e) {
	const t = ["access_token", "v", "code", "lang"],
		r = {
			params: Object.fromEntries(Object.entries(e.params).filter(([o]) => !t.includes(o))),
			retryCount: e.retryCount ?? 0,
			rawError: e.rawError ?? null,
			executeErrors: e.executeErrors ?? null
		};
	window.modalErrors = [{
		method: e.method,
		error: e.error,
		params: JSON.stringify(r),
		date: new Date
	}, ...window.modalErrors.slice(0, 99)]
}

function MD() {
	window.onscroll = () => {
		const e = document.getElementById("lazy-more");
		(e == null ? void 0 : e.disabled) === !1 && window.innerHeight + window.scrollY >= document.body.scrollHeight - 300 && e.click()
	}
}

function jD() {
	const e = navigator.language,
		t = Intl.DateTimeFormat().resolvedOptions().timeZone,
		n = new Intl.NumberFormat().resolvedOptions().locale;
	let r = e.split("-")[1] || n.split("-")[1];
	const o = {
		"Europe/Andorra": "AD",
		"Asia/Dubai": "AE",
		"Asia/Kabul": "AF",
		"America/Antigua": "AG",
		"America/Anguilla": "AI",
		"Europe/Tirane": "AL",
		"Asia/Yerevan": "AM",
		"Africa/Luanda": "AO",
		"Antarctica/Casey": "AQ",
		"America/Argentina/Buenos_Aires": "AR",
		"Europe/Vienna": "AT",
		"Australia/Sydney": "AU",
		"Asia/Baku": "AZ",
		"Europe/Sarajevo": "BA",
		"America/Barbados": "BB",
		"Asia/Dhaka": "BD",
		"Europe/Brussels": "BE",
		"Africa/Ouagadougou": "BF",
		"Europe/Sofia": "BG",
		"Asia/Bahrain": "BH",
		"Africa/Bujumbura": "BI",
		"Africa/Porto-Novo": "BJ",
		"America/La_Paz": "BO",
		"America/Sao_Paulo": "BR",
		"America/Nassau": "BS",
		"Asia/Thimphu": "BT",
		"Africa/Gaborone": "BW",
		"Europe/Minsk": "BY",
		"America/Belize": "BZ",
		"America/Vancouver": "CA",
		"Asia/Shanghai": "CN",
		"Europe/Prague": "CZ",
		"Europe/Berlin": "DE",
		"Europe/Copenhagen": "DK",
		"America/Santo_Domingo": "DO",
		"Africa/Cairo": "EG",
		"Europe/Madrid": "ES",
		"Europe/Helsinki": "FI",
		"Europe/Paris": "FR",
		"Europe/London": "GB",
		"Europe/Athens": "GR",
		"America/Guatemala": "GT",
		"Asia/Hong_Kong": "HK",
		"Europe/Budapest": "HU",
		"Asia/Jakarta": "ID",
		"Asia/Tehran": "IR",
		"Asia/Baghdad": "IQ",
		"Europe/Dublin": "IE",
		"Asia/Tokyo": "JP",
		"Asia/Seoul": "KR",
		"Asia/Kuala_Lumpur": "MY",
		"Asia/Manila": "PH",
		"Europe/Warsaw": "PL",
		"Europe/Lisbon": "PT",
		"Europe/Bucharest": "RO",
		"Europe/Moscow": "RU",
		"Asia/Riyadh": "SA",
		"Europe/Belgrade": "RS",
		"Europe/Bratislava": "SK",
		"Europe/Ljubljana": "SI",
		"Europe/Stockholm": "SE",
		"Asia/Singapore": "SG",
		"Europe/Istanbul": "TR",
		"Asia/Taipei": "TW",
		"Europe/Kyiv": "UA",
		"America/New_York": "US",
		"America/Los_Angeles": "US",
		"America/Chicago": "US",
		"America/Denver": "US",
		"America/Phoenix": "US",
		"America/Anchorage": "US",
		"Pacific/Honolulu": "US",
		"America/Montevideo": "UY",
		"America/Caracas": "VE",
		"Asia/Ho_Chi_Minh": "VN",
		"Africa/Johannesburg": "ZA"
	};
	return !r && o[t] && (r = o[t]), r || "UNKNOWN"
}

function TD(e) {
	const t = [...e];
	for (let n = t.length - 1; n > 0; n--) {
		const r = Math.floor(Math.random() * (n + 1));
		[t[n], t[r]] = [t[r], t[n]]
	}
	return t
}

function RD(e) {
	return new Intl.DateTimeFormat("ru", {
		day: "numeric",
		month: "long"
	}).format(e)
}
async function Ny() {
	return {
		hasPremium: !0
	}
}
const w$ = Object.freeze(Object.defineProperty({
	__proto__: null,
	VK: ql,
	VKBridgeSend: Nr,
	addModalError: Nh,
	checkRateLimit: vD,
	copyToClipboard: ED,
	dd: Ne,
	decline: Hs,
	declineAndFormat: pD,
	formatDate: RD,
	formatNumber: My,
	getAppPlatform: Cy,
	getChunks: kD,
	getCurrentTimestamp: Gl,
	getDistortionString: bD,
	getLocalStorage: mp,
	getNotShowOnlineUsers: _D,
	getPercent: xD,
	getPlatform: _o,
	getPremiumStatus: Ny,
	getProgressCount: mD,
	getTextTime: SD,
	getTime: jy,
	getTimeUsers: gD,
	getUserCountryCode: jD,
	hashObject: Ry,
	initLazyLoad: MD,
	initParams: Pn,
	isAlreadyInstallPageButton: CD,
	isDarkMode: lD,
	isDesktopMessenger: ky,
	isExtension: co,
	isHiddenLastSeen: yD,
	isHostedSite: by,
	isMiniApp: Ft,
	isMiniAppAndroid: hp,
	isMiniAppIOS: Yl,
	isMiniAppIPad: fp,
	isMiniAppMVK: Sy,
	isMiniAppWeb: xy,
	isWebPlatform: uD,
	linkProps: Rh,
	mergeObject: wD,
	minifyCode: Ay,
	parallelLimit: ID,
	removeLocalStorage: AD,
	resetHorizontalScroll: OD,
	scrollToPosition: PD,
	setLocalStorage: Ty,
	setPlatform: Ey,
	setTheme: hl,
	shuffleArray: TD,
	sleep: dd
}, Symbol.toStringTag, {
	value: "Module"
}));
var xu, jv = W0;
xu = jv.createRoot, jv.hydrateRoot;
const ND = "modulepreload",
	LD = function(e, t) {
		return new URL(e, t).href
	},
	Tv = {},
	xe = function(t, n, r) {
		let o = Promise.resolve();
		if (n && n.length > 0) {
			const a = document.getElementsByTagName("link"),
				c = document.querySelector("meta[property=csp-nonce]"),
				d = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
			o = Promise.allSettled(n.map(f => {
				if (f = LD(f, r), f in Tv) return;
				Tv[f] = !0;
				const m = f.endsWith(".css"),
					_ = m ? '[rel="stylesheet"]' : "";
				if (!!r)
					for (let k = a.length - 1; k >= 0; k--) {
						const A = a[k];
						if (A.href === f && (!m || A.rel === "stylesheet")) return
					} else if (document.querySelector(`link[href="${f}"]${_}`)) return;
				const x = document.createElement("link");
				if (x.rel = m ? "stylesheet" : ND, m || (x.as = "script"), x.crossOrigin = "", x.href = f, d && x.setAttribute("nonce", d), document.head.appendChild(x), m) return new Promise((k, A) => {
					x.addEventListener("load", k), x.addEventListener("error", () => A(new Error(`Unable to preload CSS for ${f}`)))
				})
			}))
		}

		function i(a) {
			const c = new Event("vite:preloadError", {
				cancelable: !0
			});
			if (c.payload = a, window.dispatchEvent(c), !c.defaultPrevented) throw a
		}
		return o.then(a => {
			for (const c of a || []) c.status === "rejected" && i(c.reason);
			return t().catch(i)
		})
	};
var DD = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r(py)
	})(pn, function(n) {
		function r(k) {
			return k && typeof k == "object" && "default" in k ? k : {
				default: k
			}
		}
		var o = r(n),
			i = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
			a = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			c = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
			d = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),
			f = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

		function m(k, A, C) {
			var y, w;
			return C === "m" ? A ? "минута" : "минуту" : k + " " + (y = +k, w = {
				mm: A ? "минута_минуты_минут" : "минуту_минуты_минут",
				hh: "час_часа_часов",
				dd: "день_дня_дней",
				MM: "месяц_месяца_месяцев",
				yy: "год_года_лет"
			} [C].split("_"), y % 10 == 1 && y % 100 != 11 ? w[0] : y % 10 >= 2 && y % 10 <= 4 && (y % 100 < 10 || y % 100 >= 20) ? w[1] : w[2])
		}
		var _ = function(k, A) {
			return f.test(A) ? i[k.month()] : a[k.month()]
		};
		_.s = a, _.f = i;
		var v = function(k, A) {
			return f.test(A) ? c[k.month()] : d[k.month()]
		};
		v.s = d, v.f = c;
		var x = {
			name: "ru",
			weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
			weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			months: _,
			monthsShort: v,
			weekStart: 1,
			yearStart: 4,
			formats: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., H:mm",
				LLLL: "dddd, D MMMM YYYY г., H:mm"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				m,
				mm: m,
				h: "час",
				hh: m,
				d: "день",
				dd: m,
				M: "месяц",
				MM: m,
				y: "год",
				yy: m
			},
			ordinal: function(k) {
				return k
			},
			meridiem: function(k) {
				return k < 4 ? "ночи" : k < 12 ? "утра" : k < 17 ? "дня" : "вечера"
			}
		};
		return o.default.locale(x, null, !0), x
	})
})(DD);
const Rv = e => u.jsx(we, {
		viewBox: "0 0 24 24",
		width: 24,
		height: 24,
		vkuiIconId: "back_24",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M24 0H0v24h24z"
			}), u.jsx("path", {
				fill: "currentColor",
				d: "m7.8 11 4.9-4.9a.99.99 0 0 0-1.4-1.4l-6.593 6.593a1 1 0 0 0 0 1.414L11.3 19.3a.99.99 0 0 0 1.4-1.4L7.8 13H20a1 1 0 0 0 0-2z"
			})]
		})
	}),
	Lh = e => u.jsx(we, {
		viewBox: "0 0 24 24",
		width: 24,
		height: 24,
		vkuiIconId: "cancel_24",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			d: "M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z"
		})
	}),
	BD = e => u.jsx(we, {
		viewBox: "0 0 24 24",
		width: 24,
		height: 24,
		vkuiIconId: "favorite_24",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h24v24H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "m15.343 8.485 4.43.425c1.541.148 2.014 1.653.824 2.643l-3.468 2.882 1.287 4.695c.423 1.542-.889 2.475-2.202 1.547L12 17.701l-4.214 2.976c-1.308.925-2.625-.005-2.202-1.547l1.287-4.695-3.468-2.882c-1.195-.994-.724-2.495.824-2.643l4.429-.425 1.95-4.499c.612-1.408 2.177-1.408 2.787 0z"
			})]
		})
	}),
	zD = e => u.jsx(we, {
		viewBox: "0 0 24 24",
		width: 24,
		height: 24,
		vkuiIconId: "favorite_outline_24",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M12.554 4.694a.6.6 0 0 0-1.108 0l-1.614 3.9a.9.9 0 0 1-.774.554l-4.125.266a.6.6 0 0 0-.357 1.05l3.267 2.859a.9.9 0 0 1 .282.888l-.93 3.852a.6.6 0 0 0 .883.66l3.472-2.003a.9.9 0 0 1 .9 0l3.472 2.004a.6.6 0 0 0 .883-.661l-.93-3.852a.9.9 0 0 1 .282-.888l3.267-2.858a.6.6 0 0 0-.357-1.05l-4.125-.267a.9.9 0 0 1-.774-.554zm-2.772-.689c.818-1.976 3.618-1.976 4.436 0l1.4 3.383 3.565.23c2.136.138 3.037 2.792 1.426 4.201l-2.856 2.5.802 3.322c.494 2.05-1.706 3.696-3.533 2.642L12 18.539l-3.022 1.744C7.15 21.337 4.95 19.69 5.445 17.64l.802-3.322-2.856-2.5c-1.611-1.41-.71-4.063 1.426-4.201l3.566-.23z",
			clipRule: "evenodd"
		})
	}),
	$D = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "add_square_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M17.924 3c1.958.02 2.955.232 3.988.784a5.54 5.54 0 0 1 2.3 2.3c.553 1.034.764 2.03.785 3.989v7.851c-.021 1.958-.232 2.955-.785 3.988a5.54 5.54 0 0 1-2.3 2.3c-1.033.553-2.03.764-3.988.785h-7.851c-1.959-.021-2.955-.232-3.988-.785a5.54 5.54 0 0 1-2.3-2.3c-.553-1.033-.764-2.03-.785-3.988v-7.851c.02-1.959.232-2.955.784-3.988a5.54 5.54 0 0 1 2.3-2.3c1.034-.553 2.03-.764 3.989-.785zm-.335 1.998h-7.181l-.557.005c-1.48.028-2.142.18-2.823.545-.64.343-1.137.84-1.48 1.48-.364.681-.517 1.343-.545 2.823l-.005.557v7.18l.005.558c.028 1.48.18 2.142.545 2.823.343.64.84 1.137 1.48 1.48.681.364 1.343.516 2.823.544l.557.005h7.18l.558-.005c1.48-.028 2.142-.18 2.823-.544a3.54 3.54 0 0 0 1.48-1.48c.364-.681.516-1.344.544-2.823l.005-.557v-7.181l-.005-.557c-.028-1.48-.18-2.142-.544-2.823a3.54 3.54 0 0 0-1.48-1.48c-.681-.364-1.344-.517-2.823-.545zM14 9a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 1-1"
			})]
		})
	}),
	FD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "article_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M17.59 3c2.183 0 3.233.203 4.324.786a5.54 5.54 0 0 1 2.3 2.3c.583 1.091.786 2.14.786 4.324v7.18c0 2.183-.203 3.233-.786 4.324a5.54 5.54 0 0 1-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.54 5.54 0 0 1-2.3-2.3C3.203 20.823 3 19.774 3 17.59v-7.18c0-2.183.203-3.233.786-4.324a5.54 5.54 0 0 1 2.3-2.3C7.177 3.203 8.226 3 10.41 3zm0 2h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.408.76-.55 1.499-.55 3.38v7.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.76.408 1.499.55 3.38.55h7.18c1.881 0 2.62-.142 3.38-.55a3.54 3.54 0 0 0 1.48-1.48c.408-.76.55-1.499.55-3.38v-7.18c0-1.881-.142-2.62-.55-3.38a3.54 3.54 0 0 0-1.48-1.48c-.76-.408-1.499-.55-3.38-.55M13 17.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm6-4.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm0-4.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
		})
	}),
	VD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "block_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M20.329 21.743 6.257 7.67A9.96 9.96 0 0 0 4 14c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.329-2.257m1.414-1.414A9.96 9.96 0 0 0 24 14c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257zM14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12"
			})]
		})
	}),
	HD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "calendar_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			d: "M19 1a1 1 0 0 1 1 1v1.16c.84.133 1.384.35 1.93.641A5.45 5.45 0 0 1 24.2 6.07c.475.889.748 1.77.794 3.93H25v7.308l-.005.61c-.041 2.22-.315 3.113-.796 4.012a5.45 5.45 0 0 1-2.269 2.27c-.977.522-1.947.801-4.622.801h-6.616l-.61-.005c-2.22-.041-3.113-.315-4.013-.796a5.45 5.45 0 0 1-2.268-2.269c-.502-.938-.778-1.87-.8-4.309L3 10.691V10c.053-2.16.326-3.042.801-3.93A5.45 5.45 0 0 1 6.07 3.8 5.7 5.7 0 0 1 8 3.16V2a1 1 0 0 1 2 0v1.007Q10.324 3 10.692 3h6.616q.367 0 .694.007L18 2a1 1 0 0 1 1-1m3.999 11H5v5.591l.01.57c.039 1.506.198 2.159.555 2.826q.504.944 1.448 1.448c.746.4 1.473.551 3.396.564h7.182l.57-.009c1.506-.039 2.159-.198 2.826-.555a3.45 3.45 0 0 0 1.448-1.448c.4-.746.551-1.473.564-3.396zm-5.408-7H10.41l-.41.007V6a1 1 0 0 1-2 0v-.807c-.381.087-.683.21-.987.372a3.45 3.45 0 0 0-1.448 1.448c-.37.69-.527 1.365-.559 2.986L22.993 10l-.003-.16c-.039-1.507-.198-2.16-.555-2.827a3.45 3.45 0 0 0-1.448-1.448 3.8 3.8 0 0 0-.986-.372L20 6a1 1 0 1 1-2 0l.002-.994-.41-.005Z"
		})
	}),
	Nv = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "chats_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "nonzero",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				d: "M23.706 9.662C25.171 11.114 26 12.998 26 15a7.25 7.25 0 0 1-.96 3.599c.101.603.393 1.519.876 2.716l.258.624.057.168.025.098a1.4 1.4 0 0 1-1.446 1.675c-1.908-.1-3.43-.566-4.54-1.424A10 10 0 0 1 17 23a10 10 0 0 1-3.332-.566 1 1 0 0 1 .667-1.885c.838.296 1.738.451 2.665.451a7.9 7.9 0 0 0 3.087-.615 1 1 0 0 1 1.1.218c.55.555 1.371.941 2.481 1.14l.284.047c-.574-1.456-.888-2.555-.943-3.343a1 1 0 0 1 .153-.604A5.3 5.3 0 0 0 24 15c0-1.454-.607-2.832-1.702-3.918a1 1 0 1 1 1.408-1.42M11 3c4.943 0 9 3.55 9 8s-4.057 8-9 8a10 10 0 0 1-3.27-.544c-1.11.858-2.632 1.323-4.54 1.424a1.4 1.4 0 0 1-1.446-1.675l.025-.098.057-.168.133-.319c.516-1.244.84-2.209.972-2.864l.03-.157-.151-.279A7.2 7.2 0 0 1 2 11c0-4.45 4.057-8 9-8m0 2c-3.893 0-7 2.718-7 6 0 1.007.29 1.976.838 2.843a1 1 0 0 1 .153.604c-.05.732-.325 1.732-.824 3.036l-.119.307.284-.046c1.11-.2 1.932-.586 2.481-1.141a1 1 0 0 1 1.1-.218c.952.403 2 .615 3.087.615 3.893 0 7-2.718 7-6s-3.107-6-7-6"
			})]
		})
	}),
	WD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "check_circle_device_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M18 10a8 8 0 1 1 0 16 8 8 0 0 1 0-16m-5.128-8c1.777 0 2.648.168 3.553.652a4.63 4.63 0 0 1 1.923 1.923c.369.69.545 1.335.617 2.361a1 1 0 1 1-1.996.138c-.052-.752-.153-1.123-.385-1.556a2.64 2.64 0 0 0-1.102-1.102c-.508-.272-1.003-.388-2.125-.411L12.873 4l-3.006.001c-1.29.016-1.803.123-2.35.415a2.64 2.64 0 0 0-1.1 1.102c-.273.508-.389 1.003-.412 2.126L6 8.128l.001 12.005c.016 1.29.123 1.803.415 2.35q.384.717 1.102 1.1c.503.27.958.376 2.018.409a1 1 0 0 1-.061 1.999c-1.35-.042-2.104-.218-2.9-.643a4.63 4.63 0 0 1-1.923-1.923c-.43-.806-.61-1.58-.645-2.99l-.005-.29L4 8.128c0-1.777.168-2.648.652-3.553a4.63 4.63 0 0 1 1.923-1.923c.806-.43 1.58-.61 2.99-.645l.29-.005zM18 12a6 6 0 1 0 0 12 6 6 0 0 0 0-12m3.536 3.564a.9.9 0 0 1 .08 1.18l-.08.092-4 4a.9.9 0 0 1-1.18.08l-.092-.08-1.6-1.6a.9.9 0 0 1 1.18-1.353l.092.08.964.964 3.364-3.363a.9.9 0 0 1 1.272 0"
			})]
		})
	}),
	KD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "check_circle_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "nonzero",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				d: "M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2m0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4m4.29 6.29c.39-.39 1.03-.39 1.42 0s.39 1.03 0 1.42l-7.003 6.997a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414L12 16.586Z"
			})]
		})
	}),
	eo = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "clear_data_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M28 0H0v28h28z"
			}), u.jsxs("g", {
				fillRule: "nonzero",
				children: [u.jsx("path", {
					d: "M0 0h28v28H0z"
				}), u.jsx("path", {
					fill: "currentColor",
					d: "M25.207 2.793a1 1 0 0 1 0 1.414l-2.191 2.191a5 5 0 0 1-.636 6.292l-.374.374c.348 4.356-1.192 8.26-4.575 11.643a1 1 0 0 1-.97.258c-2.775-.757-5.513-2.5-8.22-5.206s-4.449-5.445-5.206-8.22a1 1 0 0 1 .258-.97c3.383-3.383 7.286-4.922 11.642-4.575l.375-.374a5 5 0 0 1 6.29-.636l2.193-2.191a1 1 0 0 1 1.414 0m-5.2 10.352-5.152-5.152-.371-.026c-3.462-.2-6.56.99-9.352 3.604.735 2.228 2.237 4.488 4.523 6.774s4.546 3.788 6.774 4.523c2.707-2.89 3.887-6.111 3.577-9.723m.959-6.11a3 3 0 0 0-4.242 0l4.242 4.24a3 3 0 0 0 0-4.24"
				})]
			})]
		})
	}),
	UD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "coins_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M23.995 19.178C23.831 22.31 19.351 24.5 14 24.5c-5.452 0-10-2.274-10-5.5V9l.005-.178C4.169 5.69 8.649 3.5 14 3.5c5.452 0 10 2.274 10 5.5v10Zm-1.994-6.813C20.165 13.695 17.242 14.5 14 14.5s-6.164-.804-8-2.134V14c0 1.745 3.51 3.5 8 3.5s8-1.755 8-3.5ZM14 5.5C9.51 5.5 6 7.255 6 9s3.51 3.5 8 3.5 8-1.755 8-3.5-3.51-3.5-8-3.5m8.001 11.865C20.165 18.695 17.242 19.5 14 19.5s-6.164-.804-8-2.134V19l.005.116C6.157 20.822 9.611 22.5 14 22.5c4.49 0 8-1.755 8-3.5Z"
			})]
		})
	}),
	YD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "compass_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2m0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4m4.949 6.316-2 6a1 1 0 0 1-.633.633l-6 2a1 1 0 0 1-1.265-1.265l2-6a1 1 0 0 1 .633-.633l6-2a1 1 0 0 1 1.265 1.265m-2.53 1.265-3.628 1.21-1.21 3.628 3.628-1.21z"
			})]
		})
	}),
	qD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "crown_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M16.734 5.77c-1.064-2.352-4.404-2.352-5.468 0L9.535 9.6 6.481 7.915c-2.323-1.282-5.045.86-4.344 3.42L4 18.133v1.704c0 .528 0 .982.03 1.357.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.357.031h11.676c.528 0 .982 0 1.357-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356v-1.704l1.863-6.802c.7-2.559-2.02-4.701-4.343-3.419l-3.055 1.687zM22 19H6v.8c0 .577 0 .949.024 1.232.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C7.25 22 7.623 22 8.2 22h11.6c.577 0 .949 0 1.232-.024.272-.022.372-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C22 20.75 22 20.377 22 19.8zM13.089 6.594c.354-.784 1.468-.784 1.822 0l2.178 4.818a1 1 0 0 0 1.394.463l4.003-2.21c.774-.427 1.682.287 1.448 1.14L22.237 17H5.763l-1.697-6.195c-.234-.853.674-1.567 1.448-1.14l4.003 2.21a1 1 0 0 0 1.394-.463z",
			clipRule: "evenodd"
		})
	}),
	GD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "document_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M11.692 2c-2.448 0-3.527.216-4.623.801A5.47 5.47 0 0 0 4.801 5.07C4.216 6.165 4 7.244 4 9.692v8.616c0 2.448.216 3.527.801 4.622A5.47 5.47 0 0 0 7.07 25.2c1.096.585 2.175.801 4.623.801h4.616c2.448 0 3.527-.216 4.622-.801a5.47 5.47 0 0 0 2.269-2.27c.585-1.095.801-2.174.801-4.622v-5.95c0-.796-.028-1.154-.122-1.563a3.6 3.6 0 0 0-.465-1.124c-.223-.356-.457-.63-1.02-1.192L17.52 3.607c-.563-.563-.836-.797-1.192-1.02a3.6 3.6 0 0 0-1.124-.465c-.342-.079-.648-.111-1.205-.12V2h-2.308Zm0 2c-2.335 0-3.019.212-3.68.565a3.47 3.47 0 0 0-1.447 1.448C6.212 6.673 6 7.357 6 9.692v8.616c0 2.335.212 3.019.565 3.68a3.47 3.47 0 0 0 1.448 1.447c.66.353 1.344.565 3.679.565h4.616c2.335 0 3.019-.212 3.68-.565a3.47 3.47 0 0 0 1.447-1.448c.353-.66.565-1.344.565-3.679v-5.95q0-.204-.002-.358H16.5A2.5 2.5 0 0 1 14 9.5l.002-5.498-.176-.001zm4.415 1.021L16 4.915V9.5a.5.5 0 0 0 .41.492l.09.008 4.587.002-.108-.11-4.872-4.87Z",
			clipRule: "evenodd"
		})
	}),
	Ly = e => u.jsxs(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "donate_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: [u.jsx("path", {
			fillRule: "evenodd",
			d: "M15.793 8.115a2 2 0 0 0-3.586 0l-1.005 2.034-2.245.327a2 2 0 0 0-1.108 3.411l1.624 1.584-.383 2.236a2 2 0 0 0 2.902 2.108L14 18.76l2.008 1.055a2 2 0 0 0 2.902-2.108l-.383-2.236 1.624-1.584a2 2 0 0 0-1.108-3.411l-2.245-.327zm-3.262 3.862L14 9l1.47 2.977 3.285.478-2.377 2.318.56 3.272L14 16.5l-2.939 1.545.561-3.273-2.377-2.317z",
			clipRule: "evenodd"
		}), u.jsx("path", {
			fillRule: "evenodd",
			d: "M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2M4 14C4 8.477 8.477 4 14 4s10 4.477 10 10-4.477 10-10 10S4 19.523 4 14",
			clipRule: "evenodd"
		})]
	}),
	Lv = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "download_cloud_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M8.455 8.353C8.455 5.943 10.394 4 12.773 4c2.036 0 3.752 1.424 4.202 3.348a1 1 0 0 0 1.003.771l.113-.001c2.153 0 3.909 1.758 3.909 3.94C22 14.242 20.244 16 18.09 16H18a1 1 0 1 0 0 2h.09c3.27 0 5.91-2.666 5.91-5.941 0-3.07-2.318-5.604-5.3-5.91C17.81 3.729 15.496 2 12.773 2 9.277 2 6.455 4.85 6.455 8.353l.001.15A5.12 5.12 0 0 0 4 12.883C4 15.702 6.273 18 9.09 18H10a1 1 0 1 0 0-2h-.91C7.39 16 6 14.61 6 12.882a3.12 3.12 0 0 1 1.894-2.875 1 1 0 0 0 .6-1.056 4.4 4.4 0 0 1-.04-.598ZM15 12a1 1 0 1 0-2 0v10.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L15 22.586z",
			clipRule: "evenodd"
		})
	}),
	Dy = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "download_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M21 22a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zM14 2a1 1 0 0 1 1 1v13.585l5.293-5.292a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L13 16.585V3a1 1 0 0 1 1-1"
			})]
		})
	}),
	XD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "error_circle_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2m0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4m0 13.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8m.074-9.6c.237 0 .386.037.517.107q.196.106.302.302c.07.13.107.28.107.517v6.148c0 .237-.037.386-.107.517a.73.73 0 0 1-.302.302c-.13.07-.28.107-.517.107h-.148c-.237 0-.386-.037-.517-.107a.73.73 0 0 1-.302-.302c-.07-.13-.107-.28-.107-.517V8.926c0-.237.037-.386.107-.517a.73.73 0 0 1 .302-.302c.13-.07.28-.107.517-.107z"
		})
	}),
	QD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "favorite_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "m14 19.178 5.69 3.476a.205.205 0 0 0 .306-.223l-1.547-6.485 5.064-4.338a.205.205 0 0 0-.117-.36l-6.646-.533-2.56-6.156a.205.205 0 0 0-.38 0l-2.56 6.156-6.646.533a.205.205 0 0 0-.117.36l5.064 4.338-1.547 6.485a.205.205 0 0 0 .306.223zm0 2.344L9.352 24.36a2.205 2.205 0 0 1-3.294-2.393l1.264-5.297-4.136-3.543a2.205 2.205 0 0 1 1.258-3.873l5.429-.435 2.091-5.028a2.205 2.205 0 0 1 4.072 0l2.091 5.028 5.429.435a2.205 2.205 0 0 1 1.258 3.873l-4.136 3.543 1.264 5.297a2.205 2.205 0 0 1-3.294 2.393z"
			})]
		})
	}),
	ZD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "fire_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M13.71 1.534c.74.166 1.206.902 1.04 1.643-.078.342-.183.626-.336.863-2.161 3.336-1.813 5.537-.372 5.75 1.41.209 2.197-.692 1.97-2.79l-.134-1.245a1.345 1.345 0 0 1 2.078-1.265c.745.49 1.58 1.327 2.534 2.517 2.71 3.379 3.547 6.333 3.509 9.359-.071 5.636-4.273 9.634-10 9.634C8.25 26 4 21.978 4 16.347c.03-4.98 2.74-10.39 7.811-14.008q.295-.21.778-.568c.321-.239.73-.325 1.12-.237m-2.08 3.488C7.96 8.197 6.024 12.462 6 16.353 6 20.848 9.33 24 14 24c4.647 0 7.942-3.135 7.999-7.66.032-2.593-.678-5.1-3.07-8.082a19 19 0 0 0-.894-1.042c.163 3.068-1.613 4.948-4.286 4.553-2.706-.4-3.582-3.252-2.118-6.747"
			})]
		})
	}),
	Dv = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "gift_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M12.436 3.693c.629.426 1.156 1.017 1.565 1.756.408-.74.935-1.33 1.564-1.756 1.49-1.01 3.376-.902 4.51.232 1.135 1.135 1.242 3.02.233 4.51a4.6 4.6 0 0 1-.453.565H21c.799 0 1.51.178 2.102.504.593.326 1.067.801 1.393 1.394S25 12.2 25 13v.429c0 1.007-.14 1.547-.4 2.036a2.73 2.73 0 0 1-1.135 1.134 3 3 0 0 1-.463.201L23 19.872c0 1.783-.186 2.43-.534 3.081a3.64 3.64 0 0 1-1.512 1.512c-.652.349-1.299.535-3.082.535h-7.744c-1.783 0-2.43-.186-3.082-.535a3.64 3.64 0 0 1-1.512-1.512C5.186 22.301 5 21.655 5 19.872V16.8a3 3 0 0 1-.465-.202A2.73 2.73 0 0 1 3.4 15.465c-.24-.448-.377-.94-.398-1.794L3 13c0-.8.178-1.51.505-2.102.326-.593.8-1.068 1.393-1.394S6.201 9 7 9h1.146a4.6 4.6 0 0 1-.453-.565c-1.01-1.49-.902-3.375.233-4.51 1.134-1.134 3.02-1.242 4.51-.232M13 16.999H7v2.873c0 1.323.078 1.727.298 2.138.162.303.388.53.692.692.411.22.814.298 2.138.298L13 22.999zm2 0v6h2.872c1.324 0 1.727-.077 2.138-.297.304-.163.53-.389.692-.692.22-.411.298-.815.298-2.138V17zm-2-6H7c-.458 0-.84.093-1.137.257a1.5 1.5 0 0 0-.607.606C5.092 12.16 5 12.542 5 13l.002.609c.009.506.06.722.162.913.075.14.174.238.314.313.21.113.45.164 1.075.165L13 14.999zm8 0h-6v4h6.446l.163-.001c.506-.01.722-.06.913-.163a.73.73 0 0 0 .314-.313c.102-.191.153-.407.162-.913l.002-.61c0-.458-.092-.839-.256-1.137a1.5 1.5 0 0 0-.607-.606C21.84 11.092 21.458 11 21 11m-6-2c3.65-.35 4.695-2.704 3.7-3.7-.995-.995-3.35.05-3.7 3.7M9.301 5.3c-.995.996.05 3.35 3.7 3.7-.35-3.65-2.705-4.695-3.7-3.7"
			})]
		})
	}),
	JD = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "happy_face_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12-5.373 12-12 12S2 20.627 2 14m10.25-2.375a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0m6.75 0a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M16 16c.552 0 1 .45.921.997-.037.259-.087.5-.15.651a2.999 2.999 0 0 1-5.543 0 3 3 0 0 1-.15-.651c-.077-.547.37-.997.922-.997z"
		})
	}),
	eB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "history_backward_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12c-3.226 0-6.251-1.28-8.487-3.516a1 1 0 0 1 1.415-1.414A9.96 9.96 0 0 0 14 24c5.523 0 10-4.477 10-10S19.523 4 14 4a9.97 9.97 0 0 0-7.143 3H8.5a1 1 0 0 1 .117 1.993L8.5 9h-4a1 1 0 0 1-.993-.883L3.5 8V4a1 1 0 0 1 1.993-.117L5.5 4v1.529A11.97 11.97 0 0 1 14 2m0 6a1 1 0 0 1 .993.883L15 9v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083-3-3a1 1 0 0 1-.284-.576L13 14V9a1 1 0 0 1 1-1"
			})]
		})
	}),
	tB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "list_number_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			d: "m3.674 5.219-.404.245c-.187.112-.266.242-.266.38 0 .1.034.18.09.234.054.055.134.09.232.09.092 0 .169-.025.356-.136l.285-.152.002.046v2.51c0 .192.05.33.134.419.083.089.21.141.386.141.175 0 .3-.052.382-.14s.133-.227.133-.42V5.64a.65.65 0 0 0-.169-.468A.61.61 0 0 0 4.383 5c-.221 0-.472.075-.709.219M10 6a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm-1 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m-5.995-5.475c0 .282.216.475.533.475h1.924c.34 0 .542-.173.542-.464 0-.29-.208-.47-.542-.47h-.881v-.046l.68-.604c.458-.407.683-.81.683-1.234 0-.677-.626-1.18-1.464-1.18-.804 0-1.48.495-1.48 1.057 0 .256.195.44.472.44.193 0 .32-.075.495-.293.153-.19.277-.26.45-.26.224 0 .38.144.38.357 0 .19-.133.375-.432.657l-.882.83c-.354.331-.478.522-.478.735m1.458 7.478c-.81 0-1.463-.415-1.463-.928 0-.262.181-.451.433-.451.156 0 .296.073.452.236.184.195.366.283.572.283.296 0 .492-.15.492-.376 0-.225-.196-.378-.492-.378h-.153c-.232 0-.397-.18-.397-.434 0-.24.165-.429.397-.429h.153c.243 0 .422-.14.422-.333 0-.192-.176-.33-.422-.33-.19 0-.346.076-.55.271a.6.6 0 0 1-.432.178c-.266 0-.461-.18-.461-.426 0-.48.667-.883 1.46-.883.885 0 1.476.429 1.476 1.05 0 .405-.313.755-.696.792v.079c.459 0 .746.403.746.897 0 .691-.6 1.182-1.537 1.182"
		})
	}),
	nB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "logo_vk_video_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M6.07 3.801C7.164 3.216 8.243 3 10.691 3h6.616c2.448 0 3.527.216 4.622.801A5.47 5.47 0 0 1 24.2 6.07c.585 1.096.801 2.175.801 4.623v6.616c0 2.448-.216 3.527-.801 4.622a5.47 5.47 0 0 1-2.27 2.269c-1.095.585-2.174.801-4.622.801h-6.616c-2.448 0-3.527-.216-4.623-.801a5.47 5.47 0 0 1-2.268-2.269C3.216 20.835 3 19.756 3 17.308v-6.616c0-2.448.216-3.527.801-4.623A5.47 5.47 0 0 1 6.07 3.801m.943 1.764c.372-.2.752-.354 1.432-.45q-.367.437-.644.954C7.216 7.165 7 8.244 7 10.692v6.616c0 2.448.216 3.527.801 4.622q.278.518.644.955c-.68-.096-1.06-.25-1.432-.45a3.47 3.47 0 0 1-1.448-1.448C5.212 20.327 5 19.643 5 17.308v-6.616c0-2.335.212-3.019.565-3.68a3.47 3.47 0 0 1 1.448-1.447m4 16.87c.66.353 1.344.565 3.679.565h2.616c2.335 0 3.019-.212 3.68-.565a3.47 3.47 0 0 0 1.447-1.448c.353-.66.565-1.344.565-3.679v-6.616c0-2.335-.212-3.019-.565-3.68a3.47 3.47 0 0 0-1.448-1.447C20.327 5.212 19.643 5 17.308 5h-2.616c-2.335 0-3.019.212-3.68.565a3.47 3.47 0 0 0-1.447 1.448C9.212 7.673 9 8.357 9 10.692v6.616c0 2.335.212 3.019.565 3.68a3.47 3.47 0 0 0 1.448 1.447m4.75-12.53.038.023 2.59 1.553.038.023c.425.255.803.48 1.088.69.294.215.62.503.803.928.24.56.24 1.196 0 1.756-.182.425-.51.713-.803.928-.285.21-.663.435-1.088.69l-.038.023-2.59 1.553-.039.023c-.424.254-.802.48-1.12.633-.322.154-.74.314-1.214.262a2.15 2.15 0 0 1-1.528-.91c-.263-.376-.337-.806-.368-1.167-.032-.357-.032-.805-.032-1.318v-3.19c0-.512 0-.96.032-1.318.031-.36.105-.791.368-1.167a2.15 2.15 0 0 1 1.528-.91c.474-.052.892.108 1.214.262.318.153.696.379 1.12.633Zm-2.15 1.08a.2.2 0 0 0-.062.044 1.4 1.4 0 0 0-.035.23c-.023.261-.024.62-.024 1.188v3.106c0 .567.001.927.024 1.188.013.137.028.205.035.23q.03.032.061.044c.03-.01.082-.03.164-.069.224-.107.52-.283.995-.568l2.59-1.553c.475-.284.77-.462.973-.61a1.3 1.3 0 0 0 .161-.135.27.27 0 0 0 0-.16 1.3 1.3 0 0 0-.161-.134c-.202-.149-.498-.327-.973-.611l-2.59-1.553c-.475-.285-.771-.461-.995-.568a1.4 1.4 0 0 0-.164-.069Z",
			clipRule: "evenodd"
		})
	}),
	rB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "mention_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				d: "M13.673 24.65q-3.144 0-5.49-1.271a8.86 8.86 0 0 1-3.622-3.61q-1.28-2.337-1.279-5.455v-.751q0-3.105 1.333-5.51 1.334-2.405 3.746-3.74c2.412-1.335 3.448-1.333 5.517-1.333h.11q2.898 0 5.188 1.197 2.289 1.196 3.582 3.308t1.292 4.792v.684q0 1.832-.602 3.24c-.602 1.408-.961 1.67-1.681 2.195q-1.08.786-2.489.786-1.27 0-2.187-.534-.915-.533-1.094-1.394h-.137q-.15.533-.601.977-.452.446-1.1.698a3.7 3.7 0 0 1-1.361.253q-1.122 0-1.955-.547-.834-.547-1.285-1.559-.452-1.012-.452-2.392v-1.368q0-1.34.458-2.337c.458-.997.743-1.176 1.313-1.532q.854-.533 2.003-.533 1.011 0 1.777.5.766.498 1.012 1.305h.11v-.356q0-.547.3-.868c.3-.32.474-.321.82-.321q.507 0 .807.321c.3.321.3.504.3.868v5.469q0 .697.425 1.114.423.417 1.107.417.725 0 1.272-.56.546-.561.84-1.593t.294-2.413v-.451q0-2.147-1.018-3.842-1.02-1.695-2.83-2.652t-4.109-.957h-.11q-2.487 0-4.401 1.093C7.562 7.081 7.208 7.745 6.502 9.071q-1.06 1.989-1.06 4.574v.587q0 2.571 1.026 4.505c1.026 1.934 1.652 2.284 2.905 2.98q1.88 1.047 4.382 1.047h.11q.93 0 2.31-.205.724-.096.943-.096.397 0 .656.24.26.238.26.608c0 .37-.073.455-.219.628q-.218.26-.628.37-1.327.34-3.391.341zm-2.188-10.28q0 1.38.527 2.098.526.718 1.551.718 1.013 0 1.545-.69.534-.691.534-2.004v-1.107q0-1.203-.568-1.9c-.568-.698-.89-.698-1.538-.698q-.97 0-1.51.732-.54.73-.54 2.044z"
			})]
		})
	}),
	oB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "message_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10m0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8"
			})]
		})
	}),
	iB = e => u.jsxs(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "message_unread_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: [u.jsx("path", {
			fill: "currentColor",
			d: "M14 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
		}), u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M2.537 13.499c0-5.66 5.289-9.999 11.481-9.999S25.5 7.839 25.5 13.499s-5.289 9.999-11.482 9.999c-1.373 0-2.693-.21-3.918-.597C8.656 24.25 6.556 24.898 3.988 25c-1.046.041-1.8-1.047-1.363-2.021.622-1.391 1.424-2.986 1.52-4.378-1.017-1.48-1.608-3.228-1.608-5.101M14.018 5.5c-5.385 0-9.481 3.719-9.481 7.999 0 1.537.514 2.979 1.422 4.2a1 1 0 0 1 .197.597c0 1.634-.652 3.175-1.315 4.638 2.056-.218 3.405-.877 4.219-1.834a1 1 0 0 1 1.113-.289c1.172.44 2.473.687 3.845.687 5.385 0 9.482-3.719 9.482-8 0-4.28-4.096-7.998-9.482-7.998",
			clipRule: "evenodd"
		})]
	}),
	sB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "money_circle_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2m0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4m1.673 4.5a3.662 3.662 0 1 1 0 7.325l-2.458-.001v1.403h1.637a.818.818 0 0 1 0 1.637l-1.637-.001v.78a.857.857 0 0 1-.857.857h-.14a.857.857 0 0 1-.857-.857l-.001-.78h-.872a.818.818 0 0 1 0-1.636h.872v-1.403h-.833a.857.857 0 0 1-.857-.856v-.156c0-.474.384-.857.857-.857l.833-.001V9.357c0-.473.385-.857.858-.857zm.036 1.714h-2.494v3.74h2.494a1.87 1.87 0 0 0 0-3.74"
			})]
		})
	}),
	aB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "more_vertical_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M16.25 7a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m0 7a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m0 7a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0"
		})
	}),
	lB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "picture_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			d: "M12 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.07 3.801C7.164 3.216 8.243 3 10.691 3h6.616c2.448 0 3.527.216 4.622.801A5.47 5.47 0 0 1 24.2 6.07c.585 1.096.801 2.175.801 4.623v6.616c0 2.448-.216 3.527-.801 4.622a5.47 5.47 0 0 1-2.27 2.269c-1.095.585-2.174.801-4.622.801h-6.616c-2.448 0-3.527-.216-4.623-.801a5.47 5.47 0 0 1-2.268-2.269C3.216 20.835 3 19.756 3 17.308v-6.616c0-2.448.216-3.527.801-4.623A5.47 5.47 0 0 1 6.07 3.801M10.691 5c-2.335 0-3.019.212-3.68.565a3.47 3.47 0 0 0-1.447 1.448C5.212 7.673 5 8.357 5 10.692v6.616c0 1.67.108 2.495.3 3.071L8 17.677c.37-.37.69-.69.975-.932.301-.255.628-.482 1.03-.613a3 3 0 0 1 1.845-.007c.403.129.731.353 1.034.607.27.226.57.52.916.861l2.93-2.91c.373-.37.695-.69.982-.932.302-.255.63-.481 1.034-.611a3 3 0 0 1 1.85.003c.403.131.73.359 1.032.615.285.242.606.563.978.935l.393.393v-4.394c0-2.335-.212-3.019-.565-3.68a3.47 3.47 0 0 0-1.448-1.447C20.327 5.212 19.643 5 17.308 5zm12.303 12.909-1.775-1.775c-.407-.407-.67-.668-.886-.852-.207-.176-.304-.22-.357-.237a1 1 0 0 0-.617-.001c-.053.017-.15.06-.358.236-.217.183-.48.444-.888.849l-3.605 3.58a1 1 0 0 1-1.407.003l-.613-.604a17 17 0 0 0-.888-.843c-.208-.174-.306-.218-.358-.235a1 1 0 0 0-.616.002c-.052.018-.15.062-.356.237-.215.183-.477.444-.883.85l-2.94 2.941q.261.21.567.374c.66.353 1.344.565 3.679.565h6.616c2.335 0 3.019-.212 3.68-.565a3.47 3.47 0 0 0 1.447-1.448c.321-.6.525-1.219.56-3.078Z",
			clipRule: "evenodd"
		})
	}),
	cB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "picture_pen_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M10.692 3c-2.448 0-3.527.216-4.623.801A5.47 5.47 0 0 0 3.801 6.07C3.216 7.165 3 8.244 3 10.692v6.616c0 2.448.216 3.527.801 4.622A5.47 5.47 0 0 0 6.07 24.2c1.096.585 2.175.801 4.623.801H13a1 1 0 1 0 0-2h-2.308c-2.335 0-3.019-.212-3.68-.565a3.6 3.6 0 0 1-.566-.374l2.943-2.943c.405-.405.667-.666.882-.849.206-.175.304-.22.356-.237a1 1 0 0 1 .616-.002c.052.017.15.061.358.235.216.181.48.44.888.843l.613.604a1 1 0 0 0 1.409-.005l3.5-3.5a1 1 0 1 0-1.414-1.414l-2.798 2.798a17 17 0 0 0-.914-.86c-.303-.253-.631-.477-1.034-.606a3 3 0 0 0-1.846.007c-.401.131-.728.358-1.029.613-.285.242-.604.562-.975.932l-.027.027L5.3 20.38c-.19-.577-.3-1.402-.3-3.07v-6.617c0-2.335.212-3.019.565-3.68a3.47 3.47 0 0 1 1.448-1.447C7.673 5.212 8.357 5 10.692 5h6.616c2.335 0 3.019.212 3.68.565a3.47 3.47 0 0 1 1.447 1.448c.353.66.565 1.344.565 3.679V13a1 1 0 1 0 2 0v-2.308c0-2.448-.216-3.527-.801-4.623a5.47 5.47 0 0 0-2.269-2.268C20.835 3.216 19.756 3 17.308 3zm-.192 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m14.499 4.293a1 1 0 0 0-1.416 0l-.708.708 2.124 2.124.708-.708a1 1 0 0 0 0-1.416zm-.98 3.812-2.125-2.124-4.338 4.338c-.44.44-.77.976-.967 1.566l-.573 1.72a.3.3 0 0 0 .38.38l1.719-.574a4 4 0 0 0 1.565-.968z",
			clipRule: "evenodd"
		})
	}),
	uB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "picture_stack_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M19.872 7c1.783 0 2.43.186 3.082.534s1.163.86 1.512 1.512c.348.652.534 1.299.534 3.082v6.744c0 1.783-.186 2.43-.534 3.082a3.64 3.64 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H8.128c-1.783 0-2.43-.186-3.082-.534a3.64 3.64 0 0 1-1.512-1.512c-.33-.618-.514-1.23-.532-2.81L3 12.128c0-1.783.186-2.43.534-3.082a3.64 3.64 0 0 1 1.512-1.512c.618-.33 1.23-.514 2.81-.532zM20 14.414l-4.938 4.94a1.5 1.5 0 0 1-2.008.103l-.114-.103L11 17.414l-4.483 4.483c.3.066.706.097 1.373.102L19.872 22c1.324 0 1.727-.078 2.138-.298.304-.162.53-.388.692-.692l.076-.155c.15-.345.213-.76.221-1.745v-1.696zm.11-5.413H7.89l-.416.008c-.821.025-1.15.11-1.484.289-.304.162-.53.388-.692.692l-.076.155c-.15.345-.213.76-.221 1.745v7.22l.008.416c.013.43.043.726.094.958l4.836-4.838a1.5 1.5 0 0 1 2.008-.103l.114.103L14 17.586l4.94-4.94a1.5 1.5 0 0 1 2.007-.103l.114.103L23 14.585v-2.457c0-1.324-.078-1.727-.298-2.138a1.64 1.64 0 0 0-.692-.692l-.155-.076c-.345-.15-.76-.213-1.745-.221M8.5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m8.936-8c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.131.246.216.49.25.976H8.017c.034-.486.119-.73.25-.976.174-.326.43-.582.756-.756S9.673 3 10.563 3z"
			})]
		})
	}),
	dB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "poll_square_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M10.692 5c-2.137 0-2.897.147-3.68.565a3.45 3.45 0 0 0-1.447 1.448C5.147 7.795 5 8.555 5 10.692v6.616c0 2.137.147 2.897.565 3.68q.504.943 1.448 1.447c.782.418 1.542.565 3.679.565h6.616c2.137 0 2.897-.147 3.68-.565a3.45 3.45 0 0 0 1.447-1.448c.418-.782.565-1.542.565-3.679v-6.616c0-2.137-.147-2.897-.565-3.68a3.45 3.45 0 0 0-1.448-1.447C20.205 5.147 19.445 5 17.308 5zm0-2h6.616c2.675 0 3.645.278 4.623.801a5.45 5.45 0 0 1 2.268 2.268c.523.978.801 1.948.801 4.623v6.616c0 2.675-.278 3.645-.801 4.623a5.45 5.45 0 0 1-2.268 2.268c-.978.523-1.948.801-4.623.801h-6.616c-2.675 0-3.645-.278-4.623-.801a5.45 5.45 0 0 1-2.268-2.268C3.278 20.953 3 19.983 3 17.308v-6.616c0-2.675.278-3.645.801-4.623A5.45 5.45 0 0 1 6.07 3.801C7.047 3.278 8.017 3 10.692 3M11 19a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0z"
			})]
		})
	}),
	fB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "privacy_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M24.442 12.058c.513.77.588 1.831.192 2.663l-2.679 5.625C20.435 23.539 16.54 26 12.998 26H12c-4.422 0-8-3.58-8-8.009v-7.863a2.746 2.746 0 0 1 3.5-2.642v-.732a2.75 2.75 0 0 1 3.571-2.629A2.75 2.75 0 0 1 13.75 2c1.47 0 2.67 1.15 2.746 2.604A2.748 2.748 0 0 1 20 7.254v4.264c1.299-1.278 3.357-1.087 4.442.54M6.75 9.383a.746.746 0 0 0-.75.745v7.863A6 6 0 0 0 12 24h.998c2.773 0 5.964-2.02 7.151-4.514l2.679-5.625a.79.79 0 0 0-.05-.694c-.428-.642-1.123-.65-1.55-.01l-2.177 3.267c-.576.864-1.051.726-1.051-.323V7.255a.75.75 0 0 0-.75-.755.746.746 0 0 0-.75.747v5.757c0 .55-.448.996-1 .996-.556 0-1-.446-1-.995V4.752a.749.749 0 1 0-1.5 0v8.253c0 .54-.448.995-1 .995-.556 0-1-.446-1-.997v-6.25A.756.756 0 0 0 10.25 6a.75.75 0 0 0-.75.754v6.738c0 .551-.448 1.008-1 1.008-.556 0-1-.447-1-.999v-3.363a.75.75 0 0 0-.75-.755"
			})]
		})
	}),
	hB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "recent_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M14 2c6.626 0 12 5.372 12 12s-5.374 12-12 12C7.372 26 2 20.628 2 14S7.372 2 14 2m0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.478 10-10S19.522 4 14 4m-.5 4a1 1 0 0 1 1 1v5.104l4.875 1.969a1 1 0 1 1-.75 1.854l-5.5-2.222a1 1 0 0 1-.625-.927V9a1 1 0 0 1 1-1"
			})]
		})
	}),
	pB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "report_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M10.636 2a2.5 2.5 0 0 0-1.768.732L2.732 8.868A2.5 2.5 0 0 0 2 10.636v6.729a2.5 2.5 0 0 0 .732 1.767l6.136 6.136a2.5 2.5 0 0 0 1.768.732h6.729a2.5 2.5 0 0 0 1.767-.732l6.136-6.136A2.5 2.5 0 0 0 26 17.364v-6.729a2.5 2.5 0 0 0-.732-1.767l-6.136-6.136A2.5 2.5 0 0 0 17.364 2zM14 8a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m0 8.8.123.006A1.2 1.2 0 0 1 14 19.2l-.123-.006A1.2 1.2 0 0 1 14 16.8",
			clipRule: "evenodd"
		})
	}),
	mB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "safari_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M13.833 2.333c6.351 0 11.5 5.149 11.5 11.5s-5.149 11.5-11.5 11.5-11.5-5.149-11.5-11.5 5.149-11.5 11.5-11.5m0 2a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19"
			}), u.jsx("path", {
				stroke: "currentColor",
				strokeWidth: "1.75",
				d: "m11.963 12.086-2.575 6.067a.35.35 0 0 0 .459.46l6.066-2.575a.23.23 0 0 0 .123-.124l2.574-6.066a.35.35 0 0 0-.458-.459l-6.066 2.574a.23.23 0 0 0-.123.123z"
			})]
		})
	}),
	S1 = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "search_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M13 4a9 9 0 1 0 5.618 16.032l4.675 4.675a1 1 0 0 0 1.414-1.414l-4.675-4.675A9 9 0 0 0 13 4m0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14",
			clipRule: "evenodd"
		})
	}),
	Bv = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "search_stars_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			d: "M13.637 1.262a.383.383 0 0 1 .726 0l.291.873a1.91 1.91 0 0 0 1.21 1.21l.874.292a.383.383 0 0 1 0 .726l-.873.291a1.91 1.91 0 0 0-1.21 1.21l-.292.874a.383.383 0 0 1-.726 0l-.291-.873a1.91 1.91 0 0 0-1.21-1.21l-.874-.292a.383.383 0 0 1 0-.726l.873-.291a1.91 1.91 0 0 0 1.21-1.21zm6.758 3.174c.194-.581 1.016-.581 1.21 0l.485 1.456a3.19 3.19 0 0 0 2.018 2.018l1.456.485c.581.194.581 1.016 0 1.21l-1.456.486a3.19 3.19 0 0 0-2.018 2.017l-.485 1.456c-.194.581-1.016.581-1.21 0l-.486-1.456a3.19 3.19 0 0 0-2.017-2.017l-1.456-.486c-.581-.194-.581-1.016 0-1.21l1.456-.485a3.19 3.19 0 0 0 2.017-2.018zm-.363 14.182a9 9 0 0 0 .84-1.255 1 1 0 0 0-1.75-.97 7 7 0 0 1-5.051 3.525 7 7 0 0 1-7.628-4.466A7 7 0 0 1 9.27 7.077a1 1 0 0 0-1.066-1.693 9 9 0 1 0 10.413 14.648l4.676 4.675a1 1 0 0 0 1.414-1.414z"
		})
	}),
	vB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "services_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M9.116 15c1.065 0 1.623.108 2.205.419.54.289.971.72 1.26 1.26.311.582.419 1.14.419 2.205v2.232c0 1.065-.108 1.623-.419 2.205-.289.54-.72.971-1.26 1.26-.582.311-1.14.419-2.205.419H6.884c-1.065 0-1.623-.108-2.205-.419-.54-.289-.971-.72-1.26-1.26C3.108 22.739 3 22.18 3 21.116v-2.232c0-1.065.108-1.623.419-2.205.289-.54.72-.971 1.26-1.26.582-.311 1.14-.419 2.205-.419zm12 0c1.065 0 1.623.108 2.205.419.54.289.971.72 1.26 1.26.311.582.419 1.14.419 2.205v2.232c0 1.065-.108 1.623-.419 2.205-.289.54-.72.971-1.26 1.26-.582.311-1.14.419-2.205.419h-2.232c-1.065 0-1.623-.108-2.205-.419-.54-.289-.971-.72-1.26-1.26-.311-.582-.419-1.14-.419-2.205v-2.232c0-1.065.108-1.623.419-2.205.289-.54.72-.971 1.26-1.26.582-.311 1.14-.419 2.205-.419zm-12 2H6.884c-.763 0-1.01.048-1.261.182a1.05 1.05 0 0 0-.44.44c-.135.253-.183.499-.183 1.262v2.232c0 .763.048 1.01.182 1.261q.153.288.44.44c.253.135.499.183 1.262.183h2.232c.763 0 1.01-.048 1.261-.182q.288-.153.44-.44c.135-.253.183-.499.183-1.262v-2.232c0-.763-.048-1.01-.182-1.261a1.05 1.05 0 0 0-.44-.44c-.253-.135-.499-.183-1.262-.183m12 0h-2.232c-.763 0-1.01.048-1.261.182a1.05 1.05 0 0 0-.44.44c-.135.253-.183.499-.183 1.262v2.232c0 .763.048 1.01.182 1.261q.153.288.44.44c.253.135.499.183 1.262.183h2.232c.763 0 1.01-.048 1.261-.182q.288-.153.44-.44c.135-.253.183-.499.183-1.262v-2.232c0-.763-.048-1.01-.182-1.261a1.05 1.05 0 0 0-.44-.44c-.253-.135-.499-.183-1.262-.183M20.89 2.413c.631.19 1.102.51 1.856 1.263l1.577 1.577c.754.754 1.072 1.225 1.263 1.856a3.04 3.04 0 0 1 0 1.782c-.19.631-.51 1.102-1.263 1.856l-1.577 1.577c-.754.754-1.225 1.072-1.856 1.263a3.04 3.04 0 0 1-1.782 0c-.631-.19-1.102-.51-1.856-1.263l-1.577-1.577c-.754-.754-1.072-1.225-1.263-1.856a3.04 3.04 0 0 1 0-1.782c.19-.631.51-1.102 1.263-1.856l1.577-1.577c.754-.754 1.225-1.072 1.856-1.263a3.04 3.04 0 0 1 1.782 0M9.116 3c1.065 0 1.623.108 2.205.419.54.289.971.72 1.26 1.26.311.582.419 1.14.419 2.205v2.232c0 1.065-.108 1.623-.419 2.205-.289.54-.72.971-1.26 1.26-.582.311-1.14.419-2.205.419H6.884c-1.065 0-1.623-.108-2.205-.419-.54-.289-.971-.72-1.26-1.26C3.108 10.739 3 10.18 3 9.116V6.884c0-1.065.108-1.623.419-2.205.289-.54.72-.971 1.26-1.26C5.261 3.108 5.82 3 6.884 3zm10.573 1.327c-.274.082-.482.223-1.021.763L17.09 6.668c-.54.54-.68.747-.763 1.02a1.05 1.05 0 0 0 0 .623c.082.274.223.482.763 1.021l1.578 1.578c.54.54.747.68 1.02.763.21.064.415.064.623 0 .274-.082.482-.223 1.021-.763l1.578-1.578c.54-.54.68-.747.763-1.02a1.05 1.05 0 0 0 0-.623c-.082-.274-.223-.482-.763-1.021L21.332 5.09c-.54-.54-.747-.68-1.02-.763a1.05 1.05 0 0 0-.623 0M9.116 5H6.884c-.763 0-1.01.048-1.261.182a1.05 1.05 0 0 0-.44.44C5.047 5.876 5 6.122 5 6.885v2.232c0 .763.048 1.01.182 1.261q.153.288.44.44c.253.135.499.183 1.262.183h2.232c.763 0 1.01-.048 1.261-.182q.288-.153.44-.44c.135-.253.183-.499.183-1.262V6.884c0-.763-.048-1.01-.182-1.261a1.05 1.05 0 0 0-.44-.44C10.124 5.047 9.878 5 9.115 5"
			})]
		})
	}),
	_B = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "share_external_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M20.707 8.293a1 1 0 0 1-1.414 1.414L15 5.414V17a1 1 0 1 1-2 0V5.414L8.707 9.707a1 1 0 0 1-1.414-1.414l6-6A1 1 0 0 1 13.997 2h.006a1 1 0 0 1 .7.289m6.004 6.004-6-6zM4 17.643V16a1 1 0 1 1 2 0v1.6c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h5.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546V16a1 1 0 1 1 2 0v1.643c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C18.6 25 17.727 25 16.643 25h-5.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C4 19.6 4 18.727 4 17.643",
			clipRule: "evenodd"
		})
	}),
	zv = e => u.jsxs(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "smartphone_share_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: [u.jsx("path", {
			d: "M16.241 2H11.76c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.393a4 4 0 0 0-1.748 1.75c-.247.486-.346 1.003-.392 1.566C6 6.295 6 6.96 6 7.766v12.497c0 .806 0 1.471.044 2.013.046.563.145 1.08.392 1.566a4 4 0 0 0 1.748 1.75c.538.274 1.117.367 1.755.406A1 1 0 0 0 10.061 24c-.538-.032-.794-.102-.969-.19a2 2 0 0 1-.874-.876c-.08-.157-.145-.381-.18-.82C8 21.663 8 21.08 8 20.222V7.807c0-.858 0-1.44.038-1.891.035-.44.1-.664.18-.82.192-.377.498-.683.874-.875.156-.08.38-.145.819-.181.45-.037 1.032-.038 1.889-.038h4.4c.857 0 1.439.001 1.889.038.438.036.663.1.819.18.376.193.682.499.874.876.08.156.145.38.18.82.037.45.038 1.033.038 1.891v6.708a1 1 0 1 0 2 0v-6.75c0-.805 0-1.47-.044-2.012-.046-.563-.145-1.08-.392-1.566a4 4 0 0 0-1.748-1.75c-.485-.248-1.002-.347-1.564-.393C17.71 2 17.046 2 16.242 2Z"
		}), u.jsx("path", {
			d: "m23.361 22.581-3.558 2.958c-.253.21-.38.316-.473.363a.915.915 0 0 1-1.304-.618c-.023-.102-.023-.268-.023-.599v-1.094c-1.462 0-2.66.502-3.538 1.058-.338.214-.507.32-.584.347a.667.667 0 0 1-.883-.672c.003-.083.037-.199.105-.43.498-1.709 1.753-3.86 4.9-4.362v-1.217c0-.331 0-.497.023-.599a.915.915 0 0 1 1.304-.618c.093.047.22.152.474.363l3.558 2.958c.197.164.295.246.362.324a1.174 1.174 0 0 1 0 1.514 3 3 0 0 1-.363.324"
		})]
	}),
	nl = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "statistics_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			d: "M23 21a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zM22 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9.414l-6.293 6.293a1 1 0 0 1-1.32.083l-.094-.083L11 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0L14 13.586 19.584 8H17a1 1 0 0 1-.993-.883L16 7a1 1 0 0 1 1-1z"
		})
	}),
	gB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "sticker_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M11.844 4.189c-1.89.42-3.58 1.373-4.904 2.697-1.815 1.815-2.936 4.32-2.936 7.087s1.121 5.272 2.936 7.087 4.319 2.936 7.087 2.936 5.272-1.121 7.087-2.936a10 10 0 0 0 2.697-4.904A9.02 9.02 0 0 1 11.844 4.189M13.4 2.026c.338.045.758.185 1.056.35.373.206.644.478.945.78q4.717 4.725 9.443 9.443c.302.301.574.572.78.945.165.298.305.718.35 1.056.06.44.006.764-.048 1.131a12 12 0 0 1-3.395 6.746A12 12 0 0 1 14.027 26c-3.32 0-6.329-1.347-8.504-3.523A12 12 0 0 1 2 13.973c0-3.32 1.347-6.329 3.523-8.504a12 12 0 0 1 6.746-3.395c.367-.054.692-.107 1.13-.048m.526 2.49a7.016 7.016 0 0 0 9.558 9.558 1630 1630 0 0 0-9.558-9.558",
			clipRule: "evenodd"
		})
	}),
	By = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "story_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M17.926 3.002c1.958.02 2.954.231 3.988.784a5.54 5.54 0 0 1 2.3 2.3c.553 1.034.764 2.03.784 3.988v7.852c-.02 1.958-.231 2.954-.784 3.988a5.54 5.54 0 0 1-2.3 2.3c-1.034.553-2.03.764-3.988.784h-7.852c-1.958-.02-2.954-.231-3.988-.784a5.54 5.54 0 0 1-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988v-7.852c.02-1.958.231-2.954.784-3.988a5.54 5.54 0 0 1 2.3-2.3c1.034-.553 2.03-.764 3.988-.784zM17.59 5h-7.18l-.558.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822L5 10.41v7.18l.005.558c.028 1.479.18 2.141.545 2.823.342.64.839 1.137 1.48 1.48.68.364 1.343.516 2.822.544l.558.005h7.18l.558-.005c1.479-.028 2.141-.18 2.823-.545a3.54 3.54 0 0 0 1.48-1.48c.364-.68.516-1.343.544-2.822L23 17.59v-7.18l-.005-.558c-.028-1.479-.18-2.141-.545-2.823a3.54 3.54 0 0 0-1.48-1.48c-.68-.364-1.343-.516-2.822-.544zM14 8.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m0 2a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
			})]
		})
	}),
	yB = e => u.jsxs(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "tag_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: [u.jsx("path", {
			d: "M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
		}), u.jsx("path", {
			fillRule: "evenodd",
			d: "M5.821 17.861c-1.04-1.04-1.562-1.561-1.934-2.168a6 6 0 0 1-.72-1.74C3 13.26 3 12.523 3 11.05v-.828c0-2.529 0-3.793.492-4.758a4.5 4.5 0 0 1 1.973-1.973C6.43 3 7.695 3 10.223 3h.826c1.473 0 2.209 0 2.902.166a6 6 0 0 1 1.74.721c.607.372 1.128.893 2.169 1.934l3.543 3.545c1.987 1.986 2.98 2.98 3.352 4.125a5 5 0 0 1 0 3.1c-.373 1.145-1.366 2.138-3.353 4.124l-.689.689c-1.986 1.986-2.98 2.979-4.124 3.35a5 5 0 0 1-3.1 0c-1.145-.372-2.138-1.364-4.125-3.35L5.821 17.86ZM16.445 7.235l3.544 3.545c1.017 1.016 1.693 1.695 2.17 2.258.463.545.622.849.694 1.07a3 3 0 0 1 0 1.864c-.073.222-.231.526-.694 1.07-.478.564-1.154 1.242-2.17 2.258l-.69.69c-1.016 1.016-1.695 1.692-2.258 2.17-.545.462-.849.62-1.07.692a3 3 0 0 1-1.864 0c-.222-.072-.526-.23-1.07-.692-.564-.478-1.242-1.154-2.259-2.17l-3.543-3.543c-1.108-1.108-1.423-1.441-1.643-1.8a4 4 0 0 1-.48-1.161c-.1-.41-.112-.867-.112-2.435v-.828c0-1.297.002-2.15.055-2.802.051-.63.14-.894.219-1.048a2.5 2.5 0 0 1 1.099-1.099c.154-.078.419-.168 1.048-.22C8.073 5.003 8.926 5 10.223 5h.826c1.568 0 2.026.013 2.435.111.41.099.802.261 1.162.481.358.22.691.535 1.8 1.643Z",
			clipRule: "evenodd"
		})]
	}),
	$v = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "unfavorite_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M8.58 8.993 5.292 5.707a1 1 0 0 1 1.414-1.414l18 18a1 1 0 0 1-1.414 1.414l-1.619-1.619a2 2 0 0 1-2.94 2L14 21.517l-4.735 2.57a2 2 0 0 1-2.92-2.123l.98-5.296-3.906-3.71a2 2 0 0 1 1.115-3.433zm1.781 1.783-5.565.733 4.3 4.083a1 1 0 0 1 .295.907l-1.08 5.83 5.212-2.828a1 1 0 0 1 .954 0l5.212 2.829-.506-2.733zm7.764-1.954 5.34.704a2 2 0 0 1 1.116 3.434l-2.637 2.504a1 1 0 0 1-1.377-1.45l2.637-2.505-5.879-.775a1 1 0 0 1-.771-.56L14 4.822l-.77 1.614a1 1 0 1 1-1.805-.861l.77-1.614a2 2 0 0 1 3.61 0z"
			})]
		})
	}),
	zy = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "user_add_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M17.75 15c4.951 0 9.25 1.763 9.25 5.643 0 2.016-.781 2.857-2.456 2.857H10.956c-1.675 0-2.456-.84-2.456-2.857 0-3.88 4.299-5.643 9.25-5.643m0 2c-3.946 0-7.25 1.355-7.25 3.643 0 .89-.071.863.372.858l13.672-.001c.536 0 .456.086.456-.857C25 18.355 21.696 17 17.75 17M5 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2H6v3a1 1 0 0 1-2 0v-3H1a1 1 0 0 1 0-2h3V8a1 1 0 0 1 1-1m12.5-4C20.539 3 23 5.461 23 8.5S20.539 14 17.5 14A5.5 5.5 0 0 1 12 8.5C12 5.461 14.461 3 17.5 3m0 2A3.5 3.5 0 0 0 14 8.5c0 1.934 1.566 3.5 3.5 3.5S21 10.434 21 8.5 19.434 5 17.5 5"
			})]
		})
	}),
	wB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "user_outgoing_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M10.25 15c4.951 0 9.25 1.763 9.25 5.643 0 2.016-.781 2.857-2.456 2.857H3.456C1.78 23.5 1 22.66 1 20.643 1 16.763 5.299 15 10.25 15m0 2C6.304 17 3 18.355 3 20.643c0 .89-.071.863.372.858l13.672-.001c.536 0 .456.086.456-.857 0-2.288-3.304-3.643-7.25-3.643m12.043-9.707a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L24.585 13H18.5a1 1 0 0 1-.993-.883L17.5 12a1 1 0 0 1 1-1h6.085l-2.292-2.293a1 1 0 0 1-.083-1.32ZM10 3c3.039 0 5.5 2.461 5.5 5.5S13.039 14 10 14a5.5 5.5 0 0 1-5.5-5.5C4.5 5.461 6.961 3 10 3m0 2a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5S11.934 5 10 5"
			})]
		})
	}),
	xB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "user_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M14 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-6 13.475c0-4.109 4.415-6.475 9.5-6.475s9.5 2.366 9.5 6.475c0 2.135-.802 3.025-2.522 3.025H7.022c-1.72 0-2.522-.89-2.522-3.025m2 0c0-1.224.618-2.266 1.916-3.09C9.758 18.032 11.735 17.5 14 17.5s4.242.532 5.584 1.385c1.297.824 1.916 1.866 1.916 3.09 0 .417-.04.69-.085.859a1 1 0 0 1-.042.127c-.06.016-.182.039-.395.039H7.022c-.213 0-.335-.023-.395-.039a1 1 0 0 1-.042-.127c-.045-.168-.085-.442-.085-.86Z",
			clipRule: "evenodd"
		})
	}),
	Dh = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "users_3_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M10.286 17.91C9.39 18.461 9 19.128 9 19.786c0 .481.153.744.325.898.189.168.527.316 1.075.316h7.2c.548 0 .886-.148 1.075-.316.172-.154.325-.417.325-.898 0-.658-.39-1.325-1.286-1.876-.899-.552-2.208-.91-3.714-.91s-2.815.358-3.714.91M9.24 16.206C10.516 15.422 12.207 15 14 15s3.484.422 4.76 1.206c1.279.785 2.24 2.011 2.24 3.58 0 .952-.327 1.796-.995 2.391-.651.58-1.513.823-2.405.823h-7.2c-.892 0-1.754-.242-2.405-.823C7.327 21.582 7 20.738 7 19.786c0-1.569.961-2.795 2.24-3.58m-5.435.876c-.52.346-.805.806-.805 1.418 0 .523.17.88.395 1.105.224.225.582.395 1.105.395a1 1 0 1 1 0 2c-.977 0-1.87-.33-2.52-.98S1 19.477 1 18.5c0-1.388.715-2.428 1.695-3.082.951-.634 2.157-.918 3.305-.918a1 1 0 1 1 0 2c-.852 0-1.646.216-2.195.582m20.39 0c.52.346.805.806.805 1.418 0 .523-.17.88-.395 1.105-.224.225-.582.395-1.105.395a1 1 0 1 0 0 2c.977 0 1.87-.33 2.52-.98s.98-1.543.98-2.52c0-1.388-.715-2.428-1.695-3.082-.951-.634-2.157-.918-3.305-.918a1 1 0 1 0 0 2c.852 0 1.646.216 2.195.582M11.5 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M14 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M7 6.5a2 2 0 1 0 0 4 1 1 0 1 1 0 2 4 4 0 0 1 0-8 1 1 0 0 1 0 2m14 0a2 2 0 1 1 0 4 1 1 0 1 0 0 2 4 4 0 0 0 0-8 1 1 0 1 0 0 2",
			clipRule: "evenodd"
		})
	}),
	Su = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "users_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M9 15c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H3.647c-1.458 0-2.147-.797-2.147-2.571C1.5 16.542 5.003 15 9 15m10.5 0c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H19a1 1 0 0 1 0-2h5.913l.042.002.013.001.002-.015c.01-.081.024-.22.029-.427l.001-.132C25 18.095 22.513 17 19.5 17c-.428 0-.898.03-1.37.09a1 1 0 1 1-.256-1.983A13 13 0 0 1 19.5 15M9 17c-3.013 0-5.5 1.095-5.5 2.929 0 .28.017.462.03.56l.001.014.014-.001.019-.001h10.891l.013.002.002-.015c.013-.097.03-.28.03-.56C14.5 18.096 12.013 17 9 17M19.5 5a4.25 4.25 0 0 1 4.25 4.25 4.25 4.25 0 0 1-4.25 4.25 4.25 4.25 0 0 1-4.25-4.25A4.25 4.25 0 0 1 19.5 5M9 5a4.25 4.25 0 0 1 4.25 4.25A4.25 4.25 0 0 1 9 13.5a4.25 4.25 0 0 1-4.25-4.25A4.25 4.25 0 0 1 9 5m10.5 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 1 0 0-4.5M9 7a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 1 0 9 7"
			})]
		})
	}),
	SB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "videocam_slash_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M9.357 23h4.286c1.084 0 1.958 0 2.666-.058.665-.054 1.257-.164 1.806-.413l2.178 2.178a1 1 0 0 0 1.414-1.414l-19-19a1 1 0 0 0-1.414 1.414l1.536 1.536a5 5 0 0 0-.284.487c-.302.592-.428 1.233-.487 1.961C2 10.4 2 11.273 2 12.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.232.428 1.961.487C7.4 23 8.273 23 9.357 23M4.051 9.854C4.001 10.471 4 11.264 4 12.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h4.2c1.137 0 1.929 0 2.546-.051q.192-.016.351-.037L4.293 8.708c-.116.255-.197.593-.242 1.146M13.6 7c1.137 0 1.929 0 2.546.051.605.05.953.142 1.216.276a3 3 0 0 1 1.311 1.311c.134.263.226.611.276 1.216.05.617.051 1.41.051 2.546v4.095a2 2 0 0 0 .912 1.678l.76.493q.78.504 1.556 1.01c.239.154.52.337.773.47.255.134.794.395 1.482.348a2.7 2.7 0 0 0 1.975-1.07c.415-.552.49-1.148.516-1.434.026-.285.026-.62.026-.904v-6.172c0-.284 0-.619-.026-.904s-.1-.882-.516-1.434a2.7 2.7 0 0 0-1.975-1.07c-.688-.047-1.227.214-1.482.348-.253.133-.534.316-.773.47l-.904.587-.436.283c-.074-.528-.202-1.01-.433-1.464a5 5 0 0 0-2.185-2.185c-.592-.302-1.233-.428-1.961-.487C15.6 5 14.727 5 13.643 5H8.656a1 1 0 0 0 0 2zm7.4 5.357v4.138l2.27 1.472c.563.365.844.548 1.077.532a.7.7 0 0 0 .513-.277c.14-.187.14-.522.14-1.192v-6.06c0-.67 0-1.005-.14-1.192a.7.7 0 0 0-.513-.277c-.233-.016-.514.167-1.077.532L21 11.505z",
			clipRule: "evenodd"
		})
	}),
	kB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "view_outline_28",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			d: "M14 6c5.994 0 11.5 4.557 11.5 8s-5.506 8-11.5 8-11.5-4.557-11.5-8S8.006 6 14 6m0 2c-4.964 0-9.5 3.754-9.5 6s4.536 6 9.5 6 9.5-3.754 9.5-6-4.536-6-9.5-6m0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
		})
	}),
	Fv = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "wallet_outline_28",
		vkuiProps: e,
		children: u.jsxs("g", {
			fill: "none",
			fillRule: "evenodd",
			children: [u.jsx("path", {
				d: "M0 0h28v28H0z"
			}), u.jsx("path", {
				fill: "currentColor",
				fillRule: "nonzero",
				d: "M17.795 4c1.167 0 1.77.116 2.398.452a3.27 3.27 0 0 1 1.355 1.355c.317.594.439 1.166.451 2.213.845.055 1.383.202 1.938.499.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783v6.308c0 1.37-.134 2.063-.519 2.783a3.73 3.73 0 0 1-1.544 1.544c-.72.385-1.413.519-2.783.519H6.846c-1.37 0-2.063-.134-2.783-.519a3.73 3.73 0 0 1-1.544-1.544C2.134 21.217 2 20.524 2 19.154V8h.002v-.055c.017-1 .14-1.558.45-2.138a3.27 3.27 0 0 1 1.355-1.355C4.435 4.116 5.037 4 6.205 4zm3.36 6H4v9.154c0 1.068.073 1.449.283 1.84q.252.471.723.723c.391.21.772.283 1.84.283h14.308c1.068 0 1.449-.073 1.84-.283q.471-.252.723-.723c.21-.391.283-.772.283-1.84v-6.308c0-1.068-.073-1.449-.283-1.84a1.73 1.73 0 0 0-.723-.723c-.391-.21-.772-.283-1.84-.283M20 15a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm-2.205-9H6.205c-.865 0-1.156.056-1.454.216q-.35.185-.535.535C4.069 7.024 4.01 7.29 4 8H20c-.01-.709-.068-.976-.215-1.25a1.27 1.27 0 0 0-.535-.534C18.951 6.056 18.66 6 17.795 6"
			})]
		})
	}),
	bB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "work_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M13.46 3h1.08c.666 0 1.226 0 1.683.037.48.04.934.124 1.366.344a3.5 3.5 0 0 1 1.53 1.53c.22.432.304.887.344 1.366.046.572.037 1.15.037 1.723h1.54c.666 0 1.226 0 1.683.037.48.04.934.124 1.366.344a3.5 3.5 0 0 1 1.53 1.53c.22.432.304.887.344 1.366.037.457.037 1.017.037 1.683v1.676c0 .39 0 .74-.024 1.03-.09 1.103-.85 2.068-1.976 2.268 0 .772.019 1.548-.044 2.318-.046.562-.145 1.079-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H9.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564-.063-.77-.044-1.546-.044-2.318-1.126-.2-1.886-1.165-1.976-2.267C2 15.375 2 15.025 2 14.637V12.96c0-.666 0-1.226.037-1.683.04-.48.124-.934.344-1.366a3.5 3.5 0 0 1 1.53-1.53c.432-.22.887-.304 1.366-.344C5.734 8 6.294 8 6.96 8H8.5c0-.574-.01-1.15.037-1.723.04-.48.124-.934.344-1.366a3.5 3.5 0 0 1 1.53-1.53c.432-.22.887-.304 1.366-.344C12.234 3 12.794 3 13.46 3M5.4 16h17.2c.437 0 .704 0 .904-.017.305-.025.456-.194.479-.48.016-.2.017-.467.017-.903V13c0-.717 0-1.194-.03-1.56-.03-.356-.081-.518-.133-.621a1.5 1.5 0 0 0-.656-.656c-.103-.052-.265-.103-.62-.132C22.194 10 21.717 10 21 10H7c-.717 0-1.194 0-1.56.03-.356.03-.518.081-.621.134a1.5 1.5 0 0 0-.656.655c-.052.103-.103.265-.132.62C4 11.806 4 12.283 4 13v1.6c0 .437 0 .704.017.904.026.31.187.455.48.479.2.016.466.017.903.017m.6 2c0 .695-.02 1.395.038 2.089.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C8.361 22 8.943 22 9.8 22h8.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.057-.694.038-1.394.038-2.089zM17.47 6.44c.03.366.03.843.03 1.56h-7c0-.717 0-1.194.03-1.56.03-.356.081-.518.134-.621a1.5 1.5 0 0 1 .655-.656c.103-.052.265-.103.62-.132C12.306 5 12.783 5 13.5 5h1c.717 0 1.194 0 1.56.03.356.03.518.081.621.133a1.5 1.5 0 0 1 .656.656c.052.103.103.265.132.62",
			clipRule: "evenodd"
		})
	}),
	CB = e => u.jsx(we, {
		viewBox: "0 0 28 28",
		width: 28,
		height: 28,
		vkuiIconId: "write_outline_28",
		vkuiAttrs: {
			fill: "none"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			d: "M21.782 3.335a3 3 0 0 0-2.724 0c-.428.218-.8.591-1.23 1.023L4.677 17.508c-.354.355-.609.609-.818.897a4.5 4.5 0 0 0-.804 1.94C3 20.698 3 21.058 3 21.558v1.124c-.001.282-.002.628.098.937a2 2 0 0 0 1.284 1.284c.309.1.655.1.937.098h1.124c.5 0 .86 0 1.211-.055a4.5 4.5 0 0 0 1.941-.804c.288-.21.542-.464.896-.818l13.151-13.15c.432-.431.805-.803 1.023-1.231a3 3 0 0 0 0-2.724c-.218-.428-.591-.8-1.023-1.23l-.63-.63c-.43-.432-.802-.805-1.23-1.023m-1.816 1.782a1 1 0 0 1 .908 0c.106.054.237.169.819.75l.44.44c.582.582.696.713.75.819a1 1 0 0 1 0 .908c-.054.106-.168.237-.75.819l-.858.858-2.986-2.986.858-.858c.582-.581.713-.696.82-.75M16.875 8.14 6.142 18.872c-.425.425-.56.564-.665.708a2.5 2.5 0 0 0-.446 1.079c-.028.176-.03.369-.03.97v.971c-.001.197 0 .305.004.383v.012h.012c.078.005.186.005.383.005h.97c.602 0 .795-.003.971-.03a2.5 2.5 0 0 0 1.079-.447c.144-.105.283-.24.708-.665l10.733-10.733z",
			clipRule: "evenodd"
		})
	}),
	EB = e => u.jsx(we, {
		viewBox: "0 0 56 56",
		width: 56,
		height: 56,
		vkuiIconId: "hand_point_up_left_outline_56",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M5.437 14.972a2.376 2.376 0 0 1 3.612-.308l9.02 8.964q.293.412.673.774l2.272 2.153a1.498 1.498 0 0 0 2.087-2.152l-2.696-2.68a2.258 2.258 0 0 1 3.515-2.76l2.57 2.478a1.498 1.498 0 1 0 2.08-2.159l-1.39-1.342a2.35 2.35 0 0 1 3.145-3.487l2.049 1.73a1.498 1.498 0 1 0 1.933-2.29l-.462-.391a2.553 2.553 0 1 1 3.459-3.748l6.909 6.972q.034.034.07.067c3.443 3.05 5.446 6.85 5.694 10.69.247 3.807-1.218 7.842-5.073 11.45-4.498 4.21-8.983 5.6-12.307 5.96-1.67.183-3.06.106-4.019-.014-.48-.06-.85-.13-1.093-.182a7 7 0 0 1-.265-.063l-.028-.007-14.617-5.325a2.108 2.108 0 0 1 1.204-4.032l6.864 1.616a1.498 1.498 0 0 0 1.402-2.52L5.694 18.032a2.38 2.38 0 0 1-.257-3.06m21.004 32.557-.136-.037h.002l.005.002.011.003.034.01.11.03q.138.035.381.09c.323.07.783.156 1.359.227a20.4 20.4 0 0 0 4.713.02c3.893-.423 9.005-2.048 14.031-6.752 4.435-4.15 6.327-9.032 6.016-13.832-.307-4.752-2.76-9.238-6.66-12.709l-6.875-6.938a5.549 5.549 0 0 0-9.467 3.384 5.34 5.34 0 0 0-4.902 1.406 5.32 5.32 0 0 0-1.543 3.03 5.25 5.25 0 0 0-4.817 1.348 5.2 5.2 0 0 0-1.276 1.952l-6.265-6.226a5.376 5.376 0 0 0-7.585 7.616l12.617 12.606-1.73-.407a5.104 5.104 0 0 0-2.915 9.767l14.67 5.344.053.019.032.01z",
			clipRule: "evenodd"
		})
	}),
	AB = e => u.jsx(we, {
		viewBox: "0 0 56 56",
		width: 56,
		height: 56,
		vkuiIconId: "web_device_outline_56",
		vkuiAttrs: {
			fill: "currentColor"
		},
		vkuiProps: e,
		children: u.jsx("path", {
			fillRule: "evenodd",
			d: "M19.036 4h6.928c1.626 0 2.937 0 3.999.087 1.093.09 2.053.278 2.942.73a7.5 7.5 0 0 1 3.277 3.278c.453.889.642 1.849.731 2.942C37 12.1 37 13.41 37 15.036V19.5a1.5 1.5 0 0 1-3 0v-4.4c0-1.705-.001-2.893-.077-3.819-.074-.907-.212-1.429-.413-1.824a4.5 4.5 0 0 0-1.967-1.967c-.395-.2-.917-.34-1.824-.413C28.793 7 27.605 7 25.9 7h-6.8c-1.705 0-2.893.001-3.819.077-.907.074-1.429.212-1.824.413a4.5 4.5 0 0 0-1.966 1.967c-.202.395-.34.917-.414 1.824C11 12.207 11 13.395 11 15.1v25.8c0 1.705.001 2.893.077 3.819.074.907.212 1.429.414 1.824a4.5 4.5 0 0 0 1.966 1.967c.395.2.917.34 1.824.413.926.076 2.114.077 3.819.077h8.4a1.5 1.5 0 0 1 0 3h-8.464c-1.626 0-2.937 0-3.999-.087-1.093-.09-2.054-.278-2.942-.73a7.5 7.5 0 0 1-3.278-3.278c-.452-.889-.641-1.849-.73-2.942C8 43.9 8 42.59 8 40.964V15.036c0-1.626 0-2.937.087-3.999.09-1.093.278-2.053.73-2.942a7.5 7.5 0 0 1 3.278-3.278c.888-.452 1.849-.641 2.942-.73C16.1 4 17.41 4 19.036 4m5.552 27c1.697-3.698 5.22-6.385 9.413-6.907A18 18 0 0 0 30.204 31zm-.71 2a12 12 0 0 0-.378 3c0 1.036.131 2.041.378 3h5.87a18.1 18.1 0 0 1 0-6zm7.902 0a16 16 0 0 0-.28 3q.002 1.54.28 3h7.44c.184-.972.28-1.974.28-3a16 16 0 0 0-.28-3zm9.471 0a18.1 18.1 0 0 1 0 6h5.871a12 12 0 0 0 .378-3c0-1.036-.131-2.041-.378-3h-5.87Zm5.161-2h-5.616A18 18 0 0 0 37 24.093c4.194.522 7.716 3.209 9.413 6.907Zm0 10h-5.615a18 18 0 0 1-3.798 6.907c4.194-.522 7.716-3.209 9.413-6.907m-7.709 0h-6.406a16 16 0 0 0 3.203 5.583A16 16 0 0 0 38.703 41m-8.5 0h-5.615c1.697 3.698 5.22 6.385 9.413 6.907A18 18 0 0 1 30.204 41Zm8.5-10h-6.406a16 16 0 0 1 3.203-5.583A16 16 0 0 1 38.703 31"
		})
	});
var Kd = class {
		constructor() {
			this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
		}
		subscribe(e) {
			return this.listeners.add(e), this.onSubscribe(), () => {
				this.listeners.delete(e), this.onUnsubscribe()
			}
		}
		hasListeners() {
			return this.listeners.size > 0
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	IB = {
		setTimeout: (e, t) => setTimeout(e, t),
		clearTimeout: e => clearTimeout(e),
		setInterval: (e, t) => setInterval(e, t),
		clearInterval: e => clearInterval(e)
	},
	Do, Wh, r_, PB = (r_ = class {
		constructor() {
			$e(this, Do, IB);
			$e(this, Wh, !1)
		}
		setTimeoutProvider(e) {
			je(this, Do, e)
		}
		setTimeout(e, t) {
			return Q(this, Do).setTimeout(e, t)
		}
		clearTimeout(e) {
			Q(this, Do).clearTimeout(e)
		}
		setInterval(e, t) {
			return Q(this, Do).setInterval(e, t)
		}
		clearInterval(e) {
			Q(this, Do).clearInterval(e)
		}
	}, Do = new WeakMap, Wh = new WeakMap, r_),
	Bh = new PB;

function OB(e) {
	setTimeout(e, 0)
}
var Ud = typeof window > "u" || "Deno" in globalThis;

function sr() {}

function MB(e, t) {
	return typeof e == "function" ? e(t) : e
}

function jB(e) {
	return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function TB(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0)
}

function zh(e, t) {
	return typeof e == "function" ? e(t) : e
}

function RB(e, t) {
	return typeof e == "function" ? e(t) : e
}

function Vv(e, t) {
	const {
		type: n = "all",
		exact: r,
		fetchStatus: o,
		predicate: i,
		queryKey: a,
		stale: c
	} = e;
	if (a) {
		if (r) {
			if (t.queryHash !== vp(a, t.options)) return !1
		} else if (!Ql(t.queryKey, a)) return !1
	}
	if (n !== "all") {
		const d = t.isActive();
		if (n === "active" && !d || n === "inactive" && d) return !1
	}
	return !(typeof c == "boolean" && t.isStale() !== c || o && o !== t.state.fetchStatus || i && !i(t))
}

function Hv(e, t) {
	const {
		exact: n,
		status: r,
		predicate: o,
		mutationKey: i
	} = e;
	if (i) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (Xl(t.options.mutationKey) !== Xl(i)) return !1
		} else if (!Ql(t.options.mutationKey, i)) return !1
	}
	return !(r && t.state.status !== r || o && !o(t))
}

function vp(e, t) {
	return ((t == null ? void 0 : t.queryKeyHashFn) || Xl)(e)
}

function Xl(e) {
	return JSON.stringify(e, (t, n) => $h(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function Ql(e, t) {
	return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Ql(e[n], t[n])) : !1
}
var NB = Object.prototype.hasOwnProperty;

function $y(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	const r = Wv(e) && Wv(t);
	if (!r && !($h(e) && $h(t))) return t;
	const i = (r ? e : Object.keys(e)).length,
		a = r ? t : Object.keys(t),
		c = a.length,
		d = r ? new Array(c) : {};
	let f = 0;
	for (let m = 0; m < c; m++) {
		const _ = r ? m : a[m],
			v = e[_],
			x = t[_];
		if (v === x) {
			d[_] = v, (r ? m < i : NB.call(e, _)) && f++;
			continue
		}
		if (v === null || x === null || typeof v != "object" || typeof x != "object") {
			d[_] = x;
			continue
		}
		const k = $y(v, x, n + 1);
		d[_] = k, k === v && f++
	}
	return i === c && f === i ? e : d
}

function Wv(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length
}

function $h(e) {
	if (!Kv(e)) return !1;
	const t = e.constructor;
	if (t === void 0) return !0;
	const n = t.prototype;
	return !(!Kv(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Kv(e) {
	return Object.prototype.toString.call(e) === "[object Object]"
}

function LB(e) {
	return new Promise(t => {
		Bh.setTimeout(t, e)
	})
}

function DB(e, t, n) {
	return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? $y(e, t) : t
}

function BB(e, t, n = 0) {
	const r = [...e, t];
	return n && r.length > n ? r.slice(1) : r
}

function zB(e, t, n = 0) {
	const r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r
}
var _p = Symbol();

function Fy(e, t) {
	return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === _p ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}

function $B(e, t, n) {
	let r = !1,
		o;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (o ?? (o = t()), r || (r = !0, o.aborted ? n() : o.addEventListener("abort", n, {
			once: !0
		})), o)
	}), e
}
var Fi, Bo, na, o_, FB = (o_ = class extends Kd {
		constructor() {
			super();
			$e(this, Fi);
			$e(this, Bo);
			$e(this, na);
			je(this, na, t => {
				if (!Ud && window.addEventListener) {
					const n = () => t();
					return window.addEventListener("visibilitychange", n, !1), () => {
						window.removeEventListener("visibilitychange", n)
					}
				}
			})
		}
		onSubscribe() {
			Q(this, Bo) || this.setEventListener(Q(this, na))
		}
		onUnsubscribe() {
			var t;
			this.hasListeners() || ((t = Q(this, Bo)) == null || t.call(this), je(this, Bo, void 0))
		}
		setEventListener(t) {
			var n;
			je(this, na, t), (n = Q(this, Bo)) == null || n.call(this), je(this, Bo, t(r => {
				typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
			}))
		}
		setFocused(t) {
			Q(this, Fi) !== t && (je(this, Fi, t), this.onFocus())
		}
		onFocus() {
			const t = this.isFocused();
			this.listeners.forEach(n => {
				n(t)
			})
		}
		isFocused() {
			var t;
			return typeof Q(this, Fi) == "boolean" ? Q(this, Fi) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
		}
	}, Fi = new WeakMap, Bo = new WeakMap, na = new WeakMap, o_),
	Vy = new FB;

function VB() {
	let e, t;
	const n = new Promise((o, i) => {
		e = o, t = i
	});
	n.status = "pending", n.catch(() => {});

	function r(o) {
		Object.assign(n, o), delete n.resolve, delete n.reject
	}
	return n.resolve = o => {
		r({
			status: "fulfilled",
			value: o
		}), e(o)
	}, n.reject = o => {
		r({
			status: "rejected",
			reason: o
		}), t(o)
	}, n
}
var HB = OB;

function WB() {
	let e = [],
		t = 0,
		n = c => {
			c()
		},
		r = c => {
			c()
		},
		o = HB;
	const i = c => {
			t ? e.push(c) : o(() => {
				n(c)
			})
		},
		a = () => {
			const c = e;
			e = [], c.length && o(() => {
				r(() => {
					c.forEach(d => {
						n(d)
					})
				})
			})
		};
	return {
		batch: c => {
			let d;
			t++;
			try {
				d = c()
			} finally {
				t--, t || a()
			}
			return d
		},
		batchCalls: c => (...d) => {
			i(() => {
				c(...d)
			})
		},
		schedule: i,
		setNotifyFunction: c => {
			n = c
		},
		setBatchNotifyFunction: c => {
			r = c
		},
		setScheduler: c => {
			o = c
		}
	}
}
var hn = WB(),
	ra, zo, oa, i_, KB = (i_ = class extends Kd {
		constructor() {
			super();
			$e(this, ra, !0);
			$e(this, zo);
			$e(this, oa);
			je(this, oa, t => {
				if (!Ud && window.addEventListener) {
					const n = () => t(!0),
						r = () => t(!1);
					return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
						window.removeEventListener("online", n), window.removeEventListener("offline", r)
					}
				}
			})
		}
		onSubscribe() {
			Q(this, zo) || this.setEventListener(Q(this, oa))
		}
		onUnsubscribe() {
			var t;
			this.hasListeners() || ((t = Q(this, zo)) == null || t.call(this), je(this, zo, void 0))
		}
		setEventListener(t) {
			var n;
			je(this, oa, t), (n = Q(this, zo)) == null || n.call(this), je(this, zo, t(this.setOnline.bind(this)))
		}
		setOnline(t) {
			Q(this, ra) !== t && (je(this, ra, t), this.listeners.forEach(r => {
				r(t)
			}))
		}
		isOnline() {
			return Q(this, ra)
		}
	}, ra = new WeakMap, zo = new WeakMap, oa = new WeakMap, i_),
	fd = new KB;

function UB(e) {
	return Math.min(1e3 * 2 ** e, 3e4)
}

function Hy(e) {
	return (e ?? "online") === "online" ? fd.isOnline() : !0
}
var Fh = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
	}
};

function Wy(e) {
	let t = !1,
		n = 0,
		r;
	const o = VB(),
		i = () => o.status !== "pending",
		a = A => {
			var C;
			if (!i()) {
				const y = new Fh(A);
				v(y), (C = e.onCancel) == null || C.call(e, y)
			}
		},
		c = () => {
			t = !0
		},
		d = () => {
			t = !1
		},
		f = () => Vy.isFocused() && (e.networkMode === "always" || fd.isOnline()) && e.canRun(),
		m = () => Hy(e.networkMode) && e.canRun(),
		_ = A => {
			i() || (r == null || r(), o.resolve(A))
		},
		v = A => {
			i() || (r == null || r(), o.reject(A))
		},
		x = () => new Promise(A => {
			var C;
			r = y => {
				(i() || f()) && A(y)
			}, (C = e.onPause) == null || C.call(e)
		}).then(() => {
			var A;
			r = void 0, i() || (A = e.onContinue) == null || A.call(e)
		}),
		k = () => {
			if (i()) return;
			let A;
			const C = n === 0 ? e.initialPromise : void 0;
			try {
				A = C ?? e.fn()
			} catch (y) {
				A = Promise.reject(y)
			}
			Promise.resolve(A).then(_).catch(y => {
				var $;
				if (i()) return;
				const w = e.retry ?? (Ud ? 0 : 3),
					b = e.retryDelay ?? UB,
					O = typeof b == "function" ? b(n, y) : b,
					L = w === !0 || typeof w == "number" && n < w || typeof w == "function" && w(n, y);
				if (t || !L) {
					v(y);
					return
				}
				n++, ($ = e.onFail) == null || $.call(e, n, y), LB(O).then(() => f() ? void 0 : x()).then(() => {
					t ? v(y) : k()
				})
			})
		};
	return {
		promise: o,
		status: () => o.status,
		cancel: a,
		continue: () => (r == null || r(), o),
		cancelRetry: c,
		continueRetry: d,
		canStart: m,
		start: () => (m() ? k() : x().then(k), o)
	}
}
var Vi, s_, Ky = (s_ = class {
		constructor() {
			$e(this, Vi)
		}
		destroy() {
			this.clearGcTimeout()
		}
		scheduleGc() {
			this.clearGcTimeout(), jB(this.gcTime) && je(this, Vi, Bh.setTimeout(() => {
				this.optionalRemove()
			}, this.gcTime))
		}
		updateGcTime(e) {
			this.gcTime = Math.max(this.gcTime || 0, e ?? (Ud ? 1 / 0 : 5 * 60 * 1e3))
		}
		clearGcTimeout() {
			Q(this, Vi) && (Bh.clearTimeout(Q(this, Vi)), je(this, Vi, void 0))
		}
	}, Vi = new WeakMap, s_),
	Hi, ia, qn, Wi, Dt, Jl, Ki, ar, to, a_, YB = (a_ = class extends Ky {
		constructor(t) {
			super();
			$e(this, ar);
			$e(this, Hi);
			$e(this, ia);
			$e(this, qn);
			$e(this, Wi);
			$e(this, Dt);
			$e(this, Jl);
			$e(this, Ki);
			je(this, Ki, !1), je(this, Jl, t.defaultOptions), this.setOptions(t.options), this.observers = [], je(this, Wi, t.client), je(this, qn, Q(this, Wi).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, je(this, Hi, Yv(this.options)), this.state = t.state ?? Q(this, Hi), this.scheduleGc()
		}
		get meta() {
			return this.options.meta
		}
		get promise() {
			var t;
			return (t = Q(this, Dt)) == null ? void 0 : t.promise
		}
		setOptions(t) {
			if (this.options = {
					...Q(this, Jl),
					...t
				}, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
				const n = Yv(this.options);
				n.data !== void 0 && (this.setState(Uv(n.data, n.dataUpdatedAt)), je(this, Hi, n))
			}
		}
		optionalRemove() {
			!this.observers.length && this.state.fetchStatus === "idle" && Q(this, qn).remove(this)
		}
		setData(t, n) {
			const r = DB(this.state.data, t, this.options);
			return Zt(this, ar, to).call(this, {
				data: r,
				type: "success",
				dataUpdatedAt: n == null ? void 0 : n.updatedAt,
				manual: n == null ? void 0 : n.manual
			}), r
		}
		setState(t, n) {
			Zt(this, ar, to).call(this, {
				type: "setState",
				state: t,
				setStateOptions: n
			})
		}
		cancel(t) {
			var r, o;
			const n = (r = Q(this, Dt)) == null ? void 0 : r.promise;
			return (o = Q(this, Dt)) == null || o.cancel(t), n ? n.then(sr).catch(sr) : Promise.resolve()
		}
		destroy() {
			super.destroy(), this.cancel({
				silent: !0
			})
		}
		reset() {
			this.destroy(), this.setState(Q(this, Hi))
		}
		isActive() {
			return this.observers.some(t => RB(t.options.enabled, this) !== !1)
		}
		isDisabled() {
			return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === _p || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
		}
		isStatic() {
			return this.getObserversCount() > 0 ? this.observers.some(t => zh(t.options.staleTime, this) === "static") : !1
		}
		isStale() {
			return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
		}
		isStaleByTime(t = 0) {
			return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !TB(this.state.dataUpdatedAt, t)
		}
		onFocus() {
			var n;
			const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
			t == null || t.refetch({
				cancelRefetch: !1
			}), (n = Q(this, Dt)) == null || n.continue()
		}
		onOnline() {
			var n;
			const t = this.observers.find(r => r.shouldFetchOnReconnect());
			t == null || t.refetch({
				cancelRefetch: !1
			}), (n = Q(this, Dt)) == null || n.continue()
		}
		addObserver(t) {
			this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), Q(this, qn).notify({
				type: "observerAdded",
				query: this,
				observer: t
			}))
		}
		removeObserver(t) {
			this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (Q(this, Dt) && (Q(this, Ki) ? Q(this, Dt).cancel({
				revert: !0
			}) : Q(this, Dt).cancelRetry()), this.scheduleGc()), Q(this, qn).notify({
				type: "observerRemoved",
				query: this,
				observer: t
			}))
		}
		getObserversCount() {
			return this.observers.length
		}
		invalidate() {
			this.state.isInvalidated || Zt(this, ar, to).call(this, {
				type: "invalidate"
			})
		}
		async fetch(t, n) {
			var d, f, m, _, v, x, k, A, C, y, w, b;
			if (this.state.fetchStatus !== "idle" && ((d = Q(this, Dt)) == null ? void 0 : d.status()) !== "rejected") {
				if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
					silent: !0
				});
				else if (Q(this, Dt)) return Q(this, Dt).continueRetry(), Q(this, Dt).promise
			}
			if (t && this.setOptions(t), !this.options.queryFn) {
				const O = this.observers.find(L => L.options.queryFn);
				O && this.setOptions(O.options)
			}
			const r = new AbortController,
				o = O => {
					Object.defineProperty(O, "signal", {
						enumerable: !0,
						get: () => (je(this, Ki, !0), r.signal)
					})
				},
				i = () => {
					const O = Fy(this.options, n),
						$ = (() => {
							const H = {
								client: Q(this, Wi),
								queryKey: this.queryKey,
								meta: this.meta
							};
							return o(H), H
						})();
					return je(this, Ki, !1), this.options.persister ? this.options.persister(O, $, this) : O($)
				},
				c = (() => {
					const O = {
						fetchOptions: n,
						options: this.options,
						queryKey: this.queryKey,
						client: Q(this, Wi),
						state: this.state,
						fetchFn: i
					};
					return o(O), O
				})();
			(f = this.options.behavior) == null || f.onFetch(c, this), je(this, ia, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((m = c.fetchOptions) == null ? void 0 : m.meta)) && Zt(this, ar, to).call(this, {
				type: "fetch",
				meta: (_ = c.fetchOptions) == null ? void 0 : _.meta
			}), je(this, Dt, Wy({
				initialPromise: n == null ? void 0 : n.initialPromise,
				fn: c.fetchFn,
				onCancel: O => {
					O instanceof Fh && O.revert && this.setState({
						...Q(this, ia),
						fetchStatus: "idle"
					}), r.abort()
				},
				onFail: (O, L) => {
					Zt(this, ar, to).call(this, {
						type: "failed",
						failureCount: O,
						error: L
					})
				},
				onPause: () => {
					Zt(this, ar, to).call(this, {
						type: "pause"
					})
				},
				onContinue: () => {
					Zt(this, ar, to).call(this, {
						type: "continue"
					})
				},
				retry: c.options.retry,
				retryDelay: c.options.retryDelay,
				networkMode: c.options.networkMode,
				canRun: () => !0
			}));
			try {
				const O = await Q(this, Dt).start();
				if (O === void 0) throw new Error(`${this.queryHash} data is undefined`);
				return this.setData(O), (x = (v = Q(this, qn).config).onSuccess) == null || x.call(v, O, this), (A = (k = Q(this, qn).config).onSettled) == null || A.call(k, O, this.state.error, this), O
			} catch (O) {
				if (O instanceof Fh) {
					if (O.silent) return Q(this, Dt).promise;
					if (O.revert) {
						if (this.state.data === void 0) throw O;
						return this.state.data
					}
				}
				throw Zt(this, ar, to).call(this, {
					type: "error",
					error: O
				}), (y = (C = Q(this, qn).config).onError) == null || y.call(C, O, this), (b = (w = Q(this, qn).config).onSettled) == null || b.call(w, this.state.data, O, this), O
			} finally {
				this.scheduleGc()
			}
		}
	}, Hi = new WeakMap, ia = new WeakMap, qn = new WeakMap, Wi = new WeakMap, Dt = new WeakMap, Jl = new WeakMap, Ki = new WeakMap, ar = new WeakSet, to = function(t) {
		const n = r => {
			switch (t.type) {
				case "failed":
					return {
						...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
					};
				case "pause":
					return {
						...r, fetchStatus: "paused"
					};
				case "continue":
					return {
						...r, fetchStatus: "fetching"
					};
				case "fetch":
					return {
						...r, ...qB(r.data, this.options), fetchMeta: t.meta ?? null
					};
				case "success":
					const o = {
						...r,
						...Uv(t.data, t.dataUpdatedAt),
						dataUpdateCount: r.dataUpdateCount + 1,
						...!t.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					return je(this, ia, t.manual ? o : void 0), o;
				case "error":
					const i = t.error;
					return {
						...r, error: i, errorUpdateCount: r.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: r.fetchFailureCount + 1, fetchFailureReason: i, fetchStatus: "idle", status: "error", isInvalidated: !0
					};
				case "invalidate":
					return {
						...r, isInvalidated: !0
					};
				case "setState":
					return {
						...r, ...t.state
					}
			}
		};
		this.state = n(this.state), hn.batch(() => {
			this.observers.forEach(r => {
				r.onQueryUpdate()
			}), Q(this, qn).notify({
				query: this,
				type: "updated",
				action: t
			})
		})
	}, a_);

function qB(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: Hy(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	}
}

function Uv(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	}
}

function Yv(e) {
	const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
		n = t !== void 0,
		r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? r ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle"
	}
}

function qv(e) {
	return {
		onFetch: (t, n) => {
			var m, _, v, x, k;
			const r = t.options,
				o = (v = (_ = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : _.fetchMore) == null ? void 0 : v.direction,
				i = ((x = t.state.data) == null ? void 0 : x.pages) || [],
				a = ((k = t.state.data) == null ? void 0 : k.pageParams) || [];
			let c = {
					pages: [],
					pageParams: []
				},
				d = 0;
			const f = async () => {
				let A = !1;
				const C = b => {
						$B(b, () => t.signal, () => A = !0)
					},
					y = Fy(t.options, t.fetchOptions),
					w = async (b, O, L) => {
						if (A) return Promise.reject();
						if (O == null && b.pages.length) return Promise.resolve(b);
						const H = (() => {
								const oe = {
									client: t.client,
									queryKey: t.queryKey,
									pageParam: O,
									direction: L ? "backward" : "forward",
									meta: t.options.meta
								};
								return C(oe), oe
							})(),
							q = await y(H),
							{
								maxPages: ne
							} = t.options,
							G = L ? zB : BB;
						return {
							pages: G(b.pages, q, ne),
							pageParams: G(b.pageParams, O, ne)
						}
					};
				if (o && i.length) {
					const b = o === "backward",
						O = b ? GB : Gv,
						L = {
							pages: i,
							pageParams: a
						},
						$ = O(r, L);
					c = await w(L, $, b)
				} else {
					const b = e ?? i.length;
					do {
						const O = d === 0 ? a[0] ?? r.initialPageParam : Gv(r, c);
						if (d > 0 && O == null) break;
						c = await w(c, O), d++
					} while (d < b)
				}
				return c
			};
			t.options.persister ? t.fetchFn = () => {
				var A, C;
				return (C = (A = t.options).persister) == null ? void 0 : C.call(A, f, {
					client: t.client,
					queryKey: t.queryKey,
					meta: t.options.meta,
					signal: t.signal
				}, n)
			} : t.fetchFn = f
		}
	}
}

function Gv(e, {
	pages: t,
	pageParams: n
}) {
	const r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function GB(e, {
	pages: t,
	pageParams: n
}) {
	var r;
	return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ec, Pr, nn, Ui, Or, Mo, l_, XB = (l_ = class extends Ky {
	constructor(t) {
		super();
		$e(this, Or);
		$e(this, ec);
		$e(this, Pr);
		$e(this, nn);
		$e(this, Ui);
		je(this, ec, t.client), this.mutationId = t.mutationId, je(this, nn, t.mutationCache), je(this, Pr, []), this.state = t.state || QB(), this.setOptions(t.options), this.scheduleGc()
	}
	setOptions(t) {
		this.options = t, this.updateGcTime(this.options.gcTime)
	}
	get meta() {
		return this.options.meta
	}
	addObserver(t) {
		Q(this, Pr).includes(t) || (Q(this, Pr).push(t), this.clearGcTimeout(), Q(this, nn).notify({
			type: "observerAdded",
			mutation: this,
			observer: t
		}))
	}
	removeObserver(t) {
		je(this, Pr, Q(this, Pr).filter(n => n !== t)), this.scheduleGc(), Q(this, nn).notify({
			type: "observerRemoved",
			mutation: this,
			observer: t
		})
	}
	optionalRemove() {
		Q(this, Pr).length || (this.state.status === "pending" ? this.scheduleGc() : Q(this, nn).remove(this))
	}
	continue () {
		var t;
		return ((t = Q(this, Ui)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
	}
	async execute(t) {
		var a, c, d, f, m, _, v, x, k, A, C, y, w, b, O, L, $, H;
		const n = () => {
				Zt(this, Or, Mo).call(this, {
					type: "continue"
				})
			},
			r = {
				client: Q(this, ec),
				meta: this.options.meta,
				mutationKey: this.options.mutationKey
			};
		je(this, Ui, Wy({
			fn: () => this.options.mutationFn ? this.options.mutationFn(t, r) : Promise.reject(new Error("No mutationFn found")),
			onFail: (q, ne) => {
				Zt(this, Or, Mo).call(this, {
					type: "failed",
					failureCount: q,
					error: ne
				})
			},
			onPause: () => {
				Zt(this, Or, Mo).call(this, {
					type: "pause"
				})
			},
			onContinue: n,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => Q(this, nn).canRun(this)
		}));
		const o = this.state.status === "pending",
			i = !Q(this, Ui).canStart();
		try {
			if (o) n();
			else {
				Zt(this, Or, Mo).call(this, {
					type: "pending",
					variables: t,
					isPaused: i
				}), Q(this, nn).config.onMutate && await Q(this, nn).config.onMutate(t, this, r);
				const ne = await ((c = (a = this.options).onMutate) == null ? void 0 : c.call(a, t, r));
				ne !== this.state.context && Zt(this, Or, Mo).call(this, {
					type: "pending",
					context: ne,
					variables: t,
					isPaused: i
				})
			}
			const q = await Q(this, Ui).start();
			return await ((f = (d = Q(this, nn).config).onSuccess) == null ? void 0 : f.call(d, q, t, this.state.context, this, r)), await ((_ = (m = this.options).onSuccess) == null ? void 0 : _.call(m, q, t, this.state.context, r)), await ((x = (v = Q(this, nn).config).onSettled) == null ? void 0 : x.call(v, q, null, this.state.variables, this.state.context, this, r)), await ((A = (k = this.options).onSettled) == null ? void 0 : A.call(k, q, null, t, this.state.context, r)), Zt(this, Or, Mo).call(this, {
				type: "success",
				data: q
			}), q
		} catch (q) {
			try {
				await ((y = (C = Q(this, nn).config).onError) == null ? void 0 : y.call(C, q, t, this.state.context, this, r))
			} catch (ne) {
				Promise.reject(ne)
			}
			try {
				await ((b = (w = this.options).onError) == null ? void 0 : b.call(w, q, t, this.state.context, r))
			} catch (ne) {
				Promise.reject(ne)
			}
			try {
				await ((L = (O = Q(this, nn).config).onSettled) == null ? void 0 : L.call(O, void 0, q, this.state.variables, this.state.context, this, r))
			} catch (ne) {
				Promise.reject(ne)
			}
			try {
				await ((H = ($ = this.options).onSettled) == null ? void 0 : H.call($, void 0, q, t, this.state.context, r))
			} catch (ne) {
				Promise.reject(ne)
			}
			throw Zt(this, Or, Mo).call(this, {
				type: "error",
				error: q
			}), q
		} finally {
			Q(this, nn).runNext(this)
		}
	}
}, ec = new WeakMap, Pr = new WeakMap, nn = new WeakMap, Ui = new WeakMap, Or = new WeakSet, Mo = function(t) {
	const n = r => {
		switch (t.type) {
			case "failed":
				return {
					...r, failureCount: t.failureCount, failureReason: t.error
				};
			case "pause":
				return {
					...r, isPaused: !0
				};
			case "continue":
				return {
					...r, isPaused: !1
				};
			case "pending":
				return {
					...r, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now()
				};
			case "success":
				return {
					...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
				};
			case "error":
				return {
					...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
				}
		}
	};
	this.state = n(this.state), hn.batch(() => {
		Q(this, Pr).forEach(r => {
			r.onMutationUpdate(t)
		}), Q(this, nn).notify({
			mutation: this,
			type: "updated",
			action: t
		})
	})
}, l_);

function QB() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	}
}
var oo, lr, tc, c_, ZB = (c_ = class extends Kd {
	constructor(t = {}) {
		super();
		$e(this, oo);
		$e(this, lr);
		$e(this, tc);
		this.config = t, je(this, oo, new Set), je(this, lr, new Map), je(this, tc, 0)
	}
	build(t, n, r) {
		const o = new XB({
			client: t,
			mutationCache: this,
			mutationId: ++Dc(this, tc)._,
			options: t.defaultMutationOptions(n),
			state: r
		});
		return this.add(o), o
	}
	add(t) {
		Q(this, oo).add(t);
		const n = iu(t);
		if (typeof n == "string") {
			const r = Q(this, lr).get(n);
			r ? r.push(t) : Q(this, lr).set(n, [t])
		}
		this.notify({
			type: "added",
			mutation: t
		})
	}
	remove(t) {
		if (Q(this, oo).delete(t)) {
			const n = iu(t);
			if (typeof n == "string") {
				const r = Q(this, lr).get(n);
				if (r)
					if (r.length > 1) {
						const o = r.indexOf(t);
						o !== -1 && r.splice(o, 1)
					} else r[0] === t && Q(this, lr).delete(n)
			}
		}
		this.notify({
			type: "removed",
			mutation: t
		})
	}
	canRun(t) {
		const n = iu(t);
		if (typeof n == "string") {
			const r = Q(this, lr).get(n),
				o = r == null ? void 0 : r.find(i => i.state.status === "pending");
			return !o || o === t
		} else return !0
	}
	runNext(t) {
		var r;
		const n = iu(t);
		if (typeof n == "string") {
			const o = (r = Q(this, lr).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
			return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
		} else return Promise.resolve()
	}
	clear() {
		hn.batch(() => {
			Q(this, oo).forEach(t => {
				this.notify({
					type: "removed",
					mutation: t
				})
			}), Q(this, oo).clear(), Q(this, lr).clear()
		})
	}
	getAll() {
		return Array.from(Q(this, oo))
	}
	find(t) {
		const n = {
			exact: !0,
			...t
		};
		return this.getAll().find(r => Hv(n, r))
	}
	findAll(t = {}) {
		return this.getAll().filter(n => Hv(t, n))
	}
	notify(t) {
		hn.batch(() => {
			this.listeners.forEach(n => {
				n(t)
			})
		})
	}
	resumePausedMutations() {
		const t = this.getAll().filter(n => n.state.isPaused);
		return hn.batch(() => Promise.all(t.map(n => n.continue().catch(sr))))
	}
}, oo = new WeakMap, lr = new WeakMap, tc = new WeakMap, c_);

function iu(e) {
	var t;
	return (t = e.options.scope) == null ? void 0 : t.id
}
var Mr, u_, JB = (u_ = class extends Kd {
		constructor(t = {}) {
			super();
			$e(this, Mr);
			this.config = t, je(this, Mr, new Map)
		}
		build(t, n, r) {
			const o = n.queryKey,
				i = n.queryHash ?? vp(o, n);
			let a = this.get(i);
			return a || (a = new YB({
				client: t,
				queryKey: o,
				queryHash: i,
				options: t.defaultQueryOptions(n),
				state: r,
				defaultOptions: t.getQueryDefaults(o)
			}), this.add(a)), a
		}
		add(t) {
			Q(this, Mr).has(t.queryHash) || (Q(this, Mr).set(t.queryHash, t), this.notify({
				type: "added",
				query: t
			}))
		}
		remove(t) {
			const n = Q(this, Mr).get(t.queryHash);
			n && (t.destroy(), n === t && Q(this, Mr).delete(t.queryHash), this.notify({
				type: "removed",
				query: t
			}))
		}
		clear() {
			hn.batch(() => {
				this.getAll().forEach(t => {
					this.remove(t)
				})
			})
		}
		get(t) {
			return Q(this, Mr).get(t)
		}
		getAll() {
			return [...Q(this, Mr).values()]
		}
		find(t) {
			const n = {
				exact: !0,
				...t
			};
			return this.getAll().find(r => Vv(n, r))
		}
		findAll(t = {}) {
			const n = this.getAll();
			return Object.keys(t).length > 0 ? n.filter(r => Vv(t, r)) : n
		}
		notify(t) {
			hn.batch(() => {
				this.listeners.forEach(n => {
					n(t)
				})
			})
		}
		onFocus() {
			hn.batch(() => {
				this.getAll().forEach(t => {
					t.onFocus()
				})
			})
		}
		onOnline() {
			hn.batch(() => {
				this.getAll().forEach(t => {
					t.onOnline()
				})
			})
		}
	}, Mr = new WeakMap, u_),
	yt, $o, Fo, sa, aa, Vo, la, ca, d_, ez = (d_ = class {
		constructor(e = {}) {
			$e(this, yt);
			$e(this, $o);
			$e(this, Fo);
			$e(this, sa);
			$e(this, aa);
			$e(this, Vo);
			$e(this, la);
			$e(this, ca);
			je(this, yt, e.queryCache || new JB), je(this, $o, e.mutationCache || new ZB), je(this, Fo, e.defaultOptions || {}), je(this, sa, new Map), je(this, aa, new Map), je(this, Vo, 0)
		}
		mount() {
			Dc(this, Vo)._++, Q(this, Vo) === 1 && (je(this, la, Vy.subscribe(async e => {
				e && (await this.resumePausedMutations(), Q(this, yt).onFocus())
			})), je(this, ca, fd.subscribe(async e => {
				e && (await this.resumePausedMutations(), Q(this, yt).onOnline())
			})))
		}
		unmount() {
			var e, t;
			Dc(this, Vo)._--, Q(this, Vo) === 0 && ((e = Q(this, la)) == null || e.call(this), je(this, la, void 0), (t = Q(this, ca)) == null || t.call(this), je(this, ca, void 0))
		}
		isFetching(e) {
			return Q(this, yt).findAll({
				...e,
				fetchStatus: "fetching"
			}).length
		}
		isMutating(e) {
			return Q(this, $o).findAll({
				...e,
				status: "pending"
			}).length
		}
		getQueryData(e) {
			var n;
			const t = this.defaultQueryOptions({
				queryKey: e
			});
			return (n = Q(this, yt).get(t.queryHash)) == null ? void 0 : n.state.data
		}
		ensureQueryData(e) {
			const t = this.defaultQueryOptions(e),
				n = Q(this, yt).build(this, t),
				r = n.state.data;
			return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(zh(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
		}
		getQueriesData(e) {
			return Q(this, yt).findAll(e).map(({
				queryKey: t,
				state: n
			}) => {
				const r = n.data;
				return [t, r]
			})
		}
		setQueryData(e, t, n) {
			const r = this.defaultQueryOptions({
					queryKey: e
				}),
				o = Q(this, yt).get(r.queryHash),
				i = o == null ? void 0 : o.state.data,
				a = MB(t, i);
			if (a !== void 0) return Q(this, yt).build(this, r).setData(a, {
				...n,
				manual: !0
			})
		}
		setQueriesData(e, t, n) {
			return hn.batch(() => Q(this, yt).findAll(e).map(({
				queryKey: r
			}) => [r, this.setQueryData(r, t, n)]))
		}
		getQueryState(e) {
			var n;
			const t = this.defaultQueryOptions({
				queryKey: e
			});
			return (n = Q(this, yt).get(t.queryHash)) == null ? void 0 : n.state
		}
		removeQueries(e) {
			const t = Q(this, yt);
			hn.batch(() => {
				t.findAll(e).forEach(n => {
					t.remove(n)
				})
			})
		}
		resetQueries(e, t) {
			const n = Q(this, yt);
			return hn.batch(() => (n.findAll(e).forEach(r => {
				r.reset()
			}), this.refetchQueries({
				type: "active",
				...e
			}, t)))
		}
		cancelQueries(e, t = {}) {
			const n = {
					revert: !0,
					...t
				},
				r = hn.batch(() => Q(this, yt).findAll(e).map(o => o.cancel(n)));
			return Promise.all(r).then(sr).catch(sr)
		}
		invalidateQueries(e, t = {}) {
			return hn.batch(() => (Q(this, yt).findAll(e).forEach(n => {
				n.invalidate()
			}), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
				...e,
				type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
			}, t)))
		}
		refetchQueries(e, t = {}) {
			const n = {
					...t,
					cancelRefetch: t.cancelRefetch ?? !0
				},
				r = hn.batch(() => Q(this, yt).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
					let i = o.fetch(void 0, n);
					return n.throwOnError || (i = i.catch(sr)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
				}));
			return Promise.all(r).then(sr)
		}
		fetchQuery(e) {
			const t = this.defaultQueryOptions(e);
			t.retry === void 0 && (t.retry = !1);
			const n = Q(this, yt).build(this, t);
			return n.isStaleByTime(zh(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
		}
		prefetchQuery(e) {
			return this.fetchQuery(e).then(sr).catch(sr)
		}
		fetchInfiniteQuery(e) {
			return e.behavior = qv(e.pages), this.fetchQuery(e)
		}
		prefetchInfiniteQuery(e) {
			return this.fetchInfiniteQuery(e).then(sr).catch(sr)
		}
		ensureInfiniteQueryData(e) {
			return e.behavior = qv(e.pages), this.ensureQueryData(e)
		}
		resumePausedMutations() {
			return fd.isOnline() ? Q(this, $o).resumePausedMutations() : Promise.resolve()
		}
		getQueryCache() {
			return Q(this, yt)
		}
		getMutationCache() {
			return Q(this, $o)
		}
		getDefaultOptions() {
			return Q(this, Fo)
		}
		setDefaultOptions(e) {
			je(this, Fo, e)
		}
		setQueryDefaults(e, t) {
			Q(this, sa).set(Xl(e), {
				queryKey: e,
				defaultOptions: t
			})
		}
		getQueryDefaults(e) {
			const t = [...Q(this, sa).values()],
				n = {};
			return t.forEach(r => {
				Ql(e, r.queryKey) && Object.assign(n, r.defaultOptions)
			}), n
		}
		setMutationDefaults(e, t) {
			Q(this, aa).set(Xl(e), {
				mutationKey: e,
				defaultOptions: t
			})
		}
		getMutationDefaults(e) {
			const t = [...Q(this, aa).values()],
				n = {};
			return t.forEach(r => {
				Ql(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
			}), n
		}
		defaultQueryOptions(e) {
			if (e._defaulted) return e;
			const t = {
				...Q(this, Fo).queries,
				...this.getQueryDefaults(e.queryKey),
				...e,
				_defaulted: !0
			};
			return t.queryHash || (t.queryHash = vp(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === _p && (t.enabled = !1), t
		}
		defaultMutationOptions(e) {
			return e != null && e._defaulted ? e : {
				...Q(this, Fo).mutations,
				...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
				...e,
				_defaulted: !0
			}
		}
		clear() {
			Q(this, yt).clear(), Q(this, $o).clear()
		}
	}, yt = new WeakMap, $o = new WeakMap, Fo = new WeakMap, sa = new WeakMap, aa = new WeakMap, Vo = new WeakMap, la = new WeakMap, ca = new WeakMap, d_),
	tz = P.createContext(void 0),
	nz = ({
		client: e,
		children: t
	}) => (P.useEffect(() => (e.mount(), () => {
		e.unmount()
	}), [e]), u.jsx(tz.Provider, {
		value: e,
		children: t
	})),
	Uy = {
		exports: {}
	};
(function(e, t) {
	(function(n, r) {
		r()
	})(pn, function() {
		function n(f, m) {
			return typeof m > "u" ? m = {
				autoBom: !1
			} : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = {
				autoBom: !m
			}), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type) ? new Blob(["\uFEFF", f], {
				type: f.type
			}) : f
		}

		function r(f, m, _) {
			var v = new XMLHttpRequest;
			v.open("GET", f), v.responseType = "blob", v.onload = function() {
				d(v.response, m, _)
			}, v.onerror = function() {
				console.error("could not download file")
			}, v.send()
		}

		function o(f) {
			var m = new XMLHttpRequest;
			m.open("HEAD", f, !1);
			try {
				m.send()
			} catch {}
			return 200 <= m.status && 299 >= m.status
		}

		function i(f) {
			try {
				f.dispatchEvent(new MouseEvent("click"))
			} catch {
				var m = document.createEvent("MouseEvents");
				m.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), f.dispatchEvent(m)
			}
		}
		var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof pn == "object" && pn.global === pn ? pn : void 0,
			c = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
			d = a.saveAs || (typeof window != "object" || window !== a ? function() {} : "download" in HTMLAnchorElement.prototype && !c ? function(f, m, _) {
				var v = a.URL || a.webkitURL,
					x = document.createElement("a");
				m = m || f.name || "download", x.download = m, x.rel = "noopener", typeof f == "string" ? (x.href = f, x.origin === location.origin ? i(x) : o(x.href) ? r(f, m, _) : i(x, x.target = "_blank")) : (x.href = v.createObjectURL(f), setTimeout(function() {
					v.revokeObjectURL(x.href)
				}, 4e4), setTimeout(function() {
					i(x)
				}, 0))
			} : "msSaveOrOpenBlob" in navigator ? function(f, m, _) {
				if (m = m || f.name || "download", typeof f != "string") navigator.msSaveOrOpenBlob(n(f, _), m);
				else if (o(f)) r(f, m, _);
				else {
					var v = document.createElement("a");
					v.href = f, v.target = "_blank", setTimeout(function() {
						i(v)
					})
				}
			} : function(f, m, _, v) {
				if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof f == "string") return r(f, m, _);
				var x = f.type === "application/octet-stream",
					k = /constructor/i.test(a.HTMLElement) || a.safari,
					A = /CriOS\/[\d]+/.test(navigator.userAgent);
				if ((A || x && k || c) && typeof FileReader < "u") {
					var C = new FileReader;
					C.onloadend = function() {
						var b = C.result;
						b = A ? b : b.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = b : location = b, v = null
					}, C.readAsDataURL(f)
				} else {
					var y = a.URL || a.webkitURL,
						w = y.createObjectURL(f);
					v ? v.location = w : location.href = w, v = null, setTimeout(function() {
						y.revokeObjectURL(w)
					}, 4e4)
				}
			});
		a.saveAs = d.saveAs = d, e.exports = d
	})
})(Uy);
var rz = Uy.exports;
const oz = Wd("Textarea"),
	iz = () => {
		function e() {
			window.showModal("custom", {
				header: "Logs",
				content: u.jsx(ul, {
					children: window.modalErrors.map((n, r) => u.jsxs(dr, {
						multiline: !0,
						subtitle: n.date.toLocaleString(),
						extraSubtitle: n.params,
						children: [n.method, " - ", n.error]
					}, r))
				})
			})
		}

		function t(n) {
			n.stopPropagation();
			const r = new Blob([window.logs.join(`
`)], {
				type: "text/plain;charset=utf-8"
			});
			rz.saveAs(r, "tool42-logs.txt"), window.showSnackbar(oz.download_done, !0)
		}
		return window.modalErrors.length ? u.jsxs(ul, {
			style: {
				position: "fixed",
				bottom: 0,
				right: 0,
				display: "flex",
				gap: 8
			},
			children: [u.jsx(ul, {
				style: {
					padding: 0
				},
				onClick: t,
				children: u.jsx(li, {
					style: {
						background: "var(--vkui--color_background_accent)"
					},
					children: u.jsx(Dy, {
						fill: "#FFFFFF"
					})
				})
			}), u.jsx(ul, {
				style: {
					padding: 0
				},
				onClick: e,
				children: u.jsx(li, {
					style: {
						background: "var(--vkui--color_icon_negative)"
					},
					children: u.jsx(pB, {
						fill: "#FFFFFF"
					})
				})
			})]
		}) : null
	},
	sz = "data:image/svg+xml,%3csvg%20width='1024'%20height='1024'%20viewBox='0%200%201024%201024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1024'%20height='1024'%20rx='200'%20fill='%23007FFF'/%3e%3cpath%20d='M619.215%20154.226C608.637%20164.484%20608.316%20181.474%20618.574%20192.052C622.42%20196.22%20633.639%20202.951%20643.255%20207.119C734.29%20244.304%20807.694%20329.893%20834.94%20431.189C841.992%20458.116%20842.954%20468.695%20843.274%20513.253C843.274%20555.566%20842.313%20569.35%20836.543%20591.789C811.541%20690.522%20748.714%20769.379%20659.283%20813.616C616.65%20834.773%20611.201%20839.582%20611.201%20854.648C611.201%20867.791%20619.856%20879.01%20632.357%20882.216C647.102%20886.063%20701.915%20859.777%20745.829%20828.042C771.152%20809.77%20811.861%20767.135%20831.735%20738.285C883.663%20662.954%20908.986%20566.465%20900.331%20478.953C885.907%20339.189%20807.053%20224.429%20683.323%20163.523C643.576%20143.969%20631.075%20142.045%20619.215%20154.226Z'%20fill='white'/%3e%3cpath%20d='M431.047%20342.068C424.316%20343.991%20418.866%20346.556%20418.866%20347.838C418.866%20348.8%20439.061%20369.957%20464.063%20394.64C510.862%20441.121%20520.479%20454.584%20515.35%20467.406C511.824%20476.061%20467.91%20519.337%20459.575%20522.543C448.356%20526.389%20432.65%20514.849%20388.415%20470.291C363.733%20445.288%20342.577%20425.093%20341.616%20425.093C336.487%20425.093%20331.679%20459.392%20333.281%20481.511C337.448%20538.891%20380.401%20584.731%20439.061%20594.989C456.691%20598.194%20464.704%20597.874%20486.501%20593.386L512.786%20588.257L557.982%20632.815C582.985%20657.498%20606.384%20679.296%20610.231%20681.219C621.45%20686.989%20643.567%20685.386%20655.427%20678.334C675.301%20666.153%20684.917%20636.02%20674.981%20616.466C673.057%20612.62%20651.26%20589.219%20626.579%20564.215L582.023%20519.016L587.152%20492.731C596.447%20448.173%20585.228%20409.706%20554.456%20376.368C532.339%20352.967%20505.093%20341.106%20470.474%20339.824C455.408%20339.183%20437.458%20340.465%20431.047%20342.068Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M530.183%20873.608C529.681%20889.783%20516.174%20902.488%20500.014%20901.986C480.342%20901.374%20460.481%20899.261%20440.567%20895.562C420.652%20891.862%20401.356%20886.702%20382.774%20880.208C367.51%20874.873%20359.457%20858.163%20364.787%20842.885C370.116%20827.607%20386.811%20819.546%20402.075%20824.881C417.856%20830.396%20434.272%20834.788%20451.249%20837.942C468.227%20841.096%20485.124%20842.891%20501.832%20843.411C517.992%20843.913%20530.685%20857.432%20530.183%20873.608Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M298.356%20804.366C287.784%20816.61%20269.297%20817.957%20257.065%20807.375C226.827%20781.216%20200.736%20750.535%20179.767%20716.479C171.285%20702.702%20175.566%20684.651%20189.329%20676.16C203.093%20667.67%20221.127%20671.955%20229.61%20685.732C247.442%20714.693%20269.636%20740.791%20295.35%20763.037C307.582%20773.619%20308.928%20792.123%20298.356%20804.366Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M161.309%20422.266C177.248%20424.979%20187.971%20440.111%20185.261%20456.065C182.458%20472.56%20180.868%20489.493%20180.592%20506.775C180.315%20524.056%20181.363%20541.031%20183.637%20557.608C185.836%20573.64%20174.634%20588.421%20158.617%20590.622C142.599%20592.824%20127.832%20581.611%20125.633%20565.579C122.956%20546.061%20121.727%20526.108%20122.051%20505.837C122.375%20485.566%20124.241%20465.662%20127.541%20446.24C130.252%20430.286%20145.37%20419.552%20161.309%20422.266Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M301.536%20217.492C311.975%20229.849%20310.429%20248.338%20298.083%20258.786C272.129%20280.752%20249.654%20306.607%20231.508%20335.373C222.877%20349.057%20204.797%20353.146%20191.127%20344.506C177.456%20335.867%20173.37%20317.77%20182.002%20304.087C203.339%20270.26%20229.761%20239.865%20260.28%20214.035C272.626%20203.587%20291.097%20205.134%20301.536%20217.492Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M543.575%20151.486C543.477%20167.669%20530.291%20180.708%20514.123%20180.609C497.408%20180.508%20480.456%20181.674%20463.373%20184.195C446.29%20186.716%20429.723%20190.495%20413.748%20195.421C398.297%20200.185%20381.913%20191.509%20377.153%20176.044C372.394%20160.578%20381.061%20144.178%20396.512%20139.414C415.322%20133.615%20434.796%20129.175%20454.834%20126.218C474.872%20123.262%20494.797%20121.887%20514.479%20122.007C530.647%20122.106%20543.673%20135.304%20543.575%20151.486Z'%20fill='white'/%3e%3c/svg%3e";

function Xv({
	size: e = 28,
	type: t = "blue"
}) {
	return u.jsx(Hd, {
		src: sz,
		size: e,
		alt: `logo ${t}`
	})
}
const az = ({
		activeContent: e,
		selectedMethod: t,
		isFavorite: n,
		onBackButton: r,
		onFavoriteClick: o
	}) => {
		const i = {
			delimiter: "none"
		};
		let a = u.jsx(Xv, {
			type: "blue",
			size: 32
		});
		if (e === "method" && t) {
			a = u.jsx(ZA, {
				subtitle: t.name,
				children: u.jsx(Xv, {
					type: "blue",
					size: 16
				})
			});
			const c = n ? BD : zD;
			i.before = u.jsxs(u.Fragment, {
				children: [u.jsx(l1, {
					onClick: r,
					"aria-label": "Back",
					children: u.jsx(Rv, {})
				}), !Ft && u.jsx(l1, {
					onClick: o,
					"aria-label": "Favorite",
					children: u.jsx(c, {})
				})]
			})
		} else ["stars"].includes(e) && (i.before = u.jsx(l1, {
			onClick: r,
			"aria-label": "Back",
			children: u.jsx(Rv, {})
		}));
		return u.jsx(j4, {
			...i,
			children: a
		})
	},
	ss = Ft ? 107217451 : 107248964,
	Qv = `yandex-metrika-tag-${ss}`,
	Zv = `https://mc.yandex.ru/metrika/tag.js?id=${ss}`,
	Jv = `yandex-metrika-noscript-${ss}`,
	lz = 108189926,
	cz = "f79b46be-4ea2-4f3b-8cf1-1dcaa1d7d435",
	uz = "https://mc.yandex.ru/collect",
	e_ = "tool42:metrika:client-id",
	Vh = "https://tool42-fake-domain-for-metriki.yandex",
	Yy = "/home",
	dz = `${Vh}${Yy}`;

function qy() {
	return typeof window < "u" && window.location.protocol === "chrome-extension:"
}

function fz() {
	try {
		const n = window.localStorage.getItem(e_);
		if (n) return n
	} catch {}
	const e = Math.floor(Math.random() * 1e6).toString().padStart(6, "0"),
		t = `${Date.now()}${e}`;
	try {
		window.localStorage.setItem(e_, t)
	} catch {}
	return t
}

function hz(e) {
	const t = new URLSearchParams({
		tid: String(lz),
		cid: fz(),
		ms: cz,
		...e
	});
	fetch(`${uz}?${t.toString()}`, {
		method: "GET",
		mode: "no-cors",
		credentials: "omit",
		keepalive: !0
	}).catch(() => {})
}

function Gy(e, t, n = `${Vh}/`) {
	hz({
		t: "pageview",
		dr: n,
		dl: `${Vh}${e}`,
		dt: t
	})
}

function pz() {
	if (!(typeof window > "u" || typeof document > "u")) {
		if (qy()) {
			Gy(Yy, "Tool 42 Extension");
			return
		}
		if (window.ym = window.ym || ((...e) => {
				const t = window.ym;
				t && (t.a = t.a || [], t.a.push(e))
			}), window.ym.l = Date.now(), !document.getElementById(Qv) && !Array.from(document.scripts).some(e => e.src === Zv)) {
			const e = document.createElement("script");
			e.id = Qv, e.async = !0, e.src = Zv;
			const t = document.getElementsByTagName("script")[0];
			t != null && t.parentNode ? t.parentNode.insertBefore(e, t) : document.head.appendChild(e)
		}
		if (window.ym(ss, "init", {
				ssr: !0,
				clickmap: !0,
				ecommerce: "dataLayer",
				referrer: document.referrer,
				url: location.href,
				trackLinks: !0,
				accurateTrackBounce: !0
			}), !document.getElementById(Jv) && document.body) {
			const e = document.createElement("noscript");
			e.id = Jv, e.innerHTML = `<div><img src="https://mc.yandex.ru/watch/${ss}" style="position:absolute; left:-9999px;" alt="" /></div>`, document.body.appendChild(e)
		}
	}
}

function mz(e) {
	if (qy()) {
		Gy(`/method/${e}`, `Tool 42 Method ${e}`, dz);
		return
	}
	window.ym && (window.ym(ss, "hit", `/method/${e}`, {
		title: e
	}), window.ym(ss, "reachGoal", "open_method", {
		method_id: e
	}))
}
const Cs = !0,
	rl = !0,
	Es = !0,
	Te = !0,
	at = !0,
	ge = {
		ACCOUNT: "account",
		FRIENDS: "friends",
		FOLLOWERS: "followers",
		MESSAGES: "messages",
		WALL: "wall",
		GROUPS: "groups",
		STORIES: "stories",
		PHOTOS: "photos",
		VIDEOS: "videos",
		VK_DONUT: "vk_donut",
		HIDE: "hide"
	},
	vz = [{
		id: "account_reg_date",
		categories: [ge.ACCOUNT],
		icon: HD,
		allowMiniApps: Es,
		scope: "friends",
		forUser: Te
	}, {
		id: "account_blacklists",
		categories: [ge.ACCOUNT],
		icon: VD,
		allowMiniApps: Es,
		forUser: Te
	}, {
		id: "account_id",
		categories: [ge.ACCOUNT],
		icon: UD,
		forUser: Te,
		forGroup: at
	}, {
		id: "account_blacklist_clean",
		categories: [ge.ACCOUNT],
		icon: eo,
		forUser: Te
	}, {
		id: "account_gifts_stat",
		categories: [ge.ACCOUNT],
		icon: Dv,
		forUser: Te
	}, {
		id: "account_stickers_stat",
		categories: [ge.ACCOUNT],
		icon: gB,
		forUser: Te
	}, {
		id: "account_votes_stat",
		categories: [ge.ACCOUNT],
		icon: Fv,
		forUser: Te
	}, {
		id: "account_docs_clean",
		categories: [ge.ACCOUNT],
		icon: GD,
		forUser: Te
	}, {
		id: "friends_analysis",
		categories: [ge.FRIENDS],
		icon: nl,
		forUser: Te
	}, {
		id: "friends_career",
		categories: [ge.FRIENDS],
		icon: bB,
		forUser: Te
	}, {
		id: "friends_groups",
		categories: [ge.FRIENDS],
		icon: Nv,
		forUser: Te,
		scope: "groups"
	}, {
		id: "friends_active",
		categories: [ge.FRIENDS],
		icon: Su,
		forUser: Te
	}, {
		id: "friends_search",
		categories: [ge.FRIENDS],
		icon: S1,
		forUser: Te
	}, {
		id: "friends_app",
		categories: [ge.FRIENDS],
		icon: vB,
		forUser: Te
	}, {
		id: "friends_handshakes",
		categories: [ge.FRIENDS],
		icon: fB,
		allowMiniApps: Es,
		scope: "friends",
		forUser: Te
	}, {
		id: "friends_clean",
		categories: [ge.FRIENDS],
		icon: Su,
		forUser: Te
	}, {
		id: "friends_clean_by_id",
		categories: [ge.FRIENDS],
		icon: tB,
		forUser: Te
	}, {
		id: "friends_out_clean",
		categories: [ge.FRIENDS],
		icon: wB,
		forUser: Te
	}, {
		id: "friends_lower",
		categories: [ge.FRIENDS],
		icon: Dy,
		forUser: Te
	}, {
		id: "friends_activities_clean",
		categories: [ge.FRIENDS],
		icon: $v,
		forUser: Te
	}, {
		id: "friends_clean_by_subscriptions",
		categories: [ge.FRIENDS],
		icon: Dh,
		forUser: Te
	}, {
		id: "followers_search",
		categories: [ge.FOLLOWERS],
		icon: S1,
		forUser: Te
	}, {
		id: "followers_add",
		categories: [ge.FOLLOWERS],
		icon: zy,
		forUser: Te
	}, {
		id: "followers_clean",
		categories: [ge.FOLLOWERS],
		icon: eo,
		forUser: Te
	}, {
		id: "followers_activities_add",
		categories: [ge.FOLLOWERS],
		icon: QD,
		forUser: Te
	}, {
		id: "messages_dialogs_count",
		categories: [ge.MESSAGES],
		icon: Nv,
		forUser: Te,
		onlyExtension: !0
	}, {
		id: "messages_clean",
		categories: [ge.MESSAGES],
		icon: eo,
		forUser: Te,
		onlyExtension: !0
	}, {
		id: "messages_stat",
		categories: [ge.MESSAGES],
		icon: nl,
		forUser: Te,
		onlyExtension: !0
	}, {
		id: "messages_read",
		categories: [ge.MESSAGES],
		icon: iB,
		forUser: Te,
		onlyExtension: !0
	}, {
		id: "messages_chats_return",
		categories: [ge.MESSAGES],
		icon: eB,
		forUser: Te,
		onlyExtension: !0
	}, {
		id: "messages_download_attachments",
		categories: [ge.MESSAGES],
		icon: lB,
		forUser: Te,
		onlyExtension: !0
	}, {
		id: "wall_analysis",
		categories: [ge.WALL],
		icon: nl,
		choiceOwner: Cs,
		allowMiniApps: Es,
		forUser: Te,
		forGroup: at,
		scope: "groups,wall"
	}, {
		id: "wall_contest",
		categories: [ge.WALL],
		icon: qD,
		forGroup: at
	}, {
		id: "wall_search_mentions",
		categories: [ge.WALL],
		icon: rB,
		forUser: Te
	}, {
		id: "wall_clean",
		categories: [ge.WALL],
		icon: eo,
		choiceOwner: Cs,
		forUser: Te,
		forGroup: at
	}, {
		id: "wall_clean_no_filters",
		categories: [ge.WALL],
		icon: eo,
		choiceOwner: Cs,
		forUser: Te,
		forGroup: at
	}, {
		id: "wall_clean_snippet_cache",
		categories: [ge.WALL],
		icon: cB,
		forUser: Te,
		forGroup: at
	}, {
		id: "wall_check_post",
		categories: [ge.WALL],
		icon: Bv,
		forUser: Te,
		forGroup: at
	}, {
		id: "groups_clean",
		categories: [ge.GROUPS],
		icon: eo,
		forGroup: at
	}, {
		id: "groups_friends",
		categories: [ge.GROUPS],
		icon: Su,
		forGroup: at,
		scope: "groups"
	}, {
		id: "groups_donut",
		categories: [ge.VK_DONUT],
		icon: Fv,
		forGroup: at,
		scope: "groups,friends"
	}, {
		id: "groups_active",
		categories: [ge.GROUPS],
		icon: hB,
		forGroup: at,
		scope: "groups,wall"
	}, {
		id: "groups_elite",
		categories: [ge.GROUPS],
		icon: ZD,
		forGroup: at,
		scope: "groups"
	}, {
		id: "groups_donut_members",
		categories: [ge.VK_DONUT],
		icon: sB,
		forGroup: at,
		scope: "groups",
		choiceGroup: rl
	}, {
		id: "groups_birthday",
		categories: [ge.GROUPS],
		icon: Dv,
		allowMiniApps: Es,
		forGroup: at,
		scope: "groups"
	}, {
		id: "groups_poll",
		categories: [ge.GROUPS],
		icon: dB,
		forGroup: at,
		scope: "wall"
	}, {
		id: "groups_followers_clean",
		categories: [ge.GROUPS],
		icon: Dh,
		forGroup: at
	}, {
		id: "groups_followers_search",
		categories: [ge.GROUPS],
		icon: S1,
		forGroup: at,
		choiceGroup: rl
	}, {
		id: "groups_followers_donut_search",
		categories: [ge.VK_DONUT],
		icon: Bv,
		forGroup: at,
		choiceGroup: rl,
		choiceGroupFilter: "editor"
	}, {
		id: "groups_blacklist_clean",
		categories: [ge.GROUPS],
		icon: eo,
		forGroup: at,
		choiceGroup: rl
	}, {
		id: "groups_activities_clean",
		categories: [ge.GROUPS],
		icon: $v,
		forGroup: at,
		choiceGroup: rl
	}, {
		id: "groups_sync_donut_groups",
		categories: [ge.VK_DONUT],
		icon: Ly,
		forGroup: at
	}, {
		id: "groups_analysis",
		categories: [ge.GROUPS],
		icon: nl,
		forUser: Te
	}, {
		id: "stories_stat",
		categories: [ge.STORIES],
		icon: By,
		choiceOwner: Cs,
		forUser: Te,
		forGroup: at,
		allowMiniApps: Es,
		scope: "stories"
	}, {
		id: "stories_viewers_stat",
		categories: [ge.STORIES],
		icon: kB,
		forUser: Te,
		scope: "stories"
	}, {
		id: "stories_download",
		categories: [ge.STORIES],
		icon: Lv,
		forUser: Te,
		scope: "stories"
	}, {
		id: "stories_clean",
		categories: [ge.STORIES],
		icon: eo,
		forUser: Te
	}, {
		id: "photos_clean",
		categories: [ge.PHOTOS],
		icon: eo,
		choiceOwner: Cs,
		forUser: Te,
		forGroup: at
	}, {
		id: "photos_download_album",
		categories: [ge.PHOTOS],
		icon: Lv,
		scope: "photos",
		forUser: Te,
		forGroup: at
	}, {
		id: "photos_tags",
		categories: [ge.PHOTOS],
		icon: yB,
		forUser: Te
	}, {
		id: "photos_stat",
		categories: [ge.PHOTOS],
		icon: nl,
		forUser: Te,
		scope: "photos"
	}, {
		id: "videos_clean",
		categories: [ge.VIDEOS],
		icon: SB,
		choiceOwner: Cs,
		choiceGroupFilter: "editor",
		forUser: Te,
		forGroup: at
	}],
	t_ = Object.assign({
		"./functions/AbstractMethod.tsx": () => xe(() => import("./AbstractMethod.js").then(e => e.b), __vite__mapDeps([0, 1, 2, 3]), import.meta.url),
		"./functions/AccountBlacklistClean.jsx": () => xe(() => import("./AccountBlacklistClean.js"), __vite__mapDeps([4, 0, 1, 2, 3, 5, 6]), import.meta.url),
		"./functions/AccountBlacklists.jsx": () => xe(() => import("./AccountBlacklists.js"), __vite__mapDeps([7, 0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14]), import.meta.url),
		"./functions/AccountDocsClean.jsx": () => xe(() => import("./AccountDocsClean.js"), __vite__mapDeps([15, 0, 1, 2, 3, 16, 17, 18, 19, 20, 21]), import.meta.url),
		"./functions/AccountGiftsStat.jsx": () => xe(() => import("./AccountGiftsStat.js"), __vite__mapDeps([22, 0, 1, 2, 3, 23, 24, 25, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 31, 32, 33, 34, 35]), import.meta.url),
		"./functions/AccountId.jsx": () => xe(() => import("./AccountId.js"), __vite__mapDeps([36, 0, 1, 2, 3, 37, 27, 28, 29, 38, 39, 40]), import.meta.url),
		"./functions/AccountRegDate.jsx": () => xe(() => import("./AccountRegDate.js"), __vite__mapDeps([41, 0, 1, 2, 3, 5, 6, 13, 14]), import.meta.url),
		"./functions/AccountStickersStat.tsx": () => xe(() => import("./AccountStickersStat.js"), __vite__mapDeps([42, 0, 1, 2, 3, 5, 6, 34]), import.meta.url),
		"./functions/AccountVotesStat.tsx": () => xe(() => import("./AccountVotesStat.js"), __vite__mapDeps([43, 0, 1, 2, 3, 5, 6, 44]), import.meta.url),
		"./functions/FollowersActivitiesAdd.jsx": () => xe(() => import("./FollowersActivitiesAdd.js"), __vite__mapDeps([45, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 47, 48, 0, 1, 2, 3, 49, 50, 35, 51, 52, 53, 24, 54, 16, 17, 18, 20]), import.meta.url),
		"./functions/FollowersAdd.jsx": () => xe(() => import("./FollowersAdd.js"), __vite__mapDeps([55, 0, 1, 2, 3, 53, 24, 54, 16, 17, 18, 19, 20, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/FollowersClean.jsx": () => xe(() => import("./FollowersClean.js"), __vite__mapDeps([56, 57, 0, 1, 2, 3, 53, 24, 54, 58, 59, 17, 18, 60, 16, 19, 20, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/FollowersSearch.jsx": () => xe(() => import("./FollowersSearch.js"), __vite__mapDeps([61, 62, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 39, 40, 63, 64, 65, 66, 67, 68, 69, 16, 17, 18, 19, 20, 70, 71, 72, 49, 50, 73, 74, 75, 76, 77, 78, 46, 8, 9, 10, 26, 30, 47, 48, 35, 51, 79]), import.meta.url),
		"./functions/FriendsActive.jsx": () => xe(() => import("./FriendsActive.js"), __vite__mapDeps([80, 0, 1, 2, 3, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/FriendsActivitiesClean.jsx": () => xe(() => import("./FriendsActivitiesClean.js"), __vite__mapDeps([81, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 47, 48, 0, 1, 2, 3, 49, 50, 35, 51, 52, 53, 24, 54, 16, 17, 18, 20]), import.meta.url),
		"./functions/FriendsAnalysis.jsx": () => xe(() => import("./FriendsAnalysis.js"), __vite__mapDeps([82, 0, 1, 2, 3, 5, 6, 47, 48, 83, 84, 85, 86, 70, 71, 72, 49, 50, 73, 74, 75, 76, 77, 78, 46, 8, 9, 10, 26, 27, 28, 29, 19, 30, 35, 51, 87]), import.meta.url),
		"./functions/FriendsApp.jsx": () => xe(() => import("./FriendsApp.js"), __vite__mapDeps([88, 0, 1, 2, 3, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 37, 38, 39, 40]), import.meta.url),
		"./functions/FriendsCareer.jsx": () => xe(() => import("./FriendsCareer.js"), __vite__mapDeps([89, 0, 1, 2, 3, 8, 9, 10, 90, 91, 83, 84]), import.meta.url),
		"./functions/FriendsClean.jsx": () => xe(() => import("./FriendsClean.js"), __vite__mapDeps([92, 57, 0, 1, 2, 3, 53, 24, 54, 58, 59, 17, 18, 60, 16, 19, 20, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/FriendsCleanById.jsx": () => xe(() => import("./FriendsCleanById.js"), __vite__mapDeps([93, 53, 24, 54, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 47, 48, 0, 1, 2, 3, 49, 50, 35, 51, 73, 74, 75, 76, 77, 57, 58, 59, 17, 18, 60, 16, 20]), import.meta.url),
		"./functions/FriendsCleanBySubscriptions.jsx": () => xe(() => import("./FriendsCleanBySubscriptions.js"), __vite__mapDeps([94, 0, 1, 2, 3, 37, 27, 28, 29, 38, 95, 96, 65, 97, 46, 5, 6, 8, 9, 10, 26, 19, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/FriendsGroups.jsx": () => xe(() => import("./FriendsGroups.js"), __vite__mapDeps([98, 0, 1, 2, 3, 8, 9, 10, 90, 91]), import.meta.url),
		"./functions/FriendsHandshakes.jsx": () => xe(() => import("./FriendsHandshakes.js"), __vite__mapDeps([99, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 39, 40, 13, 14, 51]), import.meta.url),
		"./functions/FriendsLower.jsx": () => xe(() => import("./FriendsLower.js"), __vite__mapDeps([100, 0, 1, 2, 3, 8, 9, 10, 53, 24, 54]), import.meta.url),
		"./functions/FriendsOutClean.tsx": () => xe(() => import("./FriendsOutClean.js"), __vite__mapDeps([101, 0, 1, 2, 3, 58, 53, 24, 54, 59, 17, 18, 60, 16, 19, 20, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/FriendsSearch.jsx": () => xe(() => import("./FriendsSearch.js"), __vite__mapDeps([102, 62, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 39, 40, 63, 64, 65, 66, 67, 68, 69, 16, 17, 18, 19, 20, 70, 71, 72, 49, 50, 73, 74, 75, 76, 77, 78, 46, 8, 9, 10, 26, 30, 47, 48, 35, 51, 79]), import.meta.url),
		"./functions/GroupsActive.jsx": () => xe(() => import("./GroupsActive.js"), __vite__mapDeps([103, 0, 1, 2, 3, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/GroupsActivitiesClean.jsx": () => xe(() => import("./GroupsActivitiesClean.js"), __vite__mapDeps([104, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 47, 48, 0, 1, 2, 3, 49, 50, 35, 51, 52, 53, 24, 54, 16, 17, 18, 20]), import.meta.url),
		"./functions/GroupsAnalysis.jsx": () => xe(() => import("./GroupsAnalysis.js"), __vite__mapDeps([105, 0, 1, 2, 3, 5, 6, 47, 48, 90, 91, 87, 51]), import.meta.url),
		"./functions/GroupsBirthday.jsx": () => xe(() => import("./GroupsBirthday.js"), __vite__mapDeps([106, 0, 1, 2, 3, 37, 27, 28, 29, 38, 39, 40, 107, 63, 64, 66, 67, 65, 108, 109, 59, 17, 18, 60, 73, 74, 75, 76, 77, 78, 46, 5, 6, 8, 9, 10, 26, 19, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/GroupsBlacklistClean.tsx": () => xe(() => import("./GroupsBlacklistClean.js"), __vite__mapDeps([110, 0, 1, 2, 3, 5, 6]), import.meta.url),
		"./functions/GroupsClean.jsx": () => xe(() => import("./GroupsClean.js"), __vite__mapDeps([111, 0, 1, 2, 3, 16, 17, 18, 19, 20, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/GroupsDonut.jsx": () => xe(() => import("./GroupsDonut.js"), __vite__mapDeps([112, 0, 1, 2, 3, 90, 91]), import.meta.url),
		"./functions/GroupsDonutMembers.jsx": () => xe(() => import("./GroupsDonutMembers.js"), __vite__mapDeps([113, 0, 1, 2, 3, 5, 6, 114, 115, 85, 86, 51]), import.meta.url),
		"./functions/GroupsElite.jsx": () => xe(() => import("./GroupsElite.js"), __vite__mapDeps([116, 0, 1, 2, 3, 8, 9, 10, 53, 24, 54, 46, 5, 6, 26, 27, 28, 29, 19, 30, 47, 48, 49, 50, 35, 51, 117, 23, 25, 118, 68, 119]), import.meta.url),
		"./functions/GroupsFollowersClean.jsx": () => xe(() => import("./GroupsFollowersClean.js"), __vite__mapDeps([120, 0, 1, 2, 3, 8, 9, 10, 37, 27, 28, 29, 38, 53, 24, 54, 59, 17, 18, 60, 16, 19, 20, 121, 68, 118, 122, 58, 46, 5, 6, 26, 30, 47, 48, 49, 50, 35, 51, 73, 74, 75, 76, 77]), import.meta.url),
		"./functions/GroupsFollowersDonutSearch.jsx": () => xe(() => import("./GroupsFollowersDonutSearch.js"), __vite__mapDeps([123, 62, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 39, 40, 63, 64, 65, 66, 67, 68, 69, 16, 17, 18, 19, 20, 70, 71, 72, 49, 50, 73, 74, 75, 76, 77, 78, 46, 8, 9, 10, 26, 30, 47, 48, 35, 51, 79]), import.meta.url),
		"./functions/GroupsFollowersSearch.tsx": () => xe(() => import("./GroupsFollowersSearch.js"), __vite__mapDeps([124, 62, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 39, 40, 63, 64, 65, 66, 67, 68, 69, 16, 17, 18, 19, 20, 70, 71, 72, 49, 50, 73, 74, 75, 76, 77, 78, 46, 8, 9, 10, 26, 30, 47, 48, 35, 51, 79]), import.meta.url),
		"./functions/GroupsFriends.jsx": () => xe(() => import("./GroupsFriends.js"), __vite__mapDeps([125, 0, 1, 2, 3, 90, 91]), import.meta.url),
		"./functions/GroupsPoll.jsx": () => xe(() => import("./GroupsPoll.js"), __vite__mapDeps([126, 0, 1, 2, 3, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 37, 38, 39, 40, 46, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/GroupsSyncDonutGroups.jsx": () => xe(() => import("./GroupsSyncDonutGroups.js"), __vite__mapDeps([127, 0, 1, 2, 3, 37, 27, 28, 29, 38, 16, 17, 18, 19, 20, 107, 63, 64, 66, 67, 65, 108]), import.meta.url),
		"./functions/MessagesChatsReturn.jsx": () => xe(() => import("./MessagesChatsReturn.js"), __vite__mapDeps([128, 0, 1, 2, 3, 8, 9, 10, 26, 27, 28, 29, 19, 30]), import.meta.url),
		"./functions/MessagesClean.jsx": () => xe(() => import("./MessagesClean.js"), __vite__mapDeps([129, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 16, 17, 18, 19, 20]), import.meta.url),
		"./functions/MessagesDialogsCount.jsx": () => xe(() => import("./MessagesDialogsCount.js"), __vite__mapDeps([130, 0, 1, 2, 3, 53, 24, 54, 117, 23, 25, 5, 6, 118, 28, 68, 119]), import.meta.url),
		"./functions/MessagesDownloadAttachments.jsx": () => xe(() => import("./MessagesDownloadAttachments.js"), __vite__mapDeps([131, 0, 1, 2, 3, 5, 6, 11, 12, 16, 17, 18, 19, 20, 132, 133, 8, 9, 10, 26, 27, 28, 29, 30]), import.meta.url),
		"./functions/MessagesRead.jsx": () => xe(() => import("./MessagesRead.js"), __vite__mapDeps([134, 0, 1, 2, 3, 5, 6]), import.meta.url),
		"./functions/MessagesStat.jsx": () => xe(() => import("./MessagesStat.js"), __vite__mapDeps([135, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 73, 74, 75, 76, 0, 1, 2, 3, 77, 136, 23, 24, 25, 31, 32, 11, 12, 71, 72, 117, 118, 68, 119, 37, 38, 63, 64, 137, 138, 114, 115, 133]), import.meta.url),
		"./functions/MessagesStatCommon.jsx": () => xe(() => import("./MessagesStatCommon.js"), __vite__mapDeps([136, 0, 1, 2, 3, 23, 24, 25, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 31, 32, 11, 12, 71, 72, 117, 118, 68, 119, 37, 38, 76, 77, 63, 64, 137, 138, 114, 115, 133]), import.meta.url),
		"./functions/PhotosClean.jsx": () => xe(() => import("./PhotosClean.js"), __vite__mapDeps([139, 0, 1, 2, 3, 26, 27, 28, 29, 19, 9, 30, 11, 12, 37, 38, 39, 40, 53, 24, 54, 59, 17, 18, 60, 16, 20]), import.meta.url),
		"./functions/PhotosDownloadAlbum.jsx": () => xe(() => import("./PhotosDownloadAlbum.js"), __vite__mapDeps([140, 0, 1, 2, 3, 26, 27, 28, 29, 19, 9, 30, 37, 38, 39, 40, 132]), import.meta.url),
		"./functions/PhotosStat.jsx": () => xe(() => import("./PhotosStat.js"), __vite__mapDeps([141, 0, 1, 2, 3, 23, 24, 25, 5, 6, 31, 32, 71, 72, 117, 118, 28, 68, 119, 142]), import.meta.url),
		"./functions/PhotosTags.tsx": () => xe(() => import("./PhotosTags.js"), __vite__mapDeps([143, 0, 1, 2, 3, 74, 75, 23, 24, 25, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 144]), import.meta.url),
		"./functions/StoriesClean.jsx": () => xe(() => import("./StoriesClean.js"), __vite__mapDeps([145, 0, 1, 2, 3, 26, 27, 28, 29, 19, 9, 30, 146, 33, 34, 14]), import.meta.url),
		"./functions/StoriesDownload.jsx": () => xe(() => import("./StoriesDownload.js"), __vite__mapDeps([147, 0, 1, 2, 3, 23, 24, 25, 31, 32]), import.meta.url),
		"./functions/StoriesStat.jsx": () => xe(() => import("./StoriesStat.js"), __vite__mapDeps([148, 0, 1, 2, 3, 23, 24, 25, 5, 6, 26, 27, 28, 29, 19, 9, 30, 11, 12, 146, 33, 34, 14, 117, 118, 68, 119]), import.meta.url),
		"./functions/StoriesViewersStat.jsx": () => xe(() => import("./StoriesViewersStat.js"), __vite__mapDeps([149, 0, 1, 2, 3, 5, 6, 8, 9, 10, 26, 27, 28, 29, 19, 30, 11, 12]), import.meta.url),
		"./functions/UsersActivities.jsx": () => xe(() => import("./UsersActivities.js"), __vite__mapDeps([52, 0, 1, 2, 3, 5, 6, 53, 24, 54, 16, 17, 18, 19, 20]), import.meta.url),
		"./functions/UsersClean.jsx": () => xe(() => import("./UsersClean.js"), __vite__mapDeps([57, 0, 1, 2, 3, 53, 24, 54, 58, 59, 17, 18, 60, 16, 19, 20, 46, 5, 6, 8, 9, 10, 26, 27, 28, 29, 30, 47, 48, 49, 50, 35, 51]), import.meta.url),
		"./functions/UsersSearch.jsx": () => xe(() => import("./UsersSearch.js"), __vite__mapDeps([62, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 39, 40, 63, 64, 65, 66, 67, 68, 69, 16, 17, 18, 19, 20, 70, 71, 72, 49, 50, 73, 74, 75, 76, 77, 78, 46, 8, 9, 10, 26, 30, 47, 48, 35, 51, 79]), import.meta.url),
		"./functions/VideosClean.jsx": () => xe(() => import("./VideosClean.js"), __vite__mapDeps([150, 0, 1, 2, 3, 16, 17, 18, 19, 20, 21]), import.meta.url),
		"./functions/WallAnalysis.jsx": () => xe(() => import("./WallAnalysis.js"), __vite__mapDeps([151, 0, 1, 2, 3, 5, 6, 8, 9, 10, 53, 24, 54, 16, 17, 18, 19, 20, 146, 33, 34, 14, 137, 138, 85, 86, 70, 71, 72, 49, 50, 73, 74, 75, 76, 77, 78, 37, 27, 28, 29, 38, 39, 40, 96, 68, 107, 63, 64, 66, 67, 65, 108, 152, 117, 23, 25, 118, 119, 44, 153]), import.meta.url),
		"./functions/WallCheckPost.jsx": () => xe(() => import("./WallCheckPost.js"), __vite__mapDeps([154, 0, 1, 2, 3, 37, 27, 28, 29, 38, 39, 40, 114, 5, 6, 115, 85, 86, 117, 23, 24, 25, 118, 68, 119, 142]), import.meta.url),
		"./functions/WallClean.jsx": () => xe(() => import("./WallClean.js"), __vite__mapDeps([155, 0, 1, 2, 3, 5, 6, 37, 27, 28, 29, 38, 16, 17, 18, 19, 20, 121, 68, 118, 122, 21]), import.meta.url),
		"./functions/WallCleanNoFilters.jsx": () => xe(() => import("./WallCleanNoFilters.js"), __vite__mapDeps([156, 0, 1, 2, 3]), import.meta.url),
		"./functions/WallCleanSnippetCache.jsx": () => xe(() => import("./WallCleanSnippetCache.js"), __vite__mapDeps([157, 0, 1, 2, 3, 37, 27, 28, 29, 38, 39, 40]), import.meta.url),
		"./functions/WallContest.jsx": () => xe(() => import("./WallContest.js"), __vite__mapDeps([158, 0, 1, 2, 3, 5, 6, 83, 84, 37, 27, 28, 29, 38, 95, 96, 65, 97, 16, 17, 18, 19, 20, 109, 59, 60, 73, 74, 75, 76, 77, 78]), import.meta.url),
		"./functions/WallSearchMentions.jsx": () => xe(() => import("./WallSearchMentions.js"), __vite__mapDeps([159, 0, 1, 2, 3, 74, 75, 160, 96, 69, 152, 161, 5, 6, 8, 9, 10]), import.meta.url)
	}),
	Xy = Wd("menu"),
	Qy = {
		width: 24,
		height: 24,
		fill: "var(--vkui--color_icon_accent)"
	},
	_z = [{
		id: ge.ACCOUNT,
		icon: xB
	}, {
		id: ge.FRIENDS,
		icon: Su
	}, {
		id: ge.FOLLOWERS,
		icon: zy
	}, {
		id: ge.MESSAGES,
		icon: oB
	}, {
		id: ge.WALL,
		icon: FD
	}, {
		id: ge.GROUPS,
		icon: Dh
	}, {
		id: ge.STORIES,
		icon: By
	}, {
		id: ge.PHOTOS,
		icon: uB
	}, {
		id: ge.VIDEOS,
		icon: nB
	}, {
		id: ge.VK_DONUT,
		icon: Ly
	}, {
		id: ge.HIDE
	}];

function gz(e) {
	const t = `./functions/${e}.tsx`,
		n = `./functions/${e}.jsx`,
		r = t_[t] ?? t_[n];
	return r ? r() : Promise.reject(new Error(`Function component not found: ${e}`))
}

function x$() {
	return _z.filter(({
		id: e
	}) => e === ge.HIDE ? !1 : !!yz(e).filter(({
		allowMiniApps: n,
		onlyExtension: r
	}) => !(Ft && !n || r && !co)).length).map(({
		id: e,
		icon: t
	}) => ({
		id: e,
		title: Xy[e].block_name,
		icon: t ? P.createElement(t, Qy) : null
	}))
}

function gp() {
	const e = [];
	return vz.forEach(t => {
		var c;
		if (Ft && !t.allowMiniApps || t.onlyExtension && !co) return;
		const n = t.id.split("_").map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(""),
			[r, ...o] = t.id.split("_"),
			i = o.join("_"),
			a = ((c = Xy[r]) == null ? void 0 : c.functions) ?? {};
		e.push({
			...t,
			id: t.id,
			name: t.name || a[i] || t.id,
			icon: t.icon && P.createElement(t.icon, Qy),
			component: t.isDisabled ? null : P.lazy(() => gz(n))
		})
	}), e.sort((t, n) => t.name < n.name ? -1 : t.name > n.name ? 1 : 0), e
}

function yz(e) {
	return gp().filter(t => t.categories.includes(e))
}

function wz(e) {
	return gp().find(({
		id: t
	}) => t === e)
}

function xz({
	id: e,
	onClose: t,
	modalData: n
}) {
	return n.type === "card" ? u.jsx(DT, {
		id: e,
		title: n.header && u.jsx(Mh, {
			after: _o() !== Dn.VKCOM && u.jsx(sd, {
				"aria-label": "close",
				onClick: t,
				children: u.jsx(Lh, {})
			}),
			children: n.header
		}),
		description: n.subheader,
		actions: n.actions,
		icon: n.icon,
		onClose: t,
		children: n.content
	}) : u.jsx(cp, {
		id: e,
		header: n.header && u.jsx(Mh, {
			after: _o() !== Dn.VKCOM && u.jsx(sd, {
				"aria-label": "close",
				onClick: t,
				children: u.jsx(Lh, {})
			}),
			children: n.header
		}),
		onClose: t,
		settlingHeight: 100,
		dynamicContentHeight: !0,
		children: n.content
	})
}
const Zy = "" + new URL("donut_avatar.jpg", import.meta.url).href,
	Hh = "https://vk.ru/tool42_app?w=donut_payment-173151748&source=tool42";

function S$({
	user: e
}) {
	const [t, n] = P.useState(!0), [r, o] = P.useState(!1);
	return P.useEffect(() => {
		!e || Yl || Ny().then(i => {
			o(i.hasPremium), n(!1)
		})
	}, [e]), Yl || !e || t || Ft ? null : u.jsx(is, {
		children: u.jsx(ny, {
			before: u.jsx(li, {
				size: 48,
				src: Zy
			}),
			extraSubtitle: fl("DonutBlock.description"),
			actions: u.jsxs(QT, {
				children: [!r && u.jsx(ka, {
					mode: "primary",
					size: "s",
					...Rh(Hh),
					children: fl("DonutBlock.get_subscription")
				}), r && u.jsx(ka, {
					mode: "link",
					size: "s",
					...Rh(Hh),
					children: fl("DonutBlock.manage_button")
				})]
			}),
			multiline: !0,
			children: fl("DonutBlock.title")
		})
	})
}

function Sz({
	id: e,
	onClose: t
}) {
	return u.jsxs(cp, {
		id: e,
		settlingHeight: 100,
		onClose: t,
		children: [u.jsx(yr, {
			title: "VK Donut",
			icon: u.jsx(li, {
				size: 64,
				src: Zy
			}),
			children: "Для разблокировки всех методов нужно оформить подписку VK Donut"
		}), u.jsx(ul, {
			style: {
				paddingTop: 0
			},
			children: u.jsx(ka, {
				size: "l",
				stretched: !0,
				mode: "secondary",
				href: Hh,
				target: "_blank",
				children: "Поддержать через VK Donut"
			})
		})]
	})
}
const Oo = Wd("PWAInstall");

function kz({
	id: e,
	onClose: t
}) {
	function n() {
		var o;
		const r = [];
		return _o() === Dn.IOS ? r.push(u.jsx(dr, {
			id: "share_ios",
			multiline: !0,
			before: u.jsx(_B, {}),
			children: Oo.rows.share_ios
		}, "share_ios"), u.jsx(dr, {
			id: "add_ios",
			multiline: !0,
			before: u.jsx($D, {}),
			children: Oo.rows.add_ios
		}, "add_ios")) : (r.push(u.jsx(dr, {
			id: "share_android",
			multiline: !0,
			before: u.jsx(aB, {}),
			children: Oo.rows.share_android
		}, "share_android")), (o = navigator.userAgent) != null && o.includes("YaBrowser") ? r.push(u.jsx(dr, {
			id: "add_android_yandex",
			multiline: !0,
			before: u.jsx(zv, {}),
			children: Oo.rows.add_android_yandex
		}, "add_android_yandex")) : r.push(u.jsx(dr, {
			id: "add_android",
			multiline: !0,
			before: u.jsx(zv, {}),
			children: Oo.rows.add_android
		}, "add_android"))), r.push(u.jsx(dr, {
			id: "confirm",
			multiline: !0,
			before: u.jsx(WD, {}),
			children: Oo.rows.confirm
		}, "confirm")), r
	}
	return u.jsxs(cp, {
		id: e,
		header: u.jsx(Mh, {
			after: _o() !== Dn.VKCOM && u.jsx(sd, {
				"aria-label": "close",
				onClick: t,
				children: u.jsx(Lh, {})
			}),
			children: Oo.header
		}),
		settlingHeight: 100,
		onClose: t,
		children: [u.jsx(yr, {
			icon: u.jsx(AB, {}),
			children: Oo.description
		}), u.jsx(n, {})]
	})
}
const bz = ua.lazy(() => xe(() => import("./Home.js"), __vite__mapDeps([162, 74, 75, 160, 96, 69, 152, 161, 5, 6, 1, 2, 163]), import.meta.url)),
	Cz = ua.lazy(() => xe(() => import("./HomeMA.js"), __vite__mapDeps([164, 163, 165]), import.meta.url)),
	Ez = ua.lazy(() => xe(() => import("./Method.js"), [], import.meta.url)),
	su = Wd("App"),
	hd = {
		reg: "account_reg_date",
		analysis: "wall_analysis",
		blacklists: "account_blacklists",
		handshakes: "friends_handshakes",
		tasks: "groups_tasks_constructor"
	},
	Az = Object.keys(hd).reduce((e, t) => (e[hd[t]] = t, e), {}),
	Iz = new ez({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: !1
			}
		}
	});
class Pz extends ua.Component {
	constructor(t) {
		super(t), this.actionSheetToggleRef = ua.createRef(), this.snackbarId = 0, this.componentDidMount = async () => {
			if (Ey(), El.deleteOld(), aD.deleteOld(), Ft) {
				await As.delete(), this.initMiniAppListeners();
				const n = Nr("VKWebAppGetConfig");
				n && typeof n.then == "function" && n.then(i => {
					i.appearance && hl(i.appearance)
				});
				const r = await Nr("VKWebAppGetUserInfo");
				Ne("user", r), window.userId = r.id;
				const o = {
					vkUserInfo: r,
					activeContent: "home"
				};
				await this.getFavorites(), this.setState(o), Nr("VKWebAppInit"), location.hash.slice(1) && this.checkHashForMethod()
			} else await this.initAppListeners(), co && await this.checkSession(), this.setState({
				activeContent: "home"
			}), co && this.checkHashForMethod()
		}, this.checkHashForMethod = () => {
			let n = location.hash.slice(1);
			if (hd[n] && (n = hd[n]), n) {
				if (n === "settings") {
					this.setHash("home");
					return
				}
				const r = wz(n);
				r && this.openMethod(r)
			}
		}, this.initAppListeners = () => {
			window.matchMedia("(prefers-color-scheme: dark)").matches ? hl("dark") : hl("light")
		}, this.initMiniAppListeners = () => {
			up.subscribe(n => {
				if (!n.detail || !n.detail.type) return;
				const {
					type: r,
					data: o
				} = n.detail;
				if (Ne("VK Connect", {
						type: r,
						data: o
					}), r === "VKWebAppUpdateConfig") {
					const i = o.scheme.includes("light");
					hl(i ? "light" : "dark")
				}
			})
		}, this.onAuthSuccess = async () => {
			await this.checkSession(), this.checkHashForMethod()
		}, this.getFavorites = async () => {
			const n = await x1.get("favorites-v2") || [];
			Ne("favorites", n);
			const r = gp().map(i => i.id),
				o = n.filter(i => !!r.includes(i));
			this.setState({
				favorites: o
			})
		}, this.setHash = n => {
			Ft ? Nr("VKWebAppSetLocation", {
				location: n
			}) : location.hash = n
		}, this.logout = async (n = !1) => {
			await As.delete(), window.userId = 0, this.setHash(""), setTimeout(() => {
				this.setState({
					activeContent: "home",
					vkUserInfo: null,
					selectedMethod: null,
					modalsHistory: [],
					favorites: [],
					modalData: {}
				})
			})
		}, this.showActionSheet = n => {
			this.setState({
				popout: u.jsx(oM, {
					onClose: this.onPopoutClose,
					iosCloseItem: u.jsx(Oh, {
						mode: "cancel",
						children: su.action.cancel
					}),
					toggleRef: this.actionSheetToggleRef,
					children: n.map(({
						name: r,
						mode: o,
						callback: i
					}, a) => u.jsx(Oh, {
						mode: o,
						onClick: i,
						children: r
					}, a))
				})
			})
		}, this.showLoading = () => {
			this.setState({
				popout: u.jsx(Fd, {
					state: "loading"
				})
			})
		}, this.showConfirm = (n, r, o, i) => {
			r || (r = su.action.accept), this.setState({
				popout: u.jsx(iO, {
					actions: [{
						title: su.action.cancel,
						mode: "cancel",
						action: () => i && i()
					}, {
						title: r,
						mode: "destructive",
						action: () => o()
					}],
					actionsLayout: "horizontal",
					onClose: () => {
						this.onPopoutClose()
					},
					title: n,
					description: su.popout_description
				})
			})
		}, this.onPopoutClose = () => {
			this.setState({
				popout: null
			})
		}, this.showModal = (n, r = {}) => {
			const o = [...this.state.modalsHistory];
			o.push(n), console.log("showModal", n, o), this.setState({
				activeModal: n,
				modalsHistory: o,
				modalData: r
			})
		}, this.onModalClose = () => {
			this.setState({
				activeModal: null
			})
		}, this.openMethod = async n => {
			this.setState({
				activeContent: "home"
			}), mz(n.id), El.deleteOld(), this.onModalClose();
			const r = Az[n.id] || n.id || "home";
			r.startsWith("hide") || this.setHash(r), this.setState({
				selectedMethod: n
			}), Ft ? this.getPermissions(n.scope) : co ? this.setState({
				activeContent: "method"
			}) : this.setState({
				activeContent: "method"
			})
		}, this.getPermissions = async (n = "") => {
			const r = await As.get();
			Ne("getPermissions", {
				scope: n
			});
			const o = n ? n.split(",").filter(Boolean) : [],
				i = (r == null ? void 0 : r.scopes) || [],
				a = n === "" || o.length > 0 && o.every(c => i.includes(c));
			if (r && r.accessToken && a) this.setState({
				activeContent: "method"
			});
			else {
				const c = Nr("VKWebAppGetAuthToken", {
					app_id: Number(Pn.vk_app_id),
					scope: n
				});
				c && typeof c.then == "function" && c.then(async d => {
					Ne("getAuthToken then", d), await As.set(d.access_token, d.scope), this.setState({
						activeContent: "method"
					})
				})
			}
		}, this.onBackButton = () => {
			this.state.backCallback && this.state.backCallback(), this.state.popout ? this.onPopoutClose() : this.state.activeModal ? this.onModalClose() : this.state.selectedMethod && (this.setState({
				activeContent: "home",
				selectedMethod: null
			}), this.setHash("home"))
		}, this.closeSnackbar = () => {
			this.setState(n => ({
				snackbarQueue: n.snackbarQueue.slice(1)
			}))
		}, this.showSnackbar = (n, r) => {
			const o = {
				"Rate limit reached": "К сожалению, вы попали в лимит запросов от ВКонтакте. К сожалению, мы никак не можем повлиять на эту ошибку. Можем лишь посоветовать попробовать запустить метод еще раз через сутки."
			};
			this.snackbarId += 1, this.setState(i => ({
				snackbarQueue: [...i.snackbarQueue, {
					id: this.snackbarId,
					text: o[n] || n,
					status: r
				}]
			}))
		}, this.onFavoriteClick = async () => {
			if (!this.state.selectedMethod) return;
			const n = this.state.selectedMethod.id;
			if (this.state.favorites.includes(n)) {
				const o = this.state.favorites.filter(i => i !== n);
				await x1.set("favorites-v2", o), this.setState({
					favorites: o
				})
			} else {
				const o = [...this.state.favorites, n];
				await x1.set("favorites-v2", o), this.setState({
					favorites: o
				})
			}
		}, this.checkSession = async () => {
			if (!await As.get() && !co) return;
			const r = await ql("account.getProfileInfo", {
				fields: "photo_200"
			});
			if (!r) {
				await this.logout(!0);
				return
			}
			window.userId = r.id, this.setState({
				vkUserInfo: r
			}), await this.getFavorites()
		}, this.Content = () => {
			const {
				activeContent: n
			} = this.state, r = {
				globalState: this.state,
				setGlobalState: this.setState.bind(this),
				showActionSheet: this.showActionSheet.bind(this),
				showConfirm: this.showConfirm.bind(this),
				showLoading: this.showLoading.bind(this),
				showModal: this.showModal.bind(this),
				onAuthSuccess: this.onAuthSuccess.bind(this),
				openMethod: this.openMethod.bind(this),
				onBackButton: this.onBackButton.bind(this),
				onModalClose: this.onModalClose.bind(this),
				onPopoutClose: this.onPopoutClose.bind(this),
				showSnackbar: this.showSnackbar.bind(this),
				logout: this.logout.bind(this),
				setHash: this.setHash.bind(this)
			};
			let o = null;
			return n === "loading" ? o = u.jsx(is, {
				children: u.jsx(yr, {
					children: u.jsx(od, {})
				})
			}) : n === "home" ? o = Ft ? u.jsx(Cz, {
				...r
			}) : u.jsx(bz, {
				...r
			}) : n === "method" && (o = u.jsx(Ez, {
				...r
			})), u.jsx(P.Suspense, {
				fallback: u.jsx(is, {
					style: {
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
						marginTop: -1
					},
					children: u.jsx(yr, {
						children: u.jsx(od, {})
					})
				}),
				children: o
			})
		}, this.state = {
			activeContent: "loading",
			appearance: "light",
			modalsHistory: [],
			favorites: [],
			vkUserInfo: null,
			popout: null,
			config: {},
			modalData: {},
			activeModal: null,
			selectedMethod: null,
			snackbarQueue: [],
			backCallback: null
		}, window.logs = [], window.modalErrors = [], window.incognitoStorage = {}, window.showSnackbar = this.showSnackbar.bind(this), window.showModal = this.showModal.bind(this), window.onModalClose = this.onModalClose.bind(this), window.logout = this.logout.bind(this), window.onBackButton = this.onBackButton.bind(this), window.isLocalStorageAvailable = !1;
		try {
			localStorage.setItem("check", "check"), localStorage.removeItem("check"), window.isLocalStorageAvailable = !0
		} catch (n) {
			Ne("localStorage error", String(n))
		}
		Ne("isLocalStorageAvailable", window.isLocalStorageAvailable), window.setAppearance = n => {
			this.setState({
				appearance: n
			})
		}, Ne("init url", window.location.href), Ne("initParams", Pn)
	}
	render() {
		const {
			popout: t,
			activeModal: n,
			snackbarQueue: r,
			appearance: o,
			modalData: i,
			activeContent: a,
			selectedMethod: c,
			favorites: d
		} = this.state, f = r[0] || null, m = _o(), _ = {
			modalData: i,
			onClose: this.onModalClose.bind(this)
		}, v = u.jsxs(gj, {
			activeModal: n,
			onClose: this.onModalClose.bind(this),
			onOpened: i.onOpened,
			children: [u.jsx(xz, {
				id: "custom",
				..._
			}), u.jsx(Sz, {
				id: "donut",
				..._
			}), u.jsx(kz, {
				id: "pwa",
				..._
			})]
		});
		return u.jsx(fy, {
			colorScheme: o,
			platform: m,
			children: u.jsx(dy, {
				children: u.jsx(nz, {
					client: Iz,
					children: u.jsx(g6, {
						children: u.jsxs(oI, {
							children: [t, v, u.jsx(mI, {
								maxWidth: 600,
								className: "AppContainer",
								children: u.jsx(mE, {
									activePanel: "app",
									children: u.jsxs(PE, {
										id: "app",
										children: [m === Dn.VKCOM && u.jsx(zd, {
											size: 20
										}), u.jsxs("div", {
											children: [u.jsx(az, {
												activeContent: a,
												selectedMethod: c || void 0,
												isFavorite: c ? d.includes(c.id) : !1,
												onBackButton: this.onBackButton,
												onFavoriteClick: this.onFavoriteClick
											}), this.Content(), u.jsx(iz, {}), f && u.jsx(W4, {
												onClose: this.closeSnackbar,
												duration: 5e3,
												before: f.status ? u.jsx(KD, {
													fill: "var(--vkui--color_icon_positive)"
												}) : u.jsx(XD, {
													fill: "var(--vkui--color_icon_negative)"
												}),
												children: f.text
											}, f.id)]
										})]
									})
								})
							})]
						})
					})
				})
			})
		})
	}
}

function Oz() {
	return u.jsx(fy, {
		platform: _o(),
		children: u.jsxs(dy, {
			children: [u.jsx(yr, {
				children: "К сожалению, VK ID работает некорректно во встроенном браузере ВКонтакте. Откройте проект во внешнем браузере."
			}), u.jsxs(dr, {
				multiline: !0,
				before: u.jsx(YD, {}),
				children: ["Откройте браузер на вашем устройстве, например ", u.jsx("b", {
					children: "Google Chrome"
				}), " или ", u.jsx("b", {
					children: "Safari"
				})]
			}), u.jsxs(dr, {
				multiline: !0,
				before: u.jsx(CB, {}),
				children: ["Введите в адресной строке браузера адрес: ", u.jsx("b", {
					children: "tool42.app"
				})]
			}), u.jsx(dr, {
				multiline: !0,
				before: u.jsx(JD, {}),
				children: "Радуйтесь и пользуйтесь проектом!"
			}), u.jsx(Ch, {
				vertical: "bottom",
				style: {
					bottom: 20
				},
				children: u.jsx(dr, {
					before: u.jsx(mB, {}),
					children: "Быстрое открытие браузера"
				})
			}), u.jsx(Ch, {
				vertical: "bottom",
				style: {
					right: 0,
					width: "auto",
					padding: 20,
					transform: "rotate(200deg)"
				},
				children: u.jsx(EB, {
					fill: "var(--vkui--color_icon_accent)"
				})
			})]
		})
	})
}
const n_ = "https://chromewebstore.google.com/detail/nncphlpcbkdenjngapbabbcommdljkmo/";

function Mz() {
	return ua.useEffect(() => {
		window.location.replace(n_)
	}, []), u.jsxs(yr, {
		title: "Tool 42 переехал в расширение",
		action: u.jsx(ka, {
			size: "l",
			onClick: () => window.location.assign(n_),
			children: "Открыть расширение"
		}),
		children: ["Сайт больше не поддерживает старый режим работы. Открой расширение Chrome, чтобы продолжить.", u.jsx(zd, {
			size: 16
		}), "Если переход не сработал автоматически, нажми на кнопку ниже."]
	})
}
var jz = {
	exports: {}
};
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(pn, function() {
		return {
			name: "en",
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			ordinal: function(n) {
				var r = ["th", "st", "nd", "rd"],
					o = n % 100;
				return "[" + n + (r[(o - 20) % 10] || r[o] || r[0]) + "]"
			}
		}
	})
})(jz);
pz();
Ma.extend(yL);
Ma.extend(_L);
Ma.extend(mL);
Ma.extend(hL);
Ma.extend(dL);
Ma.locale("ru");
if (location.hash.slice(1).match(/^debug\/\w+-\w+-\w+-\w+-\w+$/)) {
	const [, e] = location.hash.slice(1).split("/"), t = document.createElement("script");
	t.src = "https://remotejs.com/agent/agent.js", t.setAttribute("data-consolejs-channel", e), document.head.appendChild(t)
}
var f_, h_;
const Tz = !Ft && _o() === Dn.IOS && (((f_ = document.referrer) == null ? void 0 : f_.includes("away.vk.ru")) || ((h_ = document.referrer) == null ? void 0 : h_.includes("away.vk.com")));
by ? xu(document.getElementById("root")).render(P.createElement(Mz)) : Tz ? xu(document.getElementById("root")).render(P.createElement(Oz)) : xu(document.getElementById("root")).render(P.createElement(Pz));
export {
	Lr as $, li as A, ka as B, El as C, S$ as D, ql as E, R4 as F, is as G, gh as H, sd as I, Nr as J, We as K, te as L, Et as M, T4 as N, Kl as O, yr as P, Hn as Q, ua as R, we as S, wa as T, v4 as U, x1 as V, rt as W, Bb as X, Je as Y, qx as Z, xe as _, uD as a, Sm as a$, Mw as a0, et as a1, Ie as a2, si as a3, Sx as a4, Vx as a5, Sa as a6, Ef as a7, jx as a8, Fx as a9, y4 as aA, fo as aB, _n as aC, MO as aD, PD as aE, QT as aF, MD as aG, zd as aH, Ch as aI, KD as aJ, HD as aK, Rw as aL, gD as aM, _D as aN, Nz as aO, L_ as aP, K0 as aQ, Zi as aR, Ve as aS, M8 as aT, Lz as aU, Au as aV, WO as aW, Aj as aX, ED as aY, xy as aZ, rz as a_, Wr as aa, ex as ab, xa as ac, fa as ad, c4 as ae, r4 as af, My as ag, xD as ah, dd as ai, iO as aj, mD as ak, Ma as al, w$ as am, e9 as an, Pw as ao, n4 as ap, n9 as aq, jd as ar, Dz as as, zz as at, Bz as au, C1 as av, B_ as aw, jb as ax, jw as ay, Ow as az, dr as b, n8 as b0, $O as b1, z4 as b2, BC as b3, $C as b4, zC as b5, WC as b6, LC as b7, Wb as b8, $z as b9, Xz as bA, go as bB, Jz as bC, s$ as bD, i$ as bE, dy as bF, a$ as bG, l$ as bH, Hz as bI, Vz as bJ, t$ as bK, wk as bL, Qz as bM, Kz as bN, Wz as bO, $d as bP, Bw as bQ, Hd as bR, pD as ba, l4 as bb, Kt as bc, Qi as bd, Fz as be, Ei as bf, a4 as bg, ci as bh, pn as bi, xB as bj, yB as bk, Ck as bl, o$ as bm, qz as bn, Yz as bo, bk as bp, r$ as bq, n$ as br, p4 as bs, e$ as bt, Uz as bu, Sk as bv, Zz as bw, h4 as bx, Gz as by, kk as bz, aD as c, co as d, gp as e, x$ as f, Ny as g, yz as h, Ft as i, u as j, Rh as k, Wd as l, Ph as m, Hs as n, ul as o, hB as p, fB as q, P as r, Dh as s, nl as t, kB as u, qD as v, Ne as w, od as x, ny as y, Su as z
};