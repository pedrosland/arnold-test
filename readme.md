# Arnold Test

This is a test project for Arnold.

## Running

To run the application in development mode:

    gulp serve

## Testing

To run Karma unit tests:

    gulp test

To run Protractor e2e tests:

    gulp protractor

## Comments

* This was my first time using [gulp-angular-generator][gulp-angular-generator] and I really like it.
* I got bogged down in SCSS and Foundation and wasted time on this. I need more practice with Foundation.
* I'm not sure how long it actually took me as I had several interruptions. I'd guess 5 hours.
* The circumstances surrounding image tags not loading I feel was a little contrived as in the real world there really should have been an API to return if these images exist and ideally their URLs. It does test a few things though so I imagine it is effective.
* The app could probably work better on mobile although it is responsive. Using gestures to swipe left/right through the thumbs would be nice.
* A progress spinner might help the user experience on a slow connection.


[gulp-angular-generator]: https://github.com/Swiip/generator-gulp-angular
