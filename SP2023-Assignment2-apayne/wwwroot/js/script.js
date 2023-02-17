var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "50d18e11440c477db793d81abe5f61f1");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a id = i href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function changeColorJS() {
    $('#title').style.color = "red";
}

function searchJS() {
    apiSearch();
    $('#searchResults').style.visibility = "visible";
}

function feelingLuckyJS() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "50d18e11440c477db793d81abe5f61f1");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a id = i href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }

        window.location = data.webPages.value[0].url
        })
        .fail(function () {
            alert("error");
        });
}