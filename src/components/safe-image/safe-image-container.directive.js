'use strict';

/**
 * @ngdoc directive
 * @name atSafeImageContainer
 * @module arnoldTest
 * @restrict A
 * @description
 *
 * Parent directive that keeps track of child `at-safe-image` directives.
 * This directive allows the template to be aware of the state of all of the `at-safe-image` directives.
 *
 * @example
 * ```html
 * <div at-safe-image-container data-all-images-failed="allImagesFailed" data-set-first-loaded-url="setFirstLoadedUrl"
 *   ng-if="!allImagesFailed">
 *
 *   <at-safe-image data-image-loaded="imageLoaded"></at-safe-image>
 *   <at-safe-image data-image-loaded="anotherImageLoaded"></at-safe-image>
 * </div>
 */
angular.module('arnoldTest')
  .directive('atSafeImageContainer', function(){

    function SafeImageContainerController($scope){
      var pending = 0;
      var total = 0;
      var success = 0;
      var images = [];

      /**
       * When the promise for an image resolves or rejects, update the state
       *
       * @param image {object}
       */
      function imageLoaded(image){
        pending--;

        if(image.loaded === true){
          success++;
        }

        updateScope();
      }

      /**
       * Update scope variables
       */
      function updateScope(){
        $scope.allImagesFailed = pending === 0 && success === 0;

        for(var i=0; i<images.length; i++){
          if(images[i].pending === true){
            break;
          }

          if(images[i].loaded === true) {
            $scope.setFirstLoadedUrl(images[i].src);
            break;
          }
        }
      }

      /**
       * Register image with directive.
       *
       * Called by at-safe-image directive.
       *
       * @param image   {object}  Image object
       * @param promise {Promise} Promise that will resolve or reject when the image loads or fails
       */
      this.registerImage = function(image, promise){
        pending++;
        total++;

        images.pending = true;

        promise.finally(imageLoaded.bind(this, image));

        images.push(image);
      };

      /**
       * Deregister image with directive.
       *
       * Called by at-safe-image directive.
       *
       * @param image {object} Image object
       */
      this.deregisterImage = function(image){
        total--;

        if(images.pending === true){
          pending--;
        }

        if(images.loaded === true){
          success--;
        }

        images.splice(images.indexOf(this, image), 1);
      };
    }

    return {
      restrict: 'A',
      controller: SafeImageContainerController,
      scope: {
        allImagesFailed: '=allImagesFailed',
        setFirstLoadedUrl: '=setFirstLoadedUrl'
      }
    };

  });
