 (function () {
  // get acces token from returned url after user logs in
  var returned_url = window.location.hash.substr(1);
  var hash = returned_url.split("&");
  var accessToken = hash[0].split("=")[1] || 0;
  if (!accessToken.length) { return };

  // follow LEFTI
  var artist_params = { type:'artist', ids:'7o5gxy3lEGcP62TNIppa7w' };
  var artist_string = $.param( artist_params);

  $.ajax({
    method: "PUT",
    url: "https://api.spotify.com/v1/me/following?" + artist_string,
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },

  })

  // follow LEFTI playlists
  var playlist_params = { owner_id:'leftimusic',  playlist_id:'0tKgx2aY7uBvjfvwR51gk0' };
  var playlist_string = $.param( playlist_params );

  $.ajax({
    method: "PUT",
    url: "https://api.spotify.com/v1/users/leftimusic/playlists/0tKgx2aY7uBvjfvwR51gk0/followers?",
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
  })


  // follow yebomusic
  var yebo_params = { type:'user',  ids:'yebomusic' };
  var yebo_string = $.param( yebo_params );

  $.ajax({
    method: "PUT",
    url: "https://api.spotify.com/v1/me/following?" + yebo_string,
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },

  })

  // follow yebo_music
  var yebo_params = { type:'user',  ids:'yebo_music' };
  var yebo_string = $.param( yebo_params );

  $.ajax({
    method: "PUT",
    url: "https://api.spotify.com/v1/me/following?" + yebo_string,
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },

  })

  // follow y-fi
  var yfi_params = { type:'user',  ids:'y-fimusic' };
  var yfi_string = $.param( yfi_params );

  $.ajax({
    method: "PUT",
    url: "https://api.spotify.com/v1/me/following?" + yfi_string,
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },

  })

  // follow y-fi playlist by y-fi
  var playlist_params = { owner_id:'y-fimusic',  playlist_id:'4GQiVimCXdLp8DrBRqrrrX' };
  var playlist_string = $.param( playlist_params );

  $.ajax({
    method: "PUT",
    url: "https://api.spotify.com/v1/users/y-fimusic/playlists/4GQiVimCXdLp8DrBRqrrrX/followers?",
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },

  })

// follow YEBO Music playlist by yebo_music

  var playlist_params = { owner_id:'yebo_music',  playlist_id:'5XRn5ZNPfEMgTkUqO7frgD' };
  var playlist_string = $.param( playlist_params );

  $.ajax({
    method: "PUT",
    url: "https://api.spotify.com/v1/users/yebo_music/playlists/5XRn5ZNPfEMgTkUqO7frgD/followers?",
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    },
  })


  // remove disabled class on download button
  $(function() {
        if(window.location.hash) {
          $(".download-button").addClass("hidden")
      } 
  });

  $(function() {
        if(window.location.hash) {
          $(".track-download").append("<a href='/content/LEFTI\ -\ City\ Heart.mp3' download><button><img src='/img/download-white.png' width='20px' style='width: 20px; padding-right: 15px;'>FREE DOWNLOAD</button></a>");
      } 
  });

 $(function() {
        if(window.location.hash) {
          $(".connect-button").addClass("hidden")
      } 
  });

 $(function() {
        if(window.location.hash) {
          $(".connected-button").removeClass("hidden")
      } 
  });

 }())