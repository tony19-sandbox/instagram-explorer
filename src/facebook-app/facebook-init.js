window.fbAsyncInit = function() {
  FB.init({
    appId      : '629300660585645',
    xfbml      : false,
    version    : 'v2.8'
  }, {scope: 'public_profile,email,user_friends'});
  document.dispatchEvent(new Event('fb-init'));
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));