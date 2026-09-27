function go(id){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-links button').forEach(function(b){
    b.classList.toggle('active', b.dataset.p===id);
  });
  window.scrollTo(0,0);
  history.replaceState(null,'','#'+id);
}
(function(){
  var h=location.hash.replace('#','');
  var valid=['intro','about','focus','services','recognition','contact'];
  if(valid.indexOf(h)!==-1){ go(h); } else { go('intro'); }
})();