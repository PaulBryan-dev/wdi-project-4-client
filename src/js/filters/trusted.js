angular
  .module("veeMail")
  .filter('trusted', trusted);

trusted.$inject = ["$sce"];
function trusted($sce) {
  // ng-src="{{ main.uploadedFile | trusted }}"
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}
