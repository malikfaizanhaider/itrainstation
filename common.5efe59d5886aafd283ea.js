(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{lkzL:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var s=t("K9Ia"),r=t("ny24"),i=(t("0xHB"),function(){function e(e,n,t){this._elementRef=e,this._absMediaMatchService=n,this._renderer=t,this._unsubscribeAll=new s.a}return e.prototype.ngOnInit=function(){var e=this;this._parent=this._renderer.parentNode(this._elementRef.nativeElement),this._parent&&(this._grandParent=this._renderer.parentNode(this._parent),this._absMediaMatchService.onMediaChange.pipe(Object(r.a)(this._unsubscribeAll)).subscribe((function(n){"xs"===n?e._removeClass():e._addClass()})))},e.prototype.ngOnDestroy=function(){this._parent&&(this._removeClass(),this._unsubscribeAll.next(),this._unsubscribeAll.complete())},e.prototype._addClass=function(){this._renderer.addClass(this._grandParent,"inner-scroll")},e.prototype._removeClass=function(){this._renderer.removeClass(this._grandParent,"inner-scroll")},e}())}}]);