'use strict';

/**
 * @ngdoc directive
 * @name atSafeImage
 * @module arnoldTest
 * @restrict E
 * @requires atSafeImageContainer
 * @description
 *
 * Adds image to the DOM and tracks its loaded/error state and reports this to the parent `at-safe-image-container`
 * directive.
 *
 * @example
 * ```html
 * <div at-safe-image-container>
 *   <at-safe-image data-src="'https://example.com/image.jpg'" data-image-loaded="imageLoaded"></at-safe-image>
 *   <at-safe-image data-src="imageUrl" data-image-loaded="anotherImageLoaded"></at-safe-image>
 * </div>
 */
angular.module('arnoldTest')
  .directive('atSafeImage', function($q){

    return {
      restrict: 'E',
      require: '^atSafeImageContainer',
      scope: {
        src: '=src',
        imageLoaded: '=imageLoaded'
      },
      link: function(scope, elem, attr, container){
        var deferred = $q.defer();

        scope.imageLoaded = false;

        // Use object for holding state because Image doesn't provide enough info.
        var object = {
          src: scope.src,
          pending: true,
          loaded: false
        };

        function imageLoaded(e){
          object.pending = false;

          if(e.type === 'load'){
            scope.imageLoaded = true;
            object.loaded = true;
            deferred.resolve();
          }else{
            object.loaded = false;
            deferred.reject();
          }
        }

        // Create image and attach event listeners
        var image = new Image();
        image.addEventListener('load', imageLoaded, false);
        image.addEventListener('error', imageLoaded, false);
        image.alt = attr.alt;
        image.src = scope.src;

        // Register with container directive
        container.registerImage(object, deferred.promise);

        // Add image to DOM
        elem.append(image);

        // Tidy up
        scope.$on('$destroy', function(){
          image.removeEventListener('load', imageLoaded, false);
          image.removeEventListener('error', imageLoaded, false);

          container.deregisterImage(object);
        });
      }
    };

  });
