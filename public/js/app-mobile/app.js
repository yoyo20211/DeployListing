// Generated by IcedCoffeeScript 1.3.1b
(function() {

  define(['collection.data', 'view.detail'], function(Data, DetailView) {
    "use-strict";

    var init;
    init = function() {
      var MeListing;
      console.log("init");
      MeListing = window.MeListing || {};
      MeListing = {
        Model: {},
        View: {},
        Controller: {
          renderDetail: function(type, match, ui) {
            var params;
            if (!match) return;
            if (!MeListing.View.detail) {
              MeListing.View.detail = new DetailView({
                collection: MeListing.M.data,
                detailId: null,
                el: jQuery("#detail :jqmData(role='content')")
              });
            }
            params = MeListing.Controller.router.getParams(match[1]);
            if (params) MeListing.View.detail.options.detailId = params.id;
            if (MeListing.Model.data.isEmpty()) {
              return MeListing.Model.data.fetch();
            } else {
              return MeListing.View.detail.render();
            }
          },
          pageInit: function(type, match, ui, page) {
            return console.log("This page (" + jQuery(page).jqmData("url") + ") has been initialized");
          }
        }
      };
      return MeListing.Controller.router = new jQuery.mobile.Router([
        {
          "#localpage2(?:[?/](.*))?": {
            handler: "localpageA",
            events: "bc,c,i"
          }
        }, {
          "#localpage2(?:[?/](.*))?": {
            handler: "localpageB",
            events: "bs,s"
          }
        }, {
          "#localpage2(?:[?/](.*))?": {
            handler: "localpageC",
            events: "bh,h"
          }
        }, {
          "#index": {
            handler: function(type) {
              return console.log("Index has been ");
            },
            events: "h,s"
          }
        }
      ], {
        localpageA: function(type, match, ui) {
          var params;
          params = router.getParams(match[1]);
          console.log("localpage function A: " + type);
          return console.log(params);
        }
      }, {
        localpageB: function(type, match, ui) {
          var params;
          params = router.getParams(match[1]);
          console.log("localpage function B: " + type);
          return console.log(params);
        }
      }, {
        localpageC: function(type, match, ui) {
          var params;
          params = router.getParams(match[1]);
          console.log("localpage function C: " + type);
          return console.log(params);
        }
      }, {
        defaultHandler: function(type, ui, page) {
          return console.log("Default handler called due to unknown route (", +type + ", " + ui + ", " + page + ")");
        },
        defaultHandlerEvents: "s"
      });
    };
    jQuery('body').show();
    return {
      "init": init
    };
  });

}).call(this);
